function setKeyboardBounded(state) {
  //ignore keypress event. it should be handled by broser only.
  if (state){
    document.onkeydown = function(evt) {hanleDown(getId(evt));};
    document.onkeyup = function(evt) {hanleUp(getId(evt));};
  } else {
    document.onkeydown=null;
    document.onkeyup=null;
  }
}

function getId(evt) {
  evt = evt || window.event;
  var code = evt.keyCode;
  if ( (evt.location === 2 || evt.keyLocation === 2)
    && code!==92) { //exceprion for win : r_win=92::1 l_win=91::2
    code=-code;
  }
  return code;
}

function init(id) {
  if (id===-1){
    alert('Only ane type of keyboard supported.')
  }
  //remove init block;
  var initBlock =  document.getElementById('init_block')
  initBlock.parentNode.removeChild(initBlock)


  setBackground(getSrc(id));
  var btns = getBtns(id);
  for (i = 0; i < btns.length; i++) {
    initBtn(btns[i]);
  }
  //enable textarea and set keyboard works only for textarea.
  var textArea = document.getElementById("textarea");
  textArea.removeAttribute('hidden');

  //window can lost focus and some events will be lost. reset keyboard to default state
  textArea.onfocus=function () {setKeyboardBounded(true); resetKeyboardState()};
  textArea.onblur= function () {setKeyboardBounded(false)};
}

function resetKeyboardState() {
  var btns = document.querySelectorAll('#keyboard div');
  for (var i = 0; i < btns.length; i++) {
    btns[i].setAttribute('class', 'btn_default');
  }
}

function setBackground(map) {
  var style='background-image: url("' + map.src + '"); width: ' +  map.w + 'px; height: ' +  map.h + 'px;';
  document.getElementById('keyboard').setAttribute('style', style);
}

function hanleDown(id) {
  document.getElementById(id).className = "btn_pressed";
}

function handlePress(id) {
  var appendTxt = getChar(id, false, 'en');
  if (appendTxt!==undefined) {
    document.getElementById("textarea").value +=appendTxt;
  }
}

function hanleUp(id) {
  document.getElementById(id).className = "btn_default";
}

function initBtn(map) {
  var rawHtml='<div style = "position:absolute; left: ' + map.x + 'px; top: ' + map.y + 'px; height: ' + map.w + 'px; width: ' + map.h + 'px;" ' +
    'onclick = "handlePress(' + map.code + ')" id ="' + map.code + '" ' +
    'onmousedown = "hanleDown(' + map.code + ')" id ="' + map.code + '" ' +
    'onmouseout = "hanleUp(' + map.code + ')" id ="' + map.code + '" ' +
    'onmouseup="hanleUp(' + map.code + ')"></div>';
  document.getElementById('keyboard').innerHTML += rawHtml;
}

class btnMap {
  constructor(code, x, y, w, h) {
    this.code=code;
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
  }
}

class backgroundMap{
  constructor(src, w, h) {
    this.src=src;
    this.w=w;
    this.h=h;
  }
}

function getSrc(id) {
  return new backgroundMap("img/keyboard.jpg", 800, 280)
}

