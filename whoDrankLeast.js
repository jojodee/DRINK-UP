module.exports = function(day,drink) {
  var min = 1000;
  var who = {};
day.forEach(function(per) {
  if(per[drink]<min)
    min = per[drink];
    who = {
      name:per.person,

    }
  });

  console.log(who.name);
  return who.name;
}
