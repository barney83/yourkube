var v = 0;
var w = 0;
var x = 0;
var y = 0;
var z = 'k';
var k = {};
var k_ = '_';
k[k_] = {};
k[k_]['_'] = {};

var k0 = _ => document.querySelector(`#${_}`);
var k1 = _ => document.querySelectorAll(`.${_}`);
var k2 = _ => document.querySelectorAll(_);
var k3 = _ => document.createElement(_);
var k5=(_,_0) => k[k_][_]&&k[k_][_][_0];
var k4=(_,_0,_1,_2) => k[k_][_]&&k[k_][_][_1]&&
k[k_][_][_1][_2]||Number(_0);


var k10 = _ => {
let l = k3('p');
l.textContent = _; 
return l.innerHTML;}

var k12 = _ => {
let l = !_.startsWith('_')?'-':_.slice(1,21);
let l0 = !_.startsWith('_')?_:_.slice(22);
let l1 = Number(l0.slice(1));
let l2 = _.length == 1?0:
(_.length == 2?l1 + 1:
(_.startsWith('k')?l1 + 11:
(_.startsWith('t')?l1 + 111:0)));
return [l,l0,l2];};

var k12 = () => {
if (k0_[12].length){
for (let p of k0_[12]){
URL.revokeObjectURL(p[0]);}}
k0_[12] = []; 
k0_[4] = {};
if (k[k_]['5']){
for (let q in k[k_]['5']){
let l = k[k_]['5'][q][1];
let l1 = l.slice(13);
if (l1){
if (l.slice(0,12) == k0_[2]){
for (let r of k0_[15]){
if (`${l1}.woff` == r[0]){
let l2 = URL.createObjectURL(r[1]);
k0_[12].push([l2,r[1]]);
k0_[4][p] = [0,l2];}}}
else {k0_[4][p] = [1,l];}}}}};

var k13 = (_,_0) => {
let l = k12(_0);
let l0 = k[l[0]]['E'] && 
k[l[0]]['E'][l[2]] &&
k[l[0]]['E'][l[2]][_];
let l1 = k[k_]['G'].indexOf(_0);
let l2 = k[k_]['H'].indexOf(_0);
let l3 = l1 == k[k_]['G'].length-1?0:l1+1;
let l4 = l1 == 0?k[k_]['G'].length-1:l1-1;
let l5 = l2 == k[k_]['H'].length-1?0:l2+1;
let l6 = l2 == 0?k[k_]['H'].length-1:l2-1;
let l7 = k14(l0 || 
(_ == '13'?k[k_]['G'][l3]:
(_ == '12'?k[k_]['G'][l4]:
(_ == '17'?k[k_]['H'][l5]:
k[k_]['H'][l6]))));};

var k14 = _ => {
let l2 = k[k_]['G']||'';
let l3 = k[k_]['H']||'';
let l4 = l2.concat(l3);
let l5 = k17(z);
x = l2.includes(_)?l2.indexOf(_):x;
y = l3.includes(_)?l3.indexOf(_):y;
z = l4.includes(_)?_:z;
k1('cc00').forEach(_0 => 
_0.value = l5[1]);
k1('ksi')[0].value = x||'';
k1('ksi')[2].value = y||'';
window.frames[0].postMessage(
[9,x,y],'*');};

var k15 = () => {
k0_[10] = {};
if (k[k_]['C']){
for (let p in k[k_]['C']){
let _0 = k[k_]['C'][p][5];
let _1 = _0.slice(13); if (b){
if (_0.slice(0,12) == k0_[2]){
for (let q of k0_[18]){
if (`${_1}.vtt` == q[0]){
k0_[10][p] = [0,q[1]];}}}
else {k0_[10][p] = [1,_0];}}}}};

var k16 = () => { 
k0('iframe').style.height = 
`${window.innerHeight - 
k0('table').offsetHeight - 20}px`;
k1('ksi')[1].value = !k5('0',5)?'':screen.width;
k1('ksi')[3].value = !k5('0',5)?'':screen.height;
k1('ksi')[0].value = !k5('0',5)?'':window.innerWidth;
k1('ksi')[2].value = !k5('0',5)?'':window.innerHeight;}

var k17 = _ => {
let l = !_.startsWith('_')?'-':_.slice(1,21);
let l0 = !_.startsWith('_')?_:_.slice(22);
let l1 = Number(l0.slice(1));
let l2 = _.length == 1?0:
(_.length == 2?l1 + 1:
(_.startsWith('k')?l1 + 11:
(_.startsWith('t')?l1 + 111:0)));
return [l,l0,l2];};

