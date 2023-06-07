require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    # beacause we removed home#index and redirected `root` path there
    get root_url
    assert_response :success
  end
end
