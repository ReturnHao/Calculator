var Option_Calculate = document.getElementById("Cal_button"),
    Option_Clear = document.getElementById("Clr_button"),
    Option_Delete = document.getElementById("Del_button"),
    Option_Multiply = document.getElementById("Mul_button"),
    Display = document.getElementById("Screen_container"),
    Expression_Arr_0 = document.getElementsByClassName("Calculator_line")[0].getElementsByTagName("li"),
    Expression_Arr_1 = document.getElementsByClassName("Calculator_line")[1].getElementsByTagName("li"),
    Expression_Arr_2 = document.getElementsByClassName("Calculator_line")[2].getElementsByTagName("li"),
    Expression_Arr_3 = document.getElementsByClassName("Calculator_line")[3].getElementsByTagName("li"),
    Expression_Arr_4 = document.getElementsByClassName("Calculator_line")[4].getElementsByTagName("li");

function Disp(_s){
    Display.innerHTML = _s + "&nbsp&nbsp&nbsp";
}

function Calculator(){
    var s = "", Pre="", i, Current_Arr = Expression_Arr_0;
    for (i = 0; i < Current_Arr.length; i++){
        if (Current_Arr[i].value == "Special") continue;
        Current_Arr[i].onclick = function () {
            s += this.innerText; Disp(s);
        }
    }
    Current_Arr = Expression_Arr_1;
    for (i = 0; i < Current_Arr.length; i++){
        Current_Arr[i].onclick = function () {
            s += this.innerText; Disp(s);
        }
    }
    Current_Arr = Expression_Arr_2;
    for (i = 0; i < Current_Arr.length; i++){
        Current_Arr[i].onclick = function () {
            s += this.innerText; Disp(s);
        }
    }
    Current_Arr = Expression_Arr_3;
    for (i = 0; i < Current_Arr.length; i++){
        Current_Arr[i].onclick = function () {
            s += this.innerText; Disp(s);
        }
    }
    Current_Arr = Expression_Arr_4;
    for (i = 0; i < Current_Arr.length; i++){
        if (Current_Arr[i].value == "Special") continue;
        Current_Arr[i].onclick = function () {
            s += this.innerText; Disp(s);
        }
    }
    Option_Multiply.onclick = function () { s += "*"; Disp(s); };
    Option_Clear.onclick = function () { s = ""; Disp(s); };
    Option_Delete.onclick = function () { s = s.substring(0, s.length-1); Disp(s); };
    Option_Calculate.onclick = function () { s = eval(s); Disp(s); };
}

Calculator();