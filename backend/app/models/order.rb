class Order < ActiveRecord::Base
    # belongs_to :user
    
    # has_many :order_products
    # has_many :products, through: :order_products

    # belongs_to :product
    # belongs_to :user
    belongs_to :product
    belongs_to :user

end