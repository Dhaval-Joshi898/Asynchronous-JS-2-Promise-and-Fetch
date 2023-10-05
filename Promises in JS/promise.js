//creating promise object from Promise CONSTRUCTOR it takes a callback function 2 parameter resolve and reject
let request=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise Initiated")
        resolve('Promise resolved') //here what will be mentioned will be inside Promise ->[[PromiseResult]]:"Promise resolved"
       
    },2000)
})
console.log(request)

/*Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "UNDEFINED"
THEN AFTER 2 SECOND IT WILL GIVE "Promise Initiated"*/


// setTimeout(function(){
//     console.log(request)
// },1000)















//Nomral javascript object
// function Fru(name,color){
//     this.name=name;
//     this.color=color;
// }

// let fru1=new Fru('apple','red')
// console.log(fru1)

