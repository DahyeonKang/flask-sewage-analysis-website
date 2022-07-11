function takeApi(Val){
    var ng = {{ng|safe}};
    var dn = {{dn|safe}};
    var sh = {{sh|safe}};
    var aas = {{aas|safe}};
    var ad = {{ad|safe}};
    var ym = {{ym|safe}};
    var ys = {{ys|safe}};
    var wg = {{wg|safe}};
    var wh = {{wh|safe}};
    // var Val = document.getElementById("areaSelect").value;
    var val = Val[Val.selectedIndex].value;

    if (val == 'ng') div.insertAdjacentHTML('beforeend', ng)
    // if (val == 'ng') document.write(ng);
    if (val == 'dn') document.write(dn);
    if (val == 'wh') document.write(wh);
    if (val == 'sh') document.write(sh);
    if (val == 'aas') document.write(aas);
    if (val == 'ad') document.write(ad);
    if (val == 'ym') document.write(ym);
    if (val == 'ys') document.write(ys);
    if (val == 'wg') document.write(wg);
    if (val == 'wh') document.write(wh);
}
