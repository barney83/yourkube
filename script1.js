
var t = {
0:0,1:1,2:2,3:6,4:6,
5:6,6:6,7:7,8:0,9:0,
10:0,11:0,12:0,13:0,
14:0,15:0};
    
var t0 = {
0:0,1:1,2:2,3:2,4:2,
5:2,6:6,7:7,8:7,9:7,
10:7,11:7,12:7,13:7,
14:7,15:7};

var k0_ = {0:[],1:{},2:{},31:[],
7:['1',0,0,0,'','',-1],
3:{},4:{},5:{},6:{},8:{},10:{},
11:[],12:[],13:[],14:[],
15:[],16:[],17:[],18:[]};

var k1_ = {0:[5,1,105,180,0],1:[5,1,105,207,0],
2:[2,5,35,1005,0],3:[2,5,34,1004,0],4:[2,5,17,1014,0],
5:[2,5,21,1228,0],6:[2,5,53,1985,0],7:[2,5,44,1985,0],
8:[2,5,46,1225,0],9:[2,5,82,225,0],A:[2,5,23,215,0],
B:[2,5,92,215,0],C:[2,5,11,215,0],D:[2,5,30,215,0],
E:[2,5,29,215,0],F:[5,5,15,63,0]};

var k2_ = {Gainsboro:[4,404],Wheat:[14,504],Gold:[24,604],
Crimson:[34,704],MediumVioletRed:[44,804],
MediumSeaGreen:[54,904],SeaGreen:[64,1004],DeepSkyBlue:[74,1104],
DodgerBlue:[84,1204],MediumSlateBlue:[94,1304]};

var k3_ = {'_':{
'0':[4,21,38,49,60,71,82,93,111,129,146,163],
'1':[6,15,26,37,54,71,88,105,122,139,156,173,190],
'6':[26,29,43,45,46,47,48,49],
'7':[2,3,4,5,6,7,8,9,10,11,39,40,41,43]},
'0':{'25':[99,170],'28':[100,171],'24':[12,29,44,55],
'42':[122],'43':[123],'15':[124],'44':[125]},
'1':{'24':[21,45,60,75,90,105,120,135,150,165,180]},
'2':{'24':[8,23]}};

var k14_ = _ => 
_ <= 10?'0':(_ <= 15?'1':
(_ <= 20?'2':(_ <= 30?'3':
(_ <= 40?'4':(_ <= 50?'5':
(_ <= 60?'6':(_ <= 70?'7':
(_ <= 80?'8':(_ <= 90?'9':
(_ <= 100?'10':(_ <= 110?'11':
(_ <= 120?'12':(_ <= 130?'13':
(_ <= 140?'14':(_ <= 150?'15':
(_ <= 160?'16':(_ <= 170?'17':
(_ <= 180?'18':(_ <= 190?'19':
(_ <= 200?'20':(_ <= 210?'21':
(_ <= 220?'22':'23')
)))))))))))))))))))));

var k13_ = (_,_0,_1) => {
let l = new Array(_0).fill(null)
.map(() => new Array(_1).fill(null));
for (let p in _){
for (let q in _[p]){
l[p][q] = _[p][q];}} 
return l;};

var k4_ = (_,_0) => {
let l = {};
let l0 = k0_[3][_].getData(k1_[_][1],
k1_[_][0],k1_[_][3]-1,k1_[_][2]-1);
if (_ == 2){
l0.forEach(_ => delete l0[_][14]);}
else if (_0.length){
_0.forEach(_ => delete l0[_]);}
for (let p in l0){
if (l0[p].filter(Boolean).length){
l[p] = {};
for (let q in l0[p]){
if (l0[p][q]){
l[p][q] = l0[p][q];}}}} 
return l;};   

var k5_ = function (_,_0,_1,_2,_3,_4) {
let l = _2 - _; 
if (_3 == 1){
if (_4 == 6 || _4 == 7){
for (let p in k2_){
if (l > k2_[p][0] && l <= k2_[p][0]+10 ||
l > k2_[p][0]+100 && l <= k2_[p][0]+110){
_1.style.backgroundColor = p;}}}
else {if (l > k2_[p][0] && l <= k2_[p][0]+10){
_1.style.backgroundColor = p;}}
if (_4 == 6 || _4 == 7){
for (let q in k2_){
if (l > k2_[q][0]+200 && l <= k2_[q][0]+210 ||
l > k2_[q][0]+300 && l <= k2_[q][0]+310 ||
l > k2_[q][0]+400 && l <= k2_[q][0]+410 ||
l > k2_[q][0]+500 && l <= k2_[q][0]+510 ||
l > k2_[q][0]+600 && l <= k2_[q][0]+610 ||
l > k2_[q][0]+700 && l <= k2_[q][0]+710){
_1.style.boxShadow = `0 0 0 2px ${q} inset,
0 0 0 3px ${q} inset`;}}}
else {for (let q in k2_){
if (l > k2_[q][0]+100 && l <= k2_[q][0]+110){
_1.style.boxShadow = `0 0 0 2px ${q} inset,
0 0 0 3px ${q} inset`;}}}


}};

