import { loan } from "../models/loans";


const createLoan = async(newLoan: any) => {
    try {
        const newL = await loan.create(newLoan);
        console.log("Successfully created loan!!!", newL);

    } catch(err) {
        console.log("some error occured while creating the loan ", err);
    }
}

const getAllLoans = async() => {
    try{
        const allLoans = await loan.findAll();
        console.table(allLoans.map((a: { toJSON: () => any; }) => a.toJSON()));
    }
    catch(error){
        console.log("Error while fetching the data of all loans ", error);
    }
}

const getLoanById = async(loanId: number) => {
    try{
        const isLoan = await loan.findByPk(loanId);
        if(isLoan){
            console.table(isLoan.toJSON());
        }
        else{
            console.log("Loan not Found");
        }
    }
    catch(error){
        console.log("Error occurred while fetching loan ",error);
    }
}

const updateLoan = async(loanId: number,updatedData: object) =>{ 
    try{
        const lo =await loan.findByPk(loanId);
        if(lo){
            await lo.update(updatedData);
        }
        else{
            console.log("Loan not exists ");
        }
    }
    catch(error){
        console.log("Error while fetching the loan",error);
    }
}

const deleteLoan = async(loanId: any) => {
    try{
        const lo = await loan.findByPk(loanId);
        if(lo){
            await lo.destroy();
            console.log("Successfully deleted loan!!");
        }
        else{
            console.log("Loan not exists ");
        }
    }
    catch(error){
        console.log("Error while fetching the loan ",error);
    }
}

export { createLoan, getAllLoans, getLoanById, updateLoan, deleteLoan };