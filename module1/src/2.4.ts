{
// interface- generic
interface developer<T, X= null>{
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartwatch: T
    bike?: X
}
 type xiaomiWatch={
    brand: string;
    model: string;
    display: string;
}
const poorDeveloper: developer<xiaomiWatch> ={
    name: 'sifat',
    computer: {
        brand: 'asus',
        model: 'sjks ',
        releaseYear: 2019,
    },
    smartwatch: {
        brand: 'xiaomi',
        model: 'kw66', 
        display: 'amoled'
    },

}

interface appleWatch{
    brand: string;
    model: string;
    heartbeat: boolean;
    sleepTrack: boolean;
}
interface yamahaBike{
    model: string;
    engineCapacity: string;
}
const richDeveloper: developer<appleWatch, yamahaBike > ={
    name: 'sifat',
    computer: {
        brand: 'asus',
        model: 'k934 ',
        releaseYear: 2023,
    },
    smartwatch: {
        brand: 'apple',
        model: 'watch 7', 
        heartbeat: true,
        sleepTrack: true,
    },
    bike: {
        model: "yamaha", 
        engineCapacity: "100cc"
    }
}


}