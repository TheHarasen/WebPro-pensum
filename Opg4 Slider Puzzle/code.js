const puzzle = document.getElementById('puzzle');
const size = 4;
let tiles = [];

function getTileName(index) {
    const row = Math.floor(index / size);
    const col = index % size;
    return `hall-${row}${col}`;
}

function initPuzzle() {

  let tileOrder = [...Array(size * size).keys()];
  do {
    tileOrder = tileOrder.sort(() => Math.random() - 0.5);
  } while (!isSolvable(tileOrder));

  tiles = tileOrder.map((tileIndex, i) => {
    const tile = document.createElement('div');
    tile.classList.add('tile');

    if (tileIndex === size * size - 1) {
      tile.classList.add('empty'); // last tile is the empty space
    } else {
      const name = getTileName(tileIndex);
      tile.style.backgroundImage = `url('pieces/${name}.jpg')`;
    }

    tile.dataset.index = i;
    tile.dataset.tile = tileIndex;
    tile.addEventListener('click', () => moveTile(i));
    return tile;
    });

    renderPuzzle();
}

function moveTile(index) {
  const emptyIndex = tiles.findIndex(t => t.classList.contains('empty'));
  const [x1, y1] = [index % size, Math.floor(index / size)];
  const [x2, y2] = [emptyIndex % size, Math.floor(emptyIndex / size)];

  if ((Math.abs(x1 - x2) + Math.abs(y1 - y2)) === 1) {
    [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
    renderPuzzle();
  }
}

function renderPuzzle() {
  puzzle.innerHTML = '';
  tiles.forEach((tile, i) => {
    tile.dataset.index = i;
    tile.addEventListener('click', () => moveTile(i));
    puzzle.appendChild(tile);
  });
}

function isSolvable(arr) {
  let inversions = 0;
  const a = arr.filter(n => n !== size * size - 1);
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) inversions++;
    }
  }
  const emptyRow = Math.floor(arr.indexOf(size * size - 1) / size);
  return (inversions + emptyRow) % 2 === 0;
}