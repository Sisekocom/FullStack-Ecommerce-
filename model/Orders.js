import {connection as db} from "../config/index.js"
class Orders{
    fetchAllOrders(req, res){
        const qry = `
        SELECT orderID, userID,prodID, orderDate
        FROM orders;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req, res){
        const qry = `
        SELECT orderID, userID,prodID, orderDate
        FROM orders;
        FROM orders
        WHERE orderID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    addProduct(req, res) {
        const qry = `
        INSERT INTO orders
        SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: 'New orders was added'
            })
        })
    }
    updateProduct(req, res) {
        const qry = `
        UPDATE orders
        SET ?
        WHERE orderID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode, 
                msg: "The product information has been updated."
            })
        })
    }
    deleteProduct(req, res) {
        const qry = `
        DELETE FROM orders
        WHERE orderID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: "The order information has been deleted."
            })
        })
    }
}
export {
    Orders
}