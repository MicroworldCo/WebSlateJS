class assets{
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
        return window[res];
    }
    split(string,splitter){
        
        separatedArray = []; 
 
        // index of end of the last string  
        let previousIndex = 0; 
 
        for(i = 0; i < string.length; i++) { 
 
        // check the character for a comma 
        if (string[i] == splitter) { 
 
            // split the string from the last index 
            // to the comma 
            separated = string.slice(previousIndex, i); 
            separatedArray.push(separated); 
 
            // update the index of the last string 
            previousIndex = i + 1; 
        }
         
    
 
        // push the last string into the array 
        separatedArray.push(originalString.slice(previousIndex, i)); 
        }
    }
}