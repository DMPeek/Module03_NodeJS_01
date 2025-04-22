// Operations: Object Access, Invocation
console.log("What's your name?");

// Operations: object access, Invocation, Function Call
process.stdin.on('data', function(data) {

    // Operations: Assignment, Invocation
    const name = data.toString().trim();
    
    // Operations: object access, invocation
    console.log(`Hello, ${name}!`);

});
