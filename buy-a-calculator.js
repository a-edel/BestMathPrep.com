// Assignment 13 - Abraham Edelstein
Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('calculatorblack', {
   template: `
   <div class="product">
        
      <div class="product-image">
        <img :src="image" />
      </div>

	      <div class="product-info">
	          <br>
	          <h1>{{ product }}</h1>
	          <p v-if="inStock">{{ this.variants[this.selectedVariant].variantQuantity }} Left in Stock</p>
	          <p v-else :class="{ red: !inStock }">Out of Stock</p>
	
	          <product-details :details="details"></product-details>          
	          
	          <button class="button btn" v-on:click="addToCart" 
	            :disabled="!inStock"
	            :class="{ disabledButton: !inStock }"
	            >
	          +
	          </button>
	          
	          <button class="button btn" v-on:click="removeFromCart" 
	            :disabled="emptyCart"
	            :class="{ disabledButton: emptyCart }"
	            >
	          &minus;
	          </button> 
	       </div>  
    
    </div>
   `,
  data() {
    return {
        product: 'Calculator-Black',
        selectedVariant: 0,
        details: ['Graphing Calculator', 'Battery Operated'],
        variants: [
          {
            variantImage:  'calculator-black.JPG',
            variantQuantity: 10     
          }
        ],        
        itemCart: 0
    }
  },
    methods: {
      addToCart: function() {
      	  this.itemCart+=1,
          this.$emit('add-to-cart'),         
          this.variants[this.selectedVariant].variantQuantity-=1
      },
      removeFromCart: function() {
      	  this.itemCart-=1,
      	  this.$emit('remove-from-cart'),
      	  this.variants[this.selectedVariant].variantQuantity+=1
      }
    },
    computed: {
        title() {
            return this.product  
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        emptyCart() {
        	return this.itemCart==0
        }              
    }
})

Vue.component('calculatorwhite', {
  template: `
   <div class="product">
        
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
          <br>
          <h1>{{ product }}</h1>
          <p v-if="inStock">{{ this.variants[this.selectedVariant].variantQuantity }} Left in Stock</p>
          <p v-else :class="{ red: !inStock }">Out of Stock</p>

          <product-details :details="details"></product-details>

          <button class="button btn" v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
          +
          </button>
          
          <button class="button btn" v-on:click="removeFromCart" 
            :disabled="emptyCart"
            :class="{ disabledButton: emptyCart }"
            >
          &minus;
          </button>

          

       </div>  
    
    </div>
   `,
  data() {
    return {
        product: 'Calculator-White',
        selectedVariant: 0,
        details: ['Graphing Calculator', 'Battery Operated'],
        variants: [
          {
            variantImage:  'calculator-white.JPG',
            variantQuantity: 10     
          }
        ],        
        itemCart: 0
    }
  },
    methods: {
      addToCart: function() {
      	  this.itemCart+=1,
          this.$emit('add-to-cart'),          
          this.variants[this.selectedVariant].variantQuantity-=1
      },
      removeFromCart: function() {
      	  this.itemCart-=1,
      	  this.$emit('remove-from-cart'),
      	  this.variants[this.selectedVariant].variantQuantity+=1
      }
    },
    computed: {
        title() {
            return this.product  
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        emptyCart() {
        	return this.itemCart==0
        }                      
    }
})

var app = new Vue({
    el: '#app',
    data: {
      rating: ' ',
      cart: 0
    },
    methods: {
    	increaseCart() {
    		this.cart += 1
    	},
    	decreaseCart() {
    		this.cart -= 1
    	}                              
    }
})
