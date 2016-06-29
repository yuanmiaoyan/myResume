FastClick.attach(document.body);
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 750 * 100 + "px";
}();
new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
})
function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    [].forEach.call(slideAry, function (slide,index) {
        if (n == index) {
            if (n == 6) {
                slide.id = "page1"
            } else if (n == 0) {
                slide.id = "page5"
            } else {
                slide.id = "page" + n;
            }
            return;
        }
        slide.id = null;
        var con = document.getElementById("content").innerText;
        var oCount = document.getElementById("count").innerHTML;
        var index = 0;

        function type() {
            var len = oCount.length;
            /*if (index > len) {
                return;
            }*/
            document.getElementById("content").innerHTML = oCount.substring(0, index++);
        }
        clearInterval(timer)
        var timer = setInterval(type, 100);

    /*var timer = null;
        if (slide.id == "page4") {
            con = "";
            timer = setInterval(type, 100);
        } else {
            clearInterval(timer)
        }*/

    });
}
var music = document.getElementById("music"),
    audioMusic = document.getElementById("audioMusic");
window.setTimeout(function () {
    audioMusic.play();
    audioMusic.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false)
}, 1000)
music.addEventListener("click", function () {
    if (audioMusic.paused) {
        audioMusic.play();
        music.className = "music move"
    }
    audioMusic.pause();
    music.className = "music"
}, false);
