<!-- dragAndDropModule.vue -->

<template>
  <div class="drag-container row">
    <div class="col-6">
      <div
      class="draggable "
      v-for="(item, index) in items"
      :key="item.id"
      :draggable="true"
      @dragstart="handleDragStart(index)"
      @dragend="handleDragEnd"
      @dragover.prevent
      @drop="handleDrop(index)"
    >
      {{ item.text }}
    </div> 
    </div>
<div class="col-6">
  <div
  class="draggable col-6"
  v-for="(item, index) in items2"
  :key="item.id"
  :draggable="true"
  @dragstart="handleDragStart(index)"
  @dragend="handleDragEnd"
  @dragover.prevent
  @drop="handleDrop(index)"
>
  {{ item.text }}
</div>
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
      items2: [
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
    handleDrop(targetIndex) {
      if (this.draggedItemIndex !== null) {
        const draggedItem = this.items[this.draggedItemIndex];
        // this.items.splice(this.draggedItemIndex, 1 ,this.items[targetIndex]); // Remove from old position
        // this.items.splice(targetIndex, 1, draggedItem); // Insert at new position
        this.items2.splice(this.draggedItemIndex, 1); // Remove from old position
        this.items2.splice(targetIndex, 0, draggedItem); // Insert at new position
        this.items.splice(targetIndex, 1); // Insert at new position
        this.draggedItemIndex = null;
      }
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
