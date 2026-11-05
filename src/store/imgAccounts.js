import {defineStore} from 'pinia'
import axios from 'axios'
import {ref} from 'vue'


export const img= defineStore('img',{
    state:()=>({
        responsedata:ref('')
    }),
    actions:{
        async postImg(name,size,url){
            const payload={
                nama:name,
                ukuran:size,
                link:url
            }
            const dataImgPost =await axios.post('http://localhost:8000/sima/img',payload)
            if(dataImgPost){
                this.responsedata=dataImgPost.data
            }
        }
    }
})