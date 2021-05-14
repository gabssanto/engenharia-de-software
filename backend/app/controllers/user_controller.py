from app.models import User


def get(db):
    raw_users = db.session.query(User).all()
    users = {}
    for user in raw_users:
        users[user.id] = {
            "username": user.username,
            "email": user.email,
        }
    return users


def post(db):
    name = 'admin1'
    email = 'admin1@example.com'
    me = User(username=name, email=email)
    try:
        db.session.add(me)
        db.session.commit()
        return f'User created with name:{name} and email:{email}'
    except:
        return 'Username or email already exist', 400
