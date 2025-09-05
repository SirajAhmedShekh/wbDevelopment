let nums = [2,11,7,15];
let target = 9;
 function twosum(){
for(let i=0;i<nums.length;i++){
    for(let j=1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
return [i,j];
        }
    }
}
return []
}
let ans=twosum();
console.log(ans);
