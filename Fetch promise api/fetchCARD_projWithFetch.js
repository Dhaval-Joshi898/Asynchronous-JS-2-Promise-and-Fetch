const divEle = document.querySelector('.card-container');

function getDetails(id) {

    fetch(`https://dummyjson.com/users/${id}`)
        .then((response) => {
            if (!response.ok) { //if the response object dont contain the data of the required ID ok:will be False.
                //with the help of throw we can write the custom error message and using Error(construtor)
                throw new Error('Id does not match any data') //the throw works as a return keyword
            }
            return response.json()  //.then is callback function it return
        })
        .then((user) => {
            // console.log(value)
            cardData(user,'beforeend')
        }) //THis will give output as Javascript object

        //The message in trhow will be catch by below "NOTE:IF NOT USED THROW for CUSTOM ERROR MESSAGE IT WILL GIVE BY DEFAULT ERROR MESSAGE"
        .catch((err) => {
            // console.log(err)   //this will give the error message in normal form like a text message
            console.error(err)  //this will give the message in red like an error in console
        })
}



function cardData(data,position,className=''){  //it takes data and position(can be beforend or afterbegin)  as paramter
    //The below is the template literal the html code is written inside the template literal  so that we can use variable and change it dynamically for any other user object with idfferent id
    const card = `<div class="user-card ${className}">
    <img src=${data.image} alt="Profile Image" />
    <h3>${data.firstName} </h3>
    <h3>${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class="btn">View Profile</button>
    </div>`

    // divEle.innerHTML = card  //added the whole html card code inside the main div

    divEle.insertAdjacentHTML(position,card)   

    //afterBegin--> to add data at start
    //beforEend-->to add data at end 
}
getDetails(2)