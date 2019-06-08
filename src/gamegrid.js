class GameGrid {
  constructor(size, cell = {}) {
    this.cells = this.generateSeries(size, cell).map(() => {
      return this.generateSeries(size, cell);
    });
  }

  generateSeries(size, cell = {}) {
    let row = Array(size)
      .fill(null)
      .map(() => ({ ...cell }));
    return row;
  }
}

export default GameGrid;
