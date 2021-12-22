# https://docs.python.org/3/library/datetime.html
from datetime import datetime
# https://docs.python.org/2/library/collections.html#collections.Counter
from collections import Counter


class SimpleReport:
    def generate(data):
        manufacturing_date = []

        nearest_expiration_date = []
        date_now = datetime.now().strftime("%Y/%M/%D")

        companies = []

        for element in data:
            if element["data_de_fabricacao"]:
                manufacturing_date.append(element["data_de_fabricacao"])
            if element["data_de_validade"] > date_now:
                nearest_expiration_date.append(element["data_de_validade"])
            if element["nome_da_empresa"]:
                companies.append(element["nome_da_empresa"])

        # Fiz dessa forma devido devido ao número caracxtéres por linha
        counter = Counter(companies)
        result = max(counter)

        messages = [
            f"Data de fabricação mais antiga: {min(manufacturing_date)}\n",
            f"Data de validade mais próxima: {min(nearest_expiration_date)}\n",
            f"Empresa com maior quantidade de produtos estocados: {result}\n",
        ]

        return "".join(messages)
