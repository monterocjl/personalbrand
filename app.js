addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})


window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
       },

       responsive: [
        {

          breakpoint: 700,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '2',
            itemWidth: 150,
            duration: 0.25
          }
        },{

          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: 150,
            duration: 0.25
          }
        },{

            breakpoint: 1130,
            settings: {
              draggable: false,
              slidesToShow: 4,
              slidesToScroll: 4 ,
              itemWidth: 150,
              duration: 0.25
            }
          }
      ]   
    });
});
