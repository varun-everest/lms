import { author } from './models/authors';
import { book } from './models/books';
import { member } from './models/members';
import { loan } from './models/loans';
import { reservation } from './models/reservations';

export namespace Insertion {
  export const insertAuthors = async function (){
    try {
      await author.bulkCreate([
        { name: 'Usha', birth_year: 2002, nationality: 'Indian' },
        { name: 'Anoosha', birth_year: 2003, nationality: 'Indian' },
        { name: 'Mamatha', birth_year: 2002, nationality: 'Australian' },
        { name: 'Vinay', birth_year: 2000, nationality: 'Russian' },
        { name: 'Anjani', birth_year: 2001, nationality: 'Newzeland' }
      ]);
      console.log('Sample authors inserted successfully');
    } catch (err) {
      console.error('Error occured while inserting authors:', err);
    }
  };
  
  export const insertBooks = async () => {
      try {
        await book.bulkCreate([
          { tite: 'Behaving like a cat', publication_year: 2015, authorId: 1, genre: 'Comedy', isbn: '9392990600121' },
          { tite: 'Different ways of laughing', publication_year: 2016, authorId: 2, genre: 'Comedy', isbn: '9396303522765' },
          { tite: 'Getting korean skin', publication_year: 2014, authorId: 3, genre: 'Health', isbn: '9346016948123' },
          { tite: 'Skin care remedies', publication_year: 2012, authorId: 4, genre: 'Health', isbn: '7097001443143' },
          { tite: 'Reaching higher heights', publication_year: 2017, authorId: 5, genre: 'Motivation', isbn: '9574187654543' }
        
        ]);
        console.log('Sample books inserted successfully');
      } catch (err) {
        console.error('Error occurred while inserting books:', err);
      }
  };
  
  export const insertMembers = async () => {
      try {
        await member.bulkCreate([
          { name: 'Keerthana', address: 'Karimnagar', phone_number: '9393939933', email: 'keerthana@gmail.com' },
          { name: 'Rekha', address: 'Kamareddi', phone_number: '6303522765', email: 'rekha@gmail.com' },
          { name: 'Anusha', address: 'Khammam', phone_number: '7097001443', email: 'anusha@gmail.com' },
          { name: 'Sreeja', address: 'Jagtiyal', phone_number: '9346016948', email: 'sreeja@gmail.com' },
          { name: 'Anjanli', address: 'Warangal', phone_number: '6304962029', email: 'anjali@gmail.com' }
        ]);
        console.log('Sample members inserted successfully');
      } catch (err) {
        console.error('Error occurred while inserting members:', err);
      }
  };
  
  export const insertLoans = async () => {
      try {
        await loan.bulkCreate([
          { book_id: 1, member_id: 1, loan_date: '2023-06-01', due_date: '2023-06-15' },
          { book_id: 2, member_id: 2, loan_date: '2023-06-10', due_date: '2023-06-24' },
          { book_id: 3, member_id: 3, loan_date: '2023-06-15', due_date: '2023-06-29' },
          { book_id: 4, member_id: 4, loan_date: '2023-06-20', due_date: '2023-07-04' },
          { book_id: 5, member_id: 5, loan_date: '2023-06-25', due_date: '2023-07-09' }
        ]);
        console.log('Sample loans inserted successfully');
      } catch (err) {
        console.error('Error occurred while inserting loans:', err);
      }
    };
    
    export const insertReservations = async () => {
      try {
        await reservation.bulkCreate([
          { book_id: 1, member_id: 1, reservation_date: '2023-07-01' },
          { book_id: 2, member_id: 2, reservation_date: '2023-07-02' },
          { book_id: 3, member_id: 3, reservation_date: '2023-07-03' },
          { book_id: 4, member_id: 4, reservation_date: '2023-07-04' },
          { book_id: 5, member_id: 5, reservation_date: '2023-07-05' }
        ]);
        console.log('Sample reservations inserted successfully');
      } catch (err) {
        console.error('Error occurred while inserting reservations:', err);
      }
    };
  }
