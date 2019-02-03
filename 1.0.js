const rand = limit => Math.floor(Math.random() * limit);
const sample = arr => arr[rand(arr.length)];

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
  x: pt.x + DIR_DELTAS[pt.dir].x,
  y: pt.y + DIR_DELTAS[pt.dir].y,
  dir: pt.dir
});

const drawPt = pt => {
  point(pt.x, pt.y);
};

let pts = [...new Array(1000)].map(makePt);

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  pts.forEach(drawPt);
  pts = pts.map(progressPt);
}
