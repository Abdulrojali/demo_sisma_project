<template>
  
    <div class="container">
        <i class="fa-solid fa-bars"  @click="handlingToggle"></i>   
            <navigasiDashboard :toggleData="isActive" ></navigasiDashboard> 
        <RouterView></RouterView>
    </div>
</template>

<script>
import navigasiDashboard from '../components/navigasiDashboard.vue'
import { RouterView } from 'vue-router';
import {ref} from 'vue';
export default{
    data(){
        return{
            isActive:ref(true),
        }
    },
    methods:{
        handlingToggle(){
            this.isActive=!this.isActive
        }
    },
    components:{
        navigasiDashboard,
    }
}
</script>

<style scoped>
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.active{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto 80%;
}
.nonactive{
    width: 100%;
    height: 100%;
    /* display: grid;
    grid-template-columns: auto 100%; */
}
i{
    display: none;
    position: absolute;
    font-size: 1.2em;
    cursor: pointer;
    top:13px;
    right: 30px;
    z-index: 5;
    color: white;
    margin-bottom: 30px;
  
}
i:hover{
    opacity: .8;
}
@media only screen and (max-width: 768px){
    .container{
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 20px 10px;
    }
    i{
        display: block;
        color:black;
        margin-top: 20px;
        margin-right: 20px;
    }
}
</style>