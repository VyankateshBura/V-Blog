import fetch from 'cross-fetch'
const user = {
    name:"Gayatri",
    Email:"gayatri@gmail.com",
    Username:"gayatri",
    password:123456
}
const resp = ()=>{
    try {
        fetch('/api/v1/user',{
            method:'POST',
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
            },
            body:JSON.stringify(user)
        }).then(response=>{
            console.log(response)
        })
        
    } catch (error) {
        console.log(error);
    }
    
}
resp();