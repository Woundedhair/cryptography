module.exports = {
  signup: (req, res) => {
    const {email, password} = req.body;
    //console.log(email);
    //console.log(password);
let destiny = ''
let randomDestinies = Math.floor(Math.random() * destinies.length);
destiny = destinies[randomDestinies];
console.log(destiny);

let newEntry = {
  email: email,
  password: password,
  destiny: destiny
}
database.push(newEntry);
console.log(newEntry);
res.status(200).send({success: true})
},
  login: (req, res) => {
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
  let data = ''
    for (let i = 0; i < database.length; i++) {
      if (email === database[i].email) {
        data = database[i];
      }
    }
    if (data === '') {
      res.status(200).send({success: false, message: 'Invalid email'});
    } else if (password === data.password) {
          console.log(data);
      res.status(200).send({success: true, destiny: data.destiny});
    } else {
        res.status(200).send({success: false, message: 'Invalid password'});
      }
    } 
  }
  
const database = [
  {
    email: 'sallybonnet@yahoo.com',
    password: '1234',
    destiny: 'becoming the new Santa'
  },
]

const destinies = [
  'become a well-respected bartender',
  'cure cancer',
  'become a bear whisperer',
  'become a hoarder',
  'become the lead in a high-budget film, filling in for Henry Cavill when he unexpectedly goes MIA',
  'summit Everest',
  'become the next Bruce Willis',
]
