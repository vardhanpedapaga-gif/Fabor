alert("APPJS LOADED");
const firebaseConfig = {
  apiKey: "AIzaSyClKgfxNaBxpu5GH7PBe0sRTy5HKuN84Lk",
  authDomain: "fabor-1503.firebaseapp.com",
  projectId: "fabor-1503",
  storageBucket: "fabor-1503.firebasestorage.app",
  messagingSenderId: "398403185616",
  appId: "1:398403185616:web:bcf1d7e8ddb767cfd6a7d5"
};

firebase.initializeApp(firebaseConfig);
alert("Firebase initialized");
alert("APPJS LOADED");
console.log("app.js loaded");

const btn = document.getElementById("loginBtn");

if(btn){

btn.addEventListener("click", () => {

alert("Login button clicked");

const provider =
new firebase.auth.GoogleAuthProvider();

firebase.auth()
.signInWithRedirect(provider)
.catch((error) => {

alert(error.message);
console.log(error);

});

});

}

firebase.auth()
.getRedirectResult()
.then((result) => {

if(result.user){

alert(
"Welcome " +
result.user.displayName
);

}

})
.catch((error) => {

alert(
"Firebase Error: " +
error.message
);

});

/* ---------------- */
/* JOB SYSTEM */
/* ---------------- */

let jobs = [];

function showPage(id){

document
.querySelectorAll(".page")
.forEach(page=>{

page.classList.remove("show");

});

document
.getElementById(id)
.classList.add("show");

}

function postJob(){

let farmerName =
document.getElementById("farmerName").value;

let workTitle =
document.getElementById("workTitle").value;

let location =
document.getElementById("location").value;

let wage =
document.getElementById("wage").value;

let phone =
document.getElementById("phone").value;

if(
farmerName === "" ||
workTitle === "" ||
location === "" ||
wage === "" ||
phone === ""
){

alert("Fill all fields");
return;

}

let job = {

farmerName,
workTitle,
location,
wage,
phone

};

jobs.push(job);

renderJobs();

alert("Job Posted Successfully");

showPage("labour");

}

function renderJobs(){

let container =
document.getElementById("jobsContainer");

if(!container) return;

container.innerHTML = "";

if(jobs.length === 0){

container.innerHTML = `

<div class="job-card">
No jobs available yet.
</div>

`;

return;

}

jobs.forEach((job,index)=>{

let card =
document.createElement("div");

card.className = "job-card";

card.innerHTML = `

<div class="job-top">

<div class="job-title">
${job.workTitle}
</div>

<div class="salary">
₹${job.wage}
</div>

</div>

<div class="job-detail">
📍 ${job.location}
</div>

<div class="buttons">

<button
class="accept"
onclick="acceptJob(${index})">

Accept

</button>

<button
class="reject"
onclick="rejectJob(${index})">

Reject

</button>

</div>

`;

container.appendChild(card);

});

}

function acceptJob(index){

let job = jobs[index];

let container =
document.getElementById("jobsContainer");

container.innerHTML = `

<div class="job-card">

<div class="job-title">
${job.workTitle}
</div>

<div class="job-detail">
Farmer: ${job.farmerName}
</div>

<div class="job-detail">
Location: ${job.location}
</div>

<div class="job-detail">
Wage: ₹${job.wage}
</div>

<div class="job-detail">
Phone: ${job.phone}
</div>

</div>

`;

}

function rejectJob(index){

jobs.splice(index,1);

renderJobs();

}

renderJobs();

function login(){}
