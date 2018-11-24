import sqlite3
from sys import argv

id = argv[1]
language = argv[7]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in customer info
connect.execute("UPDATE customerInfo SET Language = :language WHERE ID = :id", {'language': language, 'id': id})

connect.commit()

connect.close()