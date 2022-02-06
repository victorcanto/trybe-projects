# import sys


def create_processed_file(word, filename, occurrences):
    return {
        "palavra": word,
        "arquivo": filename,
        "ocorrencias": occurrences,
    }


def create_occurrence(line, line_pos, with_content):
    return (
        {"linha": line_pos, "conteudo": line}
        if with_content
        else {"linha": line_pos}
    )


def get_occurrences(content, word, with_content):
    lines = content["linhas_do_arquivo"]
    occurrences = []

    for i in range(len(lines)):
        if word.lower() in lines[i].lower():
            occurrences.append(
                create_occurrence(lines[i], i + 1, with_content)
            )

    return occurrences


def check_word_existence(word, instance, with_content=False):
    processed_files = []

    for i in range(len(instance)):
        content = instance.search(i)
        filename = content["nome_do_arquivo"]
        occurrences = get_occurrences(content, word, with_content)
        if occurrences:
            processed_files.append(
                create_processed_file(word, filename, occurrences)
            )

    return processed_files


def exists_word(word, instance):
    processed_files = check_word_existence(word, instance)
    return processed_files


def search_by_word(word, instance):
    processed_files = check_word_existence(word, instance, True)
    return processed_files
