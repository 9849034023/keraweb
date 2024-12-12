document.getElementById('navbar').innerHTML = fetch('K-ERAnav.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
});

document.getElementById('footer').innerHTML = fetch('K-ERAfooter.html')
.then(response => response.text())
.then(data => {
   document.getElementById('footer').innerHTML = data;
 });


