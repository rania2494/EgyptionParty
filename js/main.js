//sideNav

$('#open').on('click',function(){
 sideNavWidth= $('#sideNav').innerWidth()
if($('#sideNav').offset().left===0){
    $('#side').animate({left:`${-sideNavWidth}`},1000)
    $('#open').animate({left:`0`},1000)
} else{
    $('#side').animate({left:`0`},1000)
    $('#open').animate({left:`${sideNavWidth}`},1000)
}})
$('#close').on('click',function(){
 sideNavWidth= $('#sideNav').innerWidth()
 $('#side').animate({left:`${-sideNavWidth}`},1000)
 $('#open').animate({left:`0`},1000)
})


//slideDown
$('.singleHeader').on('click',function(e){
   $('.singleP').not($(this).next()).slideUp(1000)
 $(this).next().slideToggle(1000)
})


//counter
window.onload = function() {
    let sideNavWidth= $('#sideNav').innerWidth()
$('#side').css('left',`${-sideNavWidth}px`)
     countDown()

function calcTime(){
    let eventDate =new Date("1 may 2025 01:00:00").getTime();
    let currentDate =new Date().getTime();
    let diffTime=eventDate-currentDate
    let days=Math.floor(diffTime/(1000*60*60*24))
    let hours=Math.floor(diffTime/(1000*60*60)-(days*24))
    let minutes=Math.floor(diffTime/(1000*60)-(days*24*60)-(hours*60))
    let seconds=Math.floor(diffTime/(1000)-(days*24*60*60)-(hours*60*60)-(minutes*60))

$('#days').html(days)
$('#hours').html(hours)
$('#minutes').html(minutes)
$('#seconds').html(seconds)
}

function countDown(){
    setInterval(calcTime, 1000);
}

}

///message
$('textarea').keyup(function(){
    let letterCount=$('textarea').val().length
    if(letterCount<100){
$('#lettersQTY').text(100-letterCount)

    } else if (letterCount==100){
        $('#lettersQTY').text('your available character finished ')
    }
   
})





