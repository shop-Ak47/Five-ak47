function startMusicOnFirstInteraction() {
  if (!isPlaying) toggleMusic();
  document.removeEventListener('click', startMusicOnFirstInteraction);
  document.removeEventListener('keydown', startMusicOnFirstInteraction);
  document.removeEventListener('touchstart', startMusicOnFirstInteraction);
}
document.addEventListener('click', startMusicOnFirstInteraction);
document.addEventListener('keydown', startMusicOnFirstInteraction);
document.addEventListener('touchstart', startMusicOnFirstInteraction);
