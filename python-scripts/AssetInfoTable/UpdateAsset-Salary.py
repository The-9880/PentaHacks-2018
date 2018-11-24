import sqlite3
from sys import argv

id = argv[1]
salary = argv[8]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in asset info
connect.execute("UPDATE assetInfo SET Salary = :salary WHERE ID = :id", {'salary': salary, 'id': id})

connect.commit()

connect.close()