# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  respond_to :json
  
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  private

  # because devise gem uses responders gem
  # and it is designed to respond to HTML request format by default
  # https://github.com/heartcombo/devise/blob/main/Gemfile#L14
  # 
  # therefore we need to override it and respond to JSON

  def respond_with(resource, options = {})
    render json: {
      status: {
        code: :ok,
        message: "Login success"
      },
      data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
    }
  end

  # because devise gem uses this method to respond
  # https://github.com/heartcombo/devise/blob/main/app/controllers/devise/sessions_controller.rb#L31
  # 
  # which is not designed for JSON
  # https://github.com/heartcombo/devise/blob/main/app/controllers/devise/sessions_controller.rb#L75

  def respond_to_on_destroy
    if current_user
      render json: {
        status: :ok,
        message: "Logout done"
      }
    else
      render json: {
        status: :unauthorised,
        message: "Do I know you? :)"
      }
    end
  end

  def after_sign_in_path_for(resource)
    root_path
  end
end
