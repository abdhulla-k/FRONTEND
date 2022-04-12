// what is meant by class ?
// actually, the class is a type to create objects

/* you can create objects without the help of classes. */
// eg

var object1 = {
    name : 'Alen',
    yeb: '2000',
    getage: function () {
        return new Date().getFullYear()-this.yeb;
    }
}

console.log(object1) /* it will work. if you wanted to create more objects like student2, student3 etc., you would
 may need to create same code multiple times. insted of writing same code multiple times, you  could create a type
 to crate objects. that actually class is. */

// eg of a class

class ClassName {

    name;
    yeb;

    getage() {
        return new Date().getFullYear()-this.yeb;
    }

}
