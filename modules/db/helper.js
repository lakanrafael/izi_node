var self = {
	fetch:function(data,callback){
		var db_connection=data.connection;
		var query=data.query;
		var filters=[];
		filters = data.filters;
		
		db_connection.getConnection(function(err,con){
			if(err){
			  	con.release();
			}else{
				db_connection.query(query, filters, function(err,rows){
				    con.release();
				    if(!err) {
				    	callback(rows);
				    } else {
				      	console.log(err);  
				      	console.log("Query failed");  
				    }        
			  	});
			}
		});
	},

	update:function(data,callback){
		var db_connection=data.connection;
		var query=data.query;
		var filters=[];
		filters = data.filters;
		
		db_connection.getConnection(function(err,con){
			if(err){
			  	con.release();
			}else{
				db_connection.query(query, filters, function(err,rows){
				    con.release();
				    if(!err) {
				    	callback({status:true});
				    } else {
				    	console.log(err);  
				      	console.log("Query failed");
				      	callback({status:false});
				    }        
			  	});
			}
		});
	},

	insert:function(data,callback){
		var db_connection=data.connection;
		var query=data.query;
		var filters=[];
		filters = data.filters;
		
		db_connection.getConnection(function(err,con){
			if(err){
			  	con.release();
			}else{
				db_connection.query(query, filters, function(err,rows){
				    con.release();
				    if(!err) {
				    	var rows = JSON.parse(JSON.stringify(rows));

				    	if(rows.insertId){
				    		callback({
							    		status : true,
							    		last_inserted_id : rows.insertId
							    	});
				    	}

				    } else {
				      	console.log(err);
				    }        
			  	});
			}
		});
	}
}

module.exports = self;