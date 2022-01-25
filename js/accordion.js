var kit = document.getElementsByClassName("show_kit");
var i = 0;

for(i = 0; i < kit.length; i++){
    kit[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var kit_accordion = this.nextElementSibling;
        if(kit_accordion.style.maxHeight){
            kit_accordion.style.maxHeight = null;
        }else{
            kit_accordion.style.maxHeight = kit_accordion.scrollHeight + "px";
        }
    });
}