import render from './../framework/jsx/render.js'
import "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
const $ = window.$;
export function assets(){}
assets.prototype.read = function(Path){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", Path , false);
    xhttp.send();
    var file = xhttp.responseText
    return file;
}
assets.prototype.page = function(page){
    var components = render();
    components.then(() => {
        console.log(components);
        var mount = document.getElementById("root");
        mount.innerHTML = components.get(page);
    })
}
assets.prototype.split = function(string,splitter){
    var separatedArray = []; 
 
    // index of end of the last string  
    let previousIndex = 0; 
 
    for(var i = 0; i < string.length; i++) { 
 
        // check the character for a comma 
        if (string[i] == splitter) { 
 
            // split the string from the last index 
            // to the comma 
            var separated = string.slice(previousIndex, i); 
            separatedArray.push(separated); 
 
            // update the index of the last string 
            previousIndex = i + 1; 
        } 
    } 
 
    // push the last string into the array 
    separatedArray.push(string.slice(previousIndex, i)); 
}    
assets.prototype.getcomponentids = function(jsx,components){
    var ids = [];
    var markup = jsx.replaceAll('<','|').replaceAll('>','|').split("|");
    var counter = 0;
    var component = 0;
    for(counter<markup.length;counter++;){
        if(markup[counter] == components[component]){
            var id = this.getid(markup[counter]);
            ids.push(id);
        }
    }
    return ids;
}
assets.prototype.getid = function(html){
    var counter = 0;
    var markup = html.toLowerCase().split(" ");
    for(counter<markup.length;counter++;){
        if(markup[counter] == 'id'){
            var id = markup[counter+2];
        }
    }
    return id;
}
assets.prototype.componentHtml = function(jsx,props){
    var jsxformat = jsx.replaceAll(/^(?=.*{)(?=.*}).*$/im,'|');
    var propsList = jsxformat.split("|");
    for(var i = 0;i<propsList.length+1;){
        if(propsList[i].includes("props")){
            var prop = propsList[i].split('.');
            var propProperty = prop[1];
            var propVal = props[propProperty];
            propsList[i] = propVal;
        }
    }
    var commaHtml = propsList.join();
    var html = commaHtml.replaceAll(",","");
    return html;
}
assets.prototype.import = function(url){
    const file = this.read(url).split('\n');
    var safeJs = []
    for(var counter = 0;file.length>counter;counter++){
        var line = file[counter];
        const lastChar = line[line.length -1];
        if(lastChar != ';' || '{' || '}'){
            safeJs.push(`${line};`)
        }
    }
    const JS = safeJs.join().replaceAll(',','');
    return JS;
}
    

