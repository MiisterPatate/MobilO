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



