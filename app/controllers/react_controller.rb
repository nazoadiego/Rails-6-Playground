class ReactController < ApplicationController
  def index
    @react = React.all
  end

  def show
    @react = React.find(params[:id])
  end

  def create
    @react = React.new(react_params)
    @react.user = current_user
    if @react.save
      redirect_to @react
    else
      flash[:alert] = 'The artist already exists'
      redirect_to '/react'
    end
  end

  private

  def react_params
    params.require(:react).permit(:title, :course)
  end
end
