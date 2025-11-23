
// let main = document.querySelector("#main");
// let krsr = document.querySelector("#cursor");

// window.addEventListener("mousemove", function (dets) {
//   gsap.to(krsr, {
//     x: dets.clientX,
//     y: dets.clientY,
//     duration: 0.2, // smoother and faster
//     ease: "steps(12)",
//   });
// });







// form validation 



// let email = document.querySelector("#email");
// let pass = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (dets) {
//   dets.preventDefault();

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   let emailans = emailRegex.test(email.value);
//   let passwordans = passwordRegex.test(pass.value);

//   // Email validation
//   if (!emailans) {
//     document.querySelector("#emailError").textContent = "Email is incorrect";
//     document.querySelector("#emailError").style.display = "initial";
//   } else {
//     document.querySelector("#emailError").textContent = "";
//     document.querySelector("#emailError").style.display = "none";
//   }

//   // Password validation
//   if (!passwordans) {
//     document.querySelector("#passwordError").textContent = "Password is incorrect";
//     document.querySelector("#passwordError").style.display = "initial";
//   } else {
//     document.querySelector("#passwordError").textContent = "";
//     document.querySelector("#passwordError").style.display = "none";
//   }
// });

// let count = 0;
// let prog = document.querySelector(".progress-fill");
// let per = document.querySelector(".progress-text");

// // Run every 30ms -> 3 seconds total for 100%
// let interval = setInterval(function () {
//   if (count < 100) {
//     count++;
//     prog.style.width = count + "%"; // Update bar width
//     per.textContent = count + "%";  // Update text
//   } else {
//     clearInterval(interval); // Stop when it reaches 100
//   }
// }, 3000 / 100); // 30ms per step



// let box = document.querySelector(".box")
// alert("it will be hide soon..")
// setTimeout(function(){
  
//   box.style.display = "none"
// },3000)





// localStorage.setItem("friends",JSON.stringify(["ram","sham","ghanshyam"])) 



// let time ;
// setInterval(function(){
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes()
//     let s = d.getSeconds()
//     time = h + ":" + m + ":" + s;
//     console.log(time)


// })



// let btn = document.querySelector("#downloadBtn");
// let p = document.querySelector("p");

// btn.addEventListener("click",function (dets) {
//     p.innerHTML = "please wait downloading..."
// })





// dark theme togle
// let btn = document.querySelector("#downloadBtn");
// btn.addEventListener("click",function (dets) {
//     if(document.body.style.backgroundColor==="black"){
//         document.body.style.backgroundColor="white";
//         document.body.style.color="black";
//     }else{
//         document.body.style.backgroundColor="black";
//         document.body.style.color="white";
//     }
// })

// var hello
// hello();
// hello = function (params) {
//     console.log("hello");
    
// }









var hello = "iam hello";
var h1 = document.querySelector("h1");
var btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("btn is click");
    setTimeout(function(){
        h1.innerHTML="iam changed hello"
    },2000)
})