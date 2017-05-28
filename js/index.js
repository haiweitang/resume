
    $(document).ready(function(){
      $('#fullpage').fullpage({

        //sectionsColor: ['#EEE1CD', '#e6e6e6', '#EEE1CD', '#e6e6e6','#EEE1CD','#fff'],
        anchors: ['home', 'about', 'skills', 'project','experience','contact'],
        menu: '.nav-list',
        scrollOverflow: true,
        /*afterLoad: function(anchorLink,index){
            switch (index) {


            }
        },*/
        onLeave: function(nextIndex,index ){
            switch (index ) {
                case 1:
                    $('.header-nav').css('transform','translateY(-50PX)').css('opacity','0');
                    break;
                case 2:
                    $('.header-nav').css('transform','translateY(0)').css('opacity','1');
                    break;
            }
        }

      });

      $('.children-img').each(function(i){
        $(this).css('backgroundImage','url('+ skills[i].imgUrl +')');
      })


    });

var skills = [
    {imgUrl: 'img/html.png'},
    {imgUrl: 'img/css.jpg'},
    {imgUrl: 'img/js.png'},
    {imgUrl: 'img/jq.png'},
    {imgUrl: 'img/less.png'},
    {imgUrl: 'img/git.png'},
    {imgUrl: 'img/webpack.png'},
    {imgUrl: 'img/vue.png'}
];