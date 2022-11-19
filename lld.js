class Vechile {
    constructor(t, r) {
        this.type = t;
        this.reg = r;

    }
}



class Bus extends Vechile {

    constructor(r) {
        super('Bus', r)
    }
}
class Car extends Vechile {

    constructor(r) {
        super('Car', r)
    }
}
class Bike extends Vechile {

    constructor(r) {
        super('Bike', r)
    }
}


// let v1 = new Car(5510)
// console.log(v1)





class Slot {
    constructor(n, t) {
        this.number = n;
        this.type = t;
        this.isBooked = false;
    }
}


class ParkingFLoor {
    constructor(floorNumber, maxSlots) {

        // howmany parking floor in pps
        // how many parking slots in each floor

        // let floor=[{},{},{}]   //3 slots in every floor

        this.floorNumber = floorNumber;  // traking floor number
        this.ParkingSlots = [];  // storage for parking slots



        //we need to push   slot object to parking slots

        // this.ParkingSlots[0]= new Slot(1,'Bus')
        // this.ParkingSlots[1]= new Slot(2,'Car')
        // this.ParkingSlots[2]= new Slot(3,'Bike')


        for (let i = 0; i < maxSlots; i++) {
            if (i === 0) {
                this.ParkingSlots.push(new Slot(i + 1, "Bus"))
            } else if (i == 1) {
                this.ParkingSlots.push(new Slot(i + 1, "Car"))
            } else {
                this.ParkingSlots.push(new Slot(i + 1, "Bike"))
            }
        }


    }

}

let pf1 = new ParkingFLoor(1, 3);



class ParkingArea {
    constructor(maxFloors) {
        this.floors = [];
        this.numberofFloors = maxFloors;

        for (let i = 0; i < maxFloors; i++) {


            this.floors[i] = new ParkingFLoor(i + 1, 3)  //3 is no. of slots on every floor

        }
    }

    //lets check if slot is available

    findSlot(type) {


        for (let i = 0; i < this.numberofFloors; i++) {

            //in each floor, how many slots to check 

            //2nd iteration if slot not available

            for (let slot of this.floors[i].ParkingSlots) {

                //comparing below line with findSlot(type)

                if (slot.type === type && slot.isBooked === false) {

                    return { floorNumber: i + 1, found_slot: slot };

                }

            }

        }


        return false;
    }

    bookSlot(vechile){
        let slot = this.findSlot(vechile.type);

        if (slot===false){
            console.log("Parking Slot is Not Availabe")
            return false;

        }else{
            slot.found_slot.isBooked = true;
            console.log("slot:",slot );

        }
        //booking the slot finally

       

    }

}

let p1 = new ParkingArea(3);
let c1= new Car("RJ14 CB2014")

p1.bookSlot(c1);

console.log("p1:",p1)

