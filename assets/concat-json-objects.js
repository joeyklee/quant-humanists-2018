var fs = require('fs');


if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var path = process.argv[2];

var output = '';

fs.readdir(path, function(err, items) {

    for (var i = 0; i < items.length; i++) {
    	if(items[i].endsWith(".json")){
    		var df = JSON.parse(fs.readFileSync(path + "/" + items[i]));

            output =  output +  JSON.stringify(df);
	    	// if(i < items.length-1){
		    //     output =  output +  JSON.stringify(df) + ",";
	    	// } else{ 
	    	// 	output =  output + JSON.stringify(df);
	    	// }
    	}

    	
       
    }

    fs.writeFile('bld-merged.json', output, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('files merged!');
    });
});