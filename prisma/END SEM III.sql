CREATE DATABASE ecommerce_db;
USE ecommerce_db;
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    department VARCHAR(50),
    designation VARCHAR(50),
    hire_date DATE,
    salary DECIMAL(12,2)
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    city VARCHAR(50),
    country VARCHAR(50)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(150),
    category VARCHAR(50),
    brand VARCHAR(50),
    unit_price DECIMAL(10,2),
    stock_quantity INT
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATETIME,
    status VARCHAR(20),
    shipping_city VARCHAR(50),
    shipping_country VARCHAR(50),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE payments (
    payment_id INT PRIMARY KEY,
    order_id INT,
    payment_date DATETIME,
    amount DECIMAL(12,2),
    method VARCHAR(20),
    status VARCHAR(20),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
INSERT INTO employees VALUES
(1,'Amit Verma','Sales','Sales Manager','2019-04-10',65000),
(2,'Neha Singh','HR','HR Executive','2020-01-15',42000),
(3,'Rajesh Kumar','IT','Software Engineer','2018-07-01',75000),
(4,'Priya Sharma','Finance','Accountant','2021-03-20',48000),
(5,'Vikram Mehta','Operations','Ops Supervisor','2017-11-05',52000),
(6,'Sneha Iyer','Marketing','Marketing Exec','2022-06-12',40000),
(7,'Rohit Jain','IT','DBA','2016-09-18',80000),
(8,'Kavya Nair','Sales','Sales Executive','2023-02-01',35000),
(9,'Manoj Gupta','Logistics','Logistics Manager','2018-12-30',60000),
(10,'Shweta Rao','CustomerCare','Customer Support','2020-08-25',38000);

INSERT INTO customers VALUES
(1,'Rahul Sharma','rahul@example.com','9876543210','Mumbai','India'),
(2,'Priya Singh','priya@example.com','9876500001','Delhi','India'),
(3,'Arjun Mehta','arjun@example.com','9876500002','Bengaluru','India'),
(4,'Sneha Patil','sneha@example.com','9876500003','Pune','India'),
(5,'Rakesh Jain','rakesh@example.com','9876500004','Jaipur','India'),
(6,'Kiran Rao','kiran@example.com','9876500005','Hyderabad','India'),
(7,'Anita Nair','anita@example.com','9876500006','Chennai','India'),
(8,'Vivek Gupta','vivek@example.com','9876500007','Kolkata','India'),
(9,'Divya Iyer','divya@example.com','9876500008','Ahmedabad','India'),
(10,'Sanjay Kulkarni','sanjay@example.com','9876500009','Surat','India');

INSERT INTO products VALUES
(101,'Smartphone A1','Mobiles','BrandX',15999,120),
(102,'Smartphone B2','Mobiles','BrandY',20999,80),
(103,'Laptop L1','Laptops','BrandX',55999,40),
(104,'Bluetooth Headset','Accessories','BrandZ',1999,250),
(105,'Wireless Mouse','Accessories','BrandZ',799,300),
(106,'LED TV 43 inch','TV','BrandQ',31999,35),
(107,'Gaming Console','Gaming','BrandG',28999,25),
(108,'Smartwatch S1','Wearables','BrandX',4999,150),
(109,'Tablet T1','Tablets','BrandY',25999,60),
(110,'Soundbar SB1','Audio','BrandQ',8999,70);

INSERT INTO orders VALUES
(1001,1,'2025-11-01 10:15:00','Delivered','Mumbai','India'),
(1002,2,'2025-11-02 14:30:00','Shipped','Delhi','India'),
(1003,3,'2025-11-03 09:45:00','Pending','Bengaluru','India'),
(1004,4,'2025-11-03 16:20:00','Delivered','Pune','India'),
(1005,5,'2025-11-04 11:10:00','Cancelled','Jaipur','India'),
(1006,6,'2025-11-05 18:05:00','Delivered','Hyderabad','India'),
(1007,7,'2025-11-06 13:40:00','Shipped','Chennai','India'),
(1008,8,'2025-11-07 19:25:00','Delivered','Kolkata','India'),
(1009,9,'2025-11-08 12:00:00','Pending','Ahmedabad','India'),
(1010,10,'2025-11-09 15:55:00','Delivered','Surat','India');

INSERT INTO order_items VALUES
(1,1001,101,1,15999),
(2,1002,103,1,55999),
(3,1003,104,2,1999),
(4,1004,106,1,31999),
(5,1005,102,1,20999),
(6,1006,108,2,4999),
(7,1007,107,1,28999),
(8,1008,105,3,799),
(9,1009,109,1,25999),
(10,1010,110,1,8999);

INSERT INTO payments VALUES
(1,1001,'2025-11-01 10:20:00',15999,'UPI','Success'),
(2,1002,'2025-11-02 14:35:00',55999,'Card','Success'),
(3,1003,'2025-11-03 09:50:00',3998,'UPI','Pending'),
(4,1004,'2025-11-03 16:25:00',31999,'NetBanking','Success'),
(5,1005,'2025-11-04 11:15:00',20999,'Card','Refunded'),
(6,1006,'2025-11-05 18:10:00',9998,'UPI','Success'),
(7,1007,'2025-11-06 13:45:00',28999,'COD','Pending'),
(8,1008,'2025-11-07 19:30:00',2397,'UPI','Success'),
(9,1009,'2025-11-08 12:05:00',25999,'Card','Pending'),
(10,1010,'2025-11-09 16:00:00',8999,'NetBanking','Success');

-- 1
SELECT * FROM customers;

-- 2
SELECT product_id, product_name, unit_price, stock_quantity FROM products;

-- 3
SELECT o.order_id, o.order_date, o.status, c.full_name
FROM orders o JOIN customers c ON o.customer_id = c.customer_id;

-- 4
SELECT c.full_name, COUNT(o.order_id) AS total_orders
FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.full_name;

-- 5
SELECT p.product_name, SUM(oi.quantity) AS total_qty_sold
FROM products p JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_name;

-- 6
SELECT p.product_name, SUM(oi.quantity * oi.unit_price) AS revenue
FROM products p JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_name;

-- 7
SELECT p.product_name, SUM(oi.quantity * oi.unit_price) AS revenue
FROM products p JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_name
ORDER BY revenue DESC LIMIT 3;

-- 8
SELECT c.full_name, SUM(oi.quantity * oi.unit_price) AS total_spent
FROM customers c JOIN orders o ON c.customer_id=o.customer_id
JOIN order_items oi ON o.order_id=oi.order_id
GROUP BY c.full_name;

-- 9
SELECT * FROM orders WHERE status='Pending';

-- 10
SELECT * FROM payments WHERE status='Pending';

-- 11
SELECT SUM(amount) AS total_success_amount
FROM payments WHERE status='Success';

-- 12
SELECT o.order_id, o.status, p.status AS payment_status
FROM orders o LEFT JOIN payments p ON o.order_id=p.order_id;

-- 13
SELECT AVG(amount) AS avg_order_value
FROM payments WHERE status='Success';

-- 14
SELECT shipping_city, COUNT(*) AS total_orders
FROM orders GROUP BY shipping_city;

-- 15
SELECT c.*
FROM customers c LEFT JOIN orders o ON c.customer_id=o.customer_id
WHERE o.order_id IS NULL;

-- 16
SELECT * FROM products WHERE stock_quantity < 50;

-- 17
SELECT p.category, SUM(oi.quantity * oi.unit_price) AS category_revenue
FROM products p JOIN order_items oi ON p.product_id=oi.product_id
GROUP BY p.category;

-- 18
SELECT o.order_id, c.full_name, p.product_name, oi.quantity,
(oi.quantity * oi.unit_price) AS amount
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;

-- 19
SELECT DATE(o.order_date) AS day,
COUNT(DISTINCT o.order_id) AS total_orders,
SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM orders o JOIN order_items oi ON o.order_id=oi.order_id
GROUP BY DATE(o.order_date);

-- 20
SELECT department, COUNT(*) AS total_employees
FROM employees GROUP BY department;

-- 21
SELECT * FROM employees ORDER BY salary DESC LIMIT 1;

-- 22
SELECT department, AVG(salary) AS avg_salary
FROM employees GROUP BY department;

-- 23
SELECT o.order_id, o.status, p.status AS payment_status
FROM orders o LEFT JOIN payments p ON o.order_id=p.order_id
WHERE o.status='Cancelled';

-- 24
SELECT status, COUNT(*) AS count_orders
FROM orders GROUP BY status;

-- 25
SELECT p.*
FROM products p LEFT JOIN order_items oi ON p.product_id=oi.product_id
WHERE oi.order_item_id IS NULL;

-- 26
SELECT p.category, SUM(oi.quantity) AS total_qty
FROM products p JOIN order_items oi ON p.product_id=oi.product_id
GROUP BY p.category;

-- 27
SELECT c.full_name, SUM(oi.quantity * oi.unit_price) AS total_spent
FROM customers c JOIN orders o ON c.customer_id=o.customer_id
JOIN order_items oi ON o.order_id=oi.order_id
GROUP BY c.full_name
ORDER BY total_spent DESC LIMIT 1;

-- 28
SELECT * FROM orders
WHERE order_date BETWEEN '2025-11-02' AND '2025-11-06';

-- 29
SELECT AVG(quantity) AS avg_qty_per_item
FROM order_items;

-- 30
SELECT DISTINCT o.order_id, c.full_name
FROM orders o
JOIN customers c ON o.customer_id=c.customer_id
JOIN order_items oi ON o.order_id=oi.order_id
JOIN products p ON oi.product_id=p.product_id
WHERE p.category='Mobiles';