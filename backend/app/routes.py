from flask import request

from app import app, db
import app.controllers.user_controller as user_controller


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        return user_controller.post(db)
    return user_controller.get(db)


@app.route('/kanban', methods=['GET'])
def kanban():
    return 'kanban'