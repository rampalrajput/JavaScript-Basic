
import axios from 'axios';

async function userdeatils() {
  try {
    const response = await axios.get('https://dummyjson.com/users');

    response.data.users.forEach((user, index) => {
      console.log(`User ${index + 1}:`);
      console.log(user); // logs the full user object
      console.log('----------------------');
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

userdeatils();
