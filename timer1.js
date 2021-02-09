var myArgs = process.argv.slice(2).filter(num => !isNaN(num) && num >= 0);

let delay = 0;
for (let number of myArgs) {  
  delay += (Number(number) * 1000);  
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}