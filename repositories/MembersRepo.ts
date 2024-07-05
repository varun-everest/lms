import { member } from "../models/members";

export namespace MembersRepositpory {

    export const createMember = async(newMember: any) => {
        try {
            const newM = await member.create(newMember);
            console.log("Successfully created member!!!", newM);
    
        } catch(err) {
            console.log("some error occured while creating the member ", err);
        }
    }
    
    export const getAllMembers = async() => {
        try{
            const allMembers = await member.findAll();
            console.table(allMembers.map((a: { toJSON: () => any; }) => a.toJSON()));
        }
        catch(error){
            console.log("Error while fetching the data of all members ", error);
        }
    }
    
    export const getMemberById = async(memberId: number) => {
        try{
            const isMember = await member.findByPk(memberId);
            if(isMember){
                console.table(isMember.toJSON());
            }
            else{
                console.log("Member not Found");
            }
        }
        catch(error){
            console.log("Error occurred while fetching member",error);
        }
    }
    
    export const updateMember = async(memberId: number,updatedData: object) =>{ 
        try{
            const mem =await member.findByPk(memberId);
            if(mem){
                await mem.update(updatedData);
            }
            else{
                console.log("Member not exists ");
            }
        }
        catch(error){
            console.log("Error while fetching the member ",error);
        }
    }
    
    export const deleteMember = async(memberId: any) => {
        try{
            const mem = await member.findByPk(memberId);
            if(mem){
                await mem.destroy();
                console.log("Successfully deleted member!!");
            }
            else{
                console.log("Member not exists ");
            }
        }
        catch(error){
            console.log("Error while fetching the member ",error);
        }
    }
}

