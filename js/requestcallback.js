$(document).ready(function() {
    var basicFname = 'first name';
    var errorFname = 'please enter first name';
    var basicLname = 'last name';
    var errorLname = 'please enter last name';
    var basicNumber = 'mobile number';
    var validNumber = 'please enter valid mobile number';
    var errorNumber = 'please enter 10 digit number';
    var basicEmail = 'email id';
    var errorEmail = 'please enter email id';
    var basicCompnay = 'company name';
    var errorCompnay = 'please enter company name';
    var basicCaptcha = 'enter captcha';
    var errorCaptcha = 'please enter captcha';


    // First Name input & blur validation
    $('#firstname').on('input', function(e) {
        if ($(this).prev().hasClass('errorMsg')) {
            $(this).prev().removeClass('errorMsg').text(basicFname);
        }
        var inputText = $(this).val();
        var resultText = inputText.replace(/[^a-zA-Z.]/g, '');
        if (resultText == "") {
            $(this).prev().addClass('d_none');
        }
        $(this).val(resultText);
        checkValid();
    });
    $('#firstname').on('blur', function(e) {
        if ($(this).val().length == 0) {
            $(this).prev().addClass('errorMsg').removeClass('d_none').text(errorFname);

        } else {
            $(this).prev().removeClass('errorMsg').text(basicFname);
        }
    });

    // Last Name input & blur validation
    $('#lastname').on('input', function(e) {
        if ($(this).prev().hasClass('errorMsg')) {
            $(this).prev().removeClass('errorMsg').text(basicLname);
        }
        var inputText = $(this).val();
        var resultText = inputText.replace(/[^a-zA-Z.]/g, '');
        if (resultText == "") {
            $(this).prev().addClass('d_none');
        }
        $(this).val(resultText);
        checkValid();
    });
    $('#lastname').on('blur', function(e) {
        if ($(this).val().length == 0) {
            $(this).prev().addClass('errorMsg').removeClass('d_none').text(errorLname);

        } else {
            $(this).prev().removeClass('errorMsg').text(basicLname);
        }
    });

    // Mobile Number input & blur validation
    $('#staticMobileNumber').on('input', function(e) {

        if ($(this).prev().hasClass('errorMsg')) {
            $(this).prev().removeClass('errorMsg').text(basicNumber);
        }
        var reg = /^[01234]+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
        this.value = this.value.replace(/[^0-9]/g, '');
        checkValid();
    });
    $('#staticMobileNumber').on('blur', function() {
        if ($(this).val().length != 10) {
            $(this).prev().addClass('errorMsg').text(errorNumber);

        } else {
            $(this).prev().removeClass('errorMsg').text(basicNumber);
        }
        if ($(this).val().length == 0) {
            $(this).prev().removeClass('d_none').text(validNumber);
            $('#staticsubmitBtn').attr('disabled', true);
        }
    });

    // Email Id input & blur validation
    $('#emailid').on('input', function() {
        if ($(this).prev().hasClass('errorMsg')) {
            $(this).prev().removeClass('errorMsg').text(basicEmail);
        }
        var email = $(this).val();
        var resultEmail = email.replace(/[^a-z0-9._@]/g, '');
        $(this).val(resultEmail);
        if (resultEmail == "") {
            $(this).prev().removeClass('errorMsg').addClass('d_none');
        }
        checkValid();

    });
    $('#emailid').on('blur', function(e) {
        var thisValue = $(this).val();
        var eRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        if (thisValue.match(eRegex)) {
            $(this).prev().removeClass('errorMsg').text('enter email id');
        } else {
            $(this).prev().addClass('errorMsg').text('enter valid email id');
        }
        if ($(this).val().length == 0) {
            $(this).prev().removeClass('d_none').text(errorEmail);

        }
    });
    // Company Name input, keydown & blur validation
    $('#companyName').on('input', function(e) {
        if ($(this).prev().hasClass('errorMsg')) {
            $(this).prev().removeClass('errorMsg').text(basicCompnay);
        }
        var companyName = $(this).val();
        var companyNameText = companyName.replace(/[^a-zA-Z. ]/g, '');
        if (companyNameText == "") {
            $(this).prev().addClass('d_none');
        }
        $(this).val(companyNameText);
        checkValid();

    });
    $('#companyName').on('keydown', function(event) {
        if (event.keyCode == 9) {
            $('#selectRegion').addClass('show');
            $('#selectRegionBtn').attr('aria-expanded', true);
            $('#selectRegion #customDropd').addClass('show');
        }
    });
    $('#staticMobileNumber').on('keydown', function(event) {
        if (event.keyCode == 9) {
            $('#selectAreaOf').addClass('show');
            $('#selectAreaOfBtn').attr('aria-expanded', true);
            $('#selectAreaOf #customDropd').addClass('show');
        }
    });
    $('#companyName').on('blur', function(w) {
        if ($(this).val().length == 0) {
            $(this).prev().removeClass('d_none').addClass('errorMsg').text(errorCompnay);

        }
        if (e.keyCode == 9) {
            console.log('testsetsetsetsetset');
            $('.requestCallBack .dropdown').addClass('show');
        }
    });
    $('#selectRegion #customDropd p').on('click', function() {
        $('#selectRegionBtn').text($(this).text());
        $('#selectRegion').removeClass('show');
        $('#selectRegionBtn').attr('aria-expanded', false);
        $('#selectRegion #customDropd').removeClass('show');
        checkValid();

    });
    $('#selectAreaOf #customDropd p').on('click', function() {
        $('#selectAreaOfBtn').text($(this).text());
        $('#selectAreaOf').removeClass('show');
        $('#selectAreaOfBtn').attr('aria-expanded', false);
        $('#selectAreaOf #customDropd').removeClass('show');
        checkValid();
    });
    // DropDown Btn Validtion
    $('#staticcaptcha').on('input', function(e) {
        if ($(this).prev().hasClass('errorMsg')) {
            $(this).prev().removeClass('errorMsg').text(basicCaptcha);
        }
        var captchaName = $(this).val();
        var captchaText = captchaName.replace(/[^a-zA-Z0-9]/g, '');
        if (captchaText == "") {
            $(this).prev().addClass('d_none');
        }
        $(this).val(captchaText);
        checkValid();
        if ($(this).val().length == 6) {
            $('#staticsubmitBtn').attr('disabled', false);
            checkValid();
        } else {
            checkValid();
            $('#staticsubmitBtn').attr('disabled', true);
        }
    });

    $('#staticcaptcha').on('blur', function() {
        if ($(this).val().length == 0) {
            $(this).prev().addClass('errorMsg').removeClass('d_none').text('enter valid captcha');
        } else {
            $(this).prev().removeClass('errorMsg').text('enter captcha');
        }

    });
    // hide label if input empty
    $('.fieldfocus').on('keyup', function(e) {
        if ($(this).val() != '') {
            $(this).prev().removeClass('d_none');
        }

    });



    //Submitting Request Call Back Form

    $('#staticsubmitBtn').click(function(e) {
        var currentPageNames = $('.titleanddesc .style1').find('h1').text();
        utag.link({
            'Custom_Links': analyticPageName + ": " + currentPageNames + ": " + "Thankyou -Submit"
        });

        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var emailid = $('#emailid').val();
        var staticMobileNumber = $('#staticMobileNumber').val();
        var companyname = $('#companyName').val();
        var selectregion = $('#selectRegionBtn').text();
        var areaofinterest = $('#selectAreaOfBtn').text();
        var staticcaptcha = $('#staticcaptcha').val();
        console.log("f" + firstname + "l" + lastname + "mail" + emailid + "num" + staticMobileNumber + "comp" + companyname + "reg" + selectregion + "int" + areaofinterest + "staticcaptcha" + staticcaptcha);

        // Initializing Variables With Regular Expressions
        var name_regex = /^[a-zA-Z0-9_ ]*$/;
        var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
        var number_regex = /^[0-9]+$/;
        // To Check Empty Form Fields.
        var flagform = "false";

        $('#captchaerror').hide().removeClass('showError');
        $(".invalid-feedback-captcha").html("");
        var capt = $("#staticcaptcha").val();
        var encryptedParameters = {};
        var object = {};
        var emailuid = $('#emailuid').val();
        alert("staticcaptcha ::::" + capt + "emailuid" + emailuid);
        object["firstname"] = firstname;
        object["lastname"] = lastname;
        object["emailid"] = emailid;
        object["staticMobileNumber"] = staticMobileNumber;
        object["companyname"] = companyname;
        object["selectregion"] = selectregion;
        object["areaofinterest"] = areaofinterest;
        object["selectindustry"] = "NA"; //selectindustry;
        object["selectrevenue"] = "NA"; //selectrevenue;
        object["captchaval"] = capt;
        object["emailuid"] = emailuid;
        var encparams = encryptVars(JSON.stringify(object));
        //var encparams = encryptVars(capt);
        //encryptedParameters['captcha'] = encparams.encryptedNumber.toString();
        encryptedParameters['params'] = encparams.encryptedNumber.toString();
        encryptedParameters['sl'] = encparams.salt.toString();
        encryptedParameters['algf'] = encparams.iv.toString();
        encryptedParameters['sps'] = encparams.secretPassPhrase.toString();
        $.ajax({
            url: "/bin/vodafoneideadigital/callbackrequestservlet",
            type: 'POST',
            data: 'requestCall=' + JSON.stringify(encryptedParameters),
            success: function(result) {
                var flg = $.parseJSON(result);
                var s = flg.flag;
                if ("true" == flg.flag) {
                    $("#captchaerror").hide();
                    if (flagform == "false") {
                        window.location.href = "/content/vodafoneideadigital/in/en/vil-homepage/static-pages/thankyoupage.html";
                    }
                } else {
                    $("#staticcaptcha").val("");
                    $("#captchaerror").show();
                    $("#captchaerror").addClass("errorMsg");
                    $("#captchaerror").text("Please enter correct captcha");
                    $('#staticsubmitBtn').attr('disabled', true);
                }
            },
            error: function(err) {
                $("#captchaerror").show();
                $("#captchaerror").addClass("errorMsg");
                $("#captchaerror").text("Please enter correct captcha");
                $('#staticsubmitBtn').attr('disabled', true);
            }
        });
        // }

        // var idtoFocus = $(".showError").first().prev()[0].id;
        //$('#' + idtoFocus).focus();
    });

    $('#captcharefresh').click(function(e) {
        e.preventDefault();
        $("#staticcaptcha").val("");
        Captcha();
    });

    function Captcha() {
        var object = {};
        var emailuid = $('#emailuid').val();
        object["emailuid"] = emailuid;
        var encryptedParameters = {};
        var encparams = encryptVars(JSON.stringify(object));
        encryptedParameters['params'] = encparams.encryptedNumber.toString();
        encryptedParameters['sl'] = encparams.salt.toString();
        encryptedParameters['algf'] = encparams.iv.toString();
        encryptedParameters['sps'] = encparams.secretPassPhrase.toString();
        var img = "/bin/vodafoneideadigital/emailcaptcha.img?captchauid=" + JSON.stringify(encryptedParameters);
        $("#captchabox img").attr("src", img);
    }
    Captcha();

    function ValidateCaptcha() {
        return validateflag;
    }
});
var encryptVars = function(mobNumber) {
    var salt = CryptoJS.lib.WordArray.random(128 / 8);
    var iv = CryptoJS.lib.WordArray.random(128 / 8);
    var secretPassPhrase = CryptoJS.lib.WordArray.random(128 / 8);
    var key128Bits = CryptoJS.PBKDF2(secretPassPhrase.toString(), salt, {
        keySize: 128 / 32
    });
    var key128Bits100Iterations = CryptoJS.PBKDF2(secretPassPhrase.toString(), salt, {
        keySize: 128 / 32,
        iterations: 100
    });
    var encryptedNumber = CryptoJS.AES.encrypt(mobNumber, key128Bits100Iterations, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
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

function checkValid() {
    if ($("#firstname").val() != "" && $("#lastname").val() != "" && $("#staticMobileNumber").val() != "" && $("#staticMobileNumber").val().length == 10 && $("#emailid").val() != "" && $("#companyName").val() != "" && $("#selectRegionBtn").text() != "select Region" && $("#selectAreaOfBtn").text() != "select area of interest" && $("#staticcaptcha").val() != "" && $("#staticcaptcha").val().length == 6) {
        $('#staticsubmitBtn').attr('disabled', false);
    } else {
        $('#staticsubmitBtn').attr('disabled', true);
    }

}