const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
const EventRegistrations = mongoose.model('register');


module.exports = app => {

    app.post('/' , async (req, res)=> {
        const agent = new WebhookClient({ request: req, response: res });
        
        
        async function registration(agent){
            EventRegistrations.findOne({'event': agent.parameters.events}, function(err, event) {
                if (event !== null ) {
                    event.counter++;
                    event.save();
                } else {
                    const register = new EventRegistrations({event: agent.parameters.events});
                    register.save();
                }
            });
            let responseText = `Regisration successful for ${agent.parameters.events}`. 
            agent.add(responseText);    
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }
        
        let intentMap = new Map();
       
        intentMap.set('registrations in events', registration);
        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });
}