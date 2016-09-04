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

class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :tracks,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Track

  has_many :comments,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Comment

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(32)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    check = BCrypt::Password.new(password_digest)
    check.is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
