function updateClock(){
     const now=new Date();
     let hrs=now.getHours();
     let mins=now.getMinutes();
     let secs=now.getSeconds();
     const ampm=hrs>=12?'PM':'AM';
    hrs=hrs%12||12;
    const formattedTime=[
     hrs.toString().padStart(2,'0'),
     mins.toString().padStart(2,'0'),
     secs.toString().padStart(2,'0')
    ].join(':')+`${ampm}`;
    document.getElementById('clock').textContent=formattedTime;
}
setInterval(updateClock,1000);
updateClock();