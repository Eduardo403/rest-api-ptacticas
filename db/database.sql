create database is not exists companydb;

use companydb;

create table employess (
    id int(11) not null auto_increment,
    name varchar(45) default null
    salary int(5) default null
    PRIMARY KEY (id)  
);