let num = null
function link() {
    document.getElementById('signUpLink').addEventListener('click', e=> {
        document.getElementById('userContainer').classList.toggle('containerS')
        document.getElementById('userContainer').classList.toggle('containerH')
        document.getElementById('signUp').classList.toggle('containerS')
        document.getElementById('signUp').classList.toggle('containerH')
        //clear storage
        let clear = confirm('do you want to clear localStorage')
        if(clear === true) {
            localStorage.clear()
            num = 1
            localStorage.setItem('num', num)
        }
        if(clear === false) {
            num = localStorage.getItem('num')
            num = parseInt(num)
            num = num += 1
            localStorage.setItem('num', num)
        }
    })
}
function nextSet() {
    document.getElementById('nextBtn').addEventListener('click', e=> {
        /*animation*/
        document.getElementById('step1').style.display = 'none'
        document.getElementById('step2').style.display = 'flex'
    })
}
function getSetUpData() {
    document.getElementById('signUpBtn').addEventListener('click', e=> {
        //get value
        const firstName = document.getElementById('firstNameSign').value
        const lastName = document.getElementById('lastNameSign').value
        const dateOfBirth = document.getElementById('dateSign').value
        const username = document.getElementById('usernameSign').value
        const password = document.getElementById('passwordSign').value
        //append value
        localStorage.setItem('first-name' + num, firstName)
        localStorage.setItem('last-name' + num, lastName)
        localStorage.setItem('date-of-birth' + num, dateOfBirth)
        localStorage.setItem('username' + num, username)
        localStorage.setItem('password' + num, password)
        //login page
        document.getElementById('userContainer').classList.toggle('containerS')
        document.getElementById('userContainer').classList.toggle('containerH')
        document.getElementById('signUp').classList.toggle('containerS')
        document.getElementById('signUp').classList.toggle('containerH')
        //rest
        document.getElementById('step1').style.display = 'flex'
        document.getElementById('step2').style.display = 'none'
        firstName.value = ''
        lastName.value = ''
        dateOfBirth.value = ''
        username.value = ''
        password.value = ''
    })
}
setTimeout(() => {
    link()
    nextSet()
    getSetUpData()
}, 1000);