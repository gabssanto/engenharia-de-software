from datetime import datetime
from backend.app import db

userInProject = db.Table('userInProject',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('projeto_id', db.Integer, db.ForeignKey('projeto.id'), primary_key=True),
    db.Column('permissao_id', db.Integer, db.ForeignKey('permissao.id'), primary_key=True)
)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password = db.Column(db.String(128))
    inPermission = db.relationship('permissao', secondary=userInProject, lazy='subquery',
                                   backref=db.backref('permUser', lazy='dynamic'))
    inProject = db.relationship('projeto', secondary=userInProject, lazy='subquery',
                                backref=db.backref('projectUser', lazy='dynamic'))

    def __repr__(self):
        return '<User {}>'.format(self.username)


class permissao(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    moderator = db.Column(db.Boolean, index=True)
    add_user = db.Column(db.String(64))
    Remove_user = db.Column(db.String(64))

    def __repr__(self):
        return '<perm {}>'.format(self.moderator)


class projeto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    chats = db.relationship('chat', backref='projeto', lazy=True)

    def __repr__(self):
        return '<projeto {}>'.format(self.id)


class chat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    historico = db.Column(db.String(45), index=True)
    projeto_id = db.Column(db.Integer, db.ForeignKey('projeto.id'),
                           nullable=False)


class Kanban(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    KanbanItens = db.relationship('kanbanItem', backref='kanban', lazy=True)

    def __repr__(self):
        return '<Kanban {}>'.format(self.body)


class kanbanItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(45), nullable=False)
    descricao = db.Column(db.Text, index=True)
    posicao = db.Column(db.String(10))
    kanban_id = db.Column(db.Integer, db.ForeignKey('kanban.id'),
                          nullable=False)

    def __repr__(self):
        return '<Kanban {}>'.format(self.body)
