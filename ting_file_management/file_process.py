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
    try:
        removed = instance.dequeue()
        path_file = removed["nome_do_arquivo"]
        sys.stdout.write(f"Arquivo {path_file} removido com sucesso\n")

    except IndexError:
        sys.stdout.write("Não há elementos\n")


def file_metadata(instance, position):
    try:
        sys.stdout.write(str(instance.search(position)))
    except IndexError:
        sys.stderr.write("Posição inválida\n")
