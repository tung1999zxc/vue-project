<template>
  <div class="drag-container">
    <div
      class="draggable"
      v-for="(item, index) in items"
      :key="item.id"
      :draggable="true"
      @dragstart="handleDragStart(index)"
      @dragend="handleDragEnd"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
      ],
      draggedItemIndex: null,
    };
  },
  methods: {
    handleDragStart(index) {
      this.draggedItemIndex = index;
    },
    handleDragEnd() {
      this.draggedItemIndex = null;
    },
  },
};
</script>

<style scoped>
.drag-container {
  display: flex;
}
.draggable {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  margin: 10px;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}
</style>