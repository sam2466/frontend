const myConnection = require("../Database/sqlConnect");

const tblName = "record";

const Record = {
    tblName: tblName,

    //新增訂單
    addRecord: async(oData) => {
        try {
            const aMember =  Object.entries(oData).map((el) => el[1]);
            const sql = `INSERT INTO ${tblName} (item_id, quantity, cus_id, r_price, r_time) VALUES(?,?,?,?, NOW());`;
            const [rs, flds] = await myConnection.query(sql, aMember);
            console.log(rs, flds);
            console.log(rs.affectedRows + "rows affected");
            return rs.insertId;
        }catch (err) {
            console.log(err);
            return -1;
        }
    },

    //搜尋會員訂單(cus_id='?')
    findRecordByid: async(id) => {
        try {
            const sql = `SELECT r_id, i_name, quantity, cus_id, r_price
                         from ${tblName} , item 
                         where cus_id = ${id} AND item_id=i_id `;
            const [rs,flds] = await myConnection.query(sql);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },
}

module.exports = Record;