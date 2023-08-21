var row=0;
var node=getElementById("LI");
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
node.appendChild(span);

function addList ()
{
    var newSpan=document.createElement("span");
    newSpan.setAttribute("class","text");
    newSpan.setAttribute("id","spanText");
    var node=document.createElement("li");
    var box=document.createElement("input");
    box.setAttribute("type","checkbox");
    box.setAttribute("id","check");
    box.id = "check";
    node.setAttribute("onclick","removeLi()");
    var inputValue= document.getElementById("myInput").value;
    newSpan.innerHTML="   "+inputValue;
    node.appendChild(box);
    node.appendChild(newSpan);

    var span = document.createElement("span");
    var txt=document.createTextNode("\u00D7");
    span.className = "close";
    span.id = "close";
    txt.id = "close";
    span.setAttribute("onclick","this.parentNode.remove(); return false;");
    span.appendChild(txt);
    node.appendChild(span);
    if (inputValue==='')
    {
        alert("The Input space can't be left blank!");
    }
    else
    {
        document.getElementById("myUL").appendChild(node);
        row++;
        node.setAttribute("id",row);
    }
    document.getElementById("myInput").value="";
}

function remove()
{
   $("li").remove();
}