// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// MAP METHOD

const movements = accounts.map(account => account.movements);
console.log(movements);

// +VE MOVEMENTS
const total = accounts.map(acc => acc.movements)
.flat()
.filter(el => el > 0)
.reduce((acc,sum) => acc + sum,0);
console.log(total);
  
console.log(accounts.find(acc => acc.owner === 'Sarah Smith'));

const positiveMovements = accounts.flatMap(acc => acc.movements)
.filter((el) => el > 0);

const negativeMovements = accounts.flatMap(acc => acc.movements)
.filter(el => el < 0);

console.log(positiveMovements,negativeMovements);


// coding challenge

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
dogs.forEach(dog => {
  dog['recommended'] = Math.trunc((dog.weight ** 0.75) * 28);
})

//2. find sarah's dog
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(
`Sarah's dog eat too ${sarahDog.curFood > sarahDog.recommended?'much':'little'}`);

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommended)
.flatMap((currDog) => currDog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommended)
.flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
console.log(
`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`,`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);




