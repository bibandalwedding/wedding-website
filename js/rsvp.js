var weddingDayToggle = function (index, val){
    is_new = '';
    other = '';
    if(val===true){
        is_new = 'new_';
    }
    const checked = document.getElementById(is_new+'rsvp-'+index).checked;
    if(checked===true){
        document.getElementById(is_new+'declined-'+index).checked = false;
    }
}

var declineDayToggle = function (index, val){
    is_new = '';
    other = '';
    if(val===true){
        is_new = 'new_';
    }
    const checked = document.getElementById(is_new+'declined-'+index).checked;
    if(checked===true){
        document.getElementById(is_new+'rsvp-'+index).checked = false;
    }
}

var data_div = function (valid_data){
    var innerHtml = `<form id="rsvp-submission" class="rsvp-submission">
        `;

    valid_data.data.forEach(function (item, index) {
        checked="";
        declined="";
        style="";
        dietry_checked="";
        dietry_style="";
        under_age_style="";
        if(item.dietry_requirements==="None"){
            dietry_checked="checked";
            dietry_style="display: none;"
        }
        if(item.rsvp===true){
            checked = "checked";
        }
        if(item.declined===true){
            declined = "checked";
        }
        if(item.plus_one_allowed===false){
            style="display: none;"
        }
        if(item.under_age===false){
            under_age_style="display: none;"
        }
        innerHtml += `<div class="container">
                        <div class="row rsvp-submission-input-group">
                            <div class="col-md-10 col-md-offset-1">
                                <h3>Details</h3>
                                <label for="name-`+index+`">Name:</label>
                                <input type="text" name="name" id="name-`+index+`"                              
                                    placeholder="Name" required value="`+item.name+`" disabled>&nbsp;
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <label for="surname-`+index+`">Surname:</label>
                                <input type="text" name="surname" id="surname-`+index+`"                              
                                    placeholder="Surname" required value="`+item.surname+`" disabled>&nbsp;
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <label for="email-`+index+`">Email:</label>
                                <input type="text" name="email" id="email-`+index+`"                              
                                    placeholder="Email address" required value="`+item.email+`">
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <p id="label_postal_address-`+index+`" style="margin-bottom: -20px;font-weight: 700;"> Postal Adress:</p>
                                <textarea style="height: 56px;" name="postal_address" id="postal_address-`+index+`" 
                                placeholder="Please enter your postal address." 
                                required rows="3" cols="50">`+item.postal_address+`</textarea>
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <label for="age-`+index+`" style="`+under_age_style+`">Age on date of wedding:</label>
                                <input style="`+under_age_style+`" type="number" name="age" id="age-`+index+`"                              
                                    placeholder="Age" required value="`+item.age+`" >&nbsp;
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <h3>Will you be coming to our wedding?</h3>
                                <label for="rsvp-`+index+`">Of course!</label>
                                <input type="checkbox" class="rsvp-submission-checkbox" name="rsvp_checkbox" id="rsvp-`+index+`" title="Joyfully accept."
                                    required `+checked+` onclick={weddingDayToggle(`+index+`,`+false+`)}>
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <label for="declined-`+index+`">So sorry but we can't make it.</label>
                                <input type="checkbox" class="rsvp-submission-checkbox" name="declined" id="declined-`+index+`" title="So sorry but we can't make it."
                                    required `+declined+` onclick={declineDayToggle(`+index+`,`+false+`)}>
                            </div>` +
                            `<div class="col-md-10 col-md-offset-1">
                                <h3>Dietary Requirements</h3>
                                <label for="dietry_requirements_checkbox-`+index+`"> No!</label>
                                <input type="checkbox" class="rsvp-submission-checkbox" name="dietry_requirements_checkbox" id="dietry_requirements_checkbox-`+index+`" title="No!"
                                    required `+dietry_checked+` onclick=dietry_toggle(`+index+`,`+false+`)>
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <p id="label_dietry_requirements-`+index+`" style="margin-bottom: -10px;font-weight: 700;`+dietry_style+`"> Yes, I am…</p>
                                <textarea style="height: 56px;`+dietry_style+`" name="dietry_requirements" id="dietry_requirements-`+index+`" 
                                placeholder="Please list any dietry requirements we should be aware of." 
                                required rows="3" cols="50">`+item.dietry_requirements+`</textarea>
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <h3>Gotta Song Request?</h3>
                                <p style="margin-bottom: -10px;">We can't make any guarantees, but we will send them to the DJ! <p>
                                <textarea name="song" id="song_request-`+index+`" 
                                required rows="4" cols="50">`+item.song_request+`</textarea>
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <h3>Please share one interesting fact about yourself. </h3>
                                <p style="margin-bottom: -10px;">Eg. I once got a kiss on the cheek from Sir. Ian McKellin <p>
                                <textarea name="fact" id="fact-`+index+`" 
                                required rows="4" cols="50">`+item.fact+`</textarea>
                            </div>
                        </div>
                        <button type="button" id="button-1-`+index+`" class="btn-fill rsvp-submission-btn" onclick="add_plus_one(`+index+`)" style="`+style+`">
                            Add Plus One
                        </button>
                        <button type="button" id="remove_button-1-`+index+`" class="btn-fill rsvp-submission-btn" onclick="remove_plus_one(`+index+`)" style="display: none;">
                            Remove Plus One
                        </button>
                        <div id="new_person-`+index+`"></div>
                    </div>
                    <br>
                    `
    });

    innerHtml += `  <button type="button" id="button-0" class="btn-fill rsvp-submission-btn" onclick="on_data_submit()">
                        Submit
                    </button>
                </form>
                `
    return innerHtml;
}

