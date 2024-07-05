import { author } from "../models/authors";

export namespace AuthorsRepository {
    export const createAuthor = async(newAuthor: any) => {
        try {
            const newA = await author.create(newAuthor);
            console.log("Successfully created author!!!", newA);
    
        } catch(err) {
            console.log("some error occured while creating the author ", err);
        }
    }
    
    export const getAllAuthors = async() => {
        try{
            const allAuthors = await author.findAll();
            console.table(allAuthors.map((a: { toJSON: () => any; }) => a.toJSON()));
        }
        catch(error){
            console.log("Error while fetching the data of all authors ", error);
        }
    }
    
    export const getAuthorById = async(authorId: number) => {
        try{
            const isAuthor = await author.findByPk(authorId);
            if(isAuthor){
                console.table(isAuthor.toJSON());
            }
            else{
                console.log("Author not Found");
            }
        }
        catch(error){
            console.log("Error occurred while fetching author ",error);
        }
    }
    
    export const updateAuthor = async(authorId: number,updatedData: object) =>{ 
        try{
            const auth =await author.findByPk(authorId);
            if(auth){
                await auth.update(updatedData);
            }
            else{
                console.log("Author not exists ");
            }
        }
        catch(error){
            console.log("Error while fetching the author",error);
        }
    }
    
    export const deleteAuthor = async(authorId: any) => {
        try{
            const auth = await author.findByPk(authorId);
            if(auth){
                await auth.destroy();
                console.log("Successfully deleted author!!");
            }
            else{
                console.log("Author not exists ");
            }
        }
        catch(error){
            console.log("Error while fetching the author ",error);
        }
    }
    
}
