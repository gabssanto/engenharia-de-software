import json

from flask import request

from app import app, db
from app.controllers import user_controller, kanban_controller


@app.get('/users')
def users():
    return user_controller.get_all(db)


@app.route('/user', methods=['GET', 'POST', 'UPDATE', 'DELETE'])
def user():
    data: dict = json.loads(request.data)
    if request.method == 'POST':
        return user_controller.post(db, data)
    if request.method == 'DELETE':
        return user_controller.delete(db, data)
    return user_controller.get(db, data)


# TODO: Add model, controllers and routes to kanban
@app.route('/kanban', methods=['GET'])
def kanban():
    json_data: dict = json.loads(request.data)
    return kanban_controller.get(db, json_data)
