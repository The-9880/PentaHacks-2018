import sqlite3, json
from sys import argv

savings = argv[4]

connect = sqlite3.connect('CustomerDatabase.db')

#List of all asset info
list_of_asset = connect.execute("SELECT * FROM assetInfo WHERE Savings = :savings", {'savings': savings}).fetchall()

connect.close()

def all_asset_info_to_JSON():
    asset_list = []
    asset_strings = []

    for asset in list_of_asset():
        asset_list.append({
            "ID": asset[0],
            "Deposit": asset[1],
            "CreditScore": asset[2],
            "Savings": asset[3],
            "RiskLevel": asset[4],
            "CollateralValue": asset[5],
            "InvestmentLengthDays": asset[6],
            "Salary": asset[7],
            "Profession": asset[8]
        })
    for asset in asset_list:
        asset_strings.append(json.dumps(asset, indent=2))
    return asset_strings

print(all_asset_info_to_JSON())