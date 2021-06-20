import json

from app.models import Kanban


def post(db, data: dict):
    try:
        q_kanban = db.session.query(Kanban).filter_by(project_id=data['id']).first()
        if data['type'] == 'get' and q_kanban is not None:
            return q_kanban.kanban_items
        if data['type'] == 'post':
            if q_kanban is None:
                kanban = Kanban(project_id=data['id'], kanban_items=data['items'])
                db.session.add(kanban)
                db.session.commit()
                return {'something': kanban.__repr__()}
            q_kanban.kanban_items = json.dumps(data['items'])
            db.session.commit()
            return {
                'items': q_kanban.kanban_items,
                # 'newItems': newItems
            }
        return 'error'
    except AttributeError:
        return {'message': 'Bad Request'}, 400

