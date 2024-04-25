let arrayYangSudahBerubah = null;

function render(array) {
  let listKomik = document.getElementById("render");

  listKomik.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let { id, judul, imgCover, rating, genres, aired } = array[i];

    listKomik.innerHTML += `<div class="card rounded" style="width: 18rem;">
    <div class="img rounded">
    <img id="coverImage" src="${imgCover}" class="card-img-top" alt="...">
    </div>
    <div class="card-body ">
      <div class="judul">
      <h3>${judul}</h3>
      </div>
      <div class="desciption">
      <p class="card-text">Genre: ${genres}</p>
      </div>
      <div class="rating">
      <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-one-stars-rating-png-png-image_10262742.png" alt="">
      </div>
    <div class="d-flex justify-content-evenly jarak">
    <div class="text-center " onclick="editAnime(${id})">
    <a href="#" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" >
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
    </svg>  </a>
    </div>
      <div class="text-center ">
      <a href="#" class="btn btn-outline-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
      </svg></a>
      </div>
      <div class="text-center ">
      <a href="#" class="btn btn-outline-danger delete" data-id="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
        </svg></a>
    </div>
    </div>
  </div>
  </div>`;
  }

  // Menambahkan event listener untuk setiap tombol delete
  let deleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    let button = deleteButtons[i];
    button.addEventListener("click", function () {
      let id = this.getAttribute("data-id");
      deleteKomik(id);
    });
  }
}

render(komikList);

function deleteKomik(id) {
  console.log("Menghapus komik dengan ID:", id);
  let temp = [];

  for (let i = 0; i < komikList.length; i++) {
    if (komikList[i].id !== Number(id)) {
      temp.push(komikList[i]);
    }
  }
  komikList = temp;
  render(komikList);
}

let createButtons = document.querySelectorAll(".add");
for (let i = 0; i < createButtons.length; i++) {
  let button = createButtons[i];
  button.addEventListener("click", function () {
    let id = this.getAttribute("data-id");
    tambahKomik(id);
  });
}

function editAnime(id) {
  console.log(id);
  localStorage.setItem("idEdit", String(id));

  let komikYangDiEdit = {};

  if (arrayYangSudahBerubah === null) {
    for (let i = 0; i < komikList.length; i++) {
      let perKomik = komikList[i];

      let idKomik = perKomik.id;

      if (id === idKomik) {
        komikYangDiEdit = { ...perKomik };
      }
    }
  } else {
    for (let i = 0; i < arrayYangSudahBerubah.length; i++) {
      let perKomik = arrayYangSudahBerubah[i];

      let idKomik = perKomik.id;

      if (id === idKomik) {
        komikYangDiEdit = { ...perKomik };
      }
    }
  }

  let inputJudul = document.getElementById("recipient-name");
  inputJudul.value = komikYangDiEdit.judul;
  let inputDeskrip = document.getElementById("message-text");
  inputDeskrip.value = komikYangDiEdit.genres;
  let inputImg = document.getElementById("coverImage");
  // inputImg = komikYangDiEdit.imgCover;
}

function simpanEdit() {
  let idNow = Number(localStorage.getItem("idEdit"));
  let inputImg = document.getElementById("coverImage");
  // inputImg = komikYangDiEdit.imgCover;

  let inputJudulValue = document.getElementById("recipient-name").value;
  let desciption = document.getElementById("message-text").value;
  let gambar = document.getElementById("basic-url").value;
  console.log(gambar);

  let newArray = [];
  let komikYangDiEdit = {};

  if (arrayYangSudahBerubah === null) {
    for (let i = 0; i < komikList.length; i++) {
      let perKomik = komikList[i];

      let idKomik = perKomik.id;

      if (idNow !== idKomik) {
        newArray.push(perKomik);
      } else {
        komikYangDiEdit = {
          id: perKomik.id,
          judul: inputJudulValue,
          imgCover: gambar,
          rating: perKomik.rating,
          genres: desciption,
          aired: perKomik.aired,
        };

        newArray.push(komikYangDiEdit);
      }
    }
  } else {
    for (let i = 0; i < arrayYangSudahBerubah.length; i++) {
      let perKomik = arrayYangSudahBerubah[i];

      let idKomik = perKomik.id;

      if (idNow !== idKomik) {
        newArray.push(perKomik);
      } else {
        komikYangDiEdit = {
          id: perKomik.id,
          judul: inputJudulValue,
          imgCover: gambar,
          rating: perKomik.rating,
          genres: desciption,
          aired: perKomik.aired,
        };

        newArray.push(komikYangDiEdit);
      }
    }
  }

  arrayYangSudahBerubah = [...newArray];

  render(newArray);
}
