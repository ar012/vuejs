var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green.jpg",

    altText: "A pair of socks",
    description: "A pair of warm, fuzzy socks",
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",

    inStock: true,
    inventory: 100,
    onSale: true,

    details: ["80% cotton", "20% polyester", "Gender-neutral"],

    variants: [{
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.png"
      }
    ],

    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],

    cart: 0

  },

  methods: {
    addToCart() {
      this.cart += 1;
    },

    removeFromCart() {
      this.cart -= 1
    },

    updateProduct(variantImage) {
      this.image = variantImage;
    }

  }

});