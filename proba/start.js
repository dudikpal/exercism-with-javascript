class Solution {
    print(arr,n){
        //code here
        let resultArray = [];
        for (let i = 0; i < n; i += 2) {

            resultArray.push(arr[i]);


        }
        console.log(...resultArray);
    }
}
    const arr = [1, 2, 3, 4, 5];
    new Solution().print(arr, 5);

