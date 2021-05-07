from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text

app = Flask(__name__)

app.secret_key = b'\xac\xd7\xcbHB\xb4\x10\xfc\x06\xa0\x0c z\xb2\xd0\xe9'

# change to name of your database; add path if necessary
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)


@app.route('/')
def index():
    return 'index'


@app.route('/user')
def user():
    return 'user'


""" def testdb():
    try:
        db.session.query(text('1')).from_statement(text('SELECT 1')).all()
        return '<h1>It works.</h1>'
    except Exception as e:
        # e holds description of the error
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text """


@app.route('/kanban', methods=['POST', 'GET'])
def kanban():
    if request.method == 'POST':
        return request.json
    return 'get it'


if __name__ == '__main__':
    app.run(debug=True)
