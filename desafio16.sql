SELECT submitted_date from northwind.purchase_orders WHERE date(submitted_date) 
BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';