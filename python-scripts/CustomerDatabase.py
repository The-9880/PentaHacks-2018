import sqlite3, json

connect = sqlite3.connect('CustomerDatabase.db')

connect.execute('''CREATE TABLE customerInfo (
                ID INTEGER PRIMARY KEY,
                Password BLOB,
                Name TEXT,
                Age INTEGER,
                Race TEXT,
                Gender TEXT,
                Language TEXT
                )''')


connect.execute('''CREATE TABLE assetInfo (
                ID INTEGER,
                Deposit REAL,
                CreditScore REAL,
                Savings REAL,
                RiskLevel REAL,
                CollateralValue REAL,
                InvestmentLengthDays REAL,
                Salary REAL,
                Profession TEXT
                )''')
connect.commit()
#Insert asset information
def insert_asset_info(id, deposit, credit_score, savings, risk_level, collateral, investment_days, salary, profession):
    connect.execute("INSERT INTO assetInfo VALUES (:id, :deposit, :credit_score, :savings, :risk_level, :collateral, :investment_days, :salary, :profession)", 
                    {'id': id, 'deposit': deposit, 'credit_score': credit_score, 'savings': savings, 'risk_level': risk_level, 
                    'collateral': collateral, 'investment_days': investment_days, 'salary': salary, 'profession': profession})
    connect.commit()
def insert_customer_info(id,password, name, age, race, gender, language):
    connect.execute("INSERT INTO customerInfo VALUES (:id, :password, :name, :age, :race, :gender, :language)", 
                {'id': id, 'password': password, 'name': name, 'age': age, 'race': race, 'gender': gender, 'language': language})
    connect.commit()
def list_of_all():
    return connect.execute("SELECT * FROM customerInfo").fetchall()

def list_of_ids():
    return connect.execute("SELECT ID FROM customerInfo").fetchall()

def search_for_customer_by_id(id):
    return connect.execute("SELECT * FROM customerInfo WHERE ID = :id", {'id': id}).fetchone()

def all_cust_info_to_JSON():
    customer_list = []
    customer_strings = []

    for customer in list_of_all():
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

print(insert_customer_info(1,"1234","Fland",18,"Asian","Male", "English"))
print(insert_customer_info(2,"12345","Bob",25,"Indian","Male", "English"))
print(insert_customer_info(3,"123334","Janet",35,"White","Female", "English"))
print(search_for_customer_by_id(1))
insert_asset_info(5,20,20,20,20,20,20,20,"Doctor")
# ID INTEGER,
# #                 Deposit REAL,
# #                 CreditScore REAL,
# #                 Savings REAL,
# #                 RiskLevel REAL,
# #                 CollateralValue REAL,
# #                 InvestmentLengthDays REAL,
# #                 Salary REAL,
# #                 Profession TEXT,
connect.close()