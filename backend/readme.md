# TL;DR

More practical way to do everything:
```
❯ flask db init
❯ flask db migrate -m {{message}}
❯ flask db upgrade                 
```

Create db

```
>>> import db from app
>>> db.create_all()
```

Add items to db

```
>>> from app import {{model}}
>>> admin = User(username='admin', email='admin@example.com')
>>> guest = User(username='guest', email='guest@example.com')

>>> db.session.add(admin)
>>> db.session.add(guest)
>>> db.session.commit()
```

Do a query
```
>>> User.query.all()
```

Drop DB

```
db.drop_all()
```
