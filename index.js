$(document).ready(function(){
    $('.title_1').on('click',function(){
        // アコーディオンメニューの開閉
        $('.ans_1').slideToggle();
        // プラスマークの表示・非表示
        $('.title_1 .fa-plus').toggle();
        // マイナスマークの表示・非表示
        $('.title_1 .fa-minus').toggle();
        // 開閉時のマーク回転用css付けはずし
        $('.title_1 .open_box').toggleClass('rotate');
        // マークの角度→index.cssに追加すると、画面ロード後に回転するのでこちらで追加
        $('.title_1 .open_box').css('transition','0.2s');
    });
    $('.title_2').on('click',function(){
        // アコーディオンメニューの開閉
        $('.ans_2').slideToggle();
        // プラスマークの表示・非表示
        $('.title_2 .fa-plus').toggle();
        // マイナスマークの表示・非表示
        $('.title_2 .fa-minus').toggle();
        // 開閉時のマーク回転用css付けはずし
        $('.title_2 .open_box').toggleClass('rotate');
        // マークの角度→index.cssに追加すると、画面ロード後に回転するのでこちらで追加
        $('.title_2 .open_box').css('transition','0.2s');
    });
    $('.title_3').on('click',function(){
        // アコーディオンメニューの開閉
        $('.ans_3').slideToggle();
        // プラスマークの表示・非表示
        $('.title_3 .fa-plus').toggle();
        // マイナスマークの表示・非表示
        $('.title_3 .fa-minus').toggle();
        // 開閉時のマーク回転用css付けはずし
        $('.title_3 .open_box').toggleClass('rotate');
        // マークの角度→index.cssに追加すると、画面ロード後に回転するのでこちらで追加
        $('.title_3 .open_box').css('transition','0.2s');
    })

})