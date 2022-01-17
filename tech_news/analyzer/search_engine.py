from tech_news.database import search_news
from datetime import datetime


def transform_news_data(news):
    return [(new["title"], new["url"]) for new in news]


def check_date(date):
    try:
        datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        raise ValueError("Data inválida")


# Requisito 6
def search_by_title(title):
    news = search_news({"title": {"$regex": title, "$options": "i"}})
    return transform_news_data(news)


# Requisito 7
def search_by_date(date):
    check_date(date)
    news = search_news({"timestamp": {"$regex": date}})
    return transform_news_data(news)


# Requisito 8
def search_by_source(source):
    """Seu código deve vir aqui"""


# Requisito 9
def search_by_category(category):
    """Seu código deve vir aqui"""
