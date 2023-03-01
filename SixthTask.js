export function Calc(){
    let x = 22345;
    let y = 6;
    let z = 0;
    z = x+y;
    console.log("Сложение x с y:",z);
    z = x-y;
    console.log("Вычитание x из y:",z);
    z = x*y;
    console.log("Умножение x на y:",z);
    z = y/x;
    console.log("Деление y на x:",z);
    z = x>y;
    console.log("Проверка больше ли х чем у:",z);
    z = x<y;
    console.log("Проверка меньше ли х чем у:",z);
    z = x%y;
    console.log("Остаток от деления х на у",z);

    z = x ** y;
    console.log(z);
}