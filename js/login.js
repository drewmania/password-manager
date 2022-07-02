let userArray = []
let passArray = []
let numUser = 0
let numPass = 0
function setArray() {
    //username
    for(var x = 0; 2 > x;) {
        numUser++
        let userGet = localStorage.getItem('username' + numUser)
        if(userGet !== null) {
            userArray.push(userGet)
        }
        if(userGet === null) {
            x = 3
        }
    }
    //password
    for(var y = 0; 2 > y;) {
        numPass++
        let passGet = localStorage.getItem('password' + numPass)
        if(passGet !== null) {
            passArray.push(passGet)
        }
        if(passGet === null) {
            y = 3
        }
    }
    console.log(userArray)
    console.log(passArray)
}
function loginBtn() {
    document.getElementById('loginBtn').addEventListener('click', e=> {
        
    })
}
setTimeout(() => {
    setArray()
    loginBtn()
}, 1000);