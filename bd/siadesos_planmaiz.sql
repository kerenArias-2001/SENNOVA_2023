/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.24-MariaDB : Database - siadesos_planmaiz
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`siadesos_planmaiz` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `siadesos_planmaiz`;

/*Table structure for table `analisis_terreno` */

DROP TABLE IF EXISTS `analisis_terreno`;

CREATE TABLE `analisis_terreno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `id_user_analisis` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`id_user_analisis`),
  CONSTRAINT `fk_usuario1` FOREIGN KEY (`id_user_analisis`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `analisis_terreno` */

LOCK TABLES `analisis_terreno` WRITE;

insert  into `analisis_terreno`(`id`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`id_user_analisis`) values (1,'Bolsas','comprar','4','300','Unidad',2);

UNLOCK TABLES;

/*Table structure for table `cambios_paginas` */

DROP TABLE IF EXISTS `cambios_paginas`;

CREATE TABLE `cambios_paginas` (
  `id_cambios_paginas` int(1) NOT NULL AUTO_INCREMENT,
  `cambio0` varchar(255) DEFAULT NULL,
  `cambio1` varchar(255) DEFAULT NULL,
  `cambio2` varchar(255) DEFAULT NULL,
  `cambio3` varchar(255) DEFAULT NULL,
  `cambio4` varchar(255) DEFAULT NULL,
  `cambio5` varchar(255) DEFAULT NULL,
  `cambio6` varchar(255) DEFAULT NULL,
  `cambio7` varchar(255) DEFAULT NULL,
  `cambio8` varchar(255) DEFAULT NULL,
  `cambio9` varchar(255) DEFAULT NULL,
  `cambio10` varchar(255) DEFAULT NULL,
  `cambio11` varchar(255) DEFAULT NULL,
  `cambio12` varchar(255) DEFAULT NULL,
  `cambio13` varchar(255) DEFAULT NULL,
  `cambio14` varchar(255) DEFAULT NULL,
  `cambio15` varchar(255) DEFAULT NULL,
  `cambio16` varchar(255) DEFAULT NULL,
  `cambio17` varchar(255) DEFAULT NULL,
  `cambio18` varchar(255) DEFAULT NULL,
  `cambio19` varchar(255) DEFAULT NULL,
  `cambio20` varchar(255) DEFAULT NULL,
  `cambio21` varchar(255) DEFAULT NULL,
  `cambio22` varchar(255) DEFAULT NULL,
  `cambio23` varchar(255) DEFAULT NULL,
  `cambio24` varchar(255) DEFAULT NULL,
  `cambio25` varchar(255) DEFAULT NULL,
  `cambio26` varchar(255) DEFAULT NULL,
  `cambio27` varchar(255) DEFAULT NULL,
  `cambio28` varchar(255) DEFAULT NULL,
  `cambio29` varchar(9) DEFAULT NULL,
  `cambio30` varchar(6) DEFAULT NULL,
  `cambio31` varchar(6) DEFAULT NULL,
  `cambio32` varchar(6) DEFAULT NULL,
  `cambio33` varchar(6) DEFAULT NULL,
  `cambio34` varchar(6) DEFAULT NULL,
  `cambio35` varchar(6) DEFAULT NULL,
  `cambio36` varchar(6) DEFAULT NULL,
  `cambio37` varchar(6) DEFAULT NULL,
  `cambio38` varchar(9) DEFAULT NULL,
  `cambio39` varchar(255) DEFAULT NULL,
  `cambio40` varchar(255) DEFAULT NULL,
  `cambio41` varchar(255) DEFAULT NULL,
  `cambio42` varchar(255) DEFAULT NULL,
  `cambio43` varchar(255) DEFAULT NULL,
  `cambio44` varchar(255) DEFAULT NULL,
  `cambio45` varchar(255) DEFAULT NULL,
  `cambio46` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_cambios_paginas`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `cambios_paginas` */

LOCK TABLES `cambios_paginas` WRITE;

