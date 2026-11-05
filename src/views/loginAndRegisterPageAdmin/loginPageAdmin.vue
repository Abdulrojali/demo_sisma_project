<template>
    <div class="loginContainer">
        <div class="loginContent">
            <div class="formLogin">
                <div class="contentHeading">
                    <h1 class="heading">Get Ready</h1>
                    <p>login to your admin account now</p>
                </div>
                <div class="contentLogin">
                <input type="text" placeholder="username" v-model="username">
                <input type="password" placeholder="password" v-model="password">
                    <button @click="handlerLogin">login</button>
                    <p class="tagCreateAccounts">belum punya account? <a @click="goCreateAccount" href="">create account</a></p>
                    <p class="tagCreateAccounts">login sebagai  <a href="" @click="toLoginMahasiswa">mahasiswa</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
export default{
    setup(){
        const loginAcconts =loginAccountsAdmin()
        const username =ref("")
        const password =ref("")
        const router=useRouter()
           const handlerLogin = ()=>{
            if(username,password){
              if(username.value ==="admin" && password.value ==="admin123"){
                alert("sukses login selamat datang admin")
              router.push("/dashboardAdmin/home")
              localStorage.getItem("idAdm","02839283")
              }
              else{
                alert("anda bukan admin")
                window.location.reload()
              }

            }
            else if(username==='' && password){
                alert('username belum diisi')
            }
            else if(username && password===''){
                alert('password belum diisi')
            }
            else{
                alert('tolong isi username dan password')
                window.location.reload()
            }
        }
        return{loginAcconts,handlerLogin,username,password}
    },
    methods:{
        goCreateAccount(e){
            e.preventDefault()
            this.$router.push('/createAccountsMahasiswa')
        },
        toLoginMahasiswa(e){
            e.preventDefault()
            this.$router.push('/loginMahasiswa')
        }
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.loginContainer {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, rgba(255, 0, 0, 0), blue);
  padding: 20px;
}

.loginContent {
  width: 100%;
  max-width: 420px;
  background: white;
  padding: 30px 25px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contentHeading {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contentHeading h1 {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
}

.contentHeading p {
  font-size: 0.9rem;
  color: gray;
  margin-top: -5px;
}

.formLogin {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contentLogin {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.contentLogin input {
  width: 100%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  outline: none;
}

.contentLogin input:focus {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.2);
}

.contentLogin button {
  width: 100%;
  padding: 12px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.contentLogin button:hover {
  background-color: #0044cc;
}

.tagCreateAccounts {
  font-size: 0.85rem;
  text-align: center;
  color: #444;
  margin-top: 5px;
}

.tagCreateAccounts a {
  color: blue;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.tagCreateAccounts a:hover {
  text-decoration: underline;
}

/* ========== RESPONSIVE ========== */
@media (max-width: 480px) {
  .loginContent {
    padding: 25px 20px;
  }

  .contentHeading h1 {
    font-size: 1.7rem;
  }
}


</style>