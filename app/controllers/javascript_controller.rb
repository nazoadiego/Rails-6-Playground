class JavascriptController < ApplicationController
  def index
    @javascript = JavaScript.all
  end

  def show
    @javascript = JavaScript.find(params[:id])
  end

  def create
    @javascript = JavaScript.new(javascript_params)
    @javascript.user = current_user
    if @javascript.save
      redirect_to @javascript
    else
      flash[:alert] = 'The artist already exists'
      redirect_to '/javascript'
    end
  end

  private

  def javascript_params
    params.require(:javascript).permit(:title, :course)
  end
end
