var investigators = [
    {name: "Agatha Crane", inVassal: false},
    {name: "Agnes Baker", inVassal: true},
    {name: "Akachi Onyele", inVassal: true},
    {name: "Amanda Sharpe", inVassal: false},
    {name: "\"Ashcan\" Pete", inVassal: false},
    {name: "Bob Jenkins", inVassal: false},
    {name: "Calvin Wright", inVassal: false},
    {name: "Carolyn Fern", inVassal: false},
    {name: "Carson Sinclair", inVassal: false},
    {name: "Charlie Kane", inVassal: true},
    {name: "Daisy Walker", inVassal: true},
    {name: "Daniela Reyes", inVassal: false},
    {name: "Darrell Simmons", inVassal: false},
    {name: "Dexter Drake", inVassal: true},
    {name: "Diana Stanley", inVassal: true},
    {name: "Father Mateo", inVassal: false},
    {name: "Finn Edwards", inVassal: true},
    {name: "George Barnaby", inVassal: true},
    {name: "Gloria Goldberg", inVassal: false},
    {name: "Hank Samson", inVassal: true},
    {name: "Harvey Walters", inVassal: true},
    {name: "Jacqueline Fine", inVassal: true},
    {name: "Jenny Barnes", inVassal: true},
    {name: "Jim Culver", inVassal: true},
    {name: "Joe Diamond", inVassal: true},
    {name: "Kate Winthrop", inVassal: false},
    {name: "Leo Anderson", inVassal: true},
    {name: "Lily Chen", inVassal: true},
    {name: "Lola Hayes", inVassal: true},
    {name: "Luke Robinson", inVassal: false},
    {name: "Mandy Thompson", inVassal: true},
    {name: "Marie Lambeau", inVassal: true},
    {name: "Mark Harrigan", inVassal: true},
    {name: "Michael McGlen", inVassal: true},
    {name: "Minh Thi Phan", inVassal: true},
    {name: "Monterey Jack", inVassal: true},
    {name: "Norman Withers", inVassal: true},
    {name: "Patrice Hathaway", inVassal: true},
    {name: "Preston Fairmont", inVassal: false},
    {name: "Rex Murphy", inVassal: true},
    {name: "Rita Young", inVassal: false},
    {name: "Roland Banks", inVassal: false},
    {name: "Sefina Rousseau", inVassal: false},
    {name: "Silas Marsh", inVassal: true},
    {name: "Sister Mary", inVassal: true},
    {name: "\"Skids\" O'Toole", inVassal: true},
    {name: "Tommy Muldoon", inVassal: true},
    {name: "Tony Morgan", inVassal: true},
    {name: "Trish Scarborough", inVassal: true},
    {name: "Ursula Downs", inVassal: true},
    {name: "Vincent Lee", inVassal: false},
    {name: "Wendy Adams", inVassal: true},
    {name: "William Yorick", inVassal: false},
    {name: "Wilson Richards", inVassal: true},
    {name: "Zoey Samaras", inVassal: true}
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
    var content = "";
    var found = 0;
    var i;

    // Skip shuffling for the first generate
    if (this.nodeName) {
        shuffle(investigators);

        for (i = 0; found < this.value && i < investigators.length; i += 1) {
            if (this.anyInvestigator || investigators[i].inVassal) {
                content += investigators[i].name + "<br>";
                found += 1;
            }
        }
    }

    // Ugly fix to get a stable background
    for (i = found; i < maxButtons; i += 1) {
        content += "&nbsp;<br>";
    }

    document.getElementById("investigators").innerHTML = content;
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
            button.anyInvestigator = variant.value;
            button.addEventListener("click", generate);
            cell.appendChild(button);
        }
    });

    generate();
});

