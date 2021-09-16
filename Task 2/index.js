class AdjacentMatrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.numbOfRows = matrix.length;
    this.numbOfColumns = matrix[0].length;
    this.numbOfCountries = 0;
    this.visitMatrix = [];
  }

  createVisitedMatrix() {
    // create an empty array to keep track of visited entries in the matrix
    let matrix = new Array(this.numbOfRows);

    for (let i = 0; i < this.numbOfRows; i++) {
      matrix[i] = [];
      for (let j = 0; j < this.numbOfColumns; j++)
        // 0 for unvisited, 1 for visited
        matrix[i][j] = 0;
    }

    // set new empty array to class variable
    this.visitMatrix = matrix;
  }

  /**
   * @param {number} positionX
   * @param {number} positionY
   * @return {boolean}
   */
  isValidCoordinate(positionX, positionY) {
    return (
      positionX >= 0 &&
      positionX < this.numbOfRows &&
      positionY >= 0 &&
      positionY < this.numbOfColumns
    );
  }

  /**
   * @param {number} positionX
   * @param {number} positionY
   * @return {boolean}
   */
  isVisited(positionX, positionY) {
    //   entry is 1 if visited before
    return this.visitMatrix[positionX][positionY] === 1;
  }

  /**
   * @param {number} value
   * @param {number} startPositionX
   * @param {number} startPositionY
   * @return {number}
   */

  findAllNeighbors(value, startPositionX, startPositionY) {
    //   set the entry to 1 since it is just visited
    this.visitMatrix[startPositionX][startPositionY] = 1;

    // orthogonal directions to check the neighbor entries
    let orthogonalDirections = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    for (let direction of orthogonalDirections) {
      // calculate the coordinates of the neighbor
      let neighborPositionX = startPositionX + direction[0];
      let neighborPositionY = startPositionY + direction[1];

      if (
        this.isValidCoordinate(neighborPositionX, neighborPositionY) &&
        !this.isVisited(neighborPositionX, neighborPositionY) &&
        this.matrix[neighborPositionX][neighborPositionY] === value
      )
        this.findAllNeighbors(value, neighborPositionX, neighborPositionY);
    }
  }

  solution() {
    //  create new matrix for visited matrix
    this.createVisitedMatrix();

    // loop through the initial matrix to find the countries
    for (let i = 0; i < this.numbOfRows; i++) {
      for (let j = 0; j < this.numbOfColumns; j++) {
        // if the entry is not visited, it means it is a potential new country
        // now, we need to find out how big this country is
        if (!this.isVisited(i, j)) {
          this.numbOfCountries++;
          this.findAllNeighbors(this.matrix[i][j], i, j);
          console.log(this.visitMatrix);
          console.log("---------------------------------------------");
        }
      }
    }
  }
}

//--------------------------------------------------------

/**
 * Finds the number of countries inside the matrix
 * @example matrix array below
 * // returns 7
 * @returns {number} Returns the number of countries.
 */

// To test the program, just change the matrix to see the result

let matrix = [
  [4, 4, 4],
  [4, 4, 4],
  [3, 2, 4],
  [2, 2, 2],
  [3, 3, 4],
  [1, 1, 4],
  [4, 1, 1],
];

let newInstance = new AdjacentMatrix(matrix);

newInstance.solution();
console.log(`The number of countries is ${newInstance.numbOfCountries}`);
