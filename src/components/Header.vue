<template>
    <div class="head">
        <div class="logo">
            <img width="140px" alt="logo" src="https://domo.vc/wp-content/uploads/2023/09/fin-x.png">
        </div>
        <div style="display: flex; gap: 20px; margin-right: 100px;">
            <router-link class="nav-item" to="/">Home</router-link>
            <router-link class="nav-item" to="/schedule-list">Agendamentos</router-link>
        </div>
  </div>
</template>

<script>
    import { reactive } from 'vue'

    export default{
        name: 'Header',
        data() {
            return {
                formData: reactive({
                    search: ''
                }),
            }
        },
        methods: {
            emitSearch() {
                this.$emit("update:search", this.searchText)
            }
        }
    }
  
</script>

<style>
    .head {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        gap: 1rem;
        padding: 0 1rem;
        background-color: #fff;
        z-index: 1000;
    }

    .logo{
        display: flex;
        padding: 5px;
        align-items: center;
        justify-content: center;
    }

    .nav-item{
        text-decoration: none;
        color: #959FA6;
    }

    .nav-item:hover {
        cursor: pointer;
        color: #079DDF
    }
</style>