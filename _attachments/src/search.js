function endKey(startKey) {

  if (typeof startKey != "string" || startKey.length == 0) {
    return "{"
  }
  else { 
    return startKey.substring(0, startKey.length - 1) + String.fromCharCode( startKey.charCodeAt(startKey.length - 1) + 1);
  }

}

function distance(key, distance) {
    return key.substring(0, distance);
}

function urlParams(key, distanceValue) {

    var startKey = distance(key, distanceValue);

	return {
	    startKey : startKey,
		endKey: endKey(startKey)
	}
    
}