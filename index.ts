import { sequelize } from './config/connection';
import {author} from './models/authors';
import {book} from './models/books';
import {member} from './models/members';
import {loan} from './models/loans';
import {reservation} from './models/reservations';

import { getAllAuthors } from './repositories/AuthorsRepo';
import { insertAuthors, insertBooks, insertLoans, insertMembers, insertReservations } from './insertion';


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

        insertAuthors();
        insertBooks();
        insertMembers();
        insertLoans();
        insertReservations();

        
    } catch(err){
        console.log(err); 
    }
}
createModels();

// synchronizeAllModels();
