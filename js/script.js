(function() {
	'use script'
	let ul = document.getElementsByClassName('bulleted');
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				let data = JSON.parse(xhr.responseText);
				for (let i = 0; data.length > i; i++) {
					if (data[i].inoffice) {
						let li = document.createElement("li")
						li.innerHTML = data[i].name;
						li.classList = 'in'
						ul[0].append(li)
					} else {
						let li = document.createElement("li")
						li.innerHTML = data[i].name;
						li.classList = 'out'
						ul[0].append(li)
					}
					console.log(data[i].inoffice);
				}
			} else {
				alert('There was a problem with the request.');
			}
		}
	}
	xhr.open('GET', 'data/employees.json');
	xhr.send();
})()