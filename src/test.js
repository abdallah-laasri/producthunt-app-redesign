
t=[]
addIfNotExist = (record, ledger) => {
    const exists = ledger.includes(record)
    
    if (!exists) {
        return t = [ record, ...ledger ]
    }
}

addIfNotExist(2, [1,4]) // > [1,4,2]
addIfNotExist(1, [1,4]) // > [1,4]

addKeyValue({ a: 1, b: 2}, "c", 3) // =>  { a: 1, b: 2, c: 3 }
addKeyValue({ a: 1, b: 2}, "a", -1) // =>  { a: -1, b: 2 }


addKeyValue= (obj, key, val) =>{

    return {...obj, [key]: val}

}


Abdellah onClick={addOneTo(state, 'Abdellah')}
Youness onClick={addOneTo(state, 'youness')}
Abdellatif onClick={addOneTo(state, 'abdellatif')}


state = {
    Abdellah: 0,
    Abdellatif: 0,
    youness: 0,
}

addOneTo = (state, name) => {
    return {...state, [name]:state[name] + 1 }
}






a1 = [1,2,3]
a2 = [2, ...a1, 3, 4, 6, 100] =?   [2, 1, ,2, 3, 3, 4, 6, 100]


a = [1,2]
b = [3,4]
c = [...a, ...b] =?

...[1,2,3] =>  1 , 2 , 3
[...[1,2,3]] =>  [1 , 2 , 3]

o1 = { a: 1, b: 2 }
o2 = {...o1}

...{ a: 1, b: 2 } => a: 1, b: 2
                  => {a: 1, b: 2}

a = { a:1, b:2, c:3, d: 100, e: 21 }
b = { d: 4, b:0 }

c = {...a, ...b} => { a:1, b:0, c:3, d:4 }

a = { a:1, b:2, c:3, d: 100, e: 21 }

b = { ...a,  d:10, b:0}

[a, b, c, d]
[1, 2, 3 ,100]


Object.keys(a).map(key => console.log(`- ${a[key]}`))


data = { a: 1, b:2, c: 3, d: 4 }
const { b, ...data1 } = data


{ b: 2, a: 1, c: 3, d: 4 } = data


multiply = (a,b,c,d) => {
    [1,3,4]
}

postNumber = (id, fct) => {
    // get data

    if (fct) {
        fct();
    }
};

get(1);

get(1, () => console.log());

get



addValueToOthers(a, ...names) {
    a > 'MR'
    names > ['ys',[]
}   

multiply('MR ','youness', 'abdellah',3,7,8)
