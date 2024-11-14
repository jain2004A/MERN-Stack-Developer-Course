const fs = require("fs");

// fs.writeFile("messege.txt" , "Hello from node js" , (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// }); 

fs.readFile('messege.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 