const withdrowBtn = document.getElementById('withdrow_btn');

        withdrowBtn.addEventListener('click', function(){
            const withdrowedAmountElement = document.getElementById('withdrowed_amount');
            const previousWithdrowedAmount = parseFloat(withdrowedAmountElement.innerText);
            
            const withdrowField = document.getElementById('withdrow_field');
            const newWithdrowAmount = parseFloat(withdrowField.value);

            withdrowField.value = "";

            if(isNaN(newWithdrowAmount)){
                alert("Please type a valid amount")
                return;
            }
            const totalAmountElement = document.getElementById('total_amount');
            const previousTotalAmount = parseFloat(totalAmountElement.innerText);

            if(previousTotalAmount < newWithdrowAmount){
                alert("Your account balance is low! Please deposit first");
                return;
            }
            const totalWithdrow = previousWithdrowedAmount + newWithdrowAmount;
            withdrowedAmountElement.innerText = totalWithdrow;
            
            const totalBalance = previousTotalAmount - newWithdrowAmount;
            totalAmountElement.innerText = totalBalance;


        })