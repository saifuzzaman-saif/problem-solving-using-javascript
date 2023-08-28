var MyStack = function() {
    this.q = new Queue();
    this.topVal = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.topVal = x;
    this.q.enqueue(x);

    for (let i = 1; i < this.q.size(); i++) {
        this.q.enqueue(this.q.dequeue());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let popped = this.q.dequeue();

    if (!this.q.isEmpty()) {
        this.topVal = this.q.front();
    }

    return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.topVal;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
 
