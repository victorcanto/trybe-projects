from src.sorting import sort_by
import pytest


jobs = [
    {
        "min_salary": 5000,
        "max_salary": 10000,
        "date_posted": "07-05-2021",
    },
    {
        "min_salary": 500,
        "max_salary": 1000,
        "date_posted": "19-03-2019",
    },
    {
        "min_salary": 2000,
        "max_salary": 4000,
        "date_posted": "15-03-2020",
    },
]


expected_jobs_sorted_by_min_salary = [
    {
        "min_salary": 500,
        "max_salary": 1000,
        "date_posted": "19-03-2019",
    },
    {
        "min_salary": 2000,
        "max_salary": 4000,
        "date_posted": "15-03-2020",
    },
    {
        "min_salary": 5000,
        "max_salary": 10000,
        "date_posted": "07-05-2021",
    },
]

expected_jobs_sorted_by_max_salary = [
    {
        "min_salary": 5000,
        "max_salary": 10000,
        "date_posted": "07-05-2021",
    },
    {
        "min_salary": 2000,
        "max_salary": 4000,
        "date_posted": "15-03-2020",
    },
    {
        "min_salary": 500,
        "max_salary": 1000,
        "date_posted": "19-03-2019",
    },
]

expected_jobs_sorted_by_date_posted = [
    {
        "min_salary": 5000,
        "max_salary": 10000,
        "date_posted": "07-05-2021",
    },
    {
        "min_salary": 2000,
        "max_salary": 4000,
        "date_posted": "15-03-2020",
    },
    {
        "min_salary": 500,
        "max_salary": 1000,
        "date_posted": "19-03-2019",
    },
]


def test_sort_by_criteria():
    sort_by(jobs, "min_salary")
    assert jobs == expected_jobs_sorted_by_min_salary

    sort_by(jobs, "max_salary")
    assert jobs == expected_jobs_sorted_by_max_salary

    sort_by(jobs, "date_posted")
    assert jobs == expected_jobs_sorted_by_date_posted

    invalid_criteria = "invalid_criteria"

    with pytest.raises(
        ValueError, match=f"invalid sorting criteria: {invalid_criteria}"
    ):
        sort_by(jobs, invalid_criteria)
