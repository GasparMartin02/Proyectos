document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
  
        document.querySelectorAll(".title-playlist").forEach(cards =>{
  
            cards.textContent.toLowerCase().includes(e.target.value())
              ?cards.classList.remove("filtro")
              :cards.classList.add("filtro")
        })
  
    }
  
  
  })