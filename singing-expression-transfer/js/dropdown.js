/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownMenu() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-contentlist");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function loadSong(songName) {
  switch (songName) {
    case 1: // let it go
      playlist.clear();
      playlist.load([
        {
          "src": "media/audio/WORLD/mp3/lj.mp3",
          "name": "Source",
          "muted": false,
          "soloed": true
        },
        {
          "src": "media/audio/WORLD/mp3/lb.mp3",
          "name": "Target"
        },
        {
          "src": "media/audio/WORLD/mp3/ljq.mp3",
          "name": "Const-Q Trans"
        },
        {
          "src": "media/audio/WORLD/mp3/ljp.mp3",
          "name": "Phoneme Classifier"
        },
        {
          "src": "media/audio/WORLD/mp3/ljqp.mp3",
          "name": "Const-Q Trans + Phoneme Classifier"
        }
      ]).then(function() {
        //can do stuff with the playlist.
      });
      break;
    case 2: // love yourself
      playlist.clear();
      playlist.load([
        {
          "src": "media/audio/WORLD/mp3/yy.mp3",
          "name": "Source",
          "muted": false,
          "soloed": true
        },
        {
          "src": "media/audio/WORLD/mp3/yt.mp3",
          "name": "Target"
        },
        {
          "src": "media/audio/WORLD/mp3/yyq.mp3",
          "name": "Const-Q Trans"
        },
        {
          "src": "media/audio/WORLD/mp3/yyp.mp3",
          "name": "Phoneme Classifier"
        },
        {
          "src": "media/audio/WORLD/mp3/yyqp.wav",
          "name": "Const-Q Trans + Phoneme Classifier"
        }
      ]).then(function() {
        //can do stuff with the playlist.
      });
      break;
    case 3: // drunken truth
      playlist.clear();
      playlist.load([
        {
          "src": "media/audio/WORLD/mp3/dy.mp3",
          "name": "Source",
          "muted": false,
          "soloed": true
        },
        {
          "src": "media/audio/WORLD/mp3/dj.mp3",
          "name": "Target"
        },
        {
          "src": "media/audio/WORLD/mp3/dyq.mp3",
          "name": "Const-Q Trans"
        },
        {
          "src": "media/audio/WORLD/mp3/dyp.mp3",
          "name": "Phoneme Classifier"
        },
        {
          "src": "media/audio/WORLD/mp3/dyqp.wav",
          "name": "Const-Q Trans + Phoneme Classifier"
        }
      ]).then(function() {
        //can do stuff with the playlist.
      });
      break;
    case 4: // cherry blossom ending
      playlist.clear();
      playlist.load([
        {
          "src": "media/audio/WORLD/mp3/ch.mp3",
          "name": "Source",
          "muted": false,
          "soloed": true
        },
        {
          "src": "media/audio/WORLD/mp3/ct.mp3",
          "name": "Target"
        },
        {
          "src": "media/audio/WORLD/mp3/chq.mp3",
          "name": "Const-Q Trans"
        },
        {
          "src": "media/audio/WORLD/mp3/chp.mp3",
          "name": "Phoneme Classifier"
        },
        {
          "src": "media/audio/WORLD/mp3/chqp.wav",
          "name": "Const-Q Trans + Phoneme Classifier"
        }
      ]).then(function() {
        //can do stuff with the playlist.
      });
  }
}

/*function initPlaylist() {
  playlist.init({
    samplesPerPixel: 1000,
    waveHeight: 100,
    container: document.getElementById("playlist"),
    timescale: true,
    state: 'cursor',
    colors: {
      waveOutlineColor: '#E0EFF1'
    },
    controls: {
      show: true, //whether or not to include the track controls
      width: 200 //width of controls in pixels
    },
    zoomLevels: [500, 1000, 3000, 5000]
  });
}*/