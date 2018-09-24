var showImg = function(Image) {
    // var obj = document.getElementById(idName);
    // obj.src = "/home/yuri/Dropbox/ファイル リクエスト/test/" + img;
    document.write('<div><img src ="' + Image + '"></div>');

};


function getArrayDiff(arr1, arr2) {
    let arr = [];
    for(k=0;k<arr1.length;k++){
        for(l=0;l<arr2.length;l++){
            if(arr1[k].src == arr2[l].src){
                break;
            }
        }
        // arr1にarr2の要素がなかったらarrに加える
        if(l == arr2.length){
            arr.push(arr1[k]);
        }
    }
    return arr;
}



$(function() {
    var $slider1 = $('.sliderLeftAbove');

    // スライダーが開始(初期化)したとき
    $slider1.on('init', function(slick){
        console.log('スライダーが初期化された時のイベント1');
    });

    // 新しいスライドを読み込む前
    var imgList1 = [];
    $slider1.on('afterChange',function(event, slick, currentSlide, nextSlide){
        //  console.log('スライダーを読み込む');
        $.getJSON('imgList1.json', function(imgListJSON) {
            let imgListAdd = getArrayDiff(imgListJSON, imgList1);
            let imgListRemove = getArrayDiff(imgList1, imgListJSON);
            let pathToImg = '/home/yuri/Dropbox/ファイル リクエスト/結婚式1/';
            let k = 1;
            for (let i=0; i<imgListAdd.length; i++) {
                $slider1.slick("slickAdd", '<div><img data-lazy = "' + pathToImg + imgListAdd[i].src + '"></div>', currentSlide+k);
                k++;
            };
            var slick_obj = $slider1.slick('getSlick');
            console.log(slick_obj);
            // for (let i=0; i<imgListRemove.length; i++) {
            //     $slider1.slick("slickRemove", );
            // };
            imgList1 = imgListJSON;
        });
    });

    // スライダーの設定
    $slider1.slick({
        lazyLoad: 'ondemand',
  	    pauseOnHover: false,
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 1000,
        accessibility: true, // 高さを合わせる
        useTransform: true, 
	    //easing: 'linear',
	    //// dots: true,
	    fade: true,
	    //slidesToShow: 1,
	    //slidesToScroll: 3,
	    //variableWidth: true, // 要素の大きさを揃える？
	    centerMode: true, // 中央揃え
	    speed:3000,
	    rows:1
    });

    var $slider2 = $('.sliderRightAbove');

    // スライダーが開始(初期化)したとき
    $slider2.on('init', function(slick){
        console.log('スライダーが初期化された時のイベント2');
    });

    // 新しいスライドを読み込む前
    var imgList2 = [];
    $slider2.on('afterChange',function(event, slick, currentSlide, nextSlide){
        //  console.log('スライダーを読み込む');
        $.getJSON('imgList2.json', function(imgListJSON) {
            let imgListAdd = getArrayDiff(imgListJSON, imgList2);
            let pathToImg = '/home/yuri/Dropbox/ファイル リクエスト/結婚式2/';
            let k = 1;
            for (let i=0; i<imgListAdd.length; i++) {
                $slider2.slick("slickAdd", '<div><img data-lazy = "' + pathToImg + imgListAdd[i].src + '"></div>', currentSlide+k);
            };
            imgList2 = imgListJSON;
        });
    });

    // スライダーの設定
    $slider2.slick({
        lazyLoad: 'ondemand',
  	    pauseOnHover: false,
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 1000,
        accessibility: true, // 高さを合わせる
        useTransform: true, 
	    //easing: 'linear',
	    //// dots: true,
	    fade: true,
	    //slidesToShow: 1,
	    //slidesToScroll: 3,
	    //variableWidth: true, // 要素の大きさを揃える？
	    centerMode: true, // 中央揃え
	    speed:3000,
	    rows:1
    });

    var $slider3 = $('.sliderLeftBottom');

    // スライダーが開始(初期化)したとき
    $slider3.on('init', function(slick){
        console.log('スライダーが初期化された時のイベント3');
    });

    // 新しいスライドを読み込む前
    var imgList3 = [];
    $slider3.on('afterChange',function(event, slick, currentSlide, nextSlide){
        //  console.log('スライダーを読み込む');
        $.getJSON('imgList3.json', function(imgListJSON) {
            let imgListAdd = getArrayDiff(imgListJSON, imgList3);
            let pathToImg = '/home/yuri/Dropbox/ファイル リクエスト/結婚式3/';
            let k = 1;
            for (let i=0; i<imgListAdd.length; i++) {
                $slider3.slick("slickAdd", '<div><img data-lazy = "' + pathToImg + imgListAdd[i].src + '"></div>', currentSlide+k);
            };
            imgList3 = imgListJSON;
        });
    });

    // スライダーの設定
    $slider3.slick({
        lazyLoad: 'ondemand',
  	    pauseOnHover: false,
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 1000,
        accessibility: true, // 高さを合わせる
        useTransform: true, 
	    //easing: 'linear',
	    //// dots: true,
	    fade: true,
	    //slidesToShow: 1,
	    //slidesToScroll: 3,
	    //variableWidth: true, // 要素の大きさを揃える？
	    centerMode: true, // 中央揃え
	    speed:3000,
	    rows:1
    });

    var $slider4 = $('.sliderRightBottom');

    // スライダーが開始(初期化)したとき
    $slider4.on('init', function(slick){
        console.log('スライダーが初期化された時のイベント4');
    });

    // 新しいスライドを読み込む前
    var imgList4 = [];
    $slider4.on('afterChange',function(event, slick, currentSlide, nextSlide){
        //  console.log('スライダーを読み込む');
        $.getJSON('imgList4.json', function(imgListJSON) {
            let imgListAdd = getArrayDiff(imgListJSON, imgList4);
            let pathToImg = '/home/yuri/Dropbox/ファイル リクエスト/結婚式4/';
            let k = 1;
            for (let i=0; i<imgListAdd.length; i++) {
                $slider4.slick("slickAdd", '<div><img data-lazy = "' + pathToImg + imgListAdd[i].src + '"></div>', currentSlide+k);
            };
            imgList4 = imgListJSON;
        });
    });

    // スライダーの設定
    $slider4.slick({
        lazyLoad: 'ondemand',
  	    pauseOnHover: false,
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 1000,
        accessibility: true, // 高さを合わせる
        useTransform: true, 
	    //easing: 'linear',
	    //// dots: true,
	    fade: true,
	    //slidesToShow: 1,
	    //slidesToScroll: 3,
	    //variableWidth: true, // 要素の大きさを揃える？
	    centerMode: true, // 中央揃え
	    speed:3000,
	    rows:1
    });
});
