import sqlite3
from sys import argv

id = argv[1]
risk_level = argv[5]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in asset info
connect.execute("UPDATE assetInfo SET RiskLevel = :risk_level WHERE ID = :id", {'risk_level': risk_level, 'id': id})

connect.commit()

connect.close()