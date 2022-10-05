var btnE = document.getElementById('btnE');
var btnV = document.getElementById('btnV');
var panelLanguage = document.getElementById('form-language');
var btnDisagree = document.getElementById('btnDisagree');
var btnAgree = document.getElementById('btnAgree');
var panel_tuchoi = document.getElementById('panel__tuchoi');
var body = document.getElementById('body');
var panel_dongy = document.getElementById('panel_dongy');

btnV.onclick= function () {
    panelLanguage.classList.add('hidden_panelLanguage');
}
btnDisagree.onmouseover= function () {
    var x = 10;
    var indexMove = Math.floor(Math.random() * (400 - (-400) + 1)) + -50;

    btnDisagree.style.transform='translateX('+indexMove+'px) translateY('+indexMove+'px)';
    panel_tuchoi.style.opacity='0';
    console.log(indexMove);
}
btnDisagree.onclick= function () {
    // panel_tuchoi.style.opacity='1';
    var x = 10;
    var indexMove = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    btnDisagree.style.transform='translateX('+indexMove+'%) translateY('+indexMove+'%)';
    body.classList.add('nenden_body');
    panel_tuchoi.classList.toggle('hientuchoi');
}
btnAgree.onclick=function () {
    // panel_dongy.style.opacity='1';
    panel_dongy.classList.toggle('hien_dongy');
    panel_tuchoi.style.opacity='0';
    btnDisagree.style.display='none'
}