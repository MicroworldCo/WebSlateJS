class assets{
    read(Path){
        var file = new XMLHttpRequest();
        file.open('GET',Path);
        return file.responseText
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