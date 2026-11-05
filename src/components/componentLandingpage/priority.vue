<template>
  <div class="container" id="priority">
    <h1>Mengapa Pilih <b>Kami</b></h1>
    <div class="grid">
      <div class="col" v-for="(data, index) in dataPriority" :key="index">
        <h3 class="title">{{ data.judul }}</h3>
        <p class="description">{{ data.teks }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataPriority: [
        {
          logo: '',
          judul: 'Fleksibel',
          teks: 'Presensi dapat menyesuaikan aturan absensi berdasarkan grup atau kebutuhan kelas dengan mudah.',
        },
        {
          logo: '',
          judul: 'Minim Kecurangan',
          teks: 'Semua data absensi tersimpan secara digital sehingga mengurangi risiko manipulasi atau pemalsuan.',
        },
        {
          logo: '',
          judul: 'Praktis',
          teks: 'Mahasiswa dapat membuat laporan absensi langsung melalui smartphone tanpa perlu antre.',
        },
        {
          logo: '',
          judul: 'Rekap Otomatis',
          teks: 'Presensi mencatat riwayat laporan absensi secara otomatis sehingga admin dapat memantau kehadiran dengan mudah.',
        },
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

.container {
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(to bottom right, #f7f9fc, #eef1f4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 2.6rem;
  color: #2c2c2c;
  margin-bottom: 40px;
  font-weight: 700;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
  letter-spacing: .5px;
}

b {
  color: #0066ff;
}

.grid {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.col {
  padding: 28px;
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.col:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.14);
}

.title {
  font-size: 1.4rem;
  color: #0066ff;
  margin-bottom: 12px;
  font-weight: 600;
  text-transform: capitalize;
}

.description {
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }

  .grid {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .col {
    padding: 22px;
  }

  .title {
    font-size: 1.25rem;
  }

  .description {
    font-size: 0.95rem;
  }
}
</style>
