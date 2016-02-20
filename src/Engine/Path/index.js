import {
  DIMENSION
} from "../../cfg";

import path from "../../libs/astar";

/**
 * Path
 * @class Path
 * @export
 */
export default class Path {

  /**
   * @param {Array} data
   * @constructor
   */
  constructor(data) {

    this.grid = new path.Graph(data);

  }

  /**
   * Get shortest path
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} x2
   * @param {Number} y2
   * @return {Array}
   */
  getShortestPath(x1, y1, x2, y2) {

    return (
      path.astar.search(
        this.grid,
        this.grid.grid[(x1 << 0) / DIMENSION][(y1 << 0) / DIMENSION],
        this.grid.grid[(x2 << 0) / DIMENSION][(y2 << 0) / DIMENSION]
      )
    );

  }

}