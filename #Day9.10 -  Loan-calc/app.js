document.querySelector('#calc').addEventListener('click', function(e){
    e.preventDefault();
    var LoanAmount = document.getElementById('total-amount').value;
    var InterestRate = document.getElementById('interest').value;
    var Month = document.getElementById('Month').value;
    
    const interest = (LoanAmount * (InterestRate * 0.01)) / Month;
    const total = ((LoanAmount / Month) + interest).toFixed(2);

    const totalInterest = (total * Month - LoanAmount).toFixed(2);

    const totalPayment = (total * Month).toFixed(2);
  
    document.querySelector("#Monthly-Payment").innerHTML = "Monthly-Payment:      ₹ " + total;

    document.querySelector('#Interest-Only').innerHTML   = "Interest:             % " + totalInterest;

    document.querySelector('#Total-Payment').innerHTML   = "Total-Payment:        ₹ " + totalPayment;
})
