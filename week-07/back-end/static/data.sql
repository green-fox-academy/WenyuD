SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS posts (
    post_id int NOT NULL AUTO_INCREMENT,
    post_title varchar(50) NOT NULL DEFAULT '',
    post_url varchar(225) NOT NULL DEFAULT '',
    post_timestamp varchar(10) NOT NULL DEFAULT '',
    post_score int NOT NULL DEFAULT 0,
    PRIMARY KEY (post_id)
);
