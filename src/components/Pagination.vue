<template>
  <div class="pagination-wrapper">
    <button 
        class="btn btn-light"
        :disabled="currentPage === 1"
        @click="$emit('change', currentPage - 1)"
    >
      <i class="bi bi-chevron-compact-left"></i>
    </button>

    <button 
        class="btn btn-light"
        v-for="page in totalPages" 
        :key="page" 
        :class="{ active: page === currentPage }" 
        @click="$emit('change', page)"
    >
      {{ page }}
    </button>

    <button 
        class="btn btn-light"
        :disabled="currentPage === totalPages"
        @click="$emit('change', currentPage + 1)"
    >
      <i class="bi bi-chevron-compact-right"></i>
    </button>
  </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            currentPage: { type: Number, required: true },
            totalItems: { type: Number, required: true },
            perPage: { type: Number, default: 3 }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.totalItems / this.perPage);
            },
        }
    }
</script>

<style scoped>
    .pagination-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 8px;
        padding: 12px 0;
        z-index: 1000;
    }
</style>