function myFunction() {
    var x = document.getElementById("hamburger")
    if (x.style.display === "block") {
        x.style.display = "none"; 
    } else {
        x.style.display = "block";
    }
}
function newFunction() {
    var x = document.getElementById("tableOfContents")
    if (x.style.display === "block") {
        x.style.display = "none"; 
    } else {
        x.style.display = "block"
    }
}
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     //Get the button:
//   var tocsection = document.getElementById("tocsection");
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     tocsection.style.display = "block";
//   } 
//   else {
//     tocsection.style.display = "none";
//   }
// }
// // // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
//     document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
// }