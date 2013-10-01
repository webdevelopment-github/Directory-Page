

$(document).ready(function () {

    //changeShowHideIconNew('id-show-student-list-1', 'Student List');

});

/*  this is a case when button and collapse panel in different places / panel. and you need to call it explicitly in html code
1st Param ~ this function needs id of the collapse able panel   
2nd Param ~ custom text show (list) - etc
*/

function changeShowHideIconNew(thisid, IdOfCollapsePanel, OptionalcustomText) {
    //jQuery(".ya-read-more-less").click(function(){
    // debugger;
    //var classes = jQuery(this).parent().find(".collapse").attr("class");
    var classes = $('#' + IdOfCollapsePanel).attr("class");
    var label = (typeof OptionalcustomText === "undefined") ? "" : OptionalcustomText;
    if (classes.indexOf("in") >= 0) {
        jQuery(thisid).find(".ya-show-link-icon").attr("data-icon", "E");
        jQuery(thisid).find(".ya-label").html("More " + label);
        showSearchButton(thisid); // this is directory page specific - to hide top panel search button
    }
    else {

        jQuery(thisid).find(".ya-show-link-icon").attr("data-icon", "C");
        jQuery(thisid).find(".ya-label").html("Fewer " + label);
        hideSearchButton(thisid); // this is directory page specific - to hide top panel search button
    }

    //});
}

function hideSearchButton(thisid) {
    if (jQuery(thisid).attr('id') == "hide-top-search-teacher") {
        document.getElementById("hide-me-search-teacher").style.display = 'none';
    }
    if (jQuery(thisid).attr('id') == "hide-top-search-school") {
        document.getElementById("hide-me-search-school").style.display = 'none';
    }
    
}
function showSearchButton(thisid) {
    if (jQuery(thisid).attr('id') == "hide-top-search-teacher") {
        document.getElementById("hide-me-search-teacher").style.display = 'block';
    }
    if (jQuery(thisid).attr('id') == "hide-top-search-school") {
        document.getElementById("hide-me-search-school").style.display = 'block';
    }

}