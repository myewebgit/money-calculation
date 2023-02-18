function totalExpAmount() {
    const food = parseFloat(document.getElementById('food').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const clothes = parseFloat(document.getElementById('clothes').value);
    if (food < 0 || rent < 0 || clothes < 0) {
        window.alert('negative exp value inputed!!!')
    }
    else {
        return exp = food + rent + clothes;;
    }
}

function income() {
    const income = parseFloat(document.getElementById('income').value);
    if (income < 0) {
        window.alert('negative income value inputed!!!')
    }
    else {
        return income;;
    }
}

document.getElementById('calculation').addEventListener('click', function () {
    const totalExp = document.getElementById('total-exp');
    totalExp.innerText = Math.round(totalExpAmount());

    const totalBalance = document.getElementById('total-bal');
    const totalBalanceAmount = income() - totalExpAmount();
    totalBalance.innerText = parseInt(totalBalanceAmount);
})

document.getElementById('save-btn').addEventListener('click', function () {
    const save = parseFloat(document.getElementById('save').value);
    const savings = document.getElementById('save-amt');
    const savingsAmount = Math.round(income() * save / 100);
    if (save < 0) {
        window.alert('savings amount can not be negative!!')
    }
    else {
        savings.innerText = savingsAmount;
    }

    const reamin = document.getElementById('remain');
    const remainAmount = Math.round(income() - savingsAmount - totalExpAmount());
    reamin.innerText = remainAmount;
})
