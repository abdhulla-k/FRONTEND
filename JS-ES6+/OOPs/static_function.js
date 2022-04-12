// what is static function ?
// static function is related to morethan one object

class Name{
    constructor( name, yob){

        this.name = name;
        this.yob = yob ;
    }

    // keyword 'static' is using for create static function
    static print_name(){
        console.log( name1.name, name2.name ) // this function prints all names of given object
    }


    // static function
    static PrintMinYob( ...args ){
        var arr = args.map(( item => item.yob ));
        return Math.min(...arr);  // this static function returns the minimom year of birth
    }
}


// create object
var name1 = new Name('abdhu', 2000 )
var name2 = new Name('tome', 1999 )


// call static function with class like below
Name.print_name()
console.log(Name.PrintMinYob( name1, name2 ))