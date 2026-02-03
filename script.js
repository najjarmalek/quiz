function result(){
    var points=0;
    if(document.getElementById('correct1').checked){
        points++;
    }
    if(document.getElementById('correct2').checked){
        points++;
    }
    if(document.getElementById('correct3').checked){
        points++;
    }
    alert("You scored "+points+" out of 3");
}