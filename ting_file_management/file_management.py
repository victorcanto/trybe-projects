import sys


def txt_importer(path_file):
    if not path_file.endswith(".txt"):
        sys.stderr.write("Formato inválido\n")

    try:
        f = open(path_file, "r")
        line_list = f.read().split("\n")
        f.close()
        return line_list

    except FileNotFoundError:
        sys.stderr.write(f"Arquivo {path_file} não encontrado\n")
