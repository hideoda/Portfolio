$(function () {
  //ハンバーガーメニュー（SP）
  $btnMenu = $("#js-btn-menu");
  $gnav = $(".gnav");

  $btnMenu.on("click", function() {
    $btnMenu.toggleClass("active");
    $gnav.toggleClass("show");
    $gnav.animate({ width: "toggle"}, 200);
  });

  $(document).on( "click", function (e){
    if(
      !$(e.target).closest($gnav).length &&
      !$(e.target).closest($btnMenu).length
    ){
      if ($gnav.hasClass("show")){
        $gnav.removeClass("show");
        $btnMenu.toggleClass("active");
        $gnav.animate({ width: "toggle" }, 200);
      }
    }
  });

  const swiper = new Swiper(".swiper", {

    loop: true,

    pagination: {
      el: ".swiper-pagination"
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  //ページ内スクロール
  $("#js-page-top").on("click", function () {
     $("body,html").animate({ scrollTop: 0, }, 300);
     return false;
  });

    // スクロールイベント
  $(".works-list").scroll(function(){
    // scrollLeftメソッドの結果を表示
    if ($(this).scrollLeft() > 20) {
      $(".works-list__scroll").fadeOut();
      }
  });

  //ページ上部にスクロール
  $(function () {
    $('#js-page-top').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 500); // 500はスクロール速度（ms）
      return false;
    });
  });

  $('#particles').particleground({
    dotColor: '#0525cd73',
    lineColor: '#0525cd73',
    particleRadius: 10,
    proximity: 200,
  });

});