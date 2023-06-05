class ReferralsController < ActionController::API
  before_action :set_referral, only: %i[ show update destroy ]

  # GET /referrals
  def index
    # pagination is out of scope
    # only show last 5
    @referrals = Referral.last(5)

    render json: @referrals
  end

  # GET /referrals/1
  def show
    # ideally, get calls should not update any data
    # but we want to use any link from email or external system
    # which cannot be a POST or PUT/PATCH request for better compatibility
    # 
    # updated_at changed now
    # which means this link was used
    @referral.touch

    render json: @referral
  end

  # POST /referrals
  def create
    @referral = Referral.new(referral_params)

    if @referral.save
      render json: @referral, status: :created, location: @referral
    else
      render json: @referral.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /referrals/1
  def update
    if @referral.update(referral_params)
      render json: @referral
    else
      render json: @referral.errors, status: :unprocessable_entity
    end
  end

  # DELETE /referrals/1
  def destroy
    @referral.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_referral
      @referral = Referral.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def referral_params
      params.require(:referral).permit(:email, :user_id, :referrer_email)
    end
end