var k6_ = function (_,_0,_1,_2) {
Handsontable.renderers.TextRenderer.apply(this,arguments);
let l = Number(_.rootElement.id.replace('table',''));
let l0 = 0;
let l1 = _1 - l0;
_0.style.textAlign = 'center';
if (_1 <= 1 || _1 > 4 && _2 <= 1){
_0.style.fontWeight = 'bold';}
if (l == 5){l0 = 34;
for (let i = 0;i < k1_[5][3];i++){
if(_1 == i+4){
if (_2 == 3){
_0.setAttribute('id',`woff${i}`);
_0.setAttribute('class','woff');}}}}
if (l == 6 || l == 7){
l0 = 180;
if (_2 == 1){
for (let p in k2_){
if (l1 > k2_[p][1]+580 && 
l1 <= k2_[p][1]+680){
_0.style.boxShadow = 
`0 0 0 2px ${p} inset,
0 0 0 3px ${p} inset`;} }}}
else {if (_2 == 1){
for (let p in k2_){
if (l1 > k2_[p][1]+l0 && 
l1 <= k2_[p][1]+198){
_0.style.boxShadow = 
`0 0 0 2px ${p} inset,
0 0 0 3px ${p} inset`;}}}}
k5_(l0,_,_0,_1,_2,l);};

var k7_ = function (_,_0,_1,_2) {
Handsontable.renderers.TextRenderer.apply(this,arguments);
let l = Number(_.rootElement.id.replace('table',''));
let l0 = k2_;
if (_1 == 0 || _2 > 2){ 
_0.style.textAlign = 'center';}
if (l == 0){
k3_['_'][0].forEach(_3 => {
if (_1 <= 1 || _2 <= 1 || _1 == _3) {
_0.style.fontWeight = 'bold';}});
if (_2 <= 104){
if (_1 == 93 || _1 == 111){
for (let p in l0){
if (_2 > l0[p][0] && _2 <= l0[p][0]+10){
_0.style.backgroundColor = p;}}}
if (_1 == 129 || _1 == 146 || _1 == 163){
for (let q in l0){
if (_2 > l0[q][0] && _2 <= l0[q][0]+100){
_0.style.boxShadow = `0 0 0 2px ${q} inset,
0 0 0 3px ${q} inset`;}}}}}
else if (l == 1){
k3_['_'][1].forEach(_3 => {
if (_1 <= 1 || _2 <= 1 || _1 == _3) {
_0.style.fontWeight = 'bold';}});}
else if (l == 15){
if (_1 <= 2 || _1 == 14 || 
_1 == 30 || _1 == 47 || _2 <= 1){
_0.style.fontWeight = 'bold';}}};

var k8_ = function (_,_0,_1,_2) {
Handsontable.renderers.TextRenderer.apply(this,arguments);
let l = Number(_.rootElement.id.replace('table',''));
let l0 = 0;
let l1 = k2_;
_0.style.textAlign = 'center';
if (_1 <= 1 || _1 > 4 && _2 <= 1){
_0.style.fontWeight = 'bold';}
if (l == 2){
if (_2 == 0){
_0.style.verticalAlign = 'middle';} 
if (_1 > 4 && _2 == 16){
_0.style.fontWeight = 'bold';}}
else if (l == 4){l0 = -190;
if (_1 > 3 && _2 == 12){
_0.style.textAlign = 'left';}}
if (l == 2 || l == 3){
l0 = -400;}
let _4 = _1 - l0;
if (_2 == 19 && l == 2 ||
_2 == 1 && (l == 2 || l == 3 || l == 4)){
for (let p in l1){
if (_4 > l1[p][1] && 
_4 <= l1[p][1]+100){
_0.style.boxShadow = 
`0 0 0 2px ${p} inset,
0 0 0 3px ${p} inset`;}}}};

var k9_ = function (_,_0,_1,_2) {
Handsontable.renderers.TextRenderer.apply(this,arguments);
let l = Number(_.rootElement.id.replace('table',''));
let l0 = 0;
_0.style.textAlign = 'center';
if (_1 <= 1 || _1 > 4 && _2 <= 1){
_0.style.fontWeight = 'bold';}
else if (l == 12){
if (_1 > 3 && _2 == 12){
_0.style.textAlign = 'left';}	
for (let i = 4;i < k1_[9][0];i++){
if (_1 == i+4 && _2 == 3){
_0.setAttribute('id',`vtt${i}`);
_0.setAttribute('class','vtt');}}}
k5_(11,_,_0,_1,_2);};

var k10_ = _ => {
let l = `${c[1][1]} code.zip`;
let l0 = {0:[false].concat(k0_[11])};
fetch(`https://api.yourkube.com/3`,
{method: 'POST',
headers: {'Content-Type':'application/json'},
body: JSON.stringify(l0)})
.then(_0 => _0.json())
.then(_0 => {
fetch(`https://api.yourkube.com/3`,
{method: 'POST',
headers: {'Content-Type':'application/json'},
body: JSON.stringify(_)})
.then(_1 => _1.json())
.then(_1 => {
window.location.href = 
`https://yourkube.com/_external/${l}`;
_1.style.display = 'none';})
.catch(_1 => _1.style.display = 'none');});};


