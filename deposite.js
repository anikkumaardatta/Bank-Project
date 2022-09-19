const depositeBtn = document.getElementById('deposite_btn');

    depositeBtn.addEventListener('click', function(){
        const depositedAmountElement = document.getElementById('deposited_amount');
        const previousDepositedAmount = parseFloat(depositedAmountElement.innerText);

        const depositeFiled = document.getElementById('deposite_field');
        const newDepositeAmount = parseFloat(depositeFiled.value);

        depositeFiled.value = "";

        if(isNaN(newDepositeAmount)){
            alert("Please type a valid amount")
            return;
        }
        if(newDepositeAmount > 500001){
            alert("too long")
            return;
        }
        const totalDeposite = previousDepositedAmount + newDepositeAmount;
        depositedAmountElement.innerText = totalDeposite;

        
        const mainBalance = document.getElementById('total_amount');
        const previousMainBalance = parseFloat(mainBalance.innerText);

        const totalBalance = newDepositeAmount + previousMainBalance;
        mainBalance.innerText = totalBalance

    })