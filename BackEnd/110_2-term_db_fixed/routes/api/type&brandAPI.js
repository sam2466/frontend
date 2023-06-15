const express = require('express');
const myConnection = require("../Database/sqlConnect");

const type = "type";
const brand = "brand";

const Title = {
    type: type,
    brand: brand,
   
    //新增種類
    newType: async(oData) => {
        try {
            const dataSet = oData.map((obj) => 
                Object.entries(obj).map((el) => el[1])
            );

            const sql = `INSERT INTO ${type}  VALUES ? ;`;
            const [rs, flds] = await myConnection.query(sql, [dataSet]);
            console.log(rs, flds);
            console.log(rs.affectedRows + "rows affected.");
            return rs.affectedRows;
        }catch (err) {
            console.log(err);
            return -1;
        }
    },

    //所有種類
    getType: async() => {
        try {
            const sql = `SELECT DISTINCT tname FROM ${type}`;
            const [rs, flds] = await myConnection.query(sql);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    //--種類(t_id=?)--->顯示品牌
    getEachBrandById: async(t_id) => {
        try {
            const sql = `SELECT DISTINCT b.bname
                         FROM type AS t,item AS i,brand AS b            
                         WHERE t.t_id=${t_id} AND i.t_id=t.t_id AND i.b_id=b.b_id; `;
            const [rs, flds] = await myConnection.query(sql);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },

    
    //種類(t_id=?)--->品牌(b_id=?)--->顯示商品
    findItemList: async(t_id, b_id) => {
        try {
            const sql = `SELECT i.i_name,i.i_price, i.i_quantity, i.description, i.i_pict
                         FROM type AS t,  item AS i,  brand AS b
                         WHERE t.t_id = ${t_id} AND b.b_id = ${b_id} AND i.t_id = t.t_id AND i.b_id = b.b_id;`;
            const [rs, flds] = await myConnection.query(sql);
            return rs;
        }catch (err) {
            console.log(err);
            return null;
        }
    },
};

module.exports = Title;