Vue.component('mascherina',{

    template:`
    <div class="product">
                <div class="product-image">
                    <img v-bind:src="image" width="100%"/>
                </div>
                <div class="product-info">
                    <h1>Prodotto in vendita: {{ product }}</h1>
                    Descrizione: {{ description }}
                    <p v-if="disp > 10 && onSale">Disponibile</p>
                    <p v-else-if="disp<=10 && disp>0 && onSale" >Ultime scorte!</p>
                    <p v-else>Non Disponibile</p>
                    <ul>
                        <li v-for="x in details">{{ x.text }}</li>
                    </ul>
                    <div v-for= "(x,index) in variants" :key="x.id" class="color-box"
                    v-bind:style="{ backgroundColor: x.htmlColor}">
                        <p v-on:click="updateProduct(index)"> {{ x.color }} </p>
                    </div>
                    <!--
                    <div v-for="(x,index) in variants" :key="x.id" class="color-box" v-bind:style="{backgroundColor: x.htmlColor}">
                        <p v-on: click="updateProduct(index)">{{x.color}}</p>
                    </div>-->
                    <button v-on:click="addToCart()"
                    v-bind:disabled="!onSale || disp==0"
                    v-bind:class="{disabledButton: !onSale || disp==0}">Aggiungi al carrello</button>
    </div>`,
    data: function(){
        return{
            product: 'Mascherina',
        description: 'mascherina chirurgica',
        selectedVariant: 0, /*inizialmente sto sulla mascherina celeste*/
        details:[
            {text: '95% Cotone - 5% Elastan'},
            {text: 'Lavabile e riutilizzabile'},
            {text: 'Utilizzo ad uso civile, non medicale'}
        ],
        variants:[
            {id:2241, color: 'celeste', image: './assets/celeste.png', htmlColor: 'lightBlue', disp:9, onSale:true },
            {id:2242, color: 'nera', image: './assets/nera.png', htmlColor: 'black', disp:11, onSale:false},
            {id:2243, color: 'bianca', image: './assets/bianca.png', htmlColor: 'white', disp:13, onSale:true}
        ],

        };
    },
    methods:{
        updateProduct: function(i){
            this.selectedVariant=i;
        },
        addToCart: function(){
            this.$emit('add-to-cart');
            this.variants[this.selectedVariant].disp=this.variants[this.selectedVariant].disp-1;
        }
    },

    computed:{
        onSale: function() {
            return this.variants[this.selectedVariant].onSale;
        },
        
        disp: function() {
            return this.variants[this.selectedVariant].disp;
        },
        
        image: function() {
            return this.variants[this.selectedVariant].image;
        }
    }




})


var app=new Vue({
    el: '#app',
    data:{
        cart: 0,
    },
    methods:{
        updateCart: function(){
            this.cart+=1;
        }

    }
    
    
});