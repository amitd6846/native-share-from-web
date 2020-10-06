$(document).ready(function() {
    var testData = {
        "STATUS": "SUCCESS",
        "limitedGroup": {
            "benifits": {
                "voice": "Unlimited IC & 200 OG MINSOG Calls (Local & to India)",
                "data": "2 GB Free",
                "sms": "25 SMS Free"
            },
            "countries": [
                "Phillipines",
                "Colombia",
                "Croatia",
                "Bangladesh",
                "Qatar",
                "South Korea",
                "Russia",
                "Japan",
                "Belgium",
                "Tanzania",
                "Argentina",
                "Canada",
                "Poland",
                "Switzerland",
                "Saudi Arabia",
                "Bulgaria",
                "Nigeria",
                "Latvia",
                "Denmark",
                "Finland",
                "Ghana",
                "Lithuania",
                "Egypt",
                "Oman",
                "Peru",
                "Sweden",
                "Fiji",
                "Luxembourg",
                "Vietnam",
                "Afghanistan",
                "Mauritius",
                "Kuwait",
                "Lesotho",
                "Dem. Republic of Congo",
                "Austria",
                "Iceland",
                "Taiwan",
                "Nepal",
                "Bahrain",
                "China",
                "Slovenia",
                "Kenya",
                "Mozambique",
                "Norway",
                "Cambodia",
                "Israel",
                "Slovakia",
                "South Africa",
                "Panama"
            ],
            "countryCount": 49
        },
        "unlimitedgroup": {
            "benifits": {
                "voice": "Unlimited IC & OG CallsOG Calls (Local & to India)",
                "data": "Unlimited",
                "sms": "Free SMS"
            },
            "countries": [
                "Germany",
                "Ireland",
                "Italy",
                "Turkey",
                "Hungary",
                "UAE",
                "Sri Lanka",
                "Netherlands",
                "Thailand",
                "Czech Republic",
                "Hong Kong",
                "Spain",
                "Indonesia",
                "New Zealand",
                "Malaysia",
                "Malta",
                "France",
                "Greece",
                "United Kingdom",
                "Singapore",
                "Portugal",
                "Romania",
                "Brazil",
                "Mexico",
                "Australia",
                "Macau",
                "Albania",
                "USA"
            ],
            "countryCount": 28
        }
    };
    var unCntry = testData['unlimitedgroup'];
    var liCntry = testData['limitedGroup'];
    console.log(unCntry);
    console.log(liCntry);

    $.ajax({
        url: "CountryMaster.json",
        type: 'GET',
        success: function(data) {
            var unLimitedGroup = data['unlimitedgroup'].countries.sort();
            var limitedGroup = data['limitedGroup'].countries.sort();
            var tempHTML = '';
            // FOR UnlimitedGroup
            for (i = 0; i < unLimitedGroup.length; i++) {
                var cntryName = unLimitedGroup[i].toLowerCase();
                str = cntryName.replace(/\s+/g, '-');
                $('.unLimitedGroup .cntryColumn').append('<div class="cntryNameFlag"><div class="cntryFlag"><img src="img/cms/' + str + '.png"></div><div class="cntryName" >' + cntryName + '</div></div>')
            }
            if ($(window).width() < 768) {
                for (var i = 1; i <= unLimitedGroup.length; i++) {
                    var cntryName = unLimitedGroup[i - 1];
                    var str = cntryName.toLowerCase().replace(/\s+/g, '-');
                    tempHTML += '<div class="cntryNameFlag"><div class="cntryFlag"><img src="img/cms/' + str + '.png"></div><div class="cntryName">' + cntryName + '</div></div>';

                    if (i % 8 == 0) {
                        $('.unLimitedSlider').append('<div class="cntryCol_1 cntryColumn">' + tempHTML + '</div>');
                        tempHTML = "";
                    }

                    if (i == unLimitedGroup.length) {
                        $('.unLimitedSlider').append('<div class="cntryCol_1 cntryColumn">' + tempHTML + '</div>');
                    }
                }
                $('.unLimitedSlider').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: false,
                    draggable: true,
                    touchMove: true,
                    swipe: true,
                    accessibility: false,
                    dots: false,
                    arrows: false

                });
            } else {
                for (var i = 1; i <= unLimitedGroup.length; i++) {
                    var cntryName = unLimitedGroup[i - 1];
                    tempHTML += '<div class="cntryNameFlag"><div class="cntryFlag"><img src="img/cms/' + cntryName + '.png"></div><div class="cntryName">' + cntryName + '</div></div>';

                    if (i % 16 == 0) {
                        $('.unLimitedSlider').append('<div class="cntryCol_1 cntryColumn">' + tempHTML + '</div>');
                        tempHTML = "";
                    }

                    if (i == unLimitedGroup.length) {
                        $('.unLimitedSlider').append('<div class="cntryCol_1 cntryColumn">' + tempHTML + '</div>');
                    }
                }
                $('.unLimitedSlider').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: false,
                    draggable: false,
                    touchMove: true,
                    swipe: false,
                    accessibility: false,
                    dots: true,
                });
            }


            // FOR limitedGroup
            for (i = 0; i < limitedGroup.length; i++) {
                var cntryName = limitedGroup[i];
                str = cntryName.replace(/\s+/g, '-');
                $('.limitedGroup .cntryColumn').append('<div class="cntryNameFlag"><div class="cntryFlag"><img src="img/cms/' + str + '.png"></div><div class="cntryName" >' + cntryName + '</div></div>')
            }
            for (var i = 1; i <= limitedGroup.length; i++) {
                var cntryName = limitedGroup[i - 1];
                tempHTML += '<div class="cntryNameFlag"><div class="cntryFlag"><img src="img/cms/' + cntryName + '.png"></div><div class="cntryName">' + cntryName + '</div></div>';
                if (i % 16 == 0) {
                    $('.limitedSlider').append('<div class="cntryCol_1 cntryColumn">' + tempHTML + '</div>');
                    tempHTML = "";
                }
                if (i == limitedGroup.length) {
                    $('.limitedSlider').append('<div class="cntryCol_1 cntryColumn">' + tempHTML + '</div>');
                }
            }
            $('.limitedSlider').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
                adaptiveWidth: false,
                draggable: false,
                touchMove: true,
                swipe: false,
                accessibility: false,
                dots: true,
            });

        },
        error: function(err) {
            $('.cntryColumn').append('<div class="cntryNameFlag"><div class="cntryFlag"><img src="img/indian-flag.png"></div><div class="cntryName">No Result Found</div></div>')
        }
    });
    // CROSS ICON CLICK EVENT
    $('.crossIcon').click(function() {
        $('.cntrySearchInput').val('').focus().removeClass('hasValue');
        $(".cntryListSlick .cntryNameFlag").removeClass('d-none');
        $('.cntryListSlick.unLimitedGroup').addClass('d-none');
        $('.newSlder').removeClass('hasValue');
    });
    $(".cntrySearchInput").on("keypress", function(event) {
        // CAHR VALIDATION
        var stuffToAllow = /[A-Za-z ]/g;
        var key = String.fromCharCode(event.which);
        if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || stuffToAllow.test(key)) {
            return true;
        }
        return false;
    });
    $(".cntrySearchInput").on("keyup", function(e) {
        // SEARCH ICON AND CROSS ICON
        if ($(this).val()) {
            $(this).addClass('hasValue');
            $('.newSlder').addClass('hasValue');
            $('.cntryListSlick.unLimitedGroup').removeClass('d-none');
        } else {
            $(this).removeClass('hasValue');
            $('.cntryListSlick.unLimitedGroup').addClass('d-none');
            $('.newSlder').removeClass('hasValue');
        }
        // FILTER
        var value = $(this).val();
        var x = value.length;
        var regex = new RegExp("^" + value, "i")
        var count = 0;
        $(".cntryListSlick .cntryNameFlag").each(function() {
            if (count == 1) {
                console.log('TEST');
            }
            if ($('.cntryName', this).html().match(regex)) {
                $(this).removeClass('d-none');
            } else {
                $(this).addClass('d-none');
            }
            count++
        });
    });
});