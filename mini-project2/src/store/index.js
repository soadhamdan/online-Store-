import { createStore } from 'vuex';

export default createStore({
    state: {
        shownItem: "form",
        min: 0,
        max: 99999,
        selectedTab: 'elect',
        cart: [],
        posts: [
            { name: "User1", age: 20, title: "Title 1", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium." },
            { name: "User2", age: 25, title: "Title 2", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium." }
        ],
        selectedType: "",

        electronics: [
            { name: "Dell", img: "photos/e1.jpeg", price: 18000, descr: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, excepturi.", type: "laptop" },
            { name: "Toshiba", img: "photos/e2.jpeg", price: 20000, descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi!", type: "laptop" },
            { name: "Mac", img: "photos/e3.jpeg", price: 25000, descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, tempora?", type: "laptop" },
            { name: "HP", img: "photos/e4.png", price: 18000, descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illum?", type: "laptop" },
            { name: "Galaxy s20", img: "photos/e5.jpeg", price: 10000, descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, accusamus.", type: "phone" },
            { name: "IPhone 12", img: "photos/e6.jpeg", price: 15000, descr: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, autem!", type: "phone" },
            { name: "Mouse", img: "photos/e7.jpeg", price: 5000, descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eligendi.", type: "accessories" },
            { name: "Muse Brain", img: "photos/e8.jpeg", price: 8000, descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, iusto. ", type: "accessories" }
        ],

        selectedMenu: "",
        minf: 0,
        maxf: 99999,
        products: [
            { "name": "Pizza", "img": "photos/f1.jpeg", "price": 800, "Menu": "Dishes", "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, nobis?" },
            { "name": "Belgian Waffle ", "img": "photos/f2.jpeg", "price": 2000, "Menu": "Desserts", "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, sit." },
            { "name": "Sharma", "img": "photos/f3.jpeg", "price": 2200, "Menu": "Dishes", "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quaerat." },
            { "name": "Pan Ciack", "img": "photos/f4.jpeg", "price": 9000, "Menu": "Desserts", "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, inventore." },
            { "name": "Icecream", "img": "photos/f6.jpeg", "price": 9950, "Menu": "Desserts", "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, veniam." },
            { "name": "Macaronit", "img": "photos/f7.jpeg", "price": 8000, "Menu": "Dishes", "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nulla." },
            { "name": "Cacke", "img": "photos/f5.jpeg", "price": 5000, "Menu": "Desserts", "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ipsa." },
            { "name": "Sandwich Meat p40", "img": "photos/f8.jpeg", "price": 6000, "Menu": "Dishes", "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto." },
        ],
        selectedBrand: "",
        minc: 0,
        maxc: 99999,
        clothes: [
            { "name": "Luxury", "img": "photos/c2.jpeg", "price": 1000, "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto.", "Brand": "Luxury" },
            { "name": "Max", "img": "photos/c3.jpeg", "price": 7000, "descr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto.", "Brand": "Max" },
            { "name": "Part Antonto", "img": "photos/c4.jpeg", "price": 9000, "descr": "Dishes Lorem ipsum dolor, consectetur adipisici excepturi.", "Brand": "Part Antonto" },
            { "name": "Luxury", "img": "photos/c6.jpeg", "price": 2000, "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, excepturi.", "Brand": "Luxury" },
            { "name": "Max", "img": "photos/c7.jpeg", "price": 5000, "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, excepturi., iusto.", "Brand": "Max" },
            { "name": "Part Antonto", "img": "photos/c5.jpeg", "price": 10000, "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, excepturi.", "Brand": "Part Antonto" },
            { "name": "Luxury", "img": "photos/c8.png", "price": 3000, "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, excepturi.", "Brand": "Luxury" },
            { "name": "Max", "img": "photos/c1.jpeg", "price": 6000, "descr": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, excepturi.", "Brand": "Max" }
        ]

    },
    getters: {
        filterdElectronics(state) {
            return state.electronics.filter(item => {
                return item.price >= state.min && item.price <= state.max && item.type.includes(state.selectedType)
            })
        },
        filteredProducts(state) {
            return state.products.filter(product => {
                return product.price >= state.minf && product.price < state.maxf && product.Menu.includes(state.selectedMenu)
            })
        },
        filterclothes(state) {
            return state.clothes.filter(productc => {
                return productc.price >= state.minc && productc.price < state.maxc && productc.Brand.includes(state.selectedBrand)
            })
        },

        totalBill(state) {
            return state.cart.reduce((a, b) => a + b.qty * b.price, 0)
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})