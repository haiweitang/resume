
    $(document).ready(function(){
        /*$.Velocity.RegisterUI('daxia.slideUpIn',{
            defaultDuration: 500,
            calls: [
                [{scaleX: [1, 0],scaleY: [1, 0],opacity: [1, 0]}]   //[动画结束，动画开始]
            ]
        });
        var iconfont = $('.link .iconfont');
        var seqScale = [
            {
                elements: iconfont,
                properties: 'daxia.slideUpIn'
            }
        ]*/
      $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skills', 'project','experience','contact'],
        menu: '.nav-list',
        scrollOverflow: true,
        afterLoad: function(anchorLink,index){
            switch (index) {
                case 1:
                    if($(window).width()<769){
                        var lineWidth = Math.ceil($('.home').width()*0.9);
                    }else{
                        var lineWidth = Math.ceil($('.home').width()*0.6);
                    }
                    $('.home .title').delay(200).animate({top:0,opacity:1},'600');
                    $('.home .english-title').delay(400).animate({top:0,opacity:1},'600');
                    $('.home .motto').delay(600).animate({top:0,opacity:1},'600',function(){
                        $('.underline').animate({width:lineWidth},'600',function(){
                            $('.link a').css('transform','scale(1,1)');
                            $('.home').animate({backgroundColor: "#fff"},'600');
                        });
                    });
                    break;

                case 2:
                    if($(window).width()>767){
                        var right = Math.ceil($('.about-me-content').width()*0.6);
                        $('.about-me-content').animate({opacity:1},'slow');
                        $('.about-img').animate({right:right},'slow');
                        $('.about-info').animate({right:0},'slow');
                    }else{
                        $('.about-me-content').animate({opacity:1},'slow',function(){
                            $('.about-img').css('transform','scale(1,1)');
                        });
                        $('.about-info').animate({top:0},'slow');
                    }
                    break;
            }
        },
        onLeave: function(nextIndex,index ){
            switch (index ) {
                case 1:
                    $('.header-nav').css('transform','translateY(-50PX)').css('opacity','0');
                    break;
                case 2:
                    $('.header-nav').css('transform','translateY(0)').css('opacity','1');
                    break;
            }

            switch (nextIndex) {
                case 1:
                    setTimeout(function(){
                        $('.home').stop(true).css('backgroundColor','#e6e6e6');
                        $('.home .title').stop(true).css('top',200).css('opacity',0);
                        $('.home .english-title').stop(true).css('top',200).css('opacity',0);
                        $('.home .motto').stop(true).css('top',200).css('opacity',0);
                        $('.underline').stop(true).css('width',0);
                        $('.link a').css('transform','scale(0,0)');
                    },300)
                    break;

                case 2:
                    setTimeout(function(){
                        if($(window).width()>767){
                            $('.about-me-content').stop(true).css('opacity',0);
                            $('.about-img').stop(true).css('right',1200);
                            $('.about-info').stop(true).css('right',-1000);
                        }else{
                            $('.about-me-content').stop(true).css('opacity',0);
                            $('.about-img').stop(true).css('transform','scale(0,0)');
                            $('.about-info').stop(true).css('top',500);
                        }
                    },500)
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