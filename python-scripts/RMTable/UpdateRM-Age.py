import sqlite3
from sys import argv

id = argv[1]
age = argv[4]

connect = sqlite3.connect('RMDatabase.db')

#Update value in RM info
connect.execute("UPDATE RMInfo SET Age = :age WHERE ID = :id", {'age': age, 'id': id})

connect.commit()

connect.close()