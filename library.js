
function myfunction1(){
 var nameInput = document.getElementById('name');
 var passInput = document.getElementById('pass');

        if (nameInput.value === "" || passInput.value === "") {
            alert("Please fill out all fields");
        } else {
            alert("Login successfully!");

            // Clear the form
            document.getElementsByclassName('add').reset();
        }
    }

function myfunction2()
{
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var mobileInput = document.getElementById('mobile');
var occupationInput = document.getElementById('occupation');


        if (nameInput.value === "" || emailInput.value === "" || mobileInput.value=== "" || occupationInput=== "") {
            alert("Please fill out all fields");
        } else {
            alert("Register successfully!");

            // Clear the form
            document.getElementsByclassName('white').reset();
        }
}

function myfunction3()
{
	 var nameInput = document.getElementById('name');
     var enameInput = document.getElementById('ename');

        if (nameInput.value === ""|| enameInput.value ==="") {
            alert("Please fill out all fields");
        } else {
           alert("Your Request has been Submitted Successfully");

            // Clear the form
            document.getElementsByclassName('add').reset();
        }
}
             



