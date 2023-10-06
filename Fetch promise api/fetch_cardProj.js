const divEle = document.querySelector('.card-container');
function getDetails(id){

    //The fetch() api return a Promise
    const request=fetch(`https://dummyjson.com/users/${id}`)  //return a promise object 
    console.log(request)
    
    const response=request.then((response)=> {
        
        console.log(response) //this gives the response object which is inside promise object in this[[PromiseResult]]  

         //console.log(response.json())  // this will give the data in Javascript Object it is stored in[[PromiseResult]] : Object
          //Since json() is return a promise object we can use .then to access the result

          return response.json()  //.then is callback function it return
    })

    response.then((value)=>console.log(value))//this will give the Object form the above then if we return it
    

}

getDetails(2)