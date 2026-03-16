let votes = JSON.parse(localStorage.getItem("votes")) || {
    Suresh:0,
    Deepank:0,
    Abhik:0
};

function updateUI(){

document.getElementById("sureshVotes").innerText = votes.Suresh;
document.getElementById("deepankVotes").innerText = votes.Deepank;
document.getElementById("abhikVotes").innerText = votes.Abhik;

let total = votes.Suresh + votes.Deepank + votes.Abhik;
document.getElementById("totalVotes").innerText = total;

}

function saveVotes(){
localStorage.setItem("votes", JSON.stringify(votes));
}

function addVote(){

let student = document.getElementById("studentName").value;
let monitor = document.getElementById("monitor").value;

if(student === ""){
alert("Enter student name");
return;
}

votes[monitor]++;

saveVotes();
updateUI();

document.getElementById("studentName").value="";
}

function resetVotes(){

votes = {
Suresh:0,
Deepank:0,
Abhik:0
};

saveVotes();
updateUI();

}

updateUI();