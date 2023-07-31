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