function getBtns(id) {
  // only one type supported
  var wh = 33;
  var l_pad = 18;
  var line0=35;
  var line1=80;
  var line2=114;
  var line3=148;
  var line4=182;
  var line5=216;
  var result = [];
  //=================line1==========
  result.push(new btnMap(27,l_pad,line0,wh,wh));

  result.push(new btnMap(112,86,line0,wh,wh));
  result.push(new btnMap(113,121,line0,wh,wh));
  result.push(new btnMap(114,155,line0,wh,wh));
  result.push(new btnMap(115,190,line0,wh,wh));

  result.push(new btnMap(116,240,line0,wh,wh));
  result.push(new btnMap(117,275,line0,wh,wh));
  result.push(new btnMap(118,309,line0,wh,wh));
  result.push(new btnMap(119,344,line0,wh,wh));

  result.push(new btnMap(120,393,line0,wh,wh));
  result.push(new btnMap(121,428,line0,wh,wh));
  result.push(new btnMap(122,462,line0,wh,wh));
  result.push(new btnMap(123,497,line0,wh,wh));

  //=================line1==========
  result.push(new btnMap(192,l_pad,line1,wh,wh));
  result.push(new btnMap(49,l_pad+34,line1,wh,wh));
  result.push(new btnMap(50,l_pad+34*2,line1,wh,wh));
  result.push(new btnMap(51,l_pad+34*3,line1,wh,wh));
  result.push(new btnMap(52,l_pad+34*4,line1,wh,wh));
  result.push(new btnMap(53,l_pad+34*5,line1,wh,wh));
  result.push(new btnMap(54,l_pad+34*6,line1,wh,wh));
  result.push(new btnMap(55,l_pad+34*7,line1,wh,wh));
  result.push(new btnMap(56,l_pad+34*8,line1,wh,wh));
  result.push(new btnMap(57,l_pad+34*9,line1,wh,wh));
  result.push(new btnMap(48,l_pad+34*10,line1,wh,wh));
  result.push(new btnMap(189,l_pad+34*11,line1,wh,wh));
  result.push(new btnMap(187,l_pad+34*12,line1,wh,wh));
  result.push(new btnMap(8,l_pad+34*13,line1,wh,65));

  //=================line2==========
  result.push(new btnMap(9,l_pad,line2,wh,50));
  result.push(new btnMap(81,70,line2,wh,wh));
  result.push(new btnMap(87,70+34,line2,wh,wh));
  result.push(new btnMap(69,70+34*2,line2,wh,wh));
  result.push(new btnMap(82,70+34*3,line2,wh,wh));
  result.push(new btnMap(84,70+34*4,line2,wh,wh));
  result.push(new btnMap(89,70+34*5,line2,wh,wh));
  result.push(new btnMap(85,70+34*6,line2,wh,wh));
  result.push(new btnMap(73,70+34*7,line2,wh,wh));
  result.push(new btnMap(79,70+34*8,line2,wh,wh));
  result.push(new btnMap(80,70+34*9,line2,wh,wh));
  result.push(new btnMap(219,70+34*10,line2,wh,wh));
  result.push(new btnMap(221,70+34*11,line2,wh,wh));


  //=================line3==========
  result.push(new btnMap(20,l_pad,line3,wh,60));
  result.push(new btnMap(65,80,line3,wh,wh));
  result.push(new btnMap(83,80+34,line3,wh,wh));
  result.push(new btnMap(68,80+34*2,line3,wh,wh));
  result.push(new btnMap(70,80+34*3,line3,wh,wh));
  result.push(new btnMap(71,80+34*4,line3,wh,wh));
  result.push(new btnMap(72,80+34*5,line3,wh,wh));
  result.push(new btnMap(74,80+34*6,line3,wh,wh));
  result.push(new btnMap(75,80+34*7,line3,wh,wh));
  result.push(new btnMap(76,80+34*8,line3,wh,wh));
  result.push(new btnMap(186,80+34*9,line3,wh,wh));
  result.push(new btnMap(222,80+34*10,line3,wh,wh));
  result.push(new btnMap(220,80+34*11,line3,wh,wh));

  //=================line4==========
  result.push(new btnMap(16,l_pad,line4,wh,75));
  result.push(new btnMap(90,95,line4,wh,wh));
  result.push(new btnMap(88,95+34,line4,wh,wh));
  result.push(new btnMap(67,95+34*2,line4,wh,wh));
  result.push(new btnMap(86,95+34*3,line4,wh,wh));
  result.push(new btnMap(66,95+34*4,line4,wh,wh));
  result.push(new btnMap(78,95+34*5,line4,wh,wh));
  result.push(new btnMap(77,95+34*6,line4,wh,wh));
  result.push(new btnMap(188,95+34*7,line4,wh,wh));
  result.push(new btnMap(190,95+34*8,line4,wh,wh));
  result.push(new btnMap(191,95+34*9,line4,wh,wh));
  result.push(new btnMap(-16,95+34*10,line4,wh,90)); //special negative value for keycode doplicates

  //=================line5==========
  result.push(new btnMap(17,l_pad,line5,wh,43));
  result.push(new btnMap(91,63,line5,wh,39));
  result.push(new btnMap(18,103,line5,wh,39));
  result.push(new btnMap(32,146,line5,wh,210));
  result.push(new btnMap(-18,361,line5,wh,39));  //special negative value for keycode doplicates
  result.push(new btnMap(92,406,line5,wh,39));
  result.push(new btnMap(93, 446,line5,wh,39));
  result.push(new btnMap(-17,489,line5,wh,39));  //special negative value for keycode doplicates

  //=================special==========
  result.push(new btnMap(13,489,line2,66,38));

  return result;
}

function getChar(id, shift, lang) {
  if (lang!=='en'){
    alert('Only english layout currently supported');
    return
  }

  if (id>=65 && id<=90){ //letter keys
    if(shift){
      return String.fromCharCode(id).toUpperCase();
    }
    else return String.fromCharCode(id).toLowerCase();
  }

  if (id===32) {
    return ' ';
  }
  alert('Only limited keyset currently supported');
}
