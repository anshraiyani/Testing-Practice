export default function reverse(string){
    if(!string) return ""
    return string.split('').reverse().join('')
}