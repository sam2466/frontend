-- --------------------------------------------------------
-- 主機:                           127.0.0.1
-- 伺服器版本:                        8.0.30 - MySQL Community Server - GPL
-- 伺服器作業系統:                      Win64
-- HeidiSQL 版本:                  12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 傾印  資料表 onlineshop.admin 結構
DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `a_id` varchar(8) COLLATE utf8mb4_general_ci NOT NULL,
  `a_pass` varchar(8) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  onlineshop.admin 的資料：~0 rows (近似值)
DELETE FROM `admin`;

-- 傾印  資料表 onlineshop.brand 結構
DROP TABLE IF EXISTS `brand`;
CREATE TABLE IF NOT EXISTS `brand` (
  `bname` varchar(18) COLLATE utf8mb4_general_ci NOT NULL,
  `b_id` int NOT NULL,
  `b_addr` varchar(16) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  onlineshop.brand 的資料：~3 rows (近似值)
DELETE FROM `brand`;
INSERT INTO `brand` (`bname`, `b_id`, `b_addr`) VALUES
	('NewBalance', 1, ''),
	('Nike', 2, ''),
	('adidas', 3, '');

-- 傾印  資料表 onlineshop.customer 結構
DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `c_id` varchar(8) COLLATE utf8mb4_general_ci NOT NULL,
  `c_password` varchar(8) COLLATE utf8mb4_general_ci NOT NULL,
  `cname` varchar(8) COLLATE utf8mb4_general_ci NOT NULL,
  `addr` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `c_email` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `c_birth` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  onlineshop.customer 的資料：~0 rows (近似值)
DELETE FROM `customer`;

-- 傾印  資料表 onlineshop.item 結構
DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `i_id` int NOT NULL AUTO_INCREMENT,
  `i_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `i_price` int NOT NULL,
  `i_quantity` int NOT NULL,
  `b_id` int NOT NULL,
  `t_id` int NOT NULL,
  `description` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`i_id`),
  KEY `b_id` (`b_id`),
  KEY `t_id` (`t_id`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`b_id`) REFERENCES `brand` (`b_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `item_ibfk_2` FOREIGN KEY (`t_id`) REFERENCES `type` (`t_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  onlineshop.item 的資料：~4 rows (近似值)
DELETE FROM `item`;
INSERT INTO `item` (`i_id`, `i_name`, `i_price`, `i_quantity`, `b_id`, `t_id`, `description`) VALUES
	(1, 'NB休閒鞋', 100, 10, 1, 3, NULL),
	(2, 'NB運動鞋', 160, 3, 1, 3, NULL),
	(3, 'NB運動上衣', 200, 3, 1, 2, NULL),
	(4, 'NIKE跑鞋', 500, 6, 2, 3, NULL);

-- 傾印  資料表 onlineshop.record 結構
DROP TABLE IF EXISTS `record`;
CREATE TABLE IF NOT EXISTS `record` (
  `r_id` int NOT NULL,
  `item_id` int NOT NULL,
  `quantity` int NOT NULL,
  `cus_id` varchar(8) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`r_id`),
  KEY `item_id` (`item_id`),
  KEY `cus_id` (`cus_id`),
  CONSTRAINT `record_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`i_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `record_ibfk_2` FOREIGN KEY (`cus_id`) REFERENCES `customer` (`c_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  onlineshop.record 的資料：~0 rows (近似值)
DELETE FROM `record`;

-- 傾印  資料表 onlineshop.type 結構
DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `tname` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `t_id` int NOT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  onlineshop.type 的資料：~3 rows (近似值)
DELETE FROM `type`;
INSERT INTO `type` (`tname`, `t_id`) VALUES
	('鞋類', 1),
	('衣服', 2),
	('褲子', 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
