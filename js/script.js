function addToCart(event) {
  alert("Item foi adicionado ao carrinho");
  
  const card = event.target.closest('.card');

  const productName = card.querySelector('.card-name').textContent;
  const productPrice = card.querySelector('.real').textContent;
  const productImage = card.querySelector('.produto').src;

  const productData = {
    name: productName,
    price: productPrice,
    image: productImage
  };

  
  const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
  cartProducts.push(productData);


  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

  window.location.href = 'compras.html';
}

function loadCart() {
  const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

  if (cartProducts) {

    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    cartProducts.forEach((product) => {

      const listItem = document.createElement('li');
      listItem.classList.add('lista-nova');
      
      const productInfo = document.createElement('div');
      productInfo.classList.add('div-nova');
      productInfo.className = 'product-info';

      const productImage = document.createElement('img');
      productImage.classList.add('img-nova');
      productImage.src = product.image;
      productImage.alt = 'imagem do produto';
      productInfo.appendChild(productImage);

      const productName = document.createElement('p');
      productName.classList.add('nome-novo');
      productName.textContent = product.name;

      const productPrice = document.createElement('p');
      productPrice.classList.add('preco-novo');
      productPrice.textContent = product.price;

      const buttonGroup = document.createElement('div');
      buttonGroup.classList.add('botao-novo');
      buttonGroup.className = 'button-group';

      const decreaseBtn = document.createElement('button');
      decreaseBtn.textContent = '-';
      decreaseBtn.classList.add('decrease-novo');

      const itemQnt = document.createElement('input');
      itemQnt.classList.add('input-novo');
      itemQnt.type = 'number';
      itemQnt.min = '1';
      itemQnt.max = '100';
      itemQnt.value = '1';
      itemQnt.readOnly = true;

      const increaseBtn = document.createElement('button');
      increaseBtn.classList.add('increase-novo');
      increaseBtn.textContent = '+';

      const removeText = document.createElement('p');
      removeText.className = 'remove-text';
      removeText.textContent = 'Remover';


      buttonGroup.appendChild(decreaseBtn);
      buttonGroup.appendChild(itemQnt);
      buttonGroup.appendChild(increaseBtn);
      buttonGroup.appendChild(removeText);


      listItem.appendChild(productInfo);
      listItem.appendChild(productName);
      listItem.appendChild(productPrice);
      listItem.appendChild(buttonGroup);
      cartList.appendChild(listItem);
    });
  }
}

window.onload = loadCart;
