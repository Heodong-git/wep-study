class people    
{
    age = 0;
    name = "";

    constructor(age, name)
    {
        this.age = age;
        this.name = name;
    }

    showname()
    {
        console.log('나는 people class 입니다.');
    }
}

class mangbung extends people
{
    constructor(age, name)
    {
        super(age, name);
    }

    // @override
    showname() 
    {
        console.log('나는 mangbung class 입니다.');
    }
}

let testmangbung = new mangbung('34', 'mangbung');

testmangbung.showname();
