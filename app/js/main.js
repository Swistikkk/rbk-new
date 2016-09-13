document.addEventListener('DOMContentLoaded', function(){

  function forEach(array, func) {
    for(let i = 0; i < array.length; i++) {
      func(array[i]);
    }
  }

  window.addEventListener('scroll', function(e){
    var topMenu = document.querySelector('.main-header');

    if(window.scrollY > 120) {
      topMenu.classList.add('main-header--active');
      document.querySelector('.first-slider').style.marginTop = 80 + 'px';
    } else {
      topMenu.classList.remove('main-header--active');
      document.querySelector('.first-slider').style.marginTop = "";
    }
  });



  // Аккардионы

  var accordeonItems = document.querySelectorAll('.why-items .item');

  forEach(accordeonItems, (item) => {
    item.addEventListener('click', function(){
      forEach(accordeonItems, (item) => {
        item.classList.remove("item--active");
      });
      item.classList.toggle('item--active');
    });
  })

  var itemsAccordeon = document.querySelectorAll('.world-level-tabs .tab-item');
  itemsAccordeon.forEach(function(item){
    item.addEventListener('click', function(){
      itemsAccordeon.forEach((item) => {
        item.classList.remove('tab-item--active');
      })

      this.classList.add('tab-item--active');
    });
  });



       // Скролл в меню до блока

  var menuItems = document.querySelectorAll('.main-header-menu .item-link');

  forEach(menuItems, (link) => {
    $(link).on('click', function(e) {

      e.preventDefault();

      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  	  }).stop(true);
  });


  // Табы

  var block = document.querySelector('.composition-tabs .tabs');
  var tabs = document.querySelectorAll('.composition-tabs .tabs .tab');
  var allTabsBlock = document.querySelectorAll('.composition-tabs .tab-block');

  block.addEventListener('click', (e) => {
    switch (e.target) {
      case tabs[0]:
        allTabsBlock[0].classList.add('tab-block--active');
        allTabsBlock[1].classList.remove('tab-block--active');
        allTabsBlock[2].classList.remove('tab-block--active');
        break;
      case tabs[1]:
        allTabsBlock[1].classList.add('tab-block--active');
        allTabsBlock[2].classList.remove('tab-block--active');
        allTabsBlock[0].classList.remove('tab-block--active');
        break;
      case tabs[2]:
        allTabsBlock[2].classList.add('tab-block--active');
        allTabsBlock[1].classList.remove('tab-block--active');
        allTabsBlock[0].classList.remove('tab-block--active');
        break;
    }
  });

  forEach(tabs, (item) => {
    item.addEventListener('click', function(){
      forEach(tabs, (item) => {
        item.classList.remove('tab--active');
      })

      this.classList.add('tab--active');
    });
  });


  // other tabs

  var worldItems = document.querySelectorAll(".world-level-tabs-menu .item");
  var tabsBlock = document.querySelectorAll(".world-level-tabs .tab");
  worldItems.forEach((item) => {
    item.addEventListener("click", function(){

      worldItems.forEach((item) => {
        item.classList.remove('item--active');
        this.classList.add('item--active');
      })

      switch(item) {
        case worldItems[0]:
          tabsBlock[0].style.display = "block";
          tabsBlock[1].style.display = "none";
          tabsBlock[2].style.display = "none";
        break;
        case worldItems[1]:
          tabsBlock[0].style.display = "none";
          tabsBlock[1].style.display = "block";
          tabsBlock[2].style.display = "none";
        break;
        case worldItems[2]:
          tabsBlock[0].style.display = "none";
          tabsBlock[1].style.display = "none";
          tabsBlock[2].style.display = "block";
        break;
      }

    });
  })

  // Popups

  var popups = document.querySelectorAll('.js-button');
  var callMe = document.querySelector('.call-js');
  popups.forEach((item) => {
    item.addEventListener('click', function(){
      let popup = document.querySelector('.main-popup');
      let mainBg = document.querySelector('.main-bg');
      document.querySelector('.main-popup .title').innerHTML = "Записаться";

      mainBg.addEventListener('click', function(){
        mainBg.classList.remove('main-bg--active');
        popup.classList.remove('main-popup--active');
      });

      popup.classList.add('main-popup--active');
      mainBg.classList.add('main-bg--active');
    });
  });

  callMe.addEventListener('click', function(event){
    let popup = document.querySelector('.main-popup');
    let mainBg = document.querySelector('.main-bg');
    popup.classList.add('main-popup--active');
    mainBg.classList.add('main-bg--active');

    mainBg.addEventListener('click', function(){
      mainBg.classList.remove('main-bg--active');
      popup.classList.remove('main-popup--active');
    });

    event.preventDefault();


    document.querySelector('.main-popup .title').innerHTML = "Перезвоните мне";
  });

  // Отправка формы

  var mainForm = document.querySelector('.main-form');

    mainForm.addEventListener('submit', function(e) {

      if(this.children[0].value.length > 3 && this.children[1].value.length > 11) {
        $.ajax({
    			type: "POST",
    			url: "mail.php",
    			data: $(this).serialize()
    		}).done(function() {
    			$(this).find("input").val("");

          // закрытие попапа

          $('.main-popup').removeClass('main-popup--active');

          document.querySelector('.main-form').children[0].classList.remove('error');

          document.querySelector('.main-form').children[1].classList.remove('error');

          document.querySelector('.success').classList.add('success--active');

          setTimeout(function(){
            $('.main-bg').removeClass('main-bg--active');
            document.querySelector('.success').classList.remove('success--active');
          }, 3000);
    			//$("#form").trigger("reset");
    		});

      e.preventDefault();
      return false;
    };
  });
});
