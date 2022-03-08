function getDayInfo(date) {
    var day = date.match(/\d{2}\./);
    var month = date.match(/\.\d{2}\./);
    var year = date.match(/\.[1-9]\d{3}/);

    if ((year == null) || (month == null) || (year == null)) return 'Ошибка';
    if (Number(year[0].replace(/[^0-9]/g, '') < 1970)) return 'Ошибка';
    if ((Number(month[0].replace(/[^0-9]/g, '') < 1)) || (Number(month[0].replace(/[^0-9]/g, '') > 12))) return 'Ошибка';
    if ((Number(day[0].replace(/[^0-9]/g, '') < 1)) || (Number(day[0].replace(/[^0-9]/g, '') > 31))) return 'Ошибка';

    var resDate = new Date(Number(year[0].replace(/[^0-9]/g, '')), Number(month[0].replace(/[^0-9]/g, ''))-1, Number(day[0].replace(/[^0-9]/g, '')));

    var arrMonthName = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    var monthName = arrMonthName[resDate.getMonth()];

    var arrDayName = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    var dayName = arrDayName[resDate.getDay()];

    return dayName + ', ' + resDate.getMonthWeek() + ' неделя ' + monthName + ' ' + resDate.getFullYear() + ' года';
}

Date.prototype.getYearWeek = function() {
    var date = new Date(this.getTime());
	var date2 = new Date(date.getFullYear(), 0, 1);
	var day1 = date.getDay();
	if (day1 == 0) day1 = 7;
	var day2 = date2.getDay();
	if (day2 == 0) day2 = 7;
	d = Math.round((date.getTime() - date2.getTime() + (day2 - day1) * (24 * 60 * 60 * 1000)) / 86400000);
	return Math.ceil(d / 7) + 1;
}

Date.prototype.getMonthWeek = function() {
    var date = new Date(this.getTime());
    var firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    var numWeekFirstDate = firstDate.getYearWeek();
    var numWeekCurDate = date.getYearWeek();
    return numWeekCurDate - numWeekFirstDate + 1;
}

function checkForm() {
    var value = document.getElementById('date').value;
    document.getElementById('result').innerHTML = getDayInfo(value);
}
