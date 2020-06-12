document.addEventListener("DOMContentLoaded", function () {

    let gray = document.getElementById("shape-canvas");

    const MAX = 600;

    let shapeName = document.getElementById('shape-name');
    let shapeWidth = document.getElementById('width-info');
    let shapeHeight = document.getElementById('height-info');
    let shapeRadius = document.getElementById('radius-info');
    let shapeArea = document.getElementById('area-info'); 
    let shapePerimeter = document.getElementById('perimeter-info');


    //--------------buttons--------------------------//

    let sqButton = document.getElementById('sq-button');
    sqButton.addEventListener('click', insertSquare)

    let cirButton = document.getElementById('cir-button');
    cirButton.addEventListener('click', insertCircle)

    let recButton = document.getElementById('rec-button');
    recButton.addEventListener('click', insertRectangle)

    let triButton = document.getElementById('tri-button');
    triButton.addEventListener('click', insertTriangle);

    //-----------Functions-------------//


    function insertSquare() {
        var size = document.getElementById("square-input").value;
        let xVal = randomVal(0, MAX - size);  
        let yVal = randomVal(0, MAX - size);
        let sq = new square(xVal, yVal, size);
    }

    function insertCircle() {
        var radius = document.getElementById("circle-input").value;
        let xVal = randomVal(0, MAX - (radius * 2));
        let yVal = randomVal(0, MAX - (radius * 2));
        let cir = new circle(xVal, yVal, radius);
    }

    function insertRectangle() {
        var recHeight = document.getElementById("rectangle-height-input").value;
        var recWidth = document.getElementById("rectangle-width-input").value;
        let xVal = randomVal(0, MAX - recWidth);
        let yVal = randomVal(0, MAX - recHeight);
        let rec = new rectangle(xVal, yVal, recHeight, recWidth);
    }

    function insertTriangle() {
        var size = document.getElementById("triangle-input").value;
        let xVal = randomVal(0, MAX - size);  
        let yVal = randomVal(0, MAX - size);
        let tri = new Triangle(xVal, yVal, size);
    }


    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min));
    }
    //--------------classes---------//


    class shape {
        constructor(x, y) {
            this.div = document.createElement("div");
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;
            gray.appendChild(this.div);
        }
    }

    class square extends shape {
        constructor(x, y, size) {
            super(x, y);
            this.div.classList.add('square')
            this.div.style.width = `${size}px`;
            this.div.style.height = `${size}px`;

            this.div.addEventListener('click', () => {
                shapeName.value = this.div.classList;
                shapeWidth.value = size;
                shapeHeight.value = size;
                shapeRadius.value = "N/A";
                shapeArea.value = size ** 2
                shapePerimeter.value = 4 * size;
            })
            this.div.addEventListener('dblclick', () => {
                this.div.remove();
            })
        }
    }

    class rectangle extends shape {
        constructor(x, y, recHeight, recWidth) {
            super(x, y);
            this.div.classList.add('rect');
            this.div.style.height = `${recHeight}px`;
            this.div.style.width = `${recWidth}px`;

            this.div.addEventListener('click', () => {
                shapeName.value = this.div.classList;
                shapeWidth.value = recWidth;
                shapeHeight.value = recHeight;
                shapeRadius.value = "Not Applicable";
                shapeArea.value = recWidth * recHeight;
                shapePerimeter.value = 2 * (+recWidth + + recHeight);
            })

            this.div.addEventListener('dblclick', () => {
                this.div.remove();
            })
        }
    }

    class circle extends shape {
        constructor(x, y, radius) {
            super(x, y);
            this.div.classList.add('circ');
            this.div.style.width = `${radius}px`;
            this.div.style.height = `${radius}px`;
           
            this.div.addEventListener ('click', () => {
                shapeName.value=this.div.classList;
                shapeWidth.value=radius*2;
                shapeHeight.value=radius*2;
                shapeRadius.value=radius;
                shapeArea.value=(Math.PI)*((radius)**2);
                shapePerimeter.value=(2)*(radius)*(Math.PI);

                this.div.addEventListener ('dblclick', () => {
                    this.div.remove();
                })
            })
        }
    }

    class Triangle extends shape {
        constructor(x, y, size) {
            super(x, y);
            this.div.classList.add('triangle');
            this.div.style.borderBottom = `${size}px solid white`;
            this.div.style.borderRight = `${size}px solid transparent`;
           
            this.div.addEventListener ('click', () => {
                shapeName.value=this.div.classList;
                shapeWidth.value=size;
                shapeHeight.value=size;
                shapeRadius.value="N/A";
                shapeArea.value=(size*size)/2;
                shapePerimeter.value= +size + +size + Math. sqrt(size**2 + size**2);
            })
            this.div.addEventListener ('dblclick', () => {
            this.div.remove();
            })

        }
    }

})