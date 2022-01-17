from tech_news.database import search_news
from datetime import datetime


def transform_news_data(news):
    return [(new["title"], new["url"]) for new in news]


def check_date(date):
    try:
        datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        raise ValueError("Data inválida")


def case_insensitive_query(field, value):
    return {field: {"$regex": value, "$options": "i"}}


# Requisito 6
def search_by_title(title):
    news = search_news(case_insensitive_query("title", title))
    return transform_news_data(news)


# Requisito 7
def search_by_date(date):
    check_date(date)
    news = search_news({"timestamp": {"$regex": date}})
    return transform_news_data(news)


# Requisito 8
def search_by_source(source):
    news = search_news(case_insensitive_query("sources", source))
    return transform_news_data(news)


# Requisito 9
def search_by_category(category):
    news = search_news(case_insensitive_query("categories", category))
    return transform_news_data(news)


# Refs:
# https://docs.mongodb.com/manual/reference/operator/query/regex/
# https://docs.python.org/3/library/datetime.html#datetime.datetime.strptime
