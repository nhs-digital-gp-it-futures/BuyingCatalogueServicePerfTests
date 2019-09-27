var capFunctions = require('../../../scripts/capabilitiesFunctions');

function getRandomCapability(context, events, done){
    var capabilities = context.vars['capabilities'];
    var capArray = capFunctions.arrangeCapabilities(capabilities);
    context.vars['capabilityArray'] = Object.assign([], capFunctions.selectRandomCapability(capArray));
    return done();
}

function getRandomSolutionId(context, events, done){
    var solutions = context.vars['solutions'];
    var index = Math.floor(Math.random(solutions.length));
    context.vars['solutionId'] = solutions[index].id;
    return done();
}

module.exports = {
    getRandomCapability,
    getRandomSolutionId
};