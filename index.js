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
    
});