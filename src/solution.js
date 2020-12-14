[1,2,3].myMap(function(item,idx, arr){
    arr.push(1);
    return `${this.id} ${item}`;
}, { id: 9 })

Array.prototype.myMap = function (callback, value) {

    var obj = [...this];
    var i = 0;
    var returnArr = [];
    while(i < this.length) {
        returnArr[i] = callback.call(value, obj[i], i, obj);
        i++;
    }

    return returnArr;
}

const setTime = function(value) {
    var counter = value;
    return () => {
        return setInterval(() => {
            console.log(counter++);
        }, 1000);
    }
}

function test() {
    return function() {
        console.log('test');
    }
}

var t = test();
var t1 = new test();


const emp = {
    id: '123',
    name: 'pottilu',
    getValues: function() {
        console.log(this.id);
    }
}

const emp1 = emp.getValues;