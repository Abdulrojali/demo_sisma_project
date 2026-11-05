<template>
    <div class="footer">
        <div class="contentFooter">
            <div class="headingFooter" v-for="(data,index) in heading" :key='index'>
                <img v-lazy="data.logoSima" alt="">
                <h1>{{ data.headingContent }}</h1>
            </div>
            <div class="submenuContent">
                <div class="content1">
                    <div class="col">
                        <h2>About</h2>
                        <ul>
                            <li>personality</li>
                            <li>judul</li>
                            <li>teks</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>menu</h2>
                        <ul>
                            <li>buat surat</li>
                            <li>lihat surat</li>
                            <li>download</li>
                            <li>pengajuan</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>pages</h2>
                        <ul>
                            <li>landing page</li>
                            <li>login</li>
                            <li>create Accounts</li>
                            <li>dashboard</li>
                        </ul>
                    </div>
                </div>
                <div class="content2">
                    <h1>sosial media</h1>
                    <p>follow us sosial media to find latest updates on our progress</p>
                    <ul>
                        <li
                        v-for="(data,index) in pathurl "
                        :key="index">
                    <i :class="`${data.url}`"></i>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="submenuContent2">
                <p>copyright 2020 sisma. All right reserved</p>
                <ul>
                    <li>terms of service</li>
                    <li>privacy policy</li>
                    <li>security</li>
                </ul>
                <p>english</p>
            </div>
    </div>
</template>

<script>
import logo from '../../assets/sima.png'
export default{
    data(){
        return{
            heading:[
                {headingContent:'Sisma',logoSima:logo}
            ],
            pathurl:[
                {url:'fa-brands fa-twitter'},
                {url:'fa-brands fa-facebook'},
                {url:'fa-brands fa-instagram'},
                {url:'fa-brands fa-telegram'},
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

.footer {
    width: 100%;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
}

/* MAIN WRAPPER */
.contentFooter {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
}

/* HEADER LOGO + NAMA */
.headingFooter {
    display: flex;
    align-items: center;
    gap: 12px;
}

.headingFooter img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    box-shadow: 0 0 4px #ccc;
}

.headingFooter h1 {
    font-size: 1.8rem;
    font-weight: 800;
}

/* MENU WRAPPER */
.submenuContent {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d1d1d1;
}

/* LEFT SIDE – THREE COLUMNS */
.content1 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.col {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.col h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.col ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.95rem;
    color: #444;
}

/* RIGHT SIDE – SOCIAL */
.content2 h1 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.content2 p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 15px;
}

.content2 ul {
    display: flex;
    gap: 18px;
    list-style: none;
}

.content2 ul li i {
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.2s ease;
}

.content2 ul li i:hover {
    transform: translateY(-3px);
    color: #007bff;
}

/* FOOTER BOTTOM BAR */
.submenuContent2 {
    width: 100%;
    max-width: 1200px;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    padding: 0 20px;
}

.submenuContent2 ul {
    display: flex;
    gap: 25px;
    list-style: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .submenuContent {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .content1 {
        justify-content: center;
        gap: 40px;
    }

    .content2 ul {
        justify-content: center;
    }

    .submenuContent2 {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
}

@media (max-width: 600px) {
    .content1 {
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }

    .headingFooter h1 {
        font-size: 1.5rem;
    }

    .content2 h1 {
        font-size: 1.2rem;
    }
}

</style>