insert  into `cambios_paginas`(`id_cambios_paginas`,`cambio0`,`cambio1`,`cambio2`,`cambio3`,`cambio4`,`cambio5`,`cambio6`,`cambio7`,`cambio8`,`cambio9`,`cambio10`,`cambio11`,`cambio12`,`cambio13`,`cambio14`,`cambio15`,`cambio16`,`cambio17`,`cambio18`,`cambio19`,`cambio20`,`cambio21`,`cambio22`,`cambio23`,`cambio24`,`cambio25`,`cambio26`,`cambio27`,`cambio28`,`cambio29`,`cambio30`,`cambio31`,`cambio32`,`cambio33`,`cambio34`,`cambio35`,`cambio36`,`cambio37`,`cambio38`,`cambio39`,`cambio40`,`cambio41`,`cambio42`,`cambio43`,`cambio44`,`cambio45`,`cambio46`) values (1,NULL,'Paso 1 - Análisis del suelo','fondopaso1.jpg','PLANEA TU CULTIVO DE MAIZ\n','Instructivoss','Cartilla digital','Manual de usuario',NULL,'Cómo tomar muestras de suelo para enviar al laboratorio',NULL,'REALIZAR ANÁLISIS DEL SUELO','Fecha inicial','Fecha final','Valor análisis del laboratorio','¿Cuántos metros² desea sembrar?','Calcular','Inventario para análisis','Tipo de transacción:','selecciona','Alquiler','Comprar','Listado de materiales e insumos, herramientas y equipos','Cotización del laboratorio','Nombre Producto','Cantidad','Unidad de medida','Valor Unitario','Subtotal','Total','Abandonar','Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6','Paso 7','Paso 8','Siguiente','Paginas','Contacto','Centro Biotecnológico del Caribe (CBC).','Km 7 via la paz','Valledupar - Cesar','','PRUEBA NUESTRA APP MOVIL','DESCARGAR'),(2,NULL,'Paso 2 - Preparar el terreno','fondopaso1.jpg','PLANEA TU CULTIVO DE MAIZ\n','Instructivos','Cartilla digital','Manual de usuario',NULL,'Cómo tomar muestras de suelo para enviar al laboratorio',NULL,'PREPARAR EL TERRENO','Fecha inicial','Fecha final','Cotización del laboratorio','¿Cuántos metros² desea sembrar?','Guardar','Inventario para preparar el terreno','Tipo de transacción:','selecciona','Alquiler','Comprar','Listado de materiales e insumos, herramientas y equipos','Cotización del laboratorio','Nombre Producto','Cantidad','Unidad de medida','Valor Unitario','Subtotal','Total','Anterior','Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6','Paso 7','Paso 8','Siguiente','Paginas','Contacto','Centro Biotecnológico del Caribe (CBC).','Km 7 via la paz','Valledupar - Cesar','','PRUEBA NUESTRA APP MOVIL','DESCARGAR'),(3,NULL,'Paso 3 - Instalar sistema de riego','fondopaso1.jpg','PLANEA TU CULTIVO DE MAIZ\n','Instructivos','Cartilla digital','Manual de usuario',NULL,'Cómo tomar muestras de suelo para enviar al laboratorio',NULL,'INSTALAR SISTEMA DE RIEGO','Fecha inicial','Fecha final','Cotización del laboratorio','¿Cuántos metros² desea sembrar?','Guardar','Inventario para el sistema de riego','Tipo de transacción:','selecciona','Alquiler','Comprar','Listado de materiales e insumos, herramientas y equipos','Cotización del laboratorio','Nombre Producto','Cantidad','Unidad de medida','Valor Unitario','Subtotal','Total','Anterior','Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6','Paso 7','Paso 8','Siguiente','Paginas','Contacto','Centro Biotecnológico del Caribe (CBC).','Km 7 via la paz','Valledupar - Cesar','','PRUEBA NUESTRA APP MOVIL','DESCARGAR'),(4,NULL,'Paso 4 - Realizar siembra','fondopaso4.jpg','PLANEA TU CULTIVO DE MAIZ\n','Instructivos','Cartilla digital','Manual de usuario',NULL,'Cómo tomar muestras de suelo para enviar al laboratorio',NULL,'REALIZAR SIEMBRA','Fecha inicial','Fecha final','Cotización del laboratorio','¿Cuántos metros² desea sembrar?','Calcular','Inventario','Tipo de transacción:','selecciona','Alquiler','Comprar','Listado de materiales e insumos, herramientas y equipos','Cotización del laboratorio','Nombre Producto','Cantidad','Unidad de medida','Valor Unitario','Subtotal','Total','Anterior','Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6','Paso 7','Paso 8','Siguiente','Paginas','Contacto','Centro Biotecnológico del Caribe (CBC).','Km 7 via la paz','Valledupar - Cesar',NULL,'PRUEBA NUESTRA APP MOVIL','DESCARGAR'),(5,NULL,'Paso 5 - Realizar fertilización','fondopaso1.jpg','PLANEA TU CULTIVO DE MAIZ\n','Instructivos','Cartilla digital','Manual de usuario',NULL,'Cómo tomar muestras de suelo para enviar al laboratorio',NULL,'REALIZAR FERTILIZACIÓN','Fecha inicial','Fecha final','Cotización del laboratorio','¿Cuántos metros² desea sembrar?','Guardar','Inventario para la fertilización','Tipo de transacción:','selecciona','Alquiler','Comprar','Listado de materiales e insumos, herramientas y equipos','Cotización del laboratorio','Nombre Producto','Cantidad','Unidad de medida','Valor Unitario','Subtotal','Total','Anterior','Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6','Paso 7','Paso 8','Siguiente','Paginas','Contacto','Centro Biotecnológico del Caribe (CBC).','Km 7 via la paz','Valledupar - Cesar','','PRUEBA NUESTRA APP MOVIL','DESCARGAR'),(6,NULL,'Paso 6 - Realizar control de plagas y enfermedades','fondopaso1.jpg','PLANEA TU CULTIVO DE MAIZ\n','Instructivos','Cartilla digital','Manual de usuario ',NULL,'Cómo tomar muestras de suelo para enviar al laboratorio',NULL,'REALIZAR CONTROL DE PLAGAS Y ENFERMEDADES','Fecha inicial','Fecha final','Cotización del laboratorio','¿Cuántos metros² desea sembrar?','Guardar','Inventario para el control de plagas','Tipo de transacción:','selecciona','Alquiler','Comprar','Listado de materiales e insumos, herramientas y equipos','Cotización del laboratorio','Nombre Producto','Cantidad','Unidad de medida','Valor Unitario','Subtotal','Total','Anterior','Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6','Paso 7','Paso 8','Siguiente','Paginas','Contacto','Centro Biotecnológico del Caribe (CBC).','Km 7 via la paz','Valledupar - Cesar','','PRUEBA NUESTRA APP MOVIL','DESCARGAR'),(7,NULL,'Paso 7 - Preparar cosecha','fondopaso1.jpg','PLANEA TU CULTIVO DE MAIZ\n','Instructivos','Cartilla digital','Manual de usuario',NULL,'Cómo tomar muestras de suelo para enviar al laboratorio',NULL,'PREPARAR COSECHA','Fecha inicial','Fecha final','Cotización del laboratorio','¿Cuántos metros² desea sembrar?','Guardar','Inventario para la cosecha','Tipo de transacción:','selecciona','Alquiler','Comprar','Listado de materiales e insumos, herramientas y equipos','Cotización del laboratorio','Nombre Producto','Cantidad','Unidad de medida','Valor Unitario','Subtotal','Total','Anterior','Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6','Paso 7','Paso 8','Siguiente','Paginas','Contacto','Centro Biotecnológico del Caribe (CBC).','Km 7 via la paz','Valledupar - Cesar','','PRUEBA NUESTRA APP MOVIL','DESCARGAR'),(8,NULL,'Paso 8 - Preparar pos-cosecha','fondopaso8.jpg','PLANEA TU CULTIVO DE MAIZ\n','Instructivos','Cartilla digital','Manual de usuario',NULL,'Cómo tomar muestras de suelo para enviar al laboratorio',NULL,'PREPARAR POS - COSECHA','Fecha inicial','Fecha final','Cotización del laboratorio','¿Cuántos metros² desea sembrar?','Guardar','Inventario para la  Po-cosecha','Tipo de transacción:','selecciona','Alquiler','Comprar','Listado de materiales e insumos, herramientas y equipos','Cotización del laboratorio','Nombre Producto','Cantidad','Unidad de medida','Valor Unitario','Subtotal','Total','Anterior','Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6','Paso 7','Paso 8','Resultado','Paginas','Contacto','Centro Biotecnológico del Caribe (CBC).','Km 7 via la paz','Valledupar - Cesar','','PRUEBA NUESTRA APP MOVIL','DESCARGAR');

