from datetime import datetime
from app import db


class UserInProject(db.Model):
    __tablename__ = 'userInProject'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True)
    moderator = db.Column(db.Boolean, index=True, default=False)
    email = db.Column(db.String(120), index=True, unique=True)
    password = db.Column(db.String(128))
    userInProject = db.relationship('UserInProject', backref=db.backref('userInProject', uselist=False))

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Project(db.Model):
    __tablename__ = 'project'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True)
    history = db.Column(db.String(), index=True)

    def __repr__(self):
        return '<Project {}>'.format(self.chats)


class Kanban(db.Model):
    __tablename__ = 'kanban'
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, unique=True)
    kanban_items = db.Column(db.String)

    def __repr__(self):
        return '<Kanban {}>'.format(self.kanban_items)
