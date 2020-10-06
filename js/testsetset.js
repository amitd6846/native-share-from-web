var utag_data = new Object();
$(document).ready(function() {
    var server_name = window.location.hostname;
    window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
    window.utag_cfg_ovrd.noview = false;
    utag_data = {
        page_name: "International Roaming: Country Selection", //pagename
        page_channel: "IROAM", //channel
        page_server: server_name, //server
        page_type: "Transactional", //prop5
        visitor_language: "EN", //prop6
        visitor_login_status: "Not Logged In", //prop7
        visitor_type: "Consumer", //prop8
        page_master_tab: "Home", //prop20
        page_site_section_lvl_2: "Home:International Roaming", //prop21
        page_site_section_lvl_3: "Home:International Roaming:Country Selection", //prop22
    }
    $('body').on('click', '#ui-id-2 li', function() {
        $('.close_btn').hide();
        $('.search_btn').show();
    });
    $('html, body').animate({ scrollTop: 0 }, 10);
    $('#tags').on('keyup', function(e) {
        listCount = 0;
        if ($(this).val().length === 0 || listCount === 0) {
            $('.backend').attr('placeholder', '');

        }

        /*if (e.which == 13) {
             if (selectedCountriesArray.length < 5 && selectedCountriesArray.indexOf($(this).text()) == -1) {
                 selectedCountriesArray.push($(this).text().trim());
                 var $chip = '<div class="chip selectedlistchip" id="' + $(this).find('button').attr('id') + '">' + $(this).val() + '<span class="dropdownclosebtn hide"><img src="/content/dam/vodafoneideadigital/ir/country-tiles-images/shape.svg"></span>';
                 $(".selectedCountryChips").append($chip);
                 checkEmptyDiv();
             }
         }*/


    });

    $("body").on("click", ".dropdownclosebtn", function() {

        $(".fiveCountryselectionError").addClass("d-none");
        $(".selectedCountry p").removeClass("d-none");
        $(".staticChips").removeClass("d-none");
        $("#searchFilterIr").removeClass("d-none");

    });

    $("#tags").on("keypress", function(e) {
        if ((e.which === 32 || e.which === 46) && !this.value.length) {
            $('.bootLabel').hide();
            e.preventDefault();
        }
    });

    $('#tags').on('input', function(e) {
        if ($(this).val().length == 0) {
            $('.bootLabel').hide();
            $(".close_btn").hide();
            $(".search_btn").show();
            $(".chooseBtn").removeClass("marginTopError");
            $("#tags").parent().removeClass("invalidBorderCountry");
            $(".countrynotFound").addClass("d-none");
        } else {
            $('.bootLabel').show();
            $(".close_btn").show();
            $(".search_btn").hide();

        }


    });

    function onDivShow() {
        if ($('#ui-id-2').is(':empty')) {
            $('#ui-id-2').scrollTop($('#ui-id-2 li:nth-child(0)').position().top);

            return false;
        }

        return false;
    }

    $('#tags').click(function(e) {
        if ($(window).width() < 768) {
            $('html, body').animate({ scrollTop: 0 }, 10);
        }
        $('.popularCountryInput').addClass('remove_margin');
        if (!$('.selectedCountryChips').is(':empty')) {
            $('.whiteBox').addClass('animate_up');
        }

    });

    $('#tags').blur(function(e) {
        if (!$('.selectedCountryChips').is(':empty')) {
            $('.whiteBox').removeClass('animate_up');
            // $(this).val('');
            $('.bootLabel').hide();

            //$("#tags").parent().removeClass("invalidBorderCountry");
            //$(".countrynotFound").addClass("d-none");
            //$(".bootLabel").text($("#tags").prop("placeholder"));
        }
        $('.backend').attr('placeholder', '');



    });

    $('body').on('mousedown', 'p.close_btn', function() {

        $(".countrynotFound").addClass("d-none");
        $(".input_div").removeClass("invalidBorderCountry");
        $('.bootLabel').hide();
        $('#tags').val('');

        //$('#tags').focus();
        $(".chooseBtn").removeClass("marginTopError");
        $(".popularCountryInput").removeClass("remove_margin");
        $('.backend').attr('placeholder', '');
        $(".close_btn").hide();
        $(".search_btn").show();

    }).on('click', 'p.close_btn', function() {
        $('#tags').val('');
        //$('#tags').focus();
        $(".chooseBtn").removeClass("marginTopError");
        $(".popularCountryInput").removeClass("remove_margin");
        $('.backend').attr('placeholder', '');
        $(".close_btn").hide();
        $(".search_btn").show();
        $(".countrynotFound").addClass("d-none");
        $(".input_div").removeClass("invalidBorderCountry");
        $('.bootLabel').hide();
    });

    $('body').on('click', '.ui-menu li', function() {
        $('.whiteBox').addClass('animate_up');
        var dataCountryChipsSelected = $('.selectedCountryChips').find(".chip").length;
        if (dataCountryChipsSelected > 0) {
            $('.whiteBox').removeClass('animate_up');
        }
        if (dataCountryChipsSelected == 0) {
            $('.whiteBox').removeClass('animate_up');
        }
        $('.bootLabel').hide();

        if (selectedCountriesArray.length < 5) {
            //selectedCountriesArray.push($(this).text().trim());
            $(this).addClass("selected");


            var displayName = $(this).text().trim();
            if (displayName.indexOf(":")) {
                displayName = displayName.substring(displayName.indexOf(":") + 1);
            }
            if (displayName.indexOf(",")) {
                displayName = displayName.substring(displayName.indexOf(",") + 1);
            }
            if (!selectedCountriesArray.includes(displayName.trim().toLowerCase())) {
                selectedCountriesArray.push(displayName.trim().toLowerCase());

                var $chip = '<div class="chip selectedlistchip ' + $(this).find('button').attr('id') + '" id="' + $(this).text() + '" data-wcs="' + displayName + '">' + displayName + '<span class="dropdownclosebtn hide"><img src="/content/dam/vodafoneideadigital/ir/country-tiles-images/shape.svg"></span></div>';
                $(".selectedCountryChips").append($chip);
                var staticchips = $(".staticChips .chip");
                for (var i = 0; i < staticchips.length; i++) {
                    if (staticchips[i].title.toLowerCase() == $(this).text().toLowerCase())
                        $("#" + staticchips[i].id).hide();
                }
            } else {
                var staticchips = $(".staticChips .chip");
                console.log("hide chips code");
                for (var i = 0; i < staticchips.length; i++) {
                    if (staticchips[i].title.toLowerCase() == $(this).text().toLowerCase())
                    //$(".staticChips").find("#" + staticchips[i].id).hide();
                        staticchips.get(i).hidden = true;
                }
            }
            if ($(window).width() > 1024) {
                $("#desktopImage").attr("src", countryimgdescauth);
            } else if (768 > $(window).width() > 480) {
                $("#tabletImage").attr("src", countryimgtabauth);
            } else if ($(window).width() < 480) {
                $("#mobileImage").attr("src", countryimgmobauth);
            }
            $(".chooseBtn").prop("disabled", false);
            /*if(typeof utag !== "undefined"){
            utag.link({'Custom_Links': 'International Roaming: Choose your travel duration - Country Search Select'});
            }*/
            checkEmptyDiv();

        }
        if (selectedCountriesArray.length == 5) {

            $(".fiveCountryselectionError").removeClass("d-none");
            $(".selectedCountry p").addClass("d-none");
            $(".selectedCountry p").first().removeClass("d-none");
            $(".staticChips").addClass("d-none");
            $("#searchFilterIr").addClass("d-none");
            $(".popularCountryInput").removeClass("remove_margin");
            $("#tags").blur();
        }


        $('#tags').val('');
        $('.backend').attr('placeholder', '');
        //console.log("arr:::::" + selectedCountriesArray.toString());
    });


    // function Validate(evt) {
    //     var isValid = false;
    //     var regex = /^([\s\.]?[a-zA-Z]+)+$/;
    //     isValid = regex.test($("#" + evt).val());
    //     return isValid;
    // }

    function checkEmptyDiv() {
        if ($('.selectedCountryChips').is(':empty')) {
            //console.log('empty');
            $(".selectedCountry p").hide();
            $(".chooseBtn").prop("disabled", true);
        } else {
            //console.log('not_empty');
            $(".selectedCountry p").show();
            $(".chooseBtn").prop("disabled", false);
        }
        if (selectedCountriesArray.length >= 1) {
            $('.popularCountryInput>p').addClass('m_d_none');
            $('.whiteBox .form-group').addClass('m_remove');
        } else {
            $('.popularCountryInput>p').removeClass('m_d_none');
            $('.whiteBox .form-group').removeClass('m_remove');
        }
        if (selectedCountriesArray.length > 1) {
            $(".selectedCountry p:first-child b").text("destinations");

        } else {
            $(".selectedCountry p:first-child b").text("destination");
        }
        if (selectedCountriesArray.length > 1) {
            $(".selectedCountry p:first-child b").text("destinations");

        } else {
            $(".selectedCountry p:first-child b").text("destination");
        }
        if (selectedCountriesArray.length >= 1) {
            $('.popularCountryInput>p').addClass('m_d_none');
            $('.whiteBox .form-group').addClass('m_remove');
        } else {
            $('.popularCountryInput>p').removeClass('m_d_none');
            $('.whiteBox .form-group').removeClass('m_remove');
        }


    }



    $('#tags').on('input', function(e) {
        var key = e.which || this.value.substr(0).charCodeAt(0);
        var inputText = $(this).val();
        var resultText = inputText.replace(/[^a-zA-Z .]/g, '');
        if (resultText == "") {
            $('.bootLabel').hide();
            $(".close_btn").hide();
            $(".search_btn").show();
        }
        $(this).val(resultText);
    });

    function countryList(request) {
        $.ajax({
            url: "/content/dam/vodafoneideadigital/ir/countries/countryList",
            type: 'GET',
            success: function(data) {
                var countryArray = [];
                var displaycityArray = [];
                var countryaliasArray = [];
                var data = JSON.parse(data);
                $.each(data, function(index, indexdata) {
                    // console.log(indexdata.value);                            
                    var cname = indexdata.countryName;
                    var countryalias = indexdata.countryAlias;
                    var citynameArray = [];
                    var citynameArray = indexdata.city;
                    //cityoriginalarray=cityoriginalarray.replace("[", "").replace("]", "").trim();
                    //citynameArray = cityoriginalarray.split(",");
                    var arrayLength = citynameArray.length;
                    $.each(citynameArray, function(index, value) {
                        displaycityArray.push(value.trim() + ", " + cname);
                    });
                    countryArray.push(cname);
                    if (countryalias != "null") {

                        $.each(countryalias, function(index, value) {
                            countryaliasArray.push(value.trim() + ":" + cname);
                        });

                    }
                });
                renderData(countryArray, countryaliasArray, displaycityArray);
            },
            error: function(err) {}
        });
    }
    // if (pv.match("^" + cv))
    function renderData(countryListData, countryaliasData, searchcityData) {
        var sortedcountrylist = countryListData.sort();
        var sortedcountryaliaslist = countryaliasData.sort();
        var sortedcitylist = searchcityData.sort();

        var countryaliasdisplayed = [];
        var combinelistalias = sortedcountrylist.concat(sortedcountryaliaslist);
        var combineList = combinelistalias.concat(sortedcitylist);

        $("#tags").autocomplete({
            source: function(req, response) {
                countryaliasdisplayed = [];
                // console.log('start');
                var re = $.ui.autocomplete.escapeRegex(req.term);
                var matcher = new RegExp("^" + re, "i");
                var flag = 0;
                response($.grep(combineList, function(item) {
                    if (matcher.test(item)) {
                        flag = 1;
                        $("#tags").parent().removeClass("invalidBorderCountry");
                        $(".countrynotFound").addClass("d-none");
                        $(".chooseBtn").removeClass("marginTopError");
                        $(".bootLabel").text($("#tags").prop("placeholder"));
                    }
                    return matcher.test(item);
                }));
                if (flag == 0) {


                    $("#tags").parent().addClass("invalidBorderCountry");
                    $(".countrynotFound").removeClass("d-none");
                    $(".chooseBtn").addClass("marginTopError");
                    $(".bootLabel").text($("#bootLabelErrorMsg").val());

                }

            },
            select: function(event, ui) {
                var keyCode = $.ui.keyCode;
                var proceed = true;
                //console.log("checking" + event.which);
                //console.log(" s " + event.keyCode);

                switch (event.keyCode) {
                    case keyCode.PAGE_UP:
                    case keyCode.PAGE_DOWN:
                    case keyCode.UP:
                        //console.log("key up");
                        event.preventDefault();
                        break;
                    case keyCode.DOWN:
                        //console.log("key down");
                        event.preventDefault();
                        break;
                    default:
                        //console.log("default called");
                        if (selectedCountriesArray.length < 5) {
                            var displayName = ui.item.label.trim();
                            if (displayName.indexOf(":")) {
                                displayName = displayName.substring(displayName.indexOf(":") + 1).trim();
                            }
                            if (displayName.indexOf(",")) {
                                displayName = displayName.substring(displayName.indexOf(",") + 1).trim();
                            }
                            //console.log("check country");
                            if (!selectedCountriesArray.includes(displayName.toLowerCase())) {
                                $("#tags").val("");
                                $(".backend").val("");
                                $('.bootLabel').hide();
                                var $chip = '<div class="chip selectedlistchip ' + $(this).find('button').attr('id') + '" id="' + displayName.toLowerCase() + '" data-wcs="' + displayName + '">' + displayName.toLowerCase() + '<span class="dropdownclosebtn hide"><img src="/content/dam/vodafoneideadigital/ir/country-tiles-images/shape.svg"></span></div>';
                                $(".selectedCountryChips").append($chip);
                                selectedCountriesArray.push(displayName.trim().toLowerCase());
                                if (typeof utag !== "undefined") {
                                    utag.link({ 'Custom_Links': 'International Roaming: Choose your travel duration - Country Search Select' });
                                }
                            } else {
                                $("#tags").val("");
                                $(".backend").val("");
                                $('.bootLabel').hide();
                            }
                            var staticchips = $(".staticChips .chip");
                            for (var i = 0; i < staticchips.length; i++) {
                                if (staticchips[i].title.toLowerCase() == displayName.toLowerCase()) {
                                    var i = displayName.toLowerCase();
                                    $(".staticChips [id='" + i + "']").hide();
                                }
                            }

                            if ($(window).width() > 1024) {
                                $("#desktopImage").attr("src", countryimgdescauth);
                            } else if (768 > $(window).width() > 480) {
                                $("#tabletImage").attr("src", countryimgtabauth);
                            } else if ($(window).width() < 480) {
                                $("#mobileImage").attr("src", countryimgmobauth);
                            }

                            if (selectedCountriesArray.length == 5) {

                                $(".fiveCountryselectionError").removeClass("d-none");
                                $(".selectedCountry p").addClass("d-none");
                                $(".selectedCountry p").first().removeClass("d-none");
                                $(".staticChips").addClass("d-none");
                                $("#searchFilterIr").addClass("d-none");
                                $(".popularCountryInput").removeClass("remove_margin");
                                $("#tags").blur();
                            }

                            checkEmptyDiv();


                        }

                }
                return false;
            },
            focus: function(event, ui) {
                // Stop the autocomplete of resetting the value to the selected one
                event.preventDefault();
            }
        }).data("ui-autocomplete")._renderItem = function(ul, item) {
            //console.log("listCount::::" + listCount);
            listCount++;
            var labeltodisplay = item.label;
            var current_search_string = $("#tags").val();
            var temp = labeltodisplay.substring(0, current_search_string.length);
            var temp1 = labeltodisplay.substring(current_search_string.length, labeltodisplay.length);
            var labeltodisplay1 = temp.bold() + temp1;
            //logic for country alias
            if (item.label.indexOf(":") > 0) {
                labeltodisplay = item.label.substring(item.label.indexOf(":") + 1);
                if (labeltodisplay != "") {
                    labeltodisplay = labeltodisplay.trim().toLowerCase();
                }
                labeltodisplay1 = item.label.substring(item.label.indexOf(":") + 1);
                if (countryaliasdisplayed.includes(labeltodisplay)) {
                    labeltodisplay = "";
                } else {
                    countryaliasdisplayed.push(labeltodisplay);
                }

                if (listCount == 1) {
                    $('.backend').attr('placeholder', '');

                }
            } else if (item.label.indexOf(",") > 0) {
                labeltodisplay = item.label.substring(item.label.indexOf(",") + 1);
                if (labeltodisplay != "") {
                    labeltodisplay = labeltodisplay.trim().toLowerCase();
                }
                //labeltodisplay1 = item.label.substring(item.label.indexOf(",") + 1);
                if (countryaliasdisplayed.includes(labeltodisplay)) {
                    labeltodisplay = "";
                } else {
                    countryaliasdisplayed.push(labeltodisplay);
                }
                if (listCount == 1) {
                    $('.backend').attr('placeholder', '');

                }

            } else {
                if (listCount == 1) {
                    $('.backend').attr('placeholder', labeltodisplay1.replace("<b>", "").replace("</b>", ""));


                }

            }
            if (listCount > 2) {
                $('#ui-id-2').show(0, onDivShow);
            }
            if (selectedCountriesArray.indexOf(labeltodisplay.toLowerCase()) == -1) {



                if (labeltodisplay == "") {
                    return $("<li class='d-none'>")
                        .data("ui-autocomplete-item", item)
                        .append("<button class='test '>" + labeltodisplay1 + "</button>")
                        .appendTo(ul);

                } else {
                    return $("<li>")
                        .data("ui-autocomplete-item", item)
                        .append("<button class='test '>" + labeltodisplay1 + "</button>")
                        .appendTo(ul);

                }
            } else {
                return $("<li class='selected'>")
                    .data("ui-autocomplete-item", item)
                    .append("<button class='test' disabled>" + labeltodisplay1 + "</button>")
                    .appendTo(ul);

            }

        };
    }
    var listCount = 0;
    countryList();

    $(".chooseBtn").on("click", function() {
        var sorted_arr = selectedCountriesArray.sort();
        var countries_list_Analytics = sorted_arr.toString();
        countries_list_Analytics = countries_list_Analytics.replace(",", ", ");
        if (typeof utag !== "undefined") {
            utag.link({ 'Custom_Links': 'International Roaming: Choose your travel duration - Proceed', 'Roaming_Destination': countries_list_Analytics });
            utag.link({ 'Custom_Links': 'International Roaming: ' + selectedCountriesArray.length + ' Countries Selected Proceed' });
        }
        setCookieAndSubmit();
    });

});

