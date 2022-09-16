DROP DATABASE IF EXISTS `exercises`;

CREATE DATABASE `exercises`;

CREATE TABLE `exercises`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `office` INT NOT NULL,
  PRIMARY KEY (`id`)) ENGINE=INNODB;

INSERT INTO `exercises`.`employees`
(`id`,
`first_name`,
`last_name`,
`office`)
VALUES
(1,
'michael',
'scott',
999);