document.addEventListener('DOMContentLoaded', () => {
var k11_ = StripeCheckout.configure({
key: 'pk_test_ETUUH0s1zUQzH01DcbmhL1xK',
token: () => {
if (k['_']['0'][4]){
k0('iframe1').style.display = 'block';
window.frames[0].postMessage('0','*');}}});/* */

var k12_ = StripeCheckout.configure({
key:'pk_test_ETUUH0s1zUQzH01DcbmhL1xK',
token: _ => {
let _0 = {0:[true].concat(k0_[11])
.concat(k0_[12]),2:_('0')/* */};
if (k['_']['0'][4]){
k0('iframe1').style.display = 'block';
_0[1] = [_.id].concat(k0_[0].slice(1,3));
if (k0('data3').value){ 
_0[0][4] = k0('data3').value;}
if (k23.value){ _0[0][3] = k23.value;}
if (k0_[11].length || k0_[12].length){
_0[2] = k0_[11].concat(k0_[12]);}
k10_(_0);}}});/* */

k2('#data button')[0]
.onpointerdown = () => {
k11_.open({amount:
!k['_']['0'][4]?0:100,
zipCode: true,/* bitcoin: true, */
locale:'auto',currency: 'EUR',
description:'download json csv txt',
name:'template data'});};
k2('#code button')[0]
.onpointerdown = () => {
k12_.open({
amount: !k['_']['0'][4]?0:200,
zipCode: true,/*  bitcoin: true, */ 
locale:'auto', currency: 'EUR',
description:'download html css js',
name:'source code'});};

fetch('model0.json'/* -0.0 */,{
headers:{'Content-Type':'application/json'}})
.then(_ => _.json())
.then(_ => {
k0_[3]['0'] = new Handsontable(
k0('table').children[16],{
data: _['0 request'],
colWidths: _['0'],
mergeCells: _['00'],
stretchH: 'last',
minSpareCols: 2,
minSpareRows: 4,
fixedRowsTop: 2,
fixedColumnsLeft: 3,
rowHeaders: true,
colHeaders: true,
fillHandle: false,
enterBeginsEditing: false,
cells: function(_1,_2){
this.renderer = k7_;
if (_2 <= 4 || _2 > 104 || 
_1 <= 1 || _1 > 179){
this.readOnly = true;}
k3_['_'][0].forEach(_3 => {
if (_1 == _3){
this.readOnly = true;}});
k3_['0'][25].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][25];}});
k3_['0'][28].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][28];}});
k3_['0'][24].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][24];}});
k3_['0'][42].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][42];}});/* */
k3_['0'][43].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][43];}});/* */

k3_['0'][44].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][44];}});/* */

k3_['0'][15].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][15];}});/* */},
afterChange: function(_1,_2){
if (_2 == 'edit' || _2 == 'CopyPaste.paste' ||
_2 == 'UndoRedo.undo' || _2 == 'UndoRedo.redo'){
let _4 = [0,3,18,33,44,55,66,77,90,103,118,133];
k['_']['0'] = k4_('0',_4);
window.frames[0].postMessage(
[3].concat(k['_']),'*');
k16();}}});

k0_[3]['1'] = new Handsontable(
k0('table').children[15],{
data: _['1 query'],
colWidths: _['1'],
mergeCells: _['01'],
stretchH: 'last',
minSpareCols: 2,
minSpareRows: 4,
fixedRowsTop: 2,
fixedColumnsLeft: 3,
rowHeaders: true,
colHeaders: true,
fillHandle: false,
enterBeginsEditing: false,
cells: function(_1,_2){
this.renderer = k7_
if (_2 <= 4 || _1 <= 1){
this.readOnly = true;}
k3_['_'][1].forEach(_3 => {
if (_1 == _3){
this.readOnly = true;}});
k3_['1'][24].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][24];}});
if (_2 == 10){ this.source = _['_'][25];}
if (_2 == 11){ this.source = _['_'][28];}},
afterChange: function(_1,_2){
if (_2 == 'edit' || _2 == 'CopyPaste.paste' ||
_2 == 'UndoRedo.undo' || _2 == 'UndoRedo.redo'){
let _4 = [0,4,14,27,40,53,66,79,92,105,118,131,144,155];
k['_']['1'] = k4_('1',_4);
window.frames[0].postMessage([3].concat(k['_']),'*');}}});

k0_[3]['2'] = new Handsontable(
k0('table').children[14],{
data: _['2 bubble'],
colWidths: _['2'],
mergeCells: _['02'],
stretchH: 'last',
minSpareCols: 2,
minSpareRows: 4,
fixedRowsTop: 3,
fixedColumnsLeft: 2,
rowHeaders: true,
colHeaders: true,
fillHandle: false,
enterBeginsEditing: false,
cells: function(_1,_2){
this.renderer = k8_;
if (_1 <= 4 || _2 <= 1 || _2 == 16){
this.readOnly = true;}
k3_['2'][24].forEach(_3 => {
if (_1 == _3){
this.type = 'dropdown';
this.source = _['_'][24];}});},
afterChange: function(_1,_2){
if (_2 == 'edit' || _2 == 'CopyPaste.paste' ||
_2 == 'UndoRedo.undo' || _2 == 'UndoRedo.redo'){
k['_']['2'] = k4_('2',0);
window.frames[0].postMessage(
[3].concat(k['_']),'*');}}});

