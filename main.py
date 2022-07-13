from flask import Flask, render_template

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


if __name__ == "__main__":
    app.run()
