import json

from flask import request
from flask_cors import CORS

from app import app, db
from app.controllers import user_controller, kanban_controller, project_controller
from app.models import UserInProject, User, Project

cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.get('/users')
def users():
    return user_controller.get_all(db)


@app.route('/user', methods=['GET', 'POST', 'PUT', 'DELETE'])
def user():
    try:
        if request.data:
            data: dict = json.loads(request.data)
            if request.method == 'POST':
                return user_controller.post(db, data)
            elif request.method == 'DELETE':
                return user_controller.delete(db, data)
            elif request.method == 'PUT':
                return user_controller.update(db, data)
            return user_controller.get(db, data)
        raise AttributeError
    except AttributeError:
        return 'body does not contain data'


@app.get('/projects')
def projects():
    return project_controller.get_all(db)


@app.route('/project', methods=['GET', 'POST'])
def project():
    try:
        if request.data:
            data: dict = json.loads(request.data)
            if request.method == 'GET':
                return project_controller.get(db, data)
            elif request.method == 'POST':
                return project_controller.post(db, data)
        raise AttributeError
    except AttributeError:
        return 'body does not contain data'


@app.post('/projectsByUser')
def projects_by_user():
    data: dict = json.loads(request.data)
    q_user = db.session.query(User).filter_by(email=data['email']).first()
    if q_user is None:
        raise AttributeError
    user_in_project = db.session.query(UserInProject).filter_by(user_id=q_user.id).all()
    projectByUser = []
    for i in user_in_project:
        q_project = db.session.query(Project).filter_by(id=i.project_id).first()
        q_users_in_project = db.session.query(UserInProject).filter_by(project_id=i.project_id).all()
        user_id_list = []
        for j in q_users_in_project:
            q_user = db.session.query(User).filter_by(id=j.user_id).first()
            user_id_list.append({
                'username': q_user.username,
                'email': q_user.email,
            })
        projectByUser.append({
            'name': q_project.name,
            'history': q_project.history,
            'users': user_id_list
        })
    return {
        'projects': projectByUser
    }

# TODO: Add model, controllers and routes to kanban
@app.route('/kanban', methods=['GET'])
def kanban():
    json_data: dict = json.loads(request.data)
    return kanban_controller.get(db, json_data)
