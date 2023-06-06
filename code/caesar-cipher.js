export default function caesarCipher(string,f){
    const alphabets='abcdefghijklmnopqrstuvwxyz'.split('')
    let result=''
    string=string.toLowerCase()
    for(let i=0;i<string.length;i++){
        if(string[i]!=' '){
            if(string[i]>='a' && string[i]<='z'){
                let index=alphabets.indexOf(string[i])
                result+=alphabets[(index+f)%26]
            } else{
                result+=string[i]
            }
        } else{
            result+=' '
        }
    }
    return result
}