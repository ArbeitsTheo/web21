let p1 = document.getElementById("p1");

p1.addEventListener('mouseover', (e) => {
    console.log("Bonjour");
    p1.classList.add("rotate");
});