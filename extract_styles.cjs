const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\d8bc68ca-8644-479e-a46f-084b22b46e43\\.system_generated\\steps\\5\\content.md', 'utf8');

const styleRegex = /<style>([\s\S]*?)<\/style>/;
const match = content.match(styleRegex);

if (match && match[1]) {
    const tailwindDirectives = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n`;
    fs.writeFileSync('d:\\pp-5\\src\\index.css', tailwindDirectives + match[1]);
    console.log('Successfully extracted and saved CSS to src/index.css');
} else {
    console.log('No <style> block found in the content.md file.');
}
