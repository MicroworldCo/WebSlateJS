import { assets } from './../assets/assets.js';
var path = document.location.pathname;
var assetsLib = new assets()
assetsLib.page(path);