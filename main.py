from flask import Flask, render_template
# import socket
# from api.load_data import

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/하수처리장')
def plant():
    return render_template('home2.html')


@app.route('/과거의 수치')
def past():
    return render_template('past.html')


@app.route('/오늘의 수치')
def present():
    # api = load_data()
    # aas = api.data_4710_as()
    # dn = api.data_42730_dn()
    # wh = api.data_42730_wh()
    # ad = api.data_47750_ad()
    # ys = api.data_47000_ys()
    # og = api.data_47850_og()
    # om = api.data_47850_om()
    # ng = api.data_48000_ng()
    # sh = api.data_48000_sh()
    return render_template('present.html')#, aas=aas) # dn, wh, ad, ys, og, om, ng, sh]


@app.route('/미래의 수치')
def future():
    return render_template('future.html')


@app.route('/화학성분')
def chemical():
    return render_template('generic.html')


@app.route('/지역')
def area():
    return render_template('area.html')


@app.route('/landing')
def landing():
    return render_template('landing.html')


@app.route('/elements')
def elements():
    return render_template('elements.html')


if __name__ == "__main__":
    # app.run(host=socket.gethostbyname(socket.gethostname()), debug=True)
    # app.run(host='0.0.0.0', port=5000, debug=True)
    # app.run(port=5000, debug=True)
    app.run()
