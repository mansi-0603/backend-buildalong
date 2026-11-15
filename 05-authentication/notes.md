ek authentication ke andr 4 chize hoti h(4 ocre pillar of Authentication)

i- validation
joh data hume mil rha h uska FORMAT valid(i.e sahi) h ki nhi
user ka data and server ke andr joh data h woh sahi h ki nhi


ii- verification
joh data mil rha h woh DATA shi h ki nhi?
eg- verification email address of OTP

 
iii- authentication
identify krna user ko jiske pass se request aa rhi h


iv- authorization
ek user kya kya kr skta h ? or ek user kya nhi kr skta?


2 type of Auth

1- Session based   
2- token based



prefix in /api/auth
router ke help se joh API create h usko use krne ke liye hum ek prefix --> /api/auth ke through hie use kr paayenge hum log

jwt.sign() --> kaafi saari operations perform krti h jwt secret ke sath

token ek string hota h -- well calculated string


DIFF type of stroage in BROWSER

i- cookies
ii- session storage
iii- local storage
iv- indexedDB
v- cache storage
vi- web SQL



COOKIES Storage ---> Server has Admin access 
    server directly cookies ko access kr skta h, usko modify bhi kr skta h
jo bhi data cookies k andr store(safe) hoga woh server prr jayega hie jayega


why creating token?
 

