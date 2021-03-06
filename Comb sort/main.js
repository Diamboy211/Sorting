var sideCompression = 16
var arr = []
var len = 16384
var comparisonCount = 0
var arrayEdits = 0
var oof = 1.3
var interval
var currentStart = 0
var sorted = false
var startCheck = false

function setup() {
	interval = floor(len/oof)
	createCanvas(len/sideCompression,750)
	/*for (let i = 0; i < len; i++) {
		let j = random(750)
		//let j = noise(i*0.03)*750
		arr.push(j)
	}*/
	for (let i = 0; i < len; i++) {
		arr.push(i/len*750)
	}
	for (let i = 0; i < len*80; i++) {
		swap(arr, floor(random(len)), floor(random(len)))
	}
	slider = createSlider(1, 1024, 1)
	slider.style('width','192px')
}

function draw() {
	colorMode(HSB,255)
	background(0)
	//for (let i = 0; i < len; i++) {
	for (let i = 0; i < len; i += sideCompression) {
		stroke(map(arr[i],0,750,0,255),255,255)
		line(i/sideCompression,750,i/sideCompression,750-arr[i])
	}
	for (let i = 0; i < slider.value(); i++) {
		//comb sort
		comparisonCount++
		if (arr[currentStart] > arr[currentStart + interval]) {
			swap(arr, currentStart, currentStart + interval)
			arrayEdits++
		}
		if (currentStart + interval >= len) {
			interval /= oof
			interval = floor(interval)
			if (interval < 1) interval = 1
			currentStart = 0
		} else {
			currentStart++
			/*if (startCheck = true) {
				if (checkSorted()) {console.log("done"); noLoop()}
			}*/
		}
	//end of comb sort
	}
	document.getElementById("counter").innerHTML = "Comparisons: " + comparisonCount
	document.getElementById("counter2").innerHTML = "Writes: " + arrayEdits
}

function swap(arr, a, b) {
	let temp = arr[b]
	arr[b] = arr[a]
	arr[a] = temp
}

/*function checkSorted() {
	var check = []
	for (let i = 0; i < len; i++) {
		arr.push(i/len*750)
	}
	if (arr = check) return true
}*/