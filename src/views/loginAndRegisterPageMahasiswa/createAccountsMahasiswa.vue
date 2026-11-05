<template>
    <div class="container">
        <div class="content">
            <i class="fa-solid fa-arrow-left" @click="backLogin"></i>
            <div class="formCreateAccounts">
                <div class="contentHeading">
                    <h1>get ready</h1>
                    <p>create Account mahasiswa now</p>
                </div>
                <div class="dobleInput">
                    <div class="col">
                    <label for="nama">nama</label>
                    <input type="text" v-model="nama">
                </div>                
                <div class="col">
                    <label for="nim">nim</label>
                    <input type="text" v-model="nim">
                </div>
                </div>
                <div class="col">
                    <label for="kelas">kelas</label>
                    <input type="text" v-model="klass">
                </div>
                <div class="col">
                    <label for="username">username</label>
                    <input type="text" v-model="username">
                </div>
                <div class="col">
                    <label for="password">password</label>
                    <input type="password" v-model="password">
                </div>
                <div class="col">
                    <label for="email">email</label>
                    <input type="email" v-model='email'>
                </div>
                <div class="btn">
                    <button @click="handlingcreateAccounts">submit</button>
                </div>
               <p>buat accounts <a href="" @click="goToPageCreateAccountsAdmin">admin</a></p>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
import {createAccountsMahasiswa} from '../../store/createAccountsStore.js'
import {useRouter} from 'vue-router'
export default{
    setup(){
        const accounstStore=createAccountsMahasiswa()
        const nama =ref('')
        const nim =ref('')
        const username =ref('')
        const klass =ref('')
        const password =ref('')
        const email =ref('')

        const router = useRouter()
        const handlingcreateAccounts=()=>{
            if(!nama || !nim || !username || !klass || !password || !email){
                alert('invalid login')
            }
            else if(nama===''){
                alert('nama belum di isi!!')
            }
            else if(nim===''){
                alert('nim belum di isi!!')
            }            
            else if(username===''){
                alert('username belum di isi!!')
            }         
            else if(klass===''){
                alert('username belum di isi!!')
            }  
             else if(password===''){
                alert('password belum di isi!!')
            }            
            else if(email===''){
                alert('email belum di isi!!')
            }
            else{
                accounstStore.createAccounts(nama,nim,klass,username,password,email)
            }
        }
        return{nama,nim,klass,username,password,email,handlingcreateAccounts}
},
    methods:{
        backLogin(){
            this.$router.push('/loginMahasiswa')
        },
        goToPageCreateAccountsAdmin(e){
            e.preventDefault()
            this.$router.push('/createAccountsAdmin')
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

/* MAIN CONTAINER */
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

/* CARD */
.content {
  width: 100%;
  max-width: 480px;
  background: white;
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

/* FORM CONTENT */
.formCreateAccounts {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* HEADING */
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

/* DOUBLE INPUT 2-COL */
.dobleInput {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* GENERIC COLUMN */
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

/* INPUTS */
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

/* SUBMIT BUTTON */
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
  margin-top: 10px;
}
p a {
  color: blue;
  text-decoration: none;
  font-weight: 600;
}
p a:hover {
  text-decoration: underline;
}

/* BACK BUTTON FOR MOBILE */
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
/* RESPONSIVE BREAKPOINTS */
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
    padding: 20px;
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