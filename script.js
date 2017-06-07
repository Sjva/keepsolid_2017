document.getElementById("input_field").style.borderRadius = "3px";//меняем в поле ввода цвет и закругления поля
document.getElementById('body').style.backgroundColor = 'silver';//цвет фона страницы

let datalist;
let countries;
let countriesAllSelect;
let liElement;
let liElementsAll;
let inputElement;
let countriesFound = [];
let COUNTRIES_MAX = 5;
let countriesFoundSelect;
let boldString;

datalist = JSON.parse('{"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}');

countries = Object.values(datalist).sort();

countriesAllSelect = document.getElementById("countries"); // селект со всеми странами
inputElement = document.getElementById("input_field"); // поле ввода
countriesFoundSelect = document.getElementById("countries_found"); // селект с найденными странами

// создаем список из всех стран на странице
for (let i=0; i < countries.length; i++) {
    liElement = document.createElement("li");
    liElement.style.listStyleType = "none";
    liElement.innerHTML = countries[i];
    countriesAllSelect.appendChild(liElement);
};

// список появляется только при фокусе на поле ввода
inputElement.onmouseover = function() {
    if (inputElement.value === "") {
        countriesAllSelect.style.display = "block";
    }
};
inputElement.onmouseout = function() {
    if (inputElement.value === "") {
        countriesAllSelect.style.display = "none";
    }
};


// при введении символов будет происходить поиск совпадений
inputElement.addEventListener("input", function () {
    if (this.value === "") {
        countriesFoundSelect.style.display = 'none';
        countriesAllSelect.style.display = "block";
        return;
    }

    // очищаем список найденных стран при каждом вводе
    countriesFound = [];
    while (countriesFoundSelect.firstChild) {
        countriesFoundSelect.removeChild(countriesFoundSelect.firstChild);
    }

    // поиск совпадений по всем странам
    for (let i=0; i < countries.length; i++) {
        if (countries[i].toLowerCase().indexOf(this.value.toLowerCase()) !== -1) {
            this.removeAttribute("style");
            countriesFound.push(countries[i]);
        }
    }

    // если совпадений найдены
    if (countriesFound.length > 0) {
        // выводить совпавшие данные, максимум 5
        for (let i=0; i < countriesFound.length && i < COUNTRIES_MAX; i++) {
            liElement = document.createElement("li");
            liElement.setAttribute("name", countriesFound[i]);
            liElement.style.listStyleType = "none";
            // В совпадениях подстроку выделять жирным
            boldString = countriesFound[i].replace(this.value, "<b>" + this.value + "</b>");
            liElement.innerHTML = boldString;
            countriesFoundSelect.appendChild(liElement);
        };
        // вывести найденные страны списком
        countriesFoundSelect.style.display = 'block';
        countriesAllSelect.style.display = "none";
    }
    // если совпадения не найдены
    else {
        // поле подсвечивается красной рамкой и в списке пишется “Нет совпадений”
        inputElement.style.borderColor = "red";
        liElement = document.createElement("li");
        liElement.style.listStyleType = "none";
        liElement.innerHTML = "Нет совпадений";
        countriesFoundSelect.appendChild(liElement);
    }
});

document.addEventListener('click', function(evt) {
    if (evt.target.tagName === "LI") {
        inputElement.value = evt.target.getAttribute("name");
        alert(evt.target.getAttribute("name"));
    }
}, false);




