"use strict";var frontinvale=function(){var e=function(){setTimeout(function(){document.body.classList.remove("loading")},1e3)},n=function(){document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].addEventListener("click",function(e){document.getElementById("menu-control").checked=!1})},t=function(){var e=document.getElementById("iframe-box");e&&(e.addEventListener("click",function(){document.getElementById("iframe").style.pointerEvents="auto"},!1),e.addEventListener("mouseleave",function(){document.getElementById("iframe").style.pointerEvents="none"},!1))};return{init:function(){e(),t(),n()}}}();window.onload=frontinvale.init;