const label = document.getElementById("myLabel");
const button = document.getElementById("myButton");
const div = document.getElementById("myDıv")

const midtermRate = 0.4;
const finalRate = 0.6;


function passingLesson() {
    midterm = document.getElementById("MidtermInput").value;
    final = document.getElementById("FinalInput").value;
    passingNote = document.getElementById("passingInput").value;

    note = midterm*midtermRate + final*finalRate;

    if (note >= passingNote) {
        div.innerHTML = `<h2>Your note: ${note}</h2><br><h2>Your lesson passing status:</h2><br><p>Congratulations! You passed the lesson.</p>`
    } else {
        div.innerHTML = `<h2>Your note: ${note}</h2><br><h2>Your lesson passing status:</h2><br><p>Sorry... You didn't pass the lesson.</p>`
    }
}


button.addEventListener('click', passingLesson);