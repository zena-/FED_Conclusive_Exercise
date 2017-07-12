"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide:null,
			total_slides:null
		},
		init:function(){

			//ADD INITIALIZER CODE HERE
			// $(".main-carousel").carousel();

			$(".carousel-next").click(function() {
		    	$('.carousel-cells > :first-child').fadeOut().next('article')
			    	.fadeIn().end().appendTo('.carousel-cells');
		    });


			$(".carousel-prev").click(function() {
		    	$('.carousel-cells article').fadeOut(1).next(":last-child")
			    	.fadeIn(1).last().prependTo(".carousel-cells");
		    });

		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
		},
		next:function(){
			//ADD NEXT CODE HERE
			
		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
			
			
		},
		update:function(){
			//ADD UPDATE CODE HERE
		}
	}
	$(function(){
		Carousel.init();
	})

})(window);