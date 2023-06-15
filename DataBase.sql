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


-- 傾印 term_project 的資料庫結構
CREATE DATABASE IF NOT EXISTS `term_project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `term_project`;

-- 傾印  資料表 term_project.admin 結構
CREATE TABLE IF NOT EXISTS `admin` (
  `a_id` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `a_pass` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.admin 的資料：~0 rows (近似值)
DELETE FROM `admin`;
INSERT INTO `admin` (`a_id`, `a_pass`) VALUES
	('admin', 'admin');

-- 傾印  資料表 term_project.brand 結構
CREATE TABLE IF NOT EXISTS `brand` (
  `b_id` int NOT NULL AUTO_INCREMENT,
  `bname` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `b_addr` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `b_email` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.brand 的資料：~4 rows (近似值)
DELETE FROM `brand`;
INSERT INTO `brand` (`b_id`, `bname`, `b_addr`, `b_email`) VALUES
	(1, 'Nike', NULL, NULL),
	(2, 'adidas', NULL, NULL),
	(3, 'Nvdia', NULL, NULL),
	(4, 'intel', NULL, NULL);

-- 傾印  資料表 term_project.customer 結構
CREATE TABLE IF NOT EXISTS `customer` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `cname` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `c_password` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `c_email` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `c_birth` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `addr` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.customer 的資料：~3 rows (近似值)
DELETE FROM `customer`;
INSERT INTO `customer` (`c_id`, `cname`, `c_password`, `c_email`, `c_birth`, `addr`) VALUES
	(1, 'test1', 'test1', 'chang003@gmail.com', '1990-9-9', '苗栗縣'),
	(2, 'test2', 'test2', 'lee04@gmail.com', '2000-02-02', '苗栗縣'),
	(3, 'cheung1', 'test3', 'cheung1@gmail.com', '1998-01-01', '你家');

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
  KEY `b_id` (`b_id`),
  KEY `t_id` (`t_id`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`b_id`) REFERENCES `brand` (`b_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `item_ibfk_2` FOREIGN KEY (`t_id`) REFERENCES `type` (`t_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.item 的資料：~60 rows (近似值)
DELETE FROM `item`;
INSERT INTO `item` (`i_id`, `i_name`, `i_price`, `i_quantity`, `b_id`, `t_id`, `i_pict`, `description`) VALUES
	(1, 'NIKE METCON 8', 7999, 42, 1, 1, 'https://static.nike.com.hk/resources/product/DO9328-700/DO9328-700_BL1.png', '你們為達目標、為求成長，不斷追著時間跑，並且挑戰自我，相互勉勵。 這款必備訓練鞋型採用較先前版本更輕盈透氣的鞋面設計，讓原已達標的舒適耐穿度更上一層，無論是心肺訓練、舉重或其他健身運動，都能得心應手。'),
	(2, 'NIKE ZOOM SUPERREP 4 NN', 9999, 30, 1, 1, 'https://static.nike.com.hk/resources/product/DO9837-100/DO9837-100_BL1.png', '動起四頭肌，專注於跳箱訓練。 超級組訓練讓你汗水淋漓。 這就是你生活的意義：掙扎、關鍵時刻、突破、轉變。 Nike Zoom SuperRep 4 NN 女子高強度訓練鞋專為疾速爆發力、心跳加速的變速訓練及快節奏運動設計，讓你突破 HIIT 的全新境界。'),
	(3, 'NIKE AIR MONARCH IV', 5999, 78, 1, 1, 'https://static.nike.com.hk/resources/product/415445-001/415445-001_BL1.png', 'Nike Air Monarch IV 男子訓練鞋的鞋面採用耐穿物料製成，提供出色的承托力，為你的運動鍛鍊作好全面準備。 輕巧泡綿搭配 Nike Air 緩震設計，讓你每一步都舒適自如。'),
	(4, 'NIKE MOTIVA', 7999, 93, 1, 1, 'https://static.nike.com.hk/resources/product/DV1237-100/DV1237-100_BL1.png', 'Nike Motiva 男子淺跑運動鞋助你邁出屬於自己的步伐，應對日常挑戰。 獨特鞋紋外底結合弧形搖桿設計，提供緩震舒適腳感，令步伐流暢。 無論是步行或淺跑都從容舒適，自信迎接新旅程。 卓越承托，暢行自如。'),
	(5, 'NIKE VAPORFLY 3', 5699, 6, 1, 1, 'https://static.nike.com.hk/resources/product/DV4129-100/DV4129-100_BL1.png', '加快腳步，追趕別人。 Nike Vaporfly 3 男子公路賽跑運動鞋專為追遂者、競速者和進階跑者設計，為你帶來比賽級速度，輕鬆駕馭任何距離。 我們調整足底的機能，無論是 10K 還是馬拉松皆可屢創個人新紀錄。 精英跑手還是新手，這款公路賽跑運動鞋都可提升跑速，突破里程，完成遙不可及的任務。'),
	(6, 'NIKE AIR VAPORMAX 2023 FK', 7999, 10, 1, 1, 'https://static.nike.com.hk/resources/product/DV1678-400/DV1678-400_BL1.png', '想體驗腳踏 Air 氣墊的感覺？ 穿上 Nike Air VaporMax 2023 FK 男子運動鞋，領會這種感覺。 帶有氣孔的鞋墊透氣出眾，拉出來更可看到更多細節。 彈性 Flyknit 鞋面由織布與合成物料製成。'),
	(7, 'Nike Sportswear', 1299, 67, 1, 2, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/868392ff-214c-43d4-b714-89005b06615b/sportswear-%E7%94%B7%E6%AC%BE-max90-t-%E6%81%A4-hs6vVc.png', 'Max90 T 恤造型簡潔隨興，讓你在任何時間都能隨心所欲地切換狀態，享受度假模式。 採用高磅數材質，打造高級造型質感；搭配寬鬆剪裁，呈現隨興海灘風。'),
	(8, 'Nike Dri-FIT', 1180, 51, 1, 2, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3a0f5e12-678c-486f-ab81-fd05e89f317f/dri-fit-%E7%94%B7%E6%AC%BE%E7%B1%83%E7%90%83-t-%E6%81%A4-bfX2jf.png', '這款排汗 T 恤採用代表經典新秀梯次的圖樣，重現 1996 年這個具有歷史意義的籃球年。 採用柔軟寬鬆剪裁，無論場內外都輕鬆自在。'),
	(9, 'Nike Dri-FIT One', 880, 62, 1, 2, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b61cdf9-e198-4e2d-8e1d-e263579621a4/dri-fit-one-%E6%A8%99%E6%BA%96%E5%89%AA%E8%A3%81%E7%9F%AD%E8%A2%96%E4%B8%8A%E8%A1%A3-vMPqml.png', '這款上衣輕盈透氣，是你跑步時的理想良伴。 排汗材質搭配易穿剪裁，讓你在加速衝刺時也能保持涼爽。'),
	(10, 'Nike Dri-FIT Athletics', 1580, 12, 1, 2, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd48dfe6-52d3-4b7e-a4f3-4d8c910962bb/sportswear-city-utility-%E6%B3%95%E5%9C%8B%E6%AF%9B%E5%9C%88%E5%B8%83%E7%9F%AD%E8%A2%96%E4%B8%8A%E8%A1%A3-4DqxSZ.png', '穿上這款 T 恤，用愛填滿場內外。 排汗機能結合自在剪裁，讓你在比賽前後都能常保舒適。'),
	(11, 'Nike Sportswear Modern Fleece', 3780, 97, 1, 2, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a9578ac4-b7be-46a4-a2bb-2753e9b8502e/sportswear-modern-fleece-%E9%80%A3%E8%BA%AB%E8%A4%B2-qblNBN.png', '穿上這款重新設計的連身褲，自在悠遊一整天。 寬鬆設計與配件腰帶，讓你隨心暢動，材質略帶皺褶紋理，無論盛裝打扮或輕便穿搭都品味升級。'),
	(12, 'Nike Sportswear', 320, 62, 1, 2, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/be0e60af-4418-4dc0-b551-b6b1f45a7d6a/sportswear-%E5%A4%A7%E7%AB%A5-%E7%94%B7%E7%AB%A5-t-%E6%81%A4-SFDJ4j.png', 'Nike Sportswear 幼童T恤和短褲套裝為孩子締造和暖天氣下的完整 Swoosh 風格造型。'),
	(13, 'Nike Dri-FIT', 4591, 39, 1, 3, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fa2d0b36-defc-4f15-933f-291316a3ba7c/dri-fit-%E7%94%B7%E6%AC%BE%E8%B6%8A%E9%87%8E%E8%B7%91%E6%AD%A5%E9%95%B7%E8%A4%B2-zbtXQH.png', '穿上 Nike Dri-FIT 男子針織訓練短褲，以最佳身體狀態迎接訓練。 柔軟導濕速乾物料，讓肌膚保持乾爽舒適。'),
	(14, 'Nike Zenvy', 3580, 25, 1, 3, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bb01860e-8d69-4d19-b61a-3907e8d70ba3/zenvy-%E8%BC%95%E6%9F%94%E6%94%AF%E6%92%90%E5%9E%8B%E9%AB%98%E8%85%B0%E4%B9%9D%E5%88%86%E5%85%A7%E6%90%AD%E8%A4%B2-m78Wdj.png', 'Nike Zenvy 放空系列 7/8 女子輕度支撐高腰緊身褲柔軟透氣，讓雙腿體驗透氣感'),
	(15, 'Nike Therma-FIT Starting 5', 4500, 73, 1, 3, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ed3dfa6-a05b-4d9d-a28a-16b74e1ad878/therma-fit-starting-5-%E7%94%B7%E6%AC%BE%E7%B1%83%E7%90%83-fleece-%E9%95%B7%E8%A4%B2-6Nc3Rw.png', '穿上我們的 Starting 5 長褲，享受舒適保暖的冷天外出體驗'),
	(16, 'Nike Pro Dri-FIT', 3211, 88, 1, 3, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f72abf9a-744c-4492-a2cc-e44c3173b632/pro-dri-fit-%E7%94%B7%E6%AC%BE%E7%9F%AD%E8%A4%B2-8jxLsr.png', 'Nike Pro Dri-FIT 上衣採用輕量材質，搭配高溫區透氣設計，讓你從暖身到緩和運動全程涼快乾爽。'),
	(17, 'Nike Dri-FIT Phenom Elite', 2700, 10, 1, 3, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc8a307f-2bca-43d0-aeaf-d2564f16f9a5/dri-fit-phenom-elite-%E7%94%B7%E6%AC%BE%E9%87%9D%E7%B9%94%E8%B7%91%E6%AD%A5%E9%95%B7%E8%A4%B2-xjMTVL.png', '穿上 Nike 輕量 Phenom Elite 長褲，全力以赴。 我們深知你必定全力以赴，因此精心設計出這款材質特別平滑，且具排汗機能的長褲，讓你備感舒適'),
	(18, 'Nike SB Kearny', 4900, 54, 1, 3, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/84fb130b-1fff-4dd7-ba0a-6a22206b3436/sb-kearny-%E6%BB%91%E6%9D%BF%E5%B7%A5%E8%A3%9D%E8%A4%B2-cTFfdd.png', '這款 Nike SB 長褲採用耐久防撕裂尼龍材質，搭配適合從事滑板運動的寬鬆剪裁，十足耐穿'),
	(19, 'Nike Everyday Lightweight', 350, 81, 1, 4, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/bivbbt0saypjw0mimm9x/everyday-lightweight-%E8%A8%93%E7%B7%B4%E4%B8%AD%E7%AD%92%E8%A5%AA-Gvl3WS.png', 'Nike Everyday 襪款，讓你在健身時活力百倍。柔軟紗線結合排汗技術，有助於保持足部乾爽舒適。'),
	(20, 'Nike Everyday Cushioned', 350, 3, 1, 4, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dfa68bbe-e102-4e33-9b6e-6763e2a75f19/everyday-cushioned-%E8%A8%93%E7%B7%B4%E4%B8%AD%E7%AD%92%E8%A5%AA-gSdsFg.png', 'Nike Everyday Cushioned 襪款，讓健身時光更加活力充沛。 厚實毛圈布襪底為踏步和抬腳時增添舒適感，而羅紋足弓帶設計環繞中足，支撐感佳。'),
	(21, 'Nike Everyday Plus 輕量', 350, 96, 1, 4, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ac69426f-510c-4a87-9a43-7437f748566e/everyday-plus-%E8%BC%95%E9%87%8F%E4%B8%AD%E7%AD%92%E8%A5%AA-cXf1zB.png', '這款兼具時尚感與機能性的分趾襪，既能搭配你最愛的涼鞋，同時還能保持雙腳溫暖舒適。 襪子表面採用透氣材質，打造全天候乾爽腳感。'),
	(22, 'Nike Sportswear Everyday Essential', 350, 70, 1, 4, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5570fac-5861-441e-8923-5a6bb50e9369/sportswear-everyday-essential-%E4%B8%AD%E7%AD%92%E8%A5%AA-07n4vt.png', 'Nike Sportswear Everyday Essential 襪款採用柔軟的彈性材質，完美貼合雙足，打造全日舒適感受'),
	(23, 'Nike Everyday Lightweight', 350, 42, 1, 4, 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/erarnihuhpl67m8f7way/everyday-lightweight-%E8%A8%93%E7%B7%B4%E9%81%8E%E8%B8%9D%E8%A5%AA-ShtJfk.png', 'Nike Everyday 襪款，讓你在健身時活力百倍。柔軟紗線結合排汗技術，有助於保持足部乾爽舒適'),
	(24, 'Jordan', 490, 17, 1, 4, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9f450253-8dcc-4af6-8c29-a893e9ac3964/jordan-everyday-%E9%81%8E%E8%B8%9D%E8%A5%AA-PqW8xF.png', '柔軟而耐穿的必備日常襪款。 採用排汗技術，使雙足常保涼爽，搭配貼合足弓帶，加強支撐。'),
	(25, 'ADIZERO BOSTON 12 運動鞋', 4999, 69, 2, 1, 'https://img.adidas.com.hk/resources/2023/5/29/16853572070649016.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '韌性設計助你將訓練環節推至更長距離，讓你為比賽日做好準備，迎接最嚴峻的挑戰'),
	(26, 'ADIZERO ADIOS PRO 3 RUNNING LIGHTSTRIKE 運動鞋', 5999, 95, 2, 1, 'https://img.adidas.com.hk/resources/2023/5/29/16853572314183319.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', 'adidas Adizero Adios 3 跑鞋幫助你打破世界紀錄和個人最佳成績。'),
	(27, 'ADIZERO BOSTON 12 運動鞋', 7999, 30, 2, 1, 'https://img.adidas.com.hk/resources/2023/5/29/16853557018487957.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '韌性設計助你將訓練環節推至更長距離，讓你為比賽日做好準備，迎接最嚴峻的挑戰。adidas Adizero Boston 12採用超輕盈Lightstrike緩衝技術，帶來我們最具韌性的機能，助你培養耐力和力量。'),
	(28, 'ADIZERO ADIOS 8 運動鞋', 3999, 57, 2, 1, 'https://img.adidas.com.hk/resources/2023/5/29/1685355684678308.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', 'adidas Adizero Adios 3 跑鞋幫助你打破世界紀錄和個人最佳成績。這款適合競速跑的鞋款具備超輕量鞋面、三層 Lightstrike Pro 避震科技和 ENERGYRODS，能在每個步伐間減少能量消耗。'),
	(29, 'ADIZERO BOSTON 12 運動鞋', 3999, 83, 2, 1, 'https://img.adidas.com.hk/resources/2023/5/29/16853572094508466.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', 'adidas Adizero Boston 12採用超輕盈且具彈性的Lightstrike緩衝技術，助你培養耐力和力量。採用前掌尖釘板和ENERGYRODS節能技術'),
	(30, 'PUREBOOST 23 運動鞋', 4999, 15, 2, 1, 'https://img.adidas.com.hk/resources/2023/5/15/16841369983593086.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', NULL),
	(31, 'AEROREADY 三間長褲', 322, 78, 2, 2, 'https://img.adidas.com.hk/resources/2023/5/9/1683623011102273.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', NULL),
	(32, 'RUN ICONS 跑步 T 裇', 599, 52, 2, 2, 'https://img.adidas.com.hk/resources/2023/5/9/16836230149031819.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '無論是上班前晨跑，還是週末長跑，這款 Run Icons 跑步 T 恤都與你同步躍動'),
	(33, 'OWN THE RUN SEASONAL T 裇', 599, 87, 2, 2, 'https://img.adidas.com.hk/resources/2023/5/6/16833635382328896.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '日常 T 裇，不一定予人基本款感覺'),
	(34, 'OWN THE RUN T 裇', 488, 9, 2, 2, 'https://img.adidas.com.hk/resources/2023/5/5/16832664937315568.JPEG?x-oss-https://img.adidas.com.hk/resources/2023/5/5/16832664937315568.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '日常 T 裇，不一定予人基本款感覺。這款 adidas 經典圓領 T 裇以 100% 環保聚酯纖維網布製成，極致透氣，即使在炎熱天，你也能涼快暢跑。'),
	(35, 'RUN FOR THE OCEANS T 裇', 699, 36, 2, 2, 'https://img.adidas.com.hk/resources/2023/5/5/16832664659124950.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '你投入暢跑，目的多多。穿上這款 adidas 跑步 T 裇，為地球出一分力。'),
	(36, 'RUN FOR THE OCEANS 背心', 766, 64, 2, 2, 'https://img.adidas.com.hk/resources/2023/5/5/16832664044935188.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '你投入暢跑，目的多多。穿上這款 adidas 跑步背心，為地球出一分力。飾有注目圖案，展現你對終結塑膠廢物的承諾。涼快網布結構為炎熱天帶來舒適體驗，鬆身下襬讓你輕鬆躍動'),
	(37, 'BLUE VERSION ESSENTIALS 運動棉褲', 3800, 91, 2, 3, 'https://img.adidas.com.hk/resources/2023/5/19/16844906084917391.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '時尚長褲也帶來舒適感，令你一穿愛上。這款adidas運動棉褲適合早上喝咖啡、下午外出購物或與好友夜遊時穿着。'),
	(38, 'BLUE VERSION 洗水長褲', 4000, 23, 2, 3, 'https://img.adidas.com.hk/resources/2023/5/19/16844906060626445.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '慵懶的早上，忙碌的週末，滿足兩者間的所有。這款adidas長褲齊備一切元素，帶來極致舒適同時極致柔軟'),
	(39, 'BLUE VERSION SST 工裝長褲', 5000, 50, 2, 3, 'https://img.adidas.com.hk/resources/2023/5/19/16844906022079800.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '出外旅行也好，在家休息也可。以adidas經典設計為藍本，這款休閒工裝長褲以彈性尼龍物料配合順滑織造布製成'),
	(40, 'Y-3 有機棉 TERRY CUFF 直筒跑步褲', 3100, 76, 2, 3, 'https://img.adidas.com.hk/resources/2023/5/22/16847431284453164.jpeg?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '這款 Y-3 有機棉毛巾布直腳長褲設計簡約，為日常衣著帶來功能性選擇。以有機棉毛巾布製成，配合鬆身休閒剪裁'),
	(41, 'ADIDAS ADVENTURE 梭織長褲', 710, 1, 2, 3, 'https://img.adidas.com.hk/resources/2023/4/3/16805166324489138.JPG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '穿上這款 adidas Adventure 長褲，憑藉日常風格，展現你對戶外世界的熱愛。在露台吃午餐、參加沙漠音樂節，乘車時打開窗戶 — 看，你多喜愛戶外世界'),
	(42, 'INDIGO HERZ 毛毛長褲', 2999, 48, 2, 3, 'https://img.adidas.com.hk/resources/2023/4/26/16824897468702555.jpeg?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '歡迎來到充滿原創性的新時代。靈感源自adidas Originals的NFT，Indigo Herz 款式讓你無拘無束地展現真我。無論你身處世界任何地方 這款adidas Indigo Herz 毛毛長褲休閒舒適，展現自信風格'),
	(43, '中筒運動襪 3對', 430, 74, 2, 4, 'https://img.adidas.com.hk/resources/2023/5/15/16841370159653065.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', ''),
	(44, 'SPORTSWEAR 緩衝足踝襪', 259, 20, 2, 4, 'https://img.adidas.com.hk/resources/2023/5/15/16841370181828047.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '歡迎來到充滿原創性的新時代。靈感源自adidas Originals的NFT，Indigo Herz 款式讓你無拘無束地展現真我'),
	(45, 'ADIDAS REKIVE 中筒襪（兩對裝）', 560, 59, 2, 4, 'https://img.adidas.com.hk/resources/2023/5/15/16841369616163335.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '穿上這款 adidas Rekive 中筒襪，以矚目圖案與明亮色彩引領潮流。稜紋袖口配上對比色三間，加上正面的特製三葉標誌，別具時尚個性'),
	(46, 'PERFORMANCE 輕盈中筒襪（三對裝）', 780, 84, 2, 4, 'https://img.adidas.com.hk/resources/2023/5/6/16833636063518457.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '配合其他 adidas 訓練裝備，釋放無限潛能。這款中筒襪舒適無比。配備 AEROREADY 吸汗技術、重點彈性設計等細節，助你發揮最佳表現'),
	(47, 'X-CITY HEAT.RDY 反光跑步襪', 459, 7, 2, 4, 'https://img.adidas.com.hk/resources/2023/5/5/16832663574762118.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '暢跑城中，飽覽美景。這款 adidas 襪配備超輕盈結構和 HEAT.RDY 技術，助你投入跑步，全程盡享涼快。FORMOTION 帶來高承托靈活剪裁，配合網布透氣設計，格外通爽'),
	(48, 'ADICOLOR 70S 襪（兩對裝）', 459, 43, 2, 4, 'https://img.adidas.com.hk/resources/2023/4/25/16824155103882943.JPEG?x-oss-process=image/resize,m_pad,w_766,h_766,limit_0,color_ffffff/quality,q_95', '這包 adidas 中筒襪為你帶來兩種玩味選擇。無論穿上哪種色彩，都萬無一失。兩款設計都趣味十足，令你的造型倍添格調。 這款襪子以天然及可再生物料製成'),
	(49, 'GeForce RTX 3090 Ti', 26500, 24, 3, 5, 'https://www.aorus.com/assets/img/graphics-cards-aorus.e3d24c95.png.webp', NULL),
	(50, 'GeForce RTX 3090', 21800, 45, 3, 5, 'https://img.biggo.com/jMShW4qfyS0qHwLDFIL_BN3Z29pvbpKyOKhqy18nPmA/fit/200/200/sm/1/aHR0cHM6Ly9pbWcuam9sbHlidXkuY29tL1MyMDA1MjMxNzAwMjM4NTYvZ29vZHMvMDE2YWU5NzBiYWYwNDIxMmEzY2FhYzlkODhiNzNlZDYuanBn.jpg', NULL),
	(51, 'GeForce RTX 3080', 12500, 90, 3, 5, 'https://img2.biggo.com/190x,sXZQD-qmE4g2xPHRf5p3nplTTnzIasP0rh9u2DsBT__s/https://biggo-product.ap-south-1.linodeobjects.com/20200923033359a21e88b3384f609811106dc4f107a558.jpg', NULL),
	(52, 'GeForce RTX 3070', 9200, 78, 3, 5, 'https://img2.biggo.com/190x,sZgDsEIpRRWbzfa7U5FHeB73XPPU3XJp93gn3qLtkzvM/https://biggo-product.ap-south-1.linodeobjects.com/2020110215480183d8c2a99a6b5609e3415cc03fc458b7.jpg', NULL),
	(53, 'GeForce RTX 3060', 9790, 45, 3, 5, 'https://img.biggo.com/l9n0QGSHkthxLXo8BCbIyUSkDHUwYr2S-bemIyhgSvQ/fit/200/200/sm/1/aHR0cHM6Ly9zLnlpbWcuY29tL3pwL01lcmNoYW5kaXNlSW1hZ2VzL0IzQ0RFMDQ5NDctU1AtMTAyMTYyMjguanBn.jpg', NULL),
	(54, 'GeForce RTX 3060 Ti', 12990, 67, 3, 5, 'https://media.etmall.com.tw/NXimg/004367/4367912/4367912_XL.jpg?t=18940089615', NULL),
	(55, 'intel i9-13900K', 18100, 56, 4, 6, 'https://img.biggo.com/Mg_wYOmzJayiM3tktHfzDGfS1KFSuqsqCSahlkt3uDc/fit/200/200/sm/1/aHR0cHM6Ly90c2hvcC5yMTBzLmNvbS9iOWEvMTJmL2YzNTMvNDAyOS9iMGVmLzc1YmUvMTUxNS8xMWY1ZWRiZjJjMDI0MmFjMTEwMDA3LmpwZw.jpg', NULL),
	(56, 'intel i7-13700K', 15690, 34, 4, 6, 'https://cf.shopee.tw/file/sg-11134201-22100-uu5bfmo7ixivae', NULL),
	(57, 'intel i7-13600k', 10290, 21, 4, 6, 'https://cf.shopee.tw/file/sg-11134201-22110-wvuhk12uw6jv9c', NULL),
	(58, 'Intel i7-10700K', 10888, 4, 4, 6, 'https://ct.yimg.com/xd/api/res/1.2/bJt2gJD_cQIBDHCkJOer4Q--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD00MDA7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/754cd917-668d-4251-acdd-85239202d579.jpg', NULL),
	(59, 'Intel i9-10900X', 23990, 65, 4, 6, 'https://cf.shopee.tw/file/tw-11134207-7qul3-lhir0tppsqdsc2', NULL),
	(60, 'Intel I7-12700KF', 10590, 17, 4, 6, 'https://cf.shopee.tw/file/sg-11134201-22090-1gry81pv6vhv27', NULL),
	(62, 'david1', 123, 134, 1, 1, '321', '123');

-- 傾印  資料表 term_project.record 結構
CREATE TABLE IF NOT EXISTS `record` (
  `r_id` int NOT NULL AUTO_INCREMENT,
  `cus_id` int NOT NULL,
  `item_id` int NOT NULL,
  `quantity` int NOT NULL,
  `r_price` int NOT NULL,
  `r_time` timestamp NOT NULL,
  PRIMARY KEY (`r_id`),
  KEY `item_id` (`item_id`),
  KEY `cus_id` (`cus_id`),
  CONSTRAINT `record_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`i_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `record_ibfk_2` FOREIGN KEY (`cus_id`) REFERENCES `customer` (`c_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.record 的資料：~2 rows (近似值)
DELETE FROM `record`;
INSERT INTO `record` (`r_id`, `cus_id`, `item_id`, `quantity`, `r_price`, `r_time`) VALUES
	(1, 1, 15, 1, 5000, '2023-06-12 06:36:34'),
	(2, 1, 45, 2, 8000, '2023-06-12 06:36:40');

-- 傾印  資料表 term_project.type 結構
CREATE TABLE IF NOT EXISTS `type` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `tname` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在傾印表格  term_project.type 的資料：~6 rows (近似值)
DELETE FROM `type`;
INSERT INTO `type` (`t_id`, `tname`) VALUES
	(1, '鞋類'),
	(2, '衣服'),
	(3, '褲子'),
	(4, '襪子'),
	(5, '顯示卡'),
	(6, 'CPU');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
