var sideCompression = 16
var arr = []
var len = 16384
var comparisonCount = 0
var arrayEdits = 0
var startCheck = false
var sortedIndex = 0
var slider

function setup() {
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
	for (let o = 0; o < slider.value(); o++) {
		if (sortedIndex < len) {
			selection()
		} else {
			console.log("done")
			noLoop()
		}
	}
	document.getElementById("counter").innerHTML = "Comparisons: " + comparisonCount
	document.getElementById("counter2").innerHTML = "Writes: " + arrayEdits
}

function selection() {
	let worstIndex = sortedIndex
	for (let i = sortedIndex; i < len; i++) {
		comparisonCount++
		if (arr[worstIndex] > arr[i]) {worstIndex = i}
	}
	swap(arr, sortedIndex, worstIndex)
	arrayEdits++
	sortedIndex++
}

function swap(arr, a, b) {
	let temp = arr[b]
	arr[b] = arr[a]
	arr[a] = temp
}