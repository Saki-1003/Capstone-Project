import connection from "../../../database/connection"

export function getProducts() {
  return connection.query('SELECT * FROM products').all()
}

export function postProduct(product) {
  console.log('posting products')
  connection.query(`
    INSERT INTO products (
      product_code, 
      product_title, 
      cost, 
      sell_price, 
      quantity, 
      attribute1_size, 
      attribute2_color,
      attribute3,
      attribute4,
      category,
      summary,
      specification,
    ) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
  `, {replacements: Object.values(product)})
}