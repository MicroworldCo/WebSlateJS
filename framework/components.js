class component{
    constructor(components){
        this.components = components;
    };
    getcomponentids(jsx){
        var ids = [];
        var markup = jsx.replace('<','|').replace('>','|').split("|");
        var counter = 0;
        var component = 0;
        for(counter<markup.length;counter++;){
            if(markup[counter] == this.components[component]){
                var id = this.getid(markup[counter]);
                ids.push(id);
            };
        };
        return ids;
    };
    getid(html){
        var counter = 0;
        var markup = html.toLowerCase().split(" ");
        for(counter<markup.length;counter++;){
            if(markup[counter] == 'id'){
                var id = markup[counter+2];
            };
        };
        return id;
    };
};