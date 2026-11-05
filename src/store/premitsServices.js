import {defineStore} from 'pinia'
import axios from 'axios'
import {ref} from 'vue'
export const premits = defineStore('premits',{
    state:()=>{
        const endpointPremits ='http://localhost:8000/premits'
        const payload=[]
        const allDataPremits=[]
        const responsedataHistoryById=[];
        const dataResponseAcceptPremits=[];
        const statusUpdate=ref('')
        const statuspayload = false
        const payloadViewPremits=ref('')
        const dataFilterSelected=null
        const premitsLocalStorage = ref(JSON.parse(localStorage.getItem("dataPremits")) || [])
        return{premitsLocalStorage,dataFilterSelected,dataResponseAcceptPremits,allDataPremits,endpointPremits,payload,statuspayload,statusUpdate,payloadViewPremits,responsedataHistoryById}
    },
    actions:{
        async getPremits(){
            const dataPremits = await axios.get(this.endpointPremits)
            if(dataPremits){
                this.allDataPremits=dataPremits.data
            }
        },
         newPremits(namaa,nim,clas,kontent,matakuliah,datedata,dataUser){
           const dateObj = new Date(datedata);
            const dataBaru = {
                _id: Date.now(), // Disarankan menggunakan Date.now() agar benar-benar unik
                name: namaa,
                nim: nim,
                class: clas,
                deskripsi: kontent,
                mataKuliah: matakuliah,
                datePremits: dateObj.toLocaleString(),
                IdMahasiswa: dataUser
            }

            // 2. Push langsung ke state tanpa .value
            this.premitsLocalStorage.push(dataBaru)

            // 3. Simpan perubahan ke localStorage agar tidak hilang saat di-refresh
            localStorage.setItem("dataPremits", JSON.stringify(this.premitsLocalStorage))

            alert("berhasil")
            if(this.$router){
         this.$router.push("dashboardMahasiswa/history")
            }

            
        },
        async deletePremits(id){
            const filtering =this.premitsLocalStorage.filter((data)=> data._id != id)
            if(filtering){    
                localStorage.setItem("dataPremits",JSON.stringify(filtering))
                alert("berhasil hapus")
                window.location.reload()
            }
      
        },
        async updatePremits(idUser,namaa,nim,clas,kontent,matakuliah,datedata,idPremits){
            const updatePremits=await axios.post(`http://localhost:8000/premits/user/update/${idPremits}`,{
                nama:namaa,
                nimMhs:nim,
                kelas:clas,
              content:kontent,
                matkul:matakuliah,
                datenow:datedata,
                objectid:idUser
            })
            if(!updatePremits){
                alert('invalid to update premits')
                this.statusUpdate=false
                window.location.reload()
            }
            else{
                this.statusUpdate=true                
            }
        },
        async getPremitsById(id){
            const getPremits=this.premitsLocalStorage.filter(data=> data._id == id)
                 this.payloadViewPremits=getPremits
        },
        async getPremitsByIdUser(){
            const dataId= localStorage.getItem('id')
                 const response =await axios.get(`http://localhost:8000/premits/user/${dataId}`)
                if(response){
                    console.log(response.json())
                    this.payload=response
                }
            },
        getDataFilter(data){
            this.dataFilterSelected=data
        },
        async pushAcceptDataPremits(iduser){
            const urlEndpoint='http://localhost:8000/premits/admin/pushData'
            const mataKuliah =[
                {nama:'jaringan Komputer',dosenPengampu:'cecep warman m.kom'},
                {nama:'enterprise Architecture Integrations',dosenPengampu:'sudin saepudin m.kom'},
                {nama:'manajemen proses bisnis',dosenPengampu:'sudin saepudin m.kom'},
                {nama:'proyek perangkat lunak',dosenPengampu:'muhammad muslih. ST, M.kom'},
                {nama:'metode penelitian',dosenPengampu:'rieska ayuningsih.ST, M.kom'},
              ]
              mataKuliah.map(data=>{
                const matchData=data.nama.toLowerCase().includes(this.dataFilterSelected)
                if(!matchData){
                    console.log('invalid match data')
                }
                else{
                    console.log('invalid')
                }
              })
            const response=await axios.post(urlEndpoint,{id:iduser})
            if(response){
                alert('sukses to push data premits')
                window.location.reload()
            }
            else{
                alert(response.err)
            }
        },
        async getPremitsAccept(){
            const urlEndpoint='http://localhost:8000/premits/admin'
            const response = await axios.get(urlEndpoint)
            if(response){
                this.dataResponseAcceptPremits=response.data
            }
            else{
                alert('invalid get accept premits')
            }
        }
    }
})