// grab the document objects via dom methods 
var addBtn = document.getElementById('Addbtn');
var removeBtn = document.getElementById('RemoveBtn');

var nameInput = document.getElementById('name');

var numberInput = document.getElementById('number');

var showBtn =document.getElementById('showListBtn');
var resultList = document.getElementById('list');


// grab the search input and search button - documeobject
var search = document.getElementById('search');
var search_btn = document.getElementById('search_btn');
//The object of html ul list
var mylist = document.getElementById('resultList');

//event bind with add button
  var contactDetails =[]; 
addBtn.addEventListener('click',(e)=>{
    //check that user have enter the name and phone
     if(nameInput.value != '' && numberInput.value != '')
     {
      // store the input values in the object
        var nameAndnumber = { 
            name: nameInput.value,
            number: numberInput.value
        }
         

        
        // Add the details in the localstorage
      if(localStorage.getItem('contacts') === null)
      {
          contactDetails.push(nameAndnumber);
          localStorage.setItem('contacts',JSON.stringify(contactDetails));


         
         }

      else
      {
          var myarray = JSON.parse( localStorage.getItem('contacts'));
                myarray.push(nameAndnumber);
                localStorage.setItem('contacts',JSON.stringify(myarray));

              

        
     }
    }
     else
     {
        alert('Name and phoneNumber cant be empty');
        
         
     }



});

//event handling with show list button
 var result = true;
showBtn.addEventListener('click',(e)=>{
          
        if(resultList.style.display == 'none')
        {
          resultList.style.display = 'block';
        }
        else
        {
          resultList.style.display = 'none';
        }

    if(result)
    {
      if(localStorage.getItem('contacts') != null)
      {
       let myresult = JSON.parse(localStorage.getItem('contacts'));
            for(var i=0 ; i< myresult.length ; i++)
            {
          var li = document.createElement('li');
          
          li.innerHTML = `${myresult[i].name}`;
          mylist.appendChild(li);
            }
            var count = document.querySelector('#list_count');
            count.innerHTML =   `Contacts: ${myresult.length}`;
            
      }
         result = false;
    }
      
    resultList.style.height = '300px';
});



//To search an contact from the list
search_btn.addEventListener('click',myfun);


function myfun()
{ 
var value = search.value;
var li  = document.getElementsByTagName('li');
for(var i=0 ; i< li.length ; i++)
{
  if(search.value == li[i].innerHTML)
  {

    li[i].setAttribute('id','join');
    for(var i=0 ; i<li.length ; i++)
   {
     li[i].className = 'hide';
   }

 
      document.getElementById('showitem').innerHTML = document.getElementById('join').innerHTML;
   }
      
  }
}


       // Search the Contacts
var mySearchBtn = document.querySelector('#search_btn');
     // search - search field
   mySearchBtn.addEventListener('click',function(){
    
    
   });

    
