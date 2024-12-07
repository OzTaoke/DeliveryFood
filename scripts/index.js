const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart');

    const openModal = () => {
        modal.classList.add('open');
    }
    const closeModal = () => {
        modal.classList.remove('open');
    }

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal__overlay') || event.target.closest('.cart-modal__header--close')) {
            closeModal();
        }
    });
}

const restsFunc = () => {
    const restContainer = document.querySelector('#rests-container');
    const restsArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'restaurant-1.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'restaurant-2.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'restaurant-3.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'restaurant-4.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'restaurant-5.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'restaurant-6.jpg'
        },
    ];

    const loading = () => {
        restContainer.innerHTML = '<p style = "width: 100%; text-align: center;">Загрузка..</p>';
    };

    const randerFunc = (array) => {
        restContainer.innerHTML = '';
        array.forEach((card) => {
            restContainer.insertAdjacentHTML('beforeend',
                `
                <a href="./goods.html?id=${card.id}" class="products-card">
                    <div class="products-card__image">
                        <img src="./images/rests/${card.image}" alt="rest">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description--row">
                            <h4 class="products-card__description--title">${card.title}</h4>
                            <div class="products-card__description--badge">${card.time} мин</div>
                        </div>
                        <div class="products-card__description--row">
                            <div class="products-card__description-info">
                                <div class="products-card__description-info--raiting">
                                    <img src="./icons/star.svg" alt="star">
                                    <p>${card.rating}</p>
                                </div>
                                <div class="products-card__description-info--price">
                                    <p>От ${card.price} ₽</p>
                                </div>
                                <div class="products-card__description-info--group">
                                    <p>${card.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                `
            );
        });
    };

    if (restContainer) {
        loading();
        setTimeout(() => {
            randerFunc(restsArray);
        }, 1000);
    };
};

const goodsFunc = () => {
    const goodsContainer = document.querySelector('#goods-container');
    const goodsArray = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            desc: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            btn: 'В корзину',
            price: 250,
            image: 'goods-1.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            desc: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            btn: 'В корзину',
            price: 250,
            image: 'goods-2.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            desc: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий.',
            btn: 'В корзину',
            price: 250,
            image: 'goods-3.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            desc: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь.',
            btn: 'В корзину',
            price: 250,
            image: 'goods-4.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            desc: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг.',
            btn: 'В корзину',
            price: 250,
            image: 'goods-5.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            desc: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы.',
            btn: 'В корзину',
            price: 250,
            image: 'goods-6.jpg'
        },
    ];

    const loading = () => {
        goodsContainer.innerHTML = '<p style = "width: 100%; text-align: center;">Загрузка..</p>';
    };

    const randerFunc = (array) => {
        goodsContainer.innerHTML = '';
        array.forEach((card) => {
            goodsContainer.insertAdjacentHTML('beforeend',
                `
                <div class="products-card">
                    <div class="products-card__image">
                        <img src="./images/goods/${card.image}" alt="goods">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description--row">
                            <h5 class="products-card__description--name">${card.title}</h5>
                        </div>
                        <div class="products-card__description--row">
                            <p class="products-card__description--text">${card.desc}</p>
                        </div>
                        <div class="products-card__description--row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primary">
                                    ${card.btn}
                                    <img src="./icons/cart-white.svg" alt="user">
                                </button>
                                <span class="products-card__description-controls--price">${card.price} ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
            );
        });
    };

    if (goodsContainer) {
        loading();
        setTimeout(() => {
            randerFunc(goodsArray);
        }, 1000);
    };
};

modalFunc();
restsFunc();
goodsFunc();