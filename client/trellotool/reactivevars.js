var authorized = false;
var authorizedDep = new Deps.Dependency;

getTrelloAuthorized = function(){
	authorizedDep.depend();
	return authorized;
}

setTrelloAuthorized = function(authorizedPar){
	authorized = authorizedPar;
	authorizedDep.changed();
}