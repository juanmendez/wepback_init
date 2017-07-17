let login:Function = (username:string, password:string)=>{
    if( username === "admin" && password === "radical"){
        return "login is correct";
    }else{
        return "incorrect login";
    }
}

export {login};