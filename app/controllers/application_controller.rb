class ApplicationController < ActionController::Base
  # no authenticity token required. we are on API, not HTML.
  skip_before_action :verify_authenticity_token
end