k0_[3]['6'] = new Handsontable(
k0('table').children[10],{
data: _['6 style'],
colWidths: _['6'],
mergeCells: _['06'],
stretchH:'last',
minSpareCols: 2,
minSpareRows: 4,
fixedRowsTop: 3,
fixedColumnsLeft: 2,
rowHeaders: true,
colHeaders: true,
fillHandle: false,
enterBeginsEditing: false,
cells: function(_1,_2){
this.renderer = k6_;
if (_1 <= 4 || _2 <= 1){
this.readOnly = true;}
k3_['_'][6].forEach(_3 => {
// if (_1 == _3){}
this.type = 'dropdown';
if (_2 == 26 || _2 == 29){
this.source = _['_'][19];}
if (_2 == 43){this.source = _['_'][34];}
if (_2 == 45){this.source = _['_'][40];}
if (_2 == 46){this.source = _['_'][18];}
if (_2 == 47){this.source = _['_'][9];}
if (_2 == 48){this.source = _['_'][6];}
if (_2 == 49){this.source = _['_'][111];}});},
afterChange: function(_1,_2){
if (_2 == 'edit' || _2 == 'CopyPaste.paste' ||
_2 == 'UndoRedo.undo' || _2 == 'UndoRedo.redo'){
k['_']['6'] = k4_('6',0);
window.frames[0].postMessage(
[3].concat(k['_']),'*');}}});

k0_[3]['7'] = new Handsontable(
k0('table').children[9],{
data: _['7 color'],
colWidths: _['7'],
mergeCells: _['07'],
stretchH:'last',
minSpareCols: 2,
minSpareRows: 4,
fixedRowsTop: 3,
fixedColumnsLeft: 2,
rowHeaders:true,
colHeaders:true,
fillHandle: false,
enterBeginsEditing:false,
cells: function(_1,_2){
this.renderer = k6_;
if (_1 <= 4 || _2 <= 1){
this.readOnly = true;}
k3_['_'][7].forEach(_3 => {
// if (_1 == _3){}
this.type = 'dropdown';
if (_2 < 12){this.source = _['_'][41];;}
if (_2 == 39){this.source = _['_'][39];}
if (_2 == 40){this.source = _['_'][33];}
if (_2 == 41){this.source = _['_'][34];}    
if (_2 == 43){this.source = _['_'][3];}});},
afterChange: function(_1,_2){
if (_2 == 'edit' || _2 == 'CopyPaste.paste' ||
_2 == 'UndoRedo.undo' || _2 == 'UndoRedo.redo'){
k['_']['7'] = k4_('7',0);
window.frames[0].postMessage(
[3].concat(k['_']),'*');}}});

/////////////// temporary ! //////////
fetch('model1.json'/* -0.0 */,{
headers:{'Content-Type':'application/json'}})
.then(_ => _.json())
.then(_ => {
if (window.location.hash == '#bewerbung'){ 
let l11 = _['step'][222];
let l7 = k13_(l11,178,100);
let l8 = [2,5,l7,180,105,'edit'];
k0_[3]['0'].populateFromArray(...l8);}});
 ///////////////////// 
});

