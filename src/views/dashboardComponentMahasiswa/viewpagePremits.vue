<template>
    <div class="view">
      <h1>Laporan Surat Izin</h1>
      <div class="content" ref="pdfContent" id="pdfContent">
        <!-- Header (Kop Surat) -->
        <div class="kopsurat">
          <img :src="imgs" alt="Logo Universitas" />
          <div class="teksKopsurat">
            <h1>Universitas Nusa Putra</h1>
            <p>Jl. Raya Cibolang Cisaat - Sukabumi No.21, Cibolang Kaler, Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152</p>
          </div>
        </div>
  
        <!-- Tanggal Surat -->
        <div class="info-row">
          <span>Sukabumi, {{ premitsStore.payloadViewPremits[0]?.datePremits}}</span>
        </div>
  
        <!-- Tujuan Surat -->
        <div class="section">
          <p>Kepada Yth.</p>
          <p><strong>Dosen Pengajar Mata Kuliah {{ premitsStore.payloadViewPremits[0]?.mataKuliah }}</strong></p>
          <p>Universitas Nusa Putra Sukabumi</p>
        </div>
  
        <!-- Pengirim Surat -->
        <div class="section">
          <p>Dengan hormat,</p>
          <p>Saya yang bertanda tangan di bawah ini:</p>
          <ul class="info-list">
            <li><strong>Nama:</strong> {{ premitsStore.payloadViewPremits[0]?.name }}</li>
            <li><strong>NIM:</strong> {{ premitsStore.payloadViewPremits[0]?.nim }}</li>
            <li><strong>Kelas:</strong> {{ premitsStore.payloadViewPremits[0]?.class }}</li>
          </ul>
        </div>
  
        <!-- Isi Surat -->
        <div class="section">
          <p>
            Dengan ini mengajukan permohonan izin untuk tidak mengikuti perkuliahan pada mata kuliah 
            <strong>{{ premitsStore.payloadViewPremits[0]?.mataKuliah }}</strong> 
            yang dijadwalkan pada tanggal <strong>{{ premitsStore.payloadViewPremits[0]?.datePremits }}</strong>.
          </p>
          <p>
            Alasan ketidakhadiran saya adalah karena 
            <em>{{ premitsStore.payloadViewPremits[0]?.deskripsi }}</em>.
          </p>
          <p>
            Demikian surat izin ini saya sampaikan. Atas perhatian dan pengertian Bapak/Ibu, saya ucapkan terima kasih.
          </p>
        </div>
  
        <!-- Penutup -->
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
        <div class="signature">
          <p>Hormat saya,</p>
          <br>
          <p class="name">{{ premitsStore.payloadViewPremits[0]?.name }}</p>
        </div>
      </div>
  
      <!-- Tombol Unduh PDF -->
      <button class="download-btn" @click="generatePdf">
        <i class="fa-solid fa-cloud-arrow-down"></i> Unduh PDF
      </button>
    </div>
  </template>
  
  <script>
  import {ref} from 'vue'
  import {useRoute} from 'vue-router'
  import {premits} from '../../store/premitsServices'
  import html2pdf from 'html2pdf.js';
  import nusaputraImg from '../../assets/nusaputra.png'
  import premitsMahasiswa from '../../data/premitsMahasiswa.json'
  export default{
      setup(){
          const router = useRoute()
          const premitsStore=premits()
          const idUser = router.params.id
          const imgs=nusaputraImg
          return{premitsStore,idUser,imgs,idUser}
      },
      methods:{
          generatePdf(){
              const element = this.$refs.pdfContent;
        const options = {
          margin: 0.5,
          filename: `laporan_surat_izin_${this.premitsStore.payloadViewPremits[0].name}`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF:{  orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts:true,
    floatPrecision: 16 
  }
          // jsPDF: { unit: 'in', format: [8, 10], orientation: 'portrait' },
        };
        // Konversi elemen ke PDF
        html2pdf().set(options).from(element).save();
          }
      },
      mounted(){
        this.premitsStore.getPremitsById(this.idUser)
      }
  }
  </script>
  <style scoped>
  /* Reset & Box Model */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  /* Kontainer Utama */
  .view {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  /* Judul Halaman */
  h1 {
    font-size: 2rem;
    font-family: 'Arial', sans-serif;
    color: #2c3e50;
  }
  
  /* Konten Surat */
  .content {
    width: 70%;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 40px;
    font-family: 'Times New Roman', serif;
    line-height: 1.8;
    color: #34495e;
  }
  
  /* Kop Surat */
  .kopsurat {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  .kopsurat img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #34495e;
  }
  .teksKopsurat h1 {
    font-size: 1.5rem;
    color: #34495e;
  }
  .teksKopsurat p {
    font-size: 0.9rem;
    color: #7f8c8d;
  }
  
  /* Baris Informasi */
  .info-row {
    margin: 10px 0;
    text-align: right;
    font-style: italic;
    color: #7f8c8d;
  }
  
  /* Bagian Surat */
  .section {
    margin: 20px 0;
  }
  
  /* Daftar Informasi */
  .info-list {
    list-style: none;
    padding: 0;
  }
  .info-list li {
    margin: 5px 0;
    font-size: 0.95rem;
  }
  
  /* Penutup Surat */
  .signature {
    text-align: left;
    margin-top: 40px;
  }
  .signature .name {
    margin-top: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: #2c3e50;
  }
  
  /* Tombol Unduh */
  .download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    background: #2980b9;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .download-btn:hover {
    background: #1a5276;
  }
  .download-btn i {
    font-size: 1.2rem;
  }
  </style>