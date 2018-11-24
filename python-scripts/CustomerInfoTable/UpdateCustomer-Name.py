import sqlite3
from sys import argv

id = argv[1]
name = argv[3]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in customer info
connect.execute("UPDATE customerInfo SET Name = :name WHERE ID = :id", {'name': name, 'id': id})

connect.commit()

connect.close()