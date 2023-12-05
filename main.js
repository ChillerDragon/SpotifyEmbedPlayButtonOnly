window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
      uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
  };
  const callback = (EmbedController) => {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      iframe.style.opacity = 0;
      iframe.style.display = "none";
      iframe.width = 1;
      iframe.height = 1;
    })
    const playBtn = document.querySelector('.play-btn');
    playBtn.addEventListener('click', (e) => {
      EmbedController.play();
    })
  };
  IFrameAPI.createController(element, options, callback);
};
