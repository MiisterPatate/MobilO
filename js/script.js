 $(document).ready(function(){
$.getJSON("http://api.flickr.com/services/feeds/photoset.gne?set=72157622756380931&nsid=38798812@N05&lang=en-us&format=json&jsoncallback=?",
        function(data) {
          var x = Math.floor((Math.random()*19)+0);
        
        //$("<img/>").attr({src: data.items[x].media.m.replace('_m.','.')}).appendTo(".login-container"); 
                  //console.log(data.items[x].media.m);
                  $('.bg-container').css({'background':'url('+data.items[x].media.m + ')','background-repeat':'no-repeat','background-size':'cover'});
                  //$('.bg-container').append('<img src="'+ data.items[x].media.m +'" width="100%" height="100%" />')
                  //console.log(data.items)
           });
         
            $('#glogin').addClass('animated fadeInUp');
           //Code to grab flickr image

 
        var ifUser =$.session.get('usr');
          var ifId = $.session.get('id');
          if ($.session.get('avatar')){

          var ifAvatar = $.session.get('avatar').split("?")[0];

          }else{

            var ifAvatar = "/images/no-profile.jpg";

          }
          
          var showDiv = '<img src="'+ ifAvatar +'" />' 
          if(ifId && ifUser){
            $('.avatar-profil').find('img').remove();
            $('.avatar-profil').append(showDiv).addClass('animated fadeInUp');
            $('.name-profil').html(ifUser);
          };
  });

           

