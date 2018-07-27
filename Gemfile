source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '5.1.3'

gem 'puma', '~> 3.7'

gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'

gem 'jquery-rails'
gem 'gentelella-rails'
gem 'jquery-ui-rails'
gem 'modernizr-rails'
gem 'devise'
gem 'omniauth'
gem 'will_paginate'
gem 'paperclip'
gem 'whenever', require: false
gem 'omniauth-facebook'
gem 'aasm'
gem 'netaddr'
gem 'thinking-sphinx','~> 3.4.0'
gem 'kaminari'
gem 'bootstrap-select-rails', '~> 1.12', '>= 1.12.4'
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  #gem 'capistrano-rails'
  gem 'mysql2' 
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'capistrano',         require: false
  gem 'capistrano-rvm',     require: false
  gem 'capistrano-rails',   require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano3-puma',   require: false
end
group :production do
  gem 'pg'
  gem 'rails_12factor'
end
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
