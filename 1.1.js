const rand = limit => Math.floor(Math.random() * limit);
const sample = arr => arr[rand(arr.length)];
const chance = ratio => Math.random() <= ratio;
const mod = (x, y) => ((x % y) + y) % y

const WIDTH = 800;
const HEIGHT = 500;

const DIRS = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
const DIR_DELTAS = {
  UP: {
    y: -1,
    x:  0
  },
  DOWN: {
    y:  1,
    x:  0,
  },
  LEFT: {
    y:  0,
    x: -1
  },
  RIGHT: {
    y:  0,
    x:  1
  }
}

const makePt = () => ({
  x: rand(WIDTH),
  y: rand(HEIGHT),
  dir: sample(DIRS)
});

const progressPt = pt => ({
  x: mod(pt.x + DIR_DELTAS[pt.dir].x, WIDTH),
  y: mod(pt.y + DIR_DELTAS[pt.dir].y, HEIGHT),
  dir: chance(.99) ? pt.dir : sample(DIRS)
});

const drawPt = pt => {
  point(pt.x, pt.y);
};

let pts = [...new Array(100)].map(makePt);

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  pts.forEach(drawPt);
  pts = pts.map(progressPt);
}
