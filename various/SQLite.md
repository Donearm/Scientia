### Exporting tables to csv

	sqlite3 databasefile
	> .output outfile.csv
	> .mode csv
	> .header on
	> select * from table;
	> .quit
