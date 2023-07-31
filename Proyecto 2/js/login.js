// Función para inicializar el localStorage con algunos usuarios de ejemplo (incluyendo un administrador)
function initializeLocalStorage() {
    const users = [
      {
        username: 'RollingTunes',
        password: '1234',
        role: 'admin', // Asignar el rol "admin" al usuario administrador
      },
      {
        username: 'user1',
        password: 'user123',
        role: 'normal',
      },
      // Agrega más usuarios aquí si lo deseas
    ];
  
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  // Verificar si el localStorage ya contiene usuarios, si no, inicializar con usuarios de ejemplo
  if (!localStorage.getItem('users')) {
    initializeLocalStorage();
  }
  
  // Función para realizar el inicio de sesión
  function login() {
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('contraseña').value;
  
    // Obtenemos la lista de usuarios registrados del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    console.log('Usuarios registrados:', users); // Mostrar los usuarios registrados en la consola
  
    // Verificamos si el usuario y la contraseña coinciden con los registrados
    const currentUser = users.find(user => user.username === username && user.password === password);
  
    console.log('Usuario actual:', currentUser); // Mostrar el usuario actual en la consola
  
    if (currentUser) {
      // Si las credenciales son válidas, almacenamos el usuario actual en el localStorage
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('userRole', currentUser.role);
        localStorage.setItem('userName', currentUser.username); // Agrega esta línea para guardar el nombre del usuario

  
      // Redireccionamos a la página de administración en caso de ser un usuario administrador
      if (currentUser.role === 'admin') {
        window.location.href = '/Proyectos/Proyecto 2/pages/administracion.html';
      } else {
        // Redireccionamos a otra página para el caso del usuario no administrador
        // Puedes cambiar esto por cualquier otra página que desees (por ejemplo, "pagina_principal.html")
        window.location.href = '/Proyectos/Proyecto 2/index.html';
      }
    } else {
      // Mostramos un mensaje de error en caso de credenciales inválidas
      alert('Usuario o contraseña incorrectos.');
    }
  }

  // Función para registrar un nuevo usuario
  function register() {
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('contraseña').value;
  
    // Obtenemos la lista de usuarios registrados del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Verificar si el usuario ya está registrado
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      alert('El usuario ya está registrado.');
      return;
    }
  
    // Creamos un nuevo objeto de usuario
    const newUser = {
      username: username,
      password: password,
      role: username === 'RollingTunes' ? 'admin' : 'normal', // Asignar el rol "admin" al usuario "administrador"
    };
  
    // Agregar el nuevo usuario a la lista de usuarios
    users.push(newUser);
  
    // Almacenar la lista actualizada de usuarios en localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Mostrar un mensaje de éxito y redirigir a la página de inicio de sesión
    alert('Usuario registrado exitosamente.');
    window.location.href = '';
  }
  
  // Función para eliminar un usuario registrado
  function deleteUser(username) {
    // Obtenemos la lista de usuarios registrados del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Filtramos los usuarios para obtener una nueva lista sin el usuario que queremos eliminar
    const updatedUsers = users.filter(user => user.username !== username);
  
    // Almacenar la lista actualizada de usuarios en localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    // Cargar la lista de usuarios actualizada en la página
    loadUserList();
  }
  
  // Cargar la lista de usuarios al cargar la página de administración
  function loadUserList() {
    if (!window.location.pathname.includes('/proyecto/proyecto2/pages/administracion.html')) return;
  
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';
  
    // Obtenemos la lista de usuarios registrados del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    users.forEach(user => {
      const userItem = document.createElement('li');
      userItem.textContent = user.username;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', () => deleteUser(user.username));
  
      userItem.appendChild(deleteButton);
      userListElement.appendChild(userItem);
    });
  }
  
  // Asociar la función login al evento click del botón "Entrar"
  document.getElementById('loginButton').addEventListener('click', login);
  
  // Asociar la función register al evento click del botón "Registrarse"
  document.getElementById('registerButton').addEventListener('click', register);
  
  // Cargar la lista de usuarios en la página de administración
  loadUserList();
  
