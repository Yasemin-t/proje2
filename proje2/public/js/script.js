const pTotalAmount = document.getElementById("total-amount");
let count = 0;
let total = 0;
let totalAmount = 0;
const satistamamla = document.getElementById("geneltoplam");
let products_name = [
  {id: 0, title: "BlackBerry", price: 869},
  {id: 1, title: "Görüntülü Konuşmalı Akıllı Saat Xee-Kids", price: 2999},
  {id: 2, title: "HP Pavilion Gaming", price: 21499},
  {id: 3, title: "VESTEL 139 Ekran Uydu Alıcılı Ultra HD", price: 7699},
  {id: 4, title: "Otomatik Kahve Ve Espresso Makinesi", price: 7499},
  {id: 5, title: "Samsung Mikrodalga Fırın", price: 1689},
];

// sepet ekleme
let basket = [];
function add(productId) {
  let product = products_name.find((product) => product.id === productId);
  basket.push(product);
  let amount = basket.filter((product) => product.id === productId).length;
  urun_listele(productId, amount);
}
// ürün listeleme
function urun_listele(productId, amount) {
  const product = products_name.find((product) => product.id === productId);
  const productEl = document.getElementById(product.id);

  if (amount > 1 && productEl != undefined) {
    productEl.getElementsByClassName("amount")[0].textContent = amount;
    productEl.getElementsByClassName("total")[0].textContent =
      product.price * amount;
    totalAmount += product.price;
    console.log(productEl);
  } else {
    const td = ` 
                    <td class="product-id">${product.id}</td>
                    <td class="product">${product.title}</td>
                    <td class="piece">${product.price}</td> 
                    <td class="amount">${amount}</td> 
                    <td class="total">${product.price}</td> 
                     <td><button class="btn btn-outline-danger" onclick="deleteproduct(event)">Sil</button>
  `;
    const tr = document.createElement("tr");
    tr.id = product.id;
    tr.innerHTML = td;
    document.getElementById("table-urunler").appendChild(tr);
    totalAmount += product.price;
  }

  // genel tutarın hesaplanması

  pTotalAmount.innerText = totalAmount;
}
// ürün sil
function deleteproduct(event) {
  const oge = event.target.closest("tr");
  // newbasket adında bir dizi oluşturdum.ForEach döngüsü oluşturarak çıkarmak istediğim ürünü çıkarıyorum boolean oluşturarak.Çıkarmadığım ürünleri de new basket içine ekliyorum.
  let cikardim = false;
  let newBasket = [];
  basket.forEach((val, index) => {
    if (val.id == oge.id && !cikardim) {
      cikardim = true;
    } else {
      newBasket.push(val);
    }
  });
  basket = newBasket;
  if (oge.getElementsByTagName("td")[3].innerHTML > 1) {
    oge.getElementsByTagName("td")[3].innerHTML--;
    // toplam azaltma

    oge.getElementsByTagName("td")[4].innerHTML =
      oge.getElementsByTagName("td")[4].innerHTML -
      oge.getElementsByTagName("td")[2].innerHTML;
    // genel toplam azaltma
    document.getElementById("total-amount").innerHTML =
      document.getElementById("total-amount").innerHTML -
      oge.getElementsByTagName("td")[2].innerHTML;
  } else {
    basket = basket.filter((val) => basket.id != oge.id);

    oge.getElementsByTagName("td")[3].innerHTML == 1;
    event.target.closest("tr").remove();
  }
}
document.getElementById("no-product").classList.remove("d-none");

// function product(event) {
totalAmount;
// }
