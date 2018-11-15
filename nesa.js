// get table reference
let table = document.getElementsByClassName('list')[0].tBodies[0];

if(table) console.log("Found Table");

// variable initialization
let n = 0.0;
let sum = 0.0;
let points = 0;
let sSum = 0;
let m = 0;

// iterate through rows
for(let i = 0; i < table.rows.length - 1; i++) {

  // excluding PE and optional courses
  if(table.rows[i].cells[0].innerText.search(/ff|SPO/) != -1) continue;
  if(table.rows[i].cells.length < 2) continue;
  // parse grade
  let grade = parseFloat(table.rows[i].cells[1].innerText);

  // check if grade is valid
  if(grade >= 1 && grade <=6) {
    // averaging
    n++;
    sum += grade
    
    if(table.rows[i].cells[0].innerText.startsWith("s")) {
       // Schwerpunkt/Focus lessons count together
       sSum += grade;
       m++;
    } else {
      //check if grade is "genügend"
      if(grade>=4.0){
        // add points with a multiplier of 1
        points += Math.round((grade-4)*2)/2*1;
      } else {
        // add points with a multiplier of 2
        points += Math.round((grade-4)*2)/2*2;
      }
    }
  }
}
let sAverage = sSum / m;
if(sAverage >= 4.0) {
  points += Math.round((sAverage-4)*2)/2*1;
} else {
  points += Math.round((sAverage-4)*2)/2*2;
}
// show result
table.insertRow(table.rows.length).innerHTML = "<td style=\"border-bottom: 0; padding-top: 2mm;\"><a target="_blank" rel="noopener noreferrer" href='https://github.com/kryo4096/nesaplus'>NesaPlus</a><i></i></td><td style=\"border-bottom: 0; padding-top: 2mm;\">Pluspunkte: " + points + "</td><td style=\"border-bottom: 0; padding-top: 2mm;\">Durchschnitt: " + Math.round(sum/n*1000)/1000 + "</td><td style=\"border-bottom: 0; padding-top: 2mm;\"> </td><td style=\"border-bottom: 0; padding-top: 2mm;\"> </td>";
