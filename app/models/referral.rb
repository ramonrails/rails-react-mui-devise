# NOTE:
# when referral is clicked, updated_at will change to that timestamp
# otherwise we can safely assume that link was not clicked
# 
# we are using IDs (PK) as referral token, but can be replaced with a more compelx random token
class Referral < ApplicationRecord
  # allow in-memory virtual attribute
  # this allows accepting the attribute forwarded from controller
  attr_accessor :referrer_email
  belongs_to :user

  before_validation :attach_referrer

  private

  def attach_referrer
    # attach only when missing
    # fetch record using the referrer_email
    self.user ||= User.find_by(email: referrer_email)
  end

end
