# toposel

To run the program, clone the repo and use any terminal and then run
```bash
node app.js
```
To register the user, use endpoint 
>> /userRegistration
>> 
send data in JSON format, with keys

* username
* email
* password
* fullName
* dateOfBirth
* gender
* country

To login, use endpoint
>> /userLogin
>> 
with keys
* username
* password

To search the user, use endpoint
>> /searchUser
>> 
send query data, either
* username
* email

