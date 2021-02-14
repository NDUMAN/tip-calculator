let btn = document.getElementById('Btn');

btn.addEventListener('click', function () {

    let billAmount = document.getElementById('bill_amt').value;
    let tipPercentage = document.getElementById('tip_perc').value;

    let tipAmount = document.getElementById('tip_amt').value = billAmount / tipPercentage;
    document.getElementById('tot_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);
})