const myConnection = require("../Database/sqlConnect");

const tblName = "customer";

const Customer = {
    tblName: tblName,
   
    //新增會員
    newCustomer: async(oData) => {
        try {
            const aMember = Object.entries(oData).map((el)=> el[1]);
            const sql = `INSERT INTO ${tblName} (cname, c_password, c_email, c_birth, addr) VALUES (?,?,?,?,?) ;`;
            const [rs, flds] = await myConnection.query(sql, aMember);
            console.log(rs, flds);
            // console.log(rs.affectedRows + "rows affected.");
            return rs.insertId;
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
            return [rs];
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    //搜尋會員資料 (By id)
    CustomerLogin: async(account, password) => {
        try {
            const sql = `SELECT * FROM ${tblName} WHERE cname = ? AND c_password = ?`;
            const [rs, flds] = await myConnection.query(sql,[account,password]);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    //檢驗會員是否已被創建(by name)
    findCustomerByName: async(account) => {
        try {
            const sql = `SELECT * FROM ${tblName} WHERE cname =?`;
            const [rs, flds] = await myConnection.query(sql,[account]);
            console.log(rs);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    //修改會員資料 (用cname)
    updateCustomer: async(oData) => {
        try {
            const sql = `UPDATE ${tblName} SET c_password=?,c_email=?, c_birth=?, addr =? WHERE cname=? `;
            const [rs ,flds]=await myConnection.query(sql,[
                oData.password,
                oData.c_email,
                oData.c_birth,
                oData.addr,
                oData.account,  
            ]);
            console.log(rs);
            return rs.affectedRows;
        }catch (err) {
            console.log(err);
            return -1;
        }
    },

    //刪除會員 (用c_id)
    deleteCustomer: async(id) => {
        try {
            const sql = `DELETE FROM ${tblName} WHERE c_id=${id} ;`
            const [rs, flds] = await myConnection.query(sql);
            console.log(rs);
            return 1;
        } catch (err) {
            console.log(err);
            return -1;
        }
    },
};

module.exports = Customer ;