import { reservation } from "../models/reservations";

export namespace ReservationsRepository {

    export const createReservation = async(newReservation: any) => {
        try {
            const newR = await reservation.create(newReservation);
            console.log("Successfully created reservation!!!", newR);

        } catch(err) {
            console.log("some error occured while creating the reservation ", err);
        }
    }

    export const getAllReservations = async() => {
        try{
            const allReservations = await reservation.findAll();
            console.table(allReservations.map((a: { toJSON: () => any; }) => a.toJSON()));
        }
        catch(error){
            console.log("Error while fetching the data of all reservations ", error);
        }
    }

    export const getReservationById = async(reservationId: number) => {
        try{
            const isReserve = await reservation.findByPk(reservationId);
            if(isReserve){
                console.table(isReserve.toJSON());
            }
            else{
                console.log("Reservation not Found");
            }
        }
        catch(error){
            console.log("Error occurred while fetching reservation ",error);
        }
    }

    export const updateReservation = async(reservationId: number,updatedData: object) =>{ 
        try{
            const reserve =await reservation.findByPk(reservationId);
            if(reserve){
                await reserve.update(updatedData);
            }
            else{
                console.log("Reservation not exists ");
            }
        }
        catch(error){
            console.log("Error while fetching the reservation",error);
        }
    }

    export const deleteReservation  = async(reservationId: any) => {
        try{
            const reserve = await reservation.findByPk(reservationId);
            if(reserve){
                await reserve.destroy();
                console.log("Successfully deleted reservation!!");
            }
            else{
                console.log("Reservation not exists ");
            }
        }
        catch(error){
            console.log("Error while fetching the reservation ",error);
        }
    }
}