var data_from_code = function (code) {
    var app_url = "https://script.google.com/macros/s/AKfycbym41MTiZNFIqIpJth5dmf_s6xuNinkfLvvFgLEKuvOAmLyRj3tTmMHW0tSwYCnD-am/exec";
    app_url = app_url + "?code=" + code + "&verifyonly=" + false;
    var data_response = {};
    $.ajax({
        url: app_url,
        method: "GET",
        async: false,
        dataType: "json",
        success: function (response) {
            data_response = response
        },
        error: function () {
            alert("The form failed. Please let Jonathan know and try again later.")
            data_response = {}
        }
    });
    return data_response;
};

window.onload = function () {
    var url = document.location.href,
        params = url.split('#')[0].split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    var valid_data = data_from_code(data.id);
    document.getElementById('validation-code').value = data.id;
    document.getElementById('accommodation').value = valid_data.has_accommodation;
    var innerHtml = "That is not a valid code!"
    if (valid_data.valid === true){
        innerHtml = data_div(valid_data);
    }
    document.getElementById('here').innerHTML = innerHtml;
    document.getElementById('loading').style.display = "none";
};

var on_data_submit = function (e) {
    document.getElementById('loading').style.display = "block";
    setTimeout(function() {
        var startVal = 0;
        var elements = document.getElementById('rsvp-submission').elements;
        var code = document.getElementById('validation-code').value;
        var accommodation = document.getElementById('accommodation').value
        var data = [];
        var new_people = [];
        var count = -1;
        for (var i = startVal; i < elements.length; i++){
            var id = elements[i].id.split('-');
            var title = id[0];
            var pos = parseInt(id[1]);
            var dict = {
                "validation_code": code,
                "plus_one_allowed": false,
                "has_rsvped": true,
                "accommodation": accommodation,
                "has_accommodation": false,
                "under_age": false
            };

            if(title === 'button' && pos === 1 && count<new_people.length){
                count=count+1;
            }
            
            if (title.split('_')[0] === 'new'){
                if(new_people.length===count){
                    new_people[count] = dict;
                }
                else{
                    dict = new_people[count];
                }
                title = title.replace("new_", "")
                if( title === 'rsvp'){
                    dict[title] = elements[i].checked;
                    if(elements[i].checked === true){
                        elements[i].checked
                    }

                }
                else if(title === 'declined'){
                    dict[title] = elements[i].checked;
                }
                else if(title === 'accommodation'){
                    dict['has_accommodation'] = true
                    dict[title] = elements[i].checked;
                    if(elements[i].checked === true){
                        dict['pre_wedding_dinner'] = true
                        dict['post_wedding_breakfast'] = true
                        dict['not_attending_other_events'] = false
                    }
                }
                else if(title === 'no_accommodation'){
                    dict[title] = elements[i].checked;
                }
                else if(title === 'pre_wedding_dinner'){
                    dict[title] = elements[i].checked;
                }
                else if(title === 'post_wedding_breakfast'){
                    dict[title] = elements[i].checked;
                }
                else if(title === 'not_attending_other_events'){
                    dict[title] = elements[i].checked;
                }
                else if(title === 'dietry_requirements_checkbox'){
                    if(elements[i].checked === true){
                        dict['dietry_requirements'] = 'None'
                    }
                }
                else if(title === 'dietry_requirements'){
                    if(elements[i].value === ''){
                        dict['dietry_requirements'] = 'None'
                    }
                }
                else{
                    dict[title] = elements[i].value;
                }
                new_people[count] = dict;
            }
            else if(title !== 'button' && title !== 'remove_button'){
                if(data.length<=pos){
                    data[pos] = dict;
                }
                else{
                    dict = data[pos];
                }

                if( title === 'rsvp'){
                    dict[title] = elements[i].checked;
                }
                else if(title === 'declined'){
                    dict[title] = elements[i].checked;
                }
                else if(title === 'age'){
                    if(elements[i].value){
                        dict['under_age']=true;
                    }
                    dict[title] = elements[i].value;
                }
                else if(title === 'accommodation'){
                    dict['has_accommodation'] = true;
                    dict[title] = elements[i].checked;
                    if(elements[i].checked === true){
                        dict['pre_wedding_dinner'] = true
                        dict['post_wedding_breakfast'] = true
                        dict['not_attending_other_events'] = false
                    }
                }
                else if(title === 'no_accommodation'){
                    dict[title] = elements[i].checked;
                }
                else if(title === 'pre_wedding_dinner'){
                    if(!(title in dict)){
                        dict[title] = elements[i].checked;
                    }
                    if(elements[i].checked === true){
                        dict['no_accommodation'] = true
                    }
                }
                else if(title === 'post_wedding_breakfast'){
                    if(!(title in dict)){
                        dict[title] = elements[i].checked;
                    }
                    if(elements[i].checked === true){
                        dict['no_accommodation'] = true
                    }
                }
                else if(title === 'not_attending_other_events'){
                    if(!(title in dict)){
                        dict[title] = elements[i].checked;
                    }
                    if(elements[i].checked === true){
                        dict['no_accommodation'] = true
                    }
                }
                else if(title === 'dietry_requirements_checkbox'){
                    if(elements[i].checked === true){
                        dict['dietry_requirements'] = 'None'
                    }
                }
                else if(title === 'dietry_requirements'){
                    if(elements[i].value === ''){
                        dict['dietry_requirements'] = 'None'
                    } else {
                        dict['dietry_requirements'] = elements[i].value
                    }
                }
                else{
                    dict[title] = elements[i].value;
                }
                data[pos] = dict
            }
        }
        rsvp_data = {
            "code": code,
            "rsvps": data,
            "plus_ones": new_people
        }
        if(validate_selection(rsvp_data) === true){
            update_rsvp_details(rsvp_data);
                
            window.location.href = "invitation.html?id="+encodeURIComponent(code);
        }
        else{
            document.getElementById('loading').style.display = "none";
            alert("Please complete all required fields.");
        }
    }, 0);
};

