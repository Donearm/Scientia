## Basic CLI commands

* `show dbs` = list all databases
* `db` = show current database
* `use dbname` = select database `dbname`

## CRUD commands

* `db.users.save({ name: 'Joe' });` = save the document `name` into the `users` collection. Multiple entries can be entered with a single command with an array.
* `db.users.find();` = show everything in `users`.
* `db.users.find({ name: 'Mike' });` = find in `users` an user with name Mike.
* `db.users.update({ name: 'Mike' }, { name: 'Viktor' });` = update user Mike with Viktor.
* `db.users.remove();` = delete all entries in `users`.
