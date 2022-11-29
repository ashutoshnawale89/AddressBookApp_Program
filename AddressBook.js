
window.onload = function(){

  //Buttons
var reset = document.getElementById('Cancel');
	var AddBtn = document.getElementById('Add');

  // Form Fields  ***************************************


var fullname = document.getElementById('name1');
var phone = document.getElementById('number1');
var address = document.getElementById('address1');
var city = document.getElementById('city1');
var state = document.getElementById('state');
var zip = document.getElementById('pincode1');

  // Array For  Store Multiple  Values
  var addressBook = [];

  AddBtn.addEventListener("click", addToBook);


  //To Store the Data like Name state etc, In The Array 
function addToBook(){
  var isNull = fullname.value!='' && phone.value!='' && address.value!='' && city.value!='' && state.value!='' && zip.value!='';
  if(isNull && validation()==true){
      // format the input into a valid JSON structure
      var obj = new jsonStructure(fullname.value,phone.value,address.value,city.value,state.value,zip.value);
      addressBook.push(obj);
      localStorage['addbook'] = JSON.stringify(addressBook);
      clearForm();
  }
}
function jsonStructure(fullname,phone,address,city,state,zip){
  this.fullname = fullname;
  this.phone = phone;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip=zip;
}

function clearForm(){
  var inputDelete = document.querySelectorAll('.input');
  for(var i in inputDelete){
    inputDelete[i].value = '';
  }
}

function validation(){
  let demo=false;
  let firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
  let addressRegex = /^[A-Z]{1}[a-zA-Z0-9./]{5,}$/;
  let Number = /[9]?[1]?[6-9]{1}[0-9]{9}$/;
  let PinCode=/^[0-9]{6}$/;

  let nameError=document.getElementById('name-err');

if(firstNameRegex.test(fullname.value)){
  if(addressRegex.test(address.value)){
   if(Number.test(phone.value)){
     if(PinCode.test(zip.value)){
      demo=true;
      alert("Data Save Successfully");
      return demo;  
     }
     else{
         alert('Invalid PinCode');
          return false;
         }
       }
   else{
     alert('Invalid Number');
        return false;
   }
 }
 else{
   alert('Invalid Address');
      return false;
}
}
else{
 alert('Invalid UserName');
 return false;
}     
}
}