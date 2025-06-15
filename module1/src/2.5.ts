{
//function with generic
const createArray=(param:string): string[]=>{
    return [param]
}
const createArrayWithGeneric=<T>(param:T): T[]=>{
    return [param]
}
const result1= createArray("Bangladesh")
const resGeneric= createArrayWithGeneric<boolean>(true)
type user={id: number, name: string}
const resGenericObj= createArrayWithGeneric<user>({id: 222, name: 'Mr x'})


const createArrayWithTuple=<T,Q>(param1:T, param2: Q): [T, Q]=>{
    return [param1, param2]
}
const res1= createArrayWithTuple<string, number>("Bangladesh", 222)
const res2= createArrayWithTuple<string, {name:string}>("Bangladesh", {name: 'asia'})

const addCourseToStudent=<T>(student: T)=>{
    const course=" next level web development "

    return {
        ...student, 
        course
    }
}
const student1=addCourseToStudent({name: 'Mr x', email: 'X@gmail.com', devtype: 'NLWD'})
const student2=addCourseToStudent({name: 'Mr Y', email: 'Y@gmail.com', devtype: 'NLWD', hasWatch: 'apple watch'})
}