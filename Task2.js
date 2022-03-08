//Необходимо разработать функцию getDayInfo(date), которая возвращает информацию о выбранной дате. 
//Результатом функции должен быть форматированный текст: <день недели>, <номер недели> неделя <месяц>, <год> года.

//Для определения дня недели я использовал формулу: ДеньНедели = (День + КодМесяца + КодГода)%7. Чем дальше уходить от 17-21 веков, тем больше видно,
//что она некорректна, но это лучшее что я смог найти. 





function getDayInfo(day,month,year){
  let monthCodeTable =[1,4,4,0,2,5,0,3,6,1,4,6];
  let monthCode;
  let monthName="";
  let monthNameTable=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  monthName=monthNameTable[month-1];
  for (i = 1; i <= monthCodeTable.length; i++) {
     if (i == month) {
       monthCode = monthCodeTable[i-1];
         break;
     } 
   }
//Узнаём код года. Общая формула: КГ = ((0/2/4/6 - в зависимости от первых двух цифр в году) + последниеДвеЦифрыГода + последниеДвеЦифрыГода/4)%7
  let yearCode=0;
  let firstYY=~~(year/100);
  let zeroGrid=[11,15,19,23,27];
  let twoGrid=[10,14,18,22,26];
  let fourGrid=[9,13,17,21,25];
  let sixGrid=[12,16,20,24,28];
  let dayOfTheWeek;
  let lastYY = year-firstYY*100;
//Проверка на 29 февраля в данном году
  let leapYear=0;
  if (day==29&&month==2) {
    leapYear=year%4;
    if(leapYear!=0){
        console.log("29 февраля в этом году нет");
    }
    else{leapYear=false;}
//Узнаём номер дня недели
  }
  if(zeroGrid.includes(firstYY)){
    yearCode=~~(lastYY+lastYY/4)%7;
    if(leapYear==true){yearCode-=1;}
    dayOfTheWeek=~~(day+monthCode+yearCode)%7;
  }
  else if(twoGrid.includes(firstYY)){
    yearCode=~~(2+lastYY+lastYY/4)%7;
    if(leapYear==true){yearCode-=1;}
    dayOfTheWeek=~~(day+monthCode+yearCode)%7;
  }
  else if(fourGrid.includes(firstYY)){
    yearCode=(~~4+lastYY+lastYY/4)%7;
    if(leapYear==true){yearCode-=1;}
    dayOfTheWeek=~~(day+monthCode+yearCode)%7;
  }
  else if(sixGrid.includes(firstYY)){
    yearCode=~~(6+lastYY+lastYY/4)%7;
    if(leapYear==true){yearCode-=1;}
    dayOfTheWeek=~~(day+monthCode+yearCode)%7;
  }
  else{
    console.log("Данное значение не попадает в интервал функции");
  }
  let dayOfTheWeekTable=["Суббота","Воскресение","Понедельник","Вторник","Среда","Четверг","Пятница"];
  let dayName="";
  for (i = 0; i <= dayOfTheWeek; i++) {
    if (i == dayOfTheWeek) {
      dayName = dayOfTheWeekTable[i];
        break;
    } 
  }
//Узнаём номер недели
  let weekNumber;
  if(day<=7){
    weekNumber="1";
  }
  else if(day<=14){
    weekNumber="2";
  }
  else if(day<=21){
    weekNumber="3";
  }
  else if(day<=28){
    weekNumber="4";
  }
  else if(day<=31){
    weekNumber="5";
  }
  else{console.log("Неправильно введён день")}
  console.log(dayName + " " + weekNumber+" недели, "+ monthName+", "+ year+" года")
}