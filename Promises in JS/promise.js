let value=new Promise((resolve,reject)=>{
    resolve('Fu')
    
});
console.log(value)
// value.then((val)=>{
//     console.log(val);
// })
// console.log(value)


function Fru(name,color){
    this.name=name;
    this.color=color;
}

let fru1=new Fru('apple','red')
console.log(fru1)

