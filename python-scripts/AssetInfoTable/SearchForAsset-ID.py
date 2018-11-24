import sqlite3, json
from sys import argv

id = argv[1]

connect = sqlite3.connect('CustomerDatabase.db')

#Return a tuple
asset = connect.execute("SELECT * FROM assetInfo WHERE ID = :id", {'id': id}).fetchone()

connect.close()

print(json.dumps(asset))