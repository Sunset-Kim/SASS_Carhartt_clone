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

  // side bar 작동시키기
  const sidebar = document.querySelector('.lnb');
  const sidebarPC = document.querySelector('.lnb.pc');
  const overlay = document.querySelector('.overlay');
  const btnSidebar = document.querySelectorAll('.btn-trigger');

  const btnSidebarMobile = document.querySelector('.btn-trigger.mobile');
  const btnSidebarPC = document.querySelector('.btn-trigger.pc');

  // pc
  btnSidebarPC.addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
      sidebarPC.classList.remove('is-shown');
      document.body.style.overflow = 'auto';
    } else {
      this.classList.add('is-active');
      sidebarPC.classList.add('is-shown');
      document.body.style.overflow = 'hidden';
    }
  });
  

  btnSidebarMobile.addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
      overlay.classList.remove('is-shown');
      sidebar.classList.remove('is-shown');
      document.body.style.overflow = 'auto';
    } else {
      this.classList.add('is-active');
      overlay.classList.add('is-shown');
      sidebar.classList.add('is-shown');
      document.body.style.overflow = 'hidden';
    }
  });

  overlay.addEventListener('click', function () {
    btnSidebarMobile.classList.remove('is-active');
    overlay.classList.remove('is-shown');
    sidebar.classList.remove('is-shown');
    document.body.style.overflow = 'auto';
  });
})();
