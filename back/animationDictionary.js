"use strict"

const animationDictionary = [
  //0,0 **
  [
    {
      "x": "0",
      "y": "0",
      delay: 0,
    },
    {
      "x": "1",
      "y": "1",
      delay: 1,
    },
    {
      "x": "2",
      "y": "2",
      delay: 2,
    },
    {
      "x": "3",
      "y": "3",
      delay: 3,
    },
    {
      "x": "4",
      "y": "4",
      delay: 4,
    },
    {
      "x": "5",
      "y": "5",
      delay: 5,
    },
    {
      "x": "6",
      "y": "6",
      delay: 6,
    },
    {
      "x": "7",
      "y": "7",
      delay: 7,
    }
  ],
  //1,0
  [
    {
      x: 1,
      y: 0,
      delay: 0,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 2,
      delay: 2,
    },
    {
      x: 1,
      y: 3,
      delay: 3,
    },
    {
      x: 1,
      y: 4,
      delay: 4,
    },
    {
      x: 1,
      y: 5,
      delay: 5,
    },
    {
      x: 1,
      y: 6,
      delay: 6,
    },
    {
      x: 1,
      y: 7,
      delay: 7,
    }
  ],
  //2,0
  [
    {
      x: 2,
      y: 0,
      delay: 0,
    },
    {
      x: 2,
      y: 1,
      delay: 1,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 2,
      y: 3,
      delay: 3,
    },
    {
      x: 2,
      y: 4,
      delay: 4,
    },
    {
      x: 2,
      y: 5,
      delay: 5,
    },
    {
      x: 2,
      y: 6,
      delay: 6,
    },
    {
      x: 2,
      y: 7,
      delay: 7,
    }
  ],
  //3,0 **
  [
    {
      x: 3,
      y: 0,
      delay: 0,
    },
    {
      x: 2,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 2,
      delay: 2,
    },
    {
      x: 0,
      y: 3,
      delay: 3,
    },
    {
      x: 4,
      y: 0,
      delay: 0,
    },
    {
      x: 5,
      y: 1,
      delay: 1,
    },
    {
      x: 6,
      y: 2,
      delay: 2,
    },
    {
      x: 7,
      y: 3,
      delay: 3,
    },
  ],
  //4,0 **
  [
    {
      x: 0,
      y: 0,
      delay: 0,
    },
    {
      x: 1,
      y: 0,
      delay: 0,
    },
    {
      x: 2,
      y: 0,
      delay: 0,
    },
    {
      x: 3,
      y: 0,
      delay: 0,
    },{
      x: 4,
      y: 0,
      delay: 0,
    },
    {
      x: 5,
      y: 0,
      delay: 0,
    },
    {
      x: 6,
      y: 0,
      delay: 0,
    },
    {
      x: 7,
      y: 0,
      delay: 0,
    },
    {
      x: 0,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    },
    {
      x: 2,
      y: 1,
      delay: 1,
    },
    {
      x: 3,
      y: 1,
      delay: 1,
    },{
      x: 4,
      y: 1,
      delay: 1,
    },
    {
      x: 5,
      y: 1,
      delay: 1,
    },
    {
      x: 6,
      y: 1,
      delay: 1,
    },
    {
      x: 7,
      y: 1,
      delay: 1,
    },
    {
      x: 0,
      y: 2,
      delay: 2,
    },
    {
      x: 1,
      y: 2,
      delay: 2,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 3,
      y: 2,
      delay: 2,
    },{
      x: 4,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 6,
      y: 2,
      delay: 2,
    },
    {
      x: 7,
      y: 2,
      delay: 2,
    },
    {
      x: 0,
      y: 3,
      delay: 3,
    },
    {
      x: 1,
      y: 3,
      delay: 3,
    },
    {
      x: 2,
      y: 3,
      delay: 3,
    },
    {
      x: 3,
      y: 3,
      delay: 3,
    },{
      x: 4,
      y: 3,
      delay: 3,
    },
    {
      x: 5,
      y: 3,
      delay: 3,
    },
    {
      x: 6,
      y: 3,
      delay: 3,
    },
    {
      x: 7,
      y: 3,
      delay: 3,
    },
    {
      x: 0,
      y: 4,
      delay: 4,
    },
    {
      x: 1,
      y: 4,
      delay: 4,
    },
    {
      x: 2,
      y: 4,
      delay: 4,
    },
    {
      x: 3,
      y: 4,
      delay: 4,
    },{
      x: 4,
      y: 4,
      delay: 4,
    },
    {
      x: 5,
      y: 4,
      delay: 4,
    },
    {
      x: 6,
      y: 4,
      delay: 4,
    },
    {
      x: 7,
      y: 4,
      delay: 4,
    },
    {
      x: 0,
      y: 5,
      delay: 5,
    },
    {
      x: 1,
      y: 5,
      delay: 5,
    },
    {
      x: 2,
      y: 5,
      delay: 5,
    },
    {
      x: 3,
      y: 5,
      delay: 5,
    },{
      x: 4,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 5,
      delay: 5,
    },
    {
      x: 6,
      y: 5,
      delay: 5,
    },
    {
      x: 7,
      y: 5,
      delay: 5,
    },
    {
      x: 0,
      y: 6,
      delay: 6,
    },
    {
      x: 1,
      y: 6,
      delay: 6,
    },
    {
      x: 2,
      y: 6,
      delay: 6,
    },
    {
      x: 3,
      y: 6,
      delay: 6,
    },{
      x: 4,
      y: 6,
      delay: 6,
    },
    {
      x: 5,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 6,
      delay: 6,
    },
    {
      x: 7,
      y: 6,
      delay: 6,
    },
    {
      x: 0,
      y: 7,
      delay: 7,
    },
    {
      x: 1,
      y: 7,
      delay: 7,
    },
    {
      x: 2,
      y: 7,
      delay: 7,
    },
    {
      x: 3,
      y: 7,
      delay: 7,
    },{
      x: 4,
      y: 7,
      delay: 7,
    },
    {
      x: 5,
      y: 7,
      delay: 7,
    },
    {
      x: 6,
      y: 7,
      delay: 7,
    },
    {
      x: 7,
      y: 7,
      delay: 7,
    }, 
  ],
  //5,0
  [
    {
      x: 5,
      y: 0,
      delay: 0,
    },
    {
      x: 5,
      y: 1,
      delay: 1,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 3,
      delay: 3,
    },
    {
      x: 5,
      y: 4,
      delay: 4,
    },
    {
      x: 5,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 6,
      delay: 6,
    },
    {
      x: 5,
      y: 7,
      delay: 7,
    }
  ],
  //6,0
  [
    {
      x: 6,
      y: 0,
      delay: 0,
    },
    {
      x: 6,
      y: 1,
      delay: 1,
    },
    {
      x: 6,
      y: 2,
      delay: 2,
    },
    {
      x: 6,
      y: 3,
      delay: 3,
    },
    {
      x: 6,
      y: 4,
      delay: 4,
    },
    {
      x: 6,
      y: 5,
      delay: 5,
    },
    {
      x: 6,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 7,
      delay: 7,
    }
  ],
  //7,0 **
  [
    {
      "x": "7",
      "y": "0",
      delay: 0,
    },
    {
      "x": "6",
      "y": "1",
      delay: 1,
    },
    {
      "x": "5",
      "y": "2",
      delay: 2,
    },
    {
      "x": "4",
      "y": "3",
      delay: 3,
    },
    {
      "x": "3",
      "y": "4",
      delay: 4,
    },
    {
      "x": "2",
      "y": "5",
      delay: 5,
    },
    {
      "x": "1",
      "y": "6",
      delay: 6,
    },
    {
      "x": "0",
      "y": "7",
      delay: 7,
    }
  ],
  //0,1
  [
    {
      x: 0,
      y: 1,
      delay: 0,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    },
    {
      x: 2,
      y: 1,
      delay: 2,
    },
    {
      x: 3,
      y: 1,
      delay: 3,
    },
    {
      x: 4,
      y: 1,
      delay: 4,
    },
    {
      x: 5,
      y: 1,
      delay: 5,
    },
    {
      x: 6,
      y: 1,
      delay: 6,
    },
    {
      x: 7,
      y: 1,
      delay: 7,
    }
  ],
  //1,1
  [
    {
      x: 1,
      y: 1,
      delay: 0,
    },
    {
      x: 2,
      y: 0,
      delay: 1,
    },
    {
      x: 0,
      y: 2,
      delay: 1,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    }
  ],
  /*
  [
    {
      x: 0,
      y: 0,
      delay: 7,
    },
    {
      x: 1,
      y: 1,
      delay: 6,
    },
    {
      x: 1,
      y: 0,
      delay: 6,
    },
    {
      x: 0,
      y: 1,
      delay: 6,
    },
    {
      x: 2,
      y: 2,
      delay: 5,
    },
    {
      x: 2,
      y: 0,
      delay: 5,
    },
    {
      x: 0,
      y: 2,
      delay: 5,
    },
    {
      x: 2,
      y: 1,
      delay: 5,
    },
    {
      x: 1,
      y: 2,
      delay: 5,
    },
    {
      x: 3,
      y: 3,
      delay: 4,
    },
    {
      x: 2,
      y: 3,
      delay: 4,
    },
    {
      x: 3,
      y: 2,
      delay: 4,
    },
    {
      x: 3,
      y: 1,
      delay: 4,
    },
    {
      x: 1,
      y: 3,
      delay: 4,
    },
    {
      x: 3,
      y: 0,
      delay: 4,
    },
    {
      x: 0,
      y: 3,
      delay: 4,
    },
    {
      x: 4,
      y: 4,
      delay: 3,
    },
    {
      x: 3,
      y: 4,
      delay: 3,
    },
    {
      x: 4,
      y: 3,
      delay: 3,
    },
    {
      x: 2,
      y: 4,
      delay: 3,
    },
    {
      x: 4,
      y: 2,
      delay: 3,
    },
    {
      x: 4,
      y: 1,
      delay: 3,
    },
    {
      x: 1,
      y: 4,
      delay: 3,
    },
    {
      x: 4,
      y: 0,
      delay: 3,
    },
    {
      x: 0,
      y: 4,
      delay: 3,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 4,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 4,
      delay: 2,
    },
    {
      x: 3,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 3,
      delay: 2,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 1,
      delay: 2,
    },
    {
      x: 1,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 0,
      delay: 2,
    },
    {
      x: 0,
      y: 5,
      delay: 2,
    },
    {
      x: 6,
      y: 6,
      delay: 1,
    },
    {
      x: 5,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 5,
      delay: 1,
    },
    {
      x: 4,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 4,
      delay: 1,
    },
    {
      x: 3,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 3,
      delay: 1,
    },
    {
      x: 2,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 2,
      delay: 1,
    },
    {
      x: 6,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 0,
      delay: 1,
    },
    {
      x: 0,
      y: 6,
      delay: 1,
    },
    {
      x: 7,
      y: 7,
      delay: 0,
    },
    {
      x: 6,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 6,
      delay: 0,
    },
    {
      x: 5,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 5,
      delay: 0,
    },
    {
      x: 4,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 4,
      delay: 0,
    },
    {
      x: 3,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 3,
      delay: 0,
    },
    {
      x: 2,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 2,
      delay: 0,
    },
    {
      x: 7,
      y: 1,
      delay: 0,
    },
    {
      x: 1,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 0,
      delay: 0,
    },
    {
      x: 0,
      y: 7,
      delay: 0,
    },
  ],
  */
  //2,1
  [
    {
      x: 0,
      y: 0,
      delay: 0,
    },
    {
      x: 0,
      y: 1,
      delay: 0,
    },
    {
      x: 0,
      y: 2,
      delay: 0,
    },
    {
      x: 0,
      y: 3,
      delay: 0,
    },
    {
      x: 1,
      y: 0,
      delay: 1,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 2,
      delay: 1,
    },
    {
      x: 1,
      y: 3,
      delay: 1,
    },
    {
      x: 2,
      y: 0,
      delay: 2,
    },
    {
      x: 2,
      y: 1,
      delay: 2,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 2,
      y: 3,
      delay: 2,
    },
    {
      x: 3,
      y: 0,
      delay: 3,
    },
    {
      x: 3,
      y: 1,
      delay: 3,
    },
    {
      x: 3,
      y: 2,
      delay: 3,
    },
    {
      x: 3,
      y: 3,
      delay: 3,
    },
    {
      x: 4,
      y: 0,
      delay: 4,
    },
    {
      x: 4,
      y: 1,
      delay: 4,
    },
    {
      x: 4,
      y: 2,
      delay: 4,
    },
    {
      x: 4,
      y: 3,
      delay: 4,
    },
    {
      x: 5,
      y: 0,
      delay: 5,
    },
    {
      x: 5,
      y: 1,
      delay: 5,
    },
    {
      x: 5,
      y: 2,
      delay: 5,
    },
    {
      x: 5,
      y: 3,
      delay: 5,
    },
    {
      x: 6,
      y: 0,
      delay: 6,
    },
    {
      x: 6,
      y: 1,
      delay: 6,
    },
    {
      x: 6,
      y: 2,
      delay: 6,
    },
    {
      x: 6,
      y: 3,
      delay: 6,
    },
    {
      x: 7,
      y: 0,
      delay: 7,
    },
    {
      x: 7,
      y: 1,
      delay: 7,
    },
    {
      x: 7,
      y: 2,
      delay: 7,
    },
    {
      x: 7,
      y: 3,
      delay: 7,
    },
  ],
  //3,1
  [
    {
      x: 3,
      y: 1,
      delay: 0,
    }
  ],
  //4,1
  [
    {
      x: 4,
      y: 1,
      delay: 0,
    }
  ],
  //5,1
  [
    {
      x: 0,
      y: 0,
      delay: 7,
    },
    {
      x: 0,
      y: 1,
      delay: 7,
    },
    {
      x: 0,
      y: 2,
      delay: 7,
    },
    {
      x: 0,
      y: 3,
      delay: 7,
    },
    {
      x: 1,
      y: 0,
      delay: 6,
    },
    {
      x: 1,
      y: 1,
      delay: 6,
    },
    {
      x: 1,
      y: 2,
      delay: 6,
    },
    {
      x: 1,
      y: 3,
      delay: 6,
    },
    {
      x: 2,
      y: 0,
      delay: 5,
    },
    {
      x: 2,
      y: 1,
      delay: 5,
    },
    {
      x: 2,
      y: 2,
      delay: 5,
    },
    {
      x: 2,
      y: 3,
      delay: 5,
    },
    {
      x: 3,
      y: 0,
      delay: 4,
    },
    {
      x: 3,
      y: 1,
      delay: 4,
    },
    {
      x: 3,
      y: 2,
      delay: 4,
    },
    {
      x: 3,
      y: 3,
      delay: 4,
    },
    {
      x: 4,
      y: 0,
      delay: 3,
    },
    {
      x: 4,
      y: 1,
      delay: 3,
    },
    {
      x: 4,
      y: 2,
      delay: 3,
    },
    {
      x: 4,
      y: 3,
      delay: 3,
    },
    {
      x: 5,
      y: 0,
      delay: 2,
    },
    {
      x: 5,
      y: 1,
      delay: 2,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 3,
      delay: 2,
    },
    {
      x: 6,
      y: 0,
      delay: 1,
    },
    {
      x: 6,
      y: 1,
      delay: 1,
    },
    {
      x: 6,
      y: 2,
      delay: 1,
    },
    {
      x: 6,
      y: 3,
      delay: 1,
    },
    {
      x: 7,
      y: 0,
      delay: 0,
    },
    {
      x: 7,
      y: 1,
      delay: 0,
    },
    {
      x: 7,
      y: 2,
      delay: 0,
    },
    {
      x: 7,
      y: 3,
      delay: 0,
    },
  ],
  //6,1
  [
    {
      x: 6,
      y: 1,
      delay: 0,
    }
  ],
  //7,1
  [
    {
      x: 0,
      y: 1,
      delay: 7,
    },
    {
      x: 1,
      y: 1,
      delay: 6,
    },
    {
      x: 2,
      y: 1,
      delay: 5,
    },
    {
      x: 3,
      y: 1,
      delay: 4,
    },
    {
      x: 4,
      y: 1,
      delay: 3,
    },
    {
      x: 5,
      y: 1,
      delay: 2,
    },
    {
      x: 6,
      y: 1,
      delay: 1,
    },
    {
      x: 7,
      y: 1,
      delay: 0,
    }
  ],
  //0,2
  [
    {
      x: 0,
      y: 2,
      delay: 0,
    },
    {
      x: 1,
      y: 2,
      delay: 2,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 3,
      y: 2,
      delay: 3,
    },
    {
      x: 4,
      y: 2,
      delay: 4,
    },
    {
      x: 5,
      y: 2,
      delay: 5,
    },
    {
      x: 6,
      y: 2,
      delay: 6,
    },
    {
      x: 7,
      y: 2,
      delay: 7,
    }
  ],
  //1,2
  [
    {
      x: 0,
      y: 0,
      delay: 0,
    },
    {
      x: 1,
      y: 0,
      delay: 0,
    },
    {
      x: 2,
      y: 0,
      delay: 0,
    },
    {
      x: 3,
      y: 0,
      delay: 0,
    },
    {
      x: 0,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    },
    {
      x: 2,
      y: 1,
      delay: 1,
    },
    {
      x: 3,
      y: 1,
      delay: 1,
    },
    {
      x: 0,
      y: 2,
      delay: 2,
    },
    {
      x: 1,
      y: 2,
      delay: 2,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 3,
      y: 2,
      delay: 2,
    },
    {
      x: 0,
      y: 3,
      delay: 3,
    },
    {
      x: 1,
      y: 3,
      delay: 3,
    },
    {
      x: 2,
      y: 3,
      delay: 3,
    },
    {
      x: 3,
      y: 3,
      delay: 3,
    },
    {
      x: 0,
      y: 4,
      delay: 4,
    },
    {
      x: 1,
      y: 4,
      delay: 4,
    },
    {
      x: 2,
      y: 4,
      delay: 4,
    },
    {
      x: 3,
      y: 4,
      delay: 4,
    },
    {
      x: 0,
      y: 5,
      delay: 5,
    },
    {
      x: 1,
      y: 5,
      delay: 5,
    },
    {
      x: 2,
      y: 5,
      delay: 5,
    },
    {
      x: 3,
      y: 5,
      delay: 5,
    },
    {
      x: 0,
      y: 6,
      delay: 6,
    },
    {
      x: 1,
      y: 6,
      delay: 6,
    },
    {
      x: 2,
      y: 6,
      delay: 6,
    },
    {
      x: 3,
      y: 6,
      delay: 6,
    },
    {
      x: 0,
      y: 7,
      delay: 7,
    },
    {
      x: 1,
      y: 7,
      delay: 7,
    },
    {
      x: 2,
      y: 7,
      delay: 7,
    },
    {
      x: 3,
      y: 7,
      delay: 7,
    },
  ],
  //2,2
  [
    {
      x: 2,
      y: 2,
      delay: 0,
    },
    {
      x: 0,
      y: 5,
      delay: 1,
    },
    {
      x: 1,
      y: 3,
      delay: 1,
    },
    {
      x: 2,
      y: 2,
      delay: 1,
    },
    {
      x: 3,
      y: 1,
      delay: 1,
    },
    {
      x: 5,
      y: 0,
      delay: 1,
    },
  ],
  /*
  [
    {
      x: 0,
      y: 0,
      delay: 0,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 0,
      delay: 1,
    },
    {
      x: 0,
      y: 1,
      delay: 1,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 2,
      y: 0,
      delay: 2,
    },
    {
      x: 0,
      y: 2,
      delay: 2,
    },
    {
      x: 2,
      y: 1,
      delay: 2,
    },
    {
      x: 1,
      y: 2,
      delay: 2,
    },
    {
      x: 3,
      y: 3,
      delay: 3,
    },
    {
      x: 2,
      y: 3,
      delay: 3,
    },
    {
      x: 3,
      y: 2,
      delay: 3,
    },
    {
      x: 3,
      y: 1,
      delay: 3,
    },
    {
      x: 1,
      y: 3,
      delay: 3,
    },
    {
      x: 3,
      y: 0,
      delay: 3,
    },
    {
      x: 0,
      y: 3,
      delay: 3,
    },
    {
      x: 4,
      y: 4,
      delay: 4,
    },
    {
      x: 3,
      y: 4,
      delay: 4,
    },
    {
      x: 4,
      y: 3,
      delay: 4,
    },
    {
      x: 2,
      y: 4,
      delay: 4,
    },
    {
      x: 4,
      y: 2,
      delay: 4,
    },
    {
      x: 4,
      y: 1,
      delay: 4,
    },
    {
      x: 1,
      y: 4,
      delay: 4,
    },
    {
      x: 4,
      y: 0,
      delay: 4,
    },
    {
      x: 0,
      y: 4,
      delay: 4,
    },
    {
      x: 5,
      y: 5,
      delay: 5,
    },
    {
      x: 4,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 4,
      delay: 5,
    },
    {
      x: 3,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 3,
      delay: 5,
    },
    {
      x: 2,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 2,
      delay: 5,
    },
    {
      x: 5,
      y: 1,
      delay: 5,
    },
    {
      x: 1,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 0,
      delay: 5,
    },
    {
      x: 0,
      y: 5,
      delay: 5,
    },
    {
      x: 6,
      y: 6,
      delay: 6,
    },
    {
      x: 5,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 5,
      delay: 6,
    },
    {
      x: 4,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 4,
      delay: 6,
    },
    {
      x: 3,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 3,
      delay: 6,
    },
    {
      x: 2,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 2,
      delay: 6,
    },
    {
      x: 6,
      y: 1,
      delay: 6,
    },
    {
      x: 1,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 0,
      delay: 6,
    },
    {
      x: 0,
      y: 6,
      delay: 6,
    },
    {
      x: 7,
      y: 7,
      delay: 7,
    },
    {
      x: 6,
      y: 7,
      delay: 7,
    },
    {
      x: 7,
      y: 6,
      delay: 7,
    },
    {
      x: 5,
      y: 7,
      delay: 7,
    },
    {
      x: 7,
      y: 5,
      delay: 7,
    },
    {
      x: 4,
      y: 7,
      delay: 7,
    },
    {
      x: 7,
      y: 4,
      delay: 7,
    },
    {
      x: 3,
      y: 7,
      delay: 7,
    },
    {
      x: 7,
      y: 3,
      delay: 7,
    },
    {
      x: 2,
      y: 7,
      delay: 7,
    },
    {
      x: 7,
      y: 2,
      delay: 7,
    },
    {
      x: 7,
      y: 1,
      delay: 7,
    },
    {
      x: 1,
      y: 7,
      delay: 7,
    },
    {
      x: 7,
      y: 0,
      delay: 7,
    },
    {
      x: 0,
      y: 7,
      delay: 7,
    },
  ],
  */
  //3,2
  [
    {
      x: 3,
      y: 2,
      delay: 0,
    }
  ],
  //4,2
  [
    {
      x: 4,
      y: 2,
      delay: 0,
    }
  ],
  //5,2
  [
    {
      x: 5,
      y: 2,
      delay: 0,
    }
  ],
  //6,2
  [
    {
      x: 4,
      y: 0,
      delay: 0,
    },
    {
      x: 5,
      y: 0,
      delay: 0,
    },
    {
      x: 6,
      y: 0,
      delay: 0,
    },
    {
      x: 7,
      y: 0,
      delay: 0,
    },
    {
      x: 4,
      y: 1,
      delay: 1,
    },
    {
      x: 5,
      y: 1,
      delay: 1,
    },
    {
      x: 6,
      y: 1,
      delay: 1,
    },
    {
      x: 7,
      y: 1,
      delay: 1,
    },
    {
      x: 4,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 6,
      y: 2,
      delay: 2,
    },
    {
      x: 7,
      y: 2,
      delay: 2,
    },
    {
      x: 4,
      y: 3,
      delay: 3,
    },
    {
      x: 5,
      y: 3,
      delay: 3,
    },
    {
      x: 6,
      y: 3,
      delay: 3,
    },
    {
      x: 7,
      y: 3,
      delay: 3,
    },
    {
      x: 4,
      y: 4,
      delay: 4,
    },
    {
      x: 5,
      y: 4,
      delay: 4,
    },
    {
      x: 6,
      y: 4,
      delay: 4,
    },
    {
      x: 7,
      y: 4,
      delay: 4,
    },
    {
      x: 4,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 5,
      delay: 5,
    },
    {
      x: 6,
      y: 5,
      delay: 5,
    },
    {
      x: 7,
      y: 5,
      delay: 5,
    },
    {
      x: 4,
      y: 6,
      delay: 6,
    },
    {
      x: 5,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 6,
      delay: 6,
    },
    {
      x: 7,
      y: 6,
      delay: 6,
    },
    {
      x: 4,
      y: 7,
      delay: 7,
    },
    {
      x: 5,
      y: 7,
      delay: 7,
    },
    {
      x: 6,
      y: 7,
      delay: 7,
    },
    {
      x: 7,
      y: 7,
      delay: 7,
    },
  ],
  //7,2
  [
    {
      x: 0,
      y: 2,
      delay: 7,
    },
    {
      x: 1,
      y: 2,
      delay: 6,
    },
    {
      x: 2,
      y: 2,
      delay: 5,
    },
    {
      x: 3,
      y: 2,
      delay: 4,
    },
    {
      x: 4,
      y: 2,
      delay: 3,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 6,
      y: 2,
      delay: 1,
    },
    {
      x: 7,
      y: 2,
      delay: 0,
    }
  ],
  //0,3 **
  [
    {
      x: 0,
      y: 3,
      delay: 0,
    },
    {
      x: 1,
      y: 2,
      delay: 1,
    },
    {
      x: 2,
      y: 1,
      delay: 2,
    },
    {
      x: 3,
      y: 0,
      delay: 3,
    },
    {
      x: 0,
      y: 4,
      delay: 0,
    },
    {
      x: 1,
      y: 5,
      delay: 1,
    },
    {
      x: 2,
      y: 6,
      delay: 2,
    },
    {
      x: 3,
      y: 7,
      delay: 3,
    },
  ],
  //1,3
  [
    {
      x: 1,
      y: 3,
      delay: 0,
    }
  ],
  //2,3
  [
    {
      x: 2,
      y: 3,
      delay: 0,
    }
  ],
  //3,3
  [
    {
      x: 3,
      y: 3,
      delay: 0,
    }
  ],
  //4,3
  [
    {
      x: 4,
      y: 3,
      delay: 0,
    }
  ],
  //5,3
  [
    {
      x: 5,
      y: 3,
      delay: 0,
    }
  ],
  //6,3
  [
    {
      x: 6,
      y: 3,
      delay: 0,
    }
  ],
  //7,3 **
  [
    {
      x: 7,
      y: 3,
      delay: 0,
    },
    {
      x: 6,
      y: 2,
      delay: 1,
    },
    {
      x: 5,
      y: 1,
      delay: 2,
    },
    {
      x: 4,
      y: 0,
      delay: 3,
    },
    {
      x: 7,
      y: 4,
      delay: 0,
    },
    {
      x: 6,
      y: 5,
      delay: 1,
    },
    {
      x: 5,
      y: 6,
      delay: 2,
    },
    {
      x: 4,
      y: 7,
      delay: 3,
    },
  ],
  //0,4 **
  [
    {
      x: 0,
      y: 0,
      delay: 0,
    },
    {
      x: 0,
      y: 1,
      delay: 0,
    },
    {
      x: 0,
      y: 2,
      delay: 0,
    },
    {
      x: 0,
      y: 3,
      delay: 0,
    },{
      x: 0,
      y: 4,
      delay: 0,
    },
    {
      x: 0,
      y: 5,
      delay: 0,
    },
    {
      x: 0,
      y: 6,
      delay: 0,
    },
    {
      x: 0,
      y: 7,
      delay: 0,
    },
    {
      x: 1,
      y: 0,
      delay: 1,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 2,
      delay: 1,
    },
    {
      x: 1,
      y: 3,
      delay: 1,
    },{
      x: 1,
      y: 4,
      delay: 1,
    },
    {
      x: 1,
      y: 5,
      delay: 1,
    },
    {
      x: 1,
      y: 6,
      delay: 1,
    },
    {
      x: 1,
      y: 7,
      delay: 1,
    },
    {
      x: 2,
      y: 0,
      delay: 2,
    },
    {
      x: 2,
      y: 1,
      delay: 2,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 2,
      y: 3,
      delay: 2,
    },{
      x: 2,
      y: 4,
      delay: 2,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 6,
      delay: 2,
    },
    {
      x: 2,
      y: 7,
      delay: 2,
    },
    {
      x: 3,
      y: 0,
      delay: 3,
    },
    {
      x: 3,
      y: 1,
      delay: 3,
    },
    {
      x: 3,
      y: 2,
      delay: 3,
    },
    {
      x: 3,
      y: 3,
      delay: 3,
    },{
      x: 3,
      y: 4,
      delay: 3,
    },
    {
      x: 3,
      y: 5,
      delay: 3,
    },
    {
      x: 3,
      y: 6,
      delay: 3,
    },
    {
      x: 3,
      y: 7,
      delay: 3,
    },
    {
      x: 4,
      y: 0,
      delay: 4,
    },
    {
      x: 4,
      y: 1,
      delay: 4,
    },
    {
      x: 4,
      y: 2,
      delay: 4,
    },
    {
      x: 4,
      y: 3,
      delay: 4,
    },{
      x: 4,
      y: 4,
      delay: 4,
    },
    {
      x: 4,
      y: 5,
      delay: 4,
    },
    {
      x: 4,
      y: 6,
      delay: 4,
    },
    {
      x: 4,
      y: 7,
      delay: 4,
    },
    {
      x: 5,
      y: 0,
      delay: 5,
    },
    {
      x: 5,
      y: 1,
      delay: 5,
    },
    {
      x: 5,
      y: 2,
      delay: 5,
    },
    {
      x: 5,
      y: 3,
      delay: 5,
    },{
      x: 5,
      y: 4,
      delay: 5,
    },
    {
      x: 5,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 6,
      delay: 5,
    },
    {
      x: 5,
      y: 7,
      delay: 5,
    },
    {
      x: 6,
      y: 0,
      delay: 6,
    },
    {
      x: 6,
      y: 1,
      delay: 6,
    },
    {
      x: 6,
      y: 2,
      delay: 6,
    },
    {
      x: 6,
      y: 3,
      delay: 6,
    },{
      x: 6,
      y: 4,
      delay: 6,
    },
    {
      x: 6,
      y: 5,
      delay: 6,
    },
    {
      x: 6,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 7,
      delay: 6,
    },
    {
      x: 7,
      y: 0,
      delay: 7,
    },
    {
      x: 7,
      y: 1,
      delay: 7,
    },
    {
      x: 7,
      y: 2,
      delay: 7,
    },
    {
      x: 7,
      y: 3,
      delay: 7,
    },{
      x: 7,
      y: 4,
      delay: 7,
    },
    {
      x: 7,
      y: 5,
      delay: 7,
    },
    {
      x: 7,
      y: 6,
      delay: 7,
    },
    {
      x: 7,
      y: 7,
      delay: 7,
    },
  ],
  //1,4
  [
    {
      x: 1,
      y: 4,
      delay: 0,
    }
  ],
  //2,4
  [
    {
      x: 2,
      y: 4,
      delay: 0,
    }
  ],
  //3,4 **
  [
    {
      x: 3,
      y: 4,
      delay: 4
    },
    {
      x: 3,
      y: 3,
      delay: 3,
    },
    {
      x: 4,
      y: 3,
      delay: 3,
    },
    {
      x: 4,
      y: 4,
      delay: 3,
    },
    {
      x: 3,
      y: 4,
      delay: 3,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 3,
      y: 2,
      delay: 2,
    },
    {
      x: 4,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 3,
      delay: 2,
    },
    {
      x: 5,
      y: 4,
      delay: 2,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 4,
      y: 5,
      delay: 2,
    },
    {
      x: 3,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 4,
      delay: 2,
    },
    {
      x: 2,
      y: 3,
      delay: 2,
    },
    {
      x: 1,
      y: 1,
      delay: 1,
    },
    {
      x: 2,
      y: 1,
      delay: 1,
    },
    {
      x: 3,
      y: 1,
      delay: 1,
    },
    {
      x: 4,
      y: 1,
      delay: 1,
    },
    {
      x: 5,
      y: 1,
      delay: 1,
    },
    {
      x: 6,
      y: 1,
      delay: 1,
    },
    {
      x: 1,
      y: 2,
      delay: 1,
    },
    {
      x: 6,
      y: 2,
      delay: 1,
    },
    {
      x: 1,
      y: 3,
      delay: 1,
    },
    {
      x: 6,
      y: 3,
      delay: 1,
    },
    {
      x: 1,
      y: 4,
      delay: 1,
    },
    {
      x: 6,
      y: 4,
      delay: 1,
    },
    {
      x: 1,
      y: 5,
      delay: 1,
    },
    {
      x: 6,
      y: 5,
      delay: 1,
    },
    {
      x: 1,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 6,
      delay: 1,
    },
    {
      x: 2,
      y: 6,
      delay: 1,
    },
    {
      x: 5,
      y: 6,
      delay: 1,
    },
    {
      x: 3,
      y: 6,
      delay: 1,
    },
    {
      x: 4,
      y: 6,
      delay: 1,
    },
    {
      x: 7,
      y: 0,
      delay: 0,
    },
    {
      x: 6,
      y: 0,
      delay: 0,
    },
    {
      x: 5,
      y: 0,
      delay: 0,
    },
    {
      x: 4,
      y: 0,
      delay: 0,
    },
    {
      x: 3,
      y: 0,
      delay: 0,
    },
    {
      x: 2,
      y: 0,
      delay: 0,
    },
    {
      x: 1,
      y: 0,
      delay: 0,
    },
    {
      x: 0,
      y: 0,
      delay: 0,
    },
    {
      x: 0,
      y: 1,
      delay: 0,
    },
    {
      x: 0,
      y: 2,
      delay: 0,
    },
    {
      x: 0,
      y: 3,
      delay: 0,
    },
    {
      x: 0,
      y: 4,
      delay: 0,
    },
    {
      x: 0,
      y: 5,
      delay: 0,
    },
    {
      x: 0,
      y: 6,
      delay: 0,
    },
    {
      x: 0,
      y: 7,
      delay: 0,
    },
    {
      x: 1,
      y: 7,
      delay: 0,
    },
    {
      x: 2,
      y: 7,
      delay: 0,
    },
    {
      x: 3,
      y: 7,
      delay: 0,
    },
    {
      x: 4,
      y: 7,
      delay: 0,
    },
    {
      x: 5,
      y: 7,
      delay: 0,
    },
    {
      x: 6,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 6,
      delay: 0,
    },
    {
      x: 7,
      y: 5,
      delay: 0,
    },
    {
      x: 7,
      y: 4,
      delay: 0,
    },
    {
      x: 7,
      y: 3,
      delay: 0,
    },
    {
      x: 7,
      y: 2,
      delay: 0,
    },
    {
      x: 7,
      y: 1,
      delay: 0,
    },
  ],
  //4,4 **
  [
    {
      x: 4,
      y: 4,
      delay: 0
    },
    {
      x: 3,
      y: 3,
      delay: 1,
    },
    {
      x: 4,
      y: 3,
      delay: 1,
    },
    {
      x: 4,
      y: 4,
      delay: 1,
    },
    {
      x: 3,
      y: 4,
      delay: 1,
    },
    {
      x: 2,
      y: 2,
      delay: 2,
    },
    {
      x: 3,
      y: 2,
      delay: 2,
    },
    {
      x: 4,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 3,
      delay: 2,
    },
    {
      x: 5,
      y: 4,
      delay: 2,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 4,
      y: 5,
      delay: 2,
    },
    {
      x: 3,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 4,
      delay: 2,
    },
    {
      x: 2,
      y: 3,
      delay: 2,
    },
    {
      x: 1,
      y: 1,
      delay: 3,
    },
    {
      x: 2,
      y: 1,
      delay: 3,
    },
    {
      x: 3,
      y: 1,
      delay: 3,
    },
    {
      x: 4,
      y: 1,
      delay: 3,
    },
    {
      x: 5,
      y: 1,
      delay: 3,
    },
    {
      x: 6,
      y: 1,
      delay: 3,
    },
    {
      x: 1,
      y: 2,
      delay: 3,
    },
    {
      x: 6,
      y: 2,
      delay: 3,
    },
    {
      x: 1,
      y: 3,
      delay: 3,
    },
    {
      x: 6,
      y: 3,
      delay: 3,
    },
    {
      x: 1,
      y: 4,
      delay: 3,
    },
    {
      x: 6,
      y: 4,
      delay: 3,
    },
    {
      x: 1,
      y: 5,
      delay: 3,
    },
    {
      x: 6,
      y: 5,
      delay: 3,
    },
    {
      x: 1,
      y: 6,
      delay: 3,
    },
    {
      x: 6,
      y: 6,
      delay: 3,
    },
    {
      x: 2,
      y: 6,
      delay: 3,
    },
    {
      x: 5,
      y: 6,
      delay: 3,
    },
    {
      x: 3,
      y: 6,
      delay: 3,
    },
    {
      x: 4,
      y: 6,
      delay: 3,
    },
    {
      x: 7,
      y: 0,
      delay: 4,
    },
    {
      x: 6,
      y: 0,
      delay: 4,
    },
    {
      x: 5,
      y: 0,
      delay: 4,
    },
    {
      x: 4,
      y: 0,
      delay: 4,
    },
    {
      x: 3,
      y: 0,
      delay: 4,
    },
    {
      x: 2,
      y: 0,
      delay: 4,
    },
    {
      x: 1,
      y: 0,
      delay: 4,
    },
    {
      x: 0,
      y: 0,
      delay: 4,
    },
    {
      x: 0,
      y: 1,
      delay: 4,
    },
    {
      x: 0,
      y: 2,
      delay: 4,
    },
    {
      x: 0,
      y: 3,
      delay: 4,
    },
    {
      x: 0,
      y: 4,
      delay: 4,
    },
    {
      x: 0,
      y: 5,
      delay: 4,
    },
    {
      x: 0,
      y: 6,
      delay: 4,
    },
    {
      x: 0,
      y: 7,
      delay: 4,
    },
    {
      x: 1,
      y: 7,
      delay: 4,
    },
    {
      x: 2,
      y: 7,
      delay: 4,
    },
    {
      x: 3,
      y: 7,
      delay: 4,
    },
    {
      x: 4,
      y: 7,
      delay: 4,
    },
    {
      x: 5,
      y: 7,
      delay: 4,
    },
    {
      x: 6,
      y: 7,
      delay: 4,
    },
    {
      x: 7,
      y: 7,
      delay: 4,
    },
    {
      x: 7,
      y: 6,
      delay: 4,
    },
    {
      x: 7,
      y: 5,
      delay: 4,
    },
    {
      x: 7,
      y: 4,
      delay: 4,
    },
    {
      x: 7,
      y: 3,
      delay: 4,
    },
    {
      x: 7,
      y: 2,
      delay: 4,
    },
    {
      x: 7,
      y: 1,
      delay: 4,
    },
  ],
  //5,4
  [
    {
      x: 5,
      y: 4,
      delay: 0,
    }
  ],
  //6,4
  [
    {
      x: 6,
      y: 4,
      delay: 0,
    }
  ],
  //7,4 **
  [
    {
      x: 0,
      y: 0,
      delay: 7,
    },
    {
      x: 0,
      y: 1,
      delay: 7,
    },
    {
      x: 0,
      y: 2,
      delay: 7,
    },
    {
      x: 0,
      y: 3,
      delay: 7,
    },{
      x: 0,
      y: 4,
      delay: 7,
    },
    {
      x: 0,
      y: 5,
      delay: 7,
    },
    {
      x: 0,
      y: 6,
      delay: 7,
    },
    {
      x: 0,
      y: 7,
      delay: 7,
    },
    {
      x: 1,
      y: 0,
      delay: 6,
    },
    {
      x: 1,
      y: 1,
      delay: 6,
    },
    {
      x: 1,
      y: 2,
      delay: 6,
    },
    {
      x: 1,
      y: 3,
      delay: 6,
    },{
      x: 1,
      y: 4,
      delay: 6,
    },
    {
      x: 1,
      y: 5,
      delay: 6,
    },
    {
      x: 1,
      y: 6,
      delay: 6,
    },
    {
      x: 1,
      y: 7,
      delay: 6,
    },
    {
      x: 2,
      y: 0,
      delay: 5,
    },
    {
      x: 2,
      y: 1,
      delay: 5,
    },
    {
      x: 2,
      y: 2,
      delay: 5,
    },
    {
      x: 2,
      y: 3,
      delay: 5,
    },{
      x: 2,
      y: 4,
      delay: 5,
    },
    {
      x: 2,
      y: 5,
      delay: 5,
    },
    {
      x: 2,
      y: 6,
      delay: 5,
    },
    {
      x: 2,
      y: 7,
      delay: 5,
    },
    {
      x: 3,
      y: 0,
      delay: 4,
    },
    {
      x: 3,
      y: 1,
      delay: 4,
    },
    {
      x: 3,
      y: 2,
      delay: 4,
    },
    {
      x: 3,
      y: 3,
      delay: 4,
    },{
      x: 3,
      y: 4,
      delay: 4,
    },
    {
      x: 3,
      y: 5,
      delay: 4,
    },
    {
      x: 3,
      y: 6,
      delay: 4,
    },
    {
      x: 3,
      y: 7,
      delay: 4,
    },
    {
      x: 4,
      y: 0,
      delay: 3,
    },
    {
      x: 4,
      y: 1,
      delay: 3,
    },
    {
      x: 4,
      y: 2,
      delay: 3,
    },
    {
      x: 4,
      y: 3,
      delay: 3,
    },{
      x: 4,
      y: 4,
      delay: 3,
    },
    {
      x: 4,
      y: 5,
      delay: 3,
    },
    {
      x: 4,
      y: 6,
      delay: 3,
    },
    {
      x: 4,
      y: 7,
      delay: 3,
    },
    {
      x: 5,
      y: 0,
      delay: 2,
    },
    {
      x: 5,
      y: 1,
      delay: 2,
    },
    {
      x: 5,
      y: 2,
      delay: 2,
    },
    {
      x: 5,
      y: 3,
      delay: 2,
    },{
      x: 5,
      y: 4,
      delay: 2,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 6,
      delay: 2,
    },
    {
      x: 5,
      y: 7,
      delay: 2,
    },
    {
      x: 6,
      y: 0,
      delay: 1,
    },
    {
      x: 6,
      y: 1,
      delay: 1,
    },
    {
      x: 6,
      y: 2,
      delay: 1,
    },
    {
      x: 6,
      y: 3,
      delay: 1,
    },{
      x: 6,
      y: 4,
      delay: 1,
    },
    {
      x: 6,
      y: 5,
      delay: 1,
    },
    {
      x: 6,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 7,
      delay: 1,
    },
    {
      x: 7,
      y: 0,
      delay: 0,
    },
    {
      x: 7,
      y: 1,
      delay: 0,
    },
    {
      x: 7,
      y: 2,
      delay: 0,
    },
    {
      x: 7,
      y: 3,
      delay: 0,
    },{
      x: 7,
      y: 4,
      delay: 0,
    },
    {
      x: 7,
      y: 5,
      delay: 0,
    },
    {
      x: 7,
      y: 6,
      delay: 0,
    },
    {
      x: 7,
      y: 7,
      delay: 0,
    },
  ],
  //0,5
  [
    {
      x: 0,
      y: 5,
      delay: 0,
    },
    {
      x: 1,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 3,
      y: 5,
      delay: 3,
    },
    {
      x: 4,
      y: 5,
      delay: 4,
    },
    {
      x: 5,
      y: 5,
      delay: 5,
    },
    {
      x: 6,
      y: 5,
      delay: 6,
    },
    {
      x: 7,
      y: 5,
      delay: 7,
    }
  ],
  //1,5
  [
    {
      x: 0,
      y: 0,
      delay: 7,
    },
    {
      x: 1,
      y: 0,
      delay: 7,
    },
    {
      x: 2,
      y: 0,
      delay: 7,
    },
    {
      x: 3,
      y: 0,
      delay: 7,
    },
    {
      x: 0,
      y: 1,
      delay: 6,
    },
    {
      x: 1,
      y: 1,
      delay: 6,
    },
    {
      x: 2,
      y: 1,
      delay: 6,
    },
    {
      x: 3,
      y: 1,
      delay: 6,
    },
    {
      x: 0,
      y: 2,
      delay: 5,
    },
    {
      x: 1,
      y: 2,
      delay: 5,
    },
    {
      x: 2,
      y: 2,
      delay: 5,
    },
    {
      x: 3,
      y: 2,
      delay: 5,
    },
    {
      x: 0,
      y: 3,
      delay: 4,
    },
    {
      x: 1,
      y: 3,
      delay: 4,
    },
    {
      x: 2,
      y: 3,
      delay: 4,
    },
    {
      x: 3,
      y: 3,
      delay: 4,
    },
    {
      x: 0,
      y: 4,
      delay: 3,
    },
    {
      x: 1,
      y: 4,
      delay: 3,
    },
    {
      x: 2,
      y: 4,
      delay: 3,
    },
    {
      x: 3,
      y: 4,
      delay: 3,
    },
    {
      x: 0,
      y: 5,
      delay: 2,
    },
    {
      x: 1,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 3,
      y: 5,
      delay: 2,
    },
    {
      x: 0,
      y: 6,
      delay: 1,
    },
    {
      x: 1,
      y: 6,
      delay: 1,
    },
    {
      x: 2,
      y: 6,
      delay: 1,
    },
    {
      x: 3,
      y: 6,
      delay: 1,
    },
    {
      x: 0,
      y: 7,
      delay: 0,
    },
    {
      x: 1,
      y: 7,
      delay: 0,
    },
    {
      x: 2,
      y: 7,
      delay: 0,
    },
    {
      x: 3,
      y: 7,
      delay: 0,
    },
  ],
  //2,5
  [
    {
      "x": 0,
      "y": 7,
      "delay": 0
    },
    {
      "x": 1,
      "y": 6,
      "delay": 1
    },
    {
      "x": 1,
      "y": 7,
      "delay": 1
    },
    {
      "x": 0,
      "y": 6,
      "delay": 1
    },
    {
      "x": 2,
      "y": 5,
      "delay": 2
    },
    {
      "x": 2,
      "y": 7,
      "delay": 2
    },
    {
      "x": 0,
      "y": 5,
      "delay": 2
    },
    {
      "x": 2,
      "y": 6,
      "delay": 2
    },
    {
      "x": 1,
      "y": 5,
      "delay": 2
    },
    {
      "x": 3,
      "y": 4,
      "delay": 3
    },
    {
      "x": 2,
      "y": 4,
      "delay": 3
    },
    {
      "x": 3,
      "y": 5,
      "delay": 3
    },
    {
      "x": 3,
      "y": 6,
      "delay": 3
    },
    {
      "x": 1,
      "y": 4,
      "delay": 3
    },
    {
      "x": 3,
      "y": 7,
      "delay": 3
    },
    {
      "x": 0,
      "y": 4,
      "delay": 3
    },
    {
      "x": 4,
      "y": 3,
      "delay": 4
    },
    {
      "x": 3,
      "y": 3,
      "delay": 4
    },
    {
      "x": 4,
      "y": 4,
      "delay": 4
    },
    {
      "x": 2,
      "y": 3,
      "delay": 4
    },
    {
      "x": 4,
      "y": 5,
      "delay": 4
    },
    {
      "x": 4,
      "y": 6,
      "delay": 4
    },
    {
      "x": 1,
      "y": 3,
      "delay": 4
    },
    {
      "x": 4,
      "y": 7,
      "delay": 4
    },
    {
      "x": 0,
      "y": 3,
      "delay": 4
    },
    {
      "x": 5,
      "y": 2,
      "delay": 5
    },
    {
      "x": 4,
      "y": 2,
      "delay": 5
    },
    {
      "x": 5,
      "y": 3,
      "delay": 5
    },
    {
      "x": 3,
      "y": 2,
      "delay": 5
    },
    {
      "x": 5,
      "y": 4,
      "delay": 5
    },
    {
      "x": 2,
      "y": 2,
      "delay": 5
    },
    {
      "x": 5,
      "y": 5,
      "delay": 5
    },
    {
      "x": 5,
      "y": 6,
      "delay": 5
    },
    {
      "x": 1,
      "y": 2,
      "delay": 5
    },
    {
      "x": 5,
      "y": 7,
      "delay": 5
    },
    {
      "x": 0,
      "y": 2,
      "delay": 5
    },
    {
      "x": 6,
      "y": 1,
      "delay": 6
    },
    {
      "x": 5,
      "y": 1,
      "delay": 6
    },
    {
      "x": 6,
      "y": 2,
      "delay": 6
    },
    {
      "x": 4,
      "y": 1,
      "delay": 6
    },
    {
      "x": 6,
      "y": 3,
      "delay": 6
    },
    {
      "x": 3,
      "y": 1,
      "delay": 6
    },
    {
      "x": 6,
      "y": 4,
      "delay": 6
    },
    {
      "x": 2,
      "y": 1,
      "delay": 6
    },
    {
      "x": 6,
      "y": 5,
      "delay": 6
    },
    {
      "x": 6,
      "y": 6,
      "delay": 6
    },
    {
      "x": 1,
      "y": 1,
      "delay": 6
    },
    {
      "x": 6,
      "y": 7,
      "delay": 6
    },
    {
      "x": 0,
      "y": 1,
      "delay": 6
    },
    {
      "x": 7,
      "y": 0,
      "delay": 7
    },
    {
      "x": 6,
      "y": 0,
      "delay": 7
    },
    {
      "x": 7,
      "y": 1,
      "delay": 7
    },
    {
      "x": 5,
      "y": 0,
      "delay": 7
    },
    {
      "x": 7,
      "y": 2,
      "delay": 7
    },
    {
      "x": 4,
      "y": 0,
      "delay": 7
    },
    {
      "x": 7,
      "y": 3,
      "delay": 7
    },
    {
      "x": 3,
      "y": 0,
      "delay": 7
    },
    {
      "x": 7,
      "y": 4,
      "delay": 7
    },
    {
      "x": 2,
      "y": 0,
      "delay": 7
    },
    {
      "x": 7,
      "y": 5,
      "delay": 7
    },
    {
      "x": 7,
      "y": 6,
      "delay": 7
    },
    {
      "x": 1,
      "y": 0,
      "delay": 7
    },
    {
      "x": 7,
      "y": 7,
      "delay": 7
    },
    {
      "x": 0,
      "y": 0,
      "delay": 7
    }
  ],
  //3,5
  [
    {
      x: 3,
      y: 5,
      delay: 0,
    }
  ],
  //4,5
  [
    {
      x: 4,
      y: 5,
      delay: 0,
    }
  ],
  //5,5
  [
    {
      x: 5,
      y: 5,
      delay: 0,
    }
  ],
  //6,5
  [
    {
      x: 4,
      y: 0,
      delay: 7,
    },
    {
      x: 5,
      y: 0,
      delay: 7,
    },
    {
      x: 6,
      y: 0,
      delay: 7,
    },
    {
      x: 7,
      y: 0,
      delay: 7,
    },
    {
      x: 4,
      y: 1,
      delay: 6,
    },
    {
      x: 5,
      y: 1,
      delay: 6,
    },
    {
      x: 6,
      y: 1,
      delay: 6,
    },
    {
      x: 7,
      y: 1,
      delay: 6,
    },
    {
      x: 4,
      y: 2,
      delay: 5,
    },
    {
      x: 5,
      y: 2,
      delay: 5,
    },
    {
      x: 6,
      y: 2,
      delay: 5,
    },
    {
      x: 7,
      y: 2,
      delay: 5,
    },
    {
      x: 4,
      y: 3,
      delay: 4,
    },
    {
      x: 5,
      y: 3,
      delay: 4,
    },
    {
      x: 6,
      y: 3,
      delay: 4,
    },
    {
      x: 7,
      y: 3,
      delay: 4,
    },
    {
      x: 4,
      y: 4,
      delay: 3,
    },
    {
      x: 5,
      y: 4,
      delay: 3,
    },
    {
      x: 6,
      y: 4,
      delay: 3,
    },
    {
      x: 7,
      y: 4,
      delay: 3,
    },
    {
      x: 4,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 6,
      y: 5,
      delay: 2,
    },
    {
      x: 7,
      y: 5,
      delay: 2,
    },
    {
      x: 4,
      y: 6,
      delay: 1,
    },
    {
      x: 5,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 6,
      delay: 1,
    },
    {
      x: 7,
      y: 6,
      delay: 1,
    },
    {
      x: 4,
      y: 7,
      delay: 0,
    },
    {
      x: 5,
      y: 7,
      delay: 0,
    },
    {
      x: 6,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 7,
      delay: 0,
    },
  ],
  //7,5
  [
    {
      x: 0,
      y: 5,
      delay: 7,
    },
    {
      x: 1,
      y: 5,
      delay: 6,
    },
    {
      x: 2,
      y: 5,
      delay: 5,
    },
    {
      x: 3,
      y: 5,
      delay: 4,
    },
    {
      x: 4,
      y: 5,
      delay: 3,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 6,
      y: 5,
      delay: 1,
    },
    {
      x: 7,
      y: 5,
      delay: 0,
    }
  ],
  //0,6
  [
    {
      x: 0,
      y: 6,
      delay: 0,
    },
    {
      x: 1,
      y: 6,
      delay: 2,
    },
    {
      x: 2,
      y: 6,
      delay: 2,
    },
    {
      x: 3,
      y: 6,
      delay: 3,
    },
    {
      x: 4,
      y: 6,
      delay: 4,
    },
    {
      x: 5,
      y: 6,
      delay: 5,
    },
    {
      x: 6,
      y: 6,
      delay: 6,
    },
    {
      x: 7,
      y: 6,
      delay: 7,
    }
  ],
  //1,6
  [
    {
      "x": 0,
      "y": 7,
      "delay": 7
    },
    {
      "x": 1,
      "y": 6,
      "delay": 6
    },
    {
      "x": 1,
      "y": 7,
      "delay": 6
    },
    {
      "x": 0,
      "y": 6,
      "delay": 6
    },
    {
      "x": 2,
      "y": 5,
      "delay": 5
    },
    {
      "x": 2,
      "y": 7,
      "delay": 5
    },
    {
      "x": 0,
      "y": 5,
      "delay": 5
    },
    {
      "x": 2,
      "y": 6,
      "delay": 5
    },
    {
      "x": 1,
      "y": 5,
      "delay": 5
    },
    {
      "x": 3,
      "y": 4,
      "delay": 4
    },
    {
      "x": 2,
      "y": 4,
      "delay": 4
    },
    {
      "x": 3,
      "y": 5,
      "delay": 4
    },
    {
      "x": 3,
      "y": 6,
      "delay": 4
    },
    {
      "x": 1,
      "y": 4,
      "delay": 4
    },
    {
      "x": 3,
      "y": 7,
      "delay": 4
    },
    {
      "x": 0,
      "y": 4,
      "delay": 4
    },
    {
      "x": 4,
      "y": 3,
      "delay": 3
    },
    {
      "x": 3,
      "y": 3,
      "delay": 3
    },
    {
      "x": 4,
      "y": 4,
      "delay": 3
    },
    {
      "x": 2,
      "y": 3,
      "delay": 3
    },
    {
      "x": 4,
      "y": 5,
      "delay": 3
    },
    {
      "x": 4,
      "y": 6,
      "delay": 3
    },
    {
      "x": 1,
      "y": 3,
      "delay": 3
    },
    {
      "x": 4,
      "y": 7,
      "delay": 3
    },
    {
      "x": 0,
      "y": 3,
      "delay": 3
    },
    {
      "x": 5,
      "y": 2,
      "delay": 2
    },
    {
      "x": 4,
      "y": 2,
      "delay": 2
    },
    {
      "x": 5,
      "y": 3,
      "delay": 2
    },
    {
      "x": 3,
      "y": 2,
      "delay": 2
    },
    {
      "x": 5,
      "y": 4,
      "delay": 2
    },
    {
      "x": 2,
      "y": 2,
      "delay": 2
    },
    {
      "x": 5,
      "y": 5,
      "delay": 2
    },
    {
      "x": 5,
      "y": 6,
      "delay": 2
    },
    {
      "x": 1,
      "y": 2,
      "delay": 2
    },
    {
      "x": 5,
      "y": 7,
      "delay": 2
    },
    {
      "x": 0,
      "y": 2,
      "delay": 2
    },
    {
      "x": 6,
      "y": 1,
      "delay": 1
    },
    {
      "x": 5,
      "y": 1,
      "delay": 1
    },
    {
      "x": 6,
      "y": 2,
      "delay": 1
    },
    {
      "x": 4,
      "y": 1,
      "delay": 1
    },
    {
      "x": 6,
      "y": 3,
      "delay": 1
    },
    {
      "x": 3,
      "y": 1,
      "delay": 1
    },
    {
      "x": 6,
      "y": 4,
      "delay": 1
    },
    {
      "x": 2,
      "y": 1,
      "delay": 1
    },
    {
      "x": 6,
      "y": 5,
      "delay": 1
    },
    {
      "x": 6,
      "y": 6,
      "delay": 1
    },
    {
      "x": 1,
      "y": 1,
      "delay": 1
    },
    {
      "x": 6,
      "y": 7,
      "delay": 1
    },
    {
      "x": 0,
      "y": 1,
      "delay": 1
    },
    {
      "x": 7,
      "y": 0,
      "delay": 0
    },
    {
      "x": 6,
      "y": 0,
      "delay": 0
    },
    {
      "x": 7,
      "y": 1,
      "delay": 0
    },
    {
      "x": 5,
      "y": 0,
      "delay": 0
    },
    {
      "x": 7,
      "y": 2,
      "delay": 0
    },
    {
      "x": 4,
      "y": 0,
      "delay": 0
    },
    {
      "x": 7,
      "y": 3,
      "delay": 0
    },
    {
      "x": 3,
      "y": 0,
      "delay": 0
    },
    {
      "x": 7,
      "y": 4,
      "delay": 0
    },
    {
      "x": 2,
      "y": 0,
      "delay": 0
    },
    {
      "x": 7,
      "y": 5,
      "delay": 0
    },
    {
      "x": 7,
      "y": 6,
      "delay": 0
    },
    {
      "x": 1,
      "y": 0,
      "delay": 0
    },
    {
      "x": 7,
      "y": 7,
      "delay": 0
    },
    {
      "x": 0,
      "y": 0,
      "delay": 0
    }
  ],
  //2,6
  [
    {
      x: 0,
      y: 4,
      delay: 0,
    },
    {
      x: 0,
      y: 5,
      delay: 0,
    },
    {
      x: 0,
      y: 6,
      delay: 0,
    },
    {
      x: 0,
      y: 7,
      delay: 0,
    },
    {
      x: 1,
      y: 4,
      delay: 1,
    },
    {
      x: 1,
      y: 5,
      delay: 1,
    },
    {
      x: 1,
      y: 6,
      delay: 1,
    },
    {
      x: 1,
      y: 7,
      delay: 1,
    },
    {
      x: 2,
      y: 4,
      delay: 2,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 6,
      delay: 2,
    },
    {
      x: 2,
      y: 7,
      delay: 2,
    },
    {
      x: 3,
      y: 4,
      delay: 3,
    },
    {
      x: 3,
      y: 5,
      delay: 3,
    },
    {
      x: 3,
      y: 6,
      delay: 3,
    },
    {
      x: 3,
      y: 7,
      delay: 3,
    },
    {
      x: 4,
      y: 4,
      delay: 4,
    },
    {
      x: 4,
      y: 5,
      delay: 4,
    },
    {
      x: 4,
      y: 6,
      delay: 4,
    },
    {
      x: 4,
      y: 7,
      delay: 4,
    },
    {
      x: 5,
      y: 4,
      delay: 5,
    },
    {
      x: 5,
      y: 5,
      delay: 5,
    },
    {
      x: 5,
      y: 6,
      delay: 5,
    },
    {
      x: 5,
      y: 7,
      delay: 5,
    },
    {
      x: 6,
      y: 4,
      delay: 6,
    },
    {
      x: 6,
      y: 5,
      delay: 6,
    },
    {
      x: 6,
      y: 6,
      delay: 6,
    },
    {
      x: 6,
      y: 7,
      delay: 6,
    },
    {
      x: 7,
      y: 4,
      delay: 7,
    },
    {
      x: 7,
      y: 5,
      delay: 7,
    },
    {
      x: 7,
      y: 6,
      delay: 7,
    },
    {
      x: 7,
      y: 7,
      delay: 7,
    },
  ],
  //3,6
  [
    {
      x: 3,
      y: 6,
      delay: 0,
    }
  ],
  //4,6
  [
    {
      x: 4,
      y: 6,
      delay: 0,
    }
  ],
  //5,6
  [
    {
      x: 0,
      y: 4,
      delay: 7,
    },
    {
      x: 0,
      y: 5,
      delay: 7,
    },
    {
      x: 0,
      y: 6,
      delay: 7,
    },
    {
      x: 0,
      y: 7,
      delay: 7,
    },
    {
      x: 1,
      y: 4,
      delay: 6,
    },
    {
      x: 1,
      y: 5,
      delay: 6,
    },
    {
      x: 1,
      y: 6,
      delay: 6,
    },
    {
      x: 1,
      y: 7,
      delay: 6,
    },
    {
      x: 2,
      y: 4,
      delay: 5,
    },
    {
      x: 2,
      y: 5,
      delay: 5,
    },
    {
      x: 2,
      y: 6,
      delay: 5,
    },
    {
      x: 2,
      y: 7,
      delay: 5,
    },
    {
      x: 3,
      y: 4,
      delay: 4,
    },
    {
      x: 3,
      y: 5,
      delay: 4,
    },
    {
      x: 3,
      y: 6,
      delay: 4,
    },
    {
      x: 3,
      y: 7,
      delay: 4,
    },
    {
      x: 4,
      y: 4,
      delay: 3,
    },
    {
      x: 4,
      y: 5,
      delay: 3,
    },
    {
      x: 4,
      y: 6,
      delay: 3,
    },
    {
      x: 4,
      y: 7,
      delay: 3,
    },
    {
      x: 5,
      y: 4,
      delay: 2,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 6,
      delay: 2,
    },
    {
      x: 5,
      y: 7,
      delay: 2,
    },
    {
      x: 6,
      y: 4,
      delay: 1,
    },
    {
      x: 6,
      y: 5,
      delay: 1,
    },
    {
      x: 6,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 7,
      delay: 1,
    },
    {
      x: 7,
      y: 4,
      delay: 0,
    },
    {
      x: 7,
      y: 5,
      delay: 0,
    },
    {
      x: 7,
      y: 6,
      delay: 0,
    },
    {
      x: 7,
      y: 7,
      delay: 0,
    },
  ],
  //6,6
  [
    {
      x: 6,
      y: 6,
      delay: 0,
    }
  ],
  //7,6
  [
    {
      x: 0,
      y: 6,
      delay: 7,
    },
    {
      x: 1,
      y: 6,
      delay: 6,
    },
    {
      x: 2,
      y: 6,
      delay: 5,
    },
    {
      x: 3,
      y: 6,
      delay: 4,
    },
    {
      x: 4,
      y: 6,
      delay: 3,
    },
    {
      x: 5,
      y: 6,
      delay: 2,
    },
    {
      x: 6,
      y: 6,
      delay: 1,
    },
    {
      x: 7,
      y: 6,
      delay: 0,
    }
  ],
  //0,7 **
  [
    {
      "x": "0",
      "y": "7",
      delay: 0,
    },
    {
      "x": "1",
      "y": "6",
      delay: 1,
    },
    {
      "x": "2",
      "y": "5",
      delay: 2,
    },
    {
      "x": "3",
      "y": "4",
      delay: 3,
    },
    {
      "x": "4",
      "y": "3",
      delay: 4,
    },
    {
      "x": "5",
      "y": "2",
      delay: 5,
    },
    {
      "x": "6",
      "y": "1",
      delay: 6,
    },
    {
      "x": "7",
      "y": "0",
      delay: 7,
    }
  ],
  //1,7
  [
    {
      x: 1,
      y: 0,
      delay: 7,
    },
    {
      x: 1,
      y: 1,
      delay: 6,
    },
    {
      x: 1,
      y: 2,
      delay: 5,
    },
    {
      x: 1,
      y: 3,
      delay: 4,
    },
    {
      x: 1,
      y: 4,
      delay: 3,
    },
    {
      x: 1,
      y: 5,
      delay: 2,
    },
    {
      x: 1,
      y: 6,
      delay: 1,
    },
    {
      x: 1,
      y: 7,
      delay: 0,
    }
  ],
  //2,7
  [
    {
      x: 2,
      y: 0,
      delay: 7,
    },
    {
      x: 2,
      y: 1,
      delay: 6,
    },
    {
      x: 2,
      y: 2,
      delay: 5,
    },
    {
      x: 2,
      y: 3,
      delay: 4,
    },
    {
      x: 2,
      y: 4,
      delay: 3,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 6,
      delay: 1,
    },
    {
      x: 2,
      y: 7,
      delay: 0,
    }
  ],
  //3,7
  [
    {
      x: 3,
      y: 7,
      delay: 0,
    },
    {
      x: 2,
      y: 6,
      delay: 1,
    },
    {
      x: 1,
      y: 5,
      delay: 2,
    },
    {
      x: 0,
      y: 4,
      delay: 3,
    },
    {
      x: 4,
      y: 7,
      delay: 0,
    },
    {
      x: 5,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 5,
      delay: 2,
    },
    {
      x: 7,
      y: 4,
      delay: 3,
    },
  ],
  //4,7 **
  [
    {
      x: 0,
      y: 0,
      delay: 7,
    },
    {
      x: 1,
      y: 0,
      delay: 7,
    },
    {
      x: 2,
      y: 0,
      delay: 7,
    },
    {
      x: 3,
      y: 0,
      delay: 7,
    },{
      x: 4,
      y: 0,
      delay: 7,
    },
    {
      x: 5,
      y: 0,
      delay: 7,
    },
    {
      x: 6,
      y: 0,
      delay: 7,
    },
    {
      x: 7,
      y: 0,
      delay: 7,
    },
    {
      x: 0,
      y: 1,
      delay: 6,
    },
    {
      x: 1,
      y: 1,
      delay: 6,
    },
    {
      x: 2,
      y: 1,
      delay: 6,
    },
    {
      x: 3,
      y: 1,
      delay: 6,
    },{
      x: 4,
      y: 1,
      delay: 6,
    },
    {
      x: 5,
      y: 1,
      delay: 6,
    },
    {
      x: 6,
      y: 1,
      delay: 6,
    },
    {
      x: 7,
      y: 1,
      delay: 6,
    },
    {
      x: 0,
      y: 2,
      delay: 5,
    },
    {
      x: 1,
      y: 2,
      delay: 5,
    },
    {
      x: 2,
      y: 2,
      delay: 5,
    },
    {
      x: 3,
      y: 2,
      delay: 5,
    },{
      x: 4,
      y: 2,
      delay: 5,
    },
    {
      x: 5,
      y: 2,
      delay: 5,
    },
    {
      x: 6,
      y: 2,
      delay: 5,
    },
    {
      x: 7,
      y: 2,
      delay: 5,
    },
    {
      x: 0,
      y: 3,
      delay: 4,
    },
    {
      x: 1,
      y: 3,
      delay: 4,
    },
    {
      x: 2,
      y: 3,
      delay: 4,
    },
    {
      x: 3,
      y: 3,
      delay: 4,
    },{
      x: 4,
      y: 3,
      delay: 4,
    },
    {
      x: 5,
      y: 3,
      delay: 4,
    },
    {
      x: 6,
      y: 3,
      delay: 4,
    },
    {
      x: 7,
      y: 3,
      delay: 4,
    },
    {
      x: 0,
      y: 4,
      delay: 3,
    },
    {
      x: 1,
      y: 4,
      delay: 3,
    },
    {
      x: 2,
      y: 4,
      delay: 3,
    },
    {
      x: 3,
      y: 4,
      delay: 3,
    },{
      x: 4,
      y: 4,
      delay: 3,
    },
    {
      x: 5,
      y: 4,
      delay: 3,
    },
    {
      x: 6,
      y: 4,
      delay: 3,
    },
    {
      x: 7,
      y: 4,
      delay: 3,
    },
    {
      x: 0,
      y: 5,
      delay: 2,
    },
    {
      x: 1,
      y: 5,
      delay: 2,
    },
    {
      x: 2,
      y: 5,
      delay: 2,
    },
    {
      x: 3,
      y: 5,
      delay: 2,
    },{
      x: 4,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 6,
      y: 5,
      delay: 2,
    },
    {
      x: 7,
      y: 5,
      delay: 2,
    },
    {
      x: 0,
      y: 6,
      delay: 1,
    },
    {
      x: 1,
      y: 6,
      delay: 1,
    },
    {
      x: 2,
      y: 6,
      delay: 1,
    },
    {
      x: 3,
      y: 6,
      delay: 1,
    },{
      x: 4,
      y: 6,
      delay: 1,
    },
    {
      x: 5,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 6,
      delay: 1,
    },
    {
      x: 7,
      y: 6,
      delay: 1,
    },
    {
      x: 0,
      y: 7,
      delay: 0,
    },
    {
      x: 1,
      y: 7,
      delay: 0,
    },
    {
      x: 2,
      y: 7,
      delay: 0,
    },
    {
      x: 3,
      y: 7,
      delay: 0,
    },{
      x: 4,
      y: 7,
      delay: 0,
    },
    {
      x: 5,
      y: 7,
      delay: 0,
    },
    {
      x: 6,
      y: 7,
      delay: 0,
    },
    {
      x: 7,
      y: 7,
      delay: 0,
    },
  ],
  //5,7
  [
    {
      x: 5,
      y: 0,
      delay: 7,
    },
    {
      x: 5,
      y: 1,
      delay: 6,
    },
    {
      x: 5,
      y: 2,
      delay: 5,
    },
    {
      x: 5,
      y: 3,
      delay: 4,
    },
    {
      x: 5,
      y: 4,
      delay: 3,
    },
    {
      x: 5,
      y: 5,
      delay: 2,
    },
    {
      x: 5,
      y: 6,
      delay: 1,
    },
    {
      x: 5,
      y: 7,
      delay: 0,
    }
  ],
  //6,7
  [
    {
      x: 6,
      y: 0,
      delay: 7,
    },
    {
      x: 6,
      y: 1,
      delay: 6,
    },
    {
      x: 6,
      y: 2,
      delay: 5,
    },
    {
      x: 6,
      y: 3,
      delay: 4,
    },
    {
      x: 6,
      y: 4,
      delay: 3,
    },
    {
      x: 6,
      y: 5,
      delay: 2,
    },
    {
      x: 6,
      y: 6,
      delay: 1,
    },
    {
      x: 6,
      y: 7,
      delay: 0,
    }
  ],
  //7,7 **
  [
    {
      "x": "7",
      "y": "7",
      delay: 0,
    },
    {
      "x": "6",
      "y": "6",
      delay: 1,
    },
    {
      "x": "5",
      "y": "5",
      delay: 2,
    },
    {
      "x": "4",
      "y": "4",
      delay: 3,
    },
    {
      "x": "3",
      "y": "3",
      delay: 4,
    },
    {
      "x": "2",
      "y": "2",
      delay: 5,
    },
    {
      "x": "1",
      "y": "1",
      delay: 6,
    },
    {
      "x": "0",
      "y": "0",
      delay: 7,
    }
  ],
  
];

module.exports = animationDictionary;