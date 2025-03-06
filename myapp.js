// myapp.js

let player = new hisplayer.HisPlayer();

function initApp() {
    // player = new hisplayer.HisPlayer();
    const config = {
      licenseKey: "nedajpjluy7f",
      div: document.getElementById('player'),
      // src: 'https://s3.us-west-2.amazonaws.com/groundbucket.com/VideoTest/HLS/Gravity+JDARCY_RECORE_W_DIALOG+1_6CHANNEL+PREVIEW/Gravity+JDARCY_RECORE_W_DIALOG+1_6CHANNEL+PREVIEWHLS.m3u8',
      src: 'https://ott.dolby.com/browser_test_kit/clear/p81/24/master.m3u8',
      preferredAudioChannelLayout: 'surround',
      ui: {
        enabled: true,
      },
    };
    player.init(config);
  }

  function logChannelCount() {
    console.log("Current audio channels: " + player.getAudios().channelsCount);
  }

  document.addEventListener('DOMContentLoaded', initApp);