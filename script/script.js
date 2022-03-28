let count = 0;
let timer = setInterval(function(){
    if( count > 5 ) { count = 0 }
    $('.gallGroup>div').css('opacity', 0);
    $('.gallGroup>div').eq(count).css('opacity', 1);
    count++;
}, 2000)

$('.pager a').on('click', function(){

var n = $(this).parent().index();
console.log(n)
$('.pager a').removeClass('active');
$('.pager a').eq(n).addClass('active');
$('.imgBox>div').removeClass('active');
$('.imgBox>div').eq(n).addClass('active')
})
$('.pager a').eq(0).trigger('click');