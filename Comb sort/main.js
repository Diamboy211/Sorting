var arr = []
var len = 800
var comparisonCount = 0
var arrayEdits = 0
var oof = 1.3
var interval
var currentStart = 0

function setup() {
	interval = floor(len/oof)
	createCanvas(len,750)
	for (let i = 0; i < len; i++) {
		let j = random(750)
		//let j = noise(i*0.03)*750
		arr.push(j)
	}
	slider = createSlider(1, 64, 1)
	slider.style('width','192px')
}

function draw() {
	background(0)
	stroke(255)
	for (let i = 0; i < len; i++) {
		line(i,750,i,750-arr[i])
	}
	if (arr[currentStart] > arr[currentStart + interval]) {
		swap(arr, currentStart, currentStart + interval)
	}
	if (currentStart + interval > len) {
		interval /= oof
		currentStart = 0
	} else { currentStart++ }
}

function swap(arr, a, b) {
	let temp = arr[b]
	arr[b] = arr[a]
	arr[a] = temp
}