/* Add your JavaScript to this file */
window.onload = function(){
 var em = document.getElementById('email');
 console.log(em);
 txt= em.textContent;
 console.log(txt);
 /*if(em.value ==''){
   alert("Please enter email id");
 }*/
 var smth = document.getElementsByClassName('message');
 console.log(smth);



 const button = document.querySelector('button');
 console.log(button);
 button.addEventListener("click", function(e){
   console.log("Button clicked");
   if(em.value == ''){
     e.preventDefault();
     document.getElementsByClassName('message')[0].textContent = "Please enter a valid email address";
   }
   else if(em.value != ''){
     e.preventDefault();
     document.getElementsByClassName('message')[0].textContent = "Thank you" + ' ' + em.value + ' ' + "has been added to our mailing list";
   }
   console.log(txt);
 });


}
