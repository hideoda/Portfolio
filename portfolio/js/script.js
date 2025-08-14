$(function () {
  //ハンバーガーメニュー（SP）
  $btnMenu = $("#js-btn-menu");
  $gnav = $(".gnav");

  $btnMenu.on("click", function () {
    $btnMenu.toggleClass("active");
    $gnav.toggleClass("show");
    $gnav.animate({ width: "toggle" }, 200);
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest($gnav).length &&
      !$(e.target).closest($btnMenu).length
    ) {
      if ($gnav.hasClass("show")) {
        $gnav.removeClass("show");
        $btnMenu.toggleClass("active");
        $gnav.animate({ width: "toggle" }, 200);
      }
    }
  });

  //ページ内スクロール
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  // スクロールイベント
  $(".works-list").scroll(function () {
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
});