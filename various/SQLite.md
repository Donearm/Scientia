### Exporting tables to csv

```SQL
sqlite3 databasefile
> .output outfile.csv
> .mode csv
> .header on
> select * from table;
> .quit
```
