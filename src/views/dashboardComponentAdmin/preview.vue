<template>
  <div class="container">
    <div class="content">
      <h1>preview  data Mahasiswa</h1>
      <div class="menu">
        <!-- <select v-model="dataFilter" @change="filterFunction">
          <option v-for="(data,index) in mataKuliah" :key="index"
           :value="data.nama">{{data.nama}}</option>
        </select> -->
      </div>
      <h1 v-if="premitsStore.allDataPremits.length==0">data kosong</h1>
      <table class="history" v-else >
        <tr>
          <th>Nama</th>
          <th>NIM</th>
          <th>Kelas</th>
          <th>tanggal dibuat</th>
          <th>mata kuliah</th>
          <th>Menu</th>
        </tr>
        <tr class="history-row" v-for="(data,index) in premitsStore.allDataPremits" :key="index">
          <td>{{ data.name }}</td>
          <td>{{ data.nim }}</td>
          <td>{{ data.class }}</td>
          <td>{{data.datePremits}}</td>
          <td>{{ data.mataKuliah }}</td>
          <td>
            <i class="fa-solid fa-eye" @click="viewPremits(data._id)" title="View"></i> 
            <i class="fa-solid fa-check" @click="checkData(data._id)" id="green"></i>             
          </td>
        </tr>
        <tr>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { premits } from '../../store/premitsServices';
import { loginAccountsMahasiswa } from '../../store/userAuthStore';
export default {
  setup() {
    const premitsStore = premits();
    const dataFilter = ref('');
    const accountsMahasiswaStore = loginAccountsMahasiswa();
    const mataKuliah =[
      {nama:'jaringan Komputer',dosenPengampu:'cecep warman m.kom'},
      {nama:'enterprise Architecture Integrations',dosenPengampu:'sudin saepudin m.kom'},
      {nama:'manajemen proses bisnis',dosenPengampu:'sudin saepudin m.kom'},
      {nama:'proyek perangkat lunak',dosenPengampu:'muhammad muslih. ST, M.kom'},
      {nama:'metode penelitian',dosenPengampu:'rieska ayuningsih.ST, M.kom'},

    ]
    return { premitsStore, dataFilter, accountsMahasiswaStore,mataKuliah };
  },
  mounted() {
    this.premitsStore.getPremits(this.accountsMahasiswaStore.dataIdMahasiswa);
  },
  methods: {
    viewPremits(id) {
      this.$router.push(`/dashboardAdmin/view/${id}`);
    },
    checkData(id){
      if(id){
        this.premitsStore.pushAcceptDataPremits(id)
        this.$router.push('/dashboardAdmin/historyAdmin')
      }
      else{
        alert('not found id!!')
        window.location.reload()
      }
    },
    filterFunction(){
      console.log(this.dataFilter)
      this.premitsStore.getDataFilter(this.dataFilter)
    }
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

.menu button,button {
  margin-top: 30px;
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
  padding: 5px;
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
  margin: 0 30px;
  cursor: pointer;
  transition: color 0.3s;
}

#green{
  color: rgb(134, 211, 18);
}
i:hover {
  color: #555;
  opacity: .8;
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
