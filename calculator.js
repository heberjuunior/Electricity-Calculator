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