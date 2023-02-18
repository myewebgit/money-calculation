

document.getElementById('calculation').addEventListener('click', function(){
   
    const income = document.getElementById('income');
    const incomeAmount = parseFloat(income.value);
    const food = document.getElementById('food');
    const FoodAmount = parseFloat(food.value);
    const rent = document.getElementById('rent');
    const rentAmount = parseFloat(rent.value);
    const clothes = document.getElementById('clothes');
    const clothesAmount = parseFloat(clothes.value);
    const totalExp = document.getElementById('total-exp');
    const totalExpAmount = FoodAmount+rentAmount+clothesAmount;
    totalExp.innerText =totalExpAmount;

    const totalBalance = document.getElementById('total-bal');
    const totalBalanceAmount = incomeAmount-totalExpAmount;
    totalBalance.innerText =totalBalanceAmount;

    
})

document.getElementById('save-btn').addEventListener('click',function(){
    console.log('save buttun ok')
    const income = document.getElementById('income');
    const incomeAmount = parseFloat(income.value);
    const save = document.getElementById('save');
    const saveAmount = parseFloat(save.value);
    const savings = document.getElementById('save-amt');
    const savingsAmt = parseFloat(savings.value);
    const savingsAmount = incomeAmount/saveAmount;
    
    savings.innerText =savingsAmount;


    const totalBalance = document.getElementById('total-bal');
    const totalBalanceAmount = incomeAmount-totalExpAmount;
    totalBalance.innerText =totalBalanceAmount;

    const reamin = document.getElementById('remain');
    const remainAmount = totalBalanceAmount - savingsAmount;
    reamin.innerText = remainAmount;
   
})


