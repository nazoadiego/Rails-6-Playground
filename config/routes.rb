Rails.application.routes.draw do
  get 'index/show'
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :javascripts, only: [:index, :show, :create]
  resources :react, only: [:index, :show, :create]
  resources :css, only: [:index, :show, :create]
end
