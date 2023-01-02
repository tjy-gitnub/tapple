
let ph=window.innerHeight;
$(':root').css('--ph',`${ph}px`);
let g_percent=$('.scroll:not(.fun),.fx:not(.fun),.prog:not(.fun),.shine:not(.fun),.trans.s-b:not(.fun),.trans.b-s:not(.fun)');
let g_pfunc=$('.func');
let g_center=$('.lock,.fx.h,.trans.s-b,.trans.b-s');
let g_highlight=$('.highlight');
let g_show=$('.lock,.trans.s-b,.trans.b-s');
let g_stopcenter=$('.stop-center');
let my_scroll=(t)=>{null};
if($('html').scrollTop()==0){
    $('#title').addClass('start');
}
$('body')[0].onscroll=function() {
    let t=$('html').scrollTop();
    if(t==0){
        $('#title').addClass('start');
    }else{
        $('#title').removeClass('start');
    }
    for (let i = 0; i < g_percent.length; i++) {
        const box = g_percent[i];
        $(box).css('--scroll',`${(ph+t-box.offsetTop)/(ph+box.offsetHeight)*100}%`);
    }
    for (let i = 0; i < g_pfunc.length; i++) {
        const box = g_pfunc[i];
        $(box).css('--scroll',`${(4*(((ph+t-box.offsetTop)/(ph+box.offsetHeight)-0.5)**3)+0.5)*100}%`);
    }
    for (let i = 0; i < g_center.length; i++) {
        const box = g_center[i];
        $(box).css('--translate',`${ph+t-box.offsetTop-((ph+box.offsetHeight)/2)}px`);
    }
    for (let i = 0; i < g_highlight.length; i++) {
        const box = g_highlight[i];
        if(box.offsetTop-t<0.7*ph){
            $(box).addClass('show');
        }else{
            $(box).removeClass('show');
        }
    }
    for (let i = 0; i < g_show.length; i++) {
        const box = g_show[i];
        if(t<box.offsetTop+box.offsetHeight&&box.offsetTop-ph<t){
            $(box).addClass('show');
        }else{
            $(box).removeClass('show');
        }
    }
    for (let i = 0; i < g_stopcenter.length; i++) {
        const box = g_stopcenter[i];
        if(ph+t-box.offsetTop>=(ph+box.offsetHeight)/2){
            $(box).addClass('stop');
        }else{
            $(box).removeClass('stop');
        }
    }
    my_scroll(t);
}
$('html')[0].scroll(0,0);