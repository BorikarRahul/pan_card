// //XMLHttpRequest= are used to interact with servers via API

// //1. creating an XHR object
// //object mean=real time 
// //new keyword  (     new object   )  
// var request = new XMLHttpRequest();
// //2. opening a connection(specify the URL you want to retry)(its accectiong only string type )
// request.open('GET','https://restcountries.eu/rest/v2/all',true);//take two parameter it under XHR (GET is http method)
// //3. sending a connection 
// request.send();//inicating (sending a connection/pussing a connection)
// //4. once the server responded successfully then we have to process the data
// request.onload=function(){
//     var data=JSON.parse(this.response);
//     console.log(data);
// }//onload is an event(it will only triggred the function )



