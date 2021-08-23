var welcomesection=["Data Scientist","CEO of SaranJai","Software Developer"];
var count=0;
var elem1=document.getElementById("title2");
console.log(elem1.innerhtml);
var inst=setInterval(change,2000);

function change()
{
  elem1.innerHTML=welcomesection[count];
  count++;
  if(count>=welcomesection.length){
  count=0;
}
}
