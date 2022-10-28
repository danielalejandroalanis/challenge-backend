USE `currencies_rates`;

DROP TABLE IF EXISTS `rates`;

CREATE TABLE IF NOT EXISTS `rates`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `id_currency`   INT(11) NOT NULL ,
  `value`         FLOAT(11) NOT NULL ,
  `created_at`    TIMESTAMP NOT NULL ,
  FOREIGN KEY (`id_currency`) REFERENCES currencies(`id`),
  PRIMARY KEY (`id`)
);