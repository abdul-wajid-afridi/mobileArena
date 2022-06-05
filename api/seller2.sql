-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: seller
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_text` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (5,'lets try it again',40,'2022-06-01 16:07:17'),(6,'lets try it again and agsin now',40,'2022-06-01 16:15:28'),(7,'builders are taken',40,'2022-06-01 16:15:42'),(8,'Rally no is out',40,'2022-06-01 16:15:55'),(9,'om go laaal',40,'2022-06-01 16:16:10'),(10,'not this time boy',39,'2022-06-01 16:16:43'),(11,'ny ways are flying',39,'2022-06-01 16:16:58'),(12,'lol',39,'2022-06-01 16:17:06'),(13,'this is 51th product',51,'2022-06-05 07:18:56'),(14,'not 10 is awsome',48,'2022-06-05 07:30:01'),(15,'let give it a try',47,'2022-06-05 07:33:57'),(16,'near it',47,'2022-06-05 07:35:01'),(17,'working',47,'2022-06-05 07:37:38'),(18,'asad',47,'2022-06-05 07:37:50'),(19,'errtasasas',47,'2022-06-05 07:38:34'),(20,'testing body',47,'2022-06-05 07:39:17'),(21,'iphone 13',44,'2022-06-05 07:40:29'),(22,'why not',44,'2022-06-05 07:41:14'),(23,'gray color',44,'2022-06-05 07:43:22'),(24,'bg gradient',40,'2022-06-05 08:04:08'),(25,'yes thats the new mi note 10 mobile which is awsome',48,'2022-06-05 14:06:40');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hearts`
--