// Función para modificar el navbar al iniciar sesión y mostrar el nombre del usuario
function updateNavbarOnLogin() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userName = localStorage.getItem('userName'); // Obtenemos el nombre del usuario desde el localStorage
  const navbar = document.querySelector('nav ul');

  if (currentUser) {
    // Si hay un usuario en sesión, ocultamos el enlace de "Iniciar Sesión"
    // Mostramos el nombre del usuario en el navbar con el mensaje "Bienvenido, usuario"
    const loginLink = navbar.querySelector('li:nth-child(2)');
    const welcomeUser = document.getElementById('welcomeUser');
    welcomeUser.textContent = `Bienvenido, ${userName}`;
    welcomeUser.style.display = 'inline-block'; // Mostramos el nombre del usuario
    navbar.removeChild(loginLink);
  }
}

// Llamamos a la función para actualizar el navbar al cargar la página
updateNavbarOnLogin();



/*function login() {
  const username = document.getElementById('usuario').value;
  const password = document.getElementById('contraseña').value;

  // Aquí puedes implementar la lógica para autenticar al usuario.
  // Por simplicidad, utilizaremos credenciales predefinidas para el ejemplo.

  // En una implementación real, esta información debe ser verificada en un backend seguro.
  // Además, no es seguro almacenar contraseñas en el frontend en una aplicación en producción.

  const adminUser = {
    username: 'admin',
    password: 'admin123',
    role: 'admin' // Asignamos el rol de "admin" al usuario administrador
  };

  const normalUser = {
    username: 'user',
    password: 'user123',
    role: 'normal' // Asignamos el rol de "normal" al usuario no administrador
  };

  // Verificamos las credenciales ingresadas con las credenciales predefinidas
  if (
    (username === adminUser.username && password === adminUser.password) ||
    (username === normalUser.username && password === normalUser.password)
  ) {
    // Si las credenciales son válidas, almacenamos el usuario actual en el localStorage
    localStorage.setItem('currentUser', JSON.stringify(username === adminUser.username ? adminUser : normalUser));

    // Redireccionamos a la página de administración en caso de ser un usuario administrador
    if (username === adminUser.username) {
      window.location.href = 'admin.html';
    } else {
      // Redireccionamos a otra página para el caso del usuario no administrador
      // Puedes cambiar esto por cualquier otra página que desees
      window.location.href = 'dashboard.html';
    }
  } else {
    // Mostramos un mensaje de error en caso de credenciales inválidas
    alert('Usuario o contraseña incorrectos.');
  }
}

function register() {
  const username = document.getElementById('usuario').value;
  const password = document.getElementById('contraseña').value;

  // Aquí puedes implementar la lógica para registrar al usuario.
  // Por simplicidad, solo almacenaremos el usuario en localStorage para el ejemplo.

  // En una implementación real, esta información debe ser enviada al backend seguro para registrar el usuario en una base de datos.

  const newUser = {
    username: username,
    password: password,
    role: 'normal' // Por defecto, asignamos el rol de "normal" al usuario registrado
  };

  // Obtener la lista actual de usuarios registrados o inicializarla si es la primera vez
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Verificar si el usuario ya está registrado
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    alert('El usuario ya está registrado.');
    return;
  }

  // Agregar el nuevo usuario a la lista de usuarios
  users.push(newUser);

  // Almacenar la lista actualizada de usuarios en localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Mostrar un mensaje de éxito y redirigir a la página de inicio de sesión
  alert('Usuario registrado exitosamente.');
  window.location.href = 'login.html';
}

// Asociar la función login al evento click del botón "Entrar"
document.getElementById('loginButton').addEventListener('click', login);

// Asociar la función register al evento click del botón "Registrarse"
document.getElementById('registerButton').addEventListener('click', register);*/