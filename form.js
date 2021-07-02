var requestsRef=firebase.database().ref('Requests');

//function for making table
var list1=[];
var list2=[];
var list3=[];
var list4=[];

var n=1;
var x=0;
function addMember(){
    var addRow =document.getElementById("memberList");
    var newRow =addRow.insertRow(n);
    
     list1[x]=document.getElementById("name").value;
     list2[x]=document.getElementById("age").value;
    list3[x]=document.querySelector('input[name="Gender"]:checked').value;
    list4[x]=document.getElementById("occupation").value;

    var cel1=newRow.insertCell(0);
    var cel2=newRow.insertCell(1);
    var cel3=newRow.insertCell(2);
    var cel4=newRow.insertCell(3);

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];

    n++;
    x++;
    document.querySelector('form').reset();
}

//function for after submitting

document.getElementById('requestForm').addEventListener('submit',submitForm);
function submitForm(e){
e.preventDefault();

var myTable=document.getElementsByTagName("tr");
var date=getvalues("date");
var rationCard=document.querySelector('input[name="rationCard"]:checked').value;
var contact=getvalues("contactNo");
var address=getvalues("address");

writeData(list1,list2,list3,list4,date,rationCard,address,contact);



document.querySelector('.alert').style.display='block';
window.scrollTo(0,0);
setTimeout(function(){
  document.querySelector('.alert').style.display='none';
},4000);

document.querySelector('form').reset();
for(let i=x;i>=1;i--)
{
myTable[i].remove();
}
n=1;
x=0;
}

function resetForm(){
  var myTable=document.getElementsByTagName("tr");
  for(let j=x;j>=1;j--)
{
myTable[j].remove();
}
n=1;
x=0;
}

//function to get values
function getvalues(id){
  return document.getElementById(id).value;
}

function writeData(list1,list2,list3,list4,date,rationCard,address,contact){
  var newRequestRef= requestsRef.push();
  newRequestRef.set({
      name:list1,
      age:list2,
      gender:list3,
      occupation: list4,
      date_of_request:date,
      ration: rationCard,
      address: address,
      contactNo:contact,  
  });
  }
  
