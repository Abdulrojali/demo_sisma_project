<template>
  <div class="home" id="home">
      <div class="contentTeks">
          <h2>Absensi dengan mudah dengan SIMA</h2>
          <p>Solusi dari permasalahan absensi manual, SIMA hadir menawarkan kemudahan untuk mengelola absensi Anda.</p>
          <button @click="anchorToLogin">Sign in</button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
      anchorToLogin() {
          this.$router.push('/loginMahasiswa');
      }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/backgroundUrl.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 15px 50px;
}

.contentTeks {
  background-color: rgba(255, 255, 255, 0.8); /* Tambahkan latar belakang semi transparan */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

h2 {
  font-size: 3.5em;
  font-weight: 900;
  text-transform: capitalize;
}

.contentTeks p {
  width: 90%;
  font-size: 1em;
  font-weight: 500;
}

button {
  margin-top: 30px;
  padding: 12px 10px;
  width: 30%;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background-color: blue;
  color: white;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.1em;
}

button:hover {
  opacity: 0.8;
}

@media only screen and (max-width: 768px) {
  .home {
      flex-direction: column;
      height: 100%;
      padding: 20px;
  }

  .contentTeks h2 {
      font-size: 2em;
  }

  button {
      margin-top: 10px;
      width: 50%;
      padding: 10px;
      font-size: 1em;
  }
}
</style>
