var sideCompression = 16
var arr = []
var len = 16384
var comparisonCount = 0
var arrayEdits = 0
var insInterval = 1
var insLen = 1
var oof = 2
//var osc
//var osc2
var temp = []

function setup() {
	//createCanvas(len/sideCompression,750)
	/*for (let i = 0; i < len; i++) {
		let j = random(750)
		//let j = noise(i*0.03)*750
		arr.push(j)
	}*/
	for (let i = 0; i < len; i++) {
		arr.push(i/len*750)
	}
	for (let i = 0; i < len*80; i++) {
		//swap(arr, floor(random(len)), floor(random(len)))
	}
	//slider = createSlider(1, 1024, 1)
	//slider.style('width','192px')
	//osc = new p5.Oscillator()
	//osc.setType('square')
	//osc.amp(1)
	//osc.start()
	//osc2 = new p5.Oscillator()
	//osc2.setType('square')
	//osc2.amp(1)
	//osc2.start()
}

/*function draw() {
	background(0)
	stroke(255)
	for (let i = 0; i < len; i += sideCompression) {
		line(i/sideCompression,750,i/sideCompression,750-arr[i])
	}
	document.getElementById("counter").innerHTML = "Comparisons: " + comparisonCount
	document.getElementById("counter2").innerHTML = "Writes: " + arrayEdits
}*/

function merge(arr1, arr2) {
	let temp = []
	while (arr1[0] && arr2[0]) {
		if (arr1 < arr2) {
			temp.push(arr1.shift())
		} else {
			temp.push(arr2.shift())
		}
	}
	return temp
}

function swap(arr, a, b) {
	let temp = arr[b]
	arr[b] = arr[a]
	arr[a] = temp
}