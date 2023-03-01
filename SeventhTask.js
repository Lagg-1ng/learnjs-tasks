export function product(){
// класс данных “Товар”
class Product {
    constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    }
    }
    
    String.prototype.contains = String.prototype.includes;
    String.prototype.starts = String.prototype.startsWith;
    String.prototype.ends = String.prototype.endsWith;
    Number.prototype['>'] = function(value) {
    return this > value;
    }
    Number.prototype['<'] = function(value) {
    return this < value;
    }
    Number.prototype['='] = function(value) {
    return this == value;
    }
    Number.prototype['<='] = function(value) {
    return this <= value;
    }
    Number.prototype['>='] = function(value) {
    return this >= value;
    }
    
    // метод получает строку
    function filter(arr, str) {
    const strArr = str.split('&');
    const props = strArr.map(item => ({
    ops: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v))
    }));
    
    const newArr = arr.filter(value => {
    for (let prop of props) {
    if (!value[prop.ops[0]][prop.ops[1]](prop.ops[2]))
    return false;
    }
    return true;
    })
    return newArr;
    }
    
    
    // метод получает строку вида
    //const str = 'name-starts-fd&quantity=5;
    //const str = 'name-starts-fd&quantity-=5';
    //const str = 'name-contains-fd&price-=2-&quantity->5&description-ends-abc';
    const str = 'name-contains-fd&price-=2&quantity->5&description-ends-abc';
    
    // массив объектами такого класса.
    const arr = [new Product("Gofd", 2, 6, "---abc"), new Product("Foofd", 2, 34, "Good abc"),
    new Product("fdMeat", 22, 5, "Good abc"), new Product("Soup", 23, 1, "Good abc"),
    new Product("Milk", 60, 4, "Good milk")
    ];
    
    // На выходе возвращает массив, только с подходящими объектами
    const newArr = filter(arr, str);
    console.log(newArr);
}