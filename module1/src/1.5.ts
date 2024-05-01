//reference type: object

const user:{
    company: 'halozen';  // type=> literal (while a value acts like a type) 
    readonly address: string; // access modifier (readonly) => can't be changed
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
}={
    company: 'halozen',
    address: 'Dhaka',
    firstName: "Sifat",
    lastName: "Niloy",
    isMarried: true,
};