fetch('model1.json'/* -0.0 */,{
headers:{'Content-Type':'application/json'}})
.then(_ => _.json())
.then(_ => {
k2('#frame1 .last div')[0].onpointerdown = _0 => {
let l = _0.target.style.borderLeft;
let l0 = _0.target.parentElement;
l0.style.visibility = l?'':'visible';
k0('frame4').textContent = l?'':'close';
k0('frame').style.visibility = l?'':'hidden';
_0.target.onpointerover = _1 => {
_1.target.style.borderLeft = 
l?'':'1px solid Transparent';}
_0.target.onpointerout = _1 => {
_1.target.style.borderLeft = 
l?'':'1px solid DarkGray';}};

k1('omicron').forEach(_0 => {
_0.onpointerdown = _1 => {
let l = _1.target.id;
let l0 = l.replace('frame','');
let l1 = _['step']['_'];
let l9 = _['step']['-'];
let l10 = _['step']['_-'];
let l2 = l1.indexOf(w);
let l3 = v == 222-1?0:v+1;
let l4 = v == 0?222-1:v-1; 
let l5 = w == 222-1?0:l2+1;
let l6 = w == 0?l1.length-1:l2-1;
v = l0 == '6'?l3:
(l0 == '2'?l4:
(l0 == '5'?l1[l5]:
(l0 == '3'?l1[l6]:'')));
w = l1.includes(v)?v:w;
let l11 = [];
let l12 = l10[k14_(v)];
l12.forEach(_2 => {
l11.push(_['step'][_2]);});
l11.push(_['step'][v]);
let l13 = Object.assign({}, ...l11);
let l7 = k13_(l13,178,100);
let l8 = [2,5,l7,180,105,'edit'];
k0_[3]['0'].populateFromArray(...l8);/* console.log(v); */
k0('frame4').textContent = l9[v].toString();};});




k2('#frame4,#present button')
.forEach(_0 => {
_0.onpointerdown = () => {
let l = introJs();
let l0 = _0.parentElement;
let l1 = l0.parentElement.id;
k0('meta').style.position = 'absolute';
l.onafterchange(function (){
let l2 = k1('introjs-progress');
let l3 = k1('introjs-progressbar');
let l4 = k1('introjs-tooltip')[0];
let l5 = k1('introjs-arrow')[0];
let l6 = l1 == 'present0'?'gainsboro':
(l1 == 'present1'?'wheat':(l1 == 'present2'?'gold':
(l1 == 'present3'?'crimson':(l1 == 'present4'?'mediumvioletred':
(l1 == 'present5'?'mediumseagreen':(l1 == 'present6'?'seagreen':
(l1 == 'present7'?'deepskyblue':(l1 == 'present8'?'dodgerblue':
(l1 == 'present9'?'mediumslateblue':'white')))))))));
l2[0].classList.add(l6);
l3[0].classList.add('beta');
if (l2.length - 1){
l4.removeChild(l2[1]); 
setTimeout(() => {
let l7 = l2[0].cloneNode(true);
l4.insertBefore(l7,l5)},400);}
else {let l7 = l2[0].cloneNode(true);
l4.insertBefore(l7,l5);}})
.onexit(function(){
k0('meta').style.position = '';});


if (l1 == 'frame1'){
if (k0('frame4').textContent != 'close'){
l.onchange(function (){
let l2 = this._currentStep;
let l3 = l2 <= 8?0:(l2 <= 15?1:2);
k1('nu')[l3].click();})
.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('meta').children[1],intro: `<div><strong>0:28 yourkube</strong></div> ${_['digital content'][0]}`},
{element: k0('form1').children[0],intro: `<div><strong>1:28 lorem ipsum</strong></div> ${_['digital content'][1]}`},
{element: k0('form1').children[0].children[0],intro: `<div><strong>2:28 lorem ipsum</strong></div> ${_['digital content'][2]}`},
{element: k0('form1').children[1],intro: `<div><strong>3:28 lorem ipsum</strong></div> ${_['digital content'][3]}`},
{element: k0('form1').children[1].children[2],intro: `<div><strong>4:28 lorem ipsum</strong></div> ${_['digital content'][4]}`},
{element: k0('form0').children[0].children[0],intro: `<div><strong>5:28 lorem ipsum</strong></div> ${_['digital content'][5]}`},
{element: k0('form0').children[1].children[0],intro: `<div><strong>6:28 lorem ipsum</strong></div> ${_['digital content'][6]}`},
{element: k0('form2').children[0].children[4],intro: `<div><strong>7:28 lorem ipsum</strong></div> ${_['digital content'][7]}`},
{element: k0('form2').children[1].children[4],intro: `<div><strong>8:28 lorem ipsum</strong></div> ${_['digital content'][8]}`},
{element: k0('form1').children[0].children[1],intro: `<div><strong>9:28 lorem ipsum</strong></div> ${_['digital content'][9]}`},
{element: k0('form1').children[1],intro: `<div><strong>10:28 lorem ipsum</strong></div> ${_['digital content'][10]}`},
{element: k0('form1').children[1].children[2],intro: `<div><strong>11:28 lorem ipsum</strong></div> ${_['digital content'][11]}`},
{element: k0('form0').children[0].children[0],intro: `<div><strong>12:28 lorem ipsum</strong></div> ${_['digital content'][12]}`},
{element: k0('form0').children[1].children[0],intro: `<div><strong>13:28 lorem ipsum</strong></div> ${_['digital content'][13]}`},
{element: k0('form2').children[0].children[4],intro: `<div><strong>14:28 lorem ipsum</strong></div> ${_['digital content'][14]}`},
{element: k0('form2').children[1].children[4],intro: `<div><strong>15:28 lorem ipsum</strong></div> ${_['digital content'][15]}`},
{element: k0('form1').children[0].children[2],intro: `<div><strong>16:28 lorem ipsum</strong></div> ${_['digital content'][16]}`},
{element: k0('form1').children[1],intro: `<div><strong>17:28 lorem ipsum</strong></div> ${_['digital content'][17]}`},
{element: k0('form1').children[1].children[2],intro: `<div><strong>18:28 lorem ipsum</strong></div> ${_['digital content'][18]}`},
{element: k0('form0').children[0].children[0],intro: `<div><strong>19:28 lorem ipsum</strong></div> ${_['digital content'][19]}`},
{element: k0('form0').children[1].children[0],intro: `<div><strong>20:28 lorem ipsum</strong></div> ${_['digital content'][20]}`},
{element: k0('form2').children[0].children[4],intro: `<div><strong>21:28 lorem ipsum</strong></div> ${_['digital content'][21]}`},
{element: k0('form2').children[1].children[4],intro: `<div><strong>22:28 lorem ipsum</strong></div> ${_['digital content'][22]}`},
{element: k0('form0'),intro: `<div><strong>23:28 lorem ipsum</strong></div> ${_['digital content'][23]}`},
{element: k0('form0').children[0].children[4],intro: `<div><strong>24:28 lorem ipsum</strong></div> ${_['digital content'][24]}`},
{element: k0('form0').children[1].children[4],intro: `<div><strong>25:28 lorem ipsum</strong></div> ${_['digital content'][25]}`},
{element: k0('form2'),intro: `<div><strong>26:28 lorem ipsum</strong></div> ${_['digital content'][26]}`},
{element: k0('form2').children[0].children[0],intro: `<div><strong>27:28 lorem ipsum</strong></div> ${_['digital content'][27]}`},
{element: k0('form2').children[1].children[0],intro: `<div><strong>28:28 lorem ipsum</strong></div> ${_['digital content'][28]}`}]})
.start();} else {k0('frame').style.display = 'none';
k0('present').style.display = 'none';
k2('#meta span').forEach(_3 => _3.style.display = 'none');}}

else if (l1 == 'present0'){
if (!localStorage.getItem('reaction1')){
k1('eta')[2].click();}
l.onchange(function (){
let l2 = this._currentStep;
let l3 = l2 <= 6?0:(l2 <= 12?1:2);
k1('nu')[l3].click();})
.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('grid'),intro: `<div><strong>0:16 interaction grid</strong></div> ${_['interaction grid'][0]}`},
{element: k0('grid').children[3],intro: `<div><strong>1:16 lorem ipsum</strong></div> ${_['interaction grid'][1]}`},
{element: k0('grid').children[2],intro: `<div><strong>2:16 lorem ipsum</strong></div> ${_['interaction grid'][2]}`},
{element: k1('delta')[8],intro: `<div><strong>3:16 lorem ipsum</strong></div> ${_['interaction grid'][3]}`},
{element: k1('delta')[9],intro: `<div><strong>4:16 lorem ipsum</strong></div> ${_['interaction grid'][4]}`},
{element: k1('delta')[6],intro: `<div><strong>5:16 lorem ipsum</strong></div> ${_['interaction grid'][5]}`},
{element: k1('delta')[7],intro: `<div><strong>6:16 lorem ipsum</strong></div> ${_['interaction grid'][6]}`},
{element: k1('delta')[8],intro: `<div><strong>7:16 lorem ipsum</strong></div> ${_['interaction grid'][7]}`},
{element: k1('delta')[0],intro: `<div><strong>8:16 lorem ipsum</strong></div> ${_['interaction grid'][8]}`},
{element: k1('delta')[15],intro: `<div><strong>9:16 lorem ipsum</strong></div> ${_['interaction grid'][9]}`},
{element: k1('delta')[7],intro: `<div><strong>10:16 lorem ipsum</strong></div> ${_['interaction grid'][10]}`},
{element: k0('grid').children[3].children[1],intro: `<div><strong>11:16 lorem ipsum</strong></div> ${_['interaction grid'][11]}`},
{element: k0('grid').children[2].children[1],intro: `<div><strong>12:16 lorem ipsum</strong></div> ${_['interaction grid'][12]}`},
{element: k0('grid').children[3],intro: `<div><strong>13:16 lorem ipsum</strong></div> ${_['interaction grid'][13]}`},
{element: k0('grid').children[3].children[1],intro: `<div><strong>14:16 lorem ipsum</strong></div> ${_['interaction grid'][14]}`},
{element: k0('grid').children[2],intro: `<div><strong>15:16 lorem ipsum</strong></div> ${_['interaction grid'][15]}`},
{element: k0('grid').children[2].children[1],intro: `<div><strong>16:16 lorem ipsum</strong></div> ${_['interaction grid'][16]}`}]})
.start(); k0('grid').style.overflow = 'visible';}

