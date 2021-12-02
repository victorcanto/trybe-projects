from functools import lru_cache

import csv


@lru_cache
def read(path):
    with open(path) as jobs_file:
        jobs = csv.DictReader(jobs_file)
        jobs_list = []
        for job in jobs:
            jobs_list.append(job)

        return jobs_list


if __name__ == "__main__":
    read("./src/jobs.csv")
