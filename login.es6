let login = (username, password)=>{
    if( username === "admin" && password === "radical"){
        console.log( "login is correct");
    }else{
        console.log( "incorrect login");
    }
}

login( "admin", "idunno");