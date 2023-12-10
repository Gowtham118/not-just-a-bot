# TEST PLAY GROUND 

import requests

url = "https://li.quest/v1/chains"

headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)

print(response.text)