CREATE DATABASE  IF NOT EXISTS `strongertogether` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `strongertogether`;
-- MySQL dump 10.13  Distrib 5.5.52, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: strongertogether
-- ------------------------------------------------------
-- Server version	5.6.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hospitals`
--

DROP TABLE IF EXISTS `hospitals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hospitals` (
  `id` int(20) NOT NULL,
  `name` varchar(45) NOT NULL,
  `specialty` varchar(45) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospitals`
--

LOCK TABLES `hospitals` WRITE;
/*!40000 ALTER TABLE `hospitals` DISABLE KEYS */;
INSERT INTO `hospitals` VALUES (0,'Hospital Antiguo Hospital Militar de Valencia','','C/ Dolores Ibárruri, 3 (Mislata-46920)','','src/client/images/hospitals/hospital1.jpg','38.8202367','-0.4264736'),(1,'Hospital Arnau de Vilanova','','C/ San Clemente, 12 (Valencia-46015)','','','39.4904147','-0.4058221'),(2,'Hospital Clínico Universitario','','Av Blasco Ibañez, 17 (Valencia-46010)','','','39.4788801','-0.3634141'),(3,'Hospital Consorcio Hospital Gª Universitario','','Av. Tres Cruces, s/n (Valencia-46014)','','','39.46822','-0.412154'),(4,'Hospital Doctor Moliner','','C/ Portaceli, s/n (Serra-46118)','','','39.6561685','-0.4763146'),(5,'Hospital Doctor Peset','','Av. Gaspar Aguilar, 90 (Valencia-46017)','','','39.4524937','-0.395889'),(6,'Hospital Gandia \"Francesc de Borja\"','','Paseo Germanías, 71 (Gandia-46702)','','','38.9634424','-0.1717632'),(7,'Hospital General d\'Ontinyent','',' C/ Francisco Cerdá, 3 (Ontinyent-46870)','','','38.8202605','-0.6052335'),(8,'Hospital La Malvarrosa','','C/ Isabel de Villena, 2 (Valencia-46011)','','','39.4752721','-0.3275614'),(9,'Hospital La Ribera de Alzira','','Ctra. Corbera, km 1 (Alzira-46600)','','','39.1601816','-0.4189617'),(10,'Hospital L\'Horta Manises','','Av. Generalitat Valenciana, 50 (Manises-46940)','','','39.4858953','-0.4544896'),(11,'Hospital Pare Jofré','','C/ San Lázaro, s/n (Valencia-46017)','','','39.4534327','-0.396124'),(12,'Hospital Requena','','Paraje Casablanca, s/n (Requena-46340)','','','39.4879285','-1.0927107'),(13,'Hospital Sagunto','','Av. Ramón y Cajal,s/n (Sagunt/Sagunto-46520)','','','39.6743614','-0.2334218'),(14,'Hospital Universitari i Politècnic La Fe','','Bulevar Sur, s/n (Valencia-46026)','','','39.4433313','-0.3776066'),(15,'Hospital Universitario La Fe','','Av. Campanar, 21 (Valencia-46009)','','','39.4433313','-0.3776066'),(16,'Hospital Xàtiva \"Lluís Alcanyís\"','','','','','39.0066209','-0.5119719');
/*!40000 ALTER TABLE `hospitals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialists`
--

DROP TABLE IF EXISTS `specialists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialists` (
  `id` int(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `specialty` varchar(45) NOT NULL,
  `city` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `avatar` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialists`
--

LOCK TABLES `specialists` WRITE;
/*!40000 ALTER TABLE `specialists` DISABLE KEYS */;
INSERT INTO `specialists` VALUES (1,'Javier','Gonzalez','Cardiology','Valencia','C.Valenciana','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(2,'Manolo','Tendero','Neurology','Valencia','C.Valenciana','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(3,'Paula','Vaño Calabuig ','Cardiology','Ontinyent','C.Valenciana','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(4,'Jaume','Cabanes Miro','Cardiology','Alzira','C.Valenciana','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(5,'Pepe','Belda Sempere','Neurology','Valencia','C.Valenciana','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(6,'Lara','Marti','Neurology','Gandia','C.Valenciana','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(7,'Francisco','Domenech','Microbiology','Gandia','C.Valenciana','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png');
/*!40000 ALTER TABLE `specialists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `id_document` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `repeat_password` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `activado` varchar(45) DEFAULT NULL,
  `internet` tinyint(10) DEFAULT NULL,
  `art` tinyint(10) DEFAULT NULL,
  `technology` tinyint(10) DEFAULT NULL,
  `literature` tinyint(10) DEFAULT NULL,
  `music` tinyint(10) DEFAULT NULL,
  `other` tinyint(10) DEFAULT NULL,
  `male` tinyint(10) DEFAULT NULL,
  `female` tinyint(10) DEFAULT NULL,
  `undefined` tinyint(10) DEFAULT NULL,
  `date_birthday` varchar(45) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `poblacion` varchar(45) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Carles','Catalan Calabuig',NULL,NULL,'10202907437082809','',NULL,NULL,'client',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Strongertogether','Daw',NULL,NULL,'121835875001352','',NULL,NULL,'client',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,NULL,NULL,NULL,'asdsad@asd.asd','$2a$10$nxhKmlHlgMdvMaR88Bc0XONJx/PHdVUWjezz3sB5c1/bHJgFssJvG',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-10 17:36:00
