<template>
  <div class="menu" id="menu">
    <h1>Jenis <b>Fitur</b></h1>
    <div class="grid-container">
      <div class="grid-item" v-for="(data, index) in fitur" :key="index">
        <i :class="`${data.url}`"></i>
        <p>{{ data.deskripsi }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fitur: [
        { url: 'fa-solid fa-file-circle-plus', deskripsi: 'Membuat surat izin bagi mahasiswa.' },
        { url: 'fa-solid fa-file-import', deskripsi: 'Mengunggah surat izin yang diajukan.' },
        { url: 'fa-solid fa-clock-rotate-left', deskripsi: 'Melihat riwayat surat dan status pengajuan.' },
        { url: 'fa-solid fa-check', deskripsi: 'Dosen menyetujui atau menolak surat izin.' },
        { url: 'fa-solid fa-cloud-arrow-down', deskripsi: 'Mengunduh surat izin yang sudah dibuat.' }
      ],
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.menu {
  width: 100%;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background: linear-gradient(to bottom right, #f8fafc, #eef1f4);
}

h1 {
  font-size: 2.6rem;
  margin-bottom: 40px;
  color: #2c2c2c;
  text-align: center;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
  font-weight: 700;
}

b {
  color: #0066ff;
}

.grid-container {
  width: 90%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 28px;
  margin: auto;
}

.grid-item {
  padding: 26px;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.grid-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.14);
}

i {
  font-size: 2.4rem;
  color: #0066ff;
}

p {
  margin-top: 16px;
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }

  .grid-container {
    width: 100%;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.9rem;
  }

  .grid-item {
    padding: 22px;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>