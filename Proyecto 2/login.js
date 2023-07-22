

//------registro conn local Storage--------

const registro = document.querySelector('registro')
registro.addEventListener('submit', (e))=>{
e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    
    const users = JSON.parse(localStorage.getItem('users')) || []
    const  usuariosregistrados = users.find(user.email === email)
    if(usuariosregistrados){
    return alert('el usuario ya se encuentra registrado!')}

    users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(users))
    alert('Registro exitoso!')
    window.location.href = 'login.html'

    
    
    
    
    
    )}