<template>
    <div class="container">
      <h1>Buat Surat Izin Baru</h1>
      <div class="form">
        <div class="col">
          <label for="name">Nama</label>
          <input type="text" v-model="nama" placeholder="Masukkan nama">
        </div>
        <div class="col">     
          <label for="nim">NIM</label>  
          <input type="text" v-model="nim" placeholder="Masukkan NIM" @change="rangeData">  
          <p v-if="statusDataNim=false" class="red">nim melebihi 12 karakter</p>
          <p v-else class="green"></p>
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
          <button class="btn submit" @click="newPremits">Unggah</button>
          <button class="btn cancel">Batal</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { premits } from '../../store/premitsServices';
  import { loginAccountsMahasiswa } from '../../store/userAuthStore';
  export default {
    data(){
      return{
        statusDataNim:''
      }
    },
    setup() {
      const nama = ref('');
      const nim = ref('');
      const kelas = ref('');
      const keterangan = ref('');
      const mataKuliah = ref('');
      const dataDate =Date.now();
      const premitsStore = premits();
      const accountsMahasiswaStore = loginAccountsMahasiswa();
      const selectClass = [
        { text: 'SI21A', keyOption: '21A' },
        { text: 'SI21B', keyOption: '21B' },
        { text: 'SI21C', keyOption: '21C' },
        { text: 'SI21D', keyOption: '21D' },
        { text: 'SI21E', keyOption: '21E' },
        { text: 'SI21F', keyOption: '21F' },
        { text: 'SI21G', keyOption: '21G' },
        { text: 'SI22A', keyOption: '22A' },
        { text: 'SI22B', keyOption: '22B' },
        { text: 'SI22C', keyOption: '22C' },
        { text: 'SI22D', keyOption: '22D' },
        { text: 'SI22E', keyOption: '22E' },
        { text: 'SI22F', keyOption: '22F' },
        { text: 'SI22G', keyOption: '22G' },
        { text: 'SI23A', keyOption: '23A' },
        { text: 'SI23B', keyOption: '23B' },
        { text: 'SI23C', keyOption: '23C' },
        { text: 'SI23D', keyOption: '23D' },
        { text: 'SI23E', keyOption: '23E' },
        { text: 'SI23F', keyOption: '23F' },
        { text: 'SI23G', keyOption: '23G' },
        { text: 'SI24A', keyOption: '24A' },
        { text: 'SI24B', keyOption: '24B' },
        { text: 'SI24C', keyOption: '24C' },
        { text: 'SI24D', keyOption: '24D' },
        { text: 'SI24E', keyOption: '24E' },
        { text: 'SI24F', keyOption: '24F' },
        { text: 'SI24G', keyOption: '24G' },
      ];
      return { nama, nim, kelas, keterangan, mataKuliah, premitsStore, selectClass, dataDate,accountsMahasiswaStore };
    },
    data(){
      return{
        dataId:localStorage.getItem('idMhs')
      }
    },
    methods: {
      rangeData(){
          if(this.nim.length>11){
            this.statusDataNim==false
          }
          else{
            this.statusDataNim==true
          }
          console.log(this.statusDataNim)
        },
      newPremits() {
        if (this.nama === '') {
          alert('Tolong isi nama');
        } else if (this.nim === '') {
          alert('Tolong isi NIM');
        } else if (this.kelas === '') {
          alert('Tolong pilih kelas');
        } else if (this.keterangan === '') {
          alert('Tolong isi keterangan');
        } 
        else if (this.mataKuliah === '') {
          alert('Tolong isi mata kuliah');
        } else {
 this.premitsStore.newPremits(this.nama, this.nim,this.kelas, this.keterangan, this.mataKuliah, this.dataDate,this.dataId);
 this.$router.push("/dashboardMahasiswa/historyMahasiswa")
      }
    },
    }
  };
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
  .green{
    color:green;
  }
  .red{
    color: red;
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
  