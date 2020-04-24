function readCsv(data) {
  var target = '#csv-body';
  var csv = $.csv.toArrays(data);
  var insert = '';
  $(csv).each(function () {
    if (this.length > 0) {
      insert += '<tr>';
      $(this).each(function () {
        insert += '<td>' + this + '</td>';
      });
      insert += '</tr>';
    }
  });
  $(target).append(insert);
  sousyoku();
}
var csvfile = 'test.csv';
$(function () {
  $.get(csvfile, readCsv, 'text');
});

function sousyoku() {
  // $('td').addClass("水");
  // $('td').each(function () {
  //   $(this).addClass("水")
  // });
  var array = ["火", "水", "木", "光", "闇"];
  var i = 0
  $('td:nth-child(2)').each(function (index, value) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if ($(this).text() == element)
        $(this).parent().addClass(element);
    }
  });
};
