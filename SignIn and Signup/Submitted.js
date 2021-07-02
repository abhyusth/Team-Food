var requestsRef=firebase.database().ref('Requests');

requestsRef.on('value',gotData,errData);

function gotData(data){
  var requests=data.val();
  var keys=Object.keys(requests);

                var c=1;
  for(let k=0;k<keys.length;k++){
    var order=document.getElementById("requestList");
  // order.innerHTML =`
  // <div class="row" id="requests"></div>
  // <div class="row">
  //               <h3>Details of family members:<h3>
  //               <table id="familyDetails">
  //               <tr>
  //                   <th>Name</th>
  //                   <th>age</th>
  //                   <th>gender</th>
  //                   <th>occupation</th>
  //               </tr>
  //               </table>
  //               </div>
  //               <div id="otherDetails"></div> `

  var h=keys[k];

  var dates =requests[h].date_of_request;
  var names = requests[h].name;
  var ages = requests[h].age;
  var genders = requests[h].gender;
  var occupations = requests[h].occupation;
  var rationCards = requests[h].ration;
  var contactNos = requests[h].contactNo;
  var address = requests[h].address;

  console.log(names,ages,genders,occupations);
 
  var list=document.getElementById("familyDetails");
  for(let j=0;j<names.length;j++)
  {
    document.getElementById("requests").innerHTML +=`<h2>Request No. ${c}</h2><h3>Date: ${dates}</h3>`;
      list.innerHTML +=`
                <tr>
                <td>${names[j]}</td>
                <td>${ages[j]}</td>
                <td>${genders[j]}</td>
                <td>${occupations[j]}</td>
                </tr>`
                document.getElementById("otherDetails").innerHTML +=`<h3>Ration Card: ${rationCards}</h3><h3>Address: ${address}</h3><h3>Contact No: ${contactNos}</h3>`
}
c++;
  }
}

function errData(err){
console.log("error");
}