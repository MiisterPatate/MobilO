var accessToken;
var result =[];
var scopes = new Array('https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/calendar');
var config = {
    'client_id': '641392901513.apps.googleusercontent.com',
    'scope': scopes,
};   
 
function auth() {
 
    gapi.auth.authorize(config, function() {
        accessToken = gapi.auth.getToken().access_token;
        console.log('We have got our token....');
        console.log(accessToken);
        console.log('We are now going to validate our token....');
        validateToken();
               
    });
}
 
function validateToken() {
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + accessToken,
        data: null,
        success: function(response){  
            console.log('Our token is valid....');
            console.log('We now want to get info about the user using our token....');
            getUserInfo();
        },  
        error: function(error) {
            console.log('Our token is not valid....');
        },
        dataType: "jsonp" 
    });
}
 
function getUserInfo() {
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + accessToken,
        data: null,
        success: function(response) {
            console.log('We have gotten info back....');
            result.name = response.name;
            result.mail = response.email;
            result.avatar = response.picture;
            result.id = response.id;
            result.domain = response.hd
            console.log(result);
            
        },
        dataType: "jsonp"
    });

}

$(function(){
      $('#glogin').click(function(){  
        auth();
      });
});



