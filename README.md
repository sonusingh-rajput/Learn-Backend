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