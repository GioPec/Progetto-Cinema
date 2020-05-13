var film=new Vue({
    el: '#film',
    data:{
        selectedVariant: 0, /*inizialmente sto sul film 0*/     /*ricordo che gli array partono da 0 */
        pellicola:[
            {id:0, titolo: '1917', descrizione: 'Due giovani soldati britannici affrontano i momenti più crudeli della Prima Guerra Mondiale quando intraprendono una pericolosa missione per salvare 1.600 uomini da morte certa.',
                trailer: 'https://www.youtube.com/embed/gZjQROMAh_s', locandina: "img/1917-playbill.jpg" },
            {id:1, titolo: 'Parasite', descrizione: 'Ki woo viene da una famiglia povera e, tuttavia, molto unita. Quando un suo amico gli propone di sostituirlo come tutore del figlio di un ricco magnate, il ragazzo riesce a procurare un lavoro anche alla sorella usando la propria arguzia.', 
                trailer: 'https://www.youtube.com/embed/5xH0HfJHsaY', locandina: "img/parasite-playbill.jpg"},
            /*dovevo*/
            {id:2, titolo: 'Don Matteo', descrizione: 'SPOLETO Secondo alcuni la migliore serie mai vista, girata in una città patrimonio Unesco',
             trailer: 'https://www.youtube.com/embed/3gaHlLJVf3U', 
             locandina: "https://lh3.googleusercontent.com/proxy/Uio-fMRP6qugc--GJ9YJLDM9yTy0O-e-rMiaRRNHKcIknKbmTgT69W5DrXqYwf49yB2TvOm8TuCbBciMI2oeqgNFAi1OKtENw8f5JgL7oHUIst0nUSOzT_iKgseqw5CGUlW165hyqyoqN0P2pK_s2FN_mgkxgBA"},
            {id:3, titolo: '1918', descrizione: 'film di guerra ma più peggio', trailer: 'https://www.youtube.com/embed/cWzIEz9wxBg', locandina: "img/1917-playbill.jpg"},
            {id:4, titolo: 'Don Matteo', descrizione: 'SPOLETO, Don Matteo è un viaggio nella vita e nella società di oggi con lo sguardo irriducibile di un uomo che crede nella possibilità di cambiare.',
             trailer: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FDonMatteoRai%2Fvideos%2F2539180252989434%2F&show_text=0&width=560',
              locandina: "https://www.luxvide.it/wp-content/uploads/2018/01/800x1140_locandina_dm12-1.jpg"},
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
});