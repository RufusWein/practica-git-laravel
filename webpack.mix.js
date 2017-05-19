const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// el primer argumento lleva el fichero con su ruta que incluye determinado framework js (Vue), y el segundo es la salida
mix.js('resources/assets/js/pruebaVue.js', 'public/js')
   //js('resources/assets/js/app.js', 'public/js'); 
   .sass('resources/assets/sass/app.scss', 'public/css')
   .version(); // para evitar el cache del navegador
