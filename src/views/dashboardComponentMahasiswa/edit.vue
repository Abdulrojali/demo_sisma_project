<template>
    <div class="container">
      <h1>update Surat Izin Baru</h1>
      <div class="form">
        <div class="col">
          <label for="name">Nama</label>
          <input type="text" v-model="nama" placeholder="Masukkan nama">
        </div>
        <div class="col">     
          <label for="nim">NIM</label>  
          <input type="text" v-model="nim" placeholder="Masukkan NIM">            
        </div>
        <div class="col">
          <label for="kelas">Kelas</label>
          <select v-model="kelas">
            <option value="" disabled>Pilih kelas</option>
            <option v-for="(data, index) in selectClass" :key="index" :value="data.text">{{ data.text }}</option>
          </select>
        </div>
        <div class="col">
          <label for="mataKuliah">Mata Kuliah</label>
          <input type="text" v-model="mataKuliah" placeholder="Masukkan mata kuliah">
        </div>
        <div class="col">
          <label for="keterangan">Keterangan</label>
          <textarea v-model="keterangan" placeholder="Masukkan keterangan"></textarea>
        </div>
        <div class="btn-group">
          <button class="btn submit" @click="updatePremits">update</button>
          <button class="btn cancel" @click='cancel'>Batal</button>
        </div>
      </div>
    </div>
  </template>
<script>
import { ref} from 'vue';
import { premits } from '../../store/premitsServices';
import { loginAccountsMahasiswa } from '../../store/userAuthStore';
import {useRoute,useRouter} from 'vue-router'
export default{
    setup() {
      const nama = ref('');
      const nim = ref('');
      const kelas = ref('');
      const keterangan = ref('');
      const mataKuliah = ref('');
      const premitsStore = premits();
      const router = useRoute()
      const idparams= router.params.id
      const dataDate =new Date();
        const handlerBackMenuHistory=()=>{
            router.push('/dashboardMahasiswa/historyMahasiswa')
        }
      const accountsMahasiswaStore = loginAccountsMahasiswa();
      const selectClass = [
        { text: 'SI22A', keyOption: '22A' },
        { text: 'SI22B', keyOption: '22B' },
        { text: 'SI22C', keyOption: '22C' },
        { text: 'SI22D', keyOption: '22D' },
        { text: 'SI22E', keyOption: '22E' },
      ];
      return { nama, nim, kelas, keterangan, mataKuliah, premitsStore, accountsMahasiswaStore, selectClass,handlerBackMenuHistory,dataDate,idparams };
    },
    data(){
      return{
        dataId:localStorage.getItem('id')
      }
    },
    methods:{
        updatePremits(){
            const responsePremits=this.premitsStore.updatePremits(this.dataId,this.nama,this.nim,this.kelas,this.keterangan,this.mataKuliah,this.dataDate,this.idparams)
            if(!responsePremits){
                alert('failed update Premits')
            }
            else{
              setTimeout(() => {
                return this.premitsStore.statusUpdate ? this.$router.push('/dashboardMahasiswa/historyMahasiswa') : alert('invalid to update')
                }, 800);
            }
        },
        cancel(){
          this.$router.push('/dashboardMahasiswa/historyMahasiswa')
        }
    }
}
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f7fa;
  padding: 40px 0;
}

h1 {
  font-size: 2em;
  font-weight: 600;
  text-transform: capitalize;
  color: #333;
  margin-bottom: 30px;
}

.form {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

.col label {
  font-size: 0.9em;
  color: #666;
}

.col input,
.col select,
.col textarea {
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
}

.col input:focus,
.col select:focus,
.col textarea:focus {
  border-color: #007acc;
}

textarea {
  height: 100px;
  resize: vertical;
}

.btn-group {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}

.btn {
  padding: 10px 20px;
  font-size: 1em;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit {
  background-color: #007acc;
  color: #ffffff;
  border: none;
}

.submit:hover {
  background-color: #005fa3;
}

.cancel {
  background-color: #e0e0e0;
  color: #333;
  border: none;
}

.cancel:hover {
  background-color: #c6c6c6;
}
@media only screen and (max-width: 768px){
  .container{
    height: 100%;
  }
}
</style>