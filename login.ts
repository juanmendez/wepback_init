let login:Function = (username:string, password:string)=>{
    if( username === "admin" && password === "radical"){
        console.log( "login is correct");
    }else{
        console.log( "incorrect login");
    }
}

export {login};