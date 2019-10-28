if($(window).width() >= 768){
    const slider = document.querySelector('.my-produto-box');

    let isDown = false;
    let startX; 
    let scrollLeft;

    slider.addEventListener('mousedown', (e)=>{
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    })

    slider.addEventListener('mouseleave', ()=>{
        isDown = false;
    })

    slider.addEventListener('mouseup', ()=>{
        isDown = false;
    })

    slider.addEventListener('mousemove', (e)=>{
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
    })
}


$('#prox').click(function() {
    event.preventDefault();
    console.log($('.my-produto-content').width())
    $('.my-produto-box').animate({
      scrollLeft: "+="+$('.my-produto-content').width()+"px"
    }, "slow");
  });
  
$('#ant').click(function() {
    event.preventDefault();
    $('.my-produto-box').animate({
        scrollLeft: "-="+$('.my-produto-content').width()+"px"
    }, "slow");
});

