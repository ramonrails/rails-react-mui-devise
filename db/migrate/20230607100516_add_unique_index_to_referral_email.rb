class AddUniqueIndexToReferralEmail < ActiveRecord::Migration[7.0]
  def change
    add_index :referrals, :email, unique: true
  end
end
