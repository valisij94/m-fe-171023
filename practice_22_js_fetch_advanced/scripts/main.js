// Для задачи №1
const task1Demo = () => {
  const firstPromise = new Promise( (resolve, reject) => {
      setTimeout( () => {
          console.log('First promise finished!')
          resolve(5)
      }, 2000);
  });
  const secondPromise = new Promise( (resolve, reject) => {
      setTimeout( () => {
          console.log('Second promise finished!')
          resolve(7)
      }, 3000);
  });
  // Здесь нужно дождаться выполнения обеих промисов и вывести сумму результатов в консоль
}



// Для задачи №3
const task3Demo = () => {
  const firstPromise = new Promise( (resolve, reject) => {
      setTimeout( () => {
          console.log('First promise finished!')
          resolve(5)
      }, 2000);
  });
  const secondPromise = new Promise( (resolve, reject) => {
      setTimeout( () => {
          const rand = Math.random();
          if (rand < 0.5) {
              console.log('Second promise rejected!')
              reject(7);
          }
          else {
              console.log('Second promise finished!')
              resolve(7);
          }
      }, 3000);
  });
  // Здесь нужно добавить логику в соответствии с постановкой задачи.
}

// Для задачи 4
const fastAndFurious = () => {
   const participants = [
    { name: 'Brian O`Conner', car: 'Nissan Skyline' },
    { name: 'Dominic Toretto', car: 'Dodge Charger'},
    { name: 'Vince', car: 'Nissan Maxima' }
   ];
   const results = [];
   for (let ptr of participants) {
    const rand = Math.random() * 1000;
    results.push( new Promise( resolve => {
      setTimeout( () => {
        resolve(`${ptr.name} on ${ptr.car}`);
      }, rand );
    }));
   }
   return results;
}