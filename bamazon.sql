CREATE DATABASE bamazon;
USE bamazon;

-- drop table products;

create table products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NOT NULL,
    department_name VARCHAR (50) NOT NULL,
    price DECIMAL (10,4) NOT NULL,
    stock_quantity INTEGER (10) NOT NULL,
    PRIMARY KEY (item_id)
    );
	
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Silly String", "Party Supplies", 4.68, 50),
(2, "Cake Pops 1 dozen", "Food", 12.79, 22),
(3, "iPhone 4s", "Electronics", 187.23, 39),
(4, "Diffuser", "Household", 24.94, 58),
(5, "Picture Frame", "Home Decor", 48.76, 12),
(6, "Ottoman", "Furniture", 287.23, 19),
(7, "Blanket", "Home Decor", 39.76, 68),
(8, "Nespresso", "Appliance", 258.25, 207),
(9, "Fan", "Appliance", 103.25, 89),
(10, "Candle", "Household", 29.94, 209);

SELECT * FROM products;