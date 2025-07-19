// Variables 

let accordion = document.getElementsByClassName('content-container');

for(let i = 0 ; i<accordion.length ; i++){
    accordion[i].addEventListener('click' , function(){
        this.classList.toggle('active'); /* toggle => في كل مرة يتم الضغط فيها على ال عنصر switch يعني تعمل عمل ال  (active) الذي تم الضغط عليه في حالة عدم وجود هذا الكلاس اما في حالة وجوده عند الضغط عليه يعمل على حذف الكلاس  class لل  class تعمل على اضافة   */ 
    })
}

