json.extract! sale, :id, :date, :total_price, :contact_name, :created_at, :updated_at
json.url sale_url(sale, format: :json)
