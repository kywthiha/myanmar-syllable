function Kth(text){
this.text=text;
this.change=function(){
    text=this.text.replace(/်္/g,'');
    text=this.text.replace(/္/g,'်');
    len=text.length;
    rule={'a':['က','ခ','ဂ','ဃ','င','စ','ဆ','ဇ','ဈ','ဉ','ည','ဋ','ဌ','ဍ','ဎ','ဏ','တ','ထ','ဒ','ဓ','န','ပ','ဖ','ဗ','ဘ','မ','ယ','ရ','လ','ဝ','သ','ဟ','ဠ','အ','၏','ဣ','ဤ','ဥ','ဦ','ဧ','ဩ','ဪ','ဿ','၌','၍','၎','၏'],'b':['\u103a','္','့']};
    reslist=[]
    tems=''
    for(var i=0;i<len;i++){
        if (i==len-1){
            if  (rule['a'].indexOf(text[i]) !== -1){
                reslist.push(tems);
                tems=text[i];
            }
            else
                tems+=text[i]
                reslist.push(tems);
            }
        else if (rule['a'].indexOf(text[i]) !== -1 && rule['b'].indexOf(text[i+1]) !== -1)
            tems+=text[i]
        else if (rule['a'].indexOf(text[i]) !== -1){
            reslist.push(tems)
            tems=text[i]
            }
        else
            tems+=text[i]
        }
    return reslist;
};

}