else if (l1 == 'present1'){
if (!localStorage.getItem('reaction2')){
k1('eta')[3].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('web'),intro: `<div><strong>0:14 responsive web</strong></div> ${_['responsive web'][0]}`},
{element: k0('web').children[3],intro: `<div><strong>1:14 lorem ipsum</strong></div> ${_['responsive web'][1]}`},
{element: k0('web').children[2],intro: `<div><strong>2:14 lorem ipsum</strong></div> ${_['responsive web'][2]}`},
{element: k1('epsilon')[10],intro: `<div><strong>3:14 lorem ipsum</strong></div> ${_['responsive web'][3]}`},
{element: k1('epsilon')[11],intro: `<div><strong>4:14 lorem ipsum</strong></div> ${_['responsive web'][4]}`},
{element: k1('epsilon')[12],intro: `<div><strong>5:14 lorem ipsum</strong></div> ${_['responsive web'][5]}`},
{element: k1('epsilon')[13],intro: `<div><strong>6:14 lorem ipsum</strong></div> ${_['responsive web'][6]}`},
{element: k1('epsilon')[14],intro: `<div><strong>7:14 lorem ipsum</strong></div> ${_['responsive web'][7]}`},
{element: k1('epsilon')[15],intro: `<div><strong>8:14 lorem ipsum</strong></div> ${_['responsive web'][8]}`},
{element: k1('epsilon')[16],intro: `<div><strong>9:14 lorem ipsum</strong></div> ${_['responsive web'][9]}`},
{element: k1('epsilon')[17],intro: `<div><strong>10:14 lorem ipsum</strong></div> ${_['responsive web'][10]}`},
{element: k1('epsilon')[18],intro: `<div><strong>11:14 lorem ipsum</strong></div> ${_['responsive web'][11]}`},
{element: k1('epsilon')[19],intro: `<div><strong>12:14 lorem ipsum</strong></div> ${_['responsive web'][12]}`},
{element: k1('epsilon')[8],intro: `<div><strong>13:14 lorem ipsum</strong></div> ${_['responsive web'][13]}`},
{element: k1('epsilon')[9],intro: `<div><strong>14:14 lorem ipsum</strong></div> ${_['responsive web'][14]}`}]})
.start(); k0('web').style.overflow = 'visible';}

