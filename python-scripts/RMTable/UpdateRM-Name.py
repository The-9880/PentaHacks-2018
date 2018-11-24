import sqlite3
from sys import argv

id = argv[1]
name = argv[3]

connect = sqlite3.connect('RMDatabase.db')

#Update value in RM info
connect.execute("UPDATE RMInfo SET Name = :name WHERE ID = :id", {'name': name, 'id': id})

connect.commit()

connect.close()