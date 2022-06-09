window.onload = function(){
const bigdiv = document.querySelector('#big');
const body  = document.querySelector('#body');
body.appendChild(bigdiv);

/*big.style.display = 'grid';
big.style.gridTemplateColumns= "max-content max-content ";*/

let grids1 = 82;
let grids2 = 42;

let docFrag = document.createDocumentFragment();
let smalldiv;
bigdiv.replaceChildren();
for (let i = 0; i < grids2; ++i) {
    for (let j = 0; j < grids1; ++j) {
        smalldiv = document.createElement('div');
        smalldiv.classList.add('smallgrids');
        smalldiv.className = (i%2 != 0 && j%2 == 0) || (i%2 == 0 && j%2 != 0) ? 'smallgrids2' : 'smallgrids1';
        docFrag.appendChild(smalldiv);
    }
}
bigdiv.appendChild(docFrag);
}

    







