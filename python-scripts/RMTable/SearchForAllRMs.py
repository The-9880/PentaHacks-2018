import sqlite3
from sys import argv

connect = sqlite3.connect('RMDatabase.db')

#All customers
list_of_RMs = connect.execute("SELECT * FROM RMInfo").fetchall()

connect.close()

print(list_of_RMs)