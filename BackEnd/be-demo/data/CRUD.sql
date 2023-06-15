--新增商品
INSERT INTO `item` ( `i_name`, `i_price`, `i_quantity`, `b_id`, `t_id`, `i_pict`, `description`) 
VALUES	           ( '?', ?, ?, ?, ?, '?', '?');

--刪除商品 (用i_id)
DELETE FROM `item`
WHERE i_id=? ;

--搜尋商品 (名稱搜尋)
SELECT i_name,i_price ,i_quantity
FROM `item` 
WHERE i_name LIKE '%?%' ;

--修改商品庫存 (用i_id)
UPDATE `item`
SET i_quantity=?
WHERE i_id=? ;

-------------------------------------------------------------------------------------------
--新增會員
INSERT INTO `customer` (`c_id`, `c_password`, `cname`, `addr`, `c_email`, `c_birth`) 
VALUES	('?', '?', '?', '?', '?', '?');

--修改會員密碼 (利用c_id,c_password)
UPDATE `customer`
SET c_password='?'
WHERE c_id='?' AND c_password='?' ;

--查詢會員資料 (c_id)
SELECT  c_id, cname, addr, c_email, c_birth
FROM `customer` 
WHERE c_id='?';

-----------------------------------------------------------------------------------------
--側邊欄位
--顯示所有商品種類
SELECT DISTINCT t_name
FROM `type` 
WHERE 1;

--種類(t_id=?)--->顯示品牌
SELECT DISTINCT b.bname
FROM `type` AS t,`item` AS i,`brand` AS b
WHERE t.t_id=? AND i.t_id=t.t_id AND i.b_id=b.b_id; 

--種類(t_id=?)--->品牌(b_id=?)--->顯示商品
SELECT i.i_name,i.i_price, i.i_quantity
FROM `type` AS t,  `item` AS i,  `brand` AS b
WHERE t.t_id=? AND b.b_id=? AND i.t_id=t.t_id AND i.b_id=b.b_id; 

---------------------------------------------------------------------------------------
--新增訂單
INSERT INTO `record` (`item_id`, `quantity`, `cus_id`, `r_price`, `r_time`)
VALUES               ('?', '?' , '?',  (價格*數量) , NOW() );

--搜尋會員訂單(cus_id='?')
SELECT r_id, i_name, quantity, cus_id, r_price, r_time
FROM `record` , `item` 
WHERE cus_id='?' AND item_id=i_id;

