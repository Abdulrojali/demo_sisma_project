<template>
    <div class="container">
        <i class="fa-solid fa-bars" @click='toggleMenu'></i>
    <nav :style="[valueToggle ? 'display:none' : 'display:flex']">
        <img :src="`${teksHeading}`" alt="">
        <ul>
            <li v-for='(data,index) in menu' :key="index">
                <a :href="`${data.url}`">{{ data.name }}</a>
            </li>
        </ul>
       <button @click="login">login</button>
    </nav>
    <headingContent></headingContent>
    <aboutContent></aboutContent>
    <priority></priority>
    <menuContent></menuContent>
    <contactContent></contactContent>
    <footerContent></footerContent>
    </div>
</template>
<script >
import headingContent from '../components/componentLandingpage/headingContent.vue';
import aboutContent from '../components/componentLandingpage/aboutContent.vue';
import menuContent from '../components/componentLandingpage/menu.vue';
import contactContent from '../components/componentLandingpage/contact.vue';
import footerContent from '../components/componentLandingpage/footer.vue';
import priority from '../components/componentLandingpage/priority.vue';

import logo from '../assets/sima.png'
import { ref } from 'vue';
export default{
    data(){
        return{
          menu:[
            {url:'#home',name:'home'},
            {url:'#about',name:'about'},
            {url:'#menu',name:'fitur'},
            {url:'#priority',name:'priority'},
            {url:'#contact',name:'contact'},
          ],
          valueToggle:ref(true)
          ,
          teksHeading:logo
        }
    },
    components:{
        headingContent,
        aboutContent,
        menuContent,
        contactContent,
        footerContent,
        priority
    },
    methods:{
        login(){
            this.$router.push('/loginMahasiswa')
        },
        toggleMenu(){
            this.valueToggle=!this.valueToggle
        }
    }
    
}
</script>

<style scoped>
.container{
    width:100%;
    height: 100%;
    display: flex;   
    flex-direction: column;
}
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    scroll-behavior:auto;
}
img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 .8px .8px gray;
}
nav{
    width:100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    position:fixed;
    z-index:2;
    top: 0;
    background-color: white;
}
nav ul{
    display: flex;
    gap: 30px;
}
li{
    list-style-type: none;
}
a{
    font-size: 1.1em;
    text-decoration: none;
    color: black;
    cursor: pointer;
}
a:hover{
    opacity: .8;
    border-bottom: 1px solid red;
}
button{
    border-radius: 50px;
    width: 80px;
    border: none;
    cursor: pointer;
    padding: 5px;
    background-color: blue;
    color: white;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.1em;
}
button:hover{
    opacity: .8;
}
i{
display:none;
    font-size: 3em;
    position: fixed;
    top: 25px;
    right:30px;
    z-index:3;
    cursor: pointer;
    padding: 20px;
    color:white;
}
i:hover{
    opacity: .8;
}
@media only screen and (max-width: 768px){
    *{
        padding:0;
        margin:0;
    }
    nav{
        width: 30%;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: white;
        z-index:1;
    }    
    nav ul{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    i{
        display: flex;
        font-size: 1.4em;
        color: black;
    }
}
/* .mobile{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    z-index: 1;
}
ul{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.none{
    display: none;
} */
</style>