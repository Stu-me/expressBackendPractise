// this is function that makes url call to the database 
// fetch is just  a replacement for the XMLHttpRequest , Also fetch is more powerful and flexible
/*  
   XMLHttpRequest (XHR)   
    objects are used to interact with servers. You can retrieve data from a URL without having 
    to do a full page refresh. This enables a Web page to update just part of a 
    page without disrupting what the user is doing.                                  
*/
// prints a random api from a random database 
fetch('https://randomuser.me/api')
                                  .then(response =>{
                                    return response.json();
                                  })
                                  .then(data=>{
                                    console.log(data);  
                                  })    
                                  .catch(error =>{
                                    console.log('Error:',error);
                                  });