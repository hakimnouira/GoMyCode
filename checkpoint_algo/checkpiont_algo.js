function checkpiont_algo( ch ) {
    var k={};
    var j=0;
    var tab=["a","e","i","o","u"];
    k.words=0;
    k.vowel=0;
    k.lengthh=ch.length-1;
    for(i=0;i<ch.length-1;i++){
        if(ch[i]!=" "){
      for(j=0;j<tab.length;j++){

 if(ch[i]===tab[j]){   k.vowel++;
                   break ;}
      }
 k.words++;
          
        } else {
            k.lengthh--;
        }
    }
    return k }