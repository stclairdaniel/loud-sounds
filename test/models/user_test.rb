# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  username         :string           not null
#  email            :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  name             :string
#  hometown         :string
#  header_image_url :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
