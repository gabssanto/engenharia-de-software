# TL;DR

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

Drop DB

```
db.drop_all()
```
