import sqlite3
from sys import argv

#Customer ID and Asset ID are the same value for each customer

id = argv[1]
deposit = argv[2]
credit_score = argv[3]
savings = argv[4]
risk_level = argv[5]
collateral = argv[6]
investment_days = argv[7]
salary = argv[8]
profession = argv[9]

connect = sqlite3.connect('CustomerDatabase.db')


connect.execute("INSERT INTO assetInfo VALUES (:id, :deposit, :credit_score, :savings, :risk_level, :collateral, :investment_days, :salary, :profession)", 
                {'id': id, 'deposit': deposit, 'credit_score': credit_score, 'savings': savings, 'risk_level': risk_level, 
                'collateral': collateral, 'investment_days': investment_days, 'salary': salary, 'profession': profession})

connect.commit()

connect.close()

