/**
 * Created by Puyush Goel on 10/28/2016.
 */
if(!Detector.webgl){
    Detector.addGetWebGLMessage();
} else {
    var years = ['2016', '2015'];
    var container = document.getElementById('container');
    var globe = new DAT.Globe(container);
    console.log(globe);
    var i, tweens = [];
    var settime = function (globe, t) {
        return function () {
            new TWEEN.Tween(globe).to({time: t / years.length}, 500).easing(TWEEN.Easing.Cubic.EaseOut).start();
            var y = document.getElementById('year' + years[t]);
            if (y.getAttribute('class') === 'year active') {
                return;
            }
            var yy = document.getElementsByClassName('year');
            for (i = 0; i < yy.length; i++) {
                yy[i].setAttribute('class', 'year');
            }
            y.setAttribute('class', 'year active');
        };
    };
    for (var i = 0; i < years.length; i++) {
        var y = document.getElementById('year' + years[i]);
        y.addEventListener('mouseover', settime(globe, i), false);
    }
    var xhr;
    TWEEN.start();
    globe.modelLoader();
}