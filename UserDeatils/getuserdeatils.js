


const userDeatils =  async () => {
   
  try{
      return fetch('https://dummyjson.com/users')
              .then( res => res.json());
  } catch(error) {
    console.log('Error Occured!', error);
  }
}

 userDeatils()
              .then((response => {
                 console.log(response.users[0].firstname)
              }))
              .catch(error => {
                 console.log('Error', error)
              })