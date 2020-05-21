Vue.component('barratop',{
    props:{
        value:{
            type: String,
            required: true
        }
    },
    template:`
    <nav name="top" class="navbar navbar-expand-md navbar-dark fixed-top" style="text-align: center; background-color: #2f3133; box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);">
        
            <!--crea il bottone del menu a tendina quando rimpicciolisco la pagina web-->
          <button class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
               <span class="navbar-toggler-icon"></span>
          </button>
                                               
           <div class="collapse navbar-collapse" id="collapse_target"><!--id deve essere uguale a data-target-->
           
               <ul class="navbar-nav">
                   <li align="left">   <!--Uso semplicemente il tag <li> con dentro un <img> per il logo del cinema-->
                       <img onclick="location.href='homepage.html'" class=" iconahome " src="img/cmp2.png" height="70px"/>
                   </li>
                   <!--
                   <li class="nav-item" style="padding-right: 15px;">
                       <a class="nav-link" href="homepage.html" style="color: white;" >
                       <img class="navbar-brand icona" src="mobiriseicons/30px/svg/mbri-home.svg"/>-->
                       <!--<img class="navbar-brand iconahome" src="img/cmp2.png" height="50px" style=" text-align: center;"/>--><!--
                       </a>
                   </li>-->
                   <li class="nav-item" style="padding-right: 15px;">
                       <a class="nav-link" href="programmazione.html" style="color: white;">Programmazione
                           <img class="navbar-brand icona" src="mobiriseicons/30px/svg/mbri-video-play.svg"/>
                       </a>
                   </li>

                   <li class="nav-item" style="padding-right: 15px;">
                       <a class="nav-link" href="prossimamente.html" style="color: white;">Prossimamente
                           <img class="navbar-brand icona" src="mobiriseicons/30px/svg/mbri-calendar.svg"/>
                       </a>
                   </li>
                   
                   <li class="nav-item" style="padding-right: 15px;">
                       <a class="nav-link" href="contatti.html" style="color: white;">Contatti
                           <img class="navbar-brand icona" src="mobiriseicons/30px/svg/mbri-edit.svg"/>
                       </a>
                   </li>
               </ul>
               <!--creo la seconda unordered list per gli elementi a destra-->
               <ul class="navbar-nav ml-auto"> <!--li allineo a destra grazie a ml-auto-->
                   <li id="top" class="nav-item "style="padding-right: 15px;">

                       <a v-if="value == null" id="usernameInNavbar" class="nav-link" href="paginaLogin/login.html" style="color: white;">Login
                           <img class="navbar-brand icona" src="mobiriseicons/30px/svg/mbri-login.svg"/>
                       </a>
                       <a v-else id="usernameInNavbar" class="nav-link logout" style="color: white;">{{ value }}
                            <img class="navbar-brand icona" src="mobiriseicons/30px/svg/mbri-user.svg"/>
                           <div class="logout-content">
                           <button v-on:click="logoutFunction()" style="position: relative; margin-bottom: 10%; background-color:chocolate; border: none; 
                                box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);"
                                type="button" class="btn right button btn-primary btn-xs">Logout</button>
                           <div>
                       </a>
                   </li>
                   <li class="nav-item ">
                       <a class="nav-link" v-if="value == null">  
                           <img class="navbar-brand icona" src="mobiriseicons/30px/svg/mbri-shopping-cart.svg"/>
                       </a>
                       <a id="iconaCarrello" class="nav-link" v-else href="carrello.html">  
                            <img class="navbar-brand icona" v-on:load="cambiaCarrello()" src="mobiriseicons/30px/svg/mbri-shopping-cart.svg"/>
                       </a>
                   </li>
               </ul>
           
           </div>
        </nav>
    `,
    methods:{
        logoutFunction: function(){
            this.$emit('fai-logout');
            /*this.variants[this.selectedVariant].disp=this.variants[this.selectedVariant].disp-1;*/
        },
        cambiaCarrello: function(){
            this.$emit('cambia-carrello');
        }
    },
})




var top=new Vue({
    el: '#top',
    data:{
        sessione: window.sessionStorage.getItem("nomeUtente")
    },
    
    methods:{
        updateLogin: function(){
            //window.sessionStorage.removeItem("nomeUtente");
            sessionStorage.clear();
            location=location;
            return true;
        },
        updateCarrello: function(){
            if(JSON.parse(sessionStorage.getItem("listaOrdini")).length>0) {
                document.getElementById("iconaCarrello").innerHTML="<img class='navbar-brand icona' v-on:load='cambiaCarrello()' "+
                "style='filter: invert(89%) sepia(20%) saturate(6714%) hue-rotate(1deg) brightness(104%) contrast(109%);'"+
                "src='mobiriseicons/30px/svg/mbri-cart-full.svg'/>";
            }
        }
    }
});

Vue.component('barrasotto',{
    template:`
    <footer name="bottomdiv" style="background-color:chocolate; bottom: 0;">
            <a href="#top" id="navBackToTop">
                <div class="my_div" style="background-color:#2f3133;">Torna su</div>
            </a>
            <div class="my_div">
                Contattaci qui:
                <a href="https://www.facebook.com/" class="btn btn-primary btn-lg, fa fa-facebook" role="button" style="margin: 4px;"></a>
                <a href="https://twitter.com/" class="btn btn-primary btn-lg, fa fa-twitter" role="button" style="margin: 4px;"></a>
                <a href="https://www.instagram.com/" class="btn btn-primary btn-lg, fa fa-instagram" role="button" style="margin: 4px;"></a>
                <a href="https://mail.google.com/" class="btn btn-primary btn-lg, fa fa-envelope" role="button" style="margin: 4px;"></a>
            </div>

            <div class="my_div" style="background-color:brown;">
                © 2020 Copyright: Cinema Marco Polo.
            </div>

    </footer>
    `
})
var sotto=new Vue({
    el: '#sotto',
})
