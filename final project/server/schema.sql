drop database if exists story_checkpointt;
create database if not exists story_checkpointt;
use story_checkpointt;
create table if not exists user(
    id int(10) not null AUTO_INCREMENT,
    namee varchar(20) not null ,
    email varchar(20) not null ,
    pasword varchar(255) not null ,
    imageUrl varchar(255) not null,
    phoneNumber varchar (50) not null,
    adress varchar (255) not null,
    active  varchar (255)  not null,
PRIMARY KEY (id) 
);
 --INSERT INTO user( namee, email, pasword) VALUES("hakim", "nouira", "2000000");
