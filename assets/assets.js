import render from './../framework/jsx/render'
export class assets{
    read(Path){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            var res = '';
            if (xhr.readyState == 4 && xhr.status == 200) {
                window[res] = xhr.responseText;
            }
        }
        xhr.open('GET', Path);
        xhr.send();
        // eslint-disable-next-line no-undef
        return window[res];
    }
    page(page){
        var components = render();
        var mount = document.getElementById("root");
        mount.innerHTML = components.get(page);
    }
    
}