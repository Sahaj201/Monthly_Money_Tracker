// changing button sign and text according to selected value + or -

var ops = '+'
var income_count = 0
var expense_count = 0
var income_amt = 0
var expense_amt = 0

document.querySelector('.select-box').addEventListener("change", function () {
    if (this.value == '+') {
        ops = '+'
        document.querySelector('.submit-button').innerHTML = '<i class="fa fa-plus-circle" style="padding: 2px;"></i> Add'
    } else {
        ops = '-'
        document.querySelector('.submit-button').innerHTML = '<i class="fa fa-minus-circle" style="padding: 2px;"></i> Minus'
    }
});


// adding income into income div or expense div
document.querySelector('.submit-button').addEventListener('click', function () {
    var desc = document.querySelector('.des-box').value;
    var amount = Number(document.querySelector('.amt-box').value);
    if (desc.length == 0 || amount == '') {
        alert("Please fill all details")
    } else if (ops == '+') {
        var ie_div = document.querySelector('.income-div-container');
        income_count += 1
        income_amt += amount
        var innerHTML = '<span class="ie-sno">' + income_count + '.</span>'
        innerHTML += '<h3 class="ie-bar-des">' + desc + '</h3>'
        innerHTML += '<h4 class="ie-value' + ' ie-' + income_count + '">' + amount + '</h4>'
        innerHTML += '<span class="ie-cross-btn"><i class="fa fa-times-circle" ' + ' id="ie-' + income_count + '" style="padding: 2px;"></i></span>'
        let div = document.createElement('div');
        div.classList.add('ie-div')
        div.classList.add('ie-' + income_count)
        div.id = 'ie-' + income_count
        div.innerHTML = innerHTML
        ie_div.appendChild(div);
    } else {
        var ee_div = document.querySelector('.expense-div-container');
        expense_count += 1
        expense_amt += amount
        var innerHTML = '<span class="ie-sno">' + expense_count + '.</span>'
        innerHTML += '<h3 class="ie-bar-des">' + desc + '</h3>'
        innerHTML += '<h4 class="ie-value' + ' ee-' + expense_count + '">' + amount + '</h4>'
        innerHTML += '<span class="ie-cross-btn"><i class="fa fa-times-circle"' + ' id="ee-' + expense_count + '" style="padding: 2px;"></i></span>'
        let div = document.createElement('div');
        div.classList.add('ie-div')
        div.classList.add('ee-' + expense_count)
        div.style.background = 'linear-gradient( 90deg, rgba(186, 47, 22, 1) 32%, rgba(228, 66, 54, 1) 53% )';
        div.innerHTML = innerHTML
        ee_div.appendChild(div);
    }

    document.querySelector('.income-cal-div').textContent = '+' + income_amt
    document.querySelector('.expense-cal-div').textContent = '-' + expense_amt
    document.querySelector('.total-div').textContent = income_amt - expense_amt

    document.querySelector('.des-box').value = "";
    document.querySelector('.amt-box').value = 0;
});

document.querySelector('.income-div-container').addEventListener('click', (e) => {
    // Retrieve id from clicked element
    let elementId = e.target.id;
    // If element has id
    console.log(elementId)

    if (elementId !== '') {
        // updating value in income section
        var val = Number(document.querySelectorAll('.' + elementId)[1].textContent)
        var final_val = Number(document.querySelector('.income-cal-div').textContent) - val
        document.querySelector('.income-cal-div').textContent = final_val

        // updating money-left
        var money_left = Number(document.querySelector('.total-div').textContent) - val
        document.querySelector('.total-div').textContent = money_left

        var div = document.querySelector('.' + elementId)
        div.remove()
    }
}
);


document.querySelector('.expense-div-container').addEventListener('click', (e) => {
    // Retrieve id from clicked element
    let elementId = e.target.id;
    // If element has id
    console.log(elementId)

    if (elementId !== '') {
        // updating value in income section
        var val = Number(document.querySelectorAll('.' + elementId)[1].textContent)
        var final_val = Number(document.querySelector('.expense-cal-div').textContent) + val
        document.querySelector('.expense-cal-div').textContent = final_val

        // updating money-left
        var money_left = Number(document.querySelector('.total-div').textContent) + val
        document.querySelector('.total-div').textContent = money_left

        var div = document.querySelector('.' + elementId)
        div.remove()
    }
}
);


