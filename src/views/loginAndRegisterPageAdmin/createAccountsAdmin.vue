<template>
    <div class="container">
        <div class="content">
            <i class="fa-solid fa-arrow-left" @click="backLogin"></i>
            <div class="formCreateAccounts">
                <div class="contentHeading">
                    <h1>get ready</h1>
                    <p>create Account admin now</p>
                </div>
                <div class="dobleInput">
                    <div class="col">
                    <label for="nama">nama</label>
                    <input type="text" v-model="nama">
                </div>                
                <div class="col">
                    <label for="nia">nia</label>
           <input type="text" v-model="nii">
                </div>
                </div>
                <div class="col">
                    <label for="username">username</label>
                    <input type="text" v-model="user">
                </div>
                <div class="col">
                    <label for="password">password</label>
                    <input type="password" v-model="pass">
                </div>
                <div class="col">
                    <label for="email">email</label>
                    <input type="email" v-model='mail'>
                </div>
                <div class="btn">
                    <button @click="handlingCreateAccountsAdmin">submit</button>
                </div>
                <p>buat accounts <a href="" @click="goToPageCreateAccountsMahasiswa">mahasiswa</a></p>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
import {createAccountsAdmin} from '../../store/createAccountsStore.js'
import {useRouter} from 'vue-router'
export default{
    setup(){
        const accounts=createAccountsAdmin()
        const nama =ref('')
        const nii =ref('')
        const user =ref('')
        const pass =ref('')
        const mail =ref('')

        const router = useRouter()
        const handlingCreateAccountsAdmin=()=>{
            if(!nama || !nii || !user || !pass || !mail){
                alert('invalid login')
            }
            else if(nama===''){
                alert('nama belum di isi!!')
            }
            else if(nii===''){
                alert('nia belum di isi!!')
            }            
            else if(user===''){
                alert('username belum di isi!!')
            }         
             else if(pass===''){
                alert('password belum di isi!!')
            }            
            else if(mail===''){
                alert('email belum di isi!!')
            }
            else{
                accounts.createAccounts(nama,nii,user,pass,mail)
            }
        }
        return{nama,nii,user,pass,mail,handlingCreateAccountsAdmin}
},
    methods:{
        backLogin(){
            this.$router.push('/loginAdmin')
        },
        goToPageCreateAccountsMahasiswa(e){
            e.preventDefault()
            this.$router.push('/createAccountsMahasiswa')
        }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* MAIN WRAPPER */
.container {
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to left, rgba(255, 0, 0, 0), blue);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  position: relative;
}

/* CARD WRAPPER */
.content {
  width: 100%;
  max-width: 480px;
  background-color: white;
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
}

/* BACK ICON */
i {
  position: absolute;
  top: 25px;
  left: 25px;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}
i:hover {
  opacity: 0.7;
}

/* FORM WRAPPER */
.formCreateAccounts {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* FORM TITLE */
.contentHeading {
  text-align: center;
  margin-bottom: 5px;
}
.contentHeading h1 {
  font-size: 1.9rem;
  font-weight: 800;
  text-transform: capitalize;
}
.contentHeading p {
  font-size: 0.9rem;
  color: gray;
}

/* DOUBLE GRID */
.dobleInput {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* COLUMN ITEM */
.col {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
label {
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: capitalize;
  color: #333;
}

/* INPUT STYLE */
.col input,
.dobleInput input {
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #d1d1d1;
  font-size: 0.9rem;
  outline: none;
}
.col input:focus,
.dobleInput input:focus {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
}

/* BUTTON */
button {
  width: 100%;
  padding: 12px;
  background: blue;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
button:hover {
  background: #003dcc;
}

/* FOOTER TEXT */
p {
  font-size: 0.85rem;
  text-align: center;
}
p a {
  color: blue;
  text-decoration: none;
  font-weight: 600;
}
p a:hover {
  text-decoration: underline;
}

/* BACK BUTTON MOBILE */
.back {
  display: none;
  width: 100%;
  padding: 12px;
  background: blue;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 15px;
  cursor: pointer;
}
.back:hover {
  background: #003dcc;
}

/* ===================================== */
/* RESPONSIVE */
/* ===================================== */
@media (max-width: 768px) {
  i {
    display: none;
  }

  .back {
    display: block;
  }

  .content {
    max-width: 90%;
  }

  .dobleInput {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .contentHeading h1 {
    font-size: 1.6rem;
  }
}

</style>