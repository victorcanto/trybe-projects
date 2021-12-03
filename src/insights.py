from src import jobs


def get_unique_job_types(path):
    jobs_list = jobs.read(path)
    unique_job_types = set()
    for job in jobs_list:
        unique_job_types.add(job["job_type"])
    return list(unique_job_types)


def filter_by_job_type(jobs, job_type):
    filtered_jobs = []
    for job in jobs:
        if job["job_type"] == job_type:
            filtered_jobs.append(job)

    return filtered_jobs


def get_unique_industries(path):
    jobs_list = jobs.read(path)
    unique_industries = set()
    for job in jobs_list:
        if job["industry"]:
            unique_industries.add(job["industry"])
    return list(unique_industries)


def filter_by_industry(jobs, industry):
    filtered_jobs = []
    for job in jobs:
        if job["industry"] == industry:
            filtered_jobs.append(job)

    return filtered_jobs


def salary_is_valid(salary):
    return True if salary and salary.isnumeric() else False


def get_max_salary(path):
    jobs_list = jobs.read(path)
    salaries = []
    for job in jobs_list:
        if salary_is_valid(job["max_salary"]):
            salaries.append(int(job["max_salary"]))
    return max(salaries)


def get_min_salary(path):
    jobs_list = jobs.read(path)
    salaries = []
    for job in jobs_list:
        if salary_is_valid(job["min_salary"]):
            salaries.append(int(job["min_salary"]))
    return min(salaries)


def matches_salary_range(job, salary):
    if (
        "min_salary" not in job
        or "max_salary" not in job
        or type(job["min_salary"]) is not int
        or type(job["max_salary"]) is not int
        or job["min_salary"] > job["max_salary"]
        or type(salary) is not int
    ):

        raise ValueError("Invalid Values")

    return True if job["min_salary"] <= salary <= job["max_salary"] else False


def filter_by_salary_range(jobs, salary):
    filtered_jobs = []
    for job in jobs:
        try:
            if matches_salary_range(job, salary):
                filtered_jobs.append(job)
        except ValueError:
            pass

    return filtered_jobs
