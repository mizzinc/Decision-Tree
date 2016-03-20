/**


 __            __       __                  __                         __                     __    __                         __
 .--|  .-----.----|__.-----|__.-----.-----.    |  |_.----.-----.-----.    |  |--.--.--.    .-----|__.--|  .-----.----.---.-.----. |  |_.--.--.
 |  _  |  -__|  __|  |__ --|  |  _  |     |    |   _|   _|  -__|  -__|    |  _  |  |  |    |__ --|  |  _  |  -__|  __|  _  |   ___|   _|  |  |
 |_____|_____|____|__|_____|__|_____|__|__|    |____|__| |_____|_____|    |_____|___  |    |_____|__|_____|_____|____|___._|__||__|____||___/
 |_____|
 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
 ||||This is decision tree! A plugin for WordPress.  Find out more at http://sidecar.tv/decision_tree||||
 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

 **/

/**
 * Process the click on a choice and move to the next branch
 * @param {type} i
 * @returns {undefined}
 */
function process_question(dt_id, i) {

    var dtree_name = "dt_tree_" + dt_id;

    // derive first ID if not explicitly passed
    if (typeof i == "undefined") {
        i = window[dtree_name].start_ID;
    }
    i = parseInt(i);
    if (typeof window[dtree_name].history == "undefined") {
        window[dtree_name].history = [];
    }
    var history = window[dtree_name].history;
    jQuery("#decision_tree_area_" + dt_id).children().detach();
    option = '';
    if (window[dtree_name].data[i].subtext != undefined) {
        jQuery("#decision_tree_area_" + dt_id).append("<div id='#title_"
            + dt_id + "' class='dt_display_title'>" + window[dtree_name].title + "</div>");
    }

    option = '';

    if (window[dtree_name].data[i].type != 'answer') {
        jQuery("#decision_tree_area_" + dt_id).append("<div id='#the_question_"
            + dt_id + "' class='dt_display_question'>" + window[dtree_name].data[i].question + "</div>");

        if (window[dtree_name].data[i].subtext != undefined) {
            jQuery("#decision_tree_area_" + dt_id).append("<div id='#subtext_"
                + dt_id + "' class='dt_display_subtext'>" + window[dtree_name].data[i].subtext + "</div>");
        }
        for (j = 0; j < window[dtree_name].data[i].choices.length; j++) {
            option += '<div data-dtid="' + dt_id + '"  data-qid="' +
                window[dtree_name].data[i].choices[j].next +
                '" class=" dt_button dt_radio_choice" >';
            option += window[dtree_name].data[i].choices[j].choice;
            option += '</div><br>';
        }
        jQuery("#decision_tree_area_" + dt_id).append("<div id='dt_choice_set_" +
            dt_id + "'>" + option + "</div>");
        if (history.length) {
            jQuery("#decision_tree_area_" + dt_id).append('<div class="dt_button question-back"><i class="fa fa-arrow-left">Back</i></div><br>');
        }
    }
    else {
        //this is an answer
        if (window[dtree_name].data[i].textlink != undefined && window[dtree_name].data[i].textlink != "") {
            option += '<a href="' + window[dtree_name].data[i].textlink + '">';
            option += '<div id="radio_answer_' + dt_id + '" class="dt_radio_answer dt_button">';
            option += window[dtree_name].data[i].question;
            option += '</div><br>';
            option += '</a>';
        } else {
            option += '<div id="radio_answer_' + dt_id + '" class="dt_radio_answer_nolink dt_button">';
            option += window[dtree_name].data[i].question;
            option += '</div><br>';
        }

        option += '<div class="dt_button answer-restart" data-dtid="' + dt_id + '">';
        option += '<i class="fa fa-repeat"> '
        option += "Restart ";
        option += "</i>"
        option += '</div><br>';

        jQuery("#decision_tree_area_" + dt_id).append("<div id='#the_question_" +
            dt_id + "'>Your Answer:</div>");
        if (window[dtree_name].data[i].subtext != undefined) {
            jQuery("#decision_tree_area_" + dt_id).append("<div id='#subtext_"
                + dt_id + "' class='dt_display_subtext'>" + window[dtree_name].data[i].subtext + "</div>");
        }
        jQuery("#decision_tree_area_" + dt_id).append("<div id='dt_choice_set_" +
            dt_id + "'>" + option + "</div>");
        jQuery("#dt_choice_set_" + dt_id + " label").addClass("answer-success");

    }
    if (window[dtree_name].data[i].info != undefined) {
        jQuery("#decision_tree_area_" + dt_id).append("<div id='#info_"
            + dt_id + "' class='dt_display_info'>" + window[dtree_name].data[i].info + "</div>");
    }

    if (window[dtree_name].donated != "1") {
        jQuery("#decision_tree_area_" +
            dt_id).append("<div class='decision_tree_area_donated'><a \
                href='http://sidecar.tv/decision_tree'>Powered by Decision Tree</a></div>");
    }
    if (history.indexOf(i) == -1) {
        history.push(i);
    }

}

// TODO  $(this).data() seems different than window[dtree_name].data above and is confusing.
jQuery(document).ready(function ($) {
    jQuery(document).on("click", ".dt_radio_choice", function () {
        process_question($(this).data('dtid'), $(this).data('qid'));
    });
    jQuery(document).on("click", ".answer-restart", function () {
        var dtree_name = "dt_tree_" + $(this).data('dtid');
        window[dtree_name].history = [];
        process_question($(this).data('dtid'), window[dtree_name].start_ID);
    });
    jQuery(document).on("click", ".question-back", function () {
        var dtree_name = "dt_tree_" + $(this).closest('form').data('dtid');
        var history = window[dtree_name].history;
        history.pop();
        if (history.length == 1) {
            history.pop();
        }
        process_question($(this).closest('form').data('dtid'), history.length ? history[history.length - 1] : window[dtree_name].start_ID);
    });
});