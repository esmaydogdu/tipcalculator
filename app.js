function calculateTip() {

    var billAmount = document.getElementById('billAmount').value;
    var peopleAmount = document.getElementById('peopleAmount').value;
    var service = document.getElementById('services').value;
    var tipText = document.getElementById('tipText');
    var tip = (service * (billAmount / peopleAmount)).toFixed(0);
    tipText.innerHTML = `Tip is ${tip}$ for one person `;



}