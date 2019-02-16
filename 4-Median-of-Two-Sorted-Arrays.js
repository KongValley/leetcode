/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  nums1.push(...nums2)
  const sum = nums1
  const sortResult = sum.sort((a,b) => {
    return a-b
  })

  console.log(sortResult);
  if(sortResult.length%2) {
    return sortResult[Math.floor(sortResult.length/2)]
  }else return (sortResult[Math.floor(sortResult.length/2)]+sortResult[Math.floor(sortResult.length/2-1)])/2
};

// console.log(findMedianSortedArrays([1,3],[2]));
console.log(findMedianSortedArrays([1, 2],[3, 4]));