DROP TABLE IF EXISTS `hearts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hearts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hearted` int(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `hearts_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hearts`
--

LOCK TABLES `hearts` WRITE;
/*!40000 ALTER TABLE `hearts` DISABLE KEYS */;
INSERT INTO `hearts` VALUES (1,1,51,'2022-06-05 08:12:25'),(2,0,40,'2022-06-05 08:31:54'),(3,0,40,'2022-06-05 08:32:15'),(4,1,40,'2022-06-05 08:32:16'),(5,2,44,'2022-06-05 08:32:19'),(6,3,44,'2022-06-05 08:32:19'),(7,4,44,'2022-06-05 08:32:19'),(8,0,46,'2022-06-05 08:34:38'),(9,1,46,'2022-06-05 08:34:39'),(10,2,46,'2022-06-05 08:34:39'),(11,3,46,'2022-06-05 08:34:39'),(12,4,48,'2022-06-05 08:34:43'),(13,5,48,'2022-06-05 08:34:43'),(14,6,48,'2022-06-05 08:34:43'),(15,7,48,'2022-06-05 08:34:44'),(16,0,39,'2022-06-05 11:39:40'),(17,0,41,'2022-06-05 11:43:14'),(18,0,41,'2022-06-05 11:43:31'),(19,0,41,'2022-06-05 11:44:02'),(20,0,41,'2022-06-05 11:45:01'),(21,1,40,'2022-06-05 11:45:06'),(22,2,39,'2022-06-05 11:45:37'),(23,3,46,'2022-06-05 11:45:43'),(24,0,44,'2022-06-05 11:53:04'),(25,0,40,'2022-06-05 11:53:36'),(26,0,39,'2022-06-05 11:57:39'),(27,1,39,'2022-06-05 11:57:40'),(28,2,39,'2022-06-05 11:57:41'),(29,0,39,'2022-06-05 11:58:19'),(30,1,39,'2022-06-05 11:58:19'),(31,2,39,'2022-06-05 11:58:19'),(32,3,39,'2022-06-05 11:58:20'),(33,4,40,'2022-06-05 11:58:23'),(34,5,40,'2022-06-05 11:58:23'),(35,6,40,'2022-06-05 11:58:23'),(36,7,40,'2022-06-05 11:58:23'),(37,8,40,'2022-06-05 11:58:23'),(38,1,47,'2022-06-05 12:14:34'),(39,2,47,'2022-06-05 12:14:35'),(40,3,47,'2022-06-05 12:14:39'),(41,1,39,'2022-06-05 12:25:02'),(42,1,39,'2022-06-05 12:25:11'),(43,1,40,'2022-06-05 12:27:01'),(44,11,40,'2022-06-05 12:27:01'),(45,0,39,'2022-06-05 12:27:27'),(46,1,39,'2022-06-05 12:27:27'),(47,2,39,'2022-06-05 12:27:28'),(48,3,39,'2022-06-05 12:27:28'),(49,4,39,'2022-06-05 12:27:28'),(50,0,40,'2022-06-05 12:27:30'),(51,1,40,'2022-06-05 12:27:30'),(52,2,40,'2022-06-05 12:27:30'),(53,3,40,'2022-06-05 12:27:30'),(54,0,41,'2022-06-05 12:27:32'),(55,1,41,'2022-06-05 12:27:32'),(56,2,41,'2022-06-05 12:27:32'),(57,3,41,'2022-06-05 12:27:33'),(58,5,39,'2022-06-05 12:27:48'),(59,0,39,'2022-06-05 12:27:53'),(60,1,39,'2022-06-05 12:27:54'),(61,0,51,'2022-06-05 12:28:10'),(62,0,51,'2022-06-05 12:28:19'),(63,0,49,'2022-06-05 12:30:09'),(64,1,49,'2022-06-05 12:30:09'),(65,0,51,'2022-06-05 12:30:38'),(66,0,51,'2022-06-05 12:30:42'),(67,1,51,'2022-06-05 12:30:43'),(68,0,51,'2022-06-05 12:30:49'),(69,1,51,'2022-06-05 12:30:49'),(70,2,51,'2022-06-05 12:30:49'),(71,3,51,'2022-06-05 12:30:49'),(72,4,51,'2022-06-05 12:30:49'),(73,0,49,'2022-06-05 12:30:55'),(74,1,49,'2022-06-05 12:30:55'),(75,2,49,'2022-06-05 12:30:55'),(76,0,49,'2022-06-05 12:31:18'),(77,1,49,'2022-06-05 12:31:18'),(78,0,49,'2022-06-05 12:31:42'),(79,1,49,'2022-06-05 12:31:42'),(80,0,46,'2022-06-05 12:39:02'),(81,1,46,'2022-06-05 12:39:03'),(82,0,39,'2022-06-05 12:39:11'),(83,0,40,'2022-06-05 12:39:46'),(84,0,39,'2022-06-05 12:39:53'),(85,0,41,'2022-06-05 12:40:51'),(86,0,41,'2022-06-05 12:40:58'),(87,0,41,'2022-06-05 12:41:14'),(88,0,39,'2022-06-05 12:42:08'),(89,0,40,'2022-06-05 12:42:11'),(90,0,40,'2022-06-05 12:42:25'),(91,0,39,'2022-06-05 12:42:35'),(92,0,40,'2022-06-05 12:44:14'),(93,0,41,'2022-06-05 12:45:24'),(94,1,41,'2022-06-05 12:45:25'),(95,0,40,'2022-06-05 12:45:27'),(96,2,41,'2022-06-05 12:45:52'),(97,3,41,'2022-06-05 12:45:54'),(98,4,41,'2022-06-05 12:45:55'),(99,5,41,'2022-06-05 12:46:23'),(100,1,40,'2022-06-05 12:46:25'),(101,2,40,'2022-06-05 12:46:27'),(102,0,39,'2022-06-05 12:46:29'),(103,6,41,'2022-06-05 12:46:32'),(104,3,40,'2022-06-05 12:46:34'),(105,7,41,'2022-06-05 12:47:05'),(106,8,41,'2022-06-05 12:47:06'),(107,9,41,'2022-06-05 12:47:07'),(108,10,41,'2022-06-05 12:47:56'),(109,4,40,'2022-06-05 12:47:58'),(110,0,49,'2022-06-05 14:05:06'),(111,0,48,'2022-06-05 14:05:08'),(112,1,48,'2022-06-05 14:05:10'),(113,0,48,'2022-06-05 14:05:34'),(114,1,48,'2022-06-05 14:05:35'),(115,2,48,'2022-06-05 14:05:36'),(116,3,48,'2022-06-05 14:05:37'),(117,4,48,'2022-06-05 14:05:38'),(118,5,48,'2022-06-05 14:05:39'),(119,6,48,'2022-06-05 14:05:40'),(120,7,48,'2022-06-05 14:05:40');
/*!40000 ALTER TABLE `hearts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(200) DEFAULT NULL,
  `name` varchar(80) DEFAULT NULL,
  `company` varchar(80) DEFAULT NULL,
  `price` int(200) DEFAULT NULL,
  `memory` varchar(50) NOT NULL,
  `color` varchar(80) DEFAULT NULL,
  `link` varchar(80) DEFAULT NULL,
  `description` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (39,'http://localhost:5000/profile/profile_1650453130295.jpg','hovaivi uv89','hovaivi',45093,'4/128','green','https://cellmart.pk/oneplus-10-pro-12gb256gb-dual-sim-price-in-pakistan','it is a green color hovavi mobile'),(40,'http://localhost:5000/profile/profile_1650453312570.jpg','iphone 13 promix','apple',278122,'4/256','black','https://cellmart.pk/samsung-galaxy-tab-s6-lite-wifi-p610-price-in-pakistan','it is a black color iphone mobile'),(41,'http://localhost:5000/profile/profile_1650453395434.jpg','iphone 7plus','apple',278122,'4/256','white','https://cellmart.pk/samsung-galaxy-tab-s6-lite-wifi-p610-price-in-pakistan','it is a white color iphone mobile'),(44,'http://localhost:5000/profile/profile_1650453750159.jpg','iphone 13','iphone',32000,'4/128','gray','https://cellmart.pk/samsung-galaxy-tab-s6-lite-wifi-p610-price-in-pakistan','it is a gray color iphone mobile'),(46,'http://localhost:5000/profile/profile_1650453845651.jpg','xiomi red9','xiomi',16900,'4/128','blue','https://cellmart.pk/samsung-galaxy-tab-s6-lite-wifi-p610-price-in-pakistan','it is a blue color xiomi mobile'),(47,'http://localhost:5000/profile/profile_1650453969327.jpg','m1 y9','m1',20210,'8/256','blue','https://cellmart.pk/samsung-galaxy-tab-s6-lite-wifi-p610-price-in-pakistan','it is a blue color m1 mobile'),(48,'http://localhost:5000/profile/profile_1650454040065.jpg','sumsung note 10','sumsung',190200,'16/1tb','gray','https://cellmart.pk/samsung-galaxy-tab-s6-lite-wifi-p610-price-in-pakistan','it is a gray color sumsung note 10 mobile'),(49,'http://localhost:5000/profile/profile_1652944462158.webp','1q000 ','iq00 9 se',33000,'8gb/128gb','gray','https://www.amazon.in/gp/product/B07WHS7MZ1/ref=s9_acss_bw_cg_Budget_2a1_w?pf_rd','it a brand new company as international one'),(51,'http://localhost:5000/profile/profile_1652962975603.png','jumanji','ju jo',123000,'4gb/156gb','red','www.jumangi.com','it is in red color jumaj mobile');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reveives`
--

DROP TABLE IF EXISTS `reveives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reveives` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `description` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reveives`
--

LOCK TABLES `reveives` WRITE;
/*!40000 ALTER TABLE `reveives` DISABLE KEYS */;
INSERT INTO `reveives` VALUES (1,'siraj','siraj@gmail.com','siraj is a volantire developer for this community'),(9,'kali','kali@mail.com','nilled it');
/*!40000 ALTER TABLE `reveives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `email` varchar(33) NOT NULL,
  `password` varchar(44) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'zain@gmail.com','12345'),(2,'junaid@gmail.com','12345'),(3,'shami@gmail.com','12345');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-05 19:37:19
