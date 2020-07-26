function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function gimme(count, vassal) {
  var investigators = [
    ["Agatha Crane", true],
    ["Agnes Baker", false],
    ["Akachi Onyele", false],
    ["Amanda Sharpe", true],
    ["\"Ashcan\" Pete", true],
    ["Bob Jenkins", true],
    ["Calvin Wright", true],
    ["Carolyn Fern", true],
    ["Carson Sinclair", true],
    ["Charlie Kane", false],
    ["Daisy Walker", false],
    ["Daniela Reyes", true],
    ["Darrell Simmons", true],
    ["Dexter Drake", false],
    ["Diana Stanley", false],
    ["Father Mateo", true],
    ["Finn Edwards", false],
    ["George Barnaby", false],
    ["Gloria Goldberg", true],
    ["Hank Samson", false],
    ["Harvey Walters", false],
    ["Jacqueline Fine", false],
    ["Jenny Barnes", false],
    ["Jim Culver", false],
    ["Joe Diamond", false],
    ["Kate Winthrop", true],
    ["Leo Anderson", false],
    ["Lily Chen", false],
    ["Lola Hayes", false],
    ["Luke Robinson", true],
    ["Mandy Thompson", false],
    ["Marie Lambeau", false],
    ["Mark Harrigan", false],
    ["Michael McGlen", false],
    ["Minh Thi Phan", false],
    ["Monterey Jack", false],
    ["Norman Withers", false],
    ["Patrice Hathaway", false],
    ["Preston Fairmont", true],
    ["Rex Murphy", false],
    ["Rita Young", true],
    ["Roland Banks", true],
    ["Sefina Rousseau", true],
    ["Silas Marsh", false],
    ["Sister Mary", false],
    ["\"Skids\" O'Toole", false],
    ["Tommy Muldoon", false],
    ["Tony Morgan", false],
    ["Trish Scarborough", false],
    ["Ursula Downs", false],
    ["Vincent Lee", true],
    ["Wendy Adams", false],
    ["William Yorick", true],
    ["Wilson Richards", false],
    ["Zoey Samaras", false]
  ];

  var content = "";
  var i;
  var found = 0;

  shuffle(investigators);

  for (i = 0; found < count && i < investigators.length; i++) {
    if (!vassal || !investigators[i][1]) {
      content += investigators[i][0] + "<br>";
      found++;
    }
  }

  document.getElementById('investigators').innerHTML = content;
}
