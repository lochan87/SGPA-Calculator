// Simple Javascript code to calculate SGPA and display it
document.getElementById("calculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var s=[];
    var c=[];
    for(var i=0;i<8;i++)
    {
        var s1 = "s"+(i+1);
        s[i] = parseFloat(document.getElementById(s1).value);
        var c1 = "s"+(i+1)+"c";
        c[i] = parseFloat(document.getElementById(c1).value);
        if((isNaN(s[i])&&!isNaN(c[i]))||(!isNaN(s[i])&&isNaN(c[i])))
        {
            alert("Please enter valid input");
            return;
        }
    }
    var res=calc(s,c);
    document.getElementById("result").innerHTML = "Your SGPA is: " + res;
    document.getElementById("result").scrollIntoView();
});
function calc(cre,mar) //Function to calculate SGPA
{
  var sgpa=0;
  var s=0;
  for(var i=0;i<8;i++)
  {
    if(((mar[i]==0 && cre[i]==0)||(isNaN(mar[i])&&isNaN(cre[i])))&& i>5)
      continue;
    if(mar[i]<40)
    { 
      sgpa=sgpa+(cre[i]*0);
      makered(i+1);
    }
    else if(mar[i]<45 && mar[i]>=40)
      sgpa=sgpa+(cre[i]*4);
    else if(mar[i]<50 && mar[i]>=45)
      sgpa=sgpa+(cre[i]*5);
    else if(mar[i]<60 && mar[i]>=50)
      sgpa=sgpa+(cre[i]*6);
    else if(mar[i]<70 && mar[i]>=60)
      sgpa=sgpa+(cre[i]*7);
    else if(mar[i]<80 && mar[i]>=70)
      sgpa=sgpa+(cre[i]*8);
    else if(mar[i]<90 && mar[i]>=80)
      sgpa=sgpa+(cre[i]*9);
    else if(mar[i]>=90)
      sgpa=sgpa+(cre[i]*10);
    s=s+cre[i];  
  }
  return (sgpa/s).toFixed(2);
}
function makered(i) //Function to change colors of input fields marks less than 40
{
  var x = document.getElementById("s"+i);
  var y = document.getElementById("s"+i+"c");
  x.style.background = "#d57e7e";
  x.style.border = "2px solid #ff0000";
  y.style.background = "#d57e7e";
  y.style.border = "2px solid #ff0000";
  x.onchange, y.onchange = function()
  {
    x.style.background = "#fff";
    x.style.border = "1px solid #333";
    y.style.background = "#fff";
    y.style.border = "1px solid #333";
  }
}
