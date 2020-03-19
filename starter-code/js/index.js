// ITERATION 1
let totalPrice = 0;
function updateSubtotal($product) {
  let price = +$product.querySelector('.price').querySelector('span').innerHTML;
  let quantity = +$product.querySelector('.quantity').querySelector('input').value;
  let subTotal = $product.querySelector('.subtotal');
  subTotal.innerHTML = `$ ${price * quantity}`
  totalPrice += price * quantity
}

function calculateAll() {
  totalPrice = 0;
  // ITERATION 2
  const $singleProduct = document.getElementsByClassName('product');
  for (let i = 0; i < $singleProduct.length; i++) {
    updateSubtotal($singleProduct[i]);
  }
  // ITERATION 3
  const total = document.getElementById('total-value').querySelector('span')
  total.innerHTML = totalPrice
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4
function deleteButton(){
  const removeItems = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeItems.length; i++){
    removeItems[i].onclick = productRemoveListener;
  }
}
function productRemoveListener(event) {
  const price = document.querySelector('tbody');
  price.removeChild(event.target.parentNode.parentNode);
}

// ITERATION 5

function createProduct(event) {
  const tBody = document.querySelector('tbody');
  const tr = event.target.parentNode.parentNode;
  const inputs = tr.getElementsByTagName('input');
  let productName = inputs[0].value;
  let productPrice = inputs[1].value;
  const trProduct = document.createElement('tr')
  trProduct.classList.add('product')
  const tdProduct = document.createElement('td')
  tdProduct.classList.add('name')
  const spanProduct = document.createElement('span')
  spanProduct.innerHTML = productName
  tdProduct.appendChild( spanProduct )
  trProduct.appendChild( tdProduct )
  const tdPrice = document.createElement('td')
  const dollarSign = document.createElement('strong')
  dollarSign.innerHTML = '$'
  tdPrice.appendChild(dollarSign)
  const spanPrice = document.createElement('span')
  spanPrice.innerHTML = productPrice
  tdPrice.appendChild(spanPrice)
  tdPrice.classList.add('price')
  trProduct.appendChild(tdPrice)
  const tdQuantity = document.createElement('td')
  const inputQuantity = document.createElement('input')
  inputQuantity.type  = 'number'
  inputQuantity.value = 0
  inputQuantity.min   = 0
  inputQuantity.placeholder = "Quantity"
  tdQuantity.appendChild(inputQuantity)
  tdQuantity.classList.add('quantity')
  trProduct.appendChild(tdQuantity)
  const tdSubtotal = document.createElement('td')
  const spanSubtotal = document.createElement('span')
  tdSubtotal.classList.add('subtotal')
  spanSubtotal.innerHTML = 0
  tdSubtotal.appendChild(spanSubtotal)
  trProduct.appendChild( tdSubtotal )
  const tdAction = document.createElement('td')
  const button   = document.createElement('button')
  button.classList.add('btn')
  button.classList.add('btn-remove')
  button.innerHTML = 'Remove'
  tdAction.appendChild( button )
  tdAction.classList.add('action')
  trProduct.appendChild( tdAction )
  tBody.appendChild(trProduct)
  console.log( productName, productPrice);
  inputs[0].value = ''
  inputs[1].value = 0
  deleteButton();
}

const create = document.getElementById('create');
create.addEventListener('click', createProduct);