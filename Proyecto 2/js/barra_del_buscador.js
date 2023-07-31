document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".card").forEach(tarjeta =>{

          tarjeta.p.toLowerCase().includes(e.target.value.toLowerCase())
            ?tarjeta.classList.remove("filtro")
            :tarjeta.classList.add("filtro")

      })
  }
})