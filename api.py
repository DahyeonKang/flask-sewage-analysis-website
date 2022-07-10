import pandas as pd
import numpy as np

import json
import xmltodict
import urllib
from urllib.request import urlopen
from urllib.parse import urlencode, unquote, quote_plus

import datetime
from datetime import timedelta


class load_data():
    def __init__(self):
        self.url = "http://opendata.kwater.or.kr/openapi-data/service/pubd/sewerage/waterQuality/day/list?"
        self.serviceKey = "yR%2Bloy28kXA0ULzW1u08U8dH3xFQJQkn8hPdCLm0fk00uHrBQS9HVMc%2BjeI9wGglQS0pDLmj%2BI4scJbb0nCxoQ%3D%3D"
        self.days = 60
        self.numofrows = 150
        self.edDt = datetime.date.today()
        self.stDt = self.edDt - timedelta(days=self.days)
        self.n = ['bBac', 'bBod', 'bCod', 'bSs', 'bTn', 'bTp', 'bVal', 'loccd', 'locnm', 'temper', 'uBac', 'uBod', 'uCod',
             'uSs', 'uTn', 'uTp', 'uVal', 'weather', 'wqdt', 'wtemper']

    def param(self, loccd):
        params = '?' + urlencode({
            quote_plus('serviceKey'): self.serviceKey,
            quote_plus('numOfRows'): self.numofrows,
            quote_plus('pageNo'): "1",
            quote_plus('stDt'): self.stDt,
            quote_plus('edDt'): self.edDt,
            quote_plus('loccd'): loccd
        })
        return params

    def make_dateframe(self, params, locnm):
        req = urllib.request.Request(self.url + unquote(params))
        response_body = urlopen(req).read()
        decode_data = response_body.decode('utf-8')
        xml_parse = xmltodict.parse(decode_data)
        xml_dict = json.loads(json.dumps(xml_parse))
        try:
            rawdata = list(xml_dict['response']['body']['items'].values())
        except AttributeError:
            return

        df_temp = []

        for date in [i for i in range(0, self.numofrows)]:
            temp = []
            for name in self.n:
                try:
                    if rawdata[0][date][name] == None:
                        temp.append(0)
                except KeyError:
                    temp.append(None)
                except IndexError:
                    temp.append(None)
                else:
                    temp.append(rawdata[0][date][name])
            df_temp.append(temp)

        df = pd.DataFrame(data=np.array(df_temp), columns=self.n)
        df = df.dropna(how='all')
        df = df[df['locnm'] != locnm]
        df.set_index('wqdt', inplace=True)
        return df

    def merge_function(self, locnm, loccd):
        try:
            params = self.param(loccd)
            return self.make_dateframe(params, locnm).to_html(show_dimensions=True)
        except AttributeError:
            return 0

    def data_4710_aas(self):
        return self.merge_function("아산", "4710")

    def data_42730_dn(self):
        return self.merge_function("둔내", "42730")

    def data_42730_wh(self):
        return self.merge_function("우항", "42730")

    def data_47000_ys(self):
        return self.merge_function("연서", "47000")

    def data_47750_ad(self):
        return self.merge_function("안덕", "47750")

    def data_47850_ym(self):
        return self.merge_function("약목", "47850")

    def data_47850_wg(self):
        return self.merge_function("왜관", "47850")

    def data_48000_ng(self):
        return self.merge_function("능곡", "48000")

    def data_48000_sh(self):
        return self.merge_function("시화", "48000")
