const myConnection = require("../Database/sqlConnect");

const tblName = "item";

const Item = {
    tblName: tblName,
    //顯示全部商品
    getAll: async() => {
        try {
            const sql = `SELECT * from ${tblName} `;
            const [rs,flds] = await myConnection.query(sql);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },

   //新增商品
    addMerchant: async(oData) => {
        try {
            // let dataSet = [{
            //     i_name: oData.i_name,
            //     i_price: oData.price,
            //     i_quantity: oData.i_quantity,
            //     b_id: oData.b_id,
            //     t_id: oData.t_id,
            //     i_pict: oData.i_pict,
            //     description: oData.i_description 
            // }];

            const sql = `INSERT INTO ${tblName} ( i_name, i_price, i_quantity, b_id, t_id, i_pict, description) VALUES (?) ;`;
            const [rs, flds] = await myConnection.query(sql, [oData]);
            console.log(rs, flds);
            // console.log(rs.affectedRows + "rows affected.");
            return 1;
        }catch (err) {
            console.log(err);
            return -1;
        }
    },
    
    //get table title
    getTitles: async() => {
        try {
            const sql = `DESCRIBE ${tblName};`;
            const[rs, flds] = await myConnection.query(sql);
            return [rs, flds];
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    //搜尋商品 (id)
    findItemByid: async(id) => {
        try {
            const sql = `SELECT * from ${tblName} where i_id = ${id}`;
            const [rs,flds] = await myConnection.query(sql);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    //搜尋商品數量
    findItemAmountByid: async(id) => {
        try {
            const sql = `SELECT i_quantity from ${tblName} where i_id = ${id}`;
            const [rs,flds] = await myConnection.query(sql);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    //搜尋商品描述 (名稱搜尋)
    findItemByName: async(name) => {
        try {
            const sql = `SELECT i_name, i_price , i_quantity,i_pict,description FROM ${tblName} WHERE i_name LIKE '%${name}%' ;`;
            const [rs, flds] = await myConnection.query(sql);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    //修改商品庫存 (用i_id)
    setMerchantAmount: async(id, num) => {
        try {
            console.log(id, num);
            const sql = `UPDATE ${tblName} SET i_quantity=${num} WHERE i_id=${id} ;`
            const rs = await myConnection.query(sql);
            console.log(rs);
            return 1;
        }catch (err) {
            console.log(err);
            return -1;
        }
    },

    //刪除商品 (用i_id)
    deleteItem: async(id) => {
        try {
            const sql = `DELETE FROM ${tblName} WHERE i_id=${id} `
            const [rs, flds] = await myConnection.query(sql);
            return 1;
        } catch (err) {
            console.log(err);
            return -1;
        }
    },
   
    //隨機顯示5樣商品
    getRanItem: async () => {
        try {
          const sql = `SELECT i_id,i_name, i_price, i_quantity, i_pict, description FROM ${tblName} ORDER BY RAND() `;
          const [rs, flds] = await myConnection.query(`${sql} LIMIT 10`);
          return rs;
        } catch (err) {
          console.log(err);
          return -1;
        }
      },
    //修改商品資料
    updateItem: async(oData) => {
        try {
            const sql = `UPDATE ${tblName} SET i_name=?, i_price=?, i_quantity=?, i_pict=?, description=? WHERE i_id=? `;
            const [rs ,flds]=await myConnection.query(sql,[
                oData.i_name,
                oData.i_price,
                oData.i_quantity,
                oData.i_pict,
                oData.description,
                oData.i_id,  
            ]);
            console.log(rs);
            return rs.affectedRows;
        }catch (err) {
            console.log(err);
            return -1;
        }
    },

};

module.exports = Item ;