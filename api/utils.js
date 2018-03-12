
function checkError(obj){
	if(obj.toString().search('Error') === -1){
		return false
	}else{
		return true
	}
}




module.exports = {
	checkError
}
