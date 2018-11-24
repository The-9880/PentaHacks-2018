import sqlite3
from sys import argv

id = argv[1]
password = argv[2]
name = argv[3]
age = argv[4]
race = argv[5]
gender = argv[6]
language = argv[7]
clients = argv[8]
experience_days = argv[9]
work_days = argv[10]

connect = sqlite3.connect('RMDatabase.db')


connect.execute("INSERT INTO RMInfo VALUES (:id, :password, :name, :age, :race, :gender, :language, :clients, :experience_days, :work_days)", 
                {'id': id, 'password': password, 'name': name, 'age': age, 'race': race, 'gender': gender, 
                'language': language, 'clients': clients, 'experience_days': experience_days, 'work_days': work_days})
connect.commit()

connect.close()