else if (l1 == 'present2'){
if (!localStorage.getItem('reaction3')){
k1('eta')[5].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('data'),intro: `<div><strong>0:9 template data</strong></div> ${_['template data'][0]}`},
{element: k0('data').children[2],intro: `<div><strong>1:9 lorem ipsum</strong></div> ${_['template data'][1]}`},
{element: k0('data').children[6],intro: `<div><strong>2:9 lorem ipsum</strong></div> ${_['template data'][2]}`},
{element: k0('data').children[4],intro: `<div><strong>3:9 lorem ipsum</strong></div> ${_['template data'][3]}`},
{element: k0('data').children[3],intro: `<div><strong>4:9 lorem ipsum</strong></div> ${_['template data'][4]}`},
{element: k0('data').children[3].children[0],intro: `<div><strong>5:9 lorem ipsum</strong></div> ${_['template data'][5]}`},
{element: k0('data').children[3].children[1],intro: `<div><strong>6:9 lorem ipsum</strong></div> ${_['template data'][6]}`},
{element: k0('data').children[5],intro: `<div><strong>7:9 lorem ipsum</strong></div> ${_['template data'][7]}`},
{element: k0('data').children[5].children[0],intro: `<div><strong>8:9 lorem ipsum</strong></div> ${_['template data'][8]}`},
{element: k0('data').children[5].children[1],intro: `<div><strong>9:9 lorem ipsum</strong></div> ${_['template data'][9]}`}]})
.start(); k0('data').style.overflow = 'visible';}

else if (l1 == 'present3'){
if (!localStorage.getItem('reaction4')){
k1('eta')[6].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('code'),intro: `<div><strong>0:9 source code</strong></div> ${_['source code'][0]}`},
{element: k0('code').children[2],intro: `<div><strong>1:9 lorem ipsum</strong></div> ${_['source code'][1]}`},
{element: k0('code').children[6],intro: `<div><strong>2:9 lorem ipsum</strong></div> ${_['source code'][2]}`},
{element: k0('code').children[4],intro: `<div><strong>3:9 lorem ipsum</strong></div> ${_['source code'][3]}`},
{element: k0('code').children[3],intro: `<div><strong>4:9 lorem ipsum</strong></div> ${_['source code'][4]}`},
{element: k0('code').children[3].children[0],intro: `<div><strong>5:9 lorem ipsum</strong></div> ${_['source code'][5]}`},
{element: k0('code').children[3].children[1],intro: `<div><strong>6:9 lorem ipsum</strong></div> ${_['source code'][6]}`},
{element: k0('code').children[5],intro: `<div><strong>7:9 lorem ipsum</strong></div> ${_['source code'][7]}.`},
{element: k0('code').children[5].children[0],intro: `<div><strong>8:9 lorem ipsum</strong></div> ${_['source code'][8]}`},
{element: k0('code').children[5].children[1],intro: `<div><strong>9:9 lorem ipsum</strong></div> ${_['source code'][9]}`}]})
.start(); k0('code').style.overflow = 'visible';}

else if (l1 == 'present4'){
if (!localStorage.getItem('reaction5')){
k1('eta')[7].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('link'),intro: `<div><strong>0:7 resource link</strong></div> ${_['resource link'][0]}`},
{element: k0('link').children[3],intro: `<div><strong>1:7 lorem ipsum</strong></div> ${_['resource link'][1]}`},
{element: k0('link').children[2],intro: `<div><strong>2:7 lorem ipsum</strong></div> ${_['resource link'][2]}`},
{element: k0('link').children[2].children[0],intro: `<div><strong>3:7 lorem ipsum</strong></div> ${_['resource link'][3]}`},
{element: k0('link').children[2].children[1],intro: `<div><strong>4:7 lorem ipsum</strong></div> ${_['resource link'][4]}`},
{element: k0('link').children[4],intro: `<div><strong>5:7 lorem ipsum</strong></div> ${_['resource link'][5]}`},
{element: k0('link').children[4].children[0],intro: `<div><strong>6:7 lorem ipsum</strong></div> ${_['resource link'][6]}`},
{element: k0('link').children[4].children[1],intro: `<div><strong>7:7 lorem ipsum</strong></div> ${_['resource link'][7]}`}]})
.start(); k0('link').style.overflow = 'visible';}

