class CssController < ApplicationController
  def index
    @css = Css.all
  end

  def show
    @css = Css.find(params[:id])
  end

  def create
    @css = Css.new(css_params)
    @css.user = current_user
    if @css.save
      redirect_to @css
    else
      flash[:alert] = 'The artist already exists'
      redirect_to '/css'
    end
  end

  private

  def css_params
    params.require(:css).permit(:title, :course)
  end
end
