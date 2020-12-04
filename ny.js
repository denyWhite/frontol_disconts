В заголовок швблона

 /* НОВОГОДНЯЯ АКЦИЯ */
   var need_print = Boolean(Number(frontol.userValues.get("print")));
   if (need_print) {
   frontol.userValues.set("print", "0");
   var sum = Number(frontol.userValues.get("sum"));
    
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString("ПОДАРОК"," ");      
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString("Обменяйте это купон на подарок"," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.partialCut();
    
   
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString(""," ");
   print.printCenterString("Скидка 50 рублей в период"," ");      
   print.printCenterString("с 11 по 24 января 2021 года"," ");
   print.printCenterString(""," ");
   print.printBarcode ("9925533178457", false, 500, 500, 84);
   print.printCenterString(""," ");
   print.printCenterString("Сумма чека: " + sum," ");
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

   
   /* КОНЕЦ НОВОГОДНЕЙ АКЦИИ */


В скрипт ПЕРЕД закрытием чека

    // Новогодняя акция
    // В период с 20 по 31 декабря выдавать карту за каждую 1000 в чеке
    var from = "14.12.20";
    var to = "31.12.20";
    var sum = 1500;
    var totalSum = frontol.currentDocument.totalSum;
    if (frontol.currentDocument.dateOpen >= from && frontol.currentDocument.dateOpen <= to && totalSum >=sum && frontol.currentDocument.type.code == 1)
    {
      // Сообщение
       frontol.actions.showMessage("Клиент участвует в акции, расскажите ему про подарок и купон на скидку!");

        /* Нужно ли печатать допчек */
       frontol.userValues.set("sum", totalSum + "");
       frontol.userValues.set("print", "1");
    }
    else {
    frontol.userValues.set("print", "0");
    }
