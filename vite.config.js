import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import reactESLint  from 'eslint-plugin-react';
// import eslint from 'vite-plugin-eslint';

export default defineConfig({
    forceConsistentCasingInFileNames: "false",
    plugins: [
        react(),
        // eslint({
        //     cache: false,
        //     include: ['./resources/**/*.js', './resources/**/*.jsx'],
        //     exclude: [],
        // }),
        // reactESLint(),
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        tailwindcss()
    ],
});
