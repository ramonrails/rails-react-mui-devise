require "test_helper"

class ReferralTest < ActiveSupport::TestCase
  setup do
    @user = User.find_or_create_by(email: 'user@email.com')
  end

  test "must have the basic attributes" do
    %i[email user_id created_at updated_at referrer_email].each do |name|
      # check each attribute works
      assert true, Referral.respond_to?(name)
    end
  end

  test "email is mandatory" do
    refute Referral.new(user_id: @user).valid?
  end

  test "email is always unique" do
    Referral.create(email: "a@email.com", user_id: @user)

    assert_raises { Referral.create!(email: "a@email.com", user_id: @user) }
  end
end
