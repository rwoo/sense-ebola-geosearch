function(doc) {

	  var encodeGeoHash = require('views/lib/geohash').encodeGeoHash;
	  
	  // we care only about documents of type "contact"
	  if (doc.doc_type != "contact") {	    
		return;
	  }
	 
	  // we care only about documents with visits (must be an array)
	  if (typeof doc.dailyVisits != "object" || !doc.dailyVisits.length || !doc.dailyVisits.length > 0) {	    
		return;
	  }	 
	  
      var dailyVisit = doc.dailyVisits[doc.dailyVisits.length - 1 ];
	  		 
	  if (!dailyVisit.geoInfo || !dailyVisit.geoInfo.coords
   		 || !dailyVisit.geoInfo.coords.longitude || !dailyVisit.geoInfo.coords.latitude ) {
		    return;
	  }
			
	  var geohash = encodeGeoHash(dailyVisit.geoInfo.coords.latitude, dailyVisit.geoInfo.coords.longitude);
	  emit(geohash, null);

};