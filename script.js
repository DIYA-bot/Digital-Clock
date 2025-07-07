let timeFormat='12';
const btn12=document.getElementById('btn-12');
const btn24=document.getElementById('btn-24');
function updateClock(){
     const now=new Date();
     let hrs=now.getHours();
     let mins=now.getMinutes();
     let secs=now.getSeconds();
     let ampm='';
     if (timeFormat==='12'){
          ampm=hrs>=12?'PM':'AM';
          hrs=hrs%12||12;
     }
    const formattedTime=[
     hrs.toString().padStart(2,'0'),
     mins.toString().padStart(2,'0'),
     secs.toString().padStart(2,'0')
    ].join(':')+ampm;
    document.getElementById('clock').textContent=formattedTime;
}
function setFormat(format){
     timeFormat=format;
     if(format==='12'){
          btn12.classList.add('active');
          btn24.classList.remove('active');
     }else{
         btn24.classList.add('active');
          btn12.classList.remove('active'); 
     }
     updateClock();
}
setInterval(updateClock,1000);
updateClock();
setFormat(timeFormat);
