/**
 *
 * heapify
 * @param {number[]} arr
 * @param {number} n
 * @param {number} i
 *
 * buildHeap
 * @param {number[]} arr
 * @param {number} n 
 * 
 * heapSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {

    heapify(arr, n, i) {
        let l = i * 2 + 1, r = i * 2 + 2, largest = i;
        
        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }
        
        if (largest != i) {
            this.swap(arr, i, largest);
            this.heapify(arr, n, largest);
        }
    }
    
    buildHeap(arr, n) {
        for (let i = n; i >= 0; i--) {
            this.heapify(arr, n, i);
        }
    }
    
    heapSort(arr, n) {
        this.buildHeap(arr, n);
        
        for (let i = n - 1; i > 0; i--) {
            this.swap(arr, 0, i);
            this.heapify(arr, i, 0);
        }
    }
    
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
