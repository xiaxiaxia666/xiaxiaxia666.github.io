var instaFeed1 = new Instafeed({
	clientId :'067fc6b74ed047caba388eb47b261af6',
	target : 'instafeed',
	get : 'user',
	userId : 5629893099,
	sortBy : 'most-recent',
	links : true,
	limit: '12',
	resolution : 'low_resolution',
	template: '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 item wow fadeIn"><div class="item-inner"><a class="animation" href="{{link}}" title="{{caption}}" target="_blank" data-toggle="tooltip"><img src="{{image}}" alt="{{caption}}"/></a></div></div>',
	accessToken: '5629893099.6c2842b.69ff747cbb344f45883975dc3fa164e8'        
});
instaFeed1.run();
var ebWeb = {
	initPage : function (){
		this.initContent();
		this.initTopBtn();
		this.initLogo();
	},
	initContent : function (){
		var instaHeight = $(".client-carousel .wow:first-child").width();
		$('#instafeed .item-inner').css({'max-height': ($(".container").width()*0.1666666667 -30) + 'px'});
		//alert($(".container").width()*0.2 -40);
		var top = jQuery(window).scrollTop();
		/*
		if($(window).width() < 768){
			jQuery('.navbar-toggle').sidr({
				name: 'sidr-left-top',
				timing: 'ease-in-out',
				speed: 500,
				source: '.gnb',
				renaming: false
				//displace: false
			});
			$('#overlay, #close-menu-button').click(function () {
				$.sidr('close', 'sidr');
			});
			jQuery('#gnb').css({'display':'none'});
		}else{
			jQuery('#gnb').css({'display':''});
		}
		*/
	},
	initTopBtn : function (){
		/*----------------------------------------------------*/
		/*	Back To Top Button
		/*----------------------------------------------------*/
		var btnUp = jQuery('<div/>', {'class':'btn-up'}).click(function(){ jQuery.scrollTo(0,600); });
		btnUp.appendTo('body');
	},
	initLogo : function (){
		$('h2.logo').click(function(e){
			$("html,body").stop().animate({'scrollTop':'0' },600);
			/*if(jQuery(window).width() < 768){
				jQuery.sidr('close', 'sidr');
			}*/
			e.preventDefault();
		});
	}
};

jQuery(window).ready(function() {
	//$('#instafeed .item-inner').css({'max-height': ($(".container").width()*0.1666666667 -30) + 'px'});
	ebWeb.initPage();
	//$('div.mouse').animate({ right:20, },500); 
	setInterval(function(){
		//$('div.mouse').animate({ top : 425 } , 500);
		//$('div.mouse').animate({ top : 455 } , 500);
		$('span.deco1').animate({ top : 20 } , 500);
		$('span.deco1').animate({ top : 10 } , 500);
		$('span.deco2').animate({ top : 30, right:30 } , 900);
		$('span.deco2').animate({ top : 10, right:40 } , 900);
		$('span.star1').animate({ top : 20 } , 500);
		$('span.star1').animate({ top : 10 } , 500);
	},500); 

	/*
	if(jQuery(window).width() < 768){
		jQuery.sidr('close', 'sidr');
	}
	e.preventDefault();
	*/
});
	jQuery(window).on('resize', function() {
		/*
		jQuery.sidr('close', 'sidr');
		*/
		ebWeb.initContent();
	});
	jQuery(window).on('scroll', function() {
		var top = jQuery(window).scrollTop();
		if ($(this).scrollTop() > 90){
			$('.btn-up').addClass('active');
		}else{
			$('.btn-up').removeClass('active');
		}
	});
