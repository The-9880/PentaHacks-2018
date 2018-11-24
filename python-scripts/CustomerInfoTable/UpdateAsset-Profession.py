import sqlite3
from sys import argv

id = argv[1]
profession = argv[9]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in asset info
connect.execute("UPDATE assetInfo SET Profession = :profession WHERE ID = :id", {'profession': profession, 'id': id})

connect.commit()

connect.close()