//menu
function openMenu(){
    document.getElementById('menu-container').style.width="100%";
}
function closeMenu(){
    document.getElementById('menu-container').style.width="0%";
}


//Mix It Up
var mixer = mixitup('.work-grid');


//animation headline
$(function() {
    $('.hero-content').animatedHeadline({
        animationType: 'clip'
    });
})