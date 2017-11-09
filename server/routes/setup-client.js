const traits = this.state.traits;
let definitions = [];
let options = {
    headers: {
        contentType: 'application/json'
    }
}
function asyncCall() {
    let timeout = 60000;
    traits.forEach((trait, i) => {
        let timer = timeout * i;
        return setTimeout(function() {
            return axios.post('http://localhost:5000/define/' + trait, options)
            .then(function(res) {
                console.log('res', res);
                let definition = {
                    definition: res.data.definition,
                    trait: res.data.trait
                }
                return definition;
            })
            .then(function(def) {
                let definition = JSON.stringify(def);
                console.log(def);
                return axios.post('http://localhost:5000/log', def)
            })
            .catch(function(err) {
                console.log(err);
                return;
            });
        }, timer);
    })
}
asyncCall();
