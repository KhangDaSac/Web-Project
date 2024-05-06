let listRooms = [
  {
    onclick: "Connecting",
    img: "../images/room/room-5.jpg",
    price: "900.000VND",
    title: "Phòng Connecting",
    bed: 2,
    numPerson: 2,
  },
  {
    onclick: "Deluxe",
    img: "../images/room/room-1.jpg",
    price: "300.000VND",
    title: "Phòng Deluxe hướng thành phố",
    bed: 1,
    numPerson: 2,
  },
  {
    onclick: "Senior",
    img: "../images/room/room-2.jpg",
    price: "400.000VND",
    title: "Phòng Senior De. Hướng thành phố",
    bed: 2,
    numPerson: 3,
  },
  {
    onclick: "SuiteTriple",
    img: "../images/room/room-3.jpg",
    price: "500.000VND",
    title: "Phòng Suite Triple có Ban công",
    bed: 1,
    numPerson: 2,
  },
  {
    onclick: "FamilySuite",
    img: "../images/room/room-4.jpg",
    price: "600.000VND",
    title: "Phòng Family Suite có ban công",
    bed: 1,
    numPerson: 2,
  },
];

let priceRequire = +localStorage.getItem("price");
let numPerson = +localStorage.getItem("numPerson");

localStorage.removeItem("price");
localStorage.removeItem("numPerson");

let temp = [];
listRooms.forEach((room) => {
  let price = parseInt(room.price.replace(/\D/g, ""));
  if (
    price <= priceRequire &&
    price >= priceRequire - 200000 &&
    room.numPerson >= numPerson
  ) {
    temp.push(room);
  }
});

if (temp.length == 0) {
  temp = listRooms;
}

let rooms = $("#rooms");

temp.forEach(room => {
  rooms.append(`
  <div class="col-md-4 rooms-item">
    <div class="inner">
        <figure class="image">
            <a href="#" onclick="${room.onclick}()">
                <div class="coverimg">
                    <img src="${room.img}" alt="">
                </div>
            </a>
            <div class="price">
                <span class="price-head">Từ</span>
                <span class="price-value">${room.price}</span>
                <span class="price-tail">/ Đêm</span>
            </div>
        </figure>
        <div class="content">
            <h3 class="room-title">
                <a href="#" onclick="${room.onclick}()">
                    ${room.title}
                </a>
            </h3>
            <div class="infor-wrap">
                <div class="infor-item">
                    <i class="fa-solid fa-bed"></i>
                    <span>
                        ${room.bed} Giường
                    </span>
                </div>
                <div class="infor-item">
                    <i class="fa-solid fa-users"></i>
                    <span>
                        ${room.numPerson} khách
                    </span>
                </div>
            </div>
            <a href="#" class="book-now" onclick="${room.onclick}()">
                đọc thêm <i class="fa-solid fa-chevron-right"></i>
            </a>
        </div>
    </div>
</div>
  `);
});
