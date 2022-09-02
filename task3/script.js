

let n = 10;



let arrival_rand = new Array(n);

let surv_sum=0,interar_sum=0,delay_sum=0,wait_sum=0,idel_sum=0,complete_sum=0;


let inter_arrival = new Array(n), arrival_time = new Array(n), service_time = new Array(n), service_begin = new Array(n),service_end = new Array(n), delay = new Array(n), wait_time = new Array(n), complete_time = new Array(n),idle_time = new Array(n);


letsurv_avg=0,delay_avg=0,wait_avg=0,time_spend=0;



   inter_arrival[0]=0; 
//    service_time[0] = Number(prompt(`inter-arrival time for customer 1: 0
//    enter the service time for customer
//    `));

   surv_sum+=service_time[0];
   
for (let i = 0; i < n; i++)
{
    
    let y = Math.random() ;

 console.log('random : ',y);
    if(y >= 0 && y < 0.24){
        inter_arrival[i] = 0;
        // console.log(inter_arrival[i]);
       
    }
    else if((y >= .24 )&& (y< 0.61)){
        inter_arrival[i] = 60;
        // console.log(inter_arrival[i]);
    }
    else if((y >= .61) && (y< 0.89)){
        inter_arrival[i] = 120;
        // console.log(inter_arrival[i]);
    }
    else{
        inter_arrival[i] = 180;
        // console.log(inter_arrival[i]);
    }
    
    interar_sum+=inter_arrival[i];

   service_time[i] = Math.floor(Math.random() *(58 - 42 +1 ) + 42);

   surv_sum+=service_time[i];
  
}


for (let i = 0; i < n; i++)
{
    if (i == 0)
    {
        arrival_time[i] = 0;
        service_begin[i] = arrival_time[i] ;
        service_end[i]=service_time[i]+arrival_time[i];
        wait_time[i]=service_time[i];
        complete_time[i]=service_time[i];
        delay[i]=0;
        idle_time[i]=0;
    }
    else
    {
        arrival_time[i] = arrival_time[i - 1] + inter_arrival[i];
        service_begin[i] = Math.max(inter_arrival[i], service_end[i-1]);
        service_end[i] = service_begin[i] + service_time[i];
        delay[i] = Math.max(service_begin[i] , arrival_time[i])-Math.min(service_begin[i] , arrival_time[i]);
        wait_time[i] = service_end[i] - arrival_time[i];
        complete_time[i] = service_time[i]+delay[i];
        idle_time[i]=service_begin[i]-service_end[i-1];
    }
//        calc sum
  
  wait_sum+=wait_time[i];
  delay_sum+=delay[i];
  idel_sum+= idle_time[i];
  complete_sum+=complete_time[i];
  
}

const bodyTable  = document.getElementById('bodyTable')
for (let i = 0; i < n; i++)
{
   
    bodyTable.innerHTML+=`<tr>
    <td>${i+1}</td>
    <td>${arrival_rand[i]}</td>
    <td>${inter_arrival[i]}</td>
    <td>${arrival_time[i]}</td>
    <td>${service_time[i]}</td>
    <td>${service_begin[i]}</td>
    <td>${service_end[i]}</td>
    <td>${delay[i]}</td>
    <td>${wait_time[i]}</td>
    <td>${complete_time[i]}</td>
    <td>${idle_time[i]}</td>
    </tr>`
}
const bodyTableTotal = document.querySelector('#bodyTableTotal')
bodyTableTotal.innerHTML+=`
<tr>
<td>${interar_sum}</td>
<td>${delay_sum}</td>
<td>${wait_sum}</td>
<td>${complete_sum}</td>
<td>${idel_sum}</td>
</tr>`




//    calc avarge
surv_avg= surv_sum/n;
delay_avg=delay_sum/n;
wait_avg=(surv_sum+delay_sum)/n;
time_spend=complete_time[n-1]/n;

const finalData  = document.getElementById('finalData')

finalData.innerHTML +=`<ul class="list-group list-group-flush m-5">
<li class='list-group-item fs-2'>Average service time : ${surv_avg}</li>
<li class='list-group-item fs-2'>Average delay : ${delay_avg}</li>
<li class='list-group-item fs-2'>Average wait time : ${wait_avg}</li>
<li class='list-group-item fs-2'>Time spend on system : ${time_spend}</li>
</ul>`



