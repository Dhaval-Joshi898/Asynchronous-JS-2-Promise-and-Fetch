const divEle = document.querySelector('.card-container');
function getDetails(id) {

    //The fetch() api return a Promise
    // const request = fetch(`https://dummyjson.com/users/${id}`)  //return a promise object 
    // console.log(request)

    // const response = request.then((response) => {

    //     console.log(response) //this gives the response object which is inside promise object in this[[PromiseResult]]  

    //     //console.log(response.json())  // this will give the data in Javascript Object it is stored in[[PromiseResult]] : Object
    //     //Since json() is return a promise object we can use .then to access the result

    //     return response.json()  //.then is callback function it return
    // })

    // response.then((value) => console.log(value))//this will give the Object form the above then if we return it

    //The above code can be wriiten in the form as mentioned BELOW .This is called Promise chaining
    
    fetch(`https://dummyjson.com/users/${id}`)
        .then((response) => {

            console.log(response)// for debugging to check if id is 0 there will be no response from serber and status ok is false.
            if (!response.ok) { //if the response object dont contain the data of the required ID ok:will be False.
                //with the help of throw we can write the custom error message and using Error(construtor)
                throw new Error('This message is inside the error') //the throw works as a return keyword
            }

            return response.json()  //.then is callback function it return
        }).then((value) => console.log(value)) //THis will give output as Javascript object

        //The message in trhow will be catch by below "NOTE:IF NOT USED THROW for CUSTOM ERROR MESSAGE IT WILL GIVE BY DEFAULT ERROR MESSAGE"
        .catch((err) => {
            console.log(err)   //this will give the error message in normal form like a text message
            console.error(err)  //this will give the message in red like an error in console
        })
}
getDetails(0)