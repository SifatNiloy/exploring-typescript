{
//type assersion
let anything: any;

anything= "next level web development";
anything=123;
 (anything as number).toString

 const kgTogm= (value :string| number): string|number| undefined=>{
    if(typeof value==='string'){
        const converteValue= parseFloat(value)*1000;
        return converteValue;
    }
    if(typeof value==='number'){
        return value*1000;
    }

const result1= kgTogm(234) as number;
type customeError={
    message: string ;
}
try{
    
}
catch(error){
    console.log((error) as customeError)
}
 }
//
}