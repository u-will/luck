DROP TABLE IF EXISTS will;

CREATE TABLE will(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(222),
  last_name VARCHAR(222),
  email VARCHAR(222) UNIQUE,
  phone_number VARCHAR(222)UNIQUE,
  password VARCHAR(222)
);