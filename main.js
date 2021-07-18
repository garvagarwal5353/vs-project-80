function submit(){
    var guests=document.getElementById("guest1").value 
guest1.push(guests)
document.getElementById("submitbtn").style.display="none"
}
function show(){
    var guests
}
function sort(){
    guest1.sort()
}
function search(){
    var s=document.getElementById("s1").value
    var found=0
    var j;
    for (j=0;j<guest1.length; j++) 
    {
        if (s==guest1[j]) {
            found=found+1
        }
        
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
    console.log("found name"+found+"time/s");
}