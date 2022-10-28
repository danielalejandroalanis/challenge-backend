#!/bin/bash

dbname="currencies_rates"
rootpasswd="WwFFTRDJ7s2RgPWx"
host="host.docker.internal"
# If /root/.my.cnf exists then it won't ask for root password
	echo "Creating new MySQL database..."
    mysql -uroot -p$rootpasswd -h$host -e "DROP DATABASE IF EXISTS currencies_rates;"
	mysql -uroot -p$rootpasswd -h$host -e "CREATE DATABASE currencies_rates ;"
	echo "Database successfully created!"
	echo "Showing existing databases..."
	mysql -uroot -p$rootpasswd -h$host -e "show databases;"
    mysql -uroot -p$rootpasswd -h$host --database=$dbname -e "CREATE TABLE currencies(id INT(11) NOT NULL auto_increment, PRIMARY KEY (id));"
    mysql -uroot -p$rootpasswd -h$host --database=$dbname -e  "ALTER TABLE currencies ADD(description VARCHAR(255) NOT NULL);"
     mysql -uroot -p$rootpasswd -h$host --database=$dbname -e  "ALTER TABLE currencies ADD(symbol VARCHAR(255) NOT NULL);"
    mysql -uroot -p$rootpasswd -h$host --database=$dbname -e  "ALTER TABLE currencies ADD(PRIMARY KEY (id));"
    mysql -uroot -p$rootpasswd -h$host --database=$dbname -e "DROP TABLE IF EXISTS rates;"
     mysql -uroot -p$rootpasswd -h$host --database=$dbname -e "CREATE TABLE rates(id INT(11) NOT NULL auto_increment, PRIMARY KEY (id));"
    mysql -uroot -p$rootpasswd -h$host --database=$dbname -e  "ALTER TABLE rates ADD(id_currency INT(11) NOT NULL, FOREIGN KEY (id_currency) REFERENCES currencies(id));"
    mysql -uroot -p$rootpasswd -h$host --database=$dbname -e  "ALTER TABLE rates ADD(value FLOAT(11) NOT NULL);"
    mysql -uroot -p$rootpasswd -h$host --database=$dbname -e  "ALTER TABLE rates ADD(created_at TIMESTAMP NOT NULL);"
	exit
	