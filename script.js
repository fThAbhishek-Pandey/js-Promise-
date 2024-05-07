const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls , Cryptograpy , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
});
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async Task2 resolved");
});
const promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Abhi", email :"abhi830564@gmail.com"});
    },1000);
})
promiseThree.then (function(user){
        console.log(user);
});
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let  error = false;
        if(!error){
            resolve({username: "abhishek" ,password :"fth123"});
        }
        else {
            reject ('ERROR : Something went wrong');
        }
    },1000)

})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("the promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve,reject){
    setTimeout (function(){
        let error =true;
        if (error){
            resolve({username: "dosti", password: "123"})
        }
        else {
            reject('ERROR : Something went wrong');
        }
    },1000);
});
async function consumepromiseFive(){
    try{
        const respose = await promiseFive;
        console.log(respose);
    }
    catch(error){
        console.log(error);
    }
}
consumepromiseFive();
async function getAllusers(){
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        console.log (response);
        const data = await response.json();
        console.log (data);
        console.log("hello");
    }
    catch (error){
            console.log("E: ",error);
    }
   
}
getAllusers();

//  fetch 
fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=> {
    return response.json();
})
.then ((data) =>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

