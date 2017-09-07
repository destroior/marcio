function show5(){
if (!document.layers&&!document.all&&!document.getElementById)return
var Digital=new Date()
var data=new Date()
var datab=data.toDateString()
var dia=data.getDate()
var dia2=data.getDay()
var month=data.getMonth()
var ano=data.getFullYear()
var month2
if (month==0){month2="Janeiro";};if (month==1){month2="Fevereiro";};if (month==2){month2="Março";};if (month==3){month2="Abril";};if (month==4){month2="Maio";};if (month==5){month2="Junho";};if (month==6){month2="Julho";};if (month==7){month2="Agosto";};if (month==8){month2="Setembro";};if (month==9){month2="Outubro";};if (month==10){month2="Novembro";};if (month==11){month2="Dezembro";};
if (dia2==1){dia2="Segunda Feira"};if (dia2==2){dia2="Terca Feira"};if (dia2==3){dia2="Quarta Feira"};if (dia2==4){dia2="Quinta Feira"};if (dia2==5){dia2="Sexta Feira"};if (dia2==6){dia2="Sabado"};if (dia2==0){dia2="Domingo"};
var hours=Digital.getHours()
var minutes=Digital.getMinutes()
var seconds=Digital.getSeconds()
var dn="AM"
if (hours>12){dn="PM";hours=hours-12;};if (hours==0)hours=12;if (minutes<=9)minutes="0"+minutes;if (seconds<=9)seconds="0"+seconds;
myclock="<font color=white> "+dia2+", "+dia+" de "+month2+" de "+ano+" e são "+hours+":"+minutes+":"+seconds+"("+dn+")"
if (document.layers){document.layers.liveclock.document.write(myclock);document.layers.liveclock.document.close();}
else if (document.all)
liveclock.innerHTML=myclock
else if (document.getElementById)
document.getElementById("liveclock").innerHTML=myclock
setTimeout("show5()",1000)
}
 function show6(){
 if (!document.layers&&!document.all&&!document.getElementById)return
 var Digital=new Date()
 var data=new Date()
 var datab=data.toDateString()
 var dia=data.getDate()
 var dia2=data.getDay()
 var month=data.getMonth()
 var ano=data.getFullYear()
 var month2
 if (month==0){month2="January";};if (month==1){month2="February";};if (month==2){month2="March";};if (month==3){month2="April";};if (month==4){month2="May";};if (month==5){month2="June";};if (month==6){month2="July";};if (month==7){month2="August";};if (month==8){month2="September";};if (month==9){month2="October";};if (month==10){month2="November";};if (month==11){month2="December";};
 if (dia2==1){dia2="Monday"};if (dia2==2){dia2="Tuesday"};if (dia2==3){dia2="Wednesday"};if (dia2==4){dia2="Thursday"};if (dia2==5){dia2="Friday"};if (dia2==6){dia2="Saturday"};if (dia2==0){dia2="Sunday"};
 var hours=Digital.getHours()
 var minutes=Digital.getMinutes()
 var seconds=Digital.getSeconds()
 var dn="AM"
 if (hours>12){dn="PM";hours=hours-12;};if (hours==0)hours=12;if (minutes<=9)minutes="0"+minutes;if (seconds<=9)seconds="0"+seconds;
 myclock="<font color=white> "+dia2+" "+dia+" of "+month2+" of "+ano+" and it´s "+hours+":"+minutes+":"+seconds+"("+dn+")"
 if (document.layers){document.layers.liveclock.document.write(myclock);document.layers.liveclock.document.close();}
 else if (document.all)
 liveclock.innerHTML=myclock
 else if (document.getElementById)
 document.getElementById("liveclock").innerHTML=myclock
 setTimeout("show6()",1000)
  }
