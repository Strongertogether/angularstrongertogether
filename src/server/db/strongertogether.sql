CREATE DATABASE  IF NOT EXISTS `strongertogether` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `strongertogether`;
-- MySQL dump 10.13  Distrib 5.5.52, for debian-linux-gnu (x86_64)
--
-- Host: 92.222.94.202    Database: strongertogether
-- ------------------------------------------------------
-- Server version	5.5.52-0+deb8u1

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
  `name` varchar(30) NOT NULL,
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
INSERT INTO `hospitals` VALUES (1,'Hospital General de Ontinyent','ninguna','Ontinyent','Spain','Hospital de ontinyent','38.8202367','-0.6041065');
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
INSERT INTO `specialists` VALUES (1,'Javier','Gonzalez','Cardiology','BADALONA','08','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(2,'James','Adams','Neurology','default','default','US','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(3,'Paula','Vaño Calabuig ','Cardiology','BADALONA','08','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(4,'Jaume','Cabanes Miro','Cardiology','BADALONA','08','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(5,'Pepe','Belda Sempere','Neurology','Valencia','cv','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(6,'Lara','Croft ','Neurology','New York','default','US','/proyecto_v3/media/1279412902-1025640568-flowers.png'),(7,'Francisco','Domenech','Microbiology','BADALONA','08','ES','/proyecto_v3/media/1279412902-1025640568-flowers.png');
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
INSERT INTO `users` VALUES ('','','','','asdasd@asd.asd','$2y$10$IDaO0dNJPjCVWVvD9HWlXePiLneN4yjlJm86MQv38uLEo0wxOzb0C','$2y$10$8Zy1c4yCuaKOTdWDtOt6se5aQK9jKo8rkLEwybFQ1afrpvkZKW1fK','Verefee6e21a549079342ebc4e347a574f5','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/6bffba310f727d90f6c86636cfe2aa886bffba310f727d90f6c86636cfe2aa88?s=400&d=identicon&r=g'),('','','','','asdasd@gmail.com','$2y$10$wTFajFITK.6vW/WQWP5RMOgpIMAUco0OuHop6Lf/Nx0k2LleuExHK','$2y$10$qP2SyXNTc4oSBzpI8F1see5AVPrwq89EODGuW10lgNYFPS8910qLC','Ver3fbffd03216d88dbdbf726bd01d3fd17','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/5811b64ffd2fa7116580dafa02d9bb7b5811b64ffd2fa7116580dafa02d9bb7b?s=400&d=identicon&r=g'),('','','','','asdsasd@gmail.com','$2y$10$GD.ozyNmZ2vobXTkyyrDH.5yW56eQ.5dZ9TbyDeb3SVwV/trPe9Um','$2y$10$90PK3lXOnFPdX2rhhOXXA.jFXj2KHk3fRBqyTMTIY8RTh.vFT5rwC','Ver6e845cb4b18e86cedce17a2a4f3534e8','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/7a0f4bf2bd0b87d2a7600d1456ff16737a0f4bf2bd0b87d2a7600d1456ff1673?s=400&d=identicon&r=g'),('','','','','asdssdasd@gmail.com','$2y$10$LOLUSbnbUSydVFJ2sriuWOkAqtYA6v7VBDSdADShw7IigGvfhYMPi','$2y$10$JCQ6jmrmskacttfk6Nfku.Ehz91Ltb6Q9qPaufb9HX3.XLWnJ9fSK','Verbdf95892b113ca50936757569472be70','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/06c2fbbdeee2eaff9da8a7bce5e4087306c2fbbdeee2eaff9da8a7bce5e40873?s=400&d=identicon&r=g'),('','','','','asfasasd@asd.asd','$2y$10$STU96mfWytfkw31QjlX/b.g5N4FlR.9OCj2JtERngLzpeoW2uF0GK','$2y$10$9Ps7gPdrg/4OT5bmWaUOAOZzUYH7LHRQZ8MUHy3QcCpkjMiHayfxi','Vera50bd9d539c13b558502f02d95ab43fb','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/cb6a22ea024e185585a8166cb6b6636fcb6a22ea024e185585a8166cb6b6636f?s=400&d=identicon&r=g'),('','','','','aylmao@gmail.com','$2y$10$gF9BuucKQVE1U168NlsI2uyosX1mvFHTSB7HZ6ddvElzQDfDujHS6','$2y$10$oVZS6AZsGbgRlpVB39zxO.xxMkMzjmC96vNK6Bpd0FrEMHnNugLg.','Verd9e9c9426f4073dfc1913c2c0178803a','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/d438ba2f8d96040a68c9b253e94af3fdd438ba2f8d96040a68c9b253e94af3fd?s=400&d=identicon&r=g'),('','','','','calavera@gmail.com','$2y$10$bQDFMMlOBOCxFqAgdBJs7.jeYFYglAgH5j7/4WIj5rV/hNS/.jBjW','$2y$10$eRnlEepJ9RjwyST5VI/2auQhLmrlG/OPPno6SL0aW9AdalmAGul7K','Ver7958d3aaa1e63f5f092ab86666caed33','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/e4b6af8fe0c57a3dee6d69220b9dc639e4b6af8fe0c57a3dee6d69220b9dc639?s=400&d=identicon&r=g'),('Carles','Catalan','70234426Q','664190144','carles@gmail.com','$2y$10$gBy1h7M0XEHe3akIulxLeey6rWprs0gi/YLGnE','$2y$10$BnIxvePjOvm3jYSOPX9i8OuMi1fttt34HBo4XP','','','',1,0,0,0,0,0,1,0,0,'01/12/1980','AO','','','media/default-avatar.png'),('Yomogan','Mataix','','654654654','carlescatalancalabuig@gmail.com','$2y$10$BZ/KT4yJ6HqSgWLHy9aWY.fT1DokLZ/rU24vJaIY2zVn3.BVASKci','$2y$10$St9d0ZwIB5kdIHmEYG1x.Ow27oVTv6jaVh.lY3As5rdLbDOxNgPS2','Cha3cd85e120433d4a6861f2914ae36604e','client','1',0,0,0,0,0,0,0,0,0,'01/04/1977','','','','https://www.gravatar.com/avatar/5bb8a94870d9092805fbcd202437f4de5bb8a94870d9092805fbcd202437f4de?s=400&d=identicon&r=g'),('Manolito','Catalan Calabuig','49634578A','664190144','chalscc@gmail.com','$2y$10$TciP4Z04wA5nWWXyCdp9yeOJzP2/s.OCCyqbtciafmx1IPhhlHnJG','$2y$10$O5P32T4H9vYuYmDlgq/UWOJtw1HqeEdZJw9WwaBep1KSdomQBJZ3.','Ver2334790cb96d3d564509d78f219374c7','client','1',0,0,0,0,0,0,0,0,0,'01/08/1985','','','','https://www.gravatar.com/avatar/92432d672ae8036cb22da0c307cf7f2f92432d672ae8036cb22da0c307cf7f2f?s=400&d=identicon&r=g'),('Carles','Catalan Calabuig','','','chals_cc_@hotmail.com','','','10202746543420568','client','1',0,0,0,0,0,0,0,0,0,'','','','','https://graph.facebook.com/10202746543420568/picture'),('','','','','dfgdasf@asd.asd','$2y$10$hxcVmkCucEPf3Em/nkTkCeoeWHvnX.Xaz2tKp4eyUSPntbY5IOiRy','$2y$10$kmeIYaYns0wUGtLMB1lh..g.V8N9LDF0zkUqjnrcs5grbgUsJuFE6','Ver50add7cdf456d38fe4fe4cd220230d39','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/3518ceeb97a7217ad8bb145c0516fc6a3518ceeb97a7217ad8bb145c0516fc6a?s=400&d=identicon&r=g'),('','','','','dfgdhsdgf@asd.asd','$2y$10$POfIKjZHekZJHImqY8m0uOyFo1SHL.EijiDHFmgKfeGenjptjwbhG','$2y$10$COS7soMYSldjbR.xiSIY8e9HwzGCb4jxHB8WFr6Iq0zEukGhBvR.y','Ver7706f85ee974d13f78ee6dc3ace66060','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/1e5b2d258a1bbecc02235e8999e8debd1e5b2d258a1bbecc02235e8999e8debd?s=400&d=identicon&r=g'),('','','','','dskjhgsdhf@gmail.com','$2y$10$KpzsF4rtdP43anDzotus4ueh7MC2FkYPGbCpzsbSDtpv4LHwjnXSy','$2y$10$mUVMNaQPHBO/Vd.rka.u/Ow1gINGWJHm5M4yBJNJSiFEKn.fekjA2','Verc5eb5d94af22d031339d5e5f8319e749','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/4c68e22f7850f2f4a54957953ac7b47e4c68e22f7850f2f4a54957953ac7b47e?s=400&d=identicon&r=g'),('','','','','fghfdghdfg@gmail.com','$2y$10$TRdu.G1EILQZRWKCG6ygWOF9eeiQg/8RPSdMpVJV.iGGesy2gboOC','$2y$10$Btm9FoggHrZDaTgq2IlBUeniUmkA.6l64NuorcxjgVpa6nJMJe2ha','Ver3e37916442763e8ba59650af47ebc3e3','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/28ceda954ce0866cffc222d3878b10ae28ceda954ce0866cffc222d3878b10ae?s=400&d=identicon&r=g'),('','','','','fghfdsdfghdfg@gmail.com','$2y$10$uJtVNHZGKDdkXfRYEGtVAuNtWiAKcp2Rif6G16CPXhL3TPUa9wdHy','$2y$10$amTEJ6WNs1a3oQjbGflP8enlBSsMcVow0.rSlk2k66Zt.T/44O8Cy','Verf2e3ffc856f13adc8bd3369d6dc8e265','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/855bb7bf9f4a9f5360eba3f4839eab8b855bb7bf9f4a9f5360eba3f4839eab8b?s=400&d=identicon&r=g'),('','','','','fgjhghj@gmail.com','$2y$10$WC6y.PUo2Z6iU3leZUZnEu0fKz1DwxgIDa.6mnFvMq1XgkoegjnJW','$2y$10$Kr8Dbg1YZ6ZMXfa34o7fWO5lEoZ5RQrki/G87aYwcpoDbzU1Xpw8W','Verfd04ea78a25d98f61b0e0576ed71d214','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/1545b0deab390dcc0f09a649c99524161545b0deab390dcc0f09a649c9952416?s=400&d=identicon&r=g'),('','','','','fgkjkjlkjfdg@gmail.com','$2y$10$w1aSpgram.DRVQepMtDXr.FutOFQNrW4hHwuMF8BAWXebSC5W9WGK','$2y$10$V2U3Z28kVrbgjp4XwvvONOGM7sbCVNu6m7JX35248B.eU1VLWLPcq','Ver44c62b4d9f3cda84e77fe73a7546d408','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/bef5a53c2049857f782dce64c721f1d4bef5a53c2049857f782dce64c721f1d4?s=400&d=identicon&r=g'),('','','','','fjkjfg@asd.asd','$2y$10$psHrMHlxr0cydhjlRxZ76eTrL/3QEQdK33bnl35.5eOjkBApd.08q','$2y$10$GCEfd8wkKoY3ttToFWnKu.k7PRl0QvxXqEFj6e4mAbR01fKEVcUE.','Verdc4382bcb12cc166a7f2eaee76ea6c64','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/1a93eafea3308b9dafec399729d321b81a93eafea3308b9dafec399729d321b8?s=400&d=identicon&r=g'),('','','','','gdgdfg@asd.asd','$2y$10$VdtbppO0CUJ17vj/GlsWleoGNnhVPWdbfaWfC4CZS1TCRvOaVGX7a','$2y$10$flFu12Px5LaKE9XiejqevOTdwu5iLx1C9lQ9aNpq6zQIo...sKI1u','Verb2473dce412a873d1ed8119788100236','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/ce225ea9ad5f8f1ff679fd317e0a631dce225ea9ad5f8f1ff679fd317e0a631d?s=400&d=identicon&r=g'),('','','','','ghjdhgj@asdsad.sad','$2y$10$VvqwV67MWRnVdYIARGYn/.gZwXAOBNw5pe.r.fW09StYH//dv/kR2','$2y$10$JSIyvoFxmF/bIbSdobP5uOJr4asrrj5wquDWyg89cqNKHlnXJpqcm','Verabc35011db0fc4b183a7f7ee074326c6','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/b921039d808174e22d7b63c8ecff1b3db921039d808174e22d7b63c8ecff1b3d?s=400&d=identicon&r=g'),('','','','','ghjhgj@asdsad.sad','$2y$10$DUqSDdq2..Q4obS5dLsDF.aAaNW8E.angai8W9MifOpQnUNsvFSZW','$2y$10$cYsQWceu0vDjtzgWo3SzJOWs/wPrM9RLvIEBuaQbQ7OQKagdrWzTO','Ver07c98fa4fcf075e875405953cd16ff4b','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/5c1cf2ef5917b7b12806494b2180bfb85c1cf2ef5917b7b12806494b2180bfb8?s=400&d=identicon&r=g'),('','','','','jgsdfsdf@asdasd.asd','$2y$10$lcVd5bLxhZw/vqlRMaECze1fceaZW8haQl80/aNLipdDxICma8UNq','$2y$10$2tp3ruJ1JuRe3.0T85foBOOfFGkTHm7T.Kan0zA3tVDmmv4fN1NO2','Ver7f21cbc6e5c8bf8a37a9dae09486a029','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/2439642e7f64470f47c29feef445b1c52439642e7f64470f47c29feef445b1c5?s=400&d=identicon&r=g'),('','','','','jhgsajhdsa@asdsda.dsa','$2y$10$I91iPmjYR8mJ4Kswz6Q7Mez9Qdcg5UGvsKlZIr15KWE0HpCqrb./6','$2y$10$k5oSI.bC8nQIj19OtCOmXec5MPuRqei8Mxu2sTj.ezyD3nbFSggoO','Verc23fee29e791e51beb2335693d82d8e3','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/7d1eb22233a220e9a261089077fdf0897d1eb22233a220e9a261089077fdf089?s=400&d=identicon&r=g'),('','','','','jkhdsgkjsdf@asd.asd','$2y$10$F2l1xoOX9MY9rSto368PYunKGRAXwEsm3ElmDWVhpuvylRAD1uyEG','$2y$10$XeqBRe3p9S4DSYAANUkCXuFSNQzmiFdOIHMZFIMDSUx4t9j8epAAu','Ver34fc4dea9a34bc511575abdfa99c3b55','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/c4cf158278aeb9c27e6823e7be5419eec4cf158278aeb9c27e6823e7be5419ee?s=400&d=identicon&r=g'),('','','','','jkhsdfsjdf@asd.asd','$2y$10$NUlEotojE2BRf.7z5JAnyu6Ig3s2W7TEALi8qf182A4wOxY/zmQfG','$2y$10$9nhL.qIR6L2cXeCnz8CPaeF0qAJKrXSATYY08AvP6ZVaWld3O9obK','Verf1a25cd91b41f34c78be3d0f846a0450','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/6b5d24524c0b48e83930626ad32d91ff6b5d24524c0b48e83930626ad32d91ff?s=400&d=identicon&r=g'),('','','','','kjhsdgfsjdf@asd.asd','$2y$10$zTq1Ud8ugerxxXlgHIoLYusTOZx9k4/RiZwGo6Srj0onDaDzuProK','$2y$10$vO5PrSz9po/fflSmTECKcOa1EXsJyGhUA/cyv2fS1wgI1FTLGX9RS','Ver9076dfd2fc66581f8b7e5594523988f9','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/47c8d58216d2675efb758f692674a41e47c8d58216d2675efb758f692674a41e?s=400&d=identicon&r=g'),('','','','','kjshfdksjdhf@gmail.com','$2y$10$tX2658svxMueWnxnGwvw8Oc.pLOnnnTs9ALmUlGGEymbQ5ejdUeUa','$2y$10$DaPqwFBCM.eoZGO9mithIeb.Wj2AGLmAFNFnIUpyu89tgMHL/i6xO','Ver4103f24aa4e8e2e1f3a71604dafa47f4','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/11acd2a997ff1437ec8f6b5246a45a3911acd2a997ff1437ec8f6b5246a45a39?s=400&d=identicon&r=g'),('','','','','lola@gmail.com','$2y$10$MMJ95v3UlPYLayQrQWyrXe/drIejjYHQumQ36PNlXXOEh3/PgagHi','$2y$10$xZg0B1jmWa2NwOz8K0O4t.hzjOKkVr/TU1DRgbkV3LxEdoXAH.tQO','Vere6d40126bb681400457ed1eef315a545','0','client',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/3cedcc28745082e7812dc7f0112bfd113cedcc28745082e7812dc7f0112bfd11?s=400&d=identicon&r=g'),('','','','','lululullu@gmail.com','$2y$10$thLW776yxmDiCKXv4g2qe.TTu.X47Q.Mi.tri06lTVtuxKecRUbue','$2y$10$vfe70EntjLD3EYxHdG/EluLOEx9nvGCl0hlRGouLkONr3aL9y/QYi','Vera303798f3388a4ab61e7b030603c646e','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/2b8a773d7cfc6fe4885d86c7b16c80002b8a773d7cfc6fe4885d86c7b16c8000?s=400&d=identicon&r=g'),('','','','','manoli@gmail.com','$2y$10$IPX7k1J/tQluOkbsZ3m4EukGUg97nXEjnSNlRcnBMs/I9EZABx94m','$2y$10$ZTfNbtMLrbMdTzXwRtp0VebJlMClNFbuOSohQlCn1oGJJoGk/gePa','Ver07273a740826c41269937be996812ff9','0','client',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/14084375a04c4514650e47be76a7dc1514084375a04c4514650e47be76a7dc15?s=400&d=identicon&r=g'),('','','','','manolitin@gmail.com','$2y$10$iwRxPjxbln0xRmp3UmOwjuxtLLNUeqmnVBZ4yAMuQfZlLMxUzSRh6','$2y$10$C90tIAyxI/TO.3fVcZ234.CtrJe3Anbxe5mvkgsdEKzeuTPB4umNy','Ver25e8c8ac6f7e4a54c4bbb4329ddfea27','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/453d33c27e3b731adeef2b32a2eb22e6453d33c27e3b731adeef2b32a2eb22e6?s=400&d=identicon&r=g'),('','','','','manolito@gmail.com','$2y$10$DfWM4khvOrG1SxoSGXpwteHtsUHK7Fx/7YDrUWwgQNvq1OEMIb.ZK','$2y$10$6x0ODhzZMpTUegaUDDeWpeshzewiq1D/lx9CyfqTbvISTQPyLB8YO','Ver83201a5c7fe3ee38d8f7779be66e24b2','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/388b69e1b69183454d15a0feed101799388b69e1b69183454d15a0feed101799?s=400&d=identicon&r=g'),('','','','','mataix.lluis@gmail.com','$2y$10$F7KHIHLzuMjpKhvFTfmyLO8qhwLDgNYa/uWYCUcdjoiAmDBNrLEym','$2y$10$Y6izl0xm4BjqVc.rOwxX8eEDcDe3inq1ckolZZzAt0c9FuRHmZS/q','Ver2744548c4789a4ac5c690e8f7904b469','client','1',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/7d8cb938023947574f6fdd50e117aba77d8cb938023947574f6fdd50e117aba7?s=400&d=identicon&r=g'),('','','','','pepica@gmail.com','$2y$10$7PME4YXBbnFif1IBEQPeZ.eG3SU7X3kxlkXRV4R0SxqzKEU8tOanC','$2y$10$wQ0dTe0lJyLZSIYf/ToFheM/x73dlNTRDEmner6Mq1ZFIPII38r/W','Verd8696e2c8738abcc0f89e86fc63c1f86','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/2843629c95043c91fc2109b8c560bc082843629c95043c91fc2109b8c560bc08?s=400&d=identicon&r=g'),('','','','','pepita@gmail.com','$2y$10$SqFLqQ2t61fSKON8N0YaW.Wg8NUiDDRtvMLGmcfu4gXW6Uq2YwTXq','$2y$10$GsdDgijjq.5.aGfVWMl/6u6NGY6mrBWkxQC9nZpwGzwUKHMytHqSe','Ver3efeb780a9200426d3d2737c4c9598f6','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/440b4cbe6c39197af1aa9f780a271e1c440b4cbe6c39197af1aa9f780a271e1c?s=400&d=identicon&r=g'),('','','','','pepitolospalotes@gmail.com','$2y$10$CX62s.XuRxbpUPYa3Xb82.xQ.vE7j.sj5wNh0MpXWzKcaYMlJbtFS','$2y$10$fmowOgcsBWy1HtrPGuKW0ONy5WL/5qApjTnq5eFyG23oyVTvdXZuO','Vera14588e29e67ab9acfdbc8529c26dda3','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/fae664e0d289a840cc43baf660716827fae664e0d289a840cc43baf660716827?s=400&d=identicon&r=g'),('','','','','periquito@gmail.com','$2y$10$dIEByLJQgeMgjTs0qvZl2e5IxJuJnXdlfg9G4CXbo/qTt7s7ixj7G','$2y$10$BVFO4K4ZA.J51Prv4zCpAOlnMLDT/HjjsTGAvoROWwE8Qv.Q8no3m','Ver0adc52d5d07274eb96f79c0030b4501a','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/33c33fc77f7c5a50e71e99a28504087733c33fc77f7c5a50e71e99a285040877?s=400&d=identicon&r=g'),('','','','','rosa@gmail.com','$2y$10$qsnU3OS5GRPCTLUWEfCLpOeBlnFh.a3pufNIEueV7iSw1xFMreVte','$2y$10$pKzFkm7tW/F4XFqZxVuV/O8BEx4rUCGhKs4fVxwDk0KsGASHs5F4.','Ver8bf5498bc13c23c1df7afecccbb9af53','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/52018f0d94f625c5c5db9f3b2822e79652018f0d94f625c5c5db9f3b2822e796?s=400&d=identicon&r=g'),('','','','','sadfsdf@asdasd.asd','$2y$10$G9mOvihhjVjWTNHoMfxtiu6THjKtC81/3Zyxon0PWqbVRWzXE2YvW','$2y$10$55qcQfzuOlOmC2S2y3H9BubB4JpYEQ23QhlhcJ9KrPQLlbjzk0G3a','Ver8c3229dfb1c486c43b95d312e5317d4d','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/8094bfda2d33a8ae95a00982198067278094bfda2d33a8ae95a0098219806727?s=400&d=identicon&r=g'),('','','','','sdfsdf@asd.asd','$2y$10$HoyBEou5ed8Hr4LLe4D0Ve2CmzcSXcT0QBv6udUo9UCAItQzdKXmq','$2y$10$98CGolaqjUGzkwqw2tJOMOiPyNgLE9yNx5vJfCyblDQ0gPswZUGCe','Ver1d7a760c0b852659b1d7aed8e5aae0d6','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/2ecd8525de394bc060811afcbbfd1b502ecd8525de394bc060811afcbbfd1b50?s=400&d=identicon&r=g'),('','','','','skjhdghkjsdf@gmail.com','$2y$10$doOoN5k2c5KSeBtPsTqCb.6hq.a96lAIRpQZv7aiSkl7qR2ORK0y.','$2y$10$yEfhYQg/YXbB7EhYkfgiae3pFBT.rPfVVrHbsdFQcVdmSc8opwVya','Ver13ab3c6b0c1d7122ecfc226b7e0241ad','client','0',0,0,0,0,0,0,0,0,0,'','','','','https://www.gravatar.com/avatar/fd0e1c57d247bfa5d21110f8ca7a42fffd0e1c57d247bfa5d21110f8ca7a42ff?s=400&d=identicon&r=g'),('Yolanda','Monerris','','','yomogan@gmail.com','','','686130544894314','client','1',0,0,0,0,0,0,0,0,0,'','','','','https://graph.facebook.com/686130544894314/picture');
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

-- Dump completed on 2017-01-25 17:29:31
