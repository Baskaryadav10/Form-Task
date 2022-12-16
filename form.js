var form_submit= document.querySelector('#form-submit')

form_submit.addEventListener('submit',(e)=>{
   e.preventDefault();
   var firstname=document.querySelector('[placeholder="First Name"]')
   var gender=document.querySelector('[placeholder="Gender"]')
   var address=document.querySelector('[placeholder="Address"]')
   var state=document.querySelector('[placeholder="State"]')
   var country=document.querySelector('[placeholder="Country"]')
   console.log('form submitted');
   console.log(firstname,gender,address,state,country);

   var datas=[firstname,gender,address,state,country]
   var creating_tr=document.createElement('tr')

   for (i=0;i<5;i++) {
     var creating_td=document.createElement('td')
        creating_td.innerText=datas[i].value
       creating_tr.append(creating_td)
   }
  

   document.querySelector('tbody').append(creating_tr)

   for (let i of datas) {
     i.value=''
  }
})

