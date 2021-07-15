p 'Deleting old data'
User.destroy_all
Product.destroy_all
Category.destroy_all
ProductCategory.destroy_all
Order.destroy_all
p 'Deleted old data'

# user
u1 = User.create(full_name: "James Khan")
u2 = User.create(full_name: "Kamal Ahamd")
u3 = User.create(full_name: "John Jackson")
u4 = User.create(full_name: "Joe Doe")
u5 = User.create(full_name: "James Bond")

# product
p1 = Product.create(name: "iPhone12", price: 1200.9)
p2 = Product.create(name: "iPhoneX", price: 800.9)
p3 = Product.create(name: "iPhone11", price: 1100.9)
p4 = Product.create(name: "Washing Machine", price: 1300.9)
p5 = Product.create(name: "Computer Desk", price: 700.9)
p5 = Product.create(name: "Sofa", price: 700.9)
p6 = Product.create(name: "Rockies", price: 17000.3)

# p1 = Product.create(name: "iPhone12", price: 1200.9, user_id: u1.id)
# p2 = Product.create(name: "iPhoneX", price: 800.9, user_id: u2.id)
# p3 = Product.create(name: "iPhone11", price: 1100.9, user_id: u1.id)
# p4 = Product.create(name: "Washing Machine", price: 1300.9, user_id: u3.id)
# p5 = Product.create(name: "Computer Desk", price: 700.9, user_id: u4.id)
# p5 = Product.create(name: "Sofa", price: 700.9, user_id: u2.id)
# p6 = Product.create(name: "Rockies", price: 17000.3)

# category
#
c1 = Category.create(name: "Technology")
c2 = Category.create(name: "Furniture")
c3 = Category.create(name: "Appliances")
c4 = Category.create(name: "Leisure")

# user relationship
ProductCategory.create(product_id: p1.id, category_id: c1.id)
ProductCategory.create(product_id: p1.id, category_id: c2.id)
ProductCategory.create(product_id: p2.id, category_id: c1.id)
ProductCategory.create(product_id: p3.id, category_id: c3.id)
ProductCategory.create(product_id: p4.id, category_id: c2.id)

# Order user
o1 = Order.create(user_id: u1.id, product_id: p1.id) 
o2 = Order.create(user_id: u3.id, product_id: p2.id) 
o3 = Order.create(user_id: u4.id, product_id: p3.id)
o4 = Order.create(user_id: u2.id, product_id: p4.id) 
o5 = Order.create(user_id: u1.id, product_id: p1.id) 

# Order Product
# OrderProduct.create(order_id: o1.id, product_id: p4.id)
# OrderProduct.create(order_id: o2.id, product_id: p2.id)
# OrderProduct.create(order_id: o3.id, product_id: p1.id)
# OrderProduct.create(order_id: o4.id, product_id: p3.id)


# Pry.start
