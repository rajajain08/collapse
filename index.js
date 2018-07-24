$(document).ready(function(){
	var i =0;
    $("#btn").click(function(){
    	if (i==0) {
        $("#toggel").hide("slow");
    	i=1;}
    	else
    	{$("#toggel").show();
		i=0;}
    });

    var j =0;
    $("#btn1").click(function(){
    	if (j==0) {
        $("#toggel1").hide("slow");
    	j=1;}
    	else
    	{$("#toggel1").show("slow");
		j=0;}
    });

    var k =0;
    $("#btn2").click(function(){
    	if (k==0) {
        $("#toggel2").hide("slow");
    	k=1;}
    	else
    	{$("#toggel2").show();
		k=0;}
    });
    
});