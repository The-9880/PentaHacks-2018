import sqlite3, json
import sys
from sys import argv

connect = sqlite3.connect('CustomerDatabase.db')

#All customers
list_of_customers = connect.execute("SELECT * FROM customerInfo").fetchall()

connect.close()

def all_cust_info_to_JSON():
    customer_list = []
    customer_strings = []

    for customer in list_of_customers:
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

print(json.dumps(all_cust_info_to_JSON()))