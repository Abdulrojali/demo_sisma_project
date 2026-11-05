import {}
<template>
    <div class="container">
      <div class="content">
        <h1>History Unggahan</h1>
           <div  class="section-notfound" v-if="dataPremitsMahasiswa.length==0">
          <h2>Data kosong</h2>
        </div>
        
        <div class="content1" v-else>
          <div class="menu" >
          <button @click="routerNewPremits">Tambah Baru</button>
        </div>
        
        <table class="history" >
          <tr>
            <th>Profile</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Kelas</th>
            <th>Menu</th>
          </tr>
          <tr class="history-row" v-for="(data,index) in premitsStore.premitsLocalStorage" :key="index">
            <td><img :src="data.name" alt="Profile Picture"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.nim }}</td>
            <td>{{ data.class }}</td>
            <td>
              <!-- <i class="fa-solid fa-pen-to-square" @click="editData(data._id)" title="Edit"></i> -->
              <i class="fa-solid fa-eye" @click="viewPremits(data._id)" title="View"></i>
              <i class="fa-solid fa-trash" @click="deletePremits(data._id)" title="Delete"></i>                  
            </td>
          </tr>
          <tr>
          </tr>
        </table>
      </div>
        </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { premits } from '../../store/premitsServices';
  import { loginAccountsMahasiswa } from '../../store/userAuthStore';
  import premitsMahasiswa from '../../data/premitsMahasiswa.json'
  export default {
    setup() {
      const premitsStore = premits();
      const accountsMahasiswaStore = loginAccountsMahasiswa()
      const dataPremitsMahasiswa = ref(premitsMahasiswa)
      
      return { premitsStore,accountsMahasiswaStore,dataPremitsMahasiswa};
    },
    data(){
      return{
        getIdMahasiswa:localStorage.getItem('id')
      }
    },
    mounted() {
      // this.premitsStore.getPremits();
      // this.premitsStore.getPremitsByIdUser()
    },
    methods: {
      premitsUser(id){
        this.premitsStore.getPremitsByIdUser(id)
      },
      deletePremits(id) {
        this.premitsStore.deletePremits(id);
      },
      editData(id) {
        this.$router.push(`/dashboardMahasiswa/edit/${id}`);
      },
      viewPremits(id) {
        this.$router.push(`/dashboardMahasiswa/viewMahasiswa/${id}`);
      },
      routerNewPremits() {
        this.$router.push('/dashboardMahasiswa/unggah');
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
    justify-content: center;
    align-items: center;
    background-color: #f4f7fa;
  }
  
  .content {
    width: 90%;
    max-width: 1200px;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h1 {
    font-size: 1.8em;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  
  .menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .menu button {
    padding: 10px 15px;
    background-color: #007acc;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
  }
  
  .menu button:hover {
    background-color: #005fa3;
  }
  
  .menu select {
    padding: 8px;
    font-size: 1em;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .section-notfound {
    padding: 20px;
    font-size: 1.2em;
    color: #666;
  }
  
  .history {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .history th,
  .history td {
    padding: 15px;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  .history th {
    background-color: #007acc;
    color: #ffffff;
    font-weight: 600;
  }
  
  .history-row:hover {
    background-color: #f1f1f1;
  }
  
  .history-row img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  i {
    font-size: 1.2em;
    margin: 0 8px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  i:hover {
    color: #555;
  }
  
  i.fa-pen-to-square {
    color: #28a745;
  }
  
  i.fa-eye {
    color: #007bff;
  }
  
  i.fa-trash {
    color: #dc3545;
  }
  @media only screen and (max-width: 768px) {
    .container{
      height: 100%;
    }
  }
  </style>
  