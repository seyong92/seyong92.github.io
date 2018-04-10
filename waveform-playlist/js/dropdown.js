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
          "src": "media/ICASSP_Audio/l-joo.wav",
          "name": "source",
          "muted": false,
          "soloed": true
        },
        {
          "src": "media/ICASSP_Audio/l-byul.wav",
          "name": "target"
        },
        {
          "src": "media/ICASSP_Audio/l-joo-after-constqmax.wav",
          "name": "Const-Q Max"
        },
        /*{
          "src": "media/ICASSP_Audio/l-joo-after-phone.wav",
          "name": "Phoneme Classifier"
        },
        {
          "src": "media/ICASSP_Audio/l-joo-after-constqmaxphonemax.wav",
          "name": "Const-Q Max + Phoneme Classifier"
        }*/
      ]).then(function() {
        //can do stuff with the playlist.
      });
      break;
    case 2: // love yourself
      playlist.clear();
      playlist.load([
        {
          "src": "media/audio/PianoSynth30.mp3",
          "name": "Pianos & Synth",
          "gain": 1
        },
        {
          "src": "media/audio/BassDrums30.mp3",
          "name": "Drums"
        }
      ]).then(function() {
        //can do stuff with the playlist.
      });
      break;
    case 3: // drunken truth
      playlist.clear();
      break;
    case 4: // cherry blossom ending
      playlist.clear();
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