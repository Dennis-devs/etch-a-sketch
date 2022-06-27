
function createDivs(){

   let arrGrids = gridRange();
   

/*prompt is used here to set the sketch area, another option is using input and buttons and where user enters desired size*/
   function setWidth(){ 
      let input1 = parseInt(prompt("Set the width of the sketch area"));
      while(input1 == null){
         input1 = parseInt(prompt("Enter a number between 1 and 100"))
      }
      let checker = validator(input1);
      while (checker == false){
       input1 =  parseInt(prompt("Enter a number between 1 and 40"))
       while(input1 == null){
         input1 = parseInt(prompt("Enter a number between 1 and 100"))
      }
       checker = validator(input1)
      }
      return input1;
   }
   
   function setHeight(){
      let input2 = parseInt(prompt("Set the height of the sketch area"));
      while(input2 == null){
         input2 = parseInt(prompt("Enter a number between 1 and 100"))
      }
      let checker2 = validator(input2);
      while (checker2 == false){
       input2 =  parseInt(prompt("Enter a number between 1 and 100"))
       while(input2 == null){
         input2 = parseInt(prompt("Enter a number between 1 and 100"))
      }
       checker2 = validator(input2)
      }
      return input2;
   }

   function validator(input) {
      return arrGrids.includes(input)
   }
   
   /*the for-loop creates and appends the divs in #big and they appear one div on each line.
   grid template column/rows then puts them into grid formation depending on desired number of cols and rows */
   function makeGrid(cols, rows){
      let bigdiv = document.querySelector('#big');
      bigdiv.style.gridTemplateColumns = `repeat(${cols}, max-content)`;
      bigdiv.style.gridTemplateRows = `repeat(${rows}, max-content)`;

      let grids = document.querySelectorAll('.grids');
      grids.forEach(grid => grid.remove());
      let smalldiv;
      let gridcount = cols*rows;
      for (let i = 0; i < gridcount; i++) {
         if(bigdiv.childElementCount < gridcount){
         smalldiv = document.createElement('div')
         smalldiv.className = 'grids'
         bigdiv.appendChild(smalldiv);
         }
      }
      /*looping through attached stylesheets to change value of a css rule*/
      let myRules = document.styleSheets[0];
      let newColor;
      for (let i = 0; i < myRules.cssRules.length; i++) {
         if(myRules.cssRules[i].selectorText === '.grids'){
            newColor = myRules.cssRules[i];
         }       
      }
      /*Different methods of changing a css style rule. Add a class, use setProperty etc.*/

      /*function min() {
         const num = Math.min(0, 255)
         console.log(num)
         return num;
       }
       function newcol() {
         console.log ( 'rgb(' + min() + ', ' + min() + ', ' + min() +  ')');
         return 'rgb(' + min() + ', ' + min() + ', ' + min() +  ')';
       }*/

       let smalldivs = document.querySelectorAll('.grids')
      smalldivs.forEach(item => {item.addEventListener('mousemove', function(){
         /*let col = newcol();*/
         newColor = item.style.setProperty('background-color', 'rgb(0, 0, 0)');
         /*item.setAttribute('style', 'background: black;');*/
      })})

   }
   /*sets default sketch area*/
   makeGrid(64, 64);
   

   function setGrid(){
      makeGrid(setWidth(), setHeight())
   }
   


   function gridRange(){
      let max = 100;
      let arr = [];
      for (let i = 1; i <= max; i++) {
         if(arr.includes(max[i]) == false){
            arr.push(i) ;   
         }    
      }
      return arr
   }
   
   
   let set = document.querySelector('.set');
   set.addEventListener('click', setGrid)
   /*reset sketch-area*/
   function backcolz(val){
      let smalldivs = document.querySelectorAll('.grids');
      smalldivs.forEach(div => div.setAttribute('style', `background-color: ${val};`))

   }
   backcolz('#f57d7d')
   function backcol(){
      backcolz()
   
   }

   let reset = document.querySelector('.reset');
   reset.addEventListener('click', backcol)
   
   /*set sketch-area color*/
   function changecolz(val){
      let divs = document.querySelectorAll('.grids');
      divs.forEach(div => div.setAttribute('style', `background-color: ${val};`))

   }
   changecolz('newcolz.value')
   function changecolor(){
      changecolz(this.value)
   }

   let newcolz = document.querySelector('#color')
   newcolz.addEventListener('change', changecolor)
   
}
 createDivs()



    







