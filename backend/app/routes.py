import json

from flask import request

from app import app, db
from app.controllers import user_controller, kanban_controller


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        return user_controller.post(db)
    return user_controller.get(db)


# TODO: Add model, controllers and routes to kanban
@app.route('/kanban', methods=['GET'])
def kanban():
    json_data: dict = json.loads(request.data)
    return kanban_controller.get(db, json_data)
