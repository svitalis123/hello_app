class MessagesController < ApplicationController
  def index
    @greetings = Message.order('RANDOM()').first
    render json: { greetings: @greetings.context }
  end
end
