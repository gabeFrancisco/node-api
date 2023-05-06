create table nodeApi.categories (
    id int auto_increment primary key,
    name varchar(45) not null
)

create table nodeApi.users (
    id int not null auto_increment,
    name varchar(45) not null,
    description varchar(100) not null,
    price double(10,2) not null,
    categoryId int not null,
    foreign key (categoryId) references categories(id),
    primary key (id)
);
