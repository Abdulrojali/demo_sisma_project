<template>
    <div class="container">
      <h1>SIMA Dashboard</h1>
      <div class="content">
        <div class="content1">
          <div class="card">
            <i class="fa-solid fa-file-circle-plus icon"></i>
            <h2>Create Permission</h2>
            <p>Submit a new permission request for approval.</p>
            <button class="btn" @click="toNewPremission">New Permission</button>
          </div>
          <div class="card">
            <i class="fa-solid fa-clock-rotate-left icon"></i>
            <h2>Manage Permissions</h2>
            <p>View and manage existing permissions.</p>
            <button class="btn" @click="tohistoryPermission">View Permissions</button>
          </div>
        </div>
        <div class="content2">
          <div class="info-card">
            <h2>total premits</h2>
            <p>{{dataPremitslength.length}}</p>
          </div>
          <div class="info-card">
            <h2>total accepted</h2>
            <!-- <p>{{premitsStore.dataResponseAcceptPremits.length}}</p> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    setup(){
      const dataPremitslength =localStorage.getItem("dataPremits")
      return{dataPremitslength}
    },
    methods:{
      toNewPremission(){
        this.$router.push('/dashboardMahasiswa/unggah')
      },
      tohistoryPermission(){
        this.$router.push('/dashboardMahasiswa/HistoryMahasiswa')
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
    height: 100vh;
    background-color: #f0f4f8;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333;
  }
  
  .content {
    display: flex;
    gap: 20px;
  }
  
  .content1 {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .card {
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .icon {
    font-size: 2em;
    color: #007acc;
    margin-bottom: 10px;
  }
  
  .card h2{
    margin-bottom: 10px;
    color: #007acc;
  }
  
  .card p{
    font-size: 1em;
    color: #555;
    margin-bottom: 15px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #007acc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #005fa3;
  }
  
  .content2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .info-card {
    width: 100%;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .info-card h2 {
    margin-bottom: 10px;
    color: #007acc;
  }
  .info-card p{
    font-size: 3em;
    color: #555;
    margin-bottom: 15px;
  }
  .chart {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
  }
  
  .bar {
    width: 20px;
    height: 100px;
    background-color: #e0e0e0;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }
  
  .bar::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--progress);
    background-color: #007acc;
    transition: height 0.3s ease;
  }
  
  @media only screen and (max-width: 768px) {
    .content {
      flex-direction: column;
    }
    .container{
      height: 100%;
      padding: 20px 20px;
    }
    .content1,
    .content2 {
      width: 100%;
    }
  }
  </style>
  