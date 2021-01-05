import { read,split }from './assets/assets.js';
var config = read('config/webslate.config');
var components = Array.from(split(config,':').split(','));
var componentsLength = components.length;
var componentsFiles = [];
for (var counter = 0;componentsLength+1>counter;){
    var component = read(`http://localhost:3000/components/${components[counter]}`);
    componentsFiles.push(component);
};
