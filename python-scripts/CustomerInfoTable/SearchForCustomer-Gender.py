import sqlite3,json
from sys import argv

gender = argv[6]

connect = sqlite3.connect('CustomerDatabase.db')

#List of all customers
list_of_customers = connect.execute("SELECT * FROM customerInfo WHERE Gender = :gender", {'gender': gender}).fetchall()

connect.close()

def all_cust_info_to_JSON():
    customer_list = []
    customer_strings = []

    for customer in list_of_customers():
        customer_list.append({
            "ID": customer[0],
            "Password": customer[1],
            "Name": customer[2],
            "Age": customer[3],
            "Race": customer[4],
            "Gender": customer[5],
            "Language": customer[6]
        })

    for customer in customer_list:
        customer_strings.append(json.dumps(customer, indent=2))
    return customer_strings

print(all_cust_info_to_JSON())