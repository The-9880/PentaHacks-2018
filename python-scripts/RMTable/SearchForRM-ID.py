import sqlite3, json
from sys import argv

id = argv[1]

connect = sqlite3.connect('RMDatabase.db')

#Tuple of one RM
RM = connect.execute("SELECT * FROM RMInfo WHERE ID = :id", {'id': id}).fetchone()

connect.close()

print(json.dumps(RM))