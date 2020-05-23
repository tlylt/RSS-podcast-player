Amplitude.init({
  "songs": [
    {
      "name": "Offcut #6",
      "artist": "Little People",
      "album": "We Are But Hunks of Wood Remixes",
      "url": "https://anchor.fm/s/6f88580/podcast/play/13625861/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-05-12%2Fe7104304a3dd38d3f2b01f813c7bcdc1.m4a",
      "cover_art_url": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/1069504/1069504-1577427494622-85e46d437f379.jpg"
    },
    {
      "name": "Dusk To Dawn",
      "artist": "Emancipator",
      "album": "Dusk To Dawn",
      "url": "../songs/DuskToDawn-Emancipator.mp3",
      "cover_art_url": "../album-art/from-dusk-to-dawn.jpg"
    }
  ]
});

document.getElementById('song-played-progress-1').addEventListener('click', function (e) {
  if (Amplitude.getActiveIndex() == 0) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
  }
});

document.getElementById('song-played-progress-2').addEventListener('click', function (e) {
  if (Amplitude.getActiveIndex() == 1) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
  }
});
