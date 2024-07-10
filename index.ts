import { sequelize } from './config/connection';
import {author} from './models/authors';
import {book} from './models/books';
import {member} from './models/members';
import {loan} from './models/loans';
import {reservation} from './models/reservations';

import { Insertion } from './insertion';
import { AuthorsRepository } from './repositories/AuthorsRepo';
import { BooksRepository } from './repositories/BooksRepo';
import { LoanRepository } from './repositories/LoansRepo';
import { MembersRepositpory } from './repositories/MembersRepo';
import { ReservationsRepository } from './repositories/ReservationsRepo';

import { app } from './config/server';


// async function synchronizeAllModels() {
//     try{
//         await sequelize.sync();
//         console.log('Successfully syncronized tables');
//     } catch(err) {
//         console.log('Some error occured ', err);
//     }
// }

async function createModels()
{
    try{
        await author.sync({force:true});
        console.log("author table created");    

        await book.sync({force:true});
        console.log("book table created");
        
        await member.sync({force:true});
        console.log("member table created");     

        await loan.sync({force:true});
        console.log("loan table created");
        
        await reservation.sync({force:true});
        console.log("reservation table created");

        Insertion.insertAuthors();
        Insertion.insertBooks();
        Insertion.insertMembers();
        Insertion.insertLoans();
        Insertion.insertReservations();

        AuthorsRepository.getAllAuthors();
        BooksRepository.getAllBooks();
        MembersRepositpory.getAllMembers();
        LoanRepository.getAllLoans();
        ReservationsRepository.getAllReservations();


    } catch(err){
        console.log("some error occurred while syncronizing the models ",err); 
    }
}
createModels();

// synchronizeAllModels();

