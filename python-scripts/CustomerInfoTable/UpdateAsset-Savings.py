import sqlite3
from sys import argv

id = argv[1]
savings = argv[4]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in asset info
connect.execute("UPDATE assetInfo SET Savings = :savings WHERE ID = :id", {'savings': savings, 'id': id})

connect.commit()

connect.close()