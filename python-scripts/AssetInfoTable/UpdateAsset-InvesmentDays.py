import sqlite3
from sys import argv

id = argv[1]
investment_days = argv[7]

connect = sqlite3.connect('CustomerDatabase.db')

#Update value in asset info
connect.execute("UPDATE assetInfo SET InvestmentLengthDays = :investment_days WHERE ID = :id", {'investment_days': investment_days, 'id': id})

connect.commit()

connect.close()