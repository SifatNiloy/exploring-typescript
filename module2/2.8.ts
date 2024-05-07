{
//promise
type ToDo={
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const getToDo = async(): Promise <ToDo> =>{
    const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data= await res.json()
    return data;
    // console.log(data);
}
getToDo();
//simulate
type Something= {something: string};
const createPromise=(): Promise<Something>=>{
    return new Promise<Something>((resolve, reject)=>{
        const data:Something ={something: "some "};
        if(data){
            resolve(data)
        }
        else{
            reject('failed to load data')
        }
    })
}
//calling create promise function
const showData= async(): Promise <Something>=>{
    const data:Something = await createPromise();
    return data;
    // console.log(data)
}
showData();



}