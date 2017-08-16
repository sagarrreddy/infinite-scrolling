/**
 * Created by Sagar Reddy on 8/15/2017.
 */
"use strict";
$(document).ready(function() {

    var url_path = 'https://rio.quintype.io/api/v1/stories';
    var url_path2 = 'https://rio.quintype.io/api/v1/stories?limit=500&offset=20';

    content(url_path);
    var processing;
    var update;
    var img_url = 'https://quintype-01.imgix.net/';
    var cpt = -1;
    var x = 3;

    function nextItem() {

        {
            if (cpt < update.length - 1) {
                cpt++;

            } else {
                content(url_path2);
                if (cpt > update.length - 1) {
                    $('.add_element').append('<div class="row"><div class="col-md-12"><p>Hey thats it for the day! Many more stories are on the way! Please do visit again to explore more stories.</p></div>')
                }
            }
            console.log(update[cpt].headline);
            $('.add_element').append('<div class="row"><div class="col-md-12"><div class="row m-t-40"><div class="col-xs-4"> <img src="' + img_url + '' + update[cpt]['hero-image-s3-key'] + '" class="img-responsive center-block"> </div> <div class="col-xs-8"> <p class="font_bold font14 color_black default_ls head_left_underline color_pink story_font text-uppercase">' + update[cpt].sections[0]['name'] + '</p> <h2 class="story_heading">' + update[cpt].headline + '</h2> <p class="color_81 m-b-0 story_author">' + update[cpt]['author-name'] + '</p> <span class="font14 story_update">Posted 15 min ago</span> </div> </div> </div> </div>');
            $('.add_element').append('<div class="row"><div class="col-md-12"><div class="row m-t-40"><div class="col-xs-4"> <img src="' + img_url + '' + update[cpt + 1]['hero-image-s3-key'] + '" class="img-responsive center-block"> </div> <div class="col-xs-8"> <p class="font_bold font14 color_black default_ls head_left_underline color_pink story_font text-uppercase">' + update[cpt = (cpt + 1)].sections[0]['name'] + '</p> <h2 class="story_heading">' + update[cpt = (cpt + 1)].headline + '</h2> <p class="color_81 m-b-0 story_author">' + update[cpt = (cpt + 1)]['author-name'] + '</p> <span class="font14 story_update">Posted 15 min ago</span> </div> </div> </div> </div>');
            $('.add_element').append('<div class="row"><div class="col-md-12"><div class="row m-t-40"><div class="col-xs-4"> <img src="' + img_url + '' + update[cpt + 2]['hero-image-s3-key'] + '" class="img-responsive center-block"> </div> <div class="col-xs-8"> <p class="font_bold font14 color_black default_ls head_left_underline color_pink story_font text-uppercase">' + update[cpt = (cpt + 2)].sections[0]['name'] + '</p> <h2 class="story_heading">' + update[cpt = (cpt + 2)].headline + '</h2> <p class="color_81 m-b-0 story_author">' + update[cpt = (cpt + 2)]['author-name'] + '</p> <span class="font14 story_update">Posted 15 min ago</span> </div> </div> </div> </div>');

        }

    }

    function content(url) {

        $.ajax({
            type: 'GET',
            url: url,
            "async": true,
            "crossDomain": true,
            data: {
                format: 'json'
            },
            error: function(data) {
                console.log(data);
            },
            dataType: 'json',
            success: function(data) {

                update = data.stories;

            }

        });
    }

    document.addEventListener('scroll', function(event) {
        if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
            nextItem();
        }
    });

});