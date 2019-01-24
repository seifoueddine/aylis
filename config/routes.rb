Rails.application.routes.draw do




  get 'confirmation/index'

  get 'send/index'

  resources :sales
  resources :banks
  devise_for :users , controllers: {
      registrations: 'users/registrations'
  }


  root 'welcome#welcome'
  get 'welcome/welcome'
  resources :products
  resources :users
  resources :sale_products

  get '/users/reset_password/:id' , to: 'users#reset_password'
  get '/users/active/:id' , to: 'users#active'
  get '/users/superactive/:id' , to: 'users#superactive'
  get '/send/index' , to: 'send#index'
  get 'clean' => "products#clean"
  get '/sales/12565/index2' , to: 'sales#index2'

  get '/send/:id/sell' , to: 'send#sell'

  get '/sales/:id/read' , to: 'sales#read'


  get '/users/:id' , to: 'users#show'
  get '/tree/:id' , to: 'tree#index'
  get '/welcome/:id' , to: 'welcome#index'
  post  'saleproducts/create', to: 'saleproducts#create'
  get   'sale_products/:id/destroy/:product_id' , to: 'sale_products#destroy'
  get   'sale_products/:id/decrement/:product_id' , to: 'sale_products#decrement'
  get   'sale_products/:id/increment/:product_id' , to: 'sale_products#increment'

  get '/fetch_products' => 'products#from_category', as: 'fetch_products'
    get "/index.html" => "static#index"
    get "/index2.html" => "static#index2"
    get "/index3.html" => "static#index3"
    get "/form.html" => "static#form"
    get "/form_advanced.html" => "static#form_advanced"
    get "/tables.html" => "static#tables"
    get "/tables_dynamic.html" => "static#tables_dynamic"
    get "/general_elements.html" => "static#general_elements"
    get "/media_gallery.html" => "static#media_gallery"
    get "/typography.html" => "static#typography"
    get "/icons.html" => "static#icons"
    get "/glyphicons.html" => "static#glyphicons"
    get "/widgets.html" => "static#widgets"
    get "/invoice.html" => "static#invoice"
    get "/inbox.html" => "static#inbox"
    get "/calendar.html" => "static#calendar"
    get "/chartjs.html" => "static#chartjs"
    get "/chartjs2.html" => "static#chartjs2"
    get "/morisjs.html" => "static#morisjs"
    get "/echarts.html" => "static#echarts"
    get "/other_charts.html" => "static#other_charts"
    get "/fixed_sidebar.html" => "static#fixed_sidebar"
    get "/fixed_footer.html" => "static#fixed_footer"
    get "/kitchen_sink" => "static#kitchen_sink"
    get "/kitchen8_sink" => "static#kitchen8_sink"
    get   '/',                                    to: "static#index"
    get "/firms/mother_firms",                        to:'firms#mother_firms'
    get "/firms/_categories",                        to:'firms#_categories'
    get "/banks/25/send_activation",              to:'banks#send_activation' , as: "send_activation"
    post  'banks/activations', to: 'banks#activations'
    post  'users/activations' , to: 'users#activations'
    post  'confirmation/ID' , to: 'confirmation#ID'


end
