const sentence = "hello there from lighthouse labs\n";
let time = 100;
for (let char of sentence) {
  setTimeout(() => {process.stdout.write(char)}, time += 100)
};