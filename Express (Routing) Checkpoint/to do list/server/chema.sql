drop database if exists hakimtodo;
create database if not exists hakimtodo;
use hakimtodo;
create table if not exists mylist(
id int(10) not null AUTO_INCREMENT,
fristname varchar(20) not null ,
lastname varchar(20) not null,
age varchar(20)  not null ,
PRIMARY KEY (id) 




);
INSERT INTO mylist (fristname, lastname, age) VALUES ("hakim", "nouira", "20");