import sqlite3,json
from sys import argv

experience_days = argv[9]

connect = sqlite3.connect('RMDatabase.db')

#List of all RMs
list_of_RMs = connect.execute("SELECT * FROM RMInfo WHERE ExperienceDays = :experience_days", {'experience_days': experience_days}).fetchall()

connect.close()

def all_RM_info_to_JSON():
    RM_list = []
    RM_strings = []

    for RM in list_of_RMs:
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

print(all_RM_info_to_JSON())