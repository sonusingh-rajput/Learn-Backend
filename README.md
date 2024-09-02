# HTTP Methods

<ol>
    <li>Get - Server sa Kuch la kar aaoo</li>
    <li>Post(Creation) - Server ko kuch data save karna ka leay da raha hoo </li>
    <li>Patch(Update) - For Some data Update</li>
    <li>Put(Update) - For Hole data Update</li>
    <li>Delete</li>
</ol>

# HTTP Status Code - 

<p> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status </p>

<h4>1XX Code</h4>
<ol>
    <li>100</li>
    <li>101</li>
</ol>

<h4>2XX Code</h4>
<ol>
    <li>200 - OK</li>
    <li>201 -(Created) Create on Server</li>
    <li>202 - Accept Request and Process for Work</li>
    <li>203 - Transfer Your Request for andother Server</li>
</ol>

<h4>3XX Code</h4>
<ol>
    <li>301 - (Moved Data) - No Data Exist </li>
    <li>307 - Temperory Moved Data  </li>
    <li>308 - Permanently Move at another URI</li>
</ol>

<h4>4XX Code</h4>
<ol>
    <li>400 - Bad Request</li>
    <li>401 - Unothorized</li>
    <li>402 - Forbidden</li>
    <li>404 - Not Found</li>
</ol>

<h4>5XX Code</h4>
<ol>
    <li>500 - Internal Server Error </li>
    <li>502 - Bad Gatway</li>
    <li>503 - Service Unavaibale</li>
</ol>


# Learn Express JS

* MiddleWare - Aish koi bhi function(as a Parameter) jishma 3 (Request , Responce , Next) Cheez ka access mila 

Or Jab bhi app browser sa koi request backend par bhejte hai , to wo route par jaati hai agar aap chaahte hai route  par jaane sa pahle wo request mein app kuch check karna chaahte hai ya fir kuch jodna chaahte hai , un saare case mein Middleware use hota hai

* Express Session - Cookie hota hai browser mein data save karna ka leaya or Session hota hai server par data save karna ka leaya.

* Cors (Cross Origin Resource Sharing) -   Browser mein ek sequrity feature hota hai , Jiske tahat aap kisi aur web domain ka data nahi manga sakte ya show nai kar skte hai and browser isse aapko rokta hai , ab agar aap chaahte hai ki browser allow kare data ko laane ke liya , to fir aapkko us website ke server ke through CORS enable karna padega.

* Cookie Parser - 

* Morgan - 

* Rquest & Response - 

<ol>
    <li>Req - Browser ka kuch jaata hai Server Par </li>
    <li>Res - Server sa kuch jaata hai Browser par</li>
</ol>

* Server Side Rendering - Using EJS 
<ol>
    <h4>Steps</h4>
    <li>Install ejs form npm (npm i ejs)</li>
    <li>app.set('view engine' , 'ejs')</li>
    <li>Create a views Folder</li>
    <li>Creae view index.ejs</li>
    <li>load the hatml in ejs page</li>
    <li>and use res.render in place of the res.send to render any page form views folder</li>
</ol>

<h3> Form Handling - Using EJS </h3>
<ol>
    <li>Form jab bhi Submit karoge pahli cheek ya dekhiye ki saari fields ke pass name property hai ya nahi</li>
    <li>Form ke pass action hai ya nahi</li>
    <li>Backend ke pass route hai ya nahi</li>
    <li>wo Route ka type sahi hai ya nahi</li>
    <li>Route ke andar aapko data unke type ke hisaab se milega</li>
    <li>Form ka By Default type GET hota hai</li>
    <ol>
        <li>GET - req.query</li>
        <li>POST - req.body</li>
    <ol>
</ol>

<h2>Postman</h2>

<h4>HTTP Methods</h4>

<ul>
    <li>GET - Server se kuch laana</li>
    <li>POST - Server par kuchh hoga , is aspect        main ki kuchh create hogo,ya fir establish hoga</li>
    <li>PUT - Update karne ke liye , poora Replace karta hai</li>
    <li> PATCH - Update karne ke liya , poora replace nahi karta hai , ye sirf wo change karta hai jo change hona ho</li>
<ul>
