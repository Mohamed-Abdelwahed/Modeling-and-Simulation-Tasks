let housePrice = document.getElementById('housePrice').value;
let loan , principle;
let day = document.getElementById('day').value
, monthe = document.getElementById('#monthe'), year;
let annual_rate = document.querySelector('#annual_rate').value;
let  montheRate ;
let years= document.querySelector('#years').value;
let N ;
let Beginning_Balance;
let Ending_Balance;
let interest;
let payment;
let fixed = 0
let dataTablebody = document.querySelector('#dataTablebody')
let addTransaction = document.querySelector('#addTransaction')

    
    N = years * 12;
    loan= housePrice * 0.8;
    Beginning_Balance =loan;
    montheRate = annual_rate / 12;
    payment = loan*(montheRate*(Math.pow(1 + montheRate, N)) /(Math.pow(1+ montheRate,N)-1));
    
         
         Beginning_Balance =loan;

         

  
        addTransaction.addEventListener('submit' , (event)=>{
            event.preventDefault()
        })

        for (let x = 1; x <= N; x++) {
            if (monthe > 12) {
                    monthe = 1;
                    year++;
            }
            monthe++;
            interest = montheRate*Beginning_Balance;
            principle = payment - interest;
            Ending_Balance = Beginning_Balance - principle;
            
             dataTablebody.innerHTML += `<tr>
             <td scope="col">${++fixed}</td>
             <td scope="col">${monthe}</td>
             <td scope="col">${Date.now()}</td>
             <td scope="col">${Beginning_Balance}</td>
             <td scope="col">${payment}</td>
             <td scope="col">${interest}</td>
             <td scope="col">${principle}</td>
             <td scope="col">${ Ending_Balance}</td>
             </tr>`

        
             Beginning_Balance = Ending_Balance;
    
       

    }


