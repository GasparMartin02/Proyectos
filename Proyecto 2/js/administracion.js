function getCurrentUser() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return user;
}

// Función para cargar las canciones desde localStorage y mostrarlas en la página principal
function loadSongs() {
  const songs = JSON.parse(localStorage.getItem('songs')) || [];

  const songsList = document.getElementById('songsList');
  songsList.innerHTML = '';

  songs.forEach((song, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${song.name}</td>
      <td>${song.artist}</td>
      <td>
        <button onclick="deleteSong(${index})">Eliminar</button>
      </td>
    `;
    songsList.appendChild(row);
  });
}

// Función para agregar una nueva canción
function addSong() {
  const songName = document.getElementById('songName').value;
  const artistName = document.getElementById('artistName').value;

  const songs = JSON.parse(localStorage.getItem('songs')) || [];
  songs.push({ name: songName, artist: artistName });
  localStorage.setItem('songs', JSON.stringify(songs));

  loadSongs(); // Actualizamos la lista de canciones en la página
  document.getElementById('songName').value = '';
  document.getElementById('artistName').value = '';
}

// Función para eliminar una canción
function deleteSong(index) {
  const songs = JSON.parse(localStorage.getItem('songs')) || [];
  songs.splice(index, 1);
  localStorage.setItem('songs', JSON.stringify(songs));

  loadSongs(); // Actualizamos la lista de canciones en la página
}

// Función para cerrar sesión
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = '/Proyectos/Proyecto 2/pages/login.html'; // Redirecciona de vuelta a la página de inicio de sesión
}

// Verificar si el usuario está autenticado
const currentUser = getCurrentUser();
if (!currentUser || currentUser.role !== 'admin') {
  // Si el usuario no está autenticado o no es un administrador, redirige a la página de inicio de sesión
  window.location.href = '/Proyectos/Proyecto 2/pages/login.html';
} else {
  // Cargar las canciones y mostrar la página de administración
  loadSongs();
}

/*// Función para obtener el usuario actualmente logueado (para este ejemplo, lo almacenaremos en localStorage)
function getCurrentUser() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return user;
}

// Función para cargar las canciones desde localStorage y mostrarlas en la página principal
function loadSongs() {
  const songs = JSON.parse(localStorage.getItem('songs')) || [];

  const songsList = document.getElementById('songsList');
  songsList.innerHTML = '';

  const addedSongsList = document.getElementById('songList');
  addedSongsList.innerHTML = ''; // Limpiamos la lista antes de cargar las canciones

  songs.forEach((song, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${index + 1}</td>
          <td>${song.name}</td>
          <td>${song.artist}</td>
          <td>
              <button onclick="deleteSong(${index})">Eliminar</button>
          </td>
      `;
      songsList.appendChild(row);

      // Agregamos las canciones a la lista de canciones agregadas en la página principal
      const songItem = document.createElement('li');
      songItem.textContent = `${song.name} - ${song.artist}`;
      addedSongsList.appendChild(songItem);
  });
}

// Función para agregar una nueva canción
function addSong() {
  const songName = document.getElementById('songName').value;
  const artistName = document.getElementById('artistName').value;

  const songs = JSON.parse(localStorage.getItem('songs')) || [];
  songs.push({ name: songName, artist: artistName });
  localStorage.setItem('songs', JSON.stringify(songs));

  loadSongs(); // Actualizamos la lista de canciones en la página
  document.getElementById('songName').value = '';
  document.getElementById('artistName').value = '';
}

// Función para eliminar una canción
function deleteSong(index) {
  const songs = JSON.parse(localStorage.getItem('songs')) || [];
  songs.splice(index, 1);
  localStorage.setItem('songs', JSON.stringify(songs));

  loadSongs(); // Actualizamos la lista de canciones en la página
}

// Función para cerrar sesión
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = '/Proyectos/Proyecto 2/pages/login.html'; // Redirecciona de vuelta a la página de inicio de sesión
}

// Verificar si el usuario está autenticado
const currentUser = getCurrentUser();
if (!currentUser || currentUser.role !== 'admin') {
  // Si el usuario no está autenticado o no es un administrador, redirige a la página de inicio de sesión
  window.location.href = '/Proyectos/Proyecto 2/pages/login.html';
} else {
  // Cargar las canciones y mostrar la página de administración
  loadSongs();
}

/* Datos de las canciones en formato JSON
let songsData = [
    { id: 1, nombre: 'LALA', artista: 'Myke Towers' },
    { id: 2, nombre: 'Dispara', artista: 'Milo j & Nicky Nicole' },
    { id: 3, nombre: 'Columbia', artista: 'Quevedo' }
  ];
  
  function mostrarCanciones() {
    const songsList = document.querySelector('.songs-list');
    songsList.innerHTML = '';
  
    songsData.forEach((song) => {
      const songElement = document.createElement('div');
      songElement.classList.add('song');
      songElement.innerHTML = `
        <span>${song.id}</span>
        <span>${song.nombre}</span>
        <span>${song.artista}</span>
        <button onclick="editarCancion(${song.id})">Editar</button>
        <button onclick="eliminarCancion(${song.id})">Eliminar</button>
      `;
      songsList.appendChild(songElement);
    });
  }
  
  function agregarCancion() {
    const id = Number(document.getElementById('id').value);
    const nombre = document.getElementById('nombre').value;
    const artista = document.getElementById('artista').value;
  
    if (id && nombre && artista) {
      const nuevaCancion = { id, nombre, artista };
      songsData.push(nuevaCancion);
      mostrarCanciones();
      limpiarCampos();
    }
  }
  
  function editarCancion(id) {
    const cancion = songsData.find((song) => song.id === id);
    if (cancion) {
      document.getElementById('id').value = cancion.id;
      document.getElementById('nombre').value = cancion.nombre;
      document.getElementById('artista').value = cancion.artista;
    }
  }
  
  function eliminarCancion(id) {
    songsData = songsData.filter((song) => song.id !== id);
    mostrarCanciones();
    limpiarCampos();
  }
  
  function limpiarCampos() {
    document.getElementById('id').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('artista').value = '';
  }
  
  function buscarCancion() {
    const buscarTexto = document.getElementById('buscar').value.toLowerCase();
    const cancionesFiltradas = songsData.filter(
      (song) =>
        song.nombre.toLowerCase().includes(buscarTexto) ||
        song.artista.toLowerCase().includes(buscarTexto)
    );
    mostrarCancionesFiltradas(cancionesFiltradas);
  }
  
  function mostrarCancionesFiltradas(canciones) {
    const songsList = document.querySelector('.songs-list');
    songsList.innerHTML = '';
  
    canciones.forEach((song) => {
      const songElement = document.createElement('div');
      songElement.classList.add('song');
      songElement.innerHTML = `
        <span>${song.id}</span>
        <span>${song.nombre}</span>
        <span>${song.artista}</span>
        <button onclick="editarCancion(${song.id})">Editar</button>
        <button onclick="eliminarCancion(${song.id})">Eliminar</button>
      `;
      songsList.appendChild(songElement);
    });
  }
  
  document.getElementById('agregarBtn').addEventListener('click', agregarCancion);
  document.getElementById('buscar').addEventListener('input', buscarCancion);
  
  mostrarCanciones();
  
  
  
  */