else if (l1 == 'present5'){
if (!localStorage.getItem('reaction7')){
k1('eta')[9].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('cloud'),intro: `<div><strong>0:7 search the cloud</strong></div> ${_['search the cloud'][0]}`},
{element: k0('cloud').children[3],intro: `<div><strong>1:7 lorem ipsum</strong></div> ${_['search the cloud'][1]}`},
{element: k0('cloud').children[2],intro: `<div><strong>2:7 lorem ipsum</strong></div> ${_['search the cloud'][2]}`},
{element: k0('cloud').children[2].children[0],intro: `<div><strong>3:7 lorem ipsum</strong></div> ${_['search the cloud'][3]}`},
{element: k0('cloud').children[2].children[1],intro: `<div><strong>4:7 lorem ipsum</strong></div> ${_['search the cloud'][4]}`},
{element: k0('cloud').children[4],intro: `<div><strong>5:7 lorem ipsum</strong></div> ${_['search the cloud'][5]}`},
{element: k0('cloud').children[4].children[0],intro: `<div><strong>6:7 lorem ipsum</strong></div> ${_['search the cloud'][6]}`},
{element: k0('cloud').children[4].children[1],intro: `<div><strong>7:7 lorem ipsum</strong></div> ${_['search the cloud'][7]}`}]})
.start(); k0('cloud').style.overflow = 'visible';}

else if (l1 == 'present6'){
if (!localStorage.getItem('reaction8')){
k1('eta')[10].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('file'),intro: `<div><strong>0:7 audiovisual file</strong></div> ${_['audiovisual file'][0]}`},
{element: k0('file').children[3],intro: `<div><strong>1:7 lorem ipsum</strong></div> ${_['audiovisual file'][1]}`},
{element: k0('file').children[2],intro: `<div><strong>2:7 lorem ipsum</strong></div> ${_['audiovisual file'][2]}`},
{element: k0('file').children[2].children[0],intro: `<div><strong>3:7 lorem ipsum</strong></div> ${_['audiovisual file'][3]}`},
{element: k0('file').children[2].children[1],intro: `<div><strong>4:7 lorem ipsum</strong></div> ${_['audiovisual file'][4]}`},
{element: k0('file').children[4],intro: `<div><strong>5:7 lorem ipsum</strong></div> ${_['audiovisual file'][5]}`},
{element: k0('file').children[4].children[0],intro: `<div><strong>6:7 lorem ipsum</strong></div> ${_['audiovisual file'][6]}`},
{element: k0('file').children[4].children[1],intro: `<div><strong>7:7 lorem ipsum</strong></div> ${_['audiovisual file'][7]}`}]})
.start(); k0('file').style.overflow = 'visible';}

else if (l1 == 'present7'){
if (!localStorage.getItem('reaction9')){
k1('eta')[12].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('cues'),intro: `<div><strong>0:6 dynamic cues</strong></div> ${_['dynamic cues'][0]}`},
{element: k0('cues').children[2].children[0],intro: `<div><strong>1:6 lorem ipsum</strong></div> ${_['dynamic cues'][1]}`},
{element: k0('cues').children[2].children[1],intro: `<div><strong>2:6 lorem ipsum</strong></div> ${_['dynamic cues'][2]}`},
{element: k0('cues').children[3].children[0],intro: `<div><strong>3:6 lorem ipsum</strong></div> ${_['dynamic cues'][3]}`},
{element: k0('cues').children[3].children[1],intro: `<div><strong>4:6 lorem ipsum</strong></div> ${_['dynamic cues'][4]}`}]})
.start(); k0('cues').style.overflow = 'visible';}

else if (l1 == 'present8'){
if (!localStorage.getItem('reaction10')){
k1('eta')[13].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('caption'),intro: `<div><strong>0:6 static caption</strong></div> ${_['static caption'][0]}`},
{element: k0('caption').children[2].children[0],intro: `<div><strong>1:6 lorem ipsum</strong></div> ${_['static caption'][1]}`},
{element: k0('caption').children[2].children[1],intro: `<div><strong>2:6 lorem ipsum</strong></div> ${_['static caption'][1]}`},
{element: k0('caption').children[3].children[0],intro: `<div><strong>3:6 lorem ipsum</strong></div> ${_['static caption'][1]}`},
{element: k0('caption').children[3].children[1],intro: `<div><strong>4:7 lorem ipsum</strong></div> ${_['static caption'][1]}`}]})
.start(); k0('caption').style.overflow = 'visible';}

else if (l1 == 'present9'){
if (!localStorage.getItem('reaction11')){
k1('eta')[14].click();}
l.setOptions({
'hidePrev': true,
'hideNext': true,
'showProgress': true,
'showStepNumbers': false,
steps: [{element: k0('meta0'),intro: `<strong>0:1 version cover</strong><br> ${_['version cover'][0]}`},
{element: k0('meta0').children[2],intro: `<strong>1:1</strong> ${_['version cover'][1]}`},
{element: k0('meta0').children[0],intro: `<div><strong>5:6 lorem ipsum</strong></div> ${_['dynamic cues'][5]}`},
{element: k0('meta0').children[0].children[2],intro: `<div><strong>6:6 lorem ipsum</strong></div> ${_['dynamic cues'][6]}`},
{element: k0('meta0').children[1],intro: `<div><strong>5:6 lorem ipsum</strong></div> ${_['static caption'][1]}`},
{element: k0('meta0').children[1].children[2],intro: `<div><strong>6:6 lorem ipsum</strong></div> ${_['static caption'][1]}`}]})
.start(); k0('meta0').style.overflow = 'visible';}


};});


});


});