function takeApi(sh, ng) {
    var val = document.getElementById('recentArea_btn').options[document.getElementById("recentArea_btn").selectedIndex].value;

    var sh = $(sh);
    // var ng = ng;
    // var dn = dn;
    var aas = $(aas);
    // var ad = ad;
    // var ym = ym;
    // var ys = ys;
    // var wg = wg;
    // var wh = wh;

    if (val == 'X') document.getElementById('result').innerHTML = '';
    if (val == '능곡') document.getElementById('result').innerHTML = $(ng);
    if (val == '둔내') document.getElementById('result').innerHTML = dn;
    if (val == '시화') document.getElementById('result').innerHTML = sh;
    if (val == '아산') document.getElementById('result').innerHTML = aas;
    if (val == '안덕') document.getElementById('result').innerHTML = $(ad);
    if (val == '약목') document.getElementById('result').innerHTML = ym;
    if (val == '연서') document.getElementById('result').innerHTML = $(ys);
    if (val == '왜관') document.getElementById('result').innerHTML = $(wg);
    if (val == '우항') document.getElementById('result').innerText = $(wh);
}
