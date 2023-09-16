<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button" :class="{ 'pagination-button-disabled': currentPage === 1 }">Previous</button>
    <span class="pagination-text">Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button" :class="{ 'pagination-button-disabled': currentPage === totalPages }">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    onPageChange: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage) || 1;
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.onPageChange(this.currentPage);
        this.$emit('onPageChange', this.currentPage);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.onPageChange(this.currentPage);
        this.$emit('onPageChange', this.currentPage);
      }
  },
}

};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.pagination-button {
  padding: 10px 20px;
  cursor: pointer;
  background: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.pagination-button:hover {
  background: #2980b9;
}

.pagination-button-disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

.pagination-text {
  margin: 0 20px;
  font-weight: bold;
}
</style>