var k18 = _ => {
k1('delta')[8].innerHTML = _ == 2?'&#x0128; left':(_ == 1?'&#10066; teleskop':'0 request');
k1('delta')[9].textContent = _ == 2?'':(_ == 1?'BY':'1 query');
k1('delta')[10].textContent = _ == 2?'':(_ == 1?'BY NC':'2 bubble');
k1('delta')[11].textContent = _ == 2?'':(_ == 1?'BY ND':'3 stroke');
k1('delta')[12].textContent = _ == 2?'':(_ == 1?'BY SA ':'4 text');
k1('delta')[13].textContent = _ == 2?'':(_ == 1?'BY NC ND':'5 font');
k1('delta')[14].textContent = _ == 2?'':(_ == 1?'BY NC SA':'6 style');
k1('delta')[15].innerHTML = _ == 2?'down &#x012B;':(_ == 1?'taikonaut &#10064;':'7 color');
k1('delta')[0].innerHTML = _ == 2?'&#x0129; right':(_ == 1?'&#10063; desktop':'8 vektor');
k1('delta')[1].textContent = _ == 2?'':(_ == 1?'CC0':'9 visual');
k1('delta')[2].textContent = _ == 2?'':(_ == 1?'PDM':'A audio');
k1('delta')[3].textContent = _ == 2?'':(_ == 1?'MIT':'B sound');
k1('delta')[4].textContent = _ == 2?'':(_ == 1?'ASL':'C comment');
k1('delta')[5].textContent = _ == 2?'':(_ == 1?'GPL GNU':'D metadata');
k1('delta')[6].textContent = _ == 2?'':(_ == 1?'OFL SIL':'E hierarchy');
k1('delta')[7].innerHTML = _ == 2?'up &#x012A;':(_ == 1?'kontakt &#10065;':'F setting');};

var k19 = _ => {
let l2 = {0:k0_[0],1:k0_[1],2:k[k_],3:_('0')};
let l3 = JSON.parse(_.data); 
k[k_]['G'] = [];
k[k_]['G'].push(['panel'].concat(l3[0]));
k[k_]['G'].push(['scene'].concat(l3[1]));
if (k0_[31][0] != JSON.stringify(k[k_]) ||
k0_[31][1] != JSON.stringify(k0_[1])){
if (k0('data2').value){ l2[0][5] = k0('data2').value;}
if (k0_[11].length){ l2[4] = [];
for (let p in k0_[11]){
if (!k0_[13].includes(k0_[11][p][name])){
k0_[13].push(k0_[11][p][name]);
l2[4].push(k0_[11][p]);}}}
fetch('https://api.yourkube.com/1',{method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify(l2)})
.then(_0 => _0.json())
.then(_0 => {
if (_0.length){
k0('data3').value = _0.shift();}
k0('data2').value = k0_[0][2];
k0('iframe1').style.display = 'none';})
.catch(_0 => k0('iframe1').style.display = 'none');
k0('iframe1').style.display = 'block';
k0_[31][0] = JSON.stringify(k[k_]);
k0_[31][1] = JSON.stringify(k0_[1]);}};

var k20 = _ => {
let l = k0('data3');
let l0 = k0('iframe1');
let l1 = [_.id].concat(k0_[0].slice(1,3));
let l2 = {0:l1,1:k0_[1],2:k[k_]};
let l3 = `${l1[0][1]} data.zip`;
k[k_]['G'] = [];
k[k_]['G'].push(['panel'].concat(_.data[0]));
k[k_]['G'].push(['scene'].concat(_.data[1]));
k[k_]['G'].push(['preview'].concat(_.data[1]));
if (l.value){ l1[0][3] = l.value;}
fetch(`https://api.yourkube.com/2`,{method: 'POST',
headers: {'Content-Type':'application/json'},
body: JSON.stringify(l2)})
.then(_3 => _3.json())
.then(_3 => {
window.location.href = 
`https://yourkube.com/_external/${l3}`;
l0.style.display = 'none';})
.catch(_3 => l0.style.display = 'none');};

var k21 = _ => {
let l = k0('action0');
let l0 = k1('delta');
let l1 = k1('gamma');
let l2 = k0(`grid${_}`);
let l3 = k0(`table${_}`);
let l4 = Object.keys(k1_)[_];
let l5 = k1_[l4][4] == 0?'':
`${l4} ${k1_[l4][4] - 1}`;
l0.forEach(_0 => _0.style.backgroundColor = '');
l1.forEach(_0 => _0.style.display = 'none');
l2.style.backgroundColor = 'White';
l3.style.display = 'block';
l.textContent = l5;
if (k0_[3][l4]){
k0_[3][l4].render();}};

