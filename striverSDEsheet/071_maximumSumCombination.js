function _getParentIndex(index) {
  return (index - 1) >> 1;
}

function _getLeftChildIndex(index) {
  return 2 * index + 1;
}

function _getRightChildIndex(index) {
  return 2 * index + 2;
}

function identityFunction(x) {
  return x;
}

class Heap {
  constructor(priorityFunc) {
    this.arr = [];
    this.priorityFunc = priorityFunc || identityFunction;
  }

  size() {
    return this.arr.length;
  }

  push(val) {
    this.arr.push(val);
    this._moveUp(this.arr.length - 1);
  }

  peek() {
    if (this.arr.length === 0) {
      throw new Error('CAN NOT PEEK In EMPTY HEAP');
    }
    return this.arr[0];
  }

  pop() {
    if (this.arr.length === 0) {
      throw new Error('CAN NOT POP FROM EMPTY HEAP');
    }
    const output = this.arr[0];
    const lastVal = this.arr.pop();

    if (this.arr.length > 0) {
      this.arr[0] = lastVal;
      this._moveDown(0);
    }

    return output;
  }

  _moveDown(indexToChange) {
    const heapSize = this.arr.length;
    let index = indexToChange;
    const val = this.arr[indexToChange];
    const priority = this.priorityFunc(val);

    while (index < heapSize) {
      const rightChildIndex = _getRightChildIndex(index);
      const leftChildIndex = _getLeftChildIndex(index);

      let smallerChildIndex = null;

      if (leftChildIndex < heapSize) {
        const leftChildVal = this.arr[leftChildIndex];
        const leftChildPriority = this.priorityFunc(leftChildVal);

        if (leftChildPriority < priority) {
          smallerChildIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < heapSize) {
        const rightChildVal = this.arr[rightChildIndex];
        const rightChildPriority = this.priorityFunc(rightChildVal);
        const currentSmallestPriority = smallerChildIndex == null
          ? priority
          : this.priorityFunc(this.arr[smallerChildIndex]);
        if (rightChildPriority < currentSmallestPriority) {
          smallerChildIndex = rightChildIndex;
        }
      }

      if (smallerChildIndex === null) break;

      this.arr[index] = this.arr[smallerChildIndex];
      this.arr[smallerChildIndex] = val;
      index = smallerChildIndex;
    }
  }

  _moveUp(indexToChange) {
    let index = indexToChange;
    const val = this.arr[index];
    const priority = this.priorityFunc(val);

    while (index > 0) {
      const parentIndex = _getParentIndex(index);
      const parentVal = this.arr[parentIndex];

      if (this.priorityFunc(parentVal) < priority) {
        break;
      }

      this.arr[parentIndex] = val;
      this.arr[index] = parentVal;
      index = parentIndex;
    }
  }
}

function getMinHeap(priorityFuncParam) {
  const priorityFunc = priorityFuncParam || identityFunction;
  return new Heap(priorityFunc);
}

function getMaxHeap(priorityFuncParam) {
  const priorityFunc = priorityFuncParam || identityFunction;
  return new Heap((x) => -priorityFunc(x));
}

module.exports = { 
  solve: function(A, B, C) {
    A.sort((a,b) => a - b);
    B.sort((a,b) => a - b);
    const n = A.length;
    let a = n - 1;
    let b = n - 1;
    function hash(x,y) {
      return (n + 2) * x + y;
    }
    let ans = [];
    let set = new Set();
    set.add(hash(a,b));
    let maxHeap = getMaxHeap(x => x.sum);
    maxHeap.push({
      sum: A[a] + B[b],
      a,
      b
    });
    for(let i = 0; i < C; i++) {
      let max = maxHeap.pop();
      ans.push(max.sum);
      let x = max.a;
      let y = max.b;
      let one = hash(x-1, y);
      let two = hash(x, y-1);
      if(!set.has(one)) {
        set.add(one);
        maxHeap.push({
          sum: A[x - 1] + B[y],
          a: x - 1,
          b: y
        });
      }
      if(!set.has(two)) {
        set.add(two);
        maxHeap.push({
          sum: A[x] + B[y - 1],
          a: x,
          b: y - 1
        }); 
      }
    }
    return ans;
  }
};

