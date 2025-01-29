// In-place Quick Sort function
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSortInPlace(arr, low, pi - 1);
        quickSortInPlace(arr, pi + 1, high);
    }
}

// Partition function for in-place sorting
function partition(arr, low, high) {
    const pivot = arr[high];  // Choose the pivot (last element)
    let i = low - 1;  // Index of the smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap arr[i] and arr[j]
        }
    }

    // Swap pivot element with the element at index i + 1
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;  // Return the partition index
}

// Example usage:
const arr = [10, 7, 8, 9, 1, 5];
quickSortInPlace(arr);
console.log("Sorted array:", arr);
