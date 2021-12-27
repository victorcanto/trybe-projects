from inventory_report.reports.simple_report import SimpleReport
from collections import Counter

# How to return dictionary keys as a list in Python?
# https://stackoverflow.com/questions/16819222/
# how-to-return-dictionary-keys-as-a-list-in-python


class CompleteReport(SimpleReport):
    def generate(data):
        initial_report = SimpleReport.generate(data)

        companies = []
        for element in data:
            companies.append(element["nome_da_empresa"])

        # Se cada objeto possui somente 1 empresa e 1 produto,
        # a quantidade de empresas repetidas representa a quantidade
        # de produtos em estoque já que não informa em números.
        counter = Counter(companies)
        # Quebrando o Counter
        chaves = list(counter.keys())
        valores = list(counter.values())

        length = len(valores)
        i = 0

        result = []
        while i < length:
            result.append(f'- {chaves[i]}: {valores[i]}\n')
            i += 1

        extended_report = '\nProdutos estocados por empresa: \n'

        return initial_report + extended_report + "".join(result)
