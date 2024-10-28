import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        host: 'localhost', // Asegúrate de que esto esté configurado
        port: 5173, // O el puerto que estés utilizando
        strictPort: true, // Esto asegura que Vite no cambie de puerto si está ocupado
    },
});
