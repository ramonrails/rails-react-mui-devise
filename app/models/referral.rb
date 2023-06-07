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

  # NOTE: we can use custom REGEX format to suit our needs
  # but rails already uses a format internally
  # "convention over configuration" is ensured here
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  private

  def attach_referrer
    # attach only when missing
    # fetch record using the referrer_email
    self.user ||= User.find_by(email: referrer_email)
  end

end
