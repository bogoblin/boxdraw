let queryDict : any = {}
// @ts-ignore - this comes from stack overflow, I don't care how it works
location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})

let lobbyId : string = queryDict["l"];