// create a ShowCountViz object
let ShowCountViz;
...

function setup(){
	...
	// create a showCount Object
	ShowCountViz = new ShowCount(test)
	ShowCountViz.calculateCounts();
}

function draw(){
	...
	ShowCountViz.display();
}

function ShowCount(_countData){
		this.yesCount = 0;
		this.noCount = 0;
		this.countData = _countData;
		this.calculateCounts = function(){
			this.countData.rows.forEach(function(row, idx){
				if(row[3] == "yes"){
					this.yesCount++;
				}else{
					this.noCount++;
				}
			}, this)
			console.log(this.yesCount, this.noCount)
		}
		this.display = function(){
			textSize(20)
			text("Have you been replying to your work emails Joey?", width/2, height*0.25)

			// yes
			ellipse( width*0.25, height/2,PI*(this.yesCount/2)**2, PI*(this.yesCount/2)**2)
			textSize(PI*(this.yesCount/2)**2)
			text("Yes", width*0.25, height/2)

			// no
			ellipse( width*0.75, height/2, PI*(this.noCount/2)**2, PI*(this.noCount/2)**2)
			textSize(PI*(this.noCount/2)**2)
			text("No", width*0.75, height/2)
		}
		this.displayRandomYesNo = function(){
			// random yes/no
			textSize(12)
			this.countData.rows.forEach(function(row, idx){
				text(row[3], random(width), random(height))
			}, this)
		}
	}