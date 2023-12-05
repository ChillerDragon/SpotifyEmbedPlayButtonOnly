window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
      uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
  };
  let callback = (EmbedController) => {
    const iframes = document.querySelectorAll("iframe")
    iframes.forEach((iframe) => {
      iframe.width = 1;
      iframe.height = 1;
    })
    const playBtn = document.querySelector('.play-btn');
    console.log(playBtn);
    playBtn.addEventListener('click', (e) => {
      EmbedController.play();
    })
  };
  IFrameAPI.createController(element, options, callback);
};
