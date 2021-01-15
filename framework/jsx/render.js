import { read,split }from './assets/assets.js';
import componentLib from './framework/components.js';
(function(){
    var config = read('config/webslate.config');
    var components = split(config.split(',').toString().replace(",",""),'\n')[0].split(',');
    var dataProviderName = split(config.split(',').toString().replace(",",""),'\n')[1];
    var componentsLength = components.length;
    var componentFiles = {};
    var dataProvider = import(`localhost:3000/dataProviders/${dataProviderName}`);
    var componenthelper = new componentLib(components);
    var html = new Map();

    for (var counter = 0;componentsLength+1>counter;counter++){
        var component = read(`http://localhost:3000/components/${components[counter]}`);
        componentFiles.set(components[counter],component);
    }
    for(counter = 0; componentFiles.size>counter;counter++){
        var id = componenthelper.getcomponentids(componentFiles.get(components[counter]));
        var props = dataProvider.getprops(id);
        var componenthtml = componenthelper.componentHtml(componentFiles.get(components[counter]),props);
        html.set(components[counter] , componenthtml);
    }
    return html;
}
);