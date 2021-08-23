alert("hey user welcome");

var sub=document.getElementById("sub");
var input=document.getElementById("input");

sub.addEventListener("click",function(){
    if(input.value.length>0){
        console.log("hello")
        alert("we will reach to you soon!!! thankyou");
    }
	input.value=""
	}
);
