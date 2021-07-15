class Product < ActiveRecord::Base
  # belongs_to :user
  
  has_many :product_categories
  has_many :categories, through: :product_categories

  has_many :orders
  has_many :users, through: :orders
end
