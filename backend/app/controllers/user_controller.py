from sqlalchemy.exc import IntegrityError, NoResultFound, InvalidRequestError

from app.models import User


def get_all(db):
    raw_users = db.session.query(User).all()
    users = {}
    for user in raw_users:
        users[user.id] = {
            "username": user.username,
            "email": user.email,
            "password": user.password,
        }
    return users


def get(db, data: dict):
    try:
        user = db.session.query(User).filter_by(email=data['email']).first()
        if user is None:
            raise NoResultFound
        if 'email' not in data:
            raise AttributeError
        if user.password != data['password']:
            raise InvalidRequestError
        return {
                   'name': user.username,
                   'email': user.email,
               }, 200
    except AttributeError:
        return {'message': 'Bad Request'}, 400
    except NoResultFound:
        return {'message': 'No results'}, 404
    except InvalidRequestError:
        return {'message': 'Wrong password'}, 400


def post(db, data: dict):
    try:
        if 'type' not in data:
            raise AttributeError
        # Sign In
        if data['type'] == 'login':
            user = db.session.query(User).filter_by(email=data['email']).first()
            if user is None:
                raise NoResultFound
            if 'email' not in data:
                raise AttributeError
            if user.password != data['password']:
                raise InvalidRequestError
            return {
                       'name': user.username,
                       'email': user.email,
                   }, 200
        # Sign Up
        if data['type'] == 'signUp':
            if 'email' not in data or 'username' not in data or 'password' not in data:
                raise AttributeError
            user = User(username=data['username'], email=data['email'], password=data['password'])
            db.session.add(user)
            db.session.commit()
            return {
                       'name': user.username,
                       'email': user.email,
                   }, 200
    except IntegrityError:
        return {'message': 'Username or email already exist'}, 400
    except AttributeError:
        return {'message': 'Bad Request'}, 400

# TODO improve update with validations to update only needed
def update(db, data):
    try:
        if 'email' not in data or 'username' not in data or 'password' not in data:
            raise AttributeError
        user = db.session.query(User).filter_by(email=data['email']).first()
        user.username = data['username']
        user.password = data['password']
        db.session.commit()
        return {
                   'name': user.username,
                   'email': user.email,
               }, 200
    except IntegrityError:
        return {'message': 'Username or email already exist'}, 400
    except AttributeError:
        return {'message': 'Bad Request'}, 400


def delete(db, data):
    try:
        user = db.session.query(User).filter_by(email=data['email']).first()
        if user is None:
            raise NoResultFound
        if 'email' not in data:
            raise AttributeError
        if user.password != data['password']:
            raise InvalidRequestError
        db.session.delete(user)
        db.session.commit()
        return {'message': f'User {user.username} {user.email} deleted'}, 200
    except AttributeError:
        return {'message': 'Bad Request'}, 400
    except NoResultFound:
        return {'message': 'No results'}, 404
    except InvalidRequestError:
        return {'message': 'Wrong password'}, 400
