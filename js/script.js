$(document).ready(function(){

	$.getJSON('js/data.json',function(data){
		
		$.each(data,function(key,val){

			$( "#data" ).append( "<li>" + val.firstname + " " + val.lastname + "<li>" );
             
		})
	});
		
});


/*	
		$( ".ui-panel-inner" ).append( "<ul data-role='listview' class='ui-listview'><li>" + val.firstname + " " + val.lastname + "<li></ul>" );
*/

// $( document ).on( "pageinit", "#page", function() {
//     $( document ).on( "swipeleft swiperight", "#page", function( e ) {
//         // We check if there is no open panel on the page because otherwise
//         // a swipe to close the left panel would also open the right panel (and v.v.).
//         // We do this by checking the data that the framework stores on the page element (panel: open).
//         if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
//             if ( e.type === "swipeleft"  ) {
//                 $( "#mypanel" ).panel( "close" );
//             } else if ( e.type === "swiperight" ) {
//                 $( "#mypanel" ).panel( "open" );
//             }
//         }
//     });
// });

		$.getJSON("http://api.flickr.com/services/feeds/photoset.gne?set=72157622756380931&nsid=38798812@N05&lang=en-us&format=json&jsoncallback=?",
  			function(data) {
  				var x = Math.floor((Math.random()*19)+0);
  			
				//$("<img/>").attr({src: data.items[x].media.m.replace('_m.','.')}).appendTo(".login-container");	
                  console.log(data.items[x].media.m);
                  $('.bg-container').css({'background':'url('+data.items[x].media.m + ')','background-repeat':'no-repeat','background-size':'cover'});
                  console.log(data.items)
  		     });
  		     $(function(){
  		     	$('#glogin').addClass('animated fadeInUp');
  		     });
  		     

