{
//conditional type
type a1= number;
type b1= string;
type x= a1 extends null ? true :false;
type y= a1 extends null ? true : b1 extends undefined? undefined : any 

//
type rich={
    bike: string;
    car: string;
    ship: string;
}
// bike car ship ache kina
// type checkVehicle<T>= T extends "bike" | "car" | "ship"? true : false;
type checkVehicle<T>= T extends keyof rich ? true : false;
type hasShip = checkVehicle<"ship">
}