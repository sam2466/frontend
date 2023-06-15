const express = require("express");
const router = express.Router();

const Item = require("./ItemApi");
const Customer = require("./CustomerAPI");
const Title = require("./type&brandAPI");
const Record = require("./recordAPI");

//============================================================================
//TITLE區

//列出所有商品種類
router.get('/sidebar/type' , async(req, res) => {
    try{
        let rs = await Title.getType();
        res.json(rs);
    } catch(err){
        res.status(400).json({err: 'Data not found'});
        return;
    }
})

//列出該商品種類下的所有品牌
router.get('/sidebar/:type' , async(req, res) => {
    try{
        let rs = await Title.getEachBrandById(req.params.type *1);
        res.json(rs);
    } catch(err){
        res.status(400).json({err: 'Data not found'});
    }
});

//列出該品牌下的所有商品
router.get('/sidebar/:type/:brand' , async(req, res) => {
    try{
        let rs = await Title.findItemList(req.params.type *1, req.params.brand *1);
        res.json(rs);
    } catch(err){
        res.status(400).json({err: 'Data not found'});
    }
});

//=============================================================================
//ITEM區
//
router.get('/item', async(req, res) =>{
    try{
        let rs = await Item.getAll();
        res.json(rs);
    } catch(err){
        res.status(400).json({err: 'Data not found'});
    }
})
//搜尋商品 (id)
router.get('/item/:id', async(req, res) => {
    try{
        const rs = await Item.findItemByid(req.params.id *1);
        
        if(rs){
           res.json(rs); 
        }else{
            res.status(400).json({message: `Can't find ${req.params.id}`});
        }
        
    } catch(err){
        res.status(400).json({err: `Cannot find item!`});
    }
})

//搜尋商品描述 (名稱搜尋)
router.get('/itemName/:name', async(req, res) => {
    try{
        let rs = await Item.findItemByName(req.params.name);
        if(rs){
           res.json(rs); 
        }else{
            res.status(400).json({message: `Can't find ${req.params.name}`});
        }
        
    } catch(err){
        res.status(400).json({err: `Cannot find item!`});
    }
})

//新增商品
router.post("/item", async(req,res) => {
    
    let rs = await Item.findItemByName(req.body.i_name);

    if(rs.length > 0){
        
        res.status(400).json({msg : `已存在商品 ${req.body.i_name}`});
    }else{
        const data =[req.body.i_name,req.body.i_price,req.body.i_quantity,req.body.b_id,req.body.t_id,req.body.i_pict,req.body.description];
        rs = await Item.addMerchant(data);
        if(rs > 0){
            res.status(200).json({msg: `新增成功`});
        }else{
            res.status(400).json({msg: `新增失敗`});
        }
    }
});

//修改商品數量
router.put('/item/:id', async(req, res) => {
    try {
        let rs = await Item.setMerchantAmount(req.params.id *1, req.body.i_quantity);
        if(rs != 1){
            res.status(400).json({err: 'Cannot set item amount'});
        }

        rs = await Item.findItemAmountByid(req.params.id *1);
        res.json(`set success`);
    }catch (err){
        res.status(400).json({err: 'Data not found'});
    }
});

router.delete('/item/:id', async(req, res) => {
    try {
        let rs = await Item.deleteItem(req.params.id *1);
        if(rs != 1){
            res.status(400).json({msg: "Cannot delete item"+ req.body.id});
        }else{
            res.json({msg: "Item deleted successfully!"});
        }
    }catch (err) {
        res.status(400).json({msg: "Can't find id: " + req.params.id});
    }
});

//列出隨機5樣商品
router.get('/random5', async (req, res) => {
    try {
      let rs = await Item.getRanItem();
      res.json(rs);
    } catch (err) {
      res.status(404).json({ err: 'Data not found' });
      return;
    }
  });

//修改商品

  router.put('/updateItem', async(req, res) => {
    const theMember = await Item.updateItem(req.body.i_id*1);
    if(theMember.length==0){
        res.status(400).json ({msg:"找不到此商品無法修改"});
        return;
    }
    
    let aMember = {
        i_name:req.body.i_name ? req.body.i_name : theMember[0].i_name,
        i_price:req.body.i_price ? req.body.i_price : theMember[0].i_price,
        i_quantity:req.body.i_quantity ? req.body.i_quantity : theMember[0].i_quantity,
        i_pict:req.body.i_pict ? req.body.i_pict : theMember[0].i_pict,
        description:req.body.description ? req.body.description : theMember[0].description,
        i_id: req.body.i_id*1,
    };
    console.log("from put aMember:" , aMember);
    const rows = await Item.updateItem(aMember);
    if(rows==1){
        res.json({msg:"商品已更新", ...aMember});
    }else{
        res.status(400).json({msg:"更新出現錯誤"})
    }
    
});
//===============================================================================
//CUSTOMER

//會員登入後取得資料
router.get('/login', async(req, res) => {
    const rs  = await Customer.CustomerLogin(req.query.account, req.query.password);
    if(rs == null){
        res.status(400).json({msg: "account or password is wrong!"});
    }else{
        res.json(rs);
    }
});

//新增會員
router.post('/customer', async(req, res) => {
    let rs = await Customer.findCustomerByName(req.body.cname);

    if(rs.length > 0){
        res.status(400).json({msg: "customer already exists!"});
        return;
    }
    let data = {cname: req.body.cname,
                c_password:req.body.c_password,
                c_email:req.body.c_email,
                c_birth:  req.body.c_birth,
                addr:  req.body.addr
                    
          } ;
    const id = await Customer.newCustomer(data); 
    data = {id:id,...data};
    res.json(data);
    
});
//修改會員資料
router.put('/customers/changePassword', async(req, res) => {
    const theMember = await Customer.findCustomerByName(req.body.account);
    if(theMember.length==0){
        res.status(400).json ({msg:"找不到此帳號無法修改"});
        return;
    }
    
    let aMember = {
        password:req.body.password ? req.body.password : theMember[0].password,
        c_email:req.body.c_email ? req.body.c_email : theMember[0].c_email,
        c_birth:req.body.c_birth ? req.body.c_birth : theMember[0].c_birth,
        addr:req.body.addr ? req.body.addr : theMember[0].addr,
        account: req.body.account, 
    };
    console.log("from put aMember:" , aMember);
    const rows = await Customer.updateCustomer(aMember);
    if(rows==1){
        res.json({msg:"會員已更新", ...aMember});
    }else{
        res.status(400).json({msg:"更新出現錯誤"})
    }
    
});

router.delete("/customer/:id", async(req, res) => {
    try {
        const rs = Customer.deleteCustomer(req.params.id *1);
        if(rs != 1){
            res.status(400).json({msg: "Can't delete customer: " + req.body.id});
        }else {
            res.json({msg: "delete success!!"});
        }
    }catch (err) {
        res.status(400).json({msg: "Can't find customer: " + req.body.id});
    }
});

//================================================================
//RECORD

router.post("/record", async (req, res) => {
    let aMember = {
        item_id: req.body.item_id,
        quantity: req.body.quantity,
        cus_id : req.body.cus_id,
        r_price: req.body.r_price * req.body.quantity
    };
    
    const id =await Record.addRecord(aMember);
    aMember = { id:id, ...aMember};
    res.json(aMember);
});
    

router.get("/record/:id", async(req,res) => {
    const rs = await Record.findRecordByid(req.params.id *1);
    if(rs.length < 1){
        res.status(404).json({msg: "cannot find record"});
    }else{
        res.json(rs);
    }
});

module.exports = router;