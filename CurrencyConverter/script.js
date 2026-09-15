let baseURL = 'https://api.api-ninjas.com/v1/convertcurrency?have=GBP&want=AUD&amount=5000';
let dropDowns = document.querySelectorAll(".dropDown");
let fromCurr = document.querySelector("#from");
let toCurr = document.querySelector("#to");
let msg = document.querySelector(".msg");
let btn = document.querySelector(".btn button");
let fromImg = document.querySelector(".fromImg").getAttribute('src');
let toImg = document.querySelector(".toImg").getAttribute('src');
for (let dropDown of dropDowns) {
    for (let currCode in countryList){
        let newOpt = document.createElement("option");
        newOpt.innerText = currCode;
        newOpt.value = currCode;
        if (dropDown.name === "from" && currCode === "USD"){
            newOpt.selected = "selected";
        }else if (dropDown.name === "to" && currCode === "INR"){
            newOpt.selected = "selected";
        }
        dropDown.append(newOpt);    
    }
    dropDown.addEventListener("change",(evt) =>{
        
        updateFlag(evt.target);
        
    })
}

const updateFlag=(element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    newSrc = `https://countryflagsapi.netlify.app/flag/${countryCode}.svg`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
const updateExchangeRate = async () =>{
    let amount = document.querySelector(".inputAmount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    
    const URL = `https://api.api-ninjas.com/v1/convertcurrency?have=${fromCurr.value}&want=${toCurr.value}&amount=${amtVal}`;
    let response = await fetch(URL);
    let data  = await response.json();
    console.log(data);
    let rate = response[toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    console.log("Exchanged");
});
window.addEventListener("load",()=>{
    updateExchangeRate();
});