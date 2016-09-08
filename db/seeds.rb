require 'date'

User.create!(username: 'Guest',
             email: Faker::Internet.safe_email,
             password: 'password',
             name: Faker::Name.name,
             hometown: "#{Faker::Address.city}, #{Faker::Address.country}",
             header_image_url: Faker::Avatar.image("#{Faker::Name.name}",'100x100'))
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
             name: 'Peter Berkman, Ary Warnaar, James DeVito, Luke Silas',
             hometown: 'New York, United States',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1472862223/test_jajvsp.gif')
User.create!(username: 'Hidden Orchestra',
             email: 'hiddenorchestra@example.com',
             password: 'password',
             name: 'Joe Acheson',
             hometown: 'Edinburgh, Scotland',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473291558/Hidden_Orchestra-Night_Walks_On_Vinyl_Mixtape_b_bofexn.jpg')
User.create!(username: 'Plaid',
             email: 'plaid@example.com',
             password: 'password',
             name: 'Andy Turner, Ed Handley',
             hometown: 'London, England',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473291725/d92ee6e7_ebtekm.jpg')
User.create!(username: 'Starkey',
             email: 'starkey@example.com',
             password: 'password',
             name: 'Paul Geissinger',
             hometown: 'Philadelphia, United States',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473292079/YcZJyzYi_zeuelo.jpg')
User.create!(username: 'Toe',
             email: 'toe@example.com',
             password: 'password',
             name: 'Kashikura Takashi, Mino Takaaki, Yamane Satoshi, Yamazaki Hirokazu',
             hometown: 'Tokyo, Japan',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473292154/300x300_ghhafd.jpg')
User.create!(username: 'Wisp',
             email: 'wisp@example.com',
             password: 'password',
             name: 'Reid W. Dunn',
             hometown: 'Niagara, United States',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473350904/R-714527-1301926897.jpeg_mjmtdg.jpg')
User.create!(username: 'Forest Swords',
             email: 'forestswords@example.com',
             password: 'password',
             name: 'Matthew Barnes',
             hometown: 'England',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473292620/bb2aa0de_iiqqo0.jpg')
User.create!(username: 'Floex',
             email: 'floex@example.com',
             password: 'password',
             name: 'Tomáš Dvořák',
             hometown: 'Prague, Czech Republic',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473292707/a3185495246_5_go7ud7.jpg')
User.create!(username: 'DJ Krush',
             email: 'krush@example.com',
             password: 'password',
             name: 'Hideaki Ishi',
             hometown: 'Tokyo, Japan',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473292842/2258_sd33se.jpg')
User.create!(username: 'Eleven Tigers',
             email: 'eleventigers@example.com',
             password: 'password',
             name: 'Jokubas Dargis',
             hometown: 'Lithuania',
             header_image_url:
             'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1473361886/a3346130537_10_rjuw5q.jpg')

Track.create!(title: 'TBF9',
              genre: 'Electronic',
              user_id: 1,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472948089/TFB9_pr0mxs.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472948022/light_tunnel_hs6ybd.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Beat Your Competition',
              genre: 'Trance',
              user_id: 1,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472948074/Beat_Your_Competition_cveivo.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/v1472948642/abstract-design-blue-background-vector-graphic-3456_c7yrup.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Sugar',
              genre: 'House',
              user_id: 1,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472948089/Sugar_c9iysd.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/v1472948642/-background-pattern-0822-textures-patterns-6296_oncecn.gif',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Invisible',
              genre: 'Big Room',
              user_id: 1,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472948084/Invisible_sgftuv.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/v1472948642/c6f67a99c4669ea88a6c951a4c0b6182-pearlsquare_y9f6tg.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'TBF3',
              genre: 'Chill',
              user_id: 1,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472948085/TFB3_pku196.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/v1472948642/abstract-colorful-glowing-mesh-background-35380_gw8ru4.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Minipops 67 (Source Field Mix)',
              genre: 'IDM',
              user_id: 2,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472772478/01_Minipops_67_Source_Field_Mix_etjh2q.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472772161/Seed%20Data/aphex_header_ckii1n.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Alberto Balsalm',
              genre: 'Electronic',
              user_id: 2,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473294605/10_Alberto_Balsalm_gbxzje.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472862095/aphex-twin-300x300_fzercf.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Syro u473t8+e (Piezoluminescence Mix)',
              genre: 'IDM',
              user_id: 2,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473293540/09_Syro_u473t8_e_Piezoluminescence_Mix_pkv8zj.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473293589/lookalike-rdj_dmltkv.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Planet',
              genre: 'Chiptune',
              user_id: 3,
              description: 'High energy 8-bit',
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472946535/04_Planet_b97rzq.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472946701/a2170758260_10_a4mwef.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: '<3',
              genre: 'Chiptune',
              user_id: 3,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1472777799/dwv9tduulys31a1akan0.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472862499/ipad_anamanaguchi_background_by_drjord-d3kn4e7_epje8s.png',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Prom Night',
              genre: 'Chiptune',
              user_id: 3,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473293991/07_Prom_Night_onjcxx.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473294029/artworks-000069130538-d824sf-t500x500_uhwxcy.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.weeks.ago, Date.today)}").to_s)
Track.create!(title: 'Antiphon',
              genre: 'Orchestral Electronic',
              user_id: 4,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473294104/01_Antiphon_w6xbm1.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473294152/a3137662325_10_ahzjw2.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Dust (Floex Remix)',
              genre: 'Orchestral Electronic',
              user_id: 4,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473294344/02_Dust_Floex_Remix_mytydp.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473294260/Hidden_Orchestra-Flight_Mixtape_kykmdz.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Lilith',
              genre: 'Electronic',
              user_id: 5,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473295570/12_Lilith_odex0a.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473295295/4109JBKG34L_kglmte.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Shakblu',
              genre: 'Electronic',
              user_id: 5,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473295604/01_Shackblu_xrl6qd.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473295439/3e49d55074627a4899518c741566e5ba57f2b7c55d102b793d11ca62_yy3x7z.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Ok Luv',
              genre: 'Bass',
              user_id: 6,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473295953/01_OK_Luv_tkqkwa.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473295928/ZIQ259Starkeyhires_iigxrm.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Neck Snap',
              genre: 'Bass',
              user_id: 6,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473300429/08_Neck_Snap_fsb9qu.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473296090/Starkey_TablePic_vxqvwm.png',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Stars (Ital Tek Remix)',
              genre: 'Bass',
              user_id: 6,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473300437/07_Stars_Ital_Tek_Remix_ceo3wn.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473296020/R-2179804-1272773509.jpeg_qxsmgd.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Two Moons',
              genre: 'Post Rock',
              user_id: 7,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473308843/06_Two_Moons_pgnonv.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473308702/cover_4581425102013_r_txestc.jpg',
              created_at: Date.parse("#{Faker::Date.between(5.days.ago, Date.today)}").to_s)
Track.create!(title: 'tremelo + decay',
              genre: 'Post Rock',
              user_id: 7,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473308849/03_tremolo_delay_kghkxi.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473308719/50h4yp_bynxzc.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'My Little Wish',
              genre: 'Post Rock',
              user_id: 7,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473308837/05_My_Little_Wish_gnsnst.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473308731/a2239335029_10_hff6eb.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Katabatic',
              genre: 'IDM',
              user_id: 8,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473309303/08_Katabatic_reuitq.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473309200/wisp-the-shimmering-hour-2009_qihwuw.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Morning Myth',
              genre: 'IDM',
              user_id: 8,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473309323/01_Morning_Myth_hfzqy4.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473309268/rephlexcat195lp-1_krdxel.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Irby Tremor',
              genre: 'Electronic',
              user_id: 9,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473309519/03_Irby_Tremor_pxoxdu.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473309459/homepage_large.f2e8fe13_tvduja.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Veronika\'s Dream',
              genre: 'Orchestral Electronic',
              user_id: 10,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473351373/06_Veronika_s_Dream_jylpm9.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473351261/a3860469600_16_ge4yqq.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Nel Blu Feat. Musetta',
              genre: 'Orchestral Electronic',
              user_id: 10,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473351356/09_Nel_Blu_feat._Musetta_rznxio.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473351299/artworks-000011865616-xnpvyp-t500x500_vw58m8.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Lunation',
              genre: 'Hip Hop',
              user_id: 11,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473309655/02_Lunation_hei9vy.mp3',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473309615/1-400x395_cdmw9v.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Still Island Feat. Ken Shima',
              genre: 'Orchestral Hip Hop',
              user_id: 11,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473351586/06_Stormy_Cloud_Feat._Ken_Shima_d4n2pf.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473351516/24f87492_tplppy.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Couldn\'t',
              genre: 'Bass',
              user_id: 12,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473362129/04_Couldn_t_fchmul.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473361897/homepage_large.e2c1baa6_ngooq1.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)
Track.create!(title: 'Songs for You',
              genre: 'Bass',
              user_id: 12,
              audio_file_url: 'http://res.cloudinary.com/loudsounds/video/upload/v1473362153/03_Songs_for_You_bxag3f.m4a',
              image_url: 'http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1473361897/homepage_large.e2c1baa6_ngooq1.jpg',
              created_at: Date.parse("#{Faker::Date.between(2.years.ago, Date.today)}").to_s)


#Comments

comments = [
  'A great sound for sure. Like it!',
  'Great sound',
  'This record is dope! Make sure to go and check out my page. Like and leave a comment, much love!',
  'This is so good ~(*_*)~',
  'On repeat :)',
  'this grooves so hard, the mix is immaculate, sound design on point',
  'this is a hard track to stop listening to mid way. very captivating!',
  'I dig the low, breathing sizzle of the bass line.',
  'massive',
  'unreal',
  'mind blowing. killer track!',
  'masterpiece',
  'what synth did you use for the hook, its so entrancing',
  'that sick melody mmmmmh',
  'still this is my favorite track',
  'this track has such a nice sound. I can only dream of achieving something similar',
  'It\'s very satisfying to notice a new favorite detail to a song you have heard dozens of times. Your music is so special.',
  'Why? Why is this guy so magical?',
  'best track of the year hands down.',
  'That moment when you lisen to a song, and have very mixed emotions.',
  'One of my favourite 12"\'s, never run out of little details to hear!',
  'smooth atmosphere!!!',
  'beautiful textures',
  'the grooviest thing ever',
  'every time i hear this song... so excellent , i am overwhelmed.',
  'Trivia: This entire song is made from a cowbell sample.',
  'the master has spoken',
  'I like the ending the best! It almost changes into another song. Very interesting what you did here. Fun!',
  'this is well lush, glad you\'re releasing stuff again.',
  'like a sunset on a summer day',
  'this is my twentieth time listening to this song. i listen to it all night long',
  'cant get over how good this is',
  'Omg this is soooooo cool',
  'Really feeling this. Great work!',
  'Totally stellar!',
  'This is amazing! <3',
  'this is massive',
  'that leaves me breathless',
  'big bada boooooooom',
  'right here... ooh!',
  'instant like !',
  'madness',
  'Mind officially blown.',
  'Whoa. Yep. Click.',
  'I got my copy already! just trippy and nice!',
  'This is just too much, excuse me while i quit music!',
  'This is sooooo good, taking me into another realm. My goodness',
  'very creative and exciting soundmaking.',
  'this is the most unique melody i\'ve ever heard',
  'Gives a child like feeling. Kinda feel of imagitive, playfulness, and curiosity.',
  'very satisfying to listen to, sensory-wise',
  'cool weird song',
  '(~￣▽￣)~',
  'This song always makes me smile',
  'chaotic and classy.brilliant.',
  'Reminds me of oldskool stuff, produced with a current edge. Gj',
  'heavy',
  'sick',
  'whoa',
  'Cool!',
  'nice one',
  'amazing',
  'tuuuune',
  'Masive tune',
  'This beat is fresh to death. You put it together really well.',
  'What a great intro, absolutely touching!',
  'I just want to hug this guy lol',
  'Madness!',
  'Epic track',
  'This song is fire',
  'Beam me up!!!',
  'Take us away..',
  'So subtle & beautiful..',
  'Love this one. So lovely!',
  'it\'s so cool so nice !~~~',
  'the bass is amazing',
  'nice vibe!',
  'If I were talented, this is the music I would make.',
  'damn this awesome.....inspiring for me',
  'mind escaping',
  'this is hot. a great balance of chill and tapping the feet',
  'serene',
  'so tasty!'
]

user_count = User.all.length
track_count = Track.all.length

(1...track_count).each do |track_id|
  #shuffle users each time to make sure comments are distributed nicely
  user_ids = (1...user_count).to_a.shuffle
  user_ids.each do |user_id|
    #comment chance
    #ensure user isn't self-commenting
    if user_id != Track.find(track_id).user.id && Random.rand < 0.3
      body = comments[Random.rand(comments.length)]
      Comment.create!({body: body, user_id: user_id, track_id: track_id})
    end
    #like chance
    if user_id != Track.find(track_id).user.id && Random.rand < 0.5
      Like.create!({user_id: user_id, track_id: track_id})
    end
  end
end
