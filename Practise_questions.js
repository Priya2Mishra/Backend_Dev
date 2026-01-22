const fs = require('fs').promises;

async function countWords() {
    try {
        // 1. Read the content of the file
        // Ensure 'input.txt' exists in the same directory
        const data = await fs.readFile('input.txt', 'utf8');

        // 2. Count the words
        // .trim() removes leading/trailing whitespace
        // .split(/\s+/) splits by spaces, tabs, or newlines
        const wordCount = data.trim().split(/\s+/).filter(word => word.length > 0).length;

        // 3. Prepare the message and write to a new file
        const resultMessage = `Total word count: ${wordCount}`;
        await fs.writeFile('output.txt', resultMessage);

        console.log('Success! Word count written to output.txt');
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('Error: input.txt not found. Please create it first.');
        } else {
            console.error('An error occurred:', error.message);
        }
    }
}

countWords();

