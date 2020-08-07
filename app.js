const tooltip = document.getElementById('talkbubble');
const shareBtn = document.querySelector('.card__share-button');

let toggleTooltip = e => {
  if (tooltip.classList.contains('hideShare')) {
    tooltip.classList.remove('hideShare');
    tooltip.classList.add('showShare');
  } else {
    tooltip.classList.remove('showShare');
    tooltip.classList.add('hideShare');
  }
};

shareBtn.addEventListener('mouseenter', toggleTooltip);
tooltip.addEventListener('mouseleave', toggleTooltip);
