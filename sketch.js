function createDivs(){
   let bigdiv = document.querySelector('#big');
   let smalldiv;
   let cols = 64;
   let rows = 64;
   let gridcount = cols*rows;
   for (let i = 0; i <= gridcount; i++) {
      if(bigdiv.childElementCount < gridcount){
      smalldiv = document.createElement('div')
      smalldiv.className = 'grids'
      bigdiv.appendChild(smalldiv);
      }
   }
   /*let myRules = document.styleSheets[0];
   let newColor;
   for (let i = 0; i < myRules.cssRules.length; i++) {
      if(myRules.cssRules[i].selectorText === '.grids'){
         newColor = myRules.cssRules[i];
      }       
   }

   function random() {
      const num = Math.min(0, 255)
      console.log(num)
      return num;
    }
    function newcol() {
      console.log ( 'rgb(' + random() + ', ' + random() + ', ' + random() +  ')');
      return 'rgb(' + random() + ', ' + random() + ', ' + random() +  ')';
    }*/

    let smalldivs = document.querySelectorAll('.grids')
   smalldivs.forEach(item => {item.addEventListener('mousemove', function(){
      item.setAttribute('style', 'background: black;');
   })})
   
      
}
 createDivs()
 



    







