import { assets } from './../assets/assets.js';
const urlParams = new URLSearchParams(window.location.search);
var path = urlParams.get('page') 
var assetsLib = new assets()
assetsLib.page(path);