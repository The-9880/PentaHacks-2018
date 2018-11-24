import sqlite3
from sys import argv

id = argv[1]
deposit = argv[2]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in asset info
connect.execute("UPDATE assetInfo SET Deposit = :deposit WHERE ID = :id", {'deposit': deposit, 'id': id})

connect.commit()

connect.close()