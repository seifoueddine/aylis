//= require jquery
//= require bootstrap
//= require parallax.min.js

function tcook(){
    $.ajax({
        url: '/particle/toggle',
        type: 'get'
    });
}