/* getting keydown event and sound */
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.play();
});
window.addEventListener('click', function(e) {
  /* const drumKit = document.querySelector('.drum-kit');
  const drumKitParts = drumKit.getElementsByTagName('div'); */
  const drumPart= e.srcElement.className;
  const drumPartInstrument = document.querySelector(`.${drumPart}`);
  const dataKey = drumPartInstrument.dataset.key;
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  if(!audio) return;
  audio.play();
});