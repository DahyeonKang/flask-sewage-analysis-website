function takePic_past() {
    var value = document.getElementById('pastArea_btn').options[document.getElementById("pastArea_btn").selectedIndex].value;
    var chem = document.getElementById('pastChem_btn').options[document.getElementById("pastChem_btn").selectedIndex].value;

    if (value == 'X'){
        document.getElementById('result').innerHTML = '';
    }

    /* 능곡 */
    if (value == '능곡' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90002_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ng_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bBac.png"></figure>';
    }
    if (value == '능곡' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90002_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ng_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bBod.png"></figure>';

    }
    if (value == '능곡' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90002_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ng_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bCod.png"></figure>';

    }
    if (value == '능곡' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90002_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ng_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bSs.png"></figure>';

    }
    if (value == '능곡' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90002_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ng_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bTn.png"></figure>';

    }
    if (value == '능곡' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90002_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ng_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bTp.png"></figure>';
    }

    /* 동부 */
    if (value == '동부' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/88001_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/db_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/db_bBac.png"></figure>';
    }
    if (value == '동부' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/88001_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/db_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/db_bBod.png"></figure>';

    }
    if (value == '동부' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/88001_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/db_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/db_bCod.png"></figure>';

    }
    if (value == '동부' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/88001_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/db_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/db_bSs.png"></figure>';

    }
    if (value == '동부' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/88001_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/db_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/db_bTn.png"></figure>';

    }
    if (value == '동부' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/88001_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/db_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/db_bTp.png"></figure>';
    }

    /* 둔내 */
    if (value == '둔내' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50002_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/dn_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bBac.png"></figure>';
    }
    if (value == '둔내' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50002_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/dn_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bBod.png"></figure>';

    }
    if (value == '둔내' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50002_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/dn_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bCod.png"></figure>';

    }
    if (value == '둔내' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50002_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/dn_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bSs.png"></figure>';

    }
    if (value == '둔내' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50002_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/dn_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bTn.png"></figure>';

    }
    if (value == '둔내' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50002_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/dn_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bTp.png"></figure>';
    }

    /* 시화 */
    if (value == '시화' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90001_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/sh_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bBac.png"></figure>';
    }
    if (value == '시화' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90001_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/shsh_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bBod.png"></figure>';

    }
    if (value == '시화' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90001_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/sh_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bCod.png"></figure>';

    }
    if (value == '시화' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90001_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/sh_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bSs.png"></figure>';

    }
    if (value == '시화' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90001_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/sh_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bTn.png"></figure>';

    }
    if (value == '시화' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/90001_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/sh_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bTp.png"></figure>';
    }

    /* 약목 */
    if (value == '약목' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87201_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ym_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bBac.png"></figure>';
    }
    if (value == '약목' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87201_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ym_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bBod.png"></figure>';

    }
    if (value == '약목' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87201_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ym_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bCod.png"></figure>';

    }
    if (value == '약목' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87201_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ym_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bSs.png"></figure>';

    }
    if (value == '약목' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87201_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ym_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bTn.png"></figure>';

    }
    if (value == '약목' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87201_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ym_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bTp.png"></figure>';
    }

    /* 연서 */
    if (value == '연서' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/47000_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ys_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bBac.png"></figure>';
    }
    if (value == '연서' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/47000_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ys_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bBod.png"></figure>';

    }
    if (value == '연서' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/47000_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ys_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bCod.png"></figure>';

    }
    if (value == '연서' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/47000_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ys_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bSs.png"></figure>';

    }
    if (value == '연서' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/47000_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ys_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bTn.png"></figure>';

    }
    if (value == '연서' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/47000_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/ys_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bTp.png"></figure>';
    }

    /* 왜관 */
    if (value == '왜관' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87202_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/wg_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bBac.png"></figure>';
    }
    if (value == '왜관' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87202_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/wg_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bBod.png"></figure>';

    }
    if (value == '왜관' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87202_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/wg_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bCod.png"></figure>';

    }
    if (value == '왜관' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87202_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/wg_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bSs.png"></figure>';

    }
    if (value == '왜관' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87202_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/wg_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bTn.png"></figure>';

    }
    if (value == '왜관' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87202_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/wg_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bTp.png"></figure>';
    }

    /* 우항 */
    if (value == '우항' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50003_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/uh_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bBac.png"></figure>';
    }
    if (value == '우항' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50003_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/uh_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bBod.png"></figure>';

    }
    if (value == '우항' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50003_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/uh_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bCod.png"></figure>';

    }
    if (value == '우항' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50003_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/uh_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bSs.png"></figure>';

    }
    if (value == '우항' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50003_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/uh_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bTn.png"></figure>';

    }
    if (value == '우항' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50003_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/uh_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bTp.png"></figure>';
    }

    /* 장항 */
    if (value == '장항' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/60001_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jh_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bBac.png"></figure>';
    }
    if (value == '장항' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/60001_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jh_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bBod.png"></figure>';

    }
    if (value == '장항' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/60001_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jh_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bCod.png"></figure>';

    }
    if (value == '장항' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/60001_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jh_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bSs.png"></figure>';

    }
    if (value == '장항' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/60001_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jh_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bTn.png"></figure>';

    }
    if (value == '장항' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/60001_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jh_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bTp.png"></figure>';
    }

    /* 진보 */
    if (value == '진보' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87105_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jb_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bBac.png"></figure>';
    }
    if (value == '진보' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87105_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jb_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bBod.png"></figure>';

    }
    if (value == '진보' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87105_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jb_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bCod.png"></figure>';

    }
    if (value == '진보' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87105_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jb_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bSs.png"></figure>';

    }
    if (value == '진보' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87105_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jb_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bTn.png"></figure>';

    }
    if (value == '진보' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/87105_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/jb_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bTp.png"></figure>';
    }

    /* 횡성 */
    if (value == '횡성' && chem == 'Bac') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50001_Bac.png"><br>' +
            '<img src="../static/graph/decomposeGraph/hs_uBac.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bBac.png"></figure>';
    }
    if (value == '횡성' && chem == 'Bod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50001_Bod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/hs_uBod.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bBod.png"></figure>';

    }
    if (value == '횡성' && chem == 'Cod') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50001_Cod.png"><br>' +
            '<img src="../static/graph/decomposeGraph/hs_uCod.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bCod.png"></figure>';

    }
    if (value == '횡성' && chem == 'Ss') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50001_Ss.png"><br>' +
            '<img src="../static/graph/decomposeGraph/hs_uSs.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bSs.png"></figure>';

    }
    if (value == '횡성' && chem == 'Tn') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50001_Tn.png"><br>' +
            '<img src="../static/graph/decomposeGraph/hs_uTn.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bTn.png"></figure>';

    }
    if (value == '횡성' && chem == 'Tp') {
        document.getElementById('result').innerHTML = '<figure>' +
            '<img src="../static/graph/compareGraph/50001_Tp.png"><br>' +
            '<img src="../static/graph/decomposeGraph/hs_uTp.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bTp.png"></figure>';
    }
}