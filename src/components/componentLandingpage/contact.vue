<template>
    <div class="contact" id="contact">
        <div class="contentContact">
            <div class="contentHeading">
                <h1>contact us</h1>
                <p>Email,call,or completed the form to learn how sisma can solve your problem</p>
                <b>sisma@gmail.com</b>
            </div>
            <div class="listContent">
                <div class="col" 
                v-for="(data,index) in listContent" :key="index">
                <h1>{{data.judul}}</h1>
                <p>{{ data.deskripsi }}</p>
                </div>
            </div>
        </div>
        <div class="contentContact2">            
            <div class="formContact">
                <div class="headingForm">
                    <h1>get in touch</h1>
                    <p>you can reach us anytime</p>
                </div>
                <div class="form">
                    <div class="dobleInput">
                    <input type="text" placeholder="firstname">
                    <input type="text" placeholder="lastname">
                </div>
                <input type="text" placeholder="username">
                <input type="email" placeholder="email">
                <textarea name="" id="" placeholder="textcontent"></textarea>
                <button>submit</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            listContent:[
                {judul:'costumers support',deskripsi:'our support team is availabel around the clock to addres any concerns or queries you many have'},
                {judul:'feedback and suggestion',deskripsi:'we value your feedback and are continuously working to improve sisma. your input is curcial in shaping the future of sisma'},
                {judul:'media inquiries',deskripsi:'for media releated questions or press inquires, please contact use in sisma@gmail.com'}
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

.contact {
    height: 100vh;
    display: grid;
    grid-template-columns: 45% auto;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, rgba(255,0,0,0), blue);
    padding: 0 10px;
}

/* LEFT CONTENT WRAPPER */
.contentContact {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: flex-start;
    padding: 30px 40px;
    gap: 40px;
}

/* HEADING SECTION */
.contentHeading {
    max-width: 500px; /* biar teks tidak terlalu panjang */
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.contentHeading h1 {
    font-size: 2.6rem;
    font-weight: 800;
    text-transform: capitalize;
}

.contentHeading p {
    font-size: 1rem;
    line-height: 1.5;
    color: #111;
}

.contentHeading b {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 5px;
    color: #0b63ff;
}

/* FEATURE LIST SECTION */
.listContent {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 kolom rapi */
    gap: 20px;
}

.col {
    background: rgba(255,255,255,.9);
    padding: 15px 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.col h1 {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
}

.col p {
    font-size: 0.95rem;
    line-height: 1.4;
    color: #444;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .contentContact {
        align-items: center;
        text-align: center;
        padding: 25px 20px;
    }

    .contentHeading {
        max-width: 100%;
    }

    .listContent {
        grid-template-columns: repeat(2, 1fr); /* tablet 2 kolom */
    }
}

@media (max-width: 600px) {
    .listContent {
        grid-template-columns: 1fr; /* HP 1 kolom */
        gap: 15px;
    }

    .contentHeading h1 {
        font-size: 2rem;
    }

    .contentContact {
        gap: 30px;
    }
}

/* FORM SIDE */
.contentContact2 {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.formContact {
    margin-top: 20px;
    padding: 20px;
    background: white;
    border-radius: 5px;
}

.headingForm {
    margin-bottom: 20px;
}

.dobleInput {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

input,
textarea {
    padding: 10px 20px;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
}

textarea {
    height: 150px;
    resize: none;
}

button {
    padding: 10px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .contact {
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 20px 0;
    }

    .contentHeading p,
    .contentHeading b {
        width: 100%;
    }
}

@media (max-width: 600px) {
    .dobleInput {
        grid-template-columns: 1fr;
    }
}

</style>