class ApplicationController < Sinatra::Base
  register Sinatra::CrossOrigin

  configure do
    enable :cross_origin
    set :allow_origin, "*"
    set :allow_methods, [:get, :post, :patch, :delete, :options] # allows these HTTP verbs
    set :expose_headers, ['Content-Type']
  end

  options "*" do
    response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    200
  end

  # method "URL" do


  get '/' do
    "Hello from Sinatra";
  end

  get '/products' do
    Product.all.to_json
  end

  get '/categories' do
    Category.all.to_json
  end

  get '/orders' do
    Order.all.to_json
  end

  get '/users' do
    User.all.to_json(include: [:products])
  end

  post "/neworder" do
    #binding.pry
    order = Order.create(
      user_id: params[:user_id],
      product_id: params[:product_id]
    )
    #binding.pry
    #order.to_json(include: [:user_id, :product_id])
    #binding.pry
    order.to_json
  end

  get "/users/:id/orders" do
    user = User.find(params[:id])
    if user
      user.orders.to_json(include: [:product])
    else
      {error: "User not found"}.to_json
    end
  end

  get "/user/:id/order" do
    user = User.find(params[:id])
    if user
      user.orders.to_json(include: [:product])
    else
      {error: "User not found"}.to_json
    end
  end


  get "/user/:id/products/" do
    user = User.find(params[:id])
    if user
      puts user.id
      # Pry.start
      user.orders.to_json(include: [:product])
    else
      {error: "User not found"}.to_json
    end
  end


  get "/cat/:id/prods" do
    # Product.all.to_json;
    category = Category.find(params[:id])
    # product.to_json
    # # binding.pry
    if category
      # product.to_json
    #   Pry.start
      category.product_categories.to_json(include: [:product])
    else
      {error: "Category not found"}.to_json
    end
  end






end


# https://hackmd.io/@dlm/testing-your-sinatra-api
# https://github.com/DakotaLMartinez/sinatra_api_crud/tree/solution
