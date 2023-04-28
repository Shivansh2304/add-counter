let num=document.querySelector('input').value;
const pluss = document.getElementById('plus');
const minuss = document.getElementById('minus');

pluss.addEventListener('click',function(e){
    num=parseInt(num)+1;
    document.querySelector('input').value=num;
    console.log(num);
})

minuss.addEventListener('click',function(e){
   num = num-1;
   document.querySelector('input').value=num;
    console.log(num);
})