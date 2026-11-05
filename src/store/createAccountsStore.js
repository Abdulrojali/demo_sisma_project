import {defineStore} from 'pinia'
import axios from 'axios'
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const createAccountsMahasiswa =defineStore('createAccountsMahasiswa',{
    state:()=>({
        endpointCreateAccountsMahasiswa :'http://localhost:8000/user/registers',
         router:useRouter()
    }),
    actions:{
        async createAccounts(name,nim,klass,username,password,email){
            const payload={
                nama:name.value,
                nimMhs:nim.value,
                kelas:klass.value,
                user:username.value,
                pass:password.value,
                mail:email.value
            }
            try{
                const respons=await axios.post(this.endpointCreateAccountsMahasiswa,payload)
                if(respons.status===200){
                    alert('sukses create accounts')
                    this.router.push('/loginMahasiswa')
                }
                else{
                    alert('invalid create accounts')
                    window.location.reload()
                }
            }
            catch(err){
                console.log(err)
            }
        }
    }
})

export const createAccountsAdmin =defineStore('createAccountsAdmin',{
    state:()=>({
        endpointCreateAccountsAdmin :'http://localhost:8000/admin/registers',
        router:useRouter()
    }),
    actions:{
        async createAccounts(nama,nia,user,pass,mail){
            try{
                            const payload={
                nii:nia.value,
                name:nama.value,
                username:user.value,
                password:pass.value,
                email:mail.value,
            }
                const respon=await axios.post('http://localhost:8000/admin/registers',payload)
                if(respon.status===200){
                    alert('sukses create accounts')
                    this.router.push('/loginAdmin')
                }
                else{
                    alert('invalid create Accounts please try again')
                    window.location.reload()
                }
            }
            catch(err){
                console.log(err)
            }
        }
    }
})