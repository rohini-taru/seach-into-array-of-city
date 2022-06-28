// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const arr = ['Pune', 'Maharashtra', 'MP', 'Panvel', 'Pali'];
function search(keyword) {
  //Implementation
  var res = [];
  // console.log(keyword.toString());
  const regex = new RegExp('^' + keyword.toLowerCase()); // /^p/g

  arr.forEach((ele) => {
    if (regex.test(ele.toLowerCase())) {
      res.push(ele);
    }
  });

  return res;
}

const result = search('p');
console.log(result); // ['Pune', 'Panvel', 'Pali']
