function hello(event)
{
    event.preventDefault();
    let firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    let name = document.getElementById('name').value;

    if(firstNameRegex.test(name))
     {
        localStorage.setItem("name",name);
        alert("Hello, "+ localStorage.getItem("name"));
     }else
     {
        alert("Enter valid name");
        document.getElementById("name-err").innerHTML ="Min 3 chars & first letter capital!"
    }
       // For Address Regex 
     event.preventDefault();
     let addressRegex = /^[A-Z]{1}[a-z]{5,6}(- _ .)[A-Z]$^/;
    let address = document.getElementById('address').value;
    if(addressRegex.test(address))
    {
        localStorage.setItem("address",name);
        alert("Hello, "+localStorage.getItem("address"));
    }else{
        alert("Enter Valid Address");
        document.getElementById('address-err').innerHTML ="Min  6 chars & First Letter capital"
    }
    // For Number regex 
    event.preventDefault();
    let Number = /(91)()[6-9]{1}[0-9]{9}$^/;
   let number = document.getElementById('number').value;
   if(Number.test(number))
   {
       localStorage.setItem("number",number);
       alert("Hello, "+localStorage.getItem("number"));
   }else{
       alert("Enter Valid number");
       document.getElementById('number-err').innerHTML =" country code  & first Number 6 - 9 "
   }
}

function check(event)
{
    event.preventDefault();
    let firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    let name = document.getElementById('name').value;

    if(!firstNameRegex.test(name))
    document.getElementById("name-err").innerHTML ="Min 3 chars & first letter capital!"
   else
   document.getElementById("name-err").innerHTML =""
}
document.getElementById('form')
   .addEventListener('submit',hello);
// for Address Regex 
   function check(event)
{
    event.preventDefault();
    let addressRegex = /^[A-Z]{1}[a-z]{5,6}(- _ .)[A-Z]$^/;
   let address = document.getElementById('address').value;

    if(!addressRegex.test(address))
    document.getElementById("address-err").innerHTML ="Min 6 chars & first letter capital!"
   else
   document.getElementById("addresss-err").innerHTML =""
}
document.getElementById('form')
   .addEventListener('submit',hello);
   // Number regex 
   function check(event)
   {
    event.preventDefault();
    let Number = /(91)()[6-9]{1}[0-9]{9}$^/;
   let number = document.getElementById('number').value;
       if(!Number.test(number))
       document.getElementById("number-err").innerHTML ="Min 6 chars & first letter capital!"
      else
      document.getElementById("number-err").innerHTML =""
   }
   document.getElementById('form')
      .addEventListener('submit',hello);