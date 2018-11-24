import sqlite3
from sys import argv

id = argv[1]
work_days = argv[10]

connect = sqlite3.connect('RMDatabase.db')

#Update value in RM info
connect.execute("UPDATE RMInfo SET ExpectedWorkDays = :work_days WHERE ID = :id", {'work_days': work_days, 'id': id})

connect.commit()

connect.close()