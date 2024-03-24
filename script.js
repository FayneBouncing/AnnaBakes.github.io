const SubmitBtn = document.getElementById("submit");
const AddBtn = document.getElementById("add");
const MinusBtn = document.getElementById("minus")
const NameLabel = document.getElementById("namelabel");
const AddressLabel = document.getElementById("addresslabel");
const PNumberLabel = document.getElementById("pnumber");
const EmailLabel = document.getElementById("EA");
const DateLabel = document.getElementById("Date");
const TimeLabel = document.getElementById("Time");
const Thanks = document.getElementById("thanks");
let Name = document.getElementById("nameInput");
let Address = document.getElementById("address");
let Phone = document.getElementById("phone");
let Email = document.getElementById("email");
let Date = document.getElementById("date");
let Time = document.getElementById("time");
let order = [];
Thanks.style.display = "none";
MinusBtn.style.display = "none";
SubmitBtn.addEventListener("click", function submit() {
    Thanks.innerHTML = "Thank you " + Name.value + " for your request!";
    Thanks.style.display = "block";
    SubmitBtn.style.display = "none";
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
    AddBtn.style.display = "none";
    MinusBtn.style.display = "none";
    console.clear();
    console.log(Name.value + "\n" + Address.value + "\n" + Phone.value + "\n" + Email.value + "\n" + Date.value + "\n" + Time.value);
});
AddBtn.addEventListener("click", function add() {
    MinusBtn.style.display = "block";
    let desc = document.createElement("input");
    desc.setAttribute("type", "text");
    desc.insertBefore(desc,SubmitBtn);
});