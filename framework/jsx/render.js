import { assets }from './../../assets/assets.js';
export default function(){
    var assetsLib = new assets
    var config = assetsLib.read('config/webslate.config').split("\n");

    console.log(config)

    var components = config[0].split(":")[1].split(',')
    var dataProviderName = config[1].split(":")[1];
    var domain = config[2].split(":")[1];
    var port = config[3].split(":")[1];
    var componentsLength = components.length;
    var componentFiles = new Map();
    // import dataProvider
    eval(assetsLib.import(`http://${domain}:${port}/dataProviders/${dataProviderName}`));


    for (var counter = 0;componentsLength+1>counter;counter++){
        var component = assetsLib.read(`http://${domain}:${port}/components/${components[counter]}.jsx`);
        componentFiles.set(components[counter],component);
    }

    for(counter = 0; componentFiles.size>counter;counter++){
        var id = assetsLib.getcomponentids(componentFiles.get(components[counter]),components);
        var props = window.getprops(id);
        var componenthtml = assetsLib.componentHtml(componentFiles.get(components[counter]),props);
        html.set(components[counter] , componenthtml);
    }

    window.html = html;
    return window.html;
}
