// Click-to-play YouTube embeds. Put a YouTube video ID in data-youtube="..."
// Leave it empty and the block shows its "coming soon" poster instead.
document.querySelectorAll('.video[data-youtube]').forEach(function (box) {
  var id = (box.getAttribute('data-youtube') || '').trim();
  if (!id) return; // keep the poster
  var title = box.getAttribute('data-title') || 'Video';
  box.innerHTML = '<button type="button" aria-label="Play: ' + title + '"><span>&#9654;</span></button>';
  box.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)';
  box.style.backgroundSize = 'cover';
  box.querySelector('button').style.background = 'rgba(20,23,20,.45)';
  box.querySelector('button').addEventListener('click', function () {
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1&rel=0" title="' + title + '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  });
});
document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
