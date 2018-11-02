//every item should look like this:
//<li>
  //<input type="checkbox"/>
  //<span>Write this tutorial</span>
//</li>
function updateItemStatus(){
    var cbId=this.id.replace("cb_","");
    var itemText=document.getElementById("item_"+cbId);
    if(this.checked){
    itemText.className="checked";
    }
    else{
    itemText.className="";
    }
}
function renameItem(){
    //this==span
    var newText=prompt("What should this item be rename to?");
    this.innerText=newText;
    if(!newText || newText=="" || newText==" "){
    return false;
}
}
function removeItem(){
   this.style.display="none";
}
function addNewItem(list,itemText){
    var date=new Date();
    var id=""+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds();

   var listItem=document.createElement("li");
   listItem.id="li_"+id;
   listItem.ondblclick=removeItem;
   
   var checkbox=document.createElement("input");
   checkbox.type="checkbox";
   checkbox.id="cb_"+id;
   checkbox.onclick=updateItemStatus;

   var span=document.createElement("span");
   span.id="item_"+id;
   span.innerText=itemText;
   span.onclick=renameItem;
   

   listItem.appendChild(checkbox);
   listItem.appendChild(span);
   //listItem.innerText=itemText;

   var list=document.getElementById("todoList");
   list.appendChild(listItem);
  
}

var totalItems=0;
var inItemText=document.getElementById("inItemText");
inItemText.focus();

inItemText.onkeyup= function(event){
    if(event.which==13){
     var itemText=inItemText.value;
   //var itemText=event.which;
   if(!itemText || itemText=="" || itemText==" "){
    return false;
}
addNewItem(document.getElementById("todoList"),itemText);
inItemText.focus();
inItemText.select();
}
}