var validate_selection = function(rsvp_data){
    for (var i = 0; i < rsvp_data.rsvps.length; i++){
        var rsvp = rsvp_data.rsvps[i];
        if(rsvp.declined !== true){
            if(rsvp.rsvp !== true){
                return false;
            }
            if(rsvp.dietry_requirements === ''){
                return false;
            }
        }
    } 
    for (var i = 0; i < rsvp_data.plus_ones.length; i++){
        var plus_one = rsvp_data.plus_ones[i];
        if(plus_one.name === "" || plus_one.surname === ""){
            return false;
        }
        if(plus_one.dietry_requirements === ''){
            return false;
        }
    }
    return true;
}

// update details
var update_rsvp_details = function (data) {
    var app_url = "https://script.google.com/macros/s/AKfycbym41MTiZNFIqIpJth5dmf_s6xuNinkfLvvFgLEKuvOAmLyRj3tTmMHW0tSwYCnD-am/exec"; 
    $.ajax({
        url: app_url,
        method: "POST",
        async: false,
        dataType: "json",
        data: JSON.stringify(data),
        success: function () {
            alert("The form was submitted successfully.");
        },
        error: function () {
            alert("The form failed. Please let Jonathan know and try again later.");
        }
    });
};

var dietry_toggle = function (index, val){
    is_new = '';
    if(val===true){
        is_new = 'new_';
        console.log(is_new+'label_dietry_requirements-'+index);
    }
    const checked = document.getElementById(is_new+'dietry_requirements_checkbox-'+index).checked;
    if(checked===true){
        document.getElementById(is_new+'label_dietry_requirements-'+index).style.display = "none";
        document.getElementById(is_new+'dietry_requirements-'+index).style.display = "none";
        document.getElementById(is_new+'dietry_requirements-'+index).value = "";
    }
    else{
        document.getElementById(is_new+'label_dietry_requirements-'+index).style.display = "";
        document.getElementById(is_new+'dietry_requirements-'+index).style.display = "";
    }
}

