$(function() {

//carousel
 $("#owl-demo").owlCarousel({

  autoPlay: 5000,
  items : 2,
  navigation: true,
  navigationText: ['<', '>'],
  responsive: false

 });

//select
$(".basic-example").heapbox();

//menu
$('.dropdown').hover(
	function(){
		$(this).children('.sub-menu').slideDown()
		.animate({
			backgroundColor: '#1abc9c'
		},1000);
	},
	function(){
		$(this).children('.sub-menu').slideUp()
		.animate({
			backgroundColor: '#2ecc71'
		},1000);
	}
);

//end
});