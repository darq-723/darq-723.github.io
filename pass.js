// Accounts ko:
var objPeople = [
{
    username: "dragon",
    password: "deeznuts"
},
{
    username: "Icant",
    password: "exit_vim" // Seriously, I couldn't exit it in my first try.
},
{
    username: "darq723",
    password: "samuraicloud123"
},
{
    username: "dionarquisola",
    password: "samplepass"
}
]

// Just like facebook, It gets your info... hahaha pota. ...
function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    for(i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){
            console.log(username + " is logged in.")
            return location.replace("blog.html")
        }
        else{
            console.log("Incorrect Credentials")
        }
    }
}

// we must get a function that saves the password and some bullshit, basically a registration system






