(function () {
  // scroll variable
  let isScroll = false;

  // dom selector
  const header = document.body.querySelector('.header');
  const mainLnb = document.body.querySelector('.main-lnb');

  window.addEventListener('scroll', () => {
    scrollHeader();
    fixMainLnb();
    isScroll = true;
  });

  let loop = setInterval(() => {
    if (isScroll) {
      isScroll = false;
    }
    scrollHeader();
  }, 250);

  function scrollHeader() {
    if (isScroll) {
      header.classList.add('is-scroll');
    } else {
      header.classList.remove('is-scroll');
    }
  }

  function fixMainLnb() {
    mainLnb.classList.add('is-scroll');
  }
})();
