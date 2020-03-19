userResult = document.createElement('p');

const form = document.querySelector('form');
form.append(userResult);

const inputVal = document.querySelector('#check');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputResult = inputVal.value;

    function rot13(str) {
        const arrROT13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
        const arrAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let arrToCheck = str.split('');
      
        let resArr = [];
        for(let i of arrToCheck) {
          if(arrROT13.indexOf(i) != -1) {
            let index = arrROT13.indexOf(i);
            resArr.push(arrAlpha[index]);
          }
          else {
            resArr.push(i);
          }
        }
        const strRes = resArr.join('');
        return strRes
    }

    userResult.innerText = rot13(inputResult);
});