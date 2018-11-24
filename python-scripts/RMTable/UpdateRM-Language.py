import sqlite3
from sys import argv

id = argv[1]
language = argv[7]

connect = sqlite3.connect('RMDatabase.db')

#Update value in RM info
connect.execute("UPDATE RMInfo SET Language = :language WHERE ID = :id", {'language': language, 'id': id})

connect.commit()

connect.close()