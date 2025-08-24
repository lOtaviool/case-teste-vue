<template>
    <div>
        <h1>Listagem de agendamentos</h1>
    </div>
</template>

<script>
    import { api } from '../services/ScheduleService';

    export default{
        name: 'Schedule-list',
        data(){
            return {
                list_data: [],
                isLoading: false,
                error: null,
            }
        },
        methods:{
            async getData(){
                this.isLoading = true;
                this.user = null;
        
                try {
                    const data = await api.getData()
                    this.list_data = data;
                    console.log('AQUI', this.list_data)
                } catch (err) {
                    this.error = err
                } finally {
                    this.isLoading = false
                }
            },
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style></style>