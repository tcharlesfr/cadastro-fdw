CREATE TABLE `pessoa` (
  `id` int auto_increment,
  `nome` varchar(100),
  `idade` varchar(100),
  `sexo` varchar(100),
  `endereco` varchar(100),
  `salario`  varchar(100),
  PRIMARY KEY (`id`)
);
SELECT * FROM pessoa;


drop table pessoa;