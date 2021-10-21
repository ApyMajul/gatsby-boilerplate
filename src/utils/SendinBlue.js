export default function AddContact(mail) {
  const mykey = process.env.GATSBY_SENDINBLUE_KEY

  const options = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': mykey,
      },
      body: JSON.stringify({
        email: mail,
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [5],
        updateEnabled: false,
      })
  };

  fetch('https://api.sendinblue.com/v3/contacts', options)
    .then((response) => {
      if (response.ok) {
        alert(`Welcome ${mail} !`)
      }
      return response.json()
    })
    .then((response) => {
      if (response.message) {
        alert(response.message)
      }
    })
    .catch((err) => console.log(err));
}
