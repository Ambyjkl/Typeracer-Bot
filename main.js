// ==UserScript==
// @name    Typeracer Bot
// @namespace Violentmonkey Scripts
// @description A bot that makes you win every time in TypeRacer
// @author	Ambyjkl
// @version  0.5
// @include http*://play.typeracer.com*
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant
// ==/UserScript==

function main() {
    var allText = jQuery("div.nonHideableWords").text();
    var words = allText.split(" ");
    var i = 0;
    console.log(words[i]);
    for(var j = 0; j < words[i].length; j++) {
        $("input.txtInput").val($("input.txtInput").val() + words[i][j]);
    }
    $("input.txtInput").keypress(function() {
        if (++i < words.length){
            for(var j = 0; j < words[i].length; j++) {
                $("input.txtInput").val($("input.txtInput").val() + words[i][j]);
            }
        }
    });

}

$(document).ready(function(){
    $("input.txtInput").ready(function(){
        console.log("Input ready");
        $("input.txtInput").click(function() {
            console.log("Calling main");
            main();
        });
    });
});
