# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  genre       :string           not null
#  user_id     :integer          not null
#  description :text
#  audio_file  :binary           not null
#  image_url   :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ActiveRecord::Base
  validates :title, :genre, :user_id, :audio_file_url, presence: true

  belongs_to :user

  has_many :comments,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Comment
end
