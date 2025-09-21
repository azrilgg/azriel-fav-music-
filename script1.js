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
{
"time": 1.79,
"text": "You know I want you"
},
{
"time": 5.81,
"text": "It's not a secret I try to hide"
},
{
"time": 9.51,
"text": "You know you want me"
},
{
"time": 13.12,
"text": "So don't keep sayin' our hands are tied"
},
{
"time": 16.89,
"text": "You claim it's not in the cards"
},
{
"time": 19.14,
"text": "And fate is pullin' you miles away and out of a reach from me"
},
{
"time": 24.59,
"text": "But you're hearin' my heart"
},
{
"time": 26.59,
"text": "So who can stop me if I decide that you're my destiny?"
},
{
"time": 34.72,
"text": "What if we rewrite the stars?"
},
{
"time": 38.47,
"text": "Say you were made to be mine"
},
{
"time": 42.28,
"text": "Nothin' could keep us apart"
},
{
"time": 46.1,
"text": "You'll be the one I was meant to find"
},
{
"time": 49.97,
"text": "It's up to you, and it's up to me"
},
{
"time": 53.64,
"text": "No one could say what we get to be"
},
{
"time": 57.38,
"text": "So why don't we rewrite the stars?"
},
{
"time": 61.51,
"text": "And maybe the world could be ours, tonight"
},
{
"time": 66.84,
"text": "Ah-oh (no, no, no, no)"
},
{
"time": 70.73,
"text": "Ah-oh (mm)"
},
{
"time": 74.18,
"text": "You think it's easy"
},
{
"time": 77.93,
"text": "You think I don't wanna run to you, yeah"
},
{
"time": 81.72,
"text": "But there are mountains (but there are mountains)"
},
{
"time": 85.56,
"text": "And there are doors that we can't walk through"
},
{
"time": 89.18,
"text": "I know you're wondering why"
},
{
"time": 91.3,
"text": "Because we're able to be just you and me within these walls"
},
{
"time": 97.05,
"text": "But when we go outside"
},
{
"time": 99.08,
"text": "You're gonna wake up and see that it was hopeless after all"
},
{
"time": 106.85,
"text": "No one can rewrite the stars"
},
{
"time": 110.9,
"text": "How can you say you'll be mine?"
},
{
"time": 114.8,
"text": "Everythin' keeps us apart"
},
{
"time": 118.52,
"text": "And I'm not the one you were meant to find (the one you were meant to find)"
},
{
"time": 122.45,
"text": "It's not up to you, it's not up to me (yeah)"
},
{
"time": 126.2,
"text": "When everyone tells us what we can be"
},
{
"time": 129.95,
"text": "And how can we rewrite the stars?"
},
{
"time": 133.82,
"text": "Say that the world can be ours, tonight"
},
{
"time": 139.11,
"text": "All I want is to fly with you"
},
{
"time": 143.04,
"text": "All I want is to fall with you"
},
{
"time": 146.72,
"text": "So just give me all of you"
},
{
"time": 151.17,
"text": "It feels impossible (it's not impossible)"
},
{
"time": 153.38,
"text": "Is it impossible?"
},
{
"time": 155.03,
"text": "Say that it's possible"
},
{
"time": 158.89,
"text": "And how do we rewrite the stars?"
},
{
"time": 162.27,
"text": "Say you were made to be mine"
},
{
"time": 166.08,
"text": "And nothin' could keep us apart"
},
{
"time": 169.96,
"text": "'Cause you are the one I was meant to find"
},
{
"time": 173.75,
"text": "It's up to you, and it's up to me"
},
{
"time": 177.51,
"text": "No one could say what we get to be"
},
{
"time": 181.34,
"text": "And why don't we rewrite the stars?"
},
{
"time": 185.18,
"text": "Changin' the world to be ours"
},
{
"time": 190.5,
"text": "Ay, ah-oh (no, no, no, no)"
},
{
"time": 194.14,
"text": "Ah-oh (mm)"
},
{
"time": 198.0,
"text": "You know I want you"
},
{
"time": 202.09,
"text": "It's not a secret I try to hide"
},
{
"time": 205.8,
"text": "But I can't have you"
},
{"time": 209.31,"text": "We're bound to break and my hands are tied"}
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
  {
    "time": 18.361,
    "text": "I wanna be your vacuum cleaner"
  },
  {
    "time": 21.961,
    "text": "Breathing in your dust"
  },
  {
    "time": 25.286,
    "text": "I wanna be your Ford Cortina"
  },
  {
    "time": 29.109,
    "text": "I will never rust"
  },
  {
    "time": 32.477,
    "text": "If you like your coffee hot"
  },
  {
    "time": 36.21,
    "text": "Let me be your coffee pot"
  },
  {
    "time": 39.505,
    "text": "You call the shots, babe"
  },
  {
    "time": 42.274,
    "text": "I just wanna be yours"
  },
  {
    "time": 46.47,
    "text": "Secrets I have held in my heart"
  },
  {
    "time": 50.022,
    "text": "Are harder to hide than I thought"
  },
  {
    "time": 53.592,
    "text": "Maybe I just wanna be yours"
  },
  {
    "time": 57.282,
    "text": "I wanna be yours, I wanna be yours"
  },
  {
    "time": 62.427,
    "text": "Wanna be yours"
  },
  {
    "time": 66.035,
    "text": "Wanna be yours"
  },
  {
    "time": 69.469,
    "text": "Wanna be yours"
  },
  {
    "time": 75.427,
    "text": "Let me be your leccy meter"
  },
  {
    "time": 78.528,
    "text": "And I'll never run out"
  },
  {
    "time": 81.996,
    "text": "Let me be the portable heater"
  },
  {
    "time": 85.903,
    "text": "That you'll get cold without"
  },
  {
    "time": 89.529,
    "text": "I wanna be your setting lotion (wanna be)"
  },
  {
    "time": 92.961,
    "text": "Hold your hair in deep devotion (How deep?)"
  },
  {
    "time": 96.263,
    "text": "At least as deep as the Pacific Ocean"
  },
  {
    "time": 99.915,
    "text": "Now I wanna be yours"
  },
  {
    "time": 103.334,
    "text": "Secrets I have held in my heart"
  },
  {
    "time": 107.002,
    "text": "Are harder to hide than I thought"
  },
  {
    "time": 110.414,
    "text": "Maybe I just wanna be yours"
  },
  {
    "time": 114.294,
    "text": "I wanna be yours, I wanna be yours"
  },
  {
    "time": 119.541,
    "text": "Wanna be yours"
  },
  {
    "time": 123.112,
    "text": "Wanna be yours"
  },
  {
    "time": 126.581,
    "text": "Wanna be yours"
  },
  {
    "time": 130.098,
    "text": "Wanna be yours"
  },
  {
    "time": 133.698,
    "text": "Wanna be yours"
  },
  {
    "time": 137.175,
    "text": "Wanna be yours"
  },
  {
    "time": 140.708,
    "text": "Wanna be yours"
  },
  {
    "time": 144.266,
    "text": "(Wanna be yours)"
  },
  {
    "time": 146.62,
    "text": "I wanna be your vacuum cleaner (wanna be yours)"
  },
  {
    "time": 149.783,
    "text": "Breathing in your dust (wanna be yours)"
  },
  {
    "time": 153.266,
    "text": "I wanna be your Ford Cortina (wanna be yours)"
  },
  {
    "time": 156.828,
    "text": "I will never rust (wanna be yours)"
  },
  {
    "time": 160.075,
    "text": "I just wanna be yours (wanna be yours)"
  },
  {
    "time": 163.479,
    "text": "I just wanna be yours (wanna be yours)"
  },
  {
    "time": 167.266,
    "text": "I just wanna be yours (wanna be yours)"
  }
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
  { "time": 10.28, "text": "Hey, I was doing just fine before I met you" },
  { "time": 14.6, "text": "I drink too much" },
  { "time": 15.51, "text": "And that's an issue, but I'm okay" },
  { "time": 20.4, "text": "Hey, you tell your friends" },
  { "time": 23.58, "text": "It was nice to meet them" },
  { "time": 25.03, "text": "But I hope I never see them again" },
  { "time": 31.46, "text": "I know it breaks your heart" },
  { "time": 32.92, "text": "Moved to the city in a broke-down car" },
  { "time": 36.55, "text": "And four years, no calls" },
  { "time": 38.04, "text": "Now you're lookin' pretty in a hotel bar" },
  { "time": 40.46, "text": "And I-I-I can't stop" },
  { "time": 45.21, "text": "No, I-I-I can't stop" },
  { "time": 50.58, "text": "So, baby, pull me closer" },
  { "time": 52.33, "text": "In the backseat of your Rover" },
  { "time": 55.05, "text": "That I know you can't afford" },
  { "time": 57.58, "text": "Bite that tattoo on your shoulder" },
  { "time": 60.36, "text": "Pull the sheets right off the corner" },
  { "time": 62.88, "text": "Of the mattress that you stole" },
  { "time": 65.15, "text": "From your roommate back in Boulder" },
  { "time": 67.63, "text": "We ain't ever getting older" },
  { "time": 77.72, "text": "We ain't ever getting older" },
  { "time": 87.81, "text": "We ain't ever getting older" },
  { "time": 91.16, "text": "You look as good as the day I met you" },
  { "time": 95.48, "text": "I forget just why I left you, I was insane" },
  { "time": 101.16, "text": "Stay and play that Blink-182 song" },
  { "time": 105.72, "text": "That we beat to death in Tucson, okay" },
  { "time": 112.28, "text": "I know it breaks your heart" },
  { "time": 113.8, "text": "Moved to the city in a broke-down car" },
  { "time": 117.36, "text": "And four years, no call" },
  { "time": 119.0, "text": "Now I'm lookin' pretty in a hotel bar" },
  { "time": 121.73, "text": "And I-I-I can't stop" },
  { "time": 126.46, "text": "No, I-I-I can't stop" },
  { "time": 131.51, "text": "So, baby, pull me closer" },
  { "time": 133.47, "text": "In the backseat of your Rover" },
  { "time": 136.27, "text": "That I know you can't afford" },
  { "time": 138.67, "text": "Bite that tattoo on your shoulder" },
  { "time": 141.25, "text": "Pull the sheets right off the corner" },
  { "time": 143.73, "text": "Of the mattress that you stole" },
  { "time": 146.22, "text": "From your roommate back in Boulder" },
  { "time": 148.63, "text": "We ain't ever getting older" },
  { "time": 158.69, "text": "We ain't ever getting older" },
  { "time": 168.92, "text": "We ain't ever getting older" },
  { "time": 171.75, "text": "So, baby, pull me closer" },
  { "time": 173.75, "text": "In the backseat of your Rover" },
  { "time": 176.47, "text": "That I know you can't afford" },
  { "time": 178.93, "text": "Bite that tattoo on your shoulder" },
  { "time": 181.66, "text": "Pull the sheets right off the corner" },
  { "time": 183.96, "text": "Of the mattress that you stole" },
  { "time": 186.65, "text": "From your roommate back in Boulder" },
  { "time": 188.95, "text": "We ain't ever getting older" },
  { "time": 191.63, "text": "We ain't ever getting older" },
  { "time": 194.02, "text": "(No, we ain't ever getting older)" },
  { "time": 197.02, "text": "We ain't ever getting older" },
  { "time": 199.05, "text": "(No, we ain't ever getting older)" },
  { "time": 201.83, "text": "We ain't ever getting older" },
  { "time": 204.56, "text": "(We ain't ever getting older)" },
  { "time": 209.78, "text": "We ain't ever getting older" },
  { "time": 219.85, "text": "(No, we ain't ever getting older)" },
  { "time": 229.86, "text": "(We ain't ever getting older)" },
  { "time": 231.9, "text": "(No, we ain't ever getting older)" }
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
  {
    "time": 9.535,
    "text": "Lately, I've been, I've been thinking"
  },
  {
    "time": 12.891,
    "text": "I want you to be happier, I want you to be happier"
  },
  {
    "time": 18.411,
    "text": "When the morning comes"
  },
  {
    "time": 20.122,
    "text": "When we see what we've become"
  },
  {
    "time": 22.493,
    "text": "In the cold light of day we're a flame in the wind"
  },
  {
    "time": 24.708,
    "text": "Not the fire that we've begun"
  },
  {
    "time": 27.76,
    "text": "Every argument, every word we can't take back"
  },
  {
    "time": 32.007,
    "text": "'Cause with the all that has happened"
  },
  {
    "time": 34.223,
    "text": "I think that we both know the way that this story ends"
  },
  {
    "time": 38.373,
    "text": "Then only for a minute"
  },
  {
    "time": 41.963,
    "text": "I want to change my mind"
  },
  {
    "time": 44.141,
    "text": "'Cause this just don't feel right to me"
  },
  {
    "time": 47.904,
    "text": "I wanna raise your spirits"
  },
  {
    "time": 51.566,
    "text": "I want to see you smile but"
  },
  {
    "time": 54.147,
    "text": "Know that means I'll have to leave"
  },
  {
    "time": 63.709,
    "text": "Know that means I'll have to leave"
  },
  {
    "time": 67.26,
    "text": "Lately, I've been, I've been thinking"
  },
  {
    "time": 70.611,
    "text": "I want you to be happier, I want you to be happier"
  },
  {
    "time": 75.991,
    "text": "When the evening falls"
  },
  {
    "time": 77.766,
    "text": "And I'm left there with my thoughts"
  },
  {
    "time": 80.189,
    "text": "And the image of you being with someone else"
  },
  {
    "time": 82.308,
    "text": "Well, it's eating me up inside"
  },
  {
    "time": 85.568,
    "text": "But we ran our course, we pretended we're okay"
  },
  {
    "time": 89.633,
    "text": "Now if we jump together at least we can swim"
  },
  {
    "time": 92.173,
    "text": "Far away from the wreck we made"
  },
  {
    "time": 95.771,
    "text": "Then only for a minute"
  },
  {
    "time": 99.423,
    "text": "I want to change my mind"
  },
  {
    "time": 102.176,
    "text": "'Cause this just don't feel right to me"
  },
  {
    "time": 105.387,
    "text": "I wanna raise your spirits"
  },
  {
    "time": 109.006,
    "text": "I want to see you smile but"
  },
  {
    "time": 111.774,
    "text": "Know that means I'll have to leave"
  },
  {
    "time": 121.188,
    "text": "Know that means I'll have to leave"
  },
  {
    "time": 124.819,
    "text": "Lately, I've been, I've been thinking"
  },
  {
    "time": 128.092,
    "text": "I want you to be happier, I want you to be happier"
  },
  {
    "time": 133.504,
    "text": "So I'll go, I'll go"
  },
  {
    "time": 138.593,
    "text": "I will go, go, go"
  },
  {
    "time": 143.077,
    "text": "So I'll go, I'll go"
  },
  {
    "time": 148.27,
    "text": "I will go, go, go"
  },
  {
    "time": 153.413,
    "text": "Lately, I've been, I've been thinking"
  },
  {
    "time": 157.017,
    "text": "I want you to be happier, I want you to be happier"
  },
  {
    "time": 163.274,
    "text": "Even though I might not like this"
  },
  {
    "time": 166.543,
    "text": "I think that you'll be happier, I want you to be happier"
  },
  {
    "time": 172.609,
    "text": "Then only for a minute (only for a minute)"
  },
  {
    "time": 176.369,
    "text": "I want to change my mind"
  },
  {
    "time": 178.583,
    "text": "'Cause this just don't feel right to me"
  },
  {
    "time": 182.185,
    "text": "I wanna raise your spirits (wanna raise your spirits)"
  },
  {
    "time": 185.975,
    "text": "I want to see you smile but"
  },
  {
    "time": 188.504,
    "text": "Know that means I'll have to leave"
  },
  {
    "time": 198.138,
    "text": "Know that means I'll have to leave"
  },
  {
    "time": 201.655,
    "text": "Lately, I've been, I've been thinking"
  },
  {
    "time": 204.955,
    "text": "I want you to be happier, I want you to be happier"
  },
  {
    "time": 210.391,
    "text": "So I'll go, I'll go"
  },
  {
    "time": 215.326,
    "text": "I will go, go, go"
  }
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
  {
    "time": 11.71,
    "text": "It's not good enough for me"
  },
  {
    "time": 14.1,
    "text": "Since I've been with you, ooh"
  },
  {
    "time": 21.61,
    "text": "It's not gonna work for you"
  },
  {
    "time": 23.99,
    "text": "Nobody can equal me (I know)"
  },
  {
    "time": 30.24,
    "text": "I'm gonna sip on this drink, when I'm fucked up"
  },
  {
    "time": 33.17,
    "text": "I should know how to pick up"
  },
  {
    "time": 35.56,
    "text": "I'm gonna catch the rhythm"
  },
  {
    "time": 37.09,
    "text": "While she push up against me, ooh, and she tipsy"
  },
  {
    "time": 41.28,
    "text": "I had enough convo for 24"
  },
  {
    "time": 45.09,
    "text": "I peep'd you from across the room"
  },
  {
    "time": 46.87,
    "text": "Pretty little body dancin' like GoGo, hey"
  },
  {
    "time": 50.3,
    "text": "And you are unforgettable"
  },
  {
    "time": 53.34,
    "text": "I need to get you alone (ooh)"
  },
  {
    "time": 58.76,
    "text": "Why not? A fuckin' good time never hurt nobody"
  },
  {
    "time": 61.81,
    "text": "I got a little drink, but it's not Bacardi"
  },
  {
    "time": 64.43,
    "text": "If you loved the girl, then I'm so, so sorry"
  },
  {
    "time": 66.92,
    "text": "I gotta give it to her like we in a marriage"
  },
  {
    "time": 69.97,
    "text": "Oh, like we in a hurry"
  },
  {
    "time": 72.31,
    "text": "No, no, I won't tell nobody"
  },
  {
    "time": 74.77,
    "text": "You're on your level too"
  },
  {
    "time": 77.06,
    "text": "Tryna do what lovers do"
  },
  {
    "time": 79.28,
    "text": "Feelin' like I'm fresh out, Boosie (Boosie)"
  },
  {
    "time": 81.82,
    "text": "If they want the drama, got the Uzi (Uzi)"
  },
  {
    "time": 84.14,
    "text": "Ship the whole crew to the cruise ship (cruise)"
  },
  {
    "time": 86.59,
    "text": "Doin' shit you don't even see in movies (movies)"
  },
  {
    "time": 89.01,
    "text": "Ride with me, ride with me, boss (boss)"
  },
  {
    "time": 91.51,
    "text": "I got a hard head, but her ass soft (soft)"
  },
  {
    "time": 93.84,
    "text": "She want the last name with the ring on it"
  },
  {
    "time": 96.24,
    "text": "'Cause I pulled out a million cash, told her plank on it"
  },
  {
    "time": 99.11,
    "text": "And you are unforgettable"
  },
  {
    "time": 102.22,
    "text": "I need to get you alone"
  },
  {
    "time": 104.67,
    "text": "Now you wanna choose"
  },
  {
    "time": 105.96,
    "text": "Just pop the bubbly in the 'cuzi"
  },
  {
    "time": 109.69,
    "text": "It's not good enough for me"
  },
  {
    "time": 112.09,
    "text": "Since I've been with you, ooh"
  },
  {
    "time": 118.26,
    "text": "I'm gonna sip on this drink, when I'm fucked up"
  },
  {
    "time": 121.08,
    "text": "I should know how to pick up"
  },
  {
    "time": 123.56,
    "text": "I'm gonna catch the rhythm"
  },
  {
    "time": 125.0,
    "text": "While she push up against me, ooh, and she tipsy"
  },
  {
    "time": 129.32,
    "text": "I had enough convo for 24"
  },
  {
    "time": 132.98,
    "text": "I peep'd you from across the room"
  },
  {
    "time": 134.81,
    "text": "Pretty little body dancin' like GoGo, hey"
  },
  {
    "time": 138.23,
    "text": "And you are unforgettable"
  },
  {
    "time": 141.56,
    "text": "I need to get you alone, ooh"
  },
  {
    "time": 146.85,
    "text": "Why not? A fuckin' good time never hurt nobody"
  },
  {
    "time": 149.83,
    "text": "I got a little drink, but it's not Bacardi"
  },
  {
    "time": 152.53,
    "text": "If you loved the girl, then I'm so, so sorry"
  },
  {
    "time": 155.08,
    "text": "I gotta give it to her like we in a marriage"
  },
  {
    "time": 158.07,
    "text": "Oh, like we in a hurry"
  },
  {
    "time": 160.21,
    "text": "No, no, I won't tell nobody"
  },
  {
    "time": 162.8,
    "text": "You're on your level too"
  },
  {
    "time": 165.18,
    "text": "Tryna do what lovers do"
  },
  {
    "time": 167.96,
    "text": "You ain't enough for me"
  },
  {
    "time": 170.04,
    "text": "Too much for you alone"
  },
  {
    "time": 174.0,
    "text": "Baby, go and grab some bad bitches, bring 'em home"
  },
  {
    "time": 177.76,
    "text": "Know the jet's on me"
  },
  {
    "time": 179.7,
    "text": "I'ma curve my best for you, you know"
  },
  {
    "time": 183.2,
    "text": "So pick up that dress for me"
  },
  {
    "time": 184.74,
    "text": "Leave the rest on"
  },
  {
    "time": 186.66,
    "text": "Too much convo for 24 hours"
  },
  {
    "time": 188.71,
    "text": "When you stand next to 24 karats"
  },
  {
    "time": 191.69,
    "text": "She left her man at home"
  },
  {
    "time": 194.65,
    "text": "She don't love him no more"
  },
  {
    "time": 197.14,
    "text": "I want your mind and your body"
  },
  {
    "time": 198.86,
    "text": "Don't mind nobody"
  },
  {
    "time": 200.19,
    "text": "So, you don't ever hurt nobody"
  },
  {
    "time": 202.64,
    "text": "Baby girl, work your body, work your body"
  },
  {
    "time": 207.47,
    "text": "And you are unforgettable"
  },
  {
    "time": 210.64,
    "text": "I need to get you alone"
  },
  {
    "time": 213.04,
    "text": "Now you wanna choose"
  },
  {
    "time": 214.17,
    "text": "Just pop the bubbly in the 'cuzi"
  },
  {
    "time": 215.79,
    "text": "Why not?"
  },
  {
    "time": 217.06,
    "text": "Oh, like we in a hurry"
  },
  {
    "time": 219.57,
    "text": "No, no, I won't tell nobody"
  },
  {
    "time": 221.55,
    "text": "You're on your level too"
  },
  {
    "time": 223.94,
    "text": "Tryna do what lovers do"
  }
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

function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
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
