import path from 'path';
import { fileURLToPath } from 'url';

// To support __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.js', // Your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // Remove the library configuration
    },
    resolve: {
        extensions: ['.js', '.json'], // Allow importing these file types
    },
    experiments: {
        outputModule: true, // Enable module output
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                type: 'json', // Handle JSON files
            },
        ],
    },
    mode: 'development', // or 'production'
};
