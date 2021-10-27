var data = localStorage.getItem("bonhotam");
if(data) {
  var convert = JSON.parse(data);
  const renderProductsList = () => { 
    const $cart_product = document.querySelector("tbody");
    Object.keys(convert).map((key, index) =>{ 
      const $tr = document.createElement('tr');
      $cart_product.appendChild($tr);
  
      const $tdImg = document.createElement("td");
      $tr.appendChild($tdImg);
  
      const $img = document.createElement("img");
      $img.classList.add("cart-img");
      $img.setAttribute("alt", "image-product");
      $img.setAttribute("src", convert[key]['img']);
      $tdImg.appendChild($img);
  
      const $tdInfo = document.createElement("td");
      $tr.appendChild($tdInfo);
  
      const $div = document.createElement("div");
      $div.classList.add("cart-product-info");
      $tdInfo.appendChild($div);

      const $h3 = document.createElement("h3");
      $h3.classList.add("cart-product-name");
      $h3.innerHTML= convert[key]['name'];
      $div.appendChild($h3);

      const $p = document.createElement("p");
      $p.classList.add("cart-product-id");
      $p.innerHTML= convert[key]['id'];
      $div.appendChild($p);

      const $tdColor = document.createElement("td");
      $tdColor.innerHTML= convert[key]['color'];
      $tr.appendChild($tdColor);

      const $tdSize = document.createElement("td");
      $tdSize.innerHTML= convert[key]['size'];
      $tr.appendChild($tdSize);
      
      const $tdQty = document.createElement("td");
      $tdQty.classList.add("cart-product-amount");
      $tr.appendChild($tdQty);
      const $div2 = document.createElement("div");
      $div2.classList.add("amount");
      $tdQty.appendChild($div2);
      const $buttonIcre = document.createElement("button");
      $buttonIcre.innerHTML= "+";
      $buttonIcre.classList.add("btn-increase");
      $buttonIcre.setAttribute("onclick", "increment_qty("+convert[key]['id']+")");
      $div2.appendChild($buttonIcre);
      const $input = document.createElement("input");
      $input.classList.add("input-amount");
      $input.value = convert[key]['quantity'];
      $div2.appendChild($input);
      const $buttonDecre = document.createElement("button");
      $buttonDecre.innerHTML= "-";
      $buttonDecre.classList.add("btn-decrease");
      $buttonDecre.setAttribute("onclick", "decrement_qty("+convert[key]['id']+")");
      $div2.appendChild($buttonDecre);
      

      const $tdPrice = document.createElement("td");
      $tdPrice.innerHTML= convert[key]['price'];
      $tr.appendChild($tdPrice);

      const $tdButton = document.createElement("td");
      $tr.appendChild($tdButton);

      const $button = document.createElement("button");
      $button.classList.add("btn-remove");
      $button.setAttribute("onclick", "remove_cart("+convert[key]['id']+")")
      $button.innerHTML ="X"
      $tdButton.appendChild($button);
    })
  }

  renderProductsList();
}
function increment_qty(id) {
  for (let i=0; i< convert.length; i++) {
    if (convert[i].id == id) {
      convert[i].quantity = convert[i].quantity + 1;
    }
  }
  localStorage.setItem("bonhotam", JSON.stringify(convert));
}

function decrement_qty(id) {
  for (let i=0; i<convert.length; i++) {
    if (convert[i].id == id) {
      convert[i].quantity = convert[i].quantity - 1;
      if(convert[i].quantity == 0) {
        remove_cart(convert[i].id);
      }
    }
  }
  localStorage.setItem("bonhotam", JSON.stringify(convert));
}

function remove_cart(id) {
  convert = convert.filter(product => product.id != id);
  localStorage.setItem("bonhotam", JSON.stringify(convert));
}
