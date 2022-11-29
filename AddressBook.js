
function validation(){
    let demo=false;
    let name=document.getElementById('name1').value;
    var address=document.getElementById('address1').value;
    var pincode=document.getElementById('pincode1').value;
    var number=document.getElementById('number1').value;
    let firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    let addressRegex = /^[A-Z]{1}[a-zA-Z0-9./]{5,}$/;
    let Number = /[9]?[1]?[6-9]{1}[0-9]{9}$/;
    let PinCode=/^[0-9]{6}$/;
 
    let nameError=document.getElementById('name-err');
 
 if(firstNameRegex.test(name)){
    if(addressRegex.test(address)){
     if(Number.test(number)){
       if(PinCode.test(pincode)){
        demo=true;
        if(demo==true){
            var name2=$('#name1').value;
                var address2=$('#address1').value;
                var state2=$('#state1').value;
                var pincode2=$('#pincode1').value;
                var city2=$('#city1').value;
                var phoneNumber2=$('#number1').value;
            
                var jsonObject={
                    Name:"",
                    Address:"",
                    State:"",
                    Pincode:"",
                    City:"",
                    PhoneNumber:""
                };
                jsonObject.Name=name2;
                jsonObject.Address=address2;
                jsonObject.State=state2;
                jsonObject.Pincode=pincode2;
                jsonObject.City=city2;
                jsonObject.PhoneNumber=phoneNumber2;
            
                var str=JSON.stringify(jsonObject);
                localStorage.setItem("AddressBook Details",str);
                alert("Data Save succefully");
        }
        else {
            alert("Data Not Save In Local Storage ");
        }
        
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