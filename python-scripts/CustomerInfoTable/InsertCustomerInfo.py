import sqlite3
from sys import argv

id = argv[1]
password = argv[2]
name = argv[3]
age = argv[4]
race = argv[5]
gender = argv[6]
language = argv[7]

connect = sqlite3.connect('CustomerDatabase.db')

connect.execute("INSERT INTO customerInfo VALUES (:id, :password, :name, :age, :race, :gender, :language)", 
                {'id': id, 'password': password, 'name': name, 'age': age, 'race': race, 'gender': gender, 'language': language})

connect.commit()

connect.close()

