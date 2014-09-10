describe("geosearch", function() {

  it("calculate distance", function() {
  
    expect(distance("1236545654654", 5)).toEqual("12365");
	expect(distance("12345678", 2)).toEqual("12");

  });

  it("calculate endkey", function() {
  
    expect(endKey("123")).toEqual("124");
	expect(endKey("121")).toEqual("122");
	expect(endKey("e1eju")).toEqual("e1ejv");
	expect(endKey("e1ejz")).toEqual("e1ej{");	
	
	// lateral
	expect(endKey("")).toEqual("{");
	expect(endKey(null)).toEqual("{");
	expect(endKey({})).toEqual("{");

  });


  it("create search URL parameter", function() {

    expect(urlParams("1234567890", 5).startKey).toEqual("12345");
	expect(urlParams("1234567890", 5).endKey).toEqual("12346");
  });
    
  it("calculate geohash from contact", function() {

   var contact = {
     "_id": "23d3386d0cd2a8991f3550ff9200c2c0",
     "_rev": "20-71609139ad67129f600f74281096d547",
	 "doc_type": "contact",
     "dailyVisits": [
       {
           "geoInfo": {
               "timestamp": 1408455895519,
               "coords": {
                   "longitude": 3.3705348,
                   "latitude": 6.5141573
               }
           }
       }
	]};
	   
    expect(geohash(contact)).toEqual("s14mh9y7enuv");
  });
  
});
