const products = [
    {
        "badges": {
            "discount": "Save Rs 3000",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/w100_omen_laptops_desktop_hover_v5.webp",
            "alt": "Laptop image"
        },
        "price": "Rs 1,00,000",
        "oldPrice": "Rs 1,20,000",
        "title": "HP ProBook 635 Aero G7 (Ryzen 5 4000 Series) 16GB / 512GB SSD / 13.3\" FHD / Fingerprint / Silver",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 2500",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/2.webp",
            "alt": "Laptop image"
        },
        "price": "Rs 85,000",
        "oldPrice": "Rs 87,500",
        "title": "Dell Inspiron 5510 (Intel i5 11th Gen) 8GB / 512GB SSD / 15.6\" FHD / Silver",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 4000",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/3.jpeg",
            "alt": "Laptop image"
        },
        "price": "Rs 1,20,000",
        "oldPrice": "Rs 1,24,000",
        "title": "Lenovo ThinkPad X1 Carbon Gen 9 (Intel i7 11th Gen) 16GB / 1TB SSD / 14\" FHD / Black",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 1500",
            "stock": "Out of Stock"
        },
        "image": {
            "src": "images/4.jpg",
            "alt": "Laptop image"
        },
        "price": "Rs 60,000",
        "oldPrice": "Rs 61,500",
        "title": "Acer Aspire 5 (Intel i3 11th Gen) 8GB / 256GB SSD / 15.6\" FHD / Silver",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 5000",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/5.webp",
            "alt": "Laptop image"
        },
        "price": "Rs 1,50,000",
        "oldPrice": "Rs 1,55,000",
        "title": "Asus ROG Zephyrus G14 (Ryzen 9 5900HS) 16GB / 1TB SSD / 14\" QHD / White",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 2000",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/6.jpeg",
            "alt": "Laptop image"
        },
        "price": "Rs 95,000",
        "oldPrice": "Rs 97,000",
        "title": "HP Pavilion 14 (Intel i5 11th Gen) 8GB / 512GB SSD / 14\" FHD / Blue",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 3500",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/7.jpeg",
            "alt": "Laptop image"
        },
        "price": "Rs 1,10,000",
        "oldPrice": "Rs 1,13,500",
        "title": "Dell XPS 13 (Intel i7 11th Gen) 16GB / 512GB SSD / 13.4\" FHD / Silver",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 1200",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/8.jpeg",
            "alt": "Laptop image"
        },
        "price": "Rs 50,000",
        "oldPrice": "Rs 51,200",
        "title": "Lenovo IdeaPad 3 (Intel i3 11th Gen) 8GB / 256GB SSD / 15.6\" FHD / Grey",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 1800",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/9.jpeg",
            "alt": "Laptop image"
        },
        "price": "Rs 75,000",
        "oldPrice": "Rs 76,800",
        "title": "Acer Swift 3 (Intel i5 11th Gen) 8GB / 512GB SSD / 14\" FHD / Silver",
        "button": "Add to cart"
    },
    {
        "badges": {
            "discount": "Save Rs 2200",
            "stock": "• In Stock"
        },
        "image": {
            "src": "images/10.jpeg",
            "alt": "Laptop image"
        },
        "price": "Rs 1,05,000",
        "oldPrice": "Rs 1,07,200",
        "title": "Asus VivoBook 15 (Intel i7 11th Gen) 16GB / 512GB SSD / 15.6\" FHD / Grey",
        "button": "Add to cart"
    }
];

