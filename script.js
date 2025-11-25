
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








// settimeout and setintervals and clearintervals ka best example 
// var a = 0;
// var int = setInterval(() =>{
//     a++
//     console.log(a);
// },100);
// setTimeout(()=>{
//     clearInterval(int)
// },5000);









// events program
// const img = document.querySelector("img");
// let h2 = document.querySelector("h2");
// let body = document.querySelector("body");

// img.addEventListener("mouseenter", function () {
//   h2.innerHTML = "image is here now";
//   body.style.backgroundColor = "lightblue";
// });

// img.addEventListener("mouseleave", function () {
//   h2.innerHTML = "image is gone now";
//   body.style.backgroundColor = "white"; // reset background
// });

























// custom cursor program



// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: 'helvetica neue';
// }

// html,
// body {
//   height: 100%;
//   width: 100%;
// }
// body{
//   cursor: none;
// }
// main {
//   height: 100%;
//   width: 100%;
//   background-color: black;
//   padding: 20px;
//   display: flex;
//   gap: 20px;
//   align-items: flex-start; 
//   flex-wrap: wrap;
// }
// img{
//     width: 40px;
//     height: 40px;
//     object-fit: cover;
//     position: fixed;
//     transform: translate(-50%,-50%);
// }





// const img = document.querySelector("img");

// window.addEventListener("mousemove", function (event) {
//   img.style.left = event.clientX + "px";
//   img.style.top = event.clientY + "px";
// });



// var au = new Audio("./24.mp3");
// var h1 = document.querySelector("h1");
// h1.addEventListener("keydown", function (dets){
//   au.play();
// })









  // const sounds = {
  //   a: new Audio('./24.mp3'),
  //   b: new Audio('./41.mp3'),
  //   c: new Audio('./60.mp3')
  // };

  // const h1 = document.querySelector("h1");

  // // Listen for key press
  // h1.addEventListener("keydown", (event) => {
  //   const key = event.key.toLowerCase();

  //   if (sounds[key]) {
  //     sounds[key].currentTime = 0; // restart sound
  //     sounds[key].play();
  //   }
  // });








// adding or removing friend button program
  var btn = document.querySelectorAll("button");

btn.forEach(function(elem){
  elem.addEventListener('click',function(dets){
    if(elem.innerHTML==="Add Friend"){
      elem.innerHTML="remove"
    }else{
      elem.innerHTML="Add Friend"
    }
  })
})