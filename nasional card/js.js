// set inputs in html 
// set a function 
// select item 

const Section = document.querySelector(".section-center");
const Secondsec = document.querySelector(".second-section");
const btnlabel = document.querySelector('.btn-clicking');
const headingSmall = document.getElementById("setvalue");
const SbmBtn = document.querySelector(".btn");
const overllySection  = document.querySelector("overlly-section"); 
const imageleftcard = document.getElementById("image-left-card");
const StartDate = document.getElementById("start-date");
const EndDate = document.getElementById("end-date");
const NumberCartNational = document.getElementById("number-of-cart-national");
const Cart = document.getElementById("the-card");
const reader  = new FileReader();
const btnPrint  = document.querySelector(".print-btn");


       // function get date of day and month and year
           let  theDate = new Date();
  
           // start date
           let YearD = theDate.getFullYear(),  
               MonthD = theDate.getMonth(),
               DayD = theDate.getDay(); 

               if(  MonthD <10 || DayD  < 10)  {
                 MonthD = "0" + MonthD ;
                 DayD = "0" + DayD ;
               }
               StartDate.textContent =  ` ${DayD} ${MonthD}  ${YearD}  `;

               // end date 
               let Yearend = YearD + 5 ,
                   Monthend = MonthD - 1 ,
                   Dayend = DayD -1 ;  

                if(  Monthend <10 || Dayend < 10  )  {
                    Monthend = "0" + Monthend ;
                    Dayend = "0" + Dayend ;
                }
                   EndDate.textContent = ` ${Dayend}  ${Monthend} ${Yearend}   `;



    //   get the image and set it 
   
  
   function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    reader.onloadend = function () {
      preview.src = reader.result;

      // set the image in the real template
      imageleftcard.src = reader.result;
    
    }
  
    if (file) {
      reader.readAsDataURL(file);
      btnlabel.classList.toggle("green-btn");
      headingSmall.innerHTML = ` set your infomation `;            
      btnlabel.innerHTML = `image uploaded <i class="fas fa-check"></i> `;
      
    } else {
      preview.src = "";
    }
  }

// get the values of inputs and push it in the Array 
   let ArrayDOM = [] ; 

    // select item
    const ValueInputs = document.querySelectorAll(".x");

               // the event one i click in button " استمرار"
      SbmBtn.addEventListener("click" , function() {

         // hide the first section 
        Section.classList.toggle("hide");
        Secondsec.style.display = "flex";

        // push every value od inputs in the array  
        ValueInputs.forEach(ValueOneInput => {
            ArrayDOM.push(ValueOneInput.value) 

                  // destructing the Array
                  const [ name="defualt name"  , lastname="default age " , age="default age " , City= "default city " , gender="default gender" , bloodType="default blood" ,  year ="default year" , month ="default month" , day="default day" ] = ArrayDOM;
                   // random number  for national cart number
                    let randumNumber = 012343456789;
                    let RandumNprint =  NumberCartNational.textContent = Math.random(Math.floor(randumNumber)) * 100000000000000000 ;
                  // set the  element of Array in the Card 
                  /* 
                  befor set the values we shoulf use template letirals or template string with inner HTML 
                  */


                  function InnerInHTML() {
                    
                    const documentCartJs = ` 
                  <!-- top -->
                  <div class="top">  
                      <h6> الجمهورية الدنماركية الديمقراطية الشعبية  </h6>
                         <h6>  بطاقة التعريف الوطنية </h6>
                       
                  </div>

                  <!--  bottom -->
                  <div class="bottom">
                       <!-- right  -->
                       <div class="right"> 
                            <!-- top -->
                            <div class="top-right-card" >  
                                <h6> سلطة الاصدار  :   <span > ${City}  </span> </h6>
                                <h6> تاريخ الاصدار :   <span id="start-date"> ${DayD} ${MonthD}  ${YearD}   </span> </h6>
                                <h6> تاريخ الانتهاء  :   <span id="end-date"> ${Dayend}  ${Monthend} ${Yearend} </span> </h6>
                            </div>
                            <!-- middele -->
                            <div class="middele-right-card" >
                                <h6> رقم التعريف الوطني :   <span  id="number-of-cart-national"> ${RandumNprint}  </span> </h6>
                                <h6> اللقب  :   <span > ${name}    </span> </h6>
                                <h6> الاسم :   <span >  ${lastname}    </span> </h6>
                            </div>
                            <!-- bottom -->
                            <div class="bottom-right-card" >
                                <h6> تاريخ الميلاد   :   <span > ${day} ${month} ${year} </span> </h6>
                                <h6> الجنس :   <span > ${gender} </span> </h6>
                                <h6> Rh :    <span > ${bloodType} </span> </h6>
                            </div>
                       </div>
                          <!-- left -->
                     <div class="left">   
                            <img  class="image-left-card" id="image-left-card"  src=${reader.result}   alt="">  
                           </div>
                   </div> `
                    
                   // innter it in html Dom 
                   Cart.innerHTML = documentCartJs;
                
                  } InnerInHTML();
    

        });

      });


      // print the result 
      btnPrint.addEventListener("click" , function() {
        window.print();
      }) 

    
        

