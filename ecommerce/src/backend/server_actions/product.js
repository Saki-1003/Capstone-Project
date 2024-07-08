import connection from "../../../database/connection"

export function getProducts() {
  return connection.prepare('SELECT * FROM products').all()
}

export function postProduct(product) {
  connection.prepare(`
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
      created_at,
      updated_at
    ) 
    VALUES (
      @product_code, 
      @product_title, 
      @cost, 
      @sell_price, 
      @quantity, 
      @attribute1_size, 
      @attribute2_color,
      @attribute3,
      @attribute4,
      @category,
      @summary,
      @specification
      @created_at,
      @updated_at
    )
  `).run(product)
}