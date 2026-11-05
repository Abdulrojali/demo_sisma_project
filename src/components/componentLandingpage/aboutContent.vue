<template>
  <div class="about" id="about">
    <h1 class="headingAbout">About <b>Website</b></h1>
    <div class="aboutTeks">
      <div class="content1">
        <h2 class="heading">Visi</h2>
        <h3 class="subheading">{{ heading }}</h3>
        <p class="description">{{ paragraf }}</p>
      </div>
      <div class="content2">
        <h2 class="heading" style="text-align: left;">Misi</h2>
        <ol class="mission-list">
          <li v-for="(data, index) in misi" :key="index" class="mission-item">{{ data }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: 'Mewujudkan sistem absensi digital yang efisien, akurat, dan transparan.',
      paragraf: 'Platform ini bertujuan menyediakan sistem absensi yang cepat, mudah digunakan, dan mengurangi proses administrasi manual.',
      misi: [
        'Menyediakan absensi yang mudah diakses dan digunakan.',
        'Memantau kehadiran secara real-time dan terintegrasi.',
        'Menjamin keamanan data dan privasi pengguna.',
        'Memberikan pengalaman pengguna yang nyaman dan responsif.'
      ]
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

body {
  font-family: Arial, sans-serif;
  color: #333;
}

.about {
  padding: 40px 20px;
  width: 100%;
  background: linear-gradient(to right, #f9fafb, #eef1f4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.headingAbout {
  font-size: 2.8rem;
  color: #2f2fc2;
  margin-bottom: 40px;
  font-weight: 700;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
  letter-spacing: 1px;
}

.aboutTeks {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.content1,
.content2 {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.content1:hover,
.content2:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
}

.heading {
  font-size: 1.9rem;
  color: #2c2c2c;
  margin-bottom: 12px;
}

.subheading {
  font-size: 1.1rem;
  color: #4d4d4d;
  margin-bottom: 18px;
  line-height: 1.5;
}

.description {
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
}

.mission-list {
  text-align: left;
  padding-left: 1.4rem;
  color: #4d4d4d;
  font-size: 1rem;
  line-height: 1.7;
    list-style-type: none;
}
.mission-item {
  margin-bottom: 12px;
  padding-left: 10px;
  position: relative;
}

.mission-item:before {
  content: "•";
  color: #2f2fc2;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

b {
  color: #2f2fc2;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 900px) {
  .aboutTeks {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .headingAbout {
    font-size: 2.2rem;
  }

  .heading {
    font-size: 1.6rem;
  }

  .subheading,
  .description,
  .mission-list {
    font-size: 0.95rem;
  }
}
</style>
