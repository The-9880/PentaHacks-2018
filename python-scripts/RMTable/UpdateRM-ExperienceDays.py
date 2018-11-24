import sqlite3
from sys import argv

id = argv[1]
experience_days = argv[9]

connect = sqlite3.connect('RMDatabase.db')

#Update value in RM info
connect.execute("UPDATE RMInfo SET ExperienceDays = :experience_days WHERE ID = :id", {'experience_days': experience_days, 'id': id})

connect.commit()

connect.close()