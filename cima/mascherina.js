var app=new Vue({
    el: '#app',
    data:{
        cart: 0,
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
        ]


    },
    methods:{
        updateProduct: function(i){
            this.selectedVariant=i;
        },
        addToCart: function(){
            this.cart=this.cart+1;
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
});