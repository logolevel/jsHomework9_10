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
// $( '.dropdown' ).hover(
//     function(){
//         $(this).children('.sub-menu').slideDown(200);
//     },
//     function(){
//         $(this).children('.sub-menu').slideUp(200);
//     }
// );

$('.dropdown').hover(
	function(){
		$(this).children('.sub-menu').slideDown();
	},
	function(){
		$(this).children('.sub-menu').slideUp();
	}
);








});