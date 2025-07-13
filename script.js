function editorSelect() {
  window.editor = document.body.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
  window.editor2 = document.body.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
}
editorSelect();
window.onload = function() {
  setTimeout("window.editor.focus();document.execCommand('insertImage',false,'http://i.chzbgr.com/full/6514574848/h0B919A6C/untitled');window.editor2.focus();document.execCommand('insertImage',false,'http://i.chzbgr.com/full/6514574848/h0B919A6C/untitled');",1);
  document.onkeydown = function() { return false; };
  document.onkeypress = function() { return false; };
  document.onkeyup = function() { return false; };
  document.onpaste = function() { return false; };
  document.oncut = function() { return false; };
  document.oncopy = function() { return false; };
  document.onmousedown = function() { return false; };
  document.onmouseup = function() { return false; };
  document.onmousemove = function() { return false; };
  document.oncontextmenu = function() { return false; };
  document.oninput = function() { return false; };
  document.ondragstart = function() { return false; };
  document.onselectstart = function() { return false; };
  window.onkeydown = document.onkeydown;
  window.onkeypress = document.onkeypress;
  window.onkeyup = document.onkeyup;
  window.onpaste = document.onpaste;
  window.oncut = document.oncut;
  window.oncopy = document.oncopy;
  window.onmousedown = document.onmousedown;
  window.onmouseup = document.onmouseup;
  window.onmousemove = document.onmousemove;
  window.oncontextmenu = document.oncontextmenu;
  window.oninput = document.oninput;
  window.ondragstart = document.ondragstart;
  window.onselectstart = document.onselectstart;
};
