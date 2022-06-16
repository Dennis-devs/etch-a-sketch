function createDivs(){
   let bigdiv = document.querySelector('#big');
   let cols = 16;
   let rows = 16;
   let gridcount = cols*rows;
   for (let i = 0; i <= gridcount; i++) {
      if(bigdiv.childElementCount < gridcount){
      let smalldiv = document.createElement('div')
      smalldiv.className = 'grids'
      bigdiv.appendChild(smalldiv)
      }
   }
  

}
 createDivs()




    







