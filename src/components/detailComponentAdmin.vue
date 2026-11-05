<template>
        <div class="detail animate__animated animate__bounce">
        <h1>detail menu</h1>
        <div class="list" v-for="(data,index) in dataDetail" :key="index">
            <i :class="data.classIcon" title="View"></i> <br>
            <p>{{ data.deskripsi }}</p>
        </div>
        
    </div>
</template>

<script>

export default{
    data(){
        return{
            dataDetail:[
                {classIcon:'fa-solid fa-eye',deskripsi:'digunakan untuk melihat document'},                
                {classIcon:'fa-solid fa-check',deskripsi:'digunakan untuk menyetujui document'},               
                {classIcon:'fa-solid fa-download',deskripsi:'digunakan untuk mendownload document'}                
            ]
        }
    },
    methods:{

    }
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.detail{
    padding: 30px;
    height: 50vh;
    box-shadow: 0 0 2px 1px gray;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.list{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-gap: 10px;
}
p{
    font-size: 1.5em;
}
i{
    font-size:1.8em ;
}

</style>