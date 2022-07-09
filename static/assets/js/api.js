var xhr = new XMLHttpRequest();
var url = 'http://opendata.kwater.or.kr/openapi-data/service/pubd/sewerage/waterQuality/day/list'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'yR%2Bloy28kXA0ULzW1u08U8dH3xFQJQkn8hPdCLm0fk00uHrBQS9HVMc%2BjeI9wGglQS0pDLmj%2BI4scJbb0nCxoQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('stDt') + '=' + encodeURIComponent('2022-09-01'); /**/
queryParams += '&' + encodeURIComponent('edDt') + '=' + encodeURIComponent('2019-09-30'); /**/
queryParams += '&' + encodeURIComponent('loccd') + '=' + encodeURIComponent('90002'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');