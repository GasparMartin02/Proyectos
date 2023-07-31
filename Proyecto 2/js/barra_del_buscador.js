const ArrayCan = []
const ListaCanciones= JSON.parse(localStorage.getItem('listaUsuario')) || []
if(ListaCanciones.length > 0 ){
  ListaCanciones.forEach((canciones)=>{
    ArrayCan.push(canciones)
  })
}
//este sera el array con la lista de canciones
const ListaDeCanciones= [
  {
    id: 1,
    titulo: 'Un poco de amor Francés',
    grupo:'Patricio Rey y sus Redonditos de Ricota',
    genero:'Rock Nacional',
    delete: false
  },

  {
    id: 2,
    titulo: 'De Música Ligera',
    grupo:'Soda Stereo',
    genero:'Rock Nacional',
    delete: false
  },

  {
    id: 3,
    titulo: 'Campanas en la Noche',
    grupo:'Los Tipitos',
    genero:'Rock Nacional',
    delete: false
  },

  {
    id: 4,
    titulo: 'Reyes de la Noche',
    grupo:'Guasones',
    genero:'Rock Nacional',
    delete: false
  },

  {
    id: 5,
    titulo: 'Nunca Quise',
    grupo:'Intoxicados',
    genero:'Rock Nacional',
    delete: false
  },

  {
    id: 6,
    titulo: 'Arde la Ciudad',
    grupo:'Mancha de Ronaldo',
    genero:'Rock Nacional',
    delete: false
  },

  {
    id: 7,
    titulo: 'Luz',
    grupo:'Ciro y los Persas',
    genero:'Rock Nacional',
    delete: false
  },

  {
    id: 8,
    titulo: 'A las Nueve',
    grupo:'No te va a gustar',
    genero:'Rock Nacional',
    delete: false
  },

  {
    id: 9,
    titulo: 'Flowers',
    grupo:'Miley Cyrus',
    genero:'Pop',
    delete: false
  },

  {
    id: 10,
    titulo: 'Billie Jean',
    grupo:'Michael Jackson',
    genero:'Pop',
    delete: false
  },

  {
    id: 11,
    titulo: 'As It Was',
    grupo:'Harry Styles',
    genero:'Pop',
    delete: false
  },

  {
    id: 12,
    titulo: 'Material Girl',
    grupo:'Madonna',
    genero:'Pop',
    delete: false
  },

  {
    id: 13,
    titulo: 'Don t Start Now',
    grupo:'Dua Lipa',
    genero:'Pop',
    delete: false
  },

  {
    id: 14,
    titulo: 'We Found Love',
    grupo:'Rihanna, Calvin Harris',
    genero:'Pop',
    delete: false
  },

  {
    id: 15,
    titulo: 'Save You Tears',
    grupo:'The Weeknd',
    genero:'Pop',
    delete: false
  },

  {
    id: 16,
    titulo: 'Rolling in the Deep',
    grupo:'Adele',
    genero:'Pop',
    delete: false
  },

  {
    id: 17,
    titulo: 'Doble Vida',
    grupo:'Los Palmeras',
    genero:'Cumbia',
    delete: false
  },

  {
    id: 18,
    titulo: 'Amores como el Nuestro',
    grupo:'Los Charros',
    genero:'Cumbia',
    delete: false
  },

  {
    id: 19,
    titulo: 'La Cumbita',
    grupo:'Tambó Tambó',
    genero:'Cumbia',
    delete: false
  },

  {
    id: 20,
    titulo: 'Iluminará',
    grupo:'La Nueva Luna',
    genero:'Cumbia',
    delete: false
  },

  {
    id: 21,
    titulo: 'Fuiste',
    grupo:'Gilda',
    genero:'Cumbia',
    delete: false
  },

  {
    id: 22,
    titulo: 'La luna y tú',
    grupo:'Rafaga',
    genero:'Cumbia',
    delete: false
  },

  {
    id: 23,
    titulo: 'Una Ráfaga de Amor',
    grupo:'Rafaga',
    genero:'Cumbia',
    delete: false
  },

  {
    id: 24,
    titulo: 'El Perdedor',
    grupo:'Tambó Tambó',
    genero:'Cumbia',
    delete: false
  },

  {
    id: 25,
    titulo: 'Volvé Traidora',
    grupo:'El Potro',
    genero:'Favoritos de Rolling',
    delete: false
  },

  {
    id: 26,
    titulo: 'Entrelazando Barras',
    grupo:'El Maestro',
    genero:'Favoritos de Rolling',
    delete: false
  },

  {
    id: 27,
    titulo: 'DespeJAVA',
    grupo:'nombre desconocido',
    genero:'Favoritos de Rolling',
    delete: false
  },

  {
    id: 28,
    titulo: 'Volvé Traidora 2',
    grupo:'El Potro',
    genero:'Favoritos de Rolling',
    delete: false
  },

]


