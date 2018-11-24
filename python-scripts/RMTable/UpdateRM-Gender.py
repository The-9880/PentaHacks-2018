import sqlite3
from sys import argv

id = argv[1]
gender = argv[6]

connect = sqlite3.connect('RMDatabase.db')

#Update value in RM info
connect.execute("UPDATE RMInfo SET Gender = :gender WHERE ID = :id", {'gender': gender, 'id': id})

connect.commit()

connect.close()