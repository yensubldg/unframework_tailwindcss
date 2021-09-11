const mix = require("laravel-mix");
require("laravel-mix-tailwind");

mix.sass("resources/scss/app.scss", "public/css").tailwind();