function setCookieAndSubmit() {
    var countriesArray = "";
    $(".selectedCountryChips .chip").each(function() {
        if (countriesArray === "") {
            countriesArray = $(this).attr("data-wcs");
        } else {
            countriesArray = countriesArray + "," + $(this).attr("data-wcs");
        }
    });

    var requestParamsJson = {};
    requestParamsJson["countries"] = countriesArray;
    var encparams = encryptVars(JSON.stringify(requestParamsJson));
    var encryptedParameters = {};
    encryptedParameters['params'] = encparams.encryptedNumber.toString();
    encryptedParameters['sl'] = encparams.salt.toString();
    encryptedParameters['algf'] = encparams.iv.toString();
    encryptedParameters['sps'] = encparams.secretPassPhrase.toString();
    var cookieValue = JSON.stringify(encryptedParameters);
    var cookieName = "ir_countries";
    setCookie(cookieName, cookieValue, '1');
    var redirectUrl = $("#buttonurl").val();
    window.location.href = redirectUrl;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//  encryptVars data
var encryptVars = function(mobNumber) {
    var salt = CryptoJS.lib.WordArray.random(128 / 8);
    var iv = CryptoJS.lib.WordArray.random(128 / 8);
    var secretPassPhrase = CryptoJS.lib.WordArray.random(128 / 8);
    var key128Bits = CryptoJS.PBKDF2(secretPassPhrase.toString(), salt, { keySize: 128 / 32 });
    var key128Bits100Iterations = CryptoJS.PBKDF2(secretPassPhrase.toString(), salt, { keySize: 128 / 32, iterations: 100 });
    var encryptedNumber = CryptoJS.AES.encrypt(mobNumber, key128Bits100Iterations, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return {
        salt: salt,
        iv: iv,
        secretPassPhrase: secretPassPhrase,
        encryptedNumber: handleSpecialChars(encryptedNumber.toString())
    };
}

function handleSpecialChars(encryptedNumber) {
    return encryptedNumber.replace(/[+]/g, "%2B");
}