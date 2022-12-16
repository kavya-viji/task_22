a=document.createElement("Button")
a.setAttribute("onclick","addition();");
a.innerHTML="Click Me"
a.style.backgroundColor="salmon";
a.style.height="40px";
a.style.width="10%";
a.style.border="dotted";
a.style.fontStyle="fantasy";

document.body.appendChild(a);
//document.write('<br/>','<br/>');

function addition()
{
   x=document.createElement("Button");
   x.setAttribute("onclick","single();"); 
   x.innerHTML="Start";
   x.style.backgroundColor="goldenrod";
   x.style.height="40px";
   x.style.width="10%";
   x.style.border="dotted";
   document.body.appendChild(x)
   
}

function single()
{
	var a = document.createElement("input");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter the Number:");
    a.setAttribute("id","n");
    a.style.backgroundColor="plum";
    a.style.height="40px";
    a.style.width="20%";
	a.style.border="dotted";
    document.body.appendChild(a);

    b=document.createElement("Button");
    b.setAttribute("onclick","run();");
    b.innerHTML="Run";
    b.style.backgroundColor="rosybrown";
    b.style.height="40px";
    b.style.width="10%";
	b.style.border="dotted";
    document.body.appendChild(b)
} 

function run()
{
	num = Number(document.getElementById("n").value);
	
	var a = 1;
	for(i=1;i<=num;i++)
	{
		a=a*i;
	}
	document.write(a)
    document.body.style.backgroundColor="oldlace";
    document.body.style.textAlign="center";
}
document.body.style.backgroundColor="lightcyan";
document.body.style.textAlign="center";