var k22 = (_,_0) => {
    if (_ == '0'){
    k0_[3][0].selectCell(k1_[_0][1],k1_[_0][0],
    k1_[_0][3]-1,k1_[_0][2]-1,false);}
    else if (_ == '2'){ k0_[7][1] = 
    k0_[7][1] == 15?0:k0_[7][1] + 1;}
    else if (_ == '4'){k0_[7][1] = 
    k0_[7][1] == 0?15:k0_[7][1] - 1;}
    else if (_ == '1'){
    if (k0_[3][_0].isRedoAvailable()){
    k1_[_0][4] = k1_[_0][4] - 1;
    k0_[3][_0].redo();}}
    else if (_ == '3'){
    if (k0_[3][_0].isUndoAvailable()){
    k1_[_0][4] = k1_[_0][4] + 1;
    k0_[3][_0].undo();}}
    if (_ == '2'){
    k0_[7][1] = t[k0_[7][1]];
    k21(k0_[7][1]);}
    if (_ == '4'){
    k0_[7][1] = t0[k0_[7][1]];   
    k21(k0_[7][1]);}
    if (_ == '1' || _ == '3'){
    let l1 = k1_[_0][4] == 0?'':
    `${_0} ${k1_[_0][4] - 1}`;
    k0('action0').textContent = l1;}};



/* window.addEventListener('popstate', () => handler.close()); */
window.addEventListener('resize', () => k16());
window.addEventListener('message', _ => {   

var l = _.data.slice(1);
var l0 = l[0] == '_'?'':l[0];
var l1 = k[k_]['F'] && k[k_]['F'][9];
var l2 = l1 && k[k_]['F'][9][0] || 'k';
var l3 = z == 'k'?l2:'k';

if (_.data[0] == '14'){ k14(_.data[1]);}
if (_.data[0] == '1'){
if (l[0]){ k0('action0').textContent = l0;}
if (l[1]){ k1('ksi')[0].value = l[1];}
if (l[2]){ k1('ksi')[1].value = l[2];}
if (l[3]){ k1('ksi')[2].value = l[3];}
if (l[4]){ k1('ksi')[3].value = l[4];}}
else if (_.data[0] == '2'){
k[k_]['G'] = l[0];
k[k_]['H'] = l[1];
k1('ksi')[1].value = l[0].length - 1;
k1('ksi')[3].value = l[1].length - 1;
window.frames[0].postMessage([5].concat(l),'*');
k14(l3);}
else if (_.data[0] == '3'){k20;}
else if (_.data[0] == '4'){k19;}});