function enter() {
  window.open("site.html","_self")
}
function startdetect() {
  var u = detectmob()
}
var mobile = 0;
function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    mobile=1;
    var x = document.getElementById('st');
    x.style.left="15%";
    return true;
  }
 else {
    mobile=0;
    enter();
    return false;
  }
}
function startdetect2() {
  var u = detectmob2()
}
function detectmob2() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    mobile=1;
    var x = getElementById('dp');
    var x2 = getElementById('dedu');
    var x2 = getElementById('dep');
    x.style.padding="10px";
    x2.style.padding="10px";
    x3.style.padding="10px";
    return true;
  }
 else {
    mobile=0;
    return false;
  }
}
var op = 0;
var op2 = 0;
var op3 = 0;
var op4 = 0;
var op5 = 0;
var opfinal = 0;
var puta
function opening() {
  var x = document.getElementById('p1');
  x.style.opacity=1;
  isopening();
}
function isopening() {
  op++;
  if(op>40){clearInterval(puta);isopening2(); return}
  var x = document.getElementById('p1');
  x.style.fontSize=op + "px";
  puta = setTimeout("isopening()",50);
}
function isopening2() {
  op2++;
  if(op2>15){
    var x = document.getElementById('p1');
    x.style.opacity=0;
    clearInterval(puta);
    isopening3();
    return
  }
  puta = setTimeout("isopening2()",50);
}
function isopening3(){
  var x = document.getElementById('d1');
  var x2 = document.getElementById('d2');
  x.style.width="50px";
  x.style.borderBottomRightRadius="150%";
  x2.style.width="50px";
  x2.style.borderBottomLeftRadius="150%";
  isopening4();
}
function isopening4() {
  op3++;
  if(op3<40) {puta = setTimeout("isopening4()",50); return }
  else { clearInterval(puta); isopening5(); return }
}
function isopening5() {
  var x = document.getElementById('nn');
  if(mobile==0){
    x.style.top="10%";
    x.style.left="5%";
    x.style.margin="0px";
    x.style.marginRight="-5%";
    x.style.width="90%";
    x.style.height="80%";
    x.style.backgroundColor="white";
    x.style.borderWidth="thin";
    x.style.border="solid gray";
    x.style.boxShadow="5px 5px 5px darkgray";
  } else {
    x.style.margin="0px";
    x.style.width="100%";
    x.style.height="100%";
    x.style.backgroundColor="white";
    x.style.borderWidth="thin";
    x.style.border="solid gray";
    x.style.boxShadow="5px 5px 5px darkgray";
  }
  isopening6();
}
function isopening6() {
  op4++;
  if(op4>20){clearInterval(puta); isopening7(); }
  else { puta = setTimeout("isopening6()",50); return }
}
function isopening7() {
  op5++;
  var x = document.getElementById('p2');
  x.style.opacity="1";
  x.innerHTML="Criador do Website: Márcio Carvalho<br>Para o Curso: Técnicos de Multimédia<br>IEFP Setúbal";
  isopening8();
}
function isopening8() {
  opfinal++;
  if(opfinal<70){puta = setTimeout("isopening8()",50); return }
  else {
  clearInterval(puta);
  var x = document.getElementById('p2');
  x.style.opacity="0";
  var x2 = document.getElementById('nn');
  x2.style.left="0";
  x2.style.backgroundColor="black";
  x2.style.margin="0px";
  x2.style.border="none";
  x2.style.boxShadow="none";
  x2.style.position="absolute";
  x2.style.top="0px";
  x2.style.height="100%";
  x2.style.width="100%";
  var x3 = document.getElementById('d1');
  var x4 = document.getElementById('d2');
  x3.style.width="0px";
  x4.style.width="0px";
  puta = setTimeout("isopening9()",3300);
}
}
var opfinal2 = 0;
function isopening9() {
  opfinal2++;
  var x2 = document.getElementById('nn');
  if(opfinal2==10) {x2.style.backgroundColor="red";}
  else if(opfinal2==15){x2.style.backgroundColor="white";}
  else if(opfinal2==25){
  clearInterval(puta);
  window.open("inicio.html","_self");
  return
}
puta = setTimeout("isopening9()",50);
}
var yy = 0;
function inyear() {
  var x = document.getElementById('showy1');
  if(yy==0) {
    yy=1;
    x.style.display="inline-block";
    return
  }
  else {
    yy=0;
    x.style.display="none";
    return
  }
}
var yy2 = 0;
function inyear2() {
  var x = document.getElementById('showy2');
  if(yy2==0) {
    yy2=1;
    x.style.display="inline-block";
    return
  }
  else {
    yy2=0;
    x.style.display="none";
    return
  }
}
var yy3 = 0;
function inyear3() {
  var x = document.getElementById('showy3');
  if(yy3==0) {
    yy3=1;
    x.style.display="inline-block";
    return
  }
  else {
    yy3=0;
    x.style.display="none";
    return
  }
}
function sopen() {
  if (confirm("Avançar para o site sem ver a introdução!") == true) {
    window.open("inicio.html","_self");
} else {
    isopening();
}
}
var rm = 1;
function stopme() {
  var x = document.getElementById('stopsound');
  var x2 = document.getElementById('stopm');
  if(rm==1){
    rm=0;
    x.src="none";
    x2.innerHTML="Tocar Música";
    return
  }
  else {
    rm=1;
    x.src="Tracy Chapman - Fast car (Jonas Blue Ft Dakota remix).mp3";
    x2.innerHTML="Parar Música";
    return
  }
}
