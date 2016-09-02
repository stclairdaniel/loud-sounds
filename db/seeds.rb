User.create!(username: "Guest",
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
             header_image_url: "http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472772161/aphex_header_ckii1n.jpg")

Track.create!(title: "Minipops 67 (Source Field Mix)",
              genre: "Electronic",
              user_id: 2,
              description: "The leadoff single from 2015's Syro",
              audio_file_url: "http://res.cloudinary.com/loudsounds/video/upload/v1472772478/01_Minipops_67_Source_Field_Mix_etjh2q.m4a",
              image_url: "http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472772161/aphex_header_ckii1n.jpg")
