Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api, defaults: { format: :json } do
        resources :users
        resource :session, only: [:create, :destroy]
        resources :movies, only: [:index, :show]
        resources :movies_genres, only: [:index, :show]
        resources :genres, only: [:index, :show] do
            resources :movies, only: [:index]
        end
        resources :lists, only: [:create,:show,:destroy]
      end


  root to: 'root#root'
end
