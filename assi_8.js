//8. Fetch data of google page using note-fetch using async-await model.

//var fetch = require('node-fetch')

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


async function asyncajaxawait()
{
  const res = await fetch('https://www.google.com/')
  console.log(res);
}

asyncajaxawait();