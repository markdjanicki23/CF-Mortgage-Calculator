
function homeLoan(){

    let loanInput = Number(document.getElementById("loanInput").value);
    let termInput = Number(document.getElementById("termInput").value);
    let rateInput = Number(document.getElementById("rateInput").value);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    let monthPayment = ((loanInput) * (rateInput / 1200) / (1 - (1 + rateInput / 1200) ** (~termInput + 1)));
    let totalInterest = ((loanInput) * (rateInput / 1200));

    
    let monthRound = formatter.format(monthPayment);
    let loanRound = formatter.format(loanInput);
    let interestRound = formatter.format(totalInterest);

    document.getElementById("monthlyOut").innerHTML = `${monthRound}`;
    document.getElementById("principalOut").innerHTML = `${loanRound}`;
    document.getElementById("interestOut").innerHTML = `${interestRound}`;
}