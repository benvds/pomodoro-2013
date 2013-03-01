/* Author:

*/

jQuery(function($){
    var $siteNav = $('.site-nav'),
        $menu = $siteNav.find('ul');

    $siteNav.on('click', function() {
        console.log('sitenav clicked');
        $menu.toggleClass('active');
    });
});




