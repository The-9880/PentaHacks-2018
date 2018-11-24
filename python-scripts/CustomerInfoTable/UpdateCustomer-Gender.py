import sqlite3
from sys import argv

id = argv[1]
gender = argv[6]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in customer info
connect.execute("UPDATE customerInfo SET Gender = :gender WHERE ID = :id", {'gender': gender, 'id': id})

connect.commit()

connect.close()