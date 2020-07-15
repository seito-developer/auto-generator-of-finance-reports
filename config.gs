function config(range) {
  var data = {
    //1st / 2nd half year
    firstHalfYear: {
      fixed: [
          getVal(range, 4, 35), //目標
          getVal(range, 4, 36), //実績
          getVal(range, 4, 37, true), //達成率
          getVal(range, 4, 38) //残額
      ],
      prospect: [
          getVal(range, 18, 35), //目標
          getVal(range, 18, 36), //実績
          getVal(range, 18, 37, true), //達成率
          getVal(range, 18, 38) //残額
      ]
    },
    secondHalfYear: {
      fixed: [
          getVal(range, 4, 71), //目標
          getVal(range, 4, 72), //実績
          getVal(range, 4, 73, true), //達成率
          getVal(range, 4, 74) //残額
      ],
      prospect: [
          getVal(range, 18, 71), //目標
          getVal(range, 18, 72), //実績
          getVal(range, 18, 73, true), //達成率
          getVal(range, 18, 74) //残額
      ]
    },
    //Q1-Q4
    quarter1: {
      fixed: [
            getVal(range, 4, 15), //目標
            getVal(range, 4, 16), //実績
            getVal(range, 4, 17, true), //達成率
            getVal(range, 4, 18) //残額
        ],
        prospect: [
            getVal(range, 18, 15), //目標
            getVal(range, 18, 16), //実績
            getVal(range, 18, 17, true), //達成率
            getVal(range, 18, 18) //残額
        ]
    },
    quarter2: {
      fixed: [
          getVal(range, 4, 31), //目標
          getVal(range, 4, 32), //実績
          getVal(range, 4, 33, true), //達成率
          getVal(range, 4, 34) //残額
      ],
      prospect: [
          getVal(range, 18, 31), //目標
          getVal(range, 18, 32), //実績
          getVal(range, 18, 33, true), //達成率
          getVal(range, 18, 34) //残額
      ]
    },
    quarter3: {
      fixed: [
          getVal(range, 4, 51), //目標
          getVal(range, 4, 52), //実績
          getVal(range, 4, 53, true), //達成率
          getVal(range, 4, 54) //残額
      ],
      prospect: [
          getVal(range, 18, 51), //目標
          getVal(range, 18, 52), //実績
          getVal(range, 18, 53, true), //達成率
          getVal(range, 18, 54) //残額
      ]
    },
    quarter4: {
      fixed: [
          getVal(range, 4, 67), //目標
          getVal(range, 4, 68), //実績
          getVal(range, 4, 69, true), //達成率
          getVal(range, 4, 70) //残額
      ],
      prospect: [
          getVal(range, 18, 67), //目標
          getVal(range, 18, 68), //実績
          getVal(range, 18, 69, true), //達成率
          getVal(range, 18, 70) //残額
      ]
    },
    //2019/04-2020/03
    month: {
      apr: {
        fixed: [
          getVal(range, 4, 3), //目標
          getVal(range, 4, 4), //実績
          getVal(range, 4, 5, true), //達成率
          getVal(range, 4, 6) //残額
        ],
        prospect: [
          getVal(range, 18, 3), //目標
          getVal(range, 18, 4), //実績
          getVal(range, 18, 5, true), //達成率
          getVal(range, 18, 6) //残額
        ]
      },
      may: {
        fixed: [
          getVal(range, 4, 7), //目標
          getVal(range, 4, 8), //実績
          getVal(range, 4, 9, true), //達成率
          getVal(range, 4, 10) //残額
        ],
        prospect: [
          getVal(range, 18, 7), //目標
          getVal(range, 18, 8), //実績
          getVal(range, 18, 9, true), //達成率
          getVal(range, 18, 10) //残額
        ]
      }, 
      jun: {
        fixed: [
          getVal(range, 4, 11), //目標
          getVal(range, 4, 12), //実績
          getVal(range, 4, 13, true), //達成率
          getVal(range, 4, 14) //残額
        ],
        prospect: [
          getVal(range, 18, 11), //目標
          getVal(range, 18, 12), //実績
          getVal(range, 18, 13, true), //達成率
          getVal(range, 18, 14) //残額
        ]
      }, 
      jul: {
        fixed: [
          getVal(range, 4, 19), //目標
          getVal(range, 4, 20), //実績
          getVal(range, 4, 21, true), //達成率
          getVal(range, 4, 22) //残額
        ],
        prospect: [
          getVal(range, 18, 19), //目標
          getVal(range, 18, 20), //実績
          getVal(range, 18, 21, true), //達成率
          getVal(range, 18, 22) //残額
        ]
      }, 
      aug: {
        fixed: [
          getVal(range, 4, 23), //目標
          getVal(range, 4, 24), //実績
          getVal(range, 4, 25, true), //達成率
          getVal(range, 4, 26) //残額
        ],
        prospect: [
          getVal(range, 18, 23), //目標
          getVal(range, 18, 24), //実績
          getVal(range, 18, 25, true), //達成率
          getVal(range, 18, 26) //残額
        ]
      }, 
      sep: {
        fixed: [
          getVal(range, 4, 27), //目標
          getVal(range, 4, 28), //実績
          getVal(range, 4, 29, true), //達成率
          getVal(range, 4, 30) //残額
        ],
        prospect: [
          getVal(range, 18, 27), //目標
          getVal(range, 18, 28), //実績
          getVal(range, 18, 29, true), //達成率
          getVal(range, 18, 30) //残額
        ]
      }, 
      oct: {
        fixed: [
          getVal(range, 4, 39), //目標
          getVal(range, 4, 40), //実績
          getVal(range, 4, 41, true), //達成率
          getVal(range, 4, 42) //残額
        ],
        prospect: [
          getVal(range, 18, 39), //目標
          getVal(range, 18, 40), //実績
          getVal(range, 18, 41, true), //達成率
          getVal(range, 18, 42) //残額
        ]
      }, 
      nov: {
        fixed: [
          getVal(range, 4, 43), //目標
          getVal(range, 4, 44), //実績
          getVal(range, 4, 45, true), //達成率
          getVal(range, 4, 46) //残額
        ],
        prospect: [
          getVal(range, 18, 43), //目標
          getVal(range, 18, 44), //実績
          getVal(range, 18, 45, true), //達成率
          getVal(range, 18, 46) //残額
        ]
      }, 
      dec: {
        fixed: [
          getVal(range, 4, 47), //目標
          getVal(range, 4, 48), //実績
          getVal(range, 4, 49, true), //達成率
          getVal(range, 4, 50) //残額
        ],
        prospect: [
          getVal(range, 18, 47), //目標
          getVal(range, 18, 48), //実績
          getVal(range, 18, 49, true), //達成率
          getVal(range, 18, 50) //残額
        ]
      }, 
      jan: {
        fixed: [
          getVal(range, 4, 55), //目標
          getVal(range, 4, 56), //実績
          getVal(range, 4, 57, true), //達成率
          getVal(range, 4, 58) //残額
        ],
        prospect: [
          getVal(range, 18, 55), //目標
          getVal(range, 18, 56), //実績
          getVal(range, 18, 57, true), //達成率
          getVal(range, 18, 58) //残額
        ]
      }, 
      feb: {
        fixed: [
          getVal(range, 4, 59), //目標
          getVal(range, 4, 60), //実績
          getVal(range, 4, 61, true), //達成率
          getVal(range, 4, 62) //残額
        ],
        prospect: [
          getVal(range, 18, 59), //目標
          getVal(range, 18, 60), //実績
          getVal(range, 18, 61, true), //達成率
          getVal(range, 18, 62) //残額
        ]
      }, 
      mar: {
        fixed: [
          getVal(range, 4, 63), //目標
          getVal(range, 4, 64), //実績
          getVal(range, 4, 65, true), //達成率
          getVal(range, 4, 66) //残額
        ],
        prospect: [
          getVal(range, 18, 63), //目標
          getVal(range, 18, 64), //実績
          getVal(range, 18, 65, true), //達成率
          getVal(range, 18, 66) //残額
        ]
      }
    }
  };
  
  return data;
}