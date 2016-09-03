User.create!(username: 'Guest',
             email: Faker::Internet.safe_email,
             password: 'password',
             name: Faker::Name.name,
             hometown: "#{Faker::Address.city}, #{Faker::Address.country}",
             header_image_url: Faker::Avatar.image('my-own-slug', '100x100'))

User.create!(username: 'Aphex Twin',
             email: 'aphex_twin@example.com',
             password: 'password',
             name: 'Richard D. James',
             hometown: 'Cornwall, UK',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1472785691/Seed%20Data/aphex_logo_inueqh.jpg')

User.create!(username: 'Anamanaguchi',
             email: 'anamanaguchi@example.com',
             password: 'password',
             name: 'Anamanaguchi',
             hometown: 'New York, NY',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1472862223/test_jajvsp.gif')

Track.create!(title: 'Minipops 67 (Source Field Mix)',
              genre: 'Electronic',
              user_id: 2,
              description: 'The leadoff single from 2015\'s Syro',
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472772478/01_Minipops_67_Source_Field_Mix_etjh2q.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472772161/Seed%20Data/aphex_header_ckii1n.jpg')

Track.create!(title: 'diskhat ALL prepared1mixed 13',
              genre: 'Electronic',
              user_id: 2,
              description: 'Percussion comes to life',
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472862021/01_diskhat_ALL_prepared1mixed_13_bgdwmh.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472862095/aphex-twin-300x300_fzercf.jpg')
              
Track.create!(title: '<3',
              genre: 'Electronic',
              user_id: 3,
              description: 'Chiptunes for the soul',
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472777799/dwv9tduulys31a1akan0.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1472862499/ipad_anamanaguchi_background_by_drjord-d3kn4e7_epje8s.png')
