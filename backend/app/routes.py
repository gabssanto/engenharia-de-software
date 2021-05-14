from flask import render_template
from app import app, db
from app.models import User


@app.route('/')
@app.route('/index')
def index():
    raw_users = db.session.query(User).all()
    users = {}
    for user in raw_users:
        users[user.id] = {
            "username": user.username,
            "email": user.email,
        }
    return users


@app.post('/')
def user_post():
    name = 'admin1'
    email = 'admin1@example.com'
    me = User(username=name, email=email)
    db.session.add(me)
    db.session.commit()
    return f'User created with name:{name} and email:{email}'

