import { sequelize } from './config/connection';
import {author} from './models/authors';
import {book} from './models/books';
import {member} from './models/members';
import {loan} from './models/loans';
import {reservation} from './models/reservations';


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
        console.log("author created");
        await book.sync({force:true});
        console.log("book created");
        await member.sync({force:true});
        console.log("member created");
        await loan.sync({force:true});
        console.log("loan created");
        await reservation.sync({force:true});
        console.log("reservation created");
    } catch(err){
        console.log(err); 
    }
}
createModels();


// synchronizeAllModels();
