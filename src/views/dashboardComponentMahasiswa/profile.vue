<template>
    <div class="profile">
        <h1>this profile</h1>
        <!-- <img :src="dataImg" alt=""> -->
        <input type="file" name="" id="" @change="getDataImg">
        <button @click="uploadFile">upload file</button>
    </div>

</template>


<script>
import { ref } from 'vue';
import { img } from '../../store/imgAccounts';
export default{
    setup(){
        const imgStore = img()
        return{imgStore}
    },
    methods:{
        getDataImg(event){
            const dataImg= event.target.files[0]
                const nama=dataImg.name
                const ukuran=dataImg.size
                const link=`http://localhost:8080/sima/img/${dataImg.name}`
                const response =this.imgStore.postImg(nama,ukuran,link)
                if(response){
                    alert('sukses to upload img')
                    window.location.reload()
                }
        }
    },
    uploadFile(){

    }
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.profile{
    height: 100vh;
}
img{
    width:200px;
    height: 250px;
}
</style>