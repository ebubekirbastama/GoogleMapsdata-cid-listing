//Bu kod Google Maps Sayfasında data-cid toplamak için yazılmıştır

var syhmhz = new Array();
for (var i = 0; i < $x("//*[@class='vwVdIc wzN8Ac rllt__link a-no-hover-decoration']").length; i++) {
       syhmhz.push($x("//*[@class='vwVdIc wzN8Ac rllt__link a-no-hover-decoration']")[i].getAttribute("data-cid"));
    }
 for (var j = 0; j < syhmhz.length; j++) 
{
  document.write(syhmhz[j]+"<br>");
}

