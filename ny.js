В заголовок швблона

 /* НОВОГОДНЯЯ АКЦИЯ */
   var need_print = Boolean(Number(frontol.userValues.get("print")));
   if (need_print) {
   frontol.userValues.set("print", "0");
   var sum = Number(frontol.userValues.get("sum"));
   var cards = Number(frontol.userValues.get("cards"));
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString("Сумма чека: " + sum," ");
   print.printCenterString("Выдано карт: " + cards," ");
   print.printCenterString(""," ");
   print.printBarcode (""+cards, false, 500, 500, 84);
   print.printCenterString(""," ");
   print.printCenterString(frontol.currentDocument.closeUser.name," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.partialCut();
   print.printCenterString("КАССОВЫЙ ЧЕК"," ");
   }

   print.printCenterString("","=");
   print.printCenterString("НОВОГОДНЯЯ АКЦИЯ с 20 по 31 декабря"," ");
   print.printCenterString("ГАРАНТИРОВАННЫЙ ПОДАРОК"," ");
   print.printCenterString("ЗА КАЖДУЮ 1000 В ЧЕКЕ"," ");
   print.printCenterString("ТРИ СУПЕРПРИЗА ПО 15000 РУБЛЕЙ"," ");
   print.printCenterString("Информация на vk.com/sudzhuk"," ");
   print.printCenterString("","=");  
   /* КОНЕЦ НОВОГОДНЕЙ АКЦИИ */


В скрипт ПЕРЕД закрытием чека

    // Новогодняя акция
    // В период с 20 по 31 декабря выдавать карту за каждую 1000 в чеке
    var from = "13.12.19";
    var to = "31.12.19";
    var sum = 10;
    var totalSum = frontol.currentDocument.totalSum;
    if (frontol.currentDocument.dateOpen >= from && frontol.currentDocument.dateOpen <= to && totalSum >=sum && frontol.currentDocument.type.code == 1)
    {
       var cards = Math.floor(totalSum / sum)
       var text = "карт";
       if (cards == 1) text += "у";
       if (cards >= 2 && cards <= 4) text += "ы";

       // Сообщение
       frontol.actions.showMessage("Клиент участвует в акции, вы должны выдать "+ cards + " " + text);

        /* Нужно ли печатать допчек */
       frontol.userValues.set("sum", totalSum + "");
       frontol.userValues.set("print", "1");
       frontol.userValues.set("cards", cards + ""); 
    }
    else {
    frontol.userValues.set("print", "0");
    }
