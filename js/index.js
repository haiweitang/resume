
    $(document).ready(function(){

      $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skills', 'project','experience','contact'],
        menu: '.nav-list',
        scrollOverflow: true,
        scrollingSpeed: 500,
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
                            $('.link a').css('transform','scale(1)');
                            $('.home').velocity({backgroundColor: "#fff"},600);
                        });
                    });
                    break;

                case 2:
                    if($(window).width()>767){
                        var right = Math.ceil($('.about-me-content').width()*0.6);
                        $('.about-me-content').velocity({opacity:1},500);
                        $('.about-img').velocity({right:right},500);
                        $('.about-info').velocity({right:0},500);
                    }else{
                        $('.about-me-content').velocity({opacity:1},500,function(){
                            $('.about-img').css('transform','scale(1)');
                        });
                        $('.about-info').velocity({top:0},500);
                    }
                    break;

                case 3:
                    var skills = $('.skills-content');
                    skills.find('.line').css('transform','translateY(0)').css('opacity','1');
                    $('.skills-content .DoT').css('transform','scale(0)');
                    $('.list-children').css('opacity',0);
                    setTimeout(function(){
                        skills.find('.DoT').each(function(i){
                            $(this).delay(i*250).velocity({scale: (1)});
                         })
                        $('.list-fl .list-children').velocity('transition.perspectiveLeftIn',{ stagger: 300}).velocity({opacity:1});
                        $('.list-fr .list-children').delay(500).velocity('transition.perspectiveRightIn',{ stagger: 300}).velocity({opacity:1});
                        
                    },200);
                    break;
                case 4:
                    $('.demo-list').velocity('transition.bounceUpIn',{ stagger: 300});
                    break;
                case 5:
                    if($(window).width()>768){
                        $('.work-list').velocity('transition.flipBounceXIn',{stagger: 300}).velocity({opacity:1});
                    }
                    else {
                        $('.work-list').css('display','none');
                        $('.work-content').find('.active').velocity('transition.flipBounceXIn',{stagger: 300}).velocity({opacity:1})
                    }
                    break;
                case 6:
                    $('.contact-content').velocity('transition.bounceIn',{stagger: 300}).velocity({opacity:1});
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

                case 3:
                    setTimeout(function(){
                        $('.list-children').stop(true).animate({'opacity':0});
                        $('.skills-content .line').stop(true).css({'transform':'translateY(-600px)'}).css({'opacity':0});
                        $('.skills-content .DoT').stop(true).css({'transform':'scale(0)'});
                        $('.list-children').animate({'opacity':0});
                    },500)
                    break;
                case 4:
                    setTimeout(function(){
                        $('.demo-list').stop(true).animate({'opacity':0});
                    },500)
                    break;
                case 5:
                    setTimeout(function(){
                        $('.work-list').stop(true).animate({'opacity':0});
                    },500)
                    break;
                case 6:
                    setTimeout(function(){
                        $('.contact-content').stop(true).animate({'opacity':0});
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