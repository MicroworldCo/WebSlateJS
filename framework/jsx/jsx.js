import { read,split }from './assets/assets.js';
import componentLib from './framework/components.js'
var config = read('config/webslate.config');
var components = split(config.split(',').toString().replace(",",""),'\n')[0].split(',')
var dataProviderName = split(config.split(',').toString().replace(",",""),'\n')[1]
var componentsLength = components.length;
var componentsFiles = {};
for (var counter = 0;componentsLength+1>counter;counter++;){
    var component = read(`http://localhost:3000/components/${components[counter]}`);
    componentsFiles[components[counter]] = component;
};
var dataProvider = import(`localhost:3000/dataProviders/${dataProviderName}`);
var componethelper = new componentLib.component(components)
for(var counter = 0; componentsFiles.size>counter;counter++;){
    
}
