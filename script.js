const Submit = document.getElementById("submit");
const NameLabel = document.getElementById("namelabel");
const AddressLabel = document.getElementById("addresslabel");
const PNumberLabel = document.getElementById("pnumber");
const EmailLabel = document.getElementById("EA");
const DateLabel = document.getElementById("Date");
const TimeLabel = document.getElementById("Time");
let Name = document.getElementById("nameInput");
let Address = document.getElementById("address");
let Phone = document.getElementById("phone");
let Email = document.getElementById("email");
let Date = document.getElementById("date");
let Time = document.getElementById("time");
let Thanks = document.getElementById("thankyou");
Thanks.style.display = "none";
Submit.addEventListener("click", function Sumbit(){
    Thanks.innerHTML = "Thank you " + Name.value + " for sumbiting a request for " + Date.value + " at " + Time.value + " we will text " + Phone.value + " to confirm your request";
    Thanks.style.display = "block";
    Submit.style.display = "none";
    NameLabel.style.display = "none";
    AddressLabel.style.display = "none";
    PNumberLabel.style.display = "none";
    EmailLabel.style.display = "none";
    DateLabel.style.display = "none";
    TimeLabel.style.display = "none";
    Name.style.display = "none";
    Address.style.display = "none";
    Phone.style.display = "none";
    Email.style.display = "none";
    Date.style.display = "none";
    Time.style.display = "none";
    console.clear(0);
    Console.log(Name.value + "\n" + Address.value + "\n" + Phone.value + "\n" + Email.value + "\n" + Date.value + "\n" + Time.value);
});