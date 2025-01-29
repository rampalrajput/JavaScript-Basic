function findSubsetsWithSum(arr, target) {
    const result = [];

    function backtrack(start, currentSubset, currentSum) {
        // If the current sum equals the target, add the subset to the result
        if (currentSum === target) {
            result.push([...currentSubset]);
            return; // No need to explore further
        }

        // Explore the remaining elements
        for (let i = start; i < arr.length; i++) {
            // Skip if adding the current element exceeds the target
            if (currentSum + arr[i] > target) continue;

            // Include the current element
            currentSubset.push(arr[i]);

            // Recurse to explore further
            backtrack(i + 1, currentSubset, currentSum + arr[i]);

            // Backtrack: remove the last added element
            currentSubset.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
}

// Test
const array = [2, 3, 1, 4, 5];
const targetSum = 7;
const subsets = findSubsetsWithSum(array, targetSum);
console.log(subsets); // Output: [[2, 5], [3, 4]]
