-- --------------------------------------------------------
-- 主機:                           127.0.0.1
-- 伺服器版本:                        8.0.33 - MySQL Community Server - GPL
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

-- 傾印  資料表 term_project.admin 結構
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `a_account` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `a_password` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`a_account`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.admin 的資料：~1 rows (近似值)
DELETE FROM `admin`;
INSERT INTO `admin` (`id`, `a_account`, `a_password`) VALUES
	(1, 'admin', 'admin'),
	(2, 'sam1399', '920105hhh');

-- 傾印  資料表 term_project.brand 結構
CREATE TABLE IF NOT EXISTS `brand` (
  `b_id` int NOT NULL AUTO_INCREMENT,
  `bname` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `b_addr` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `b_email` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`b_id`),
  UNIQUE KEY `b_id` (`b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.brand 的資料：~5 rows (近似值)
DELETE FROM `brand`;
INSERT INTO `brand` (`b_id`, `bname`, `b_addr`, `b_email`) VALUES
	(1, 'NewBalance', NULL, NULL),
	(2, 'Nike', NULL, NULL),
	(3, 'adidas', NULL, NULL),
	(4, 'Intel', NULL, NULL),
	(5, 'Nvidia', NULL, NULL),
	(6, 'AMD', NULL, NULL);

-- 傾印  資料表 term_project.customer 結構
CREATE TABLE IF NOT EXISTS `customer` (
  `c_id` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cname` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `c_password` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `c_email` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `c_birth` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `addr` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.customer 的資料：~2 rows (近似值)
DELETE FROM `customer`;
INSERT INTO `customer` (`c_id`, `cname`, `c_password`, `c_email`, `c_birth`, `addr`) VALUES
	('chang003', '張三', 'password1', 'chang003@gmail.com', NULL, '苗栗縣'),
	('lee4', '李四', 'password2', NULL, NULL, NULL);

-- 傾印  資料表 term_project.item 結構
CREATE TABLE IF NOT EXISTS `item` (
  `i_id` int NOT NULL AUTO_INCREMENT,
  `i_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `i_price` int NOT NULL,
  `i_quantity` int NOT NULL,
  `b_id` int NOT NULL,
  `t_id` int NOT NULL,
  `i_pict` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`i_id`),
  UNIQUE KEY `i_id` (`i_id`),
  KEY `b_id` (`b_id`),
  KEY `t_id` (`t_id`),
  CONSTRAINT `FK_item_brand` FOREIGN KEY (`b_id`) REFERENCES `brand` (`b_id`),
  CONSTRAINT `FK_item_type` FOREIGN KEY (`t_id`) REFERENCES `type` (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.item 的資料：~7 rows (近似值)
DELETE FROM `item`;
INSERT INTO `item` (`i_id`, `i_name`, `i_price`, `i_quantity`, `b_id`, `t_id`, `i_pict`, `description`) VALUES
	(1, 'NB休閒鞋', 100, 10, 1, 1, NULL, NULL),
	(2, 'NB運動鞋', 160, 3, 1, 1, NULL, NULL),
	(3, 'NB運動上衣', 200, 3, 1, 2, NULL, NULL),
	(4, 'NIKE跑鞋', 500, 6, 2, 1, NULL, NULL),
	(5, 'NIKE 運動褲', 400, 3, 2, 3, NULL, NULL),
	(6, 'Intel Core i5-13400F', 10000, 10, 4, 4, NULL, NULL),
	(7, 'Intel Core i5-13600KF 中央處理器 盒裝', 12000, 2, 4, 4, NULL, NULL),
	(8, 'R9-5900x', 11970, 1000, 6, 4, NULL, NULL);

-- 傾印  資料表 term_project.record 結構
CREATE TABLE IF NOT EXISTS `record` (
  `r_id` int NOT NULL,
  `item_id` int NOT NULL,
  `quantity` int NOT NULL,
  `cus_id` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `r_time` timestamp NOT NULL,
  PRIMARY KEY (`r_id`),
  KEY `item_id` (`item_id`),
  KEY `cus_id` (`cus_id`),
  CONSTRAINT `record_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`i_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `record_ibfk_2` FOREIGN KEY (`cus_id`) REFERENCES `customer` (`c_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.record 的資料：~0 rows (近似值)
DELETE FROM `record`;

-- 傾印  資料表 term_project.type 結構
CREATE TABLE IF NOT EXISTS `type` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `tname` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`t_id`),
  UNIQUE KEY `t_id` (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.type 的資料：~5 rows (近似值)
DELETE FROM `type`;
INSERT INTO `type` (`t_id`, `tname`) VALUES
	(1, '鞋類'),
	(2, '衣服'),
	(3, '褲子'),
	(4, 'CPU'),
	(5, 'GPU');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
