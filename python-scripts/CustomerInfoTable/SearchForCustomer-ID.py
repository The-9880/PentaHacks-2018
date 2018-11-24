import sqlite3,json
from sys import argv

id = argv[1]

connect = sqlite3.connect('CustomerDatabase.db')

#Return a tuple
customer = connect.execute("SELECT * FROM customerInfo WHERE ID = :id", {'id': id})
names= list(map(lambda x: x[0], customer.description))
customer = customer.fetchone()

x = {}
for r in range(7):
    x[names[r]] = customer[r]

connect.close()

print(json.dumps(x))