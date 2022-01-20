class CssesController < ApplicationController
  def index
    @css = Css.all
    @new_css = Css.new
  end

  def show
    @css = Css.find(params[:id])
  end

  def create
    @css = Css.new(css_params)
    if @css.save
      redirect_to @css
    else
      flash[:alert] = 'The artist already exists'
      redirect_to '/css'
    end
  end

  private

  def css_params
    params.require(:css).permit(:name, :course, :subcategory)
  end
end
