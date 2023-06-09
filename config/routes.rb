Rails.application.routes.draw do
  defaults format: :json do
    devise_for :users, path: 'api',
      path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        registration: 'register'
      },
      controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
      }

      # no need to put controllers in "api" folder, but the URL has /api/
      scope :api do
        resources :referrals
      end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  get "*path", to: "home#index"
end
