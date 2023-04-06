let dbUsers = [
    {
        username:"danial",
        password:"12345",
        name:"danial",
        email:"danial@account"
    },
    {
        username:"aqib",
        password:"12345",
        name:"aqib",
        email:"aqib@account"
    }
]

function login(reqUsername, reqPassword){
    //let matchUser = dbUsers.find(
    var matchUser = dbUsers.find(    
        x => x.username == reqUsername          //username => user.username
    )
        
    if(!matchUser) return "User not found!"     //if takde

    if(matchUser.password == reqPassword){
        return matchUser
    }else{
        return "Invalid password"
    }
}

//function register(reqUsername, reqPassword, reqName, reqEmail){
function register(username, password, name, email){
    dbUsers.push({
        username: username,
        password: password,
        name: name,
        email: email
    })
}

//try to login
console.log(login("danial", "12345"))
console.log(login("utem", "password"))

register("utem","password","name","email")
console.log(login("utem","password"))