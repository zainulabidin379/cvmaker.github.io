//-----------------------------------------------------------Functions for fields for Education
var x = 1; //Initial field counter for education
var x1 = 1; //Initial field counter for experience
var maxField = 2; //Input fields increment limitation

function AddEducation(){
    var wrapper = $('#education'); //Input field wrapper

        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append('<div id="edu_div1"><select class="input" id="edu_dtitle" name="degree_title" value=""><option value="" selected disabled>--Degree Title--</option><option>Matric</option><option>Intermediate</option><option>Bachelors</option><option>Masters</option><option value="">Ph.D</option></select></div>');
            $(wrapper).append('<div id="edu_div2"><input type="text" class="input" id="edu_institute" name="institute" value="" placeholder="Institute Name"></div>');
            $(wrapper).append('<div id="edu_div3"><input type="text" class="input" id="edu_city" name="city" value="" placeholder="Institute City"></div>');
            $(wrapper).append('<div id="edu_div4"><select class="input" id="edu_pyear" name="passing_year" value=""><option value="" selected disabled>--Passing Year--</option><option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option><option>2015</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option></select></div>');
            $(wrapper).append('<div id="edu_div5"><input type="number" class="input" id="edu_tmarks" name="total_marks" value="" placeholder="Total Marks"></div>');
            $(wrapper).append('<div id="edu_div6"><input type="number" class="input" id="edu_mobtained" name="marks_obtained" value="" placeholder="Marks Obtained"></div>');
            $(wrapper).append('<div id="edu_div7"><button class="save_education" type="button" onclick="SaveEducation()">Save Education</button></div>');
        }
}

function SaveEducation(){
    var table = document.getElementById("education_table");
    var edu_dtitle = document.getElementById("edu_dtitle").value;
    var edu_institute = document.getElementById("edu_institute").value;
    var edu_city = document.getElementById("edu_city").value;
    var edu_pyear = document.getElementById("edu_pyear").value;
    var edu_tmarks = document.getElementById("edu_tmarks").value;
    var edu_mobtained = document.getElementById("edu_mobtained").value;

    if (edu_dtitle == "" || edu_institute == "" || edu_city == "" || edu_pyear == "" || edu_tmarks == "" || edu_mobtained == "") {
        alert("You can not leave any field empty!");
    }
    else{
        var myHTML = "<tr><td>"+edu_dtitle+"</td>";
        myHTML += "<td>"+edu_institute+"</td>";
        myHTML += "<td>"+edu_city+"</td>";
        myHTML += "<td>"+edu_pyear+"</td>";
        myHTML += "<td>"+edu_tmarks+"</td>";
        myHTML += "<td>"+edu_mobtained+"</td></tr>";
        table.innerHTML += myHTML;
        RemoveEduFields();
    }
}

function RemoveEduFields(){
    var child1 = document.getElementById("edu_div1");
    var child2 = document.getElementById("edu_div2");
    var child3 = document.getElementById("edu_div3");
    var child4 = document.getElementById("edu_div4");
    var child5 = document.getElementById("edu_div5");
    var child6 = document.getElementById("edu_div6");
    var child7 = document.getElementById("edu_div7");
    var parent = document.getElementById("education");
    parent.removeChild(child1);
    parent.removeChild(child2);
    parent.removeChild(child3);
    parent.removeChild(child4);
    parent.removeChild(child5);
    parent.removeChild(child6);
    parent.removeChild(child7);
    x--;
}


//-----------------------------------------------------------------------Functions for fields for Experience
var x1 = 1; //Initial field counter is 1

function AddExperience(){
    var wrapper1 = $('#experience'); //Input field wrapper

        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper1).append('<div id="exp_div1"><input type="text" class="input" id="exp_institute" name="institute_name" value="" placeholder="Institute Name"></div>');
            $(wrapper1).append('<div id="exp_div2"><input type="text" class="input" id="exp_position" name="position" value="" placeholder="Position"></div>');
            $(wrapper1).append('<div id="exp_div3"><input type="text" class="input" id="exp_city" name="city" value="" placeholder="City"></div>');
            $(wrapper1).append('<div id="exp_div4"><select class="input" id="exp_duration" name="duration" value=""><option value="" selected disabled>--Duration--</option><option>Currently Working</option><option>>6 Months</option><option>1 Year</option><option>2 Years</option><option>3 Years</option><option>4 Years</option><option>5 Years</option><option>5+ Years</option></select></div>');
            $(wrapper1).append('<div id="exp_div5"><textarea class="inputblock" id="exp_resp" name="responsibilities" row="3" value="" placeholder="Responsibilities"></textarea></div>');
            $(wrapper1).append('<div id="exp_div6"><button class="save_experience" onclick="SaveExperience()">Save Experience</button></div>');
        }
}

function SaveExperience(){
    var table1 = document.getElementById("experience_table");
    var exp_institute = document.getElementById("exp_institute").value;
    var exp_position = document.getElementById("exp_position").value;
    var exp_city = document.getElementById("exp_city").value;
    var exp_duration = document.getElementById("exp_duration").value;
    var exp_resp = document.getElementById("exp_resp").value;

    if (exp_institute == "" || exp_position == "" || exp_city == "" || exp_duration == "" || exp_resp == "") {
        alert("You can not leave any field empty!");
        event.preventDefault();
    }
    else{
        var myHTML1 = "<tr><td>"+exp_institute+"</td>";
        myHTML1 += "<td>"+exp_position+"</td>";
        myHTML1 += "<td>"+exp_city+"</td>";
        myHTML1 += "<td>"+exp_duration+"</td>";
        myHTML1 += "<td>"+exp_resp+"</td></tr>";
        table1.innerHTML += myHTML1;
        RemoveExpFields();
    }
}

function RemoveExpFields(){
    var child11 = document.getElementById("exp_div1");
    var child22 = document.getElementById("exp_div2");
    var child33 = document.getElementById("exp_div3");
    var child44 = document.getElementById("exp_div4");
    var child55 = document.getElementById("exp_div5");
    var child66 = document.getElementById("exp_div6");
    var parent1 = document.getElementById("experience");
    parent1.removeChild(child11);
    parent1.removeChild(child22);
    parent1.removeChild(child33);
    parent1.removeChild(child44);
    parent1.removeChild(child55);
    parent1.removeChild(child66);
    x--;
}