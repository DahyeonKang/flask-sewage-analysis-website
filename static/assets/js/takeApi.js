function takeApi(ng, dn, aas, sh, ad, ym, ys, wg, wh) {
    var val = document.getElementById('recentArea_btn').options[document.getElementById("recentArea_btn").selectedIndex].value;
    // var ng = ng;
    // var dn = dn;
    // var sh = sh;
    // var aas = aas;
    // var ad = ad;
    // var ym = ym;
    // var ys = ys;
    // var wg = wg;
    // var wh = wh;

    if (val == 'X') document.getElementById('result').innerHTML = '';
    if (val == '능곡') document.getElementById('result').innerText = ng;
    if (val == '둔내') document.getElementById('result').innerHTML = dn;
    if (val == '시화') document.getElementById('result').innerHTML = ${sh};
    if (val == '아산') document.getElementById('result').innerHTML = aas;
    if (val == '안덕') document.getElementById('result').innerText = ${ad};
    if (val == '약목') document.getElementById('result').innerHTML = ym;
    if (val == '연서') document.getElementById('result').innerHTML = '<div>{{ys | safe}}</div>';
    if (val == '왜관') document.getElementById('result').innerHTML = '<div>{{wg | safe}}</div>';
    if (val == '우항') document.getElementById('result').innerHTML = '<div>{{wh | safe}}</div>';
}

// function takeApi() {
//     var value = document.getElementById('recentArea_btn').options[document.getElementById("recentArea_btn").selectedIndex].value;
//     // console.log(dn);
//     // console.log(ng);
//
//     var ng = ${ng};
//     // var dn = {{dn|safe}};
//     // var sh = {{sh|safe}};
//     // var aas = {{aas|safe}};
//     // var ad = {{ad|safe}};
//     // var ym = {{ym|safe}};
//     // var ys = {{ys|safe}};
//     // var wg = {{wg|safe}};
//     // var wh = {{wh|safe}};
//
//     if (value == 'X') document.getElementById('result').innerHTML = '';
//     if (val == '능곡') document.getElementById('result').innerText = ng;
//     if (val == '둔내') document.getElementById('result').innerText = dn;
//     if (val == '시환') document.getElementById('result').innerHTML = sh;
//     if (val == '아산') document.getElementById('result').innerHTML = aas;
//     if (val == '안덕') document.getElementById('result').innerHTML = ad;
//     if (val == '약목') document.getElementById('result').innerHTML = ym;
//     if (val == '연서') document.getElementById('result').innerHTML = ys;
//     if (val == '왜관') document.getElementById('result').innerHTML = wg;
//     if (val == '우항') document.getElementById('result').innerHTML = wh;
// }
