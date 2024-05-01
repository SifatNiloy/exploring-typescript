{

    //union types

    type FrontendDev= 'fakibazDev' | 'juniorDev'  //string literal type for union
    type FullStackDev= 'FrontendDev' | "expertDev"

    type Developer= "FrontendDev" | "FullStackDev"

    const newDev: FrontendDev = 'juniorDev';

    type User={
        name: string,
        email? : string,
        age: number,
        gender: 'Male' | 'Female',
        BloodGroup: "A" | "B" | "O" | "AB",
    }


    //intersection type
    type FrontendDeveloper={
        skills: string[];
        designation1: 'Frontend Developer';
        
    }
    type BackendDeveloper={
        skills: string[];
        designation2: 'Backend Developer';

    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const sifat: FullStackDeveloper ={
        skills: ["HTML", 'CSS', "Express"],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }

}