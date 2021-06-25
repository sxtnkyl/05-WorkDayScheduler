let timeDisplayEl = $("#currentDay")
let container = $('#container')

$(document).ready(() => {
  //set jumbo
  let rightNow = moment().format('MMM DD, YYYY');
timeDisplayEl.text(rightNow);

  //create divs for 9-5
for (let i = 9; i < 18; i++) {
  //how normal people tell time
  let hour = i <= 12 ? i : i-12;
  //0-23
  let momentHour = i;
  //row container
  let rowEl = document.createElement("div")
  $(rowEl).attr('id', momentHour);
  $(rowEl).attr('class', 'row time-block');
  //time tag
  let timeTagEl= document.createElement("div");
  $(timeTagEl).attr('class', 'col-1 hour');
  $(timeTagEl).text(hour);
  //task area
  let taskAreaEl = document.createElement("textarea")
  $(taskAreaEl).attr('class', 'col-10 description');
  //save button
  let saveEl = document.createElement("button")
  $(saveEl).attr('class', 'col-1 saveBtn');
  $(saveEl).append('<i class="fas fa-save" />');
  //append into container
  $(container).append(rowEl)
  $(rowEl).append(timeTagEl)
  $(rowEl).append(taskAreaEl)
  $(rowEl).append(saveEl)
  //update from local storage
  let storageEl = localStorage.getItem('hour'+hour);
  $(taskAreaEl).text(storageEl)
}

//check if hour has updated- change colors
function updateTimeBlocks() {
  let currentHour = moment().hours();
  let testHour = 13;
  for (let i = 9; i < 18; i++) {
    let row = document.getElementById(i);
    //update colors
    if (row.id < testHour) $(row).addClass('past');
    else if (row.id == testHour) $(row).removeClass('past'), $(row).addClass('present'); else $(row).removeClass('past'), $(row).removeClass('present'), $(row).addClass('future')
  }
}
updateTimeBlocks()
})