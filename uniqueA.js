function uniqueA() {
let count = 0;
  return function(name) {
    count = count + 1;
    console.log(`function a called ${count} time by ${name}`);
  };
};

export const a = uniqueA();
