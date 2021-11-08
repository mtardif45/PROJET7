-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: database
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `PostId` int NOT NULL,
  `UserId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PostId` (`PostId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (3,'','pas mal!',3,3,NULL,NULL),(5,'kirua','test create comment',2,10,'2021-09-14 10:16:22',NULL),(6,'kirua','test create comment number 2',2,10,'2021-09-14 15:14:32',NULL),(7,'kirua','test create comment number 3',2,10,'2021-09-14 15:39:23',NULL),(8,'kirua','kpigeoijgroigrt',2,10,'2021-09-15 08:49:40',NULL),(9,'kirua','test comment ',2,10,'2021-09-15 08:51:12',NULL),(10,'kirua','test pour get all comments list',2,10,'2021-09-15 10:38:33',NULL),(11,'kirua','several comments on same postId',2,10,'2021-09-15 10:38:44',NULL),(14,'flower','check',27,47,'2021-09-16 08:41:55',NULL),(15,'flower','test',35,47,'2021-09-16 14:07:44',NULL),(16,'flower','c\'était quand? quel combat?',35,47,'2021-09-16 14:39:14',NULL),(17,'kirua','test ',37,10,'2021-09-28 15:06:44',NULL),(18,'kirua','beautiful! where is it? ',19,10,'2021-09-28 15:38:44',NULL),(19,'kirua','Et des tartes aux pommes...',9,10,'2021-10-06 17:26:24',NULL),(21,'kirua','test comment',28,10,'2021-10-06 18:41:16',NULL),(22,'kirua','appétissant',39,10,'2021-10-15 17:56:52',NULL),(23,'admin','top',39,51,'2021-10-15 18:25:14',NULL),(24,'admin','oifhuaoijfoez ',39,51,'2021-10-15 18:25:49',NULL),(25,'kirua','nouvelle photo',41,10,'2021-10-29 13:38:55',NULL),(26,'kirua','superbe!',33,10,'2021-11-05 20:58:11',NULL),(27,'kirua','un commentaire',43,10,'2021-11-08 10:10:51',NULL);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,47,36),(2,10,34),(8,10,2),(10,47,2),(11,10,23),(12,47,29),(19,10,19),(26,10,9),(27,10,9),(28,10,9),(29,10,39),(30,51,41),(31,10,41),(32,10,43);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `pseudo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_ibfk_1` (`userId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'salut l\'équipe','http://localhost:3000/images/teamwork-3213924_1280.jpg1633529207378.jpg',5,NULL,NULL,'John'),(3,'bonjour! voici une photo de nos bureaux ','http://localhost:3000/images/teamwork-3213924_1280.jpg1633529207378.jpg',3,NULL,NULL,'test'),(6,'team work ','http://localhost:3000/images/teamwork-3213924_1280.jpg1633529207378.jpg',47,NULL,'2021-10-06 16:06:48','flower'),(7,'test create post','http://localhost:3000/images/coffee-g0f0560ad3_1280.jpg1633529387654.jpg',47,NULL,'2021-10-06 16:09:48','flower'),(8,'test update text only','http://localhost:3000/images/umbrella-g001af3b1d_1280.jpg1633529543759.jpg',47,NULL,'2021-10-06 16:16:32','flower'),(9,'c\'est la saison des pommes!','http://localhost:3000/images/apples-g8cd08d648_1280.jpg1633529865045.jpg',47,NULL,'2021-10-06 16:17:45','flower'),(19,'favorite spot! guest where?','http://localhost:3000/images/rio.jpg1631122768148.jpg',10,NULL,'2021-09-28 15:43:11','kirua'),(23,'test img','http://localhost:3000/images/Anita.png1629967412660.png',10,NULL,NULL,'kirua'),(27,'update text and image','http://localhost:3000/images/bjj.jpg1631089759167.jpg',10,NULL,NULL,'kirua'),(28,'img pour test','http://localhost:3000/images/Timbjj.jpg1631002555564.jpg',10,NULL,NULL,'kirua'),(29,'hellooooowwww guys','http://localhost:3000/images/test.png1631122862836.png',10,NULL,NULL,'kirua'),(30,'test moment package for date time','http://localhost:3000/images/Timbjj.jpg1631175973526.jpg',50,NULL,NULL,'newUser'),(31,'olympic lift -- test heure et date','http://localhost:3000/images/Olympic-Lift-Movements.jpg1631199015921.jpg',10,'2021-09-08 17:15:59',NULL,'kirua'),(32,'test again date of update','http://localhost:3000/images/logomya.PNG1631254685385.png',50,'2021-09-10 08:18:05','2021-09-10 08:44:15','newUser'),(33,'« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »\n\n','http://localhost:3000/images/shark.JPG1631265853485.jpg',51,'2021-09-10 11:24:14',NULL,'admin'),(35,'test suite erreur de fichier','http://localhost:3000/images/test.jpg1631633107280.jpg',10,'2021-09-14 17:25:07',NULL,'kirua'),(37,'test auh ok ','http://localhost:3000/images/ab195214c5ab1fa9635f9b2038b1200.png1632834372175.png',10,'2021-09-28 15:06:12',NULL,'kirua'),(38,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','http://localhost:3000/images/teamwork-3213924_1280.jpg1632917531385.jpg',51,'2021-09-29 14:12:11',NULL,'admin'),(39,'season vegetables! ','http://localhost:3000/images/food.png1634032408512.png',51,'2021-10-12 11:53:29',NULL,'admin'),(40,'une nouvelle ','http://localhost:3000/images/face_co_(9).png1634313488737.png',10,'2021-10-15 17:58:09',NULL,'kirua'),(41,'test publication ','http://localhost:3000/images/avatar-gratuit.png1635507496288.png',10,'2021-10-29 13:38:16',NULL,'kirua'),(43,'test','http://localhost:3000/images/ab195214c5ab1fa9635f9b2038b1200.png1636362598779.png',10,'2021-11-08 10:09:59',NULL,'kirua');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'test','test@mail.fr','undefined','http://localhost:3000/images/logo.png1634056710623.png','bonjour à tous.',NULL,'2021-10-12 18:38:31',0),(5,'John Doe','john@mail.fr','undefined','http://localhost:3000/images/face_co_(3).png1634056741773.png','salut, super idée de site',NULL,'2021-10-12 18:43:32',0),(10,'kirua','kirua@mail.fr','$2b$10$KRjJjaBl7ULeH.et8G/eIurAHa.9ksGEKSPLoZnZ077lR0wn10qoS','http://localhost:3000/images/kirua.png1632841212668.png','salut moi c\'est kirua',NULL,'2021-11-05 20:58:56',0),(11,'jay','jay@mail.fr','$2b$10$BBSDiElQ4XmnXXTu9erWjefiEnPDxeMw/eECjDffBglL4pAKP4R8W','http://localhost:3000/images/face_co_(1).png1632912551824.png','Salut! moi c\'est jayyyyyy',NULL,'2021-09-29 12:49:12',0),(13,'Hisoka','hisoka@mail.fr','$2b$10$aDFJ.p62bgKeQars4U2xgu8gmiOWS1lmlnoetcul02ust7xjCxKse','http://localhost:3000/images/face_co.png1632912503236.png','my name is hisoka! happy to be here',NULL,'2021-09-29 12:48:23',0),(47,'flower','flower@mail.fr','$2b$10$zidC1o26rVEl7k5QImAUQeJETHHs3AGuDYizTXDuR5Rz22J.xSPYS','http://localhost:3000/images/flower.png1633529496267.png','Salut moi c\'est flower! je teste une fonctionnalité',NULL,'2021-10-06 16:21:46',0),(50,'newUser','newUser@mail.fr','$2b$10$M5ps2G6FRatEG3dxBtMgAuieLG6dLmyOWCVshfow8djOWvVxgZ/lG','http://localhost:3000/images/face_co_(9).png1632912713968.png','test update bio only! newuser test',NULL,'2021-09-29 12:51:54',0),(51,'admin','admin@mail.fr','$2b$10$f6myqWJu5y5bxrzaZq2MYO/IrSoHZbbrYcGWvXIewKxf6Ew2VS9OS','http://localhost:3000/images/mimi.png1634029180315.png','je suis l\'administrateur du site, je supprime les comptes et les posts ','2021-09-10 10:39:05','2021-10-12 10:59:40',1),(52,'gatame','gatame@mail.fr','$2b$10$Sjh/35QxR9nhywBNNb..IOiOTUQL1Pa49lwASY6U0IvQqfOebgQZW','http://localhost:3000/images/face_co_(5).png1632912628388.png','salut! moi c\'est Gatame','2021-09-10 11:07:44','2021-09-29 12:50:28',0),(53,'mimi','mimi@mail.fr','$2b$10$hFf3XoFoDGSCKoDDTLBFY.UELJrP89m.2vv.hUQ8LLmqUiAr18iBi',NULL,NULL,'2021-10-13 08:37:10',NULL,0),(54,'Benou','benou@mail.fr','$2b$10$O/BTLCWm3nVN.lAe4PId9OpT.povqFBpYvs00.6OWpvtlvV/IN3P6',NULL,NULL,'2021-10-13 08:41:09',NULL,0),(55,'kimura','kimura@mail.fr','$2b$10$cSv6D1Lp8VFGPsAQg.h1Mu5h40HHHhaUNGU4EUGmyR23xadfr8G0a',NULL,NULL,'2021-10-13 08:45:19',NULL,0),(64,'toutie','toutie@mail.fr','$2b$10$PTrGewT47VYbm/KQUJkiveLeOtsFZmfj6oPKixkmWpBgG5nlilK3u','http://localhost:3000/images/yara.png1634129047121.png','Salut! Vous me trouverez à la machine à café!','2021-10-13 09:52:33','2021-10-13 14:44:07',0),(69,'lydia','lydia@mail.fr','$2b$10$kqxoU1agU1EG.E2pR3eTSeosoeMToop0jYE6BRrjLnIzQK8J6bALO','http://localhost:3000/images/avatar-gratuit.png1634131191048.png','Si besoin, comptez sur moi. je suis Madame \"tout faire\" de l\'entreprise','2021-10-13 15:08:26','2021-10-13 15:19:51',0);
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

-- Dump completed on 2021-11-08 11:53:08
