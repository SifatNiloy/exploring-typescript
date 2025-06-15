{
//constraints

const addCourseToStudent=<T extends {id: number; name: string; email: string}>(student: T)=>{
    const course=" next level web development "

    return {
        ...student, 
        course
    }
}

const student3= addCourseToStudent({id: 32, name: 'emni', email: 'emni@gmail.com',emni:'emni'})
const student1=addCourseToStudent({id: 23, name: 'Mr x', email: 'X@gmail.com', devtype: 'NLWD'})
const student2=addCourseToStudent({id: 432, name: 'Mr Y', email: 'Y@gmail.com', devtype: 'NLWD', hasWatch: 'apple watch'})

}