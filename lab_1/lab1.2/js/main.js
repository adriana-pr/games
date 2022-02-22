document.querySelector('.btn').onclick = myClick;

function myClick(){
    let text='',
        count=0;
        text = document.querySelector('textarea').value;
        text = text.replace(/\s/g, ',');
    //  document.querySelector('.out').innerHTML = number;
    for(let i = 0; i<text.length; i++){
        if((text.charCodeAt(i) < 32 || text.charCodeAt(i) >63) &&  (text.charCodeAt(i+1) > 32 && text.charCodeAt(i+1) <63)){
            count++;
        }
        if((text.charCodeAt(i) < 32 || text.charCodeAt(i) >63) && text[i+1]==undefined){
          count++;
         }
    }
    // document.querySelector('.out').innerHTML = count;
  if(text!=''){
    document.querySelector('.out').innerHTML = count;
    count=0
  }
  else {
      document.querySelector('.out').innerHTML = 'Рядок порожній';
  }
}