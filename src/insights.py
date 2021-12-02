from src import jobs


def get_unique_job_types(path):
    jobs_list = jobs.read(path)
    unique_job_types = set()
    for job in jobs_list:
        unique_job_types.add(job["job_type"])
    return list(unique_job_types)


def filter_by_job_type(jobs, job_type):
    filtered_job_type = []
    for job in jobs:
        if job["job_type"] == job_type:
            filtered_job_type.append(job)

    return filtered_job_type


def get_unique_industries(path):
    jobs_list = jobs.read(path)
    unique_industries = set()
    for job in jobs_list:
        if job["industry"]:
            unique_industries.add(job["industry"])
    return list(unique_industries)


def filter_by_industry(jobs, industry):
    filtered_industry = []
    for job in jobs:
        if job["industry"] == industry:
            filtered_industry.append(job)

    return filtered_industry


def get_max_salary(path):
    jobs_list = jobs.read(path)
    salaries = []
    for job in jobs_list:
        if job["max_salary"] and job["max_salary"] != "invalid":
            salaries.append(int(job["max_salary"]))
            print(salaries)
    return max(salaries)


def get_min_salary(path):
    jobs_list = jobs.read(path)
    salaries = []
    for job in jobs_list:
        if job["min_salary"] and job["min_salary"] != "invalid":
            salaries.append(int(job["min_salary"]))
    return min(salaries)


def matches_salary_range(job, salary):
    """Checks if a given salary is in the salary range of a given job

    Parameters
    ----------
    job : dict
        The job with `min_salary` and `max_salary` keys
    salary : int
        The salary to check if matches with salary range of the job

    Returns
    -------
    bool
        True if the salary is in the salary range of the job, False otherwise

    Raises
    ------
    ValueError
        If `job["min_salary"]` or `job["max_salary"]` doesn't exists
        If `job["min_salary"]` or `job["max_salary"]` aren't valid integers
        If `job["min_salary"]` is greather than `job["max_salary"]`
        If `salary` isn't a valid integer
    """
    pass


def filter_by_salary_range(jobs, salary):
    """Filters a list of jobs by salary range

    Parameters
    ----------
    jobs : list
        The jobs to be filtered
    salary : int
        The salary to be used as filter

    Returns
    -------
    list
        Jobs whose salary range contains `salary`
    """
    return []
