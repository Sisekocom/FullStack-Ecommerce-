import { connection as db } from "../config/index.js";
class Products {
    
  fetchProducts(req, res) {
    const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount,prodUrl
        FROM products;
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchProduct(req, res) {
    const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount,prodUrl
        FROM products
        WHERE prodID = ${req.params.id};
        `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result: result[0],
      });
    });
  }
  addProduct(req, res) {
    const qry = `
        INSERT INTO products
        SET ?;
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New product was added",
      });
    });
  }
  updateProduct(req, res) {
    const qry = `
        UPDATE products
        SET ?
        WHERE prodID = ${req.params.id};
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The product information has been updated.",
      });
    });
  }
  deleteProduct(req, res) {
    const productId = req.params.id;
  
    // Check if there are any orders associated with the product
    const orderQuery = `
      SELECT * FROM orders
      WHERE prodID = ${productId};
    `;
  
    db.query(orderQuery, (err, orders) => {
      if (err) {
        // Handle error
        res.status(500).json({ error: 'An error occurred while fetching orders.' });
      } else if (orders.length > 0) {
        // If there are associated orders, inform the user
        res.status(400).json({ error: 'Cannot delete the product. There are orders associated with it.' });
      } else {
        // If no orders are associated, proceed with deletion
        const deleteQuery = `
          DELETE FROM products
          WHERE prodID = ${productId};
        `;
  
        db.query(deleteQuery, (err) => {
          if (err) {
            // Handle error
            res.status(500).json({ error: 'An error occurred while deleting the product.' });
          } else {
            // Product deleted successfully
            res.json({
              status: res.statusCode,
              msg: "The product information has been deleted.",
            });
          }
        });
      }
    });
  }
  
}
export { Products };
