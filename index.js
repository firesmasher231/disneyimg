const proxyUrl = "https://corsproxy.io/?";

function downloadImages(e) {
	const urls = document.getElementById("urls").value.split("\n");

	for (let i = 0; i < urls.length; i++) {
		const image_url = urls[i].trim();

		const result = image_url.match(/key=(.*?)&size/);
		console.log(result[1]);
		const key = result[1];

		const imgURL = `https://www.disneyphotopass.eu/Imaging/GetGraphic.ashx?key=${key}&maxdim=5000`;

		const filename = `image_${i + 1}.jpg`;

		fetch(proxyUrl + imgURL)
			.then((response) => response.blob())
			.then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = filename;
				document.body.appendChild(a);
				a.click();
				a.remove();
			});
	}
}
