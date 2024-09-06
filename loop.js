// CONTOH LOOPING FOR
// for (let i=10; i>= 1; i/= 2) {
//     console.log(i);
// }
// for (let i=1; i<= 10; i+= 2) {
//     console.log(i);
// }
// for (let i=10; i>= 1; i-= 2) {
//     console.log(i);
// }
// for (let i=1; i<= 10; i*= 2) {
//     console.log(i);
// }


// MENDAPATKAN DATA DENGAN ARRAY
// const binatang=['kucing','kanjing','kodok'];
// for (let i=0; i<binatang.length; i++) {
//     console.log(i , binatang[i])
// }


// NESTED LOOP\
//contoh 1
// const pilihan= 'abcd';
// for (let i=1; i<=10; i++) {
//     console.log(`${i}. Soal nomor ${1}:`);
//     for (let j=0; j< pilihan.length; j++) {
//     console.log(`${pilihan [j]},  pilihan jawaban`);
//     }
// }
//contoh 2
// const jawaban= 'abcd';
// for (let q=1; q<=8; q++){
//     console.log (`${q}. soal nomor  ${1}:`);
//     for (let w=0; w <jawaban.length; w++ ){
//         console.log(`${pilihan[w]}. pilihan jawaban`);
//     }
// }


// GET DATA DARI NESTED ARRAY DENGAN NESTED LOOP
// const studentrow=[
//     ['dada','didi','dodo','dudu'],
//     ['dana','dini','dono','dani'],
//     ['jara','jari','joro','jeri']
// ]
// for (let i=0; i<studentrow.length; i++) {
//     const duduk=studentrow[i];
//     console.log(`tempat duduk #${i + 1}`);
//     for (let j=0; j< duduk.length; j++) {
//     console.log(` ${duduk[j]}`);
//     }
// }


// CONTOH LOOPING WHILE

// let num=1
// while (num <10) {
//     console.log(num);
//     num++;
// }

// for (let num=1; num<10; num++) {
//     console.log(num);
// }

// const PASSWORD= 'sunuy130205';

// let  guess= prompt('masukkan password');
// while (guess !==PASSWORD){
//     guess=prompt('masukkan password');
// }
// alert ('selamat password anda benar')


// KATA KUNCI BREAK UNTUK MEMBERHENTIKAN LOOPING

// let input=prompt('hei ketik sesuatu')
// while(true){
//     input=prompt(input);
//     if(input.toLowerCase() ==='berhenti') break;
// }
// alert=('okey');

// for (let i=0; i<1000; i++) {
//     console.log(i);
//     if(i ===50)break;
// }

// MEMBUAT GAME TEBAK TEBAKAN LOOP
// let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
// while (!maximum) {
//     maximum = parseInt(prompt('Masukkan nilai maksimal!'));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);
// let guess = parseInt(prompt('Isi tebakanmu!'));
// while (guess !== targetNum) {
//     if (guess > targetNum) {
//         guess = parseInt(prompt('Angka terlalu tinggi, coba lagi!'));
//     } else {
//         guess = parseInt(prompt('Angka terlalu rendah, coba lagi!'));
//     }
// }

// alert('selamat tebakan benar')


//MELAKUKAN LOOPING MENGGUNAKAN FOR IN PADA OBJECT
// const studentscore = {
//     sani: 10,
//     sana: 21,
//     sono: 22,
//     sene: 32,
// };
// // for (let student in studentscore) {
// //     console.log(`${student}memiliki skor ${studentscore[student]}`);
// // }
// let total=0;
// let scores= Object.values(studentscore);

// for(let score of scores) {
//     total += score
// }
//     console.log (total / scores.length);

