// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "videos/perfect_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 2.9 , text: "I found a love for me" },
            { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" }
        ]
    },
    {
        id: 3,
        title: "Unconditionally",
        artist: "Katy Perry",
        album: "Prism",
        albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "audio/Katy Perry - Unconditionally.mp3",
        videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 7.1, text: "Oh no, did I get too close?" },
            { time: 12, text: "Oh, did I almost see what's really on the inside?" },
            { time: 22.6, text: "All your insecurities" },
            { time: 27.3, text: "All the dirty laundry" },
            { time: 30.3, text: "Never made me blink one time" },
            { time: 36.5, text: "Unconditional, unconditionally" },
            { time: 44, text: "I will love you unconditionally" },
            { time: 51, text: "There is no fear now" },
            { time: 55, text: "Let go and just be free" },
            { time: 58.6, text: "I will love you unconditionally" },
            { time: 67, text: "So come just as you are to me" },
            { time: 71, text: "Don't need apologies" },
            { time: 74.9, text: "Know that you are worthy" },
            { time: 82, text: "I'll take your bad days with your good" },
            { time: 86.5, text: "Walk through the storm, I would" },
            { time: 90, text: "I'd do it all because I love you" },
            { time: 96, text: "I love you" },
            { time: 99.5, text: "Unconditional, unconditionally" },
            { time: 107, text: "I will love you unconditionally" },
            { time: 114, text: "There is no fear now" },
            { time: 118, text: "Let go and just be free" },
            { time: 122, text: "I will love you unconditionally" },
            { time: 129.5, text: "So open up your heart and just let it begin" },
            { time: 133, text: "Open up your heart and just let it begin" },
            { time: 136.9, text: "Open up your heart and just let it begin" },
            { time: 141, text: "Open up your heart" },            
            { time: 145, text: "Acceptance is the key to be" },
            { time: 150.6, text: "To be truly free" },
            { time: 154, text: "Will you do the same for me?" },
            { time: 162.5, text: "Unconditional, unconditionally" },
            { time: 170, text: "I will love you unconditionally" },
            { time: 177.8, text: "There is no fear now" },
            { time: 181, text: "Let go and just be free" },
            { time: 185, text: "I will love you unconditionally" },
            { time: 200, text: "I will love you (Unconditionally)" },
            { time: 207.8, text: "I will love you" },
            { time: 215, text: "I will love you unconditionally" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
        lyrics: [
  { "time": 1, "text": "You know I want you" },
  { "time": 6, "text": "It's not a secret I try to hide" },
  { "time": 10, "text": "You know you want me" },
  { "time": 14, "text": "So don't keep sayin' our hands are tied" },
  { "time": 18, "text": "You claim it's not in the cards" },
  { "time": 20, "text": "And fate is pullin' you miles away and out of a reach from me" },
  { "time": 23, "text": "But you're hearin' my heart" },
  { "time": 25, "text": "So who can stop me if I decide that you're my destiny?" },
  { "time": 27, "text": "What if we rewrite the stars?" },
  { "time": 31, "text": "Say you were made to be mine" },
  { "time": 35, "text": "Nothin' could keep us apart" },
  { "time": 40, "text": "You'll be the one I was meant to find" },
  { "time": 43, "text": "It's up to you, and it's up to me" },
  { "time": 47, "text": "No one could say what we get to be" },
  { "time": 51, "text": "So why don't we rewrite the stars?" },
  { "time": 54, "text": "And maybe the world could be ours, tonight" },
  { "time": 59, "text": "Ah-oh (no, no, no, no)" },
  { "time": 102, "text": "Ah-oh (mm)" },
  { "time": 107, "text": "You think it's easy" },
  { "time": 116, "text": "You think I don't wanna run to you, yeah" },
  { "time": 119, "text": "But there are mountains (but there are mountains)" },
  { "time": 122, "text": "And there are doors that we can't walk through" },
  { "time": 125, "text": "I know you're wondering why" },
  { "time": 129, "text": "Because we're able to be just you and me within these walls" },
  { "time": 131, "text": "But when we go outside" },
  { "time": 138, "text": "You're gonna wake up and see that it was hopeless after all" },
  { "time": 139, "text": "No one can rewrite the stars" },
  { "time": 147, "text": "How can you say you'll be mine?" },
  { "time": 152, "text": "Everythin' keeps us apart" },
  { "time": 155, "text": "And I'm not the one you were meant to find (the one you were meant to find)" },
  { "time": 159, "text": "It's not up to you, it's not up to me (yeah)" },
  { "time": 203, "text": "When everyone tells us what we can be" },
  { "time": 206, "text": "And how can we rewrite the stars?" },
  { "time": 210, "text": "Say that the world can be ours, tonight" },
  { "time": 215, "text": "All I want is to fly with you" },
  { "time": 219, "text": "All I want is to fall with you" },
  { "time": 223, "text": "So just give me all of you" },
  { "time": 227, "text": "It feels impossible (it's not impossible)" },
  { "time": 232, "text": "Is it impossible?" },
  { "time": 233, "text": "Say that it's possible" },
  { "time": 235, "text": "And how do we rewrite the stars?" },
  { "time": 239, "text": "Say you were made to be mine" },
  { "time": 242, "text": "And nothin' could keep us apart" },
  { "time": 246, "text": "'Cause you are the one I was meant to find" },
  { "time": 250, "text": "It's up to you, and it's up to me" },
  { "time": 253, "text": "No one could say what we get to be" },
  { "time": 257, "text": "And why don't we rewrite the stars?" },
  { "time": 301, "text": "Changin' the world to be ours" },
  { "time": 305, "text": "You know I want you" },
  { "time": 318, "text": "It's not a secret I try to hide" },
  { "time": 322, "text": "But I can't have you" },
  { "time": 326, "text": "We're bound to break and my hands are tied" }

]
},

    {
        id: 5,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
  { "time": 18, "text": "I wanna be your vacuum cleaner" },
  { "time": 22, "text": "Breathing in your dust" },
  { "time": 25, "text": "I wanna be your Ford Cortina" },
  { "time": 29, "text": "I will never rust" },
  { "time": 33, "text": "If you like your coffee hot" },
  { "time": 36, "text": "Let me be your coffee pot" },
  { "time": 40, "text": "You call the shots, babe" },
  { "time": 42, "text": "I just wanna be yours" },

  { "time": 46, "text": "Secrets I have held in my heart" },
  { "time": 50, "text": "Are harder to hide than I thought" },
  { "time": 54, "text": "Maybe I just wanna be yours" },
  { "time": 57, "text": "I wanna be yours, I wanna be yours" },

  { "time": 102, "text": "Wanna be yours" },
  { "time": 106, "text": "Wanna be yours" },
  { "time": 109, "text": "Wanna be yours" },

  { "time": 115, "text": "Let me be your leccy meter" },
  { "time": 119, "text": "And I'll never run out" },
  { "time": 122, "text": "Let me be the portable heater" },
  { "time": 126, "text": "That you'll get cold without" },
  { "time": 129, "text": "I wanna be your setting lotion (wanna be)" },
  { "time": 133, "text": "Hold your hair in deep devotion (How deep?)" },
  { "time": 136, "text": "At least as deep as the Pacific Ocean" },
  { "time": 140, "text": "Now I wanna be yours" },

  { "time": 143, "text": "Secrets I have held in my heart" },
  { "time": 147, "text": "Are harder to hide than I thought" },
  { "time": 150, "text": "Maybe I just wanna be yours" },
  { "time": 154, "text": "I wanna be yours, I wanna be yours" },
  { "time": 159, "text": "Wanna be yours" },

  { "time": 203, "text": "Wanna be yours" },
  { "time": 207, "text": "Wanna be yours" },
  { "time": 210, "text": "Wanna be yours" },
  { "time": 214, "text": "Wanna be yours" },
  { "time": 217, "text": "Wanna be yours" },
  { "time": 221, "text": "Wanna be yours" },
  { "time": 224, "text": "Wanna be yours" },
  { "time": 226, "text": "(Wanna be yours)" },

  { "time": 230, "text": "I wanna be your vacuum cleaner (wanna be yours)" },
  { "time": 233, "text": "Breathing in your dust (wanna be yours)" },
  { "time": 237, "text": "I wanna be your Ford Cortina (wanna be yours)" },
  { "time": 241, "text": "I will never rust (wanna be yours)" },
  { "time": 244, "text": "I just wanna be yours (wanna be yours)" },
  { "time": 248, "text": "I just wanna be yours (wanna be yours)" }

]
},
    {
  id: 6,
  title: "Closer",
  artist: "The Chainsmokers ft. Halsey",
  album: "Collage",
  albumArtUrl: "images/Closer.jpg",
  audioSrc: "audio/The Chainsmokers - Closer Ft. Halsey.mp3",
  videoBgSrc: "videos/closer.mp4",
  lyrics: [
  { time: 10, text: "Hey, I was doing just fine before I met you" },
  { time: 14, text: "I drink too much and that's an issue but I'm okay" },
  { time: 20, text: "Hey, you tell your friends it was nice to meet them" },
  { time: 25, text: "But I hope I never see them again" },

  { time: 31, text: "I know it breaks your heart" },
  { time: 33, text: "Moved to the city in a broke down car" },
  { time: 36, text: "And four years, no calls" },
  { time: 38, text: "Now you're looking pretty in a hotel bar" },

  { time: 40, text: "And I, I, I, I, I can't stop" },
  { time: 45, text: "No, I, I, I, I, I can't stop" },

  { time: 50, text: "So baby pull me closer" },
  { time: 52, text: "In the backseat of your Rover" },
  { time: 55, text: "That I know you can't afford" },
  { time: 57, text: "Bite that tattoo on your shoulder" },

  { time: 100, text: "Pull the sheets right off the corner" },
  { time: 103, text: "Of the mattress that you stole" },
  { time: 105, text: "From your roommate back in Boulder" },
  { time: 108, text: "We ain't ever getting older" },

  { time: 117, text: "We ain't ever getting older" },
  { time: 128, text: "You look as good as the day I met you" },
  { time: 131, text: "I forget just why I left you, I was insane" },
  { time: 136, text: "Stay and play that Blink-182 song" },

  { time: 141, text: "That we beat to death in Tucson, okay" },
  { time: 145, text: "I know it breaks your heart" },
  { time: 152, text: "Moved to the city in a broke down car" },
  { time: 154, text: "And four years, no call" },

  { time: 157, text: "Now I'm looking pretty in a hotel bar" },
  { time: 158, text: "And I, I, I, I, I can't stop" },
  { time: 201, text: "No, I, I, I, I, I can't stop" },
  { time: 206, text: "So baby pull me closer" },

  { time: 211, text: "In the backseat of your Rover" },
  { time: 213, text: "That I know you can't afford" },
  { time: 216, text: "Bite that tattoo on your shoulder" },
  { time: 218, text: "Pull the sheets right off the corner" },

  { time: 221, text: "Of the mattress that you stole" },
  { time: 223, text: "From your roommate back in Boulder" },
  { time: 226, text: "We ain't ever getting older" },
  { time: 228, text: "We ain't ever getting older" },

  { time: 238, text: "We ain't ever getting older" },
  { time: 249, text: "Never getting older" }
]
    },
        {
    id: 7,
    title: "Happier",
    artist: "Marshmello ft. Bastille",
    album: "Happier (Single)",
    albumArtUrl: "images/happier.jpg",
    audioSrc: "audio/Marshmello ft Bastille Happier .mp3",
    videoBgSrc: "videos/happier.mp4",
    lyrics: [     
   { time: 10, text: "Lately, I've been, I've been thinking" },
   { time: 13, text: "I want you to be happier, I want you to be happier" },
   { time: 18, text: "When the morning comes" },
   { time: 20, text: "When we see what we've become" },
   { time: 22, text: "In the cold light of day we're a flame in the wind" },
   { time: 25, text: "Not the fire that we've begun" },
   { time: 28, text: "Every argument, every word we can't take back" },
   { time: 32, text: "'Cause with all that has happened" },
   { time: 38, text: "I think that we both know the way that this story ends" },
   { time: 41, text: "Then only for a minute" },
   { time: 44, text: "I want to change my mind" },
   { time: 48, text: "'Cause this just don't feel right to me" },
   { time: 51, text: "I wanna raise your spirits" },
   { time: 54, text: "I want to see you smile but" },
   { time: 103, text: "Know that means I'll have to leave" },
   { time: 107, text: "Know that means I'll have to leave" },

   { time: 110, text: "Lately, I've been, I've been thinking" },
   { time: 116, text: "I want you to be happier, I want you to be happier" },
   { time: 117, text: "When the evening falls" },
   { time: 120, text: "And I'm left there with my thoughts" },
   { time: 123, text: "And the image of you being with someone else" },
   { time: 125, text: "Well, it's eating me up inside" },
   { time: 129, text: "But we ran our course, we pretended we're okay" },
   { time: 132, text: "Now if we jump together at least we can swim" },
   { time: 135, text: "Far away from the wreck we made" },

   { time: 139, text: "Then only for a minute" },
   { time: 142, text: "I want to change my mind" },
   { time: 145, text: "'Cause this just don't feel right to me" },
   { time: 149, text: "I wanna raise your spirits" },
   { time: 152, text: "I want to see you smile but" },
   { time: 201, text: "Know that means I'll have to leave" },
   { time: 205, text: "Know that means I'll have to leave" },

   { time: 208, text: "Lately, I've been, I've been thinking" },
   { time: 213, text: "I want you to be happier, I want you to be happier" },
   { time: 219, text: "So I'll go, I'll go" },
   { time: 223, text: "I will go, go, go" },
   { time: 228, text: "So I'll go, I'll go" },
   { time: 234, text: "I will go, go, go" },

   { time: 237, text: "Lately, I've been, I've been thinking" },
   { time: 243, text: "I want you to be happier, I want you to be happier" },
   { time: 246, text: "Even though I might not like this" },
   { time: 252, text: "I think that you'll be happier, I want you to be happier" },

   { time: 256, text: "Then only for a minute" },
   { time: 259, text: "I want to change my mind" },
   { time: 302, text: "'Cause this just don't feel right to me" },
   { time: 305, text: "I wanna raise your spirits" },
   { time: 309, text: "I want to see you smile but" },
   { time: 318, text: "Know that means I'll have to leave" },
   { time: 321, text: "Know that means I'll have to leave" },

   { time: 325, text: "Lately, I've been, I've been thinking" },
   { time: 330, text: "I want you to be happier, I want you to be happier" },
   { time: 335, text: "So I'll go, I'll go" },

   { time: 335, text: "I will go, go, go" } // outro
]
},
    {
    id: 8,
    title: "Unforgettable",
    artist: "French Montana",
    album: "Jungle Rules",
    albumArtUrl: "images/french.jpg",
    audioSrc: "audio/French Montana Unforgettable.mp3",
    videoBgSrc: "videos/money.mp4",
    lyrics: [
  { time: 11, text: "It's not good enough for me" },
  { time: 14, text: "Since I've been with you, ooh" },
  { time: 21, text: "It's not gonna work for you" },
  { time: 24, text: "Nobody can equal me (I know)" },

  { time: 30, text: "I'm gonna sip on this drink, when I'm fucked up" },
  { time: 32, text: "I should know how to pick up" },
  { time: 35, text: "I'm gonna catch the rhythm" },
  { time: 37, text: "While she push up against me, ooh, and she tipsy" },

  { time: 41, text: "I had enough convo for 24" },
  { time: 45, text: "I peep'd you from across the room" },
  { time: 46, text: "Pretty little body dancin' like GoGo, hey" },
  { time: 50, text: "And you are unforgettable" },
  { time: 53, text: "I need to get you alone (ooh)" },
  { time: 58, text: "Why not? A fuckin' good time never hurt nobody" },

  { time: 102, text: "Feelin' like I'm fresh out, Boosie (Boosie)" },
  { time: 104, text: "If they want the drama, got the Uzi (Uzi)" },
  { time: 107, text: "Ship the whole crew to the cruise ship (cruise)" },
  { time: 110, text: "Doin' shit you don't even see in movies (movies)" },
  { time: 112, text: "Ride with me, ride with me, boss (boss)" },
  { time: 114, text: "I got a hard head, but her ass soft (soft)" },
  { time: 117, text: "She want the last name with the ring on it" },
  { time: 121, text: "'Cause I pulled out a million cash, told her plank on it" },

  { time: 126, text: "And you are unforgettable" },
  { time: 130, text: "I need to get you alone" },
  { time: 134, text: "Now you wanna choose" },
  { time: 138, text: "Just pop the bubbly in the 'cuzi" },

  { time: 142, text: "It's not good enough for me" },
  { time: 146, text: "Since I've been with you, ooh" },
  { time: 150, text: "I'm gonna sip on this drink, when I'm fucked up" },
  { time: 154, text: "I should know how to pick up" },
  { time: 158, text: "I'm gonna catch the rhythm" },
  { time: 161, text: "While she push up against me, ooh, and she tipsy" },
  { time: 167, text: "I had enough convo for 24" },
  { time: 171, text: "I peep'd you from across the room" },
  { time: 175, text: "Pretty little body dancin' like GoGo, hey" },
  { time: 180, text: "And you are unforgettable" },
  { time: 184, text: "I need to get you alone, ooh" },
  { time: 189, text: "Why not? A fuckin' good time never hurt nobody" },
  { time: 194, text: "I got a little drink, but it's not Bacardi" },
  { time: 199, text: "If you loved the girl, then I'm so, so sorry" },
  { time: 204, text: "I gotta give it to her like we in a marriage" },
  { time: 209, text: "Oh, like we in a hurry" },
  { time: 213, text: "No, no, I won't tell nobody" },
  { time: 217, text: "You're on your level too" },
  { time: 221, text: "Tryna do what lovers do" },

  { time: 226, text: "You ain't enough for me" },
  { time: 230, text: "Too much for you alone" },
  { time: 234, text: "Baby, go and grab some bad bitches, bring 'em home" },
  { time: 239, text: "Know the jet's on me" },
  { time: 243, text: "I'ma curve my best for you, you know" },
  { time: 247, text: "So pick up that dress for me" },
  { time: 250, text: "Leave the rest on" },
  { time: 254, text: "Too much convo for 24 hours" },
  { time: 258, text: "When you stand next to 24 karats" },
  { time: 262, text: "She left her man at home" },
  { time: 266, text: "She don't love him no more" },
  { time: 270, text: "I want your mind and your body" },
  { time: 274, text: "Don't mind nobody" },
  { time: 278, text: "So, you don't ever hurt nobody" },
  { time: 282, text: "Baby girl, work your body, work your body" },
  { time: 287, text: "And you are unforgettable" },
  { time: 291, text: "I need to get you alone" },
  { time: 295, text: "Now you wanna choose" },
  { time: 299, text: "Just pop the bubbly in the 'cuzi" },
  { time: 303, text: "Why not?" },
  { time: 307, text: "Oh, like we in a hurry" },
  { time: 311, text: "No, no, I won't tell nobody" },
  { time: 315, text: "You're on your level too" },
  { time: 319, text: "Tryna do what lovers do" }
]
},
    ];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });
        
        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}
function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});
playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