UNLOCK TABLES;

/*Table structure for table `conteo_usuarios` */

DROP TABLE IF EXISTS `conteo_usuarios`;

CREATE TABLE `conteo_usuarios` (
  `id_conteo_usuarios` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuarios_registrados` int(255) DEFAULT NULL,
  `nombres_usuarios` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_conteo_usuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `conteo_usuarios` */

LOCK TABLES `conteo_usuarios` WRITE;

insert  into `conteo_usuarios`(`id_conteo_usuarios`,`id_usuarios_registrados`,`nombres_usuarios`) values (1,1,'User1'),(2,1,'admin@sena.com'),(3,2,'User2'),(4,2,'User2'),(5,2,'User2'),(6,2,'User2'),(7,2,'User2'),(8,2,'User2'),(9,3,'User3'),(10,4,'User4'),(11,3,'User3'),(12,3,'User3'),(13,4,'User4'),(14,3,'User3'),(15,3,'User3'),(16,4,'User4'),(17,3,'User3'),(18,3,'User3'),(19,3,'User3'),(20,4,'User4'),(21,5,'User5'),(22,5,'User5'),(23,6,'User6'),(24,6,'User6'),(25,6,'User6'),(26,5,'User5'),(27,6,'User6'),(28,7,'User7'),(29,8,'User8'),(30,8,'User8'),(31,8,'User8'),(32,9,'User9'),(33,9,'User9'),(34,8,'User8'),(35,8,'User8'),(36,8,'User8'),(37,8,'User8'),(38,2,'sebastianpitrediaz@gmail.com'),(39,3,'User3');

UNLOCK TABLES;

/*Table structure for table `control_plaga` */

DROP TABLE IF EXISTS `control_plaga`;

CREATE TABLE `control_plaga` (
  `id_control_plaga` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `id_user_control_plaga` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_control_plaga`),
  KEY `fk_usuario` (`id_user_control_plaga`),
  CONSTRAINT `fk_usuario_control_plaga` FOREIGN KEY (`id_user_control_plaga`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `control_plaga` */

LOCK TABLES `control_plaga` WRITE;

insert  into `control_plaga`(`id_control_plaga`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`id_user_control_plaga`) values (1,'Insecticida','comprar_control','2','1000','Litros',2);

UNLOCK TABLES;

/*Table structure for table `cosecha` */

DROP TABLE IF EXISTS `cosecha`;

CREATE TABLE `cosecha` (
  `id_cosecha` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `id_user_cosecha` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_cosecha`),
  KEY `fk_usuario` (`id_user_cosecha`),
  CONSTRAINT `fk_usuario5` FOREIGN KEY (`id_user_cosecha`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `cosecha` */

LOCK TABLES `cosecha` WRITE;

insert  into `cosecha`(`id_cosecha`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`id_user_cosecha`) values (1,'App agrícola','alquilar_cosecha','1','35000','3 Meses',2),(2,'Guantes','comprar_cosecha','5','27000','Unidad',2),(3,'Camión de carga','alquilar_cosecha','1','70000','3 Horas',2),(4,'ACPM','comprar_cosecha','5','8147','Galón',2);

UNLOCK TABLES;

/*Table structure for table `dofa` */

DROP TABLE IF EXISTS `dofa`;

CREATE TABLE `dofa` (
  `id_dofa` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_d` varchar(255) DEFAULT NULL,
  `descripcion_d` varchar(255) DEFAULT NULL,
  `nombre_o` varchar(255) DEFAULT NULL,
  `descripcion_o` varchar(255) DEFAULT NULL,
  `nombre_f` varchar(255) DEFAULT NULL,
  `descripcion_f` varchar(255) DEFAULT NULL,
  `nombre_a` varchar(255) DEFAULT NULL,
  `descripcion_a` varchar(255) DEFAULT NULL,
  `nombre__f` varchar(255) DEFAULT NULL,
  `descripcion__f` varchar(255) DEFAULT NULL,
  `nombre__o` varchar(255) DEFAULT NULL,
  `descripcion__o` varchar(255) DEFAULT NULL,
  `nombre__d` varchar(255) DEFAULT NULL,
  `descripcion__d` varchar(255) DEFAULT NULL,
  `nombre__a` varchar(255) DEFAULT NULL,
  `descripcion__a` varchar(255) DEFAULT NULL,
  `id_user_dofa` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_dofa`),
  KEY `fk_dofa` (`id_user_dofa`),
  CONSTRAINT `fk_dofa` FOREIGN KEY (`id_user_dofa`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

/*Data for the table `dofa` */

LOCK TABLES `dofa` WRITE;

insert  into `dofa`(`id_dofa`,`nombre_d`,`descripcion_d`,`nombre_o`,`descripcion_o`,`nombre_f`,`descripcion_f`,`nombre_a`,`descripcion_a`,`nombre__f`,`descripcion__f`,`nombre__o`,`descripcion__o`,`nombre__d`,`descripcion__d`,`nombre__a`,`descripcion__a`,`id_user_dofa`) values (26,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2);

UNLOCK TABLES;

/*Table structure for table `fecha_analisist` */

DROP TABLE IF EXISTS `fecha_analisist`;

CREATE TABLE `fecha_analisist` (
  `id_fecha_analisisT` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicial` date DEFAULT NULL,
  `fecha_final` date DEFAULT NULL,
  `id_user_fecha_analisisT` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fecha_analisisT`),
  KEY `fk_usuario` (`id_user_fecha_analisisT`),
  CONSTRAINT `fk_usuario_0` FOREIGN KEY (`id_user_fecha_analisisT`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `fecha_analisist` */

LOCK TABLES `fecha_analisist` WRITE;

insert  into `fecha_analisist`(`id_fecha_analisisT`,`fecha_inicial`,`fecha_final`,`id_user_fecha_analisisT`) values (2,'2023-10-05','2023-10-18',1),(10,'2023-10-09','2023-10-13',2);

UNLOCK TABLES;

/*Table structure for table `fecha_control_plaga` */

DROP TABLE IF EXISTS `fecha_control_plaga`;

CREATE TABLE `fecha_control_plaga` (
  `id_fecha_control_plaga` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicial` date DEFAULT NULL,
  `fecha_final` date DEFAULT NULL,
  `id_user_fecha_control_plaga` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fecha_control_plaga`),
  KEY `fk_usuario` (`id_user_fecha_control_plaga`),
  CONSTRAINT `fk_usuario_6` FOREIGN KEY (`id_user_fecha_control_plaga`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `fecha_control_plaga` */

LOCK TABLES `fecha_control_plaga` WRITE;

insert  into `fecha_control_plaga`(`id_fecha_control_plaga`,`fecha_inicial`,`fecha_final`,`id_user_fecha_control_plaga`) values (38,'2023-12-01','2023-12-09',2);

UNLOCK TABLES;

/*Table structure for table `fecha_cosecha` */

DROP TABLE IF EXISTS `fecha_cosecha`;

CREATE TABLE `fecha_cosecha` (
  `id_fecha_cosecha` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicial` date DEFAULT NULL,
  `fecha_final` date DEFAULT NULL,
  `id_user_fecha_cosecha` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fecha_cosecha`),
  KEY `fk_usuario` (`id_user_fecha_cosecha`),
  CONSTRAINT `fk_usuario_8` FOREIGN KEY (`id_user_fecha_cosecha`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `fecha_cosecha` */

LOCK TABLES `fecha_cosecha` WRITE;

insert  into `fecha_cosecha`(`id_fecha_cosecha`,`fecha_inicial`,`fecha_final`,`id_user_fecha_cosecha`) values (38,'2023-12-10','2023-12-23',2);

UNLOCK TABLES;

/*Table structure for table `fecha_fertilizacion` */

DROP TABLE IF EXISTS `fecha_fertilizacion`;

CREATE TABLE `fecha_fertilizacion` (
  `id_fecha_fertilizacion` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicial` date DEFAULT NULL,
  `fecha_final` date DEFAULT NULL,
  `id_user_fecha_fertilizacion` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fecha_fertilizacion`),
  KEY `fk_usuario` (`id_user_fecha_fertilizacion`),
  CONSTRAINT `fk_usuario_4` FOREIGN KEY (`id_user_fecha_fertilizacion`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `fecha_fertilizacion` */

LOCK TABLES `fecha_fertilizacion` WRITE;

insert  into `fecha_fertilizacion`(`id_fecha_fertilizacion`,`fecha_inicial`,`fecha_final`,`id_user_fecha_fertilizacion`) values (38,'2023-11-22','2023-11-30',2);

UNLOCK TABLES;

/*Table structure for table `fecha_poscosecha` */

DROP TABLE IF EXISTS `fecha_poscosecha`;

CREATE TABLE `fecha_poscosecha` (
  `id_fecha_poscosecha` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicial` date DEFAULT NULL,
  `fecha_final` date DEFAULT NULL,
  `id_user_fecha_poscosecha` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fecha_poscosecha`),
  KEY `fk_usuario` (`id_user_fecha_poscosecha`),
  CONSTRAINT `fk_usuario_9` FOREIGN KEY (`id_user_fecha_poscosecha`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `fecha_poscosecha` */

LOCK TABLES `fecha_poscosecha` WRITE;

insert  into `fecha_poscosecha`(`id_fecha_poscosecha`,`fecha_inicial`,`fecha_final`,`id_user_fecha_poscosecha`) values (38,'2023-12-25','2024-01-03',2);

UNLOCK TABLES;

/*Table structure for table `fecha_preparaciont` */

DROP TABLE IF EXISTS `fecha_preparaciont`;

CREATE TABLE `fecha_preparaciont` (
  `id_fecha_preparacionT` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicial` date DEFAULT NULL,
  `fecha_final` date DEFAULT NULL,
  `id_user_fecha_preparacionT` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fecha_preparacionT`),
  KEY `fk_usuario` (`id_user_fecha_preparacionT`),
  CONSTRAINT `fk_usuario_1` FOREIGN KEY (`id_user_fecha_preparacionT`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `fecha_preparaciont` */

LOCK TABLES `fecha_preparaciont` WRITE;

insert  into `fecha_preparaciont`(`id_fecha_preparacionT`,`fecha_inicial`,`fecha_final`,`id_user_fecha_preparacionT`) values (38,'2023-10-15','2023-11-04',2);

UNLOCK TABLES;

/*Table structure for table `fecha_riego` */

DROP TABLE IF EXISTS `fecha_riego`;

CREATE TABLE `fecha_riego` (
  `id_fecha_riego` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicial` date DEFAULT NULL,
  `fecha_final` date DEFAULT NULL,
  `id_user_fecha_riego` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fecha_riego`),
  KEY `fk_usuario` (`id_user_fecha_riego`),
  CONSTRAINT `fk_usuario_2` FOREIGN KEY (`id_user_fecha_riego`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `fecha_riego` */

LOCK TABLES `fecha_riego` WRITE;

insert  into `fecha_riego`(`id_fecha_riego`,`fecha_inicial`,`fecha_final`,`id_user_fecha_riego`) values (38,'2023-11-05','2023-11-11',2);

UNLOCK TABLES;

/*Table structure for table `fecha_siembra` */

DROP TABLE IF EXISTS `fecha_siembra`;

CREATE TABLE `fecha_siembra` (
  `id_fecha_siembra` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicial` date DEFAULT NULL,
  `fecha_final` date DEFAULT NULL,
  `id_user_fecha_siembra` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fecha_siembra`),
  KEY `fk_usuario` (`id_user_fecha_siembra`),
  CONSTRAINT `fk_usuario_3` FOREIGN KEY (`id_user_fecha_siembra`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `fecha_siembra` */

LOCK TABLES `fecha_siembra` WRITE;

insert  into `fecha_siembra`(`id_fecha_siembra`,`fecha_inicial`,`fecha_final`,`id_user_fecha_siembra`) values (38,'2023-11-12','2023-11-18',2);

UNLOCK TABLES;

/*Table structure for table `fertilizacion` */

DROP TABLE IF EXISTS `fertilizacion`;

CREATE TABLE `fertilizacion` (
  `id_fertilizacion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `id_user_fertilizacion` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fertilizacion`),
  KEY `fk_usuario` (`id_user_fertilizacion`),
  CONSTRAINT `fk_usuario4` FOREIGN KEY (`id_user_fertilizacion`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `fertilizacion` */

LOCK TABLES `fertilizacion` WRITE;

insert  into `fertilizacion`(`id_fertilizacion`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`id_user_fertilizacion`) values (1,'fertilizante 1','comprar_fertilizacion','1000','250','Mililitros',2),(2,'Bomba de esparcir','comprar_fertilizacion','2','219000','Unidad',2),(3,'Agua','comprar_fertilizacion','1','1000','Metros Cubicos',2);

UNLOCK TABLES;

/*Table structure for table `imagenes` */

DROP TABLE IF EXISTS `imagenes`;

CREATE TABLE `imagenes` (
  `id_imagenes` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_imagenes`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `imagenes` */

LOCK TABLES `imagenes` WRITE;

insert  into `imagenes`(`id_imagenes`,`nombre_imagen`) values (1,'fondopaso1.jpg');

UNLOCK TABLES;

/*Table structure for table `pos_cosecha` */

DROP TABLE IF EXISTS `pos_cosecha`;

CREATE TABLE `pos_cosecha` (
  `id_pos_cosecha` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `id_user_pos_cosecha` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_pos_cosecha`),
  KEY `fk_usuario` (`id_user_pos_cosecha`),
  CONSTRAINT `fk_usuario6` FOREIGN KEY (`id_user_pos_cosecha`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `pos_cosecha` */

LOCK TABLES `pos_cosecha` WRITE;

insert  into `pos_cosecha`(`id_pos_cosecha`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`id_user_pos_cosecha`) values (1,'Trilladora','alquilar_pos_cosecha','1','37000','8 Horas',2),(2,'Sacos','comprar_pos_cosecha','100','800','Unidad',2);

UNLOCK TABLES;

/*Table structure for table `preparacion_terreno` */

DROP TABLE IF EXISTS `preparacion_terreno`;

CREATE TABLE `preparacion_terreno` (
  `id_terreno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user_preparacion` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_terreno`),
  KEY `fk_usuario` (`id_user_preparacion`),
  CONSTRAINT `fk_usuario2` FOREIGN KEY (`id_user_preparacion`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `preparacion_terreno` */

LOCK TABLES `preparacion_terreno` WRITE;

insert  into `preparacion_terreno`(`id_terreno`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`subtotal_alquiler`,`id_user_preparacion`) values (1,'Tractor','alquilar_preparacion','1','60000','3 Horas',NULL,2),(2,'Mano de obra','alquilar_preparacion','1','908000','3 Meses',NULL,2),(3,'Cal','comprar_preparacion','15','1600','Kilos',NULL,2),(4,'Agua','comprar_preparacion','7','999.99','Metros Cubicos',NULL,2);

UNLOCK TABLES;

/*Table structure for table `proceso_siembra` */

DROP TABLE IF EXISTS `proceso_siembra`;

CREATE TABLE `proceso_siembra` (
  `id_siembra` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `precio_semilla` varchar(255) DEFAULT NULL,
  `valor_semilla` varchar(255) DEFAULT NULL,
  `valor_tonelada` varchar(255) DEFAULT NULL,
  `id_user_siembra` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_siembra`),
  KEY `fk_usuario` (`id_user_siembra`),
  CONSTRAINT `fk_usuario3` FOREIGN KEY (`id_user_siembra`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `proceso_siembra` */

LOCK TABLES `proceso_siembra` WRITE;

insert  into `proceso_siembra`(`id_siembra`,`nombre_producto`,`precio_semilla`,`valor_semilla`,`valor_tonelada`,`id_user_siembra`) values (2,NULL,'0',NULL,NULL,1),(38,'Blanco','2000','44,444.40','7407.4',2);

UNLOCK TABLES;

/*Table structure for table `sistema_riego` */

DROP TABLE IF EXISTS `sistema_riego`;

CREATE TABLE `sistema_riego` (
  `id_sistema_riego` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `id_user_sistema_riego` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_sistema_riego`),
  KEY `fk_usuario` (`id_user_sistema_riego`),
  CONSTRAINT `fk_usuario_sistema_riego` FOREIGN KEY (`id_user_sistema_riego`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `sistema_riego` */

LOCK TABLES `sistema_riego` WRITE;

insert  into `sistema_riego`(`id_sistema_riego`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`id_user_sistema_riego`) values (1,'Manguera','comprar_riego','5','2000','Metros',2);

UNLOCK TABLES;

/*Table structure for table `terreno` */

DROP TABLE IF EXISTS `terreno`;

CREATE TABLE `terreno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(255) DEFAULT NULL,
  `surcos` varchar(255) DEFAULT NULL,
  `distancia` varchar(255) DEFAULT NULL,
  `cotizar_lab` varchar(255) DEFAULT NULL,
  `precio_vender` varchar(255) DEFAULT NULL,
  `id_user` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`id_user`),
  CONSTRAINT `fk_usuario` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `terreno` */

LOCK TABLES `terreno` WRITE;

insert  into `terreno`(`id`,`area`,`surcos`,`distancia`,`cotizar_lab`,`precio_vender`,`id_user`) values (1,'10000','90','15','10000',NULL,1),(2,'10000','90','15','15000','1000',2);

UNLOCK TABLES;

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_u` varchar(255) DEFAULT NULL,
  `psw_u` varchar(255) DEFAULT NULL,
  `apellido_u` varchar(255) DEFAULT NULL,
  `correo_u` varchar(255) DEFAULT NULL,
  `tipo_usuario` varchar(255) DEFAULT NULL,
  `codigo_admin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `usuario` */

LOCK TABLES `usuario` WRITE;

insert  into `usuario`(`id_usuario`,`nombre_u`,`psw_u`,`apellido_u`,`correo_u`,`tipo_usuario`,`codigo_admin`) values (1,'admin','admin','admin','admin@sena.com','admin','admin123'),(2,'sebastian','1234','pitre','sebastianpitrediaz@gmail.com',NULL,NULL);

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
