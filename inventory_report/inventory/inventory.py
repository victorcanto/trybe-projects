import csv
import json
import xml.etree.ElementTree as ET

from inventory_report.reports.complete_report import CompleteReport
from inventory_report.reports.simple_report import SimpleReport


class Inventory:
    __report_functions = {
        "simples": SimpleReport.generate,
        "completo": CompleteReport.generate,
    }

    def import_data(file_path, report_type):
        content = []

        if file_path.endswith(".csv"):
            with open(file_path) as csvfile:
                reader = csv.DictReader(csvfile)
                content = [row for row in reader]

        elif file_path.endswith(".json"):
            with open(file_path, "r") as file:
                content = json.load(file)

        elif file_path.endswith(".xml"):
            tree = ET.parse(file_path)
            root = tree.getroot()
            content = [
                {el.tag: el.text for el in record}
                for record in root.findall("record")
            ]

        else:
            raise ValueError("Arquivo inválido")
        return Inventory.__report_functions[report_type](content)
