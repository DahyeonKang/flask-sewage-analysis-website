from flask import Flask, render_template
from api import load_data

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/시각화')
def plant():
    return render_template('home2.html')


@app.route('/과거의 수치')
def past():
    return render_template('past.html')


@app.route('/최근의 수치')
def present():
    api = load_data()
    aas = api.data_4710_aas()
    dn = api.data_42730_dn()
    wh = api.data_42730_wh()
    ys = api.data_47000_ys()
    ad = api.data_47750_ad()
    ym = api.data_47850_ym()
    wg = api.data_47850_wg()
    ng = api.data_48000_ng()
    sh = api.data_48000_sh()
    # print("아산:\n", aas, "둔내:\n", dn, "우항:\n", wh, "연서:\n", ys, "안덕:\n", ad, "안목:\n", ym, "왜관:\n", wg, "능곡:\n", ng, "시화:\n", sh)
    return render_template('present.html', aas=aas, dn=dn, wh=wh, ys=ys, ad=ad, ym=ym, wg=wg, ng=ng, sh=sh)


@app.route('/미래의 수치')
def future():
    return render_template('future.html')


@app.route('/하수처리시설')
def area():
    return render_template('plant.html')


@app.route('/방류수질기준')
def standard():
    return render_template('standard.html')


@app.route('/우리는')
def info():
    return render_template('contributer.html')


@app.route('/landing')
def landing():
    return render_template('landing.html')


@app.route('/elements')
def elements():
    return render_template('elements.html')


if __name__ == "__main__":
    app.run()
