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
//var playing = false

function setup() {
	while (insInterval*oof < len) insInterval *= oof
	insLen = round(insInterval)
	insInterval = round(insInterval)
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
	//osc = new p5.Oscillator()
	//osc.setType('square')
	//osc.amp(1)
	//osc.start()
	//osc2 = new p5.Oscillator()
	//osc2.setType('square')
	//osc2.amp(1)
	//osc2.start()
}

function draw() {
	colorMode(HSB,255)
	background(0)
	stroke(255)
	for (let i = 0; i < len; i += sideCompression) {
		stroke(map(arr[i],0,750,0,255),255,255)
		line(i/sideCompression,750,i/sideCompression,750-arr[i])
	}
	for (let o = 0; o < slider.value(); o++) {
		if (insInterval > 1/oof) {
			if (insLen < len) {
				oneInsert(insLen)
				insLen++
			} else {
				insInterval /= oof
				insInterval = floor(insInterval)
				insLen = floor(insInterval)
			}
		} else {
		    insLen++
			oneInsert(insLen)
			console.log("done")
			noLoop()
		}
	}
	document.getElementById("counter").innerHTML = "Comparisons: " + comparisonCount
	document.getElementById("counter2").innerHTML = "Writes: " + arrayEdits
}

function oneInsert(ins) {
	if (ins >= insInterval) {
		if (arr[ins-insInterval] > arr[ins]) {
			comparisonCount++
			//osc.freq(arr[ins-insInterval])
			//osc2.freq(arr[ins])
			swap(arr,ins-insInterval,ins)
			arrayEdits++
			oneInsert(ins-insInterval)
		} else comparisonCount++
	}
}

function swap(arr, a, b) {
	let temp = arr[b]
	arr[b] = arr[a]
	arr[a] = temp
}

/*function reset() {
	var arr = []
	var len = 800
	var comparisonCount = 0
	var insInterval = 1
	var insLen = 1
	var oof = 2
	setup()
	loop()
	redraw()
}*/