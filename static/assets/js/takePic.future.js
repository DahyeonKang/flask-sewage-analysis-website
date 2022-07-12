function takePic() {
    var value = document.getElementById('future_btn').options[document.getElementById("future_btn").selectedIndex].value;

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

}