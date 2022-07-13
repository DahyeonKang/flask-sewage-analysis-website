function takePic_future() {
    var value = document.getElementById('future_btn').options[document.getElementById("future_btn").selectedIndex].value;

    if (value == 'X'){
        document.getElementById('result').innerHTML = '';
    }
    if (value == '능곡') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/능곡.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowspan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>3.749115</td>' +
            '<td>2.654</td>' +
            '<td>4.844</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>3.779450</td>' +
            '<td>2.493</td>' +
            '<td>5.066</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>3.798185</td>' +
            '<td>2.445</td>' +
            '<td>5.151</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>3.809757</td>' +
            '<td>2.432</td>' +
            '<td>5.187</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>3.816904</td>' +
            '<td>2.430</td>' +
            '<td>5.203</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>3.821318</td>' +
            '<td>2.431</td>' +
            '<td>5.211</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '동부') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/동부.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>7.932547</td>' +
            '<td>7.722</td>' +
            '<td>8.143</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>7.881944</td>' +
            '<td>7.657</td>' +
            '<td>8.106</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>7.929402</td>' +
            '<td>7.668</td>' +
            '<td>8.191</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>7.921802</td>' +
            '<td>7.645</td>' +
            '<td>8.199</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>7.942725</td>' +
            '<td>7.648</td>' +
            '<td>8.237</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>7.946741</td>' +
            '<td>7.641</td>' +
            '<td>8.253</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '둔내') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/둔내.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>2.307306</td>' +
            '<td>1.787</td>' +
            '<td>2.827</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>1.849499</td>' +
            '<td>1.268</td>' +
            '<td>2.431</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>1.619863</td>' +
            '<td>1.024</td>' +
            '<td>2.216</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>1.504678</td>' +
            '<td>0.905</td>' +
            '<td>2.104</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>1.446901</td>' +
            '<td>0.846</td>' +
            '<td>2.047</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>1.417920</td>' +
            '<td>0.817</td>' +
            '<td>2.019</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '시화') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/시화.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>6.154117</td>' +
            '<td>4.007</td>' +
            '<td>8.301</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>6.227789</td>' +
            '<td>3.501</td>' +
            '<td>8.954</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>6.285458</td>' +
            '<td>3.258</td>' +
            '<td>9.313</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>6.330600</td>' +
            '<td>3.133</td>' +
            '<td>9.528</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>6.365935</td>' +
            '<td>3.068</td>' +
            '<td>9.664</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>6.393595</td>' +
            '<td>3.036</td>' +
            '<td>9.751</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '약목') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/약목.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>1.538719</td>' +
            '<td>1.135</td>' +
            '<td>1.942</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>1.465271</td>' +
            '<td>0.948</td>' +
            '<td>1.983</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>1.406173</td>' +
            '<td>0.826</td>' +
            '<td>1.986</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>1.358620</td>' +
            '<td>0.742</td>' +
            '<td>1.975</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>1.320358</td>' +
            '<td>0.681</td>' +
            '<td>1.960</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>1.289571</td>' +
            '<td>0.636</td>' +
            '<td>1.943</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '연서') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/연서.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>1.34</td>' +
            '<td>0.784</td>' +
            '<td>1.896</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>1.34</td>' +
            '<td>0.784</td>' +
            '<td>1.896</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>0.85</td>' +
            '<td>0.294</td>' +
            '<td>1.406</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>0.65</td>' +
            '<td>0.094</td>' +
            '<td>1.206</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>0.84</td>' +
            '<td>0.284</td>' +
            '<td>1.396</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>0.85</td>' +
            '<td>0.294</td>' +
            '<td>1.406</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '왜관') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/왜관.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>0.9788850</td>' +
            '<td>0.575</td>' +
            '<td>1.382</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>0.6558373</td>' +
            '<td>0.054</td>' +
            '<td>1.257</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>0.6347858</td>' +
            '<td>-0.151</td>' +
            '<td>1.420</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>0.8127886</td>' +
            '<td>-0.057</td>' +
            '<td>1.682</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>1.0576865</td>' +
            '<td>0.173</td>' +
            '<td>1.942</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>1.2630380</td>' +
            '<td>0.378</td>' +
            '<td>2.148</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '우항') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/우항.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>3.554851</td>' +
            '<td>3.184</td>' +
            '<td>3.926</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>3.348357</td>' +
            '<td>2.885</td>' +
            '<td>3.812</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>3.193387</td>' +
            '<td>2.685</td>' +
            '<td>3.702</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>3.077086</td>' +
            '<td>2.545</td>' +
            '<td>3.609</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>2.989803</td>' +
            '<td>2.445</td>' +
            '<td>3.535</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>2.924300</td>' +
            '<td>2.372</td>' +
            '<td>3.476</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '장항') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/장항.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>2.19</td>' +
            '<td>1.806</td>' +
            '<td>3.294</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>2.18</td>' +
            '<td>1.076</td>' +
            '<td>3.284</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>1.81</td>' +
            '<td>0.706</td>' +
            '<td>2.914</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>2.20</td>' +
            '<td>1.096</td>' +
            '<td>3.304</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>2.90</td>' +
            '<td>1.796</td>' +
            '<td>4.004</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>3.45</td>' +
            '<td>2.346</td>' +
            '<td>4.554</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '진보') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/진보.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>0.3969948</td>' +
            '<td>-0.060</td>' +
            '<td>0.854</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>0.4069948</td>' +
            '<td>-0.434</td>' +
            '<td>1.248</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>0.4669948</td>' +
            '<td>-0.630</td>' +
            '<td>1.564</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>0.3569948</td>' +
            '<td>-0.948</td>' +
            '<td>1.662</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>0.6769948</td>' +
            '<td>-0.806</td>' +
            '<td>2.160</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>1.0069948</td>' +
            '<td>-0.635</td>' +
            '<td>2.649</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
    if (value == '횡성') {
        document.getElementById('result').innerHTML = '<div style="margin-left:50px; float:left;">' +
            '<figure><img src="../static/graph/arimaGraph/횡성.png"></figure>' +
            '</div>' +
            '<div style=" float:left;">' +
            '<table class="table-wrapper" width="100">' +
            '<thead>' +
            '<tr>' +
            '<th>년도</th>' +
            '<th>월</th>' +
            '<th>예측값</th>' +
            '<th>Lo 80</th>' +
            '<th>Hi 80</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td rowSpan="6">2021</td>' +
            '<td>7월</td>' +
            '<td>3.61</td>' +
            '<td>2.862</td>' +
            '<td>4.358</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8월</td>' +
            '<td>3.27</td>' +
            '<td>2.212</td>' +
            '<td>4.328</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9월</td>' +
            '<td>2.93</td>' +
            '<td>1.634</td>' +
            '<td>4.226</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10월</td>' +
            '<td>2.88</td>' +
            '<td>1.384</td>' +
            '<td>4.376</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11월</td>' +
            '<td>3.19</td>' +
            '<td>1.517</td>' +
            '<td>4.863</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12월</td>' +
            '<td>2.74</td>' +
            '<td>0.907</td>' +
            '<td>4.573</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div><div style="clear:both;"></div>';
    }
}