document.addEventListener('DOMContentLoaded', () => {
document.body.ondragover = _ => _.preventDefault();
document.body.ondrop = _ => _.preventDefault();
k1('gamma').forEach(_ => _.style.display = 'none');
k0('table0').style.display = 'block';


/// extend later !!! ///
if (window.location.hash){
k0('present').style.display = 'none';
k0('frame').style.display = 'none';
k2('#meta span').forEach(_3 => 
_3.style.display = 'none');}


fetch('https://freegeoip.net/json/')
.then(_ => _.json())
.then(_ => {
let l = new Date();
let l0 = _.country_code;
let l1 = _3 => `${_3 < 10?'0':''}${_3}`;
let l3 = _5 => `${_5 < 10?'00':(_5 < 100?'0':'')}${_5}`;
let l4 = l3(Math.floor(Math.random() * 1000));
let l5 = l3(l.getUTCMilliseconds());
let l6 = [l.getUTCFullYear()
.toString().slice(2),
l1(l.getUTCMonth()+1),
l1(l.getUTCDate()),
l1(l.getUTCHours()),
l1(l.getUTCMinutes()),
l1(l.getUTCSeconds())];
let l7 = (_0,_1) => `${l5}${l4}`.slice(_0,_1);
let l8 = `${l7(0,2)}-${l7(2,4)}-${l7(4,6)}`;
k0_[0].push(Math.random().toString().slice(2));
k0_[0].push(`${l0}${l6.join('')}${l7(0)}`);
k0_[0].push(`${l0}-${l6.join('-')}-${l8}`);});

k0('iframe').onload = () => {
if (localStorage.getItem('reaction12')){
window.frames[0].postMessage([16,'on'],'*');}
if (localStorage.getItem('reaction14')){
window.frames[0].postMessage([15,'on'],'*');}
k2('.epsilon,.pi').forEach(_ => {
let l0 = localStorage.getItem(_.id); 
let l1 = _.id.slice(3);
if (l0){k[k_]['_'][l1] = l0;}
if (k[k_] && k[k_]['_'][7]){
window.frames[0].postMessage(
[3].concat(k[k_]),'*');}
_.oninput = _0 => {
k[k_]['_'][l1] = _0.target.value;
if (_0.target.id == 'web9'){
let l2 = _0.target.value;
let l3 = Math.round((100 - l2) * 2.55);
document.body.style.backgroundColor = 
!l2?'':`rgb(${l3},${l3},${l3})`;}
if (_0.target.id == 'web6'){
window.frames[0].postMessage(
[3].concat(k[k_]),'*');}
window.frames[0].postMessage(
[13].concat(k[k_]['_']),'*');
if (!_0.target.value){
localStorage.removeItem(_0.target.id);}
else {localStorage.setItem(_0.target.id,
_0.target.value);}};}); 
window.frames[0].postMessage(
[13].concat(k[k_]['_']),'*');};

let = (irgendwas = () => {
let l = localStorage.getItem('web9');
let l0 = Math.round((100 - l) * 2.55);
k1('nu')[1].style.backgroundColor = 'White';
document.body.style.backgroundColor = 
!l?'':`rgb(${l0},${l0},${l0})`;
k1('pi').forEach(_ => _.value = 
localStorage.getItem(_.id));
k1('epsilon').forEach(_ => _.value = 
localStorage.getItem(_.id));})();

if (window.location.pathname.replace('/','')){
let l = window.location.pathname.replace('/','');
let l0 = k0('data2').value.replace('-','')
k0('data2').value = decodeURIComponent(l);}

k1('delta').forEach(_ => {
_.onpointerdown = _0 => {
let l = _0.target.id;
let l0 = Number(l.replace('grid',''));
let l1 = 'creativecommons.org';
let l2 = {1:`${l1}/licenses/by/4.0`,
2:`${l1}/licenses/by-nc/4.0`,
3:`${l1}/licenses/by-nd/4.0`,
4:`${l1}/licenses/by-sa/4.0`,
5:`${l1}/licenses/by-nc-nd/4.0`,
6:`${l1}/licenses/by-nc-sa/4.0`,
9:`${l1}/publicdomain/zero/1.0`,
10:`${l1}/publicdomain/mark/1.0`,
11:'opensource.org/licenses/MIT',
12:'apache.org/licenses/LICENSE-2.0',
13:'gnu.org/licenses/gpl-3.0.html',
14:'scripts.sil.org/OFL_web'};
let l3 = 'kontakt@yourkube.com';
let l4 = 'https://api.yourkube.com';
let  l5 = new Date();
l5.setUTCHours(0);
l5.setUTCMinutes(0);
l5.setUTCSeconds(0);
l5.setUTCMilliseconds(0);
let l6 = l5.getTime();
let l7 = Number(k0('reaction6').value);
let l8 = l0 == 15?1:(l0 == 8?-1:0);
let l9 = (l7 + l8) * 1000 * 60 * 60 * 24;
let l10 = new Date(l6 - l9);
let l11 = l10.getUTCHours(0);
if (k0_[7][0] == '0'){
k0_[7][1] = l0; k21(l0);}
else if (k0_[7][0] == '1'){
if (l0 != 15){
window.open(`https://${l2[l0]}`);}
else {window.location.href = `mailto:${l3}`;}}
else if (k0_[7][0] == '2'){
fetch(`${l4}/3/${l11}`)
.then(_1 => _1.json())
.then(_1 => {})
.catch(_1 => {});}};});

k1('mu').forEach(_ => {
_.onpointerdown = _0 => {
let l = _0.target.id.replace('action','');
let l0 = Object.keys(k1_)[k0_[7][1]];
if (k0_[7][0] == '0'){
k22(l,l0);}
else if (k0_[7][0] == '1'){
if (l == '0'){
let l2 = k[k_]['F'] && k[k_]['F'][9];
let l3 = l2 && k[k_]['F'][9][0] || 'k';
k14(l3);}
else { let l4 = {1:'13',
2:'17',3:'12',4:'16'};
k5_(l4[l],z);}}
else if (k0_[7][0] == '2'){}};});

k1('eta').forEach(_ => {
let l = k0(_.getAttribute('name'));
if (localStorage.getItem(_.id)){
if (_.id != 'reaction0'){
l.style.display = 'flex';}
_.style.backgroundColor = 'White';}
_.onclick = () => {
if (!localStorage.getItem(_.id)){
if (_.id != 'reaction0'){
l.style.display = 'flex';}
_.style.backgroundColor = 'White';
localStorage.setItem(_.id,'-');}
else {if (_.id != 'reaction0'){
l.style.display = '';
_.style.backgroundColor = '';}
localStorage.removeItem(_.id);}};});


k2('.sigma button')
.forEach((_,_0) => 
_.onpointerdown = () => {
let l = !_0?k1:k0('iframe');
if (l.requestFullscreen){
l.requestFullscreen();} 
else if (l.webkitRequestFullscreen){
l.webkitRequestFullscreen();} 
else if (l.mozRequestFullScreen){
l.mozRequestFullScreen();} 
else if (l.msRequestFullscreen){
l.msRequestFullscreen();}});

k2('#caption .p')
.forEach(_ => {
_.onpointerdown = () => {
let l = _.getAttribute('name');
let l0 = k17(z);
let l1 = k[l0[0]]['E'] && 
k[l0[0]]['E'][l0[2]] &&
k[l0[0]]['E'][l0[2]][l] || z;
k14(l1);};});

/* create-paradigma */
k0('action5').onpointerdown = () => {/*  */
if (k0_[7][0] != '0'){
k0_[7][0] = '0';
let l1 = k0(`table${k0_[7][1]}`);
let l2 = k0(`grid${k0_[7][1]}`);
k1('omega')[2].value = '';
k1('omega')[0].value = k0_[0][2];
k0('action0').style.backgroundColor = '#F0F0F0';/* */
k1('pi').forEach(_ => _.readOnly = false);
k1('epsilon').forEach(_ => _.readOnly = false);
k1('temp').forEach(_ => _.disabled = false);
k1('temp0').forEach(_ => _.disabled = true);
k1('gamma').forEach(_ => _.style.display = 'none');
k0('table').style.display = 'block';
k0('table').style.visibility = 'visible';
l1.style.display = 'block';
k1('delta').forEach(_ => _.style.backgroundColor = '');
k1('nu').forEach(_ => _.style.backgroundColor = '');
k1('nu')[0].style.backgroundColor = 'White';
l2.style.backgroundColor = 'White';
k1('pi').forEach(_ => _.value = localStorage.getItem(_.id));
window.frames[0].postMessage([8,'0'],'*');
if (!k['_']['0'] || 
!Object.keys(k['_']['0']).length){
k0('table').style.height = 
`${window.innerHeight - 
500 - 25}px`;}
k0('iframe').style.height = 
`${window.innerHeight - 
k0('table').offsetHeight - 20}px`;
k0_[3][k0_[7][1]].render();
k18(0); k14();}};

/* load-paradigma */
k0('action6').onpointerdown = () => {
if (k0_[7][0] != '1'){
k0_[7][0] = '1';
k0('action0').style.backgroundColor = 'White';/* */
k1('pi').forEach(_ => _.readOnly = false);
k1('epsilon').forEach(_ => _.readOnly = false);
k1('temp0').forEach(_ => _.disabled = false);
k1('temp').forEach(_ => _.disabled = true);
k1('delta').forEach(_ => _.style.backgroundColor = '');
k1('nu').forEach(_ => _.style.backgroundColor = '');
k0('table').style.display = 'none';
k1('nu')[1].style.backgroundColor = 'White';
if (!k[k_]||!k[k_]['0']||!k[k_]['0'][4]){
k1('ksi').forEach(_ => _.value = '');}
else {window.frames[0].postMessage([1],'*');}
window.frames[0].postMessage([8,'1'],'*');
k0('iframe').style.height = '100%';
k18(1);}};

/* show-paradigma */
k0('action7').onpointerdown = () => {
if (k0_[7][0] != '2'){ 
k0_[7][0] = '2';
let l = k0_[0][2].split('-');
let l0 = Date.UTC(`20${l[1]}`,Number(l[2])-1,l[3]);
let l1 = Math.floor((Date.now()-l0)/1000/60/60/24);
k0('action0').style.backgroundColor = '#F0F0F0';/* */
k1('pi').forEach(_ => _.readOnly = true);
k1('epsilon').forEach(_ => _.readOnly = true);
k1('temp').forEach(_ => _.disabled = false);
k1('temp0').forEach(_ => _.disabled = false);
k1('gamma').forEach(_ => _.style.display = 'none');
k1('delta').forEach(_ => _.style.backgroundColor = '');
k1('nu').forEach(_ => _.style.backgroundColor = '');
k0('table').style.display = 'none';
k1('nu')[2].style.backgroundColor = 'White';
k0('data0').value = '';
if (k[k_]['0'] && k[k_]['0'][4]){
k1('ksi')[0].value = l1 == 0?0:
(l1 <= 100?-1:-2);
k1('ksi')[1].value = l[4];
k1('ksi')[2].value = l[5];
k1('ksi')[3].value = l[6];
k1('delta').forEach(_ => {
if (_.textContent.includes(l[4])){
_.style.backgroundColor = 'White';}});
window.frames[0].postMessage(0,'*');}
window.frames[0].postMessage([8,'2'],'*');
k18(2);}};


k1('zeta').forEach(_ => {
let l = k0(_.getAttribute('name'));
if (localStorage.getItem(_.id)){
_.style.backgroundColor = 'White';}
if (localStorage.getItem('reaction13')){
k0('meta').children[0].style.display = 'none';
k1('eta').forEach(_0 => _0.style.visibility = 'hidden');}
if (localStorage.getItem('reaction15')){
document.body.style.filter = 'grayscale(100%)';}});

k0('reaction12').onpointerdown = _ => {
let l = localStorage.getItem(_.target.id);
_.target.style.backgroundColor = l?'':'White';
window.frames[0].postMessage([16,l?'off':'on'],'*');
if (!l){localStorage.setItem(_.target.id,'_');}
else {localStorage.removeItem(_.target.id);}};

k0('reaction13').onpointerdown = _ => {
let l = localStorage.getItem(_.target.id);
_.target.style.backgroundColor = l?'':'White';
k0('meta').children[0].style.display = l?'':'none';
k1('eta').forEach(_0 => 
_0.style.visibility = l?'':'hidden');
if (!l){localStorage.setItem(_.target.id,'_');}
else {localStorage.removeItem(_.target.id);}};

k0('reaction14').onpointerdown = _ => {
let l = localStorage.getItem(_.target.id);
_.target.style.backgroundColor = l?'':'White';
window.frames[0].postMessage([15,l?'off':'on'],'*');
if (!l){localStorage.setItem(_.target.id,'_');}
else {localStorage.removeItem(_.target.id);}};

k0('reaction15').onpointerdown = _ => {
let l = localStorage.getItem(_.target.id);
_.target.style.backgroundColor = l?'':'White';
document.body.style.filter = l?'':'grayscale(100%)';
if (!l){localStorage.setItem(_.target.id,'_');}
else {localStorage.removeItem(_.target.id);}};

k0('frame0 div').onpointerdown = _ => {
k0('frame').style.display = 'none';
k0('present').style.display = 'none';
_.target.parentElement.style.display = 'none';
k2('#meta span').forEach(_3 => _3.style.display = 'none');}

document.onkeydown = _ => {
let l = window.location.hostname;
let l0 = window.location.port;
if (_.which == 101){ }
else if (_.which == 102){ k13('13',z);}
else if (_.which == 98){ k13('12',z);}
else if (_.which == 100){ k13('17',z);}
else if (_.which == 104){ k13('16',z);}
else if (_.which == 103){ /* */}
else if (_.which == 105){ /* */}
else if (_.which == 97){ /* */}
else if (_.which == 99){ /* */}};


k0('table').children[0]
.onpointerdown = _ => {
_.preventDefault();
let l = _.target.parentElement;
let l0 = window.innerHeight;
let l1 = l.offsetHeight + _.clientY - l0;
let l2 = _0 => {
l.style.height = `${l1 + l0 - _0.clientY}px`;
document.body.style.cursor = 'n-resize';
k0('iframe1').style.display = 'block';
k0('iframe').style.height = `${_0.clientY - l1 - 20}px`;}
let l3 = () => {
k0_[3][k0_[7][1]].render();
document.body.style.cursor = '';
k0('iframe1').style.display = '';
document.removeEventListener('pointermove',l2);
document.removeEventListener('pointerup',l3);}
document.addEventListener('pointermove',l2);
document.addEventListener('pointerup',l3);};

k0('data2').oninput = _ => {
if (_.target.value.length == 26){
history.replaceState(null,null,l);}
else if (!_.target.value){
history.replaceState(null,null,'/');
k[k0('iframe')] = {};
k_ = {};}};


});

