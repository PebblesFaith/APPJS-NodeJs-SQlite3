const express = require('express');

const app = express();
const path = require('path');
const http = require('http');
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

function validateContactUsForm() {     

    const firstName = document.getElementById('firstName').value;    
    
    
    const middleName = document.getElementById('middleName').value;    
    
 
    const lastName = document.getElementById('lastName').value;    
    
  
    const membership = document.getElementById('membership').value;
    

    const email = document.getElementById('email').value;
        

    const confirmEmail = document.getElementById('confirmEmail').value;
  
 
    const message = document.getElementById('message').value
        

    const regExName = /^[a-zA-Z]+$/;
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (firstName === "" || firstName == null || firstName.length <= 2 || !firstName.match(regExName)) { 
        document.getElementById("userFirstNameErrorMessage").style.color = "#b48900";  
        document.getElementById("userFirstNameErrorMessage").style.background = "#f3f3f3";                  
        document.getElementById("userFirstNameErrorMessage").innerHTML = "Your First Name is a required field or You must enter more than two characters.";  
       
        setTimeout(function() {
            document.getElementById("userFirstNameErrorMessage").innerHTML = "";
        },
        7000);   
        
        return false;       
    } 
        
    if (middleName === "" || middleName == null || middleName.length <= 2 || !middleName.match(regExName)) { 
        document.getElementById("userMiddleNameErrorMessage").style.color = "#b48900";   
        document.getElementById("userMiddleNameErrorMessage").style.background = "#f3f3f3";  
        document.getElementById("userMiddleNameErrorMessage").innerHTML = "Do you have a Middle Name?";     
    
        setTimeout(function() {
            document.getElementById("userMiddleNameErrorMessage").innerHTML = "";
        },
        7000);   

        alert("Do you have a middle name?");

        return false;
    }   

    console.log('User first name is: ' + firstName + '.');

    if (!middleName == null || !middleName.match(regExName)) {
        document.getElementById("userMiddleNameErrorMessage").style.color = "#b48900";   
        document.getElementById("userMiddleNameErrorMessage").style.background = "#f3f3f3";  
        document.getElementById("userMiddleNameErrorMessage").innerHTML = "Do you have a Middle Name?";     
    
        setTimeout(function() {
            document.getElementById("userMiddleNameErrorMessage").innerHTML = "";
        },
        7000);   
        
        return false;
    }  
    
    console.log('User middle name is: ' + middleName + '.');
    
    if (lastName === "" || lastName == null || lastName.length <= 2 || !lastName.match(regExName)) { 
        document.getElementById("userLastNameErrorMessage").style.color = "#b48900";     
        document.getElementById("userLastNameErrorMessage").style.background = "#f3f3f3";    
        document.getElementById("userLastNameErrorMessage").innerHTML = "Your Last Name is a required field or You must enter more than two characters.";             

        setTimeout(function() {
            document.getElementById("userLastNameErrorMessage").innerHTML = "";
        },
        7000);  

        return false;
    }
    
    console.log('User last name is: ' + lastName + '.');

    if (membership === "" || membership == null) { 
        document.getElementById("userMembershipErrorMessage").style.color = "#b48900";    
        document.getElementById("userMembershipErrorMessage").style.background = "#f3f3f3";  
        document.getElementById("userMembershipErrorMessage").innerHTML = "You must select your Membership status is a required field.";             

        setTimeout(function() {                            
            document.getElementById("userMembershipErrorMessage").innerHTML = "";
        },
        7000);   

        return false;
    } 

    console.log('User membership status is: ' + membership + '.');

    if (email === "" || email == null || !email.match(regEx)) { 
        document.getElementById("userEmailErrorMessage").style.color = "#b48900";  
        document.getElementById("userEmailErrorMessage").style.background = "#f3f3f3";  
        document.getElementById("userEmailErrorMessage").innerHTML = "You must enter, your a correct Email address format or the Email address field must not be blank.";             

        setTimeout(function() {                            
            document.getElementById("userEmailErrorMessage").innerHTML = "";
        },
        7000); 

        return false;
    } 
    
    console.log('User email address is: ' + email + '.');

    if (confirmEmail === "" || confirmEmail == null || !confirmEmail.match(regEx)) { 
        document.getElementById("userConfirmEmailErrorMessage").style.color = "#b48900";    
        document.getElementById("userConfirmEmailErrorMessage").style.background = "#f3f3f3";   
        document.getElementById("userConfirmEmailErrorMessage").innerHTML = "You must enter, your a correct Confirm Email address format or the Confirm Email address field must not be blank.";             

        setTimeout(function() {                            
            document.getElementById("userConfirmEmailErrorMessage").innerHTML = "";
        },
        7000);   
        return false;
    } 

    console.log('User email address is: ' + confirmEmail + '.');

    if (email != confirmEmail) { 
        document.getElementById("userConfirmEmailErrorMessage").style.color = "#b48900";  
        document.getElementById("userConfirmEmailErrorMessage").style.background = "#f3f3f3";  
        document.getElementById("userConfirmEmailErrorMessage").innerHTML = "Your Email Address does not match your Confirm Email Address.";             

        setTimeout(function() {                            
            document.getElementById("userConfirmEmailErrorMessage").innerHTML = "";
        },
        7000);   
        return false;        
    }  

    if (message === "" || message == null || message.length <= 5) {             
        document.getElementById("userErrorMessage").style.color = "#b48900";  
        document.getElementById("userErrorMessage").style.background = "#f3f3f3";  
        document.getElementById("userErrorMessage").innerHTML = "Your Text Message is a required field or You must enter more than twenty-five characters.";             

        setTimeout(function() {
            document.getElementById("userErrorMessage").innerHTML = "";
        },
        7000); 
         
        return false;            
    }
    
    const textMessage2 = document.getElementById('message');
    const length = textMessage2.getAttribute('maxlength');
    const textCount = document.getElementById('countMessage');
    textCount.innerHTML = length;
    
    textMessage2.onkeyup = function() {                         
            
    document.getElementById('countMessage').innerHTML = (length - this.value.length);
      
};    
      
    /* Create local storage to sets parameters for user Contact Us entries to become retrievable onto index3.js file, as a database. */
    localStorage.setItem("firstName", firstName); 
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("membership", membership);
    localStorage.setItem("email", email);
    localStorage.setItem("confirmEmail", confirmEmail);
    localStorage.setItem("textMessage2", message);

    /* Create local storage to get user values from his or her Contact Us entries to become retrievable onto index3.js file, as a database. */
    console.log(localStorage.getItem("firstName"));
    console.log(localStorage.getItem("middleName"));
    console.log(localStorage.getItem("lastName"));
    console.log(localStorage.getItem("membership"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("confirmEmail"));
    console.log(localStorage.getItem("textMessage2"));     

    form.addEventListner('submit', validateContactUsForm);
    
    return true;     
    
};

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, function() {
    console.log('Server is listening onto ' + port + '!');
});


