const fetchProductList = async (productName) => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`,
  );
  const data = await response.json();
  return data.results;
};

const fetchItemDataById = async (idName) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${idName}`);
  const itemData = await response.json();
  return itemData;
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
}

const addElementToItems = async (productName) => {
  const data = await fetchProductList(productName);
  data.forEach(({ id, title, thumbnail }) => {
    const element = createProductItemElement({
      sku: id,
      name: title,
      image: thumbnail,
    });
    const sectionItems = document.querySelector('.items');
    sectionItems.appendChild(element);
  });
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(e) {
  e.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addElementToCart = async (e) => {
  const idName = getSkuFromProductItem(e.target.parentNode);
  const data = await fetchItemDataById(idName);
  const { id, title, price } = data;
  
  const cartElement = createCartItemElement({
    sku: id,
    name: title,
    salePrice: price,
  });
  
  const cartItems = document.querySelector('.cart__items');
  cartItems.appendChild(cartElement);
};

const onClickItem = () => {
  const addCartButtons = document.querySelectorAll('.item__add');
  addCartButtons.forEach((btn) => {
    btn.addEventListener('click', addElementToCart);
  });
};

window.onload = function onload() {
  addElementToItems('computer').then(() => onClickItem());
};
