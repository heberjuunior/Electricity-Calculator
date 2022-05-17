//Function
const calculatorElectricity = function (){
        
    //Consts declarate
    const flatRate = 0.20;
    const standCharges = 0.04;
    const tax = 13.5;

    //Get values ​​from the form
    let msgError = document.querySelector('#msgError');
    let units = document.querySelector('#units');
    let days = document.querySelector('#days');
    let vat = document.querySelector('#vat');
    let vatTotal = document.querySelector('#vatTotal');

    msgError.innerHTML = "";
    //Validate input values
    if(units.value == "" || days.value == "")
    {
        msgError.innerHTML = 'Required Fields!';
    }
    else
    {
        //Calculate values
        let resultVat = ((units.value * flatRate) + (days.value *  standCharges));
        let resultVatTotal = resultVat + ((resultVat*tax)/100);

        //Conversion to monetary value
        resultVat = resultVat.toLocaleString('en-IE', { style: 'currency', currency: 'EUR' });

        resultVatTotal = resultVatTotal.toLocaleString('en-IE', { style: 'currency', currency: 'EUR' });

        //Put the values ​​in the html
        vat.innerHTML = resultVat;
        vatTotal.innerHTML = resultVatTotal;
    }    

}

//Function: Block characters
const blockChar = function (objEvent) 
{
    var tecla;
    if(window.event) { // Internet Explorer
        tecla = event.keyCode;
    }
    else { // Firefox
        tecla = caracter.which;
    }

    if(tecla < 48 || tecla > 57) { 
        if (tecla != 46)
            return false;
    }
    else { 
        return true;
    }
}

//Function: Reset Values 
const newCalc = function (){
    let units = document.querySelector('#units');
    let days = document.querySelector('#days');
    let vat = document.querySelector('#vat');
    let vatTotal = document.querySelector('#vatTotal');

    units.value = "";
    days.value = "";
    vat.innerHTML = "0.00";
    vatTotal.innerHTML = "0.00";
}