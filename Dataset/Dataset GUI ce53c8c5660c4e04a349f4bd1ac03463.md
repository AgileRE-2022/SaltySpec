# Dataset GUI

1. Transfer

```jsx
@startuml

title Transfer

!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b>Transfer
Card Number:
{"123890456"}
On Behalf Of:
{"Arthur morgan"}
Transfer fee:
{"200$"}
[Proceed]
}
!endprocedure

!procedure _success()
{+
<b>success
Transfer Success
[ok]
}
!endprocedure

!procedure _error()
{+
<b>error
There seems to be an error the transfer process.
Please try again later.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled.png)

1. Add product

```jsx
@startuml

title Add Product

!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b>Product
Product name:
{"PG gundam RX0 Gundam 03 Phenex"}
Product cost:
{"690$"}
Stock:
{"5"}
[Add]
}
!endprocedure

!procedure _success()
{+
<b>success
Product added successfully
[ok]
}
!endprocedure

!procedure _error()
{+
<b>error
There seems to be an error to the adding product process.
Please try again later.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%201.png)

1. Send message

```jsx
@startuml

title Send Message

!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b> Message:
"it's not about the money it's about sending a message"
[Send]
}
!endprocedure

!procedure _success()
{+
<b>success
Message sent successfully
[ok]
}
!endprocedure

!procedure _error()
{+
<b>error
Failed to send the message
Please try again later.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%202.png)

1. Rating

```jsx
@startuml

title Rating

!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b>Rating Form
Rate the app:
{ () 1* | () 2* | (X) 3* | () 4* | ()5*}
Suggestion:
"The gacha sucks, please increase the chances to get ssr"
[Submit]
}
!endprocedure

!procedure _success()
{+
<b>Thank You!
Have a nice day!
[ok]
}
!endprocedure

!procedure _error()
{+
<b>error
Failed to send the rating
Please try again later.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%203.png)

1. Send a question message

```jsx
@startuml

title Send a Question Message

!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b>Contact Us
Do you have a question or need any assistance? To contact us, please fill out the form below.
Name:
"           "
Email:
"           "
Message:
{+
   .
   .
   "                         "
}
Newsletter:
[ ] Yes, I would like to receive updates and special offers.
[Submit]
}
!endprocedure

!procedure _success()
{+
<b>Thank You!
You have successfully sent 
a secure message, we will get in touch 
soon as possible.
[ok]
}
!endprocedure

!procedure _error()
{+
<b>Error
Failed to send message
Please try again later.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%204.png)

1. verificating account

```jsx
@startuml

title Verificating Account
!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b> Authenticate Your Account
We've sent a code to hello***@***.com.
.
Enter your verification code:
"      "
[Verify]
}
!endprocedure

!procedure _success()
{+
<b>Welcome!
Your account has been verified.
[ok]
}
!endprocedure

!procedure _error()
{+
<b>Oops!
The verification code you entered is incorrect.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%205.png)

1. Select Item to Buy

```jsx
@startuml

title Select Item

!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b>Select your item
Select the items you want to add to the shopping cart:
{[X] Laptop Asus}
{[] Handphone Xiaomi}
{[] Laptop Acer}
{}
Total Price : Rp 15.000.000
[Buy]
}
!endprocedure

!procedure _success()
{+
<b>Purchase successful!
I hope you're satisfied with our service!
[ok]
}
!endprocedure

!procedure _error()
{+
<b>Oops!
Failed to purchase, your e-wallet is empty
Please fill your e-wallet.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%206.png)

1. Register

```jsx
@startuml

title Register

!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b>Register
Name:
{"Syahrul Akbar Rohani"}
Email:
{"adudu@cindo.com     "}
Select your country:
{ ^Country...       ^ Indonesia^ India^ 
}
Type your password:
{"****                "}
Retype your password:
{"****                "}
{}
[Register]
}
!endprocedure

!procedure _success()
{+
<b>Register successful!
Check your email to verify account!
[ok]
}
!endprocedure

!procedure _error()
{+
<b>Failed!
your email is already registered.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%207.png)

1. Reset Password Request

```jsx
@startuml

title Reset Password Request
!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b> Fill your account email
.
Please fill the following form with
your account email:
"      "
[Send]
}
!endprocedure

!procedure _success()
{+
<b>Reset link sent!
Please check your email
to reset your password.
[ok]
}
!endprocedure

!procedure _error()
{+
<b>Failure!
The email you filled is 
not registered.
[ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%208.png)

1. Attacking

```jsx
@startuml

title Attacking
!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure

!procedure _form()
{+
<b>Regular Attack
Choose enemy:
{ (X) Thug A }
{ () Thug B}
[Ok]
}
!endprocedure

!procedure _success()
{+
<b>Player Attack!
Player deals 450 damage
to Thug A
[Ok]
}
!endprocedure

!procedure _error()
{+
<b>Player Attack!
Thug A evades player attack.
Player deals no damage 
to Thug A
[Ok]
}
!endprocedure

(*) --> SALT(form)
form --> SALT(success)
form --> SALT(error)

@enduml
```

![Untitled](Dataset%20GUI%20ce53c8c5660c4e04a349f4bd1ac03463/Untitled%209.png)