let customer = Number(prompt("enter number of customer : "));
    

    let arrival = new Array(customer);
    let inter_arrivall= new Array(customer);
	let service_time=new Array(customer);
	let time_begin= new Array(customer);
    let time_end= new Array(customer);
    let delay= new Array(customer);
    let wait_time= new Array(customer);
	let complate_time=new Array(customer);
    let sum_aravali_time=0;
    let	sum_service_time=0;
    let sum_delay=0;
    let sum_wait_time=0;
	
	
    for(let i=0; i<customer; i++)
    {
       
        inter_arrivall[i] = Number(prompt(`enter customer ${i+1} inter arrival : `))
        service_time[i] = Number(prompt(`service time of customer ${i+1} : `))
    }

    for(let i=0;i<customer;i++)
    {
      if(i == 0){
        arrival[i]=inter_arrivall[i];
        time_begin[i]=arrival[i];
        time_end[i]=time_begin[i]+service_time[i];
         delay[i]=time_begin[i]-inter_arrivall[i];
          wait_time[i]=service_time[i]+delay[i];
         complate_time[i]=time_end[i];
         sum_aravali_time+=inter_arrivall[i];
         sum_delay+=delay[i];
         sum_wait_time+=wait_time[i];
         sum_service_time+=service_time[i];
      }else{
        arrival[i]=inter_arrivall[i]+arrival[i-1];
        time_begin[i]=arrival[i];
        time_end[i]=time_begin[i]+service_time[i];
         delay[i]=time_begin[i]-inter_arrivall[i];
          wait_time[i]=service_time[i]+delay[i];
         complate_time[i]=time_end[i];
         sum_aravali_time+=inter_arrivall[i];
         sum_delay+=delay[i];
         sum_wait_time+=wait_time[i];
         sum_service_time+=service_time[i];
      }
        
    }



    const bodyTable = document.getElementById("bodyTable")

    for(let i=0; i<customer; i++)

    {
        try{
            bodyTable.innerHTML+=`
            <tr>
            <td>${i+1}</td>
            <td>${inter_arrivall[i]}</td>
            <td>${arrival[i]}</td>
            <td>${service_time[i]}</td>
            <td>${time_begin[i]}</td>
            <td>${time_end[i]}</td>
            <td>${delay[i]}</td>
            <td>${wait_time[i]}</td>
            <td>${complate_time[i]}</td>
            </tr>`
        }catch(error){
            console.log(error);
        }
        
    }

    let finalData = document.getElementById('finalData');
    finalData.innerHTML+=`<ul class="list-group list-group-flush m-5">
     <li class='list-group-item fs-2'>average inter-arrival time = ${sum_aravali_time/customer}</li>
     <li class='list-group-item fs-2'>average service time = ${sum_service_time/customer}</li>
     <li class='list-group-item fs-2'>average delay time = ${sum_delay/customer}</li>
     <li class='list-group-item fs-2'>average wait time = ${sum_wait_time/customer}</li>
     <li class='list-group-item fs-2'>speed on time of system  = ${complate_time[customer-1]/customer}</li>
    </ul>`