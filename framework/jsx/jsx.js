(function(){
    import { read,split }from './assets/assets.js';
    import componentLib from './framework/components.js'
    var config = read('config/webslate.config');
    var components = split(config.split(',').toString().replace(",",""),'\n')[0].split(',')
    var dataProviderName = split(config.split(',').toString().replace(",",""),'\n')[1]
    var componentsLength = components.length;
    var componentsFiles = {};
    var dataProvider = import(`localhost:3000/dataProviders/${dataProviderName}`);
    var componenthelper = new componentLib.component(components)
    var html = []

    for (var counter = 0;componentsLength+1>counter;counter++){
        var component = read(`http://localhost:3000/components/${components[counter]}`);
        componentsFiles.set(components[counter],component);
    };
    for(var counter = 0; componentsFiles.size>counter;counter++){
        var id = componenthelper.getcomponentids(componentFiles.get(components[counter]));
        var props = dataProvider.getprops(id);
        var componenthtml = componentHtml(componentFiles.get(components[counter]),props);
        html.push(componenthtml);
    };
});