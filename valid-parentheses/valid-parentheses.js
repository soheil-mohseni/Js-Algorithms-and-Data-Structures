var isValid = function(s) {
    // Stack to store opening brackets
    const stack = [];
    
    // Map closing bracket to its corresponding opening bracket
    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let char of s) {
        
        // If char is an opening bracket, push it to the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // Pop the top element from the stack
            const top = stack.pop();
            
            // If the stack was empty or top doesn't match the corresponding opening bracket
            if (top !== mapping[char]) {
                return false; // Invalid string
            }
        }
    }
    
    // If stack is empty after processing all characters, it's valid
    return stack.length === 0;
};
