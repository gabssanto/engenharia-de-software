from sqlalchemy.exc import IntegrityError, NoResultFound, InvalidRequestError

from app.models import Project, UserInProject, User


def get_all(db):
    raw_projects = db.session.query(Project).all()
    projects = {}
    for project in raw_projects:
        raw_users_in_project = db.session.query(UserInProject).filter_by(project_id=project.id)
        users = []
        for raw_user_in_project in raw_users_in_project:
            user = db.session.query(User).filter_by(id=raw_user_in_project.user_id).first()
            users.append({
                "username": user.username,
                "email": user.email,
            })

        projects[project.id] = {
            "id": project.id,
            "name": project.name,
            "history": project.history,
            "users": users
        }
    return projects


def get(db, data: dict):
    return 'hello world', 200


def post(db, data: dict):
    try:
        if 'type' not in data or 'name' not in data or 'email' not in data:
            raise AttributeError
        if data['type'] != 'create' and data['type'] != 'enter':
            raise InvalidRequestError
        if data['type'] == 'create':
            project = Project(history='', name=data['name'])
            db.session.add(project)
            db.session.commit()
            user = db.session.query(User).filter_by(email=data['email']).first()
            if user is None:
                raise AttributeError
            user_in_project = UserInProject(user_id=user.id, project_id=project.id)
            db.session.add(user_in_project)
            db.session.commit()
            return {'message': 'Project Created'}, 200
        project = db.session.query(Project).filter_by(name=data['name']).first()
        user = db.session.query(User).filter_by(email=data['email']).first()
        user_joined =  db.session.query(UserInProject).filter_by(user_id=user.id, project_id=project.id).first()
        if user_joined is None:
            user_in_project = UserInProject(user_id=user.id, project_id=project.id)
            db.session.add(user_in_project)
            db.session.commit()
            return {'message': 'Entered in Project'}, 200
        return {'message': 'Success'}
    except IntegrityError:
        return {'message': 'Project Name must be unique or User already in Project'}
    except AttributeError:
        return {'message': 'Bad Request'}, 400
    except InvalidRequestError:
        return {'message': 'Incorrect Type'}, 400