const db = new sqlite3.Database('ContactUsFormTest.db', error => {
    if (error) {
        console.log('Developer created database has programmatically coded an: ' + error + '!');
    }else{
        console.log('Developer created database has programmatically coded successfully!');
    };
});

db.serialize( () => {
    const sqlTable =  ("CREATE TABLE IF NOT EXISTS ContactUsUsers (Id INTEGER PRIMARY KEY AUTOINCREMENT, userFirstName VARCHAR(150), userMiddleName VARCHAR(150), userLastName VARCHAR(150), userMembership VARCHAR(255), userEmail VARCHAR(255), userConfirmEmail VARCHAR(255), userTextMessage TEXT)");
    db.run(sqlTable, (error) => {
        if (error) {
            console.log('Developer created database table is not programmatically coded with an: ' + error + '!');
        } else {
            console.log('Developer created database table is programmatically coded successfully!');   
        };
    });
});



app.post("/contact", (req, res, next) => {
    
    var errors=[]
    if (!req.body.userFirstName){
        errors.push("No user first name specified");
    }
    if (!req.body.userMiddleName){
        errors.push("No user middle name specified");
    }
    if (!req.body.userLastName){
        errors.push("No user last name specified");
    }
    if (!req.body.userMembership){
        errors.push("No user membership specified");
    }
    if (!req.body.userEmail){
        errors.push("No user email specified");
    }
    if (!req.body.userConfirmEmail){
        errors.push("No user confirm email specified");
    }
    if (!req.body.userTextMessage){
        errors.push("No user text message specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        userFirstName: req.body.userFirstName,
        userMiddleName: req.body.userMiddleName,
        userLastName: req.body.userLastName,
        userMembership: req.body.userMembership,
        userEmail: req.body.userEmail,
        userConfirmEmail: req.body.userConfirmEmail,
        userTextMessage: req.body.userTextMessage,
        
    }
    var sqlInsert = 'INSERT INTO ContactUsUsers (userFirstName, userMiddleName, userLastName, userMembership, userEmail, userConfirmEmail, userTextMessage) VALUES (?,?,?,?,?,?,?)'
    var params =[data.userFirstName, data.userMiddleName, data.userLastName, data.userMembership, data.userEmail, data.userConfirmEmail, data.userTextMessage]
    db.run(sqlInsert, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message});
            return;          
        
        };
        res.send('Send data sucessfully: ' + data.userFirstName + ' ' + data.userMiddleName + ' ' + data.userLastName + ' ' + data.userMembership + ' ' + data.userEmail + ' ' + data.userConfirmEmail + ' ' + data.userTextMessage);
        console.log('Send data sucessfully: ' + data.userFirstName + ' ' + data.userMiddleName + ' ' + data.userLastName + ' ' + data.userMembership + ' ' + data.userEmail + ' ' + data.userConfirmEmail + ' ' + data.userTextMessage);
        
        
              
    });
});


app.get('/', (req, res) => {
    res.sendFile('contactUsFormTest.html', {root: path.join(__dirname)});
});

