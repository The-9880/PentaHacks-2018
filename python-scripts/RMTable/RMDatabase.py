import sqlite3, json

connect = sqlite3.connect('RMDatabase.db')

# connect.execute("""CREATE TABLE RMInfo (
#                 ID INTEGER,
#                 Password BLOB,
#                 Name TEXT,
#                 Age INTEGER,
#                 Race TEXT,
#                 Gender TEXT,
#                 Language TEXT,
#                 ClientList TEXT,
#                 ExperienceDays INTEGER,
#                 ExpectedWorkDays INTEGER
#                 )""")
connect.commit()

def insert_RM_info(id, password, name, age, race, gender, language, clients, experience_days, work_days):
    connect.execute("INSERT INTO RMInfo VALUES (:id, :password, :name, :age, :race, :gender, :language, :clients, :experience_days, :work_days)", 
                    {'id': id, 'password': password, 'name': name, 'age': age, 'race': race, 'gender': gender, 
                    'language': language, 'clients': clients, 'experience_days': experience_days, 'work_days': work_days})
    connect.commit()

def insert_new_client(id, new_client):
    old_clients = connect.execute("SELECT ClientList FROM RMInfo WHERE ID = :id", {'id': id}).fetchone()

    connect.execute("UPDATE RMInfo SET ClientList = :new_clients WHERE ID = :id", {'new_clients': "" + old_clients[0] + ", " + new_client, 'id': id})
    connect.commit()

def search_for_RM_by_id(id):
    return json.dumps(connect.execute("SELECT * FROM RMInfo WHERE ID = :id", {'id': id}).fetchall())

def list_of_all():
    return connect.execute("SELECT * FROM RMInfo").fetchall()

def all_RM_info_to_JSON():
    RM_list = []
    RM_strings = []

    for RM in list_of_all():
        RM_list.append({
            "ID": RM[0],
            "Password": RM[1],
            "Name": RM[2],
            "Age": RM[3],
            "Race": RM[4],
            "Gender": RM[5],
            "Language": RM[6],
            "ClientList": RM[7],
            "ExperienceDays": RM[8],
            "ExpectedWorkDays": RM[9]
        })
    for RM in RM_list:
        RM_strings.append(json.dumps(RM, indent=2))
    return RM_strings






#insert_RM_info(2, "1234", "Fland", 18, "Asian", "Male", "English", "Bob", 365, 700)
#insert_new_client(1,"David")
print(search_for_RM_by_id(2))
#print(all_RM_info_to_JSON()[0])
connect.close()