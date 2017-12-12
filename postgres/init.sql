CREATE TABLE votes (
    id integer primary key,
    number_of_votes integer,
    option_name varchar(20)
);

INSERT INTO votes (id, number_of_votes, option_name) VALUES (1, 0, 'sandwiches');
INSERT INTO votes (id, number_of_votes, option_name) VALUES (2, 0, 'tacos');