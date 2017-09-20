// get table reference
let table = document.getElementsByClassName('list')[0].tBodies[0];

if(table) console.log("Found Table");

// variable initialization
let n = 0.0;
let sum = 0.0;
let points = 0;

// iterate through rows
for(let i = 0; i < table.rows.length - 1; i++) {

  // excluding PE and optional courses
  if(table.rows[i].cells[0].innerText.search(/ff|SPO/) != -1) continue;

  // parse grade
  let grade = parseFloat(table.rows[i].cells[1].innerText);

  // check if grade is valid
  if(grade >= 1 && grade <=6) {
    // averaging
    n++;
    sum += grade

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

// show result
table.insertRow(table.rows.length).innerHTML = "<td>Pluspunkte: " + points + "<br>Durchschnitt: " + Math.round(sum/n*1000)/1000 + "</td><td></td><td></td><td>Nesa + by Jonas Luther</td>";
