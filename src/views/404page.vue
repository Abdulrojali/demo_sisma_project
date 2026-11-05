<template>
    <div class="notfoundpage">
        <h3>404 page</h3>
        <p>halaman tidak di temukkan</p>
        <a @click="kembali">kembali</a>
    </div>
</template>

<script>
export default{
    methods:{
        kembali(){
            this.$router.push("/")
        }
    }
}

</script>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.notfoundpage{
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}
h3{
    font-size:60px;
    color: red;
    font-weight: 900;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: capitalize;
}
p{
    font-size: 23px;
    font-weight: 400;
}
a{
    cursor: pointer;
   padding: 10px;
   background-color: black;
   color: white;
   border-radius: 5px;
}
a:hover{
    opacity: .9;
}
</style>