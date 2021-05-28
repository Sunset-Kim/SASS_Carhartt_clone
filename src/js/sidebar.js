(function () {
  // utilmenu 설정하기
  const utilMenu = document.querySelectorAll('.util-menu');
  utilMenu.forEach(menu => {
    menu.addEventListener('click', activeUtilMenu);
  });
  function activeUtilMenu(e) {
    if (e.target.nodeName === 'SPAN') {
      //초기화

      //
      const span = e.target;
      const sub = span.nextElementSibling;

      if (sub.classList.contains('active')) {
        sub.classList.remove('active');
        this.classList.remove('active');
      } else {
        // 초기화
        const li = [].slice.call(this.children[0].children);
        li.forEach(li => li.children[1].classList.remove('active'));

        // 선택한 섹션 열어줌
        this.classList.add('active');
        sub.classList.add('active');
      }
    }
  }

  console.log(utilMenu);
})();
