CREATE TABLE IF NOT EXISTS posts (
    post_id int NOT NULL AUTO_INCREMENT,
    post_title varchar(50) NOT NULL DEFAULT '',
    post_url varchar(225) NOT NULL DEFAULT '',
    post_timestamp timestamp DEFAULT CURRENT_TIMESTAMP,
    post_score int NOT NULL DEFAULT 0,
    PRIMARY KEY (post_id)
);