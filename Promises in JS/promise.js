//creating promise object from Promise CONSTRUCTOR it takes a callback function 2 parameter resolve and reject
let request=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise Initiated")
        resolve('Promise resolved') //here what will be mentioned will be inside Promise ->[[PromiseResult]]:"Promise resolved"
       
    },2000)
})
console.log(request)














//Nomral javascript object
// function Fru(name,color){
//     this.name=name;
//     this.color=color;
// }

// let fru1=new Fru('apple','red')
// console.log(fru1)

