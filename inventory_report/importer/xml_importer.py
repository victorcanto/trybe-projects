# Feito pela minha dupla: Victor Canto

import xml.etree.ElementTree as ET
from inventory_report.importer.importer import Importer


class XmlImporter(Importer):
    def import_data(file_path):
        if file_path.endswith(".xml"):
            tree = ET.parse(file_path)
            root = tree.getroot()
            return [
                {el.tag: el.text for el in record}
                for record in root.findall("record")
            ]
        raise ValueError("Arquivo inválido")


# source ref: https://docs.python.org/3/library/xml.etree.elementtree.html
