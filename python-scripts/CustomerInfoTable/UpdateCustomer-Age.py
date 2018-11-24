import sqlite3
from sys import argv

id = argv[1]
age = argv[4]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in customer info
connect.execute("UPDATE customerInfo SET Age = :age WHERE ID = :id", {'age': age, 'id': id})

connect.commit()

connect.close()