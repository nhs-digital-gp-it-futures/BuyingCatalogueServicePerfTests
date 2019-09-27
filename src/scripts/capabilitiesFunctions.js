function arrangeCapabilities(capabilities){
    var capArray = [];
    capabilities.map(cap => {        
        capArray.push({
            id: cap.id,
            name: cap.name
        });
    })
    return capArray;
}

function selectRandomCapability(capabilities){
    var length = capabilities.length;
    var index = Math.floor(Math.random() * length);
    return capabilities[index];
}

module.exports = {
    arrangeCapabilities,
    selectRandomCapability
}