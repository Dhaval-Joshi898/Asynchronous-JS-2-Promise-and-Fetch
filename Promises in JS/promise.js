//creating promise object from Promise CONSTRUCTOR it takes a callback function 2 parameter resolve and reject
let request=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise Initiated")
        resolve('Promise resolved') //here what will be mentioned will be inside Promise ->[[PromiseResult]]:"Promise resolved"
       
    },2000)
})

//suppose if the resolve contains object or some values which i want to access so i can use the then() with the promise object to get the content inside the resolve()


setTimeout(()=>{
    console.log(request)
},2000)

//The above will give op as
/*Promise Initiated  first promise obj then settimeout request console
Promise {<fulfilled>: 'Promise resolved'}
[[Prototype]]: Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]: "Promise resolved"
*/




















//console.log(request)

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

