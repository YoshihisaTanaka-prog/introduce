function showHide(id){
  if( $(id).attr("style") == ""){
    $(id).attr("style", "display: none;");
  } else {
    $(id).attr("style", "");
  }
}

function showHideMaking(){
  showHide("#making");
}

function showHideStack(){
  showHide("#stack");
}

function showHidePCInfo(){
  showHide("#pc-info");
}

function showHidePen(){
  showHide("#pen");
}

function setIframe(url){
  $("#iframe").attr("src", url);
}