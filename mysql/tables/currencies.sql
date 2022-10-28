USE `currencies_rates`;

DROP TABLE IF EXISTS `currencies`;

CREATE TABLE IF NOT EXISTS `currencies`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `description`   VARCHAR(255) NOT NULL ,
  `symbol`        VARCHAR(255) NOT NULL ,
  PRIMARY KEY (`id`)
);