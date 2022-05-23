$(function () {
    //footerのTOPに戻るボタン
    $('button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');

    })

    //load画面の表示
    $(window).on('load', function () {
        $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
        $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
    });

    //メニュー
    $(".openbtn1").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
        $("#header,#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
    });

    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
        $("#header,#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
    });
})