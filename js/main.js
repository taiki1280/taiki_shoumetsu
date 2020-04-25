function readCsv(data) {
  var target = '#csv-body'
  var csv = $.csv.toArrays(data)
  var insert = ''
  $(csv).each(function () {
    if (this.length > 0) {
      insert += '<tr>'
      $(this).each(function () {
        insert += '<td>' + this + '</td>'
      })
      insert += '</tr>'
    }
  })
  $(target).append(insert)
  装飾()
}
var csvfile = 'test.csv'
$(function () {
  $.get(csvfile, readCsv, 'text')
})

function 装飾() {
  const 全属性 = ["火", "水", "木", "光", "闇"]
  const 属性 = $('td:nth-child(2)')

  属性.each(function () {
    for (var i in 全属性) {
      if ($(this).text() == 全属性[i])
        $(this).parent().addClass(全属性[i])
    }
  })
}
