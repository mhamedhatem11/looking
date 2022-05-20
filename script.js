const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'Dune',
        "price": '25'
    },
    2: {
        "name": 'science',
        "price": '30'
    },
    3: {
        "name": 'Pluta',
        "price": '40'
    },
    4: {
        "name": 'Multivrese',
        "price": '50'
    },
    5: {
        "name": 'The Amazing teen braen',
        "price": '30'
    },
    6: {
        "name": 'Most Admird',
        "price": '70'
    },
    7: {
        "name": 'Cosmos',
        "price": '15'
    },
    8: {
        "name": 'New Scinetist',
        "price": '15'
    },
    9: {
        "name": 'Modren Across',
        "price": '10.5'
    },
    10: {
        "name": 'Roda track',
        "price": '25'
    },
    11: {
        "name": 'Stories',
        "price": '20.5'
    },
    12: {
        "name": 'Conde Nast Traveler  ',
        "price": '45'
    },
    13: {
        "name": 'The smarter Home',
        "price": '13.45'
    },
    14: {
        "name": 'My Steries In Time',
        "price": '33'
    },
    15: {
        "name": 'Nature',
        "price": '20'
    },
    16: {
        "name": 'Living',
        "price": '25'
    },
    17: {
        "name": 'Wild Pets',
        "price": '77$'
    },
    18: {
        "name": 'Car Driver',
        "price": '50$'
    },
    19: {
        "name": 'Economic Business',
        "price": '50'
    },
    20: {
        "name": 'Smithhsonian',
        "price": '0.0'
    }
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">$${products[x].price}</span>`
    const result = products[x].name + " " + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is $${total}`;
}