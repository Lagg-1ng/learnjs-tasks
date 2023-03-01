export function SummBig(){
    longNumber1 = '99934254552352341241234523456';
    longNumber2 = '14928906457023476457253643127';
    
    //сравниваются числа, и в то, которое меньше по длине, добавляются нули
    
    if (longNumber1.length > longNumber2.length) {
        var abs = longNumber1.length - longNumber2.length;
        for (var i = 0; i < abs; i++) {
            longNumber2 = '0' + longNumber2;
        }
    }
    else {
        var abs = longNumber2.length - longNumber1.length;
        for (var i = 0; i < abs; i++) {
            longNumber1 = '0' + longNumber1;
        }
    }
    
    var str = ''; //результат сложения двух чисел
    
    var currentNum = ''; //если в результате сложения число двузначное, то берем второе число и записываем на эту позицию
    var nextPos = 0; //и запоминаем единицу в будущем
    
    for (var i = longNumber1.length - 1; i >= 0; i--) {
    if (Number(longNumber1[i]) + Number(longNumber2[i]) + nextPos < 10) {
        str = Number(longNumber1[i]) + Number(longNumber2[i]) + nextPos + str;
        nextPos = 0;
    } 
    else {
        twoNumbers = Number(longNumber1[i]) + Number(longNumber2[i]) + nextPos;
        currentNum = (String(twoNumbers).slice(1, 2)); //берем вторую цифру двузначного числа
        str = currentNum + str;
        nextPos = 1; //т.к число двузначное то мы должны прибавить единицу к след.цифре
    }
    }
    
    if (nextPos) { 
        str = '1' + str;
    }
    
    // console.log(longNumber1);
    // console.log(longNumber2);
    
    console.log("Сумма двух больших чисел:",str);
}


export function DifferenceBig(){
    function isSmaller(str1,str2)
    {
        // Calculate lengths of both string
        let n1 = str1.length, n2 = str2.length;
        if (n1 < n2)
            return true;
        if (n2 < n1)
            return false;
  
        for (let i = 0; i < n1; i++)
            if (str1[i] < str2[i])
                return true;
            else if (str1[i] > str2[i])
                return false;
  
        return false;
    }
     
    function findDiff(str1,str2)
    {
        if (isSmaller(str1, str2)) {
            let t = str1;
            str1 = str2;
            str2 = t;
        }
  
        let str = "";

        let n1 = str1.length, n2 = str2.length;
  
        str1 = str1.split("").reverse().join("")
        str2 = str2.split("").reverse().join("")
  
        let carry = 0;
  
        for (let i = 0; i < n2; i++)
        {
            let sub
                = ((str1[i].charCodeAt(0) -
                '0'.charCodeAt(0))
                   - (str2[i].charCodeAt(0) -
                   '0'.charCodeAt(0)) - carry);
            if (sub < 0) {
                sub = sub + 10;
                carry = 1;
            }
            else
                carry = 0;
  
            str += String.fromCharCode(sub +
            '0'.charCodeAt(0));
        }
  
        for (let i = n2; i < n1; i++) {
            let sub = ((str1[i].charCodeAt(0) -
            '0'.charCodeAt(0)) - carry);
  
            // if the sub value is -ve, then make it
            // positive
            if (sub < 0) {
                sub = sub + 10;
                carry = 1;
            }
            else
                carry = 0;
  
            str += String.fromCharCode(sub +
            '0'.charCodeAt(0));
        }
  
        return str.split("").reverse().join("")
    }
     
    // Driver code
     
    let str1 = "99934254552352341241234523456";
    let str2 = "14928906457023476457253643127";

    console.log("Вычитание больших чисел:",findDiff(str1, str2));
}

export function Divide(){
    function longDivision(number,divisor)
    {
        let ans="";
   
        let idx = 0;
          let temp=number[idx]-'0';
        while (temp < divisor)
        {
            temp = (temp * 10 +
            (number[idx + 1]).charCodeAt(0) -
                   ('0').charCodeAt(0));
            idx += 1;
        }
        idx += 1;
         
        while(number.length>idx)
        {
            ans += String.fromCharCode
            (Math.floor(temp / divisor) +
            ('0').charCodeAt(0));
           
            temp = ((temp % divisor) * 10 +
            (number[idx]).charCodeAt(0) -
                  ('0').charCodeAt(0));
            idx += 1;
        }
         
        ans += String.fromCharCode
        (Math.floor(temp / divisor) +
        ('0').charCodeAt(0));
         
        if(ans.length==0)
            return "0";
        return ans;
    }
     
    let number = "99934254552352341241234523456";
    let divisor = "14928906457023476457253643127";
    console.log("Деление больших чисел:~",longDivision(number, divisor));
}

export function Multiply(){
    function multiply(num1, num2)
{
    let len1 = num1.length;
    let len2 = num2.length;
    if (len1 == 0 || len2 == 0){
        return "0"
    }
 
    let result = new Array(len1 + len2).fill(0)
     
    let i_n1 = 0
    let i_n2 = 0
 
    for (var i = len1 - 1; i > -1 ; i --)
    {
        let carry = 0
        let n1 = (num1[i]).charCodeAt(0) - 48
 
        i_n2 = 0
 
        for (var j = len2 - 1; j > -1; j--)
        {
            let n2 = (num2[j]).charCodeAt(0) - 48
         
            let summ = n1 * n2 + result[i_n1 + i_n2] + carry
 
            carry = Math.floor(summ / 10)

            result[i_n1 + i_n2] = summ % 10
 
            i_n2 += 1
        }
 
        if (carry > 0){
            result[i_n1 + i_n2] += carry
        }
 
        i_n1 += 1
         
    }
        i = result.length - 1
        while (i >= 0 && result[i] == 0){
            i -= 1
        }
    
        if (i == -1){
            return "0"
        }

        let s = ""
        while (i >= 0)
        {
            s += String.fromCharCode(result[i] + 48)
            i -= 1
        }
    
        return s
        }
    
    let str1 = "99934254552352341241234523456"
    let str2 = "14928906457023476457253643127"
    
    if((str1[0] == '-' || str2[0] == '-') &&
    (str1[0] != '-' || str2[0] != '-'))
        process.stdout.write("-")
    
    
    if(str1[0] == '-' && str2[0] != '-')
        str1.shift()
    else if(str1[0] != '-' && str2[0] == '-')
        str2.shift()
    else if(str1[0] == '-' && str2[0] == '-')
    {
        str1.shift()
        str2.shift()
    }
 
console.log("Перемножение больших чисел",multiply(str1, str2))
}