var film=new Vue({
    el: '#film',
    data:{
        selectedVariant: 0, /*inizialmente sto sul film 0*/     /*ricordo che gli array partono da 0 */
        pellicola:[
            {id:0, titolo: '1917', descrizione: 'Due giovani soldati britannici affrontano i momenti più crudeli della Prima Guerra Mondiale quando intraprendono una pericolosa missione per salvare 1.600 uomini da morte certa.',
                trailer: 'https://www.youtube.com/embed/gZjQROMAh_s', locandina: "img/1917-playbill.jpg" },
            {id:1, titolo: 'Parasite', descrizione: 'Ki woo viene da una famiglia povera e, tuttavia, molto unita. Quando un suo amico gli propone di sostituirlo come tutore del figlio di un ricco magnate, il ragazzo riesce a procurare un lavoro anche alla sorella usando la propria arguzia.', 
                trailer: 'https://www.youtube.com/embed/5xH0HfJHsaY', locandina: "img/parasite-playbill.jpg"},
            {id:2, titolo: '1918', descrizione: 'film di guerra ma più peggio', trailer: 'https://www.youtube.com/embed/cWzIEz9wxBg', locandina: "img/1917-playbill.jpg"},
            {id:3, titolo: '1918', descrizione: 'film di guerra ma più peggio', trailer: 'https://www.youtube.com/embed/cWzIEz9wxBg', locandina: "img/1917-playbill.jpg"},
            {id:4, titolo: '1918', descrizione: 'film di guerra ma più peggio', trailer: 'https://www.youtube.com/embed/cWzIEz9wxBg', locandina: "img/1917-playbill.jpg"},
            {id:5, titolo: '1918', descrizione: 'film di guerra ma più peggio', trailer: 'https://www.youtube.com/embed/cWzIEz9wxBg', locandina: "img/1917-playbill.jpg"},
            {id:6, titolo: '1918', descrizione: 'film di guerra ma più peggio', trailer: 'https://www.youtube.com/embed/cWzIEz9wxBg', locandina: "img/1917-playbill.jpg"},
            {id:7, titolo: '1918', descrizione: 'film di guerra ma più peggio', trailer: 'https://www.youtube.com/embed/cWzIEz9wxBg', locandina: "img/1917-playbill.jpg"}
        ]

    },
    methods:{
        updatePellicola: function(i){
            this.selectedVariant=i;
        },

        locandinaFilm: function(i) {
            return this.pellicola[i].locandina;
        }
    },

    computed:{
        trailer: function() {
            return this.pellicola[this.selectedVariant].trailer;
        },
        nomeFilm: function() {
            return this.pellicola[this.selectedVariant].titolo;
        },
        descrizioneFilm: function() {
            return this.pellicola[this.selectedVariant].descrizione;
        },
    }

    /*methods:{
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
    }*/
});