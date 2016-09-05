Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :likes, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:destroy, :create, :update, :index, :show]
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
  end
end
