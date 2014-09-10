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

function geohash(doc) {

	  // we care only about documents of type "contact"
	  if (doc.doc_type != "contact") {	    
		return null;
	  }
	 
	  // we care only about documents with visits (must be an array)
	  if (typeof doc.dailyVisits != "object" || !doc.dailyVisits.length || !doc.dailyVisits.length > 0) {	    
		return null;
	  }	 
	  
      var dailyVisit = doc.dailyVisits[doc.dailyVisits.length - 1 ];
	  		 
	  if (!dailyVisit.geoInfo || !dailyVisit.geoInfo.coords
   		 || !dailyVisit.geoInfo.coords.longitude || !dailyVisit.geoInfo.coords.latitude ) {
		    return null;
	  }
			
	  return encodeGeoHash(dailyVisit.geoInfo.coords.latitude, dailyVisit.geoInfo.coords.longitude);
}