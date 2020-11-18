window.onload=function(){
	let search = document.getElementById("lookup");
	let searchc = document.getElementById("lookupc");
	search.addEventListener('click', function(e){
		e.preventDefault();
		var s = document.getElementById("country").value;
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == XMLHttpRequest.DONE) {
				if (req.status == 200){	
					var r = req.responseText;
					var result = document.getElementById('result');
					result.innerHTML = r;
				}else{
					alert("Error!");
				}
			}
		}
		console.log(s);
		req.open('GET', 'http://localhost/info2180-lab5/world.php?country='+s, true);
		req.send();
	});
	searchc.addEventListener('click',function(e){
		e.preventDefault();
		var s = document.getElementById("country").value;
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == XMLHttpRequest.DONE) {
				if (req.status == 200){	
					var r = req.responseText;
					var result = document.getElementById('result');
					result.innerHTML = r;
				}else{
					alert("Error!");
				}
			}
		}
		console.log(s);
		req.open('GET', 'http://localhost/info2180-lab5/world.php?country='+s+'&context=cities', true);
		req.send();
	});
}