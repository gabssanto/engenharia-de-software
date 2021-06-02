from datetime import datetime
from app import db


class UserInProject(db.Model):
    __tablename__ = 'userInProject'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    permission_id = db.Column(db.Integer, db.ForeignKey('permission.id'))


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password = db.Column(db.String(128))
    userInProject = db.relationship('UserInProject', backref=db.backref('userInProject', uselist=False))

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Permission(db.Model):
    __tablename__ = 'permission'
    id = db.Column(db.Integer, primary_key=True)
    moderator = db.Column(db.Boolean, index=True)
    add_user = db.Column(db.String(64))
    Remove_user = db.Column(db.String(64))

    def __repr__(self):
        return '<perm {}>'.format(self.moderator)


class Project(db.Model):
    __tablename__ = 'project'
    id = db.Column(db.Integer, primary_key=True)
    chats = db.relationship('Chat', backref=db.backref('chat', uselist=False), lazy=True)

    def __repr__(self):
        return '<Project {}>'.format(self.id)


class Chat(db.Model):
    __tablename__ = 'chat'
    id = db.Column(db.Integer, primary_key=True)
    history = db.Column(db.String(), index=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'),
                           nullable=False)


class Kanban(db.Model):
    __tablename__ = 'kanban'
    id = db.Column(db.Integer, primary_key=True)
    kanban_items = db.relationship('KanbanItem', backref=db.backref('kanban', uselist=False), lazy=True)

    def __repr__(self):
        return '<Kanban {}>'.format(self.body)


class KanbanItem(db.Model):
    __tablename__ = 'kanbanItem'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(45), nullable=False)
    description = db.Column(db.Text, index=True)
    position = db.Column(db.String(10))
    kanban_id = db.Column(db.Integer, db.ForeignKey('kanban.id'),
                          nullable=False)

    def __repr__(self):
        return '<Kanban {}>'.format(self.body)
