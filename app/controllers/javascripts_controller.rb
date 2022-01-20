class JavascriptsController < ApplicationController
  def index
    @javascripts = JavaScript.all
    @new_javascript = JavaScript.new
  end

  def show
    @javascript = JavaScript.find(params[:id])
  end

  def create
    @javascript = JavaScript.new(javascript_params)
    if @javascript.save
      redirect_to javascript_url(@javascript)
    else
      flash[:alert] = 'The artist already exists'
      redirect_to '/javascripts'
    end
  end

  private

  def javascript_params
    params.require(:java_script).permit(:title, :course)
  end
end
