class ACircle {

  constructor(name, diameter, x_coord, y_coord){
      this.name = name;
      this.diameter = diameter;
      this.x_coord = x_coord;
      this.y_coord = y_coord;
  }


  /*  GETS AND SETS  */
  getName(){  return this.name; }

  setName(name){  this.name = name; }

  getDiameter(){  return this.diameter; }

  setDiameter(diameter){  this.diameter = diameter; }

  // This information is used constantly by different moving parts so it's gotta be easily accessible and uncompressed.

  getXCoord(){  return this.x_coord;  }

  setXCoord(x_coord){  this.x_coord = x_coord;  }

  getYCoord(){  return this.y_coord;  }

  setYCoord(y_coord){ this.y_coord = y_coord; }

}
