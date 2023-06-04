let hasVisited = sessionStorage.getItem('washere');
let introDiv = document.getElementById("splashDiv");
let logo = document.getElementById("splashLogo");
if (!hasVisited) {
    setTimeout(() => {
    introDiv.style.display = 'none';
    }, 5000);
    sessionStorage.setItem('washere', true);
}
else{
    introDiv.style.display = 'none';
    logo.style.display = 'none'; 
}