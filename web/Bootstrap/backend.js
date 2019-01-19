function vala(ter) {
var t = ter.length - 1
var te = ter.length - 2
var u = ter.slice(0, t);
var tr = ter.slice(0,te);

if (ter[t] == ' ') {
document.querySelector(".display").value = tr
}
else if (ter == "Error") {
document.querySelector(".display").value = "";
}
else {
document.querySelector(".display").value = u
}
}
function smal() {
alert("work")
}



$('.b').click( function() {
document.querySelector('.display').value += $(this).text();

})
$('.blog').click( function() {
document.querySelector('.display').value += $(this).text()+'(';


});

$('.bc').click( function() {
document.querySelector('.display').value = '';
document.querySelector('.dp').value = '';
}
);

$(".del").click(function() {
var therm = document.querySelector(".display").value;
vala(therm);
}
)

function chang() {
var ln = /(ln)/g
var sin = /((sin)|(cos)|(tan))(\(+\d+(\.\d+)?\))/g
var cos = /(asi)(\(+\d+(\.\d+)?\))/g
var log = /(log)(\(+\d+(\.\d+)?\))/g
var sqrt = /(√)/g
var u = document.querySelector(".display").value;
var sq = u.replace(sqrt, '(Math.sqrt)');
var all = sq.replace(/x/g , "*").replace(log ,'(Math.log($2)/Math.LN10)').replace( /π/g , '(3.142657)').replace(/(\d+(\.\d+)?)+(\(+3.142657+\))/g , "$1*$3").replace(/(\d+)+(\^)+((\()?+\d+(\.\d+)?)(\))?/g, 'Math.pow($1 , $4)');
var ste = all.replace(ln ,'Math.log');
var ret = ste.replace(cos , 'Math.asin($3) * 180/(22/7)0');
var rew = ret.replace(sin ,'Math.$1($5 * 3.142/180)');
var sec = rew.replace(/\)+\(/g,  ')*(');
var brn = sec.replace(/(\))([0-9])/g , '$1*$2' );
var nit = brn.replace(/([0-9])([A-z])/g , '$1*$2' );
var brnn = nit.replace(/([0-9])(\()/g , '$1*$2' )
var y = eval(brnn)
if (typeof y != "number") {
document.querySelector(".disp").value = "";
}
else if (typeof y == 'number') {
document.querySelector(".disp").value = y;
}
}

$('.bt').click( function() {
var io = document.querySelector(".disp").value
document.querySelector('.dp').value = io;
try {
var act = document.querySelector('.display').value;
var log = /(log)(\(+\d+(\.\d+)?\))/g
var ln = /(ln)/g
var sqrt = /(√)/g;
var sin = /((sin)|(cos)|(tan))(\(+\d+(\.\d+)?\))/g
var cos = /(asi)(\(+\d+(\.\d+)?\))/g
var times = new RegExp('x' , 'g'); 
var pow = /(pow)/g
var sq = act.replace(sqrt, '(Math.sqrt)');
var po = sq.replace(pow, '55');
var res = sq.replace(log ,'(Math.log($2)/Math.LN10)').replace( /π/g , '3.142657')//
.replace(/(\d+(\.\d+)?)+(3.142657)/g , "$1*$3")//
.replace(/(\d+(\.\d+)?)+(\^)+(\(?\d+(\.\d+)?\)?)/g, 'Math.pow($1 , $4)')//
.replace(/(\d+(\.\d+)?)+(to)/g, 'Math.pow($1,2)')
.replace(/(\d+(\.\d+)?)+(thr)/g, 'Math.pow($1,3)')
var ste = res.replace(ln ,'Math.log');
var ret = ste.replace(cos , 'Math.asin($3) * 180/(22/7)0');
var rew = ret.replace(sin ,'Math.$1($5 * 3.142/180)');
var sec = rew.replace(/\)+\(/g,  ')*(');
var brn = sec.replace(/(\))([0-9])/g , '$1*$2' );
var nit = brn.replace(/([0-9])([A-z])/g , '$1*$2' );
var brnn = nit.replace(/([0-9])(\()/g , '$1*$2' );
var com = brnn.replace(times ,'*');
var solve = eval(com);
if (typeof solve == 'number') {
document.querySelector('.display').value = "";
document.querySelector('.dp').value = solve;
}
else {
document.querySelector('.display').value = "Error" + com;
}
}
catch(err) {
document.querySelector('.display').value = "Error " + com;
}
})





