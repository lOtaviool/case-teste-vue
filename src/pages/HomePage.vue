<template>
    <div class="home-layout">
        <div>
            <img width="400px" alt="logo" src="https://domo.vc/wp-content/uploads/2023/09/fin-x.png">
        </div>
        <div style="width: 600px;">
            <h1>
                Plataforma integrada de
                <span style="color: #079DDF;">agendamento cirúrgico</span> e
                <span style="color: #079DDF;">remuneração médica</span>
            </h1>
        </div>
        <br/>
        <router-link class="btn-layout" to="/schedule-list">
            Ir para Agendamentos
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HomePage'
    }
</script>

<style>
    .home-layout {
        display: flex;
        flex-direction: column;   
        justify-content: center;  
        align-items: center;      
        text-align: center;                     
    }

    .btn-layout{
        background-color: #079DDF;
        text-decoration: none;
        font-size: 22px;
        font-weight: 600;
        fill: #fff;
        color: #fff;
        border-radius: 18px 18px 18px 18px;
        padding: 15px 60px 15px 60px;
    }

    .btn-layout:hover {
        cursor: pointer;
        font-size: 26px;
    }
</style>

