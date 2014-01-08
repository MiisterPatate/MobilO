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