const reviews = [
    {
        "avatar": "svgs/male-svgrepo-com.svg",
        "name": "Ali Khan",
        "stars": "★★★★★",
        "comment": "Fabulous service by ShopX Store!"
    },
    {
        "avatar": "svgs/female-svgrepo-com.svg",
        "name": "Sara Ahmed",
        "stars": "★★★★☆",
        "comment": "Products arrived on time, very happy with the purchase."
    },
    {
        "avatar": "svgs/male-svgrepo-com.svg",
        "name": "Hamza Ali",
        "stars": "★★★★★",
        "comment": "Great quality and excellent customer support!"
    },
    {
        "avatar": "svgs/female-svgrepo-com.svg",
        "name": "Ayesha Khan",
        "stars": "★★★★☆",
        "comment": "Smooth shopping experience, would recommend to friends."
    },
    {
        "avatar": "svgs/male-svgrepo-com.svg",
        "name": "Usman Riaz",
        "stars": "★★★★★",
        "comment": "Amazing products and fast delivery!"
    },
    {
        "avatar": "svgs/female-svgrepo-com.svg",
        "name": "Fatima Zahra",
        "stars": "★★★☆☆",
        "comment": "Good service but packaging could be better."
    },
    {
        "avatar": "svgs/male-svgrepo-com.svg",
        "name": "Bilal Ahmed",
        "stars": "★★★★★",
        "comment": "Loved the shopping experience and the support team is very helpful."
    },
    {
        "avatar": "svgs/female-svgrepo-com.svg",
        "name": "Hina Iqbal",
        "stars": "★★★★☆",
        "comment": "Products are as described, satisfied with the purchase."
    },
    {
        "avatar": "svgs/male-svgrepo-com.svg",
        "name": "Shahid Malik",
        "stars": "★★★★★",
        "comment": "Excellent service and genuine products!"
    },
    {
        "avatar": "svgs/female-svgrepo-com.svg",
        "name": "Zoya Ali",
        "stars": "★★★★☆",
        "comment": "Fast delivery and easy checkout process. Happy with ShopX!"
    }
];


const reviewsGrid = document.querySelector('.reviews-grid');
if (reviewsGrid) {
    function createReviewCard(review) {
        const card = document.createElement('div');
        card.className = 'review-card';

        const userDiv = document.createElement('div');
        userDiv.className = 'review-user';

        const avatar = document.createElement('img');
        avatar.src = review.avatar;
        avatar.alt = "Avatar";
        avatar.className = 'avatar';

        const nameDiv = document.createElement('div');
        const name = document.createElement('h4');
        name.textContent = review.name;
        nameDiv.appendChild(name);

        userDiv.appendChild(avatar);
        userDiv.appendChild(nameDiv);

        const stars = document.createElement('p');
        stars.className = 'stars small';
        stars.textContent = review.stars;

        const comment = document.createElement('p');
        comment.className = 'comment';
        comment.textContent = review.comment;

        card.appendChild(userDiv);
        card.appendChild(stars);
        card.appendChild(comment);

        return card;
    }

    reviews.forEach(review => {
        const card = createReviewCard(review);
        reviewsGrid.appendChild(card);
    });
}


const productSection = document.querySelector('.product-section');

if (productSection) {
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';

        const badges = document.createElement('div');
        badges.className = 'product-badges';

        const discountBadge = document.createElement('span');
        discountBadge.className = 'badge discount';
        discountBadge.textContent = product.badges.discount;

        const stockBadge = document.createElement('span');
        stockBadge.className = 'badge stock';
        stockBadge.textContent = product.badges.stock;

        badges.appendChild(discountBadge);
        badges.appendChild(stockBadge);

        const imgDiv = document.createElement('div');
        imgDiv.className = 'product-img';

        const img = document.createElement('img');
        img.src = product.image.src;
        img.alt = product.image.alt;

        imgDiv.appendChild(img);

        const info = document.createElement('div');
        info.className = 'product-info';

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = product.price + " ";

        const oldPrice = document.createElement('span');
        oldPrice.className = 'old-price';
        oldPrice.textContent = product.oldPrice;

        price.appendChild(oldPrice);

        const title = document.createElement('p');
        title.className = 'title';
        title.textContent = product.title;

        const button = document.createElement('button');
        button.className = 'add-btn';
        button.textContent = product.button;

        info.appendChild(price);
        info.appendChild(title);
        info.appendChild(button);

        card.appendChild(badges);
        card.appendChild(imgDiv);
        card.appendChild(info);

        return card;
    }

    products.forEach(product => {
        const card = createProductCard(product);
        productSection.appendChild(card);
    });
}


