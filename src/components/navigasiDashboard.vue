<template>
  <nav> 
    <div class="sismaLogo">
      <img :src="`${logoSima}`" class="imgLogo" alt="">
      <h3>Sisma</h3>
    </div>
      <ul>
          <li v-for="(data,index) in navigasiPath" :key='index'>
              <RouterLink class="anchor" :to="`${data.path}`">{{ data.nama }}</RouterLink>
          </li>
      </ul>
      <b class="anchor" @click="logout"><i class="fa-solid fa-right-from-bracket"></i></b>
  </nav>

  <div class="toggleNav" :style="[toggleData ? 'display:none' : 'display:flex']"> 
    <div class="sismaLogo">
      <img :src="`${logoSima}`" class="imgLogo" alt="">
      <h3>Sisma</h3>
    </div>
      <ul>
          <li v-for="(data,index) in navigasiPath" :key='index'>
              <RouterLink class="anchor" :to="`${data.path}`">{{ data.nama }}</RouterLink>
          </li>
      </ul>
      <b class="anchor" @click="logout"><i class="fa-solid fa-right-from-bracket"></i></b>
  </div>
</template>


<script>
import { RouterLink } from 'vue-router';
import logo from '../assets/sima.png'
import { loginAccountsMahasiswa } from '../store/userAuthStore';
import { useRouter } from 'vue-router';
export default{
  setup(){
      const router = useRouter()
      const logoutAccounts = loginAccountsMahasiswa()
      const logout=()=>{
          logoutAccounts.logout()
          localStorage.clear("idMhs")
          router.push('/loginMahasiswa')
      }
      return {logout,logoutAccounts,router}
  },
  data(){
      return{
          navigasiPath:[
              {nama:'home',path:'/dashboardMahasiswa/home',class:'fa-solid fa-house'},
              {nama:'unggah',path:'/dashboardMahasiswa/unggah',class:'fa-solid fa-file-circle-plus'},
              {nama:'history',path:'/dashboardMahasiswa/historyMahasiswa',class:'fa-solid fa-clock-rotate-left'},
              // {nama:'download',path:'/dashboard/download',class:'fa-regular fa-circle-question'},
          ],
          logoSima:logo
      }
  },
  props:{
      toggleData:Boolean,
  }
  
}
</script>

<style scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box
}
img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.sismaLogo{
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
nav{
  width: 100%;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  color: rgb(248, 245, 245);
}
.heading{
  font-size: 1.5em;
  font-weight: 800;
  text-transform: capitalize
}
ul{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style-type: none;
}
li{
  display: flex;
  gap: 50px;
}
.anchor{
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  color: rgb(248, 245, 245);
}
.anchor:hover{
  opacity: .8;
  border-bottom: 1px solid red;
}
.toggleNav{
  display: none;
}
@media only screen and (max-width: 768px){
  ul{
      display: flex;
  }
  nav{
      display: none;
  }
  .toggleNav{
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
     padding: 10px 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  color: rgb(248, 245, 245);
  z-index: 2;
  }
   ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
}
</style>