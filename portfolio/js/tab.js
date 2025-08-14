$(function () {
    $('.tab-button').on('click', function () {
        const tabId = $(this).data('tab');

        $('.tab-button').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').removeClass('active');
        $('#' + tabId).addClass('active');

        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });
    const hash = window.location.hash;
    if (hash) {
        const tabId = hash.replace('#', '');
        const $targetButton = $('.tab-button[data-tab="' + tabId + '"]');
        if ($targetButton.length) {
            $targetButton.trigger('click');
        }
    }
});