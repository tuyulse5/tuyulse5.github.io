    $('head').append('<link rel="stylesheet" type="text/css" href="https://tuyulse5.github.io/styles.css">');
    $(document).ready(function () {
            $('body').addClass('cover');
    });
    jQuery(function ($) {
            var flag = 0;
            $('.cover').click(function () {
                if (flag < 2)    // jika di klik kurang dari 2 kali
                {
                    window.open("https://pubfruitlesswording.com/fy755du4v?key=7b2683f6e5e3e859cf2d2483d46f2e55");
                } else { // jika di klik lebih dari 2 kali akan redirect ke url home
                    $("body").removeClass("cover");
                    document.location.href="/";
                }
                flag++;
            });

    });
