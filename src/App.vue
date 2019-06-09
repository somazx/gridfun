<template>
  <div id="app">
    <div class="board">
      <div class="grid">
        <div class="row" v-for="(row, rowIndex) in grid.cells" :key="rowIndex">
          <div
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="cell"
            @click="incrementCellColor(cell)"
            :style="bgColorStyle(cell)"
            @mousemove="mouseMoves(cell, $event)"
          ></div>
        </div>
      </div>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import GameGrid from "@/gamegrid";

const rand = () => Math.floor(Math.random() * Math.floor(255));
const rgb = () => ({ r: rand(), g: rand(), b: rand() });

export default {
  name: "app",
  data: () => ({
    grid: new GameGrid(12, { color: { r: 240, g: 240, b: 240 } })
  }),
  methods: {
    incrementCellColor(cell) {
      cell.color = rgb();
    },
    bgColorStyle(cell) {
      return `background-color: rgb(${cell.color.r},${cell.color.g},${cell.color.b})`;
    },
    mouseMoves(cell, event) {
      if (event.buttons != 1) return;
      cell.color = rgb();
    },
    reset() {
      this.grid = new GameGrid(12, { color: { r: 240, g: 240, b: 240 } });
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.board {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid {
  display: flex;
  flex-wrap: wrap;
}
.cell {
  height: 40px;
  width: 40px;
  border: 1px solid gray;
  margin: 2px;
}

button {
  padding: 10px;
  width: 200px;
  background-color: indianred;
  color: white;
}
</style>
