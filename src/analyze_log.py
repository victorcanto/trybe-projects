import csv


def read_file(path_to_file):
    with open(path_to_file, newline="") as csvfile:
        fieldnames = ["customer", "order", "day"]
        return list(csv.DictReader(csvfile, fieldnames=fieldnames))


def get_data_per_customer(customer, data):
    return [item for item in data if item["customer"] == customer]


def get_most_ordered_per_customer(data):
    count = {}
    most_ordered = data[0]["order"]
    for item in data:
        if item["order"] not in count:
            count[item["order"]] = 1
        else:
            count[item["order"]] += 1

        if count[item["order"]] > count[most_ordered]:
            most_ordered = item["order"]

    return most_ordered


def get_order_quantity_per_customer(data, order_name):
    order_quantity = 0
    for item in data:
        if item["order"] == order_name:
            order_quantity += 1
    return order_quantity


def get_never_ordered_per_customer(customer_data, data):
    orders_data = set([item["order"] for item in data])
    orders_customer = set([item["order"] for item in customer_data])

    return orders_data.difference(orders_customer)


def get_days_that_never_went_to_diner(customer_data, data):
    days_data = set([item["day"] for item in data])
    days_customer = set([item["day"] for item in customer_data])

    return days_data.difference(days_customer)


def write_file(target_path, data):
    f = open(target_path, "w")
    for item in data:
        f.write(f"{item}\n")
    f.close()


def analyze_log(path_to_file):
    data = read_file(path_to_file)

    data_maria = get_data_per_customer("maria", data)
    data_arnaldo = get_data_per_customer("arnaldo", data)
    data_joao = get_data_per_customer("joao", data)

    line1 = get_most_ordered_per_customer(data_maria)
    line2 = get_order_quantity_per_customer(data_arnaldo, "hamburguer")
    line3 = get_never_ordered_per_customer(data_joao, data)
    line4 = get_days_that_never_went_to_diner(data_joao, data)

    path_to_file = "data/mkt_campaign.txt"
    write_file(path_to_file, [line1, line2, line3, line4])
