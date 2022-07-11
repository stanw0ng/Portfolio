
            let stars=[];
            let speed;

            function setup() {
                createCanvas(windowWidth, windowHeight);
                for (let i = 0; i < 800; i++) {
                    stars[i] = new Star();
                }
            }

                function draw() {
                speed = 6;
                background(0);
                translate(width / 2, height / 2);
                for (let i = 0; i < stars.length; i++) {
                    stars[i].update();
                    stars[i].show();
                }
            }

            function Star() {
                this.x = random(-width,width);
                this.y = random(-height,height);
                this.z = random(width);

                
                this.update = function() {
                    this.z = this.z - speed;
                    if (this.z < 1) {
                    this.z = width;
                    this.x = random(-width, width);
                    this.y = random(-height, height);
                    }
                };

                this.show = function() {
                    fill(255);
                    noStroke();

                    var sx = map(this.x / this.z, 0, 1, 0, width);
                    var sy = map(this.y / this.z, 0, 1, 0, height);

                    var r = map(this.z, 0, width, 8, 0);
                ellipse(sx, sy, r, r);
                };
            }

            function windowResized() {
                resizeCanvas(windowWidth, windowHeight);
            }