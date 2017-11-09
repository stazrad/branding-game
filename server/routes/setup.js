// PACKAGES //
var fetch = require('fetch'),
    fs    = require('fs');

// POST /define/:word
exports.postDefine = function(req, res) {
    var word = req.params.word;
    console.log('word',word);
    var url = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + word;
    var options = {
        headers: {
            Accept: "application/json",
            app_id: 'e2efc868',
            app_key: 'fea1008254b3e012d46ae7e3e7cf597b'
        }
    };
    fetch.fetchUrl(url, options, function(err, meta, data) {
        if(meta.status == 404) {
            var definition = {
                definition: 'SGT. PEPPERS LONELY HEARTS CLUB BAND',
                trait: word
            }
            return res.status(200).send(definition);
        }
        var result = JSON.parse(data).results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
        var definition = {
            definition: result,
            trait: word
        }
        return res.status(200).send(definition);
    });
}

// POST /log
exports.postLog = function(req, res) {
    var objectString = function(object) {
        var output = '';
        var newOutput = '';
        for (var property in object) {
            if(property === 'trait') {
                newOutput += "{" + property + ": '" + object[property]+"', " + output;
            } else {
                output += property + ": '" + object[property]+"'},\n";
            }
        }
        return newOutput;
    }
    var definition = objectString(req.body);
    console.log('def', definition);

    fs.appendFileSync('./client/json/traits-list-definition.txt', definition);
    console.log('success!');
    res.status(200).send('success!');
};
