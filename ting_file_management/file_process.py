from ting_file_management.file_management import txt_importer
import sys


def check_file_already_exists(path_file, instance):
    for i in range(len(instance)):
        return instance.search(i)["nome_do_arquivo"] == path_file


def process(path_file, instance):
    content = txt_importer(path_file)

    file_exists = check_file_already_exists(path_file, instance)

    if not file_exists:
        processed = {
            "nome_do_arquivo": path_file,
            "qtd_linhas": len(content),
            "linhas_do_arquivo": content,
        }

        instance.enqueue(processed)
        sys.stdout.write(str(processed))


def remove(instance):
    """Aqui irá sua implementação"""


def file_metadata(instance, position):
    """Aqui irá sua implementação"""
