function takePic_past() {
    var value = document.getElementById('pastArea_btn').options[document.getElementById("pastArea_btn").selectedIndex].value;
    var chem = document.getElementById('pastChem_btn').options[document.getElementById("pastChem_btn").selectedIndex].value;

    if (value == 'X'){
        document.getElementById('result').innerHTML = '';
    }

    /* 능곡 */
    if (value == '능곡' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90002_uBac.png">' +
            '<img src="../static/graph/compareGraph/90002_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/90002_bBac.png"></figure>';
    }
    if (value == '능곡' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90002_uBod.png">' +
            '<img src="../static/graph/compareGraph/90002_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/90002_bBod.png"></figure>';

    }
    if (value == '능곡' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90002_uCod.png">' +
            '<img src="../static/graph/compareGraph/90002_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/90002_bCod.png"></figure>';

    }
    if (value == '능곡' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90002_uSs.png">' +
            '<img src="../static/graph/compareGraph/90002_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/90002_bSs.png"></figure>';

    }
    if (value == '능곡' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90002_uTn.png">' +
            '<img src="../static/graph/compareGraph/90002_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/90002_bTn.png"></figure>';

    }
    if (value == '능곡' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90002_uTp.png">' +
            '<img src="../static/graph/compareGraph/90002_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/90002_bTp.png"></figure>';
    }

    /* 동부 */
    if (value == '동부' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uBac.png">' +
            '<img src="../static/graph/compareGraph/88001_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bBac.png"></figure>';
    }
    if (value == '동부' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uBod.png">' +
            '<img src="../static/graph/compareGraph/88001_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bBod.png"></figure>';

    }
    if (value == '동부' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uCod.png">' +
            '<img src="../static/graph/compareGraph/88001_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bCod.png"></figure>';

    }
    if (value == '동부' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uSs.png">' +
            '<img src="../static/graph/compareGraph/88001_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bSs.png"></figure>';

    }
    if (value == '동부' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uTn.png">' +
            '<img src="../static/graph/compareGraph/88001_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bTn.png"></figure>';

    }
    if (value == '동부' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uTp.png">' +
            '<img src="../static/graph/compareGraph/88001_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bTp.png"></figure>';
    }

    /* 둔내 */
    if (value == '둔내' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50002_uBac.png">' +
            '<img src="../static/graph/compareGraph/50002_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/50002_bBac.png"></figure>';
    }
    if (value == '둔내' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50002_uBod.png">' +
            '<img src="../static/graph/compareGraph/50002_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/50002_bBod.png"></figure>';

    }
    if (value == '둔내' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50002_uCod.png">' +
            '<img src="../static/graph/compareGraph/50002_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/50002_bCod.png"></figure>';

    }
    if (value == '둔내' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50002_uSs.png">' +
            '<img src="../static/graph/compareGraph/50002_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/50002_bSs.png"></figure>';

    }
    if (value == '둔내' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50002_uTn.png">' +
            '<img src="../static/graph/compareGraph/50002_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/50002_bTn.png"></figure>';

    }
    if (value == '둔내' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50002_uTp.png">' +
            '<img src="../static/graph/compareGraph/50002_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/50002_bTp.png"></figure>';
    }

    /* 동부 */
    if (value == '동부' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uBac.png">' +
            '<img src="../static/graph/compareGraph/88001_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bBac.png"></figure>';
    }
    if (value == '동부' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uBod.png">' +
            '<img src="../static/graph/compareGraph/88001_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bBod.png"></figure>';

    }
    if (value == '동부' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uCod.png">' +
            '<img src="../static/graph/compareGraph/88001_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bCod.png"></figure>';

    }
    if (value == '동부' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uSs.png">' +
            '<img src="../static/graph/compareGraph/88001_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bSs.png"></figure>';

    }
    if (value == '동부' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uTn.png">' +
            '<img src="../static/graph/compareGraph/88001_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bTn.png"></figure>';

    }
    if (value == '동부' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/88001_uTp.png">' +
            '<img src="../static/graph/compareGraph/88001_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/88001_bTp.png"></figure>';
    }

    /* 시화 */
    if (value == '시화' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90001_uBac.png">' +
            '<img src="../static/graph/compareGraph/90001_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/90001_bBac.png"></figure>';
    }
    if (value == '시화' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90001_uBod.png">' +
            '<img src="../static/graph/compareGraph/90001_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/90001_bBod.png"></figure>';

    }
    if (value == '시화' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90001_uCod.png">' +
            '<img src="../static/graph/compareGraph/90001_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/90001_bCod.png"></figure>';

    }
    if (value == '시화' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90001_uSs.png">' +
            '<img src="../static/graph/compareGraph/90001_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/90001_bSs.png"></figure>';

    }
    if (value == '시화' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90001_uTn.png">' +
            '<img src="../static/graph/compareGraph/90001_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/90001_bTn.png"></figure>';

    }
    if (value == '시화' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/90001_uTp.png">' +
            '<img src="../static/graph/compareGraph/90001_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/90001_bTp.png"></figure>';
    }

    /* 약목 */
    if (value == '약목' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87201_uBac.png">' +
            '<img src="../static/graph/compareGraph/87201_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/87201_bBac.png"></figure>';
    }
    if (value == '약목' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87201_uBod.png">' +
            '<img src="../static/graph/compareGraph/87201_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/87201_bBod.png"></figure>';

    }
    if (value == '약목' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87201_uCod.png">' +
            '<img src="../static/graph/compareGraph/87201_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/87201_bCod.png"></figure>';

    }
    if (value == '약목' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87201_uSs.png">' +
            '<img src="../static/graph/compareGraph/87201_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/87201_bSs.png"></figure>';

    }
    if (value == '약목' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87201_uTn.png">' +
            '<img src="../static/graph/compareGraph/87201_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/87201_bTn.png"></figure>';

    }
    if (value == '약목' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87201_uTp.png">' +
            '<img src="../static/graph/compareGraph/87201_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/87201_bTp.png"></figure>';
    }

    /* 연서 */
    if (value == '연서' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/47000_uBac.png">' +
            '<img src="../static/graph/compareGraph/47000_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/47000_bBac.png"></figure>';
    }
    if (value == '연서' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/47000_uBod.png">' +
            '<img src="../static/graph/compareGraph/47000_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/47000_bBod.png"></figure>';

    }
    if (value == '연서' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/47000_uCod.png">' +
            '<img src="../static/graph/compareGraph/47000_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/47000_bCod.png"></figure>';

    }
    if (value == '연서' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/47000_uSs.png">' +
            '<img src="../static/graph/compareGraph/47000_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/47000_bSs.png"></figure>';

    }
    if (value == '연서' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/47000_uTn.png">' +
            '<img src="../static/graph/compareGraph/47000_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/47000_bTn.png"></figure>';

    }
    if (value == '연서' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/47000_uTp.png">' +
            '<img src="../static/graph/compareGraph/47000_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/47000_bTp.png"></figure>';
    }

    /* 왜관 */
    if (value == '왜관' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87202_uBac.png">' +
            '<img src="../static/graph/compareGraph/87202_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/87202_bBac.png"></figure>';
    }
    if (value == '왜관' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87202_uBod.png">' +
            '<img src="../static/graph/compareGraph/87202_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/87202_bBod.png"></figure>';

    }
    if (value == '왜관' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87202_uCod.png">' +
            '<img src="../static/graph/compareGraph/87202_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/87202_bCod.png"></figure>';

    }
    if (value == '왜관' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87202_uSs.png">' +
            '<img src="../static/graph/compareGraph/87202_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/87202_bSs.png"></figure>';

    }
    if (value == '왜관' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87202_uTn.png">' +
            '<img src="../static/graph/compareGraph/87202_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/87202_bTn.png"></figure>';

    }
    if (value == '왜관' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87202_uTp.png">' +
            '<img src="../static/graph/compareGraph/87202_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/87202_bTp.png"></figure>';
    }

    /* 우항 */
    if (value == '우항' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50003_uBac.png">' +
            '<img src="../static/graph/compareGraph/50003_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/50003_bBac.png"></figure>';
    }
    if (value == '우항' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50003_uBod.png">' +
            '<img src="../static/graph/compareGraph/50003_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/50003_bBod.png"></figure>';

    }
    if (value == '우항' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50003_uCod.png">' +
            '<img src="../static/graph/compareGraph/50003_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/50003_bCod.png"></figure>';

    }
    if (value == '우항' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50003_uSs.png">' +
            '<img src="../static/graph/compareGraph/50003_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/50003_bSs.png"></figure>';

    }
    if (value == '우항' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50003_uTn.png">' +
            '<img src="../static/graph/compareGraph/50003_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/50003_bTn.png"></figure>';

    }
    if (value == '우항' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50003_uTp.png">' +
            '<img src="../static/graph/compareGraph/50003_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/50003_bTp.png"></figure>';
    }

    /* 장항 */
    if (value == '장항' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/60001_uBac.png">' +
            '<img src="../static/graph/compareGraph/60001_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/60001_bBac.png"></figure>';
    }
    if (value == '장항' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/60001_uBod.png">' +
            '<img src="../static/graph/compareGraph/60001_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/60001_bBod.png"></figure>';

    }
    if (value == '장항' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/60001_uCod.png">' +
            '<img src="../static/graph/compareGraph/60001_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/60001_bCod.png"></figure>';

    }
    if (value == '장항' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/60001_uSs.png">' +
            '<img src="../static/graph/compareGraph/60001_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/60001_bSs.png"></figure>';

    }
    if (value == '장항' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/60001_uTn.png">' +
            '<img src="../static/graph/compareGraph/60001_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/60001_bTn.png"></figure>';

    }
    if (value == '장항' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/60001_uTp.png">' +
            '<img src="../static/graph/compareGraph/60001_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/60001_bTp.png"></figure>';
    }

    /* 진보 */
    if (value == '진보' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87105_uBac.png">' +
            '<img src="../static/graph/compareGraph/87105_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/87105_bBac.png"></figure>';
    }
    if (value == '진보' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87105_uBod.png">' +
            '<img src="../static/graph/compareGraph/87105_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/87105_bBod.png"></figure>';

    }
    if (value == '진보' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87105_uCod.png">' +
            '<img src="../static/graph/compareGraph/87105_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/87105_bCod.png"></figure>';

    }
    if (value == '진보' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87105_uSs.png">' +
            '<img src="../static/graph/compareGraph/87105_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/87105_bSs.png"></figure>';

    }
    if (value == '진보' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87105_uTn.png">' +
            '<img src="../static/graph/compareGraph/87105_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/87105_bTn.png"></figure>';

    }
    if (value == '진보' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/87105_uTp.png">' +
            '<img src="../static/graph/compareGraph/87105_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/87105_bTp.png"></figure>';
    }

    /* 횡성 */
    if (value == '횡성' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50001_uBac.png">' +
            '<img src="../static/graph/compareGraph/50001_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/50001_bBac.png"></figure>';
    }
    if (value == '횡성' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50001_uBod.png">' +
            '<img src="../static/graph/compareGraph/50001_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/50001_bBod.png"></figure>';

    }
    if (value == '횡성' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50001_uCod.png">' +
            '<img src="../static/graph/compareGraph/50001_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/50001_bCod.png"></figure>';

    }
    if (value == '횡성' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50001_uSs.png">' +
            '<img src="../static/graph/compareGraph/50001_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/50001_bSs.png"></figure>';

    }
    if (value == '횡성' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50001_uTn.png">' +
            '<img src="../static/graph/compareGraph/50001_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/50001_bTn.png"></figure>';

    }
    if (value == '횡성' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/50001_uTp.png">' +
            '<img src="../static/graph/compareGraph/50001_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/50001_bTp.png"></figure>';
    }
}