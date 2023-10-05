//creating promise object from Promise CONSTRUCTOR it takes a callback function 2 parameter resolve and reject
let request=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise initiated")
    },2000)
})















//Nomral javascript object
// function Fru(name,color){
//     this.name=name;
//     this.color=color;
// }

// let fru1=new Fru('apple','red')
// console.log(fru1)

