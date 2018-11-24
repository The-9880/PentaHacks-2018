import sqlite3
from sys import argv

id = argv[1]
race = argv[5]

connect = sqlite3.connect('RMDatabase.db')

#Update value in RM info
connect.execute("UPDATE RMInfo SET Race = :race WHERE ID = :id", {'race': race, 'id': id})

connect.commit()

connect.close()