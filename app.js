const tooltip = document.getElementById('talkbubble');
const shareBtn = document.querySelector('.card__share-button');
const tooltipMobile = document.getElementById('mobileShare');

const toggleTooltip = e => {
  if (screen.width >= 680) {
    if (tooltip.classList.contains('hideShare')) {
      tooltip.classList.remove('hideShare');
      tooltip.classList.add('showShare');
    } else {
      tooltip.classList.remove('showShare');
      tooltip.classList.add('hideShare');
    }
  }
};

const toggleTooltipMobile = e => {
  if (screen.width < 680) {
    if (tooltipMobile.classList.contains('hideShare')) {
      tooltipMobile.classList.remove('hideShare');
      tooltipMobile.classList.add('showShare');
    } else {
      tooltipMobile.classList.remove('showShare');
      tooltipMobile.classList.add('hideShare');
    }
  }
};

shareBtn.addEventListener('mouseenter', toggleTooltip);
shareBtn.addEventListener('click', toggleTooltipMobile);
tooltip.addEventListener('mouseleave', toggleTooltip);
