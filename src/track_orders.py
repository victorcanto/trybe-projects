class TrackOrders:
    def __init__(self):
        self.order_quantity = 0
        self.orders = []

    def __len__(self):
        return self.order_quantity

    def get_data_per_customer(self, customer):
        return [item for item in self.orders if item["costumer"] == customer]

    def add_new_order(self, costumer, order, day):
        self.orders.append({"costumer": costumer, "order": order, "day": day})
        self.order_quantity += 1

    def get_most_ordered_dish_per_costumer(self, costumer):
        costumer_data = self.get_data_per_customer(costumer)
        most_ordered = self.orders[0]["order"]
        count = {}

        for item in costumer_data:
            if item["order"] not in count:
                count[item["order"]] = 1
            else:
                count[item["order"]] += 1

            if count[item["order"]] > count[most_ordered]:
                most_ordered = item["order"]

        return most_ordered

    def get_never_ordered_per_costumer(self, costumer):
        costumer_data = self.get_data_per_customer(costumer)
        orders_data = set([item["order"] for item in self.orders])
        orders_customer = set([item["order"] for item in costumer_data])

        return orders_data.difference(orders_customer)

    def get_days_never_visited_per_costumer(self, costumer):
        costumer_data = self.get_data_per_customer(costumer)
        days_data = set([item["day"] for item in self.orders])
        days_customer = set([item["day"] for item in costumer_data])

        return days_data.difference(days_customer)

    def get_busiest_day(self):
        day = self.orders[0]["day"]
        count = {}
        for item in self.orders:
            if item["day"] not in count:
                count[item["day"]] = 1
            else:
                count[item["day"]] += 1

            if count[item["day"]] > count[day]:
                day = item["day"]

        return day

    def get_least_busy_day(self):
        day = self.orders[0]["day"]
        count = {}
        for item in self.orders:
            if item["day"] not in count:
                count[item["day"]] = 1
            else:
                count[item["day"]] += 1

            if count[item["day"]] < count[day]:
                day = item["day"]

        return day
