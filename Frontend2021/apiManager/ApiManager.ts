import * as APIs from './API';


fetch(APIs.persistRequest, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    subject: 'DATA THATS IMPORTANT',
    description: 'Describing something here',
    attachment: null,
    sender: 'erikH@test.com',
    receiver: 'jenna@test.com',
  }),
});

function gdf2(Email: string) {
  return fetch(APIs.getSentRequestsByEmail + Email)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getRequestAsync(Email: string) {
  try {
    let response = await fetch(
      APIs.getSentRequestsByEmail + Email
    );
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}