function takePic_past() {
    var value = document.getElementById('pastArea_btn').options[document.getElementById("pastArea_btn").selectedIndex].value;
    var chem = document.getElementById('pastChem_btn').options[document.getElementById("pastChem_btn").selectedIndex].value;

    if (value == 'X'){
        document.getElementById('result').innerHTML = '';
    }

    /* 능곡 */
    if (value == '능곡' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ng_uBac.png">' +
            '<img src="../static/graph/compareGraph/ng_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bBac.png"></figure>';
    }
    if (value == '능곡' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ng_uBod.png">' +
            '<img src="../static/graph/compareGraph/ng_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bBod.png"></figure>';

    }
    if (value == '능곡' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ng_uCod.png">' +
            '<img src="../static/graph/compareGraph/ng_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bCod.png"></figure>';

    }
    if (value == '능곡' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ng_uSs.png">' +
            '<img src="../static/graph/compareGraph/ng_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bSs.png"></figure>';

    }
    if (value == '능곡' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ng_uTn.png">' +
            '<img src="../static/graph/compareGraph/ng_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bTn.png"></figure>';

    }
    if (value == '능곡' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ng_uTp.png">' +
            '<img src="../static/graph/compareGraph/ng_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/ng_bTp.png"></figure>';
    }

    /* 동부 */
    if (value == '동부' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/db_uBac.png">' +
            '<img src="../static/graph/compareGraph/db_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/db_bBac.png"></figure>';
    }
    if (value == '동부' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/db_uBod.png">' +
            '<img src="../static/graph/compareGraph/db_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/db_bBod.png"></figure>';

    }
    if (value == '동부' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/db_uCod.png">' +
            '<img src="../static/graph/compareGraph/db_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/db_bCod.png"></figure>';

    }
    if (value == '동부' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/db_uSs.png">' +
            '<img src="../static/graph/compareGraph/db_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/db_bSs.png"></figure>';

    }
    if (value == '동부' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/db_uTn.png">' +
            '<img src="../static/graph/compareGraph/db_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/db_bTn.png"></figure>';

    }
    if (value == '동부' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/db_uTp.png">' +
            '<img src="../static/graph/compareGraph/db_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/db_bTp.png"></figure>';
    }

    /* 둔내 */
    if (value == '둔내' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/dn_uBac.png">' +
            '<img src="../static/graph/compareGraph/dn_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bBac.png"></figure>';
    }
    if (value == '둔내' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/dn_uBod.png">' +
            '<img src="../static/graph/compareGraph/dn_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bBod.png"></figure>';

    }
    if (value == '둔내' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/dn_uCod.png">' +
            '<img src="../static/graph/compareGraph/dn_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bCod.png"></figure>';

    }
    if (value == '둔내' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/dn_uSs.png">' +
            '<img src="../static/graph/compareGraph/dn_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bSs.png"></figure>';

    }
    if (value == '둔내' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/dn_uTn.png">' +
            '<img src="../static/graph/compareGraph/dn_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bTn.png"></figure>';

    }
    if (value == '둔내' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/dn_uTp.png">' +
            '<img src="../static/graph/compareGraph/dn_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/dn_bTp.png"></figure>';
    }

    /* 시화 */
    if (value == '시화' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/sh_uBac.png">' +
            '<img src="../static/graph/compareGraph/sh_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bBac.png"></figure>';
    }
    if (value == '시화' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/shsh_uBod.png">' +
            '<img src="../static/graph/compareGraph/sh_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bBod.png"></figure>';

    }
    if (value == '시화' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/sh_uCod.png">' +
            '<img src="../static/graph/compareGraph/sh_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bCod.png"></figure>';

    }
    if (value == '시화' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/sh_uSs.png">' +
            '<img src="../static/graph/compareGraph/sh_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bSs.png"></figure>';

    }
    if (value == '시화' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/sh_uTn.png">' +
            '<img src="../static/graph/compareGraph/sh_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bTn.png"></figure>';

    }
    if (value == '시화' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/sh_uTp.png">' +
            '<img src="../static/graph/compareGraph/sh_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/sh_bTp.png"></figure>';
    }

    /* 약목 */
    if (value == '약목' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ym_uBac.png">' +
            '<img src="../static/graph/compareGraph/ym_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bBac.png"></figure>';
    }
    if (value == '약목' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ym_uBod.png">' +
            '<img src="../static/graph/compareGraph/ym_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bBod.png"></figure>';

    }
    if (value == '약목' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ym_uCod.png">' +
            '<img src="../static/graph/compareGraph/ym_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bCod.png"></figure>';

    }
    if (value == '약목' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ym_uSs.png">' +
            '<img src="../static/graph/compareGraph/ym_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bSs.png"></figure>';

    }
    if (value == '약목' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ym_uTn.png">' +
            '<img src="../static/graph/compareGraph/ym_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bTn.png"></figure>';

    }
    if (value == '약목' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ym_uTp.png">' +
            '<img src="../static/graph/compareGraph/ym_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/ym_bTp.png"></figure>';
    }

    /* 연서 */
    if (value == '연서' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ys_uBac.png">' +
            '<img src="../static/graph/compareGraph/ys_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bBac.png"></figure>';
    }
    if (value == '연서' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ys_uBod.png">' +
            '<img src="../static/graph/compareGraph/ys_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bBod.png"></figure>';

    }
    if (value == '연서' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ys_uCod.png">' +
            '<img src="../static/graph/compareGraph/ys_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bCod.png"></figure>';

    }
    if (value == '연서' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ys_uSs.png">' +
            '<img src="../static/graph/compareGraph/ys_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bSs.png"></figure>';

    }
    if (value == '연서' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ys_uTn.png">' +
            '<img src="../static/graph/compareGraph/ys_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bTn.png"></figure>';

    }
    if (value == '연서' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/ys_uTp.png">' +
            '<img src="../static/graph/compareGraph/ys_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/ys_bTp.png"></figure>';
    }

    /* 왜관 */
    if (value == '왜관' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/wg_uBac.png">' +
            '<img src="../static/graph/compareGraph/wg_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bBac.png"></figure>';
    }
    if (value == '왜관' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/wg_uBod.png">' +
            '<img src="../static/graph/compareGraph/wg_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bBod.png"></figure>';

    }
    if (value == '왜관' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/wg_uCod.png">' +
            '<img src="../static/graph/compareGraph/wg_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bCod.png"></figure>';

    }
    if (value == '왜관' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/wg_uSs.png">' +
            '<img src="../static/graph/compareGraph/wg_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bSs.png"></figure>';

    }
    if (value == '왜관' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/wg_uTn.png">' +
            '<img src="../static/graph/compareGraph/wg_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bTn.png"></figure>';

    }
    if (value == '왜관' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/wg_uTp.png">' +
            '<img src="../static/graph/compareGraph/wg_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/wg_bTp.png"></figure>';
    }

    /* 우항 */
    if (value == '우항' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/uh_uBac.png">' +
            '<img src="../static/graph/compareGraph/uh_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bBac.png"></figure>';
    }
    if (value == '우항' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/uh_uBod.png">' +
            '<img src="../static/graph/compareGraph/uh_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bBod.png"></figure>';

    }
    if (value == '우항' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/uh_uCod.png">' +
            '<img src="../static/graph/compareGraph/uh_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bCod.png"></figure>';

    }
    if (value == '우항' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/uh_uSs.png">' +
            '<img src="../static/graph/compareGraph/uh_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bSs.png"></figure>';

    }
    if (value == '우항' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/uh_uTn.png">' +
            '<img src="../static/graph/compareGraph/uh_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bTn.png"></figure>';

    }
    if (value == '우항' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/uh_uTp.png">' +
            '<img src="../static/graph/compareGraph/uh_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/uh_bTp.png"></figure>';
    }

    /* 장항 */
    if (value == '장항' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jh_uBac.png">' +
            '<img src="../static/graph/compareGraph/jh_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bBac.png"></figure>';
    }
    if (value == '장항' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jh_uBod.png">' +
            '<img src="../static/graph/compareGraph/jh_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bBod.png"></figure>';

    }
    if (value == '장항' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jh_uCod.png">' +
            '<img src="../static/graph/compareGraph/jh_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bCod.png"></figure>';

    }
    if (value == '장항' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jh_uSs.png">' +
            '<img src="../static/graph/compareGraph/jh_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bSs.png"></figure>';

    }
    if (value == '장항' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jh_uTn.png">' +
            '<img src="../static/graph/compareGraph/jh_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bTn.png"></figure>';

    }
    if (value == '장항' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jh_uTp.png">' +
            '<img src="../static/graph/compareGraph/jh_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/jh_bTp.png"></figure>';
    }

    /* 진보 */
    if (value == '진보' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jb_uBac.png">' +
            '<img src="../static/graph/compareGraph/jb_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bBac.png"></figure>';
    }
    if (value == '진보' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jb_uBod.png">' +
            '<img src="../static/graph/compareGraph/jb_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bBod.png"></figure>';

    }
    if (value == '진보' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jb_uCod.png">' +
            '<img src="../static/graph/compareGraph/jb_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bCod.png"></figure>';

    }
    if (value == '진보' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jb_uSs.png">' +
            '<img src="../static/graph/compareGraph/jb_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bSs.png"></figure>';

    }
    if (value == '진보' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jb_uTn.png">' +
            '<img src="../static/graph/compareGraph/jb_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bTn.png"></figure>';

    }
    if (value == '진보' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/jb_uTp.png">' +
            '<img src="../static/graph/compareGraph/jb_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/jb_bTp.png"></figure>';
    }

    /* 횡성 */
    if (value == '횡성' && chem == 'Bac') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/hs_uBac.png">' +
            '<img src="../static/graph/compareGraph/hs_Bac.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bBac.png"></figure>';
    }
    if (value == '횡성' && chem == 'Bod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/hs_uBod.png">' +
            '<img src="../static/graph/compareGraph/hs_Bod.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bBod.png"></figure>';

    }
    if (value == '횡성' && chem == 'Cod') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/hs_uCod.png">' +
            '<img src="../static/graph/compareGraph/hs_Cod.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bCod.png"></figure>';

    }
    if (value == '횡성' && chem == 'Ss') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/hs_uSs.png">' +
            '<img src="../static/graph/compareGraph/hs_Ss.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bSs.png"></figure>';

    }
    if (value == '횡성' && chem == 'Tn') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/hs_uTn.png">' +
            '<img src="../static/graph/compareGraph/hs_Tn.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bTn.png"></figure>';

    }
    if (value == '횡성' && chem == 'Tp') {
        document.getElementById('result').innerHTML =
            '<figure><img src="../static/graph/decomposeGraph/hs_uTp.png">' +
            '<img src="../static/graph/compareGraph/hs_Tp.png">' +
            '<img src="../static/graph/decomposeGraph/hs_bTp.png"></figure>';
    }
}