function render(array){
    let cetak = document.getElementById("render")
    
    cetak.innerHTML = ""
   
    for(let i = 0; i < array.length; i++){
       let {id, judul, imgCover, rating, genres, aired} = array[i]
   
       cetak.innerHTML += `<div class="card rounded" style="width: 18rem;">
       <div class="img rounded">
       <img src="${imgCover}" class="card-img-top" alt="...">
       </div>
       <div class="card-body">
         <h3>${judul}</h3>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <div class="text-center">
         <a href="#" class="btn d-flex justify-content-center">Read</a>
       </div>
       </div>
     </div>`
   
    }
   }
   
   render(komikList)
   