var remove_plus_one = function (index){
    document.getElementById('remove_button-1-'+index).style.display = "none";
    document.getElementById('button-1-'+index).style.display = "";
    document.getElementById('new_person-'+index).innerHTML = "";
};

var add_plus_one = function (index){
    is_going = document.getElementById('rsvp-'+index).checked
    if(is_going === false){
        alert("You cannot add a plus one if you aren't going. Please tick the box before adding a plus one.");
    }else{
        document.getElementById('remove_button-1-'+index).style.display = "";
        document.getElementById('button-1-'+index).style.display = "none";
        innerHtml= `<br>
                    <div class="container">
                        <div class="row rsvp-submission-input-group">
                            <div class="col-md-10 col-md-offset-1">
                                <h3>Details</h3>
                                <label for="new_name-`+index+`">Name:</label>
                                <input type="text" name="name" id="new_name-`+index+`"                              
                                    placeholder="Name" required value="">&nbsp;
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <label for="new_surname-`+index+`">Surname:</label>
                                <input type="text" name="surname" id="new_surname-`+index+`"                              
                                    placeholder="Surname" required value="">&nbsp;
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <label for="new_email-`+index+`">Email:</label>
                                <input type="text" name="email" id="new_email-`+index+`"                              
                                    placeholder="Email address" required value="">
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <p id="new_postal_address_label-`+index+`" style="margin-bottom: -20px;font-weight: 700;">Postal Adress:</p>
                                <textarea style="height: 56px;" name="postal_address" id="new_postal_address-`+index+`"
                                required rows="3" cols="50"></textarea>
                            </div>
                            <div class="col-md-10 col-md-offset-1" style="display: none;">
                                <h3>Will you be coming to our wedding?</h3>
                                <label for="new_rsvp-`+index+`">Of course!</label>
                                <input type="checkbox" class="rsvp-submission-checkbox" name="new_rsvp_checkbox" id="new_rsvp-`+index+`" title="Of course!"
                                    required checked onclick={weddingDayToggle(`+index+`,`+true+`)}>
                            </div>
                            <div class="col-md-10 col-md-offset-1" style="display: none;">
                                <label for="declined-`+index+`">So sorry but we can't make it.</label>
                                <input type="checkbox" class="rsvp-submission-checkbox" name="new_declined" id="new_declined-`+index+`" title="So sorry but we can't make it."
                                    required onclick={declineDayToggle(`+index+`,`+true+`)}>
                            </div>`
                            +
                            `<div class="col-md-10 col-md-offset-1">
                                <h3>Dietary Requirements</h3>
                                <label for="new_dietry_requirements_checkbox-`+index+`">No!</label>
                                <input type="checkbox" class="rsvp-submission-checkbox" name="new_dietry_requirements_checkbox" id="new_dietry_requirements_checkbox-`+index+`" title="No!"
                                    required onclick=dietry_toggle(`+index+`,`+true+`)>
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <p id="new_label_dietry_requirements-`+index+`" style="margin-bottom: -10px;font-weight: 700;"> Yes, I am…</p>
                                <textarea style="height: 56px;" name="dietry_requirements" id="new_dietry_requirements-`+index+`"
                                required rows="3" cols="50"></textarea>
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <h3>Gotta Song Request?</h3>
                                <p style="margin-bottom: -10px;">We can't make any guarantees, but we will send them to the DJ! <p>
                                <textarea name="song" id="new_song_request-`+index+`" 
                                required rows="4" cols="50"></textarea>
                            </div>
                            <div class="col-md-10 col-md-offset-1">
                                <h3>Please share one interesting fact about yourself. </h3>
                                <p style="margin-bottom: -10px;">Eg. I once got a kiss on the cheek from Sir. Ian McKellin <p>
                                <textarea name="fact" id="new_fact-`+index+`" 
                                required rows="4" cols="50"></textarea>
                            </div>
                        </div>
                    </div>
                    <br>`
        document.getElementById('new_person-'+index).innerHTML = innerHtml;
    }
}

function addIDToURL(baseurl, path) {
    var code = document.getElementById('validation-code').value;
    var newURL = baseurl;

    if(code){
        newURL = newURL+'?id='+code+path;
    }

    window.location=newURL;
}