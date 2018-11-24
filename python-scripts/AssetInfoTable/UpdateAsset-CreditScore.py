import sqlite3
from sys import argv

id = argv[1]
credit_score = argv[3]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in asset info
connect.execute("UPDATE assetInfo SET CreditScore = :credit_score WHERE ID = :id", {'credit_score': credit_score, 'id': id})

connect.commit()

connect.close()