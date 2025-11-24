// Here, the output will be:
// With fs.readFile()
// Reading a file using asynchronous JS.

// This is because the JS thread does not wait for the fs.readFile() function to finish execution.
// The fs.readFile() function is an asynchronous function. So, it is given to a worker thread and the main JS thread executes the next line of code and prints it.
// If the JS thread has become idle and the worker thread has finished the task of reading file, the JS thread runs the callback function which prints the output (either content or error).
// If the JS thread is not idle, it will not run the callback function and will continue with its the task. After completion it will run the callback function.
// Hence, "With fs.readFile()" is printed first and then the file content is printed.

// A brief overview of complete process for any asychronous process:
// The JS thread starts executing code in a call stack in a synchronous order.
// If an asynchronous method comes, it will run by a worker thread and the JS thread will keep continuing its work in call stack.
// Once the worker thread finishes executing, it sends the callback function to a queue. The queue and call stack are different components.
// If there are multiple asynchronous functions in a program, the one which takes shorter time will be sent first to the queue.
// When the JS thread becomes idle, then the callback functions from queue are shifted to the call stack using Event loop.
// Event loop has just one job, i.e., to keep checking queue and if found something, push it to call stack and delete from the queue.

