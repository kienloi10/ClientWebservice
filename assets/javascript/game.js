var slch;
var mang = new Array() ;
 //Số lượng câu hỏi
$(document).ready(function getNumQ() {
    $.ajax({
        url: "http://localhost:8080/WebService/resources/greeting/getnum",
        method: "GET",
        success: function(data) { 
            
            console.log(data);  
             for (var i = 1; i <= data; i++) {
                  mang.push(i);
                }   
             // slch = data;
             console.log(mang);
             shuffle(mang);
  
  

  //Xóa mảng
  for ( var i=0;i<=mang.length-3 ;i++){
    mang.pop();
  }
 
  for(var k=0;k<=10;k++)
  {
    getOne(mang[k]);
  }

        },
        error: function(err) {
            console.log(err);
        }
    });
   
});




//Mảng số câu hỏi khõng trùng


// var mang = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//Trộn mảng
// for(var k=0;k<10;k++)
//   {
//     console.log(mang[k]);
//   }

  //biến
  var triviaBucket = [

   {
    question: 'Tôi là ai?',
    a:'Lợi',
    b: 'An',
    c: 'Bảo',
    d: 'Hùng',
    }
];
  


  //Trộn 
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getOne(id) {
    $.ajax({
        url: "http://localhost:8080/WebService/resources/greeting/"+id,
        method: "GET",
        success: function(data) {
        var obj = new Object();
        obj.question = data.ndch;
        obj.a = data.a;
        obj.b = data.b;
        obj.c = data.c;
        obj.d = data.d;
        obj.da =data.da; 

        triviaBucket.push(obj);
        },
        error: function(err) {
            console.log(err);
        }
    });
}
  





      //GLOBAL VARIABLES
//------------------------------------------
  var clickSwitch = true //BOOLEAN TO SWITCH QUESTIONS ON ANSWER CLICKS
  var index = 1
  var correct = 0
  var incorrect = -1
  var dapan = ""
  var result = 0


  function incrementQuestion(){
    index++;
      };

      //FUNCTION POPULATES QUESTIONAREA
//------------------------------------------

  function populateQuestionArea(){
if (index <= 11){
  $(".cauhoi").html(triviaBucket[index].question);
  $("#1_1").html(triviaBucket[index].a);
  $("#1_2").html(triviaBucket[index].b);
  $("#1_3").html(triviaBucket[index].c);
  $("#1_4").html(triviaBucket[index].d);
  if (triviaBucket[index].da === 'A')
  {
    dapan = "1_1";
  }
  if (triviaBucket[index].da === 'B')
  {
    dapan = "1_2";
  }
  if (triviaBucket[index].da === 'C')
  {
    dapan = "1_3";
  }
  if (triviaBucket[index].da === 'D')
  {
    dapan = "1_4";
  }
}else{
  $(".cauhoi").prop('disabled', true);
  $("#1_1").prop('disabled', true);
  $("#1_2").prop('disabled', true);
  $("#1_3").prop('disabled', true);
  $("#1_4").prop('disabled', true);
}
};
//------------------------------------------


//START BUTTON
//------------------------------------------
$('#startButton').on("click", function(){



console.log("clickswitch is now = " + clickSwitch)

});
//------------------------------------------


//ASWER BUTTON CLICK FUNCTION.
//------------------------------------------
$(document).on("click", ".answerBlock", function(){

    var $this = this;
    
    
        var clickIdentifier = $(this).attr('id');
        if (clickIdentifier === dapan) {
        // console.log('true!');
        clickSwitch = false
        correct++;
        $("#wins").html("Correct " + correct);
        console.log(correct + " is the number of correct answers");
            window.onbeforeunload = function(event)
            {
                return confirm("Confirm refresh");
            };
       
          incrementQuestion();
        
        populateQuestionArea();
        result++;
        // intervalTimer();
        } else {
        
        clickSwitch = false
        incorrect++;
        $("#losses").html("Awww! " + incorrect);
        console.log(incorrect + " is the number of incorrect answers");
        
          incrementQuestion();
        
        populateQuestionArea();
        result++;
        // intervalTimer();
        }

       
      
});

    







 //Document ready endtag.

//------------------------------------------
