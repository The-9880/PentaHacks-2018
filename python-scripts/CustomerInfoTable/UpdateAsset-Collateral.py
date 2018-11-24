import sqlite3
from sys import argv

id = argv[1]
collateral = argv[6]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in asset info
connect.execute("UPDATE assetInfo SET CollateralValue = :collateral WHERE ID = :id", {'collateral': collateral, 'id': id})

connect.commit()

connect.close()