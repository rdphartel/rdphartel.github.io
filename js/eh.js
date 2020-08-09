var ancientOnes = [
    {name: "Abhoth", inVassal: true},
    {name: "Antediluvium", inVassal: false},
    {name: "Atlach-Nacha", inVassal: false},
    {name: "Azathoth", inVassal: true},
    {name: "Cthulhu", inVassal: true},
    {name: "Elder Things", inVassal: true},
    {name: "Hastur", inVassal: true},
    {name: "Hypnos", inVassal: false},
    {name: "Ithaqua", inVassal: true},
    {name: "Nephren-Ka", inVassal: true},
    {name: "Nyarlathotep", inVassal: false},
    {name: "Shub-Niggurath", inVassal: true},
    {name: "Shudde M'ell", inVassal: false},
    {name: "Syzygy", inVassal: true},
    {name: "Yig", inVassal: true},
    {name: "Yog-Sothoth", inVassal: true}
];

var investigators = [
    {name: "Agatha Crane", inVassal: false, href: "Agatha_Crane"},
    {name: "Agnes Baker", inVassal: true, href: "Agnes_Baker"},
    {name: "Akachi Onyele", inVassal: true, href: "Akachi_Onyele"},
    {name: "Amanda Sharpe", inVassal: false, href: "Amanda_Sharpe"},
    {name: "\"Ashcan\" Pete", inVassal: false, href: "%22Ashcan%22_Pete"},
    {name: "Bob Jenkins", inVassal: false, href: "Bob_Jenkins"},
    {name: "Calvin Wright", inVassal: false, href: "Calvin_Wright"},
    {name: "Carolyn Fern", inVassal: false, href: "Carolyn_Fern"},
    {name: "Carson Sinclair", inVassal: false, href: "Carson_Sinclair"},
    {name: "Charlie Kane", inVassal: true, href: "Charlie_Kane"},
    {name: "Daisy Walker", inVassal: true, href: "Daisy_Walker"},
    {name: "Daniela Reyes", inVassal: false, href: "Daniela_Reyes"},
    {name: "Darrell Simmons", inVassal: false, href: "Darrell_Simmons"},
    {name: "Dexter Drake", inVassal: true, href: "Dexter_Drake"},
    {name: "Diana Stanley", inVassal: true, href: "Diana_Stanley"},
    {name: "Father Mateo", inVassal: false, href: "Father_Mateo"},
    {name: "Finn Edwards", inVassal: true, href: "Finn_Edwards"},
    {name: "George Barnaby", inVassal: true, href: "George_Barnaby"},
    {name: "Gloria Goldberg", inVassal: false, href: "Gloria_Goldberg"},
    {name: "Hank Samson", inVassal: true, href: "Hank_Samson"},
    {name: "Harvey Walters", inVassal: true, href: "Harvey_Walters"},
    {name: "Jacqueline Fine", inVassal: true, href: "Jacqueline_Fine"},
    {name: "Jenny Barnes", inVassal: true, href: "Jenny_Barnes"},
    {name: "Jim Culver", inVassal: true, href: "Jim_Culver"},
    {name: "Joe Diamond", inVassal: true, href: "Joe_Diamond"},
    {name: "Kate Winthrop", inVassal: false, href: "Kate_Winthrop"},
    {name: "Leo Anderson", inVassal: true, href: "Leo_Anderson"},
    {name: "Lily Chen", inVassal: true, href: "Lily_Chen"},
    {name: "Lola Hayes", inVassal: true, href: "Lola_Hayes"},
    {name: "Luke Robinson", inVassal: false, href: "Luke_Robinson"},
    {name: "Mandy Thompson", inVassal: true, href: "Mandy_Thompson"},
    {name: "Marie Lambeau", inVassal: true, href: "Marie_Lambeau"},
    {name: "Mark Harrigan", inVassal: true, href: "Mark_Harrigan"},
    {name: "Michael McGlen", inVassal: true, href: "Michael_McGlen"},
    {name: "Minh Thi Phan", inVassal: true, href: "Minh_Thi_Phan"},
    {name: "Monterey Jack", inVassal: true, href: "Monterey_Jack"},
    {name: "Norman Withers", inVassal: true, href: "Norman_Withers"},
    {name: "Patrice Hathaway", inVassal: true, href: "Patrice_Hathaway"},
    {name: "Preston Fairmont", inVassal: false, href: "Preston_Fairmont"},
    {name: "Rex Murphy", inVassal: true, href: "Rex_Murphy"},
    {name: "Rita Young", inVassal: false, href: "Rita_Young"},
    {name: "Roland Banks", inVassal: false, href: "Roland_Banks"},
    {name: "Sefina Rousseau", inVassal: false, href: "Sefina_Rousseau"},
    {name: "Silas Marsh", inVassal: true, href: "Silas_Marsh"},
    {name: "Sister Mary", inVassal: true, href: "Sister_Mary"},
    {name: "\"Skids\" O'Toole", inVassal: true, href: "%22Skids%22_O%27Toole"},
    {name: "Tommy Muldoon", inVassal: true, href: "Tommy_Muldoon"},
    {name: "Tony Morgan", inVassal: true, href: "Tony_Morgan"},
    {name: "Trish Scarborough", inVassal: true, href: "Trish_Scarborough"},
    {name: "Ursula Downs", inVassal: true, href: "Ursula_Downs"},
    {name: "Vincent Lee", inVassal: false, href: "Vincent_Lee"},
    {name: "Wendy Adams", inVassal: true, href: "Wendy_Adams"},
    {name: "William Yorick", inVassal: false, href: "William_Yorick"},
    {name: "Wilson Richards", inVassal: true, href: "Wilson_Richards"},
    {name: "Zoey Samaras", inVassal: true, href: "Zoey_Samaras"}
];

var maxButtons = 8;

function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function generate() {
    var chosenInvestigators = "";
    var vs = "";
    var chosenAncientOne = "&nbsp;";
    var found;
    var i;

    // Skip shuffling for the first generate
    if (this.nodeName) {
        shuffle(ancientOnes);
        shuffle(investigators);

        for (found = 0, i = 0; found < 1 && i < ancientOnes.length; i += 1) {
            if (this.anyExpansion || ancientOnes[i].inVassal) {
                chosenAncientOne = ancientOnes[i].name;
                found += 1;
            }
        }

        for (found = 0, i = 0; found < this.value && i < investigators.length; i += 1) {
            if (this.anyExpansion || investigators[i].inVassal) {
                chosenInvestigators += "<a href=\"https://eldritchhorrorgame.fandom.com/wiki/" + investigators[i].href + "\" target=\"_blank\">" + investigators[i].name + "</a><br>";
                found += 1;
            }
        }

        vs = "vs.";
    }

    // Ugly fix to get a stable background
    for (i = found; i < maxButtons; i += 1) {
        chosenInvestigators += "&nbsp;<br>";
    }

    document.getElementById("ancientOne").innerHTML = chosenAncientOne;
    document.getElementById("vs").innerHTML = vs;
    document.getElementById("investigators").innerHTML = chosenInvestigators;
}

document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("buttons");
    var row;
    var cell;
    var button;
    var i;

    [
        {name: "All", value: true},
        {name: "Vassal", value: false}
    ].forEach(function (variant) {
        row = table.insertRow();
        cell = row.insertCell();
        cell.innerHTML = variant.name;
        for (i = 1; i <= maxButtons; i += 1) {
            cell = row.insertCell();
            button = document.createElement("input");
            button.type = "button";
            button.value = i;
            button.anyExpansion = variant.value;
            button.addEventListener("click", generate);
            cell.appendChild(button);
        }
    });

    generate();
});

