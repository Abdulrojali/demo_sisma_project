import {defineStore} from 'pinia'
import axios from 'axios'
import {ref} from 'vue'
import { useRouter } from 'vue-router'
export const loginAccountsMahasiswa=defineStore('loginAccountsMahasiswa',{
    state:()=>({
        dataAccounts:ref(''),
        endpointLoginMahasiswa:'http://localhost:8000/user/login',
        statusLoginMahasiswa:null,
        dataLogAccounts:ref(''),
        dataPayload:ref(''),
        dataIdMahasiswa:ref(''),
        dataToken:ref(''),
        dataIdMahasiswa:null
    }),
    actions:{
        async loginAuthMahasiswa(username,password){
                const validation=await axios.post(this.endpointLoginMahasiswa,{user:username.value,pass:password.value})
                if(validation){
                    this.statusLoginMahasiswa=true
                    this.dataLogAccounts=validation.data
                    this.dataToken=this.dataLogAccounts.token
                    this.dataPayload=this.dataLogAccounts.payload     
                    localStorage.setItem('id',this.dataPayload.idMahasiswa)
                    console.log(this.dataToken)
                }
                else{
                    this.statusLoginMahasiswa=false
                }
        },
         logout(){
            localStorage.removeItem('id')
            this.dataToken=null,
            localStorage.removeItem('tokenApi')
        },
    }
})

export const loginAccountsAdmin=defineStore('loginAccountsAdmin',{
    state:()=>({
        dataAccounts:ref(''),
        endpointLoginAdmin:'http://localhost:8000/admin/login',
        statusLoginAdmin:null,
        dataLogAdmin:null,
        dataToken:null,
        dataIdAdmin:null,
        router:useRouter()
    }),
    actions:{
        async loginAuthAdmin(username,password){
            const payload={
                user:username.value,
                pass:password.value
            }
                const validation=await axios.post(this.endpointLoginAdmin,payload)
                if(validation.status==200){
                    alert('sukses login')
                    this.dataLogAdmin=validation.data
                    this.dataToken=this.dataLogAdmin.token
                    this.dataIdAdmin=localStorage.setItem('id',this.dataLogAdmin.payload)
                        localStorage.setItem('tokenApi',this.dataToken)
                            this.router.push('/dashboardAdmin/preview')
                }
                else{
                    alert('invalid login')
                    window.location.reload()
                }
        },
         logout(){
            this.dataToken=null,
            localStorage.removeItem('tokenApi')
        }
    }
})

