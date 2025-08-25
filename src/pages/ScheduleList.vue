<template>
    <div class="wreaper">
        <div class="header">
            <div>
                <h1>Agendamentos</h1>
            </div>
            <form @submit.prevent="getData">
                <div class="search-bar">
                    <input 
                        style="width: 600px;"
                        class="form-control" 
                        placeholder="Pesquise pelo paciente ou pelo médico responsável..."
                        v-model="formData.search"
                        @blur="getData"
                    >
                    <button class="btn btn-light" type="submit" >
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </form>
        </div>
        <div class="text-center" v-if="list_data.length <= 0 && !isLoading">
            <br/>
            <NoResult></NoResult>
        </div>
        <div class="text-center" v-if="list_data.length <= 0 && isLoading">
            <br/>
            <div class="spinner-grow secondary" role="status"></div>
        </div>
        <div class="card-container" v-for="data in this.list_data" :key="data.id">
           <div>
                <div class="card-header">
                    <h5>Consulta: {{ data.id }}</h5>
                    <h6>Data de emissão: {{ formatDate(data.dataCriacao) }}</h6>
                </div>
                <br/>
                <div class="card-body" role="user-card" >
                    <div style="display: grid;">
                        <span>Paciente: {{data.paciente.nome || "--"}}</span>
                        <span>Data de Nascimento: {{formatDate(data.paciente.dataNascimento)|| "--"}}</span>
                    </div>
                    <br/>
                    <span>Médico Responsável: {{data.medico.nome || "--"}}</span>
                </div>
           </div>
        </div>
        <div v-if="list_data.length > 0">
            <Pagination 
                :current-page="currentPage" 
                :total-items="total" 
                :per-page="perPage" 
                @change="pageChange"
            />
        </div>
    </div>
</template>

<script>
    import { reactive } from 'vue';
    import { api } from '../services/ScheduleService';
    import NoResult from '../components/NoResult.vue';
import Pagination from '../components/Pagination.vue';
    
    export default{
        name: 'Schedule-list',
        data(){
            return {
                list_data: [],
                isLoading: false,
                error: null,
                currentPage: 1,
                perPage: 3,
                total: 8,
                formData: reactive({
                    search: '',
                }),
            }
        },
        components: {
            NoResult,
            Pagination
        },
        methods:{
            async getData(){
                this.list_data = []
                this.isLoading = true;
                this.user = null;
        
                try {
                    const data = await api.getData(this.formData.search, this.currentPage)
                    this.list_data = data.items;
                    this.isLoading = false;
                } catch (err) {
                    this.error = err
                } finally {
                    this.isLoading = false
                }
            },
            pageChange(page) {
                this.currentPage = page;
                this.getData();
            },
            formatDate(dateStr) {
                const date = new Date(dateStr);
                return date.toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                });
            }
        },
        mounted() {
            this.getData()
        },
    }
</script>

<style>
    .wreaper{
        display: grid;
        padding: 0 60px;
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .search-bar{
        display: flex;
        gap: 6px;
        align-items: center;

        i{
            color: #656565;
        }
    }

    .card-container{
        background-color: #fff;
        width: 100%;
        border-radius: 0.5rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform 0.2s, box-shadow 0.2s;
        margin-bottom: 10px;
    }

    .card-container:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        margin-bottom: 0.75rem;
        font-size: 0.95rem;
    }

    .card-body {
        font-family: monospace;
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        gap: 0.4rem;
        font-size: 0.9rem;
        color: #333;
    }
</style>