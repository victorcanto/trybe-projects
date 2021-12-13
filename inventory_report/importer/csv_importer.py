import csv
from inventory_report.importer.importer import Importer


class CsvImporter(Importer):
    def import_data(file_path):
        if file_path.endswith(".csv"):
            with open(file_path) as csvfile:
                reader = csv.DictReader(csvfile)
                return [row for row in reader]
        raise ValueError("Arquivo inválido")
