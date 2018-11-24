import sqlite3
from sys import argv

id = argv[1]
race = argv[5]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in customer info
connect.execute("UPDATE customerInfo SET Race = :race WHERE ID = :id", {'race': race, 'id': id})

connect.commit()

connect.close()