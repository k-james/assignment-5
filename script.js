//Calculator
window.addEventListener("load", init, false);
function init() {
   var calcBtns = document.getElementById("calcBtns");
    var result = document.getElementById("result");
    var newEquation = false;
    calcBtns.addEventListener("click", enter, false);
    function enter(evt) {  
        if (evt.target.value == "=") {
              // window.console.log(evt.target.value);
            result.value = eval(result.value);
            //newEquation = true;
        
        } else if (evt.target.value !== undefined) {
            //if (newEquation = true) {
                //result.value = "";
            
            result.value += evt.target.value;
            }
        }
        window.console.dir(result);
}
