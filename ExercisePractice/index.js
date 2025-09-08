// two sum problem

// let nums = [2,11,7,15];
// let target = 9;
//  function twosum(){
// for(let i=0;i<nums.length;i++){
//     for(let j=1;j<nums.length;j++){
//         if(nums[i]+nums[j]===target){
// return [i,j];
//         }
//     }
// }
// return []
// }
// let ans=twosum();
// console.log(ans);


// let arr = 121;

// function isPalindrome(x){
// let newarray = x.toString().split("");
// let jhola = "";
// for(let i=newarray.length-1; i>=0;i--){
//     jhola += newarray[i];
// }
// if(jhola == arr) return true; else return false ;
// }
// let result = isPalindrome(arr)
// console.log(result);

// let strs = ["flower","flow","flight"];
// let target ="";

// function comman (){
// if(target=[0]){
//     for(let i=0;i<strs.length;i++){
//         target.push(strs)
//         for(let j=i+1; j<strs.length;i++){
//             target.push(strs[i])
//         } 
//     }
// }
// if(strs[i]==strs[j]){
//     }
//     return target;
// }

// let ans = comman();
// console.log(ans);


let arr = ["flower","flow","flight"]

function isPalindrome(){
    let jhola = arr[0];
    let jholaLen = jhola.length;
    for(let i=0; i<arr.length; i++){
        let current_str = arr[i];
        while(jhola !== current_str.substring(0, jholaLen)){
    jholaLen--;
    if(jholaLen === 0) return ""
    jhola = jhola.substring(0, jholaLen);
    
        }
    }
    return jhola;
}
let ans = isPalindrome();
console.log(ans);
