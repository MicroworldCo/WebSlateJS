export class component{
    constructor(components){
        this.components = components;
    }
    getcomponentids(jsx){
        var ids = [];
        var markup = jsx.replaceAll('<','|').replaceAll('>','|').split("|");
        var counter = 0;
        var component = 0;
        for(counter<markup.length;counter++;){
            if(markup[counter] == this.components[component]){
                var id = this.getid(markup[counter]);
                ids.push(id);
            }
        }
        return ids;
    }
    getid(html){
        var counter = 0;
        var markup = html.toLowerCase().split(" ");
        for(counter<markup.length;counter++;){
            if(markup[counter] == 'id'){
                var id = markup[counter+2];
            }
        }
        return id;
    }
    componentHtml(jsx,props){
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
}
