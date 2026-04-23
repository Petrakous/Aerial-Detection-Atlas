window.DETECTION_ATLAS_DATA = {
  "title": "Aerial Detection Atlas",
  "subtitle": "Benchmark evaluation viewer",
  "taskTypes": [
    {
      "id": "object-detection",
      "name": "Object Detection"
    }
  ],
  "classes": [
    {
      "id": "pedestrian",
      "name": "Pedestrian",
      "color": "#ffe66d"
    }
  ],
  "models": [
    {
      "id": "rtdetrv2_l",
      "name": "RT-DETRv2-L",
      "shortName": "RT-DETRv2-L",
      "color": "#36c3a0",
      "stats": {
        "scenes": 50,
        "avgDetections": 3.92,
        "avgConfidence": 0.728,
        "maxConfidence": 0.912
      }
    },
    {
      "id": "yolo11l",
      "name": "YOLO11L",
      "shortName": "YOLO11L",
      "color": "#4d8cff",
      "stats": {
        "scenes": 50,
        "avgDetections": 3.58,
        "avgConfidence": 0.705,
        "maxConfidence": 0.895
      }
    },
    {
      "id": "yolo26l",
      "name": "YOLO26L",
      "shortName": "YOLO26L",
      "color": "#f59e0b",
      "stats": {
        "scenes": 50,
        "avgDetections": 3.08,
        "avgConfidence": 0.764,
        "maxConfidence": 0.924
      }
    }
  ],
  "scenes": [
    {
      "id": "ladd-2",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "2",
      "title": "Image 2",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/2.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/2.jpg",
      "thumbnailImage": "thumbnails/LADD/2.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1909,
            1675,
            132,
            73
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9106,
            "bbox": [
              1907.68,
              1675.31,
              137.8,
              75.33
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8492,
            "bbox": [
              1905.7,
              1673.5,
              137.63,
              75.4
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.915,
            "bbox": [
              1903.31,
              1675.22,
              139.82,
              75.67
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.911,
          "avgConfidence": 0.911
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.849,
          "avgConfidence": 0.849
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.915,
          "avgConfidence": 0.915
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-8",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "8",
      "title": "Image 8",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/8.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/8.jpg",
      "thumbnailImage": "thumbnails/LADD/8.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 2250,
      "dimensions": "4000 x 2250",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2431,
            900,
            51,
            90
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8657,
            "bbox": [
              2427,
              899.5,
              54.05,
              90.38
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8193,
            "bbox": [
              1223.69,
              1121.36,
              72.73,
              46.96
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6771,
            "bbox": [
              1369.94,
              1102.71,
              50.62,
              50.9
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3204,
            "bbox": [
              1222.46,
              1118.88,
              59.82,
              39.33
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8114,
            "bbox": [
              2429.91,
              888.27,
              51.26,
              100.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5176,
            "bbox": [
              1223.23,
              1119.77,
              70.82,
              46.83
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8662,
            "bbox": [
              2429.88,
              893.27,
              48.58,
              93.49
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 4,
          "maxConfidence": 0.866,
          "avgConfidence": 0.671
        },
        "yolo11l": {
          "count": 2,
          "maxConfidence": 0.811,
          "avgConfidence": 0.665
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.866,
          "avgConfidence": 0.866
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-31",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "31",
      "title": "Image 31",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/31.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/31.jpg",
      "thumbnailImage": "thumbnails/LADD/31.jpg",
      "rawImageAvailable": true,
      "width": 4056,
      "height": 3040,
      "dimensions": "4056 x 3040",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1681,
            1341,
            64,
            61
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            3648,
            2636,
            97,
            98
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            3180,
            1821,
            93,
            67
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8453,
            "bbox": [
              3644.35,
              2639.29,
              100.59,
              97.27
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8437,
            "bbox": [
              1680.68,
              1330.76,
              60,
              75.75
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8196,
            "bbox": [
              3180.51,
              1817.24,
              88.2,
              77.2
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5074,
            "bbox": [
              3355.21,
              1798.31,
              80.73,
              83.69
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3407,
            "bbox": [
              1975.69,
              1472.5,
              59.99,
              62.09
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3166,
            "bbox": [
              2623.32,
              2975.32,
              84.9,
              61.24
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2915,
            "bbox": [
              3466.31,
              -3.18,
              59.92,
              40.77
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7906,
            "bbox": [
              1683.26,
              1334.63,
              62.44,
              71.5
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7101,
            "bbox": [
              3178.74,
              1823.13,
              88.4,
              66.59
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.687,
            "bbox": [
              1035.79,
              312.74,
              59.39,
              79.15
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.643,
            "bbox": [
              3650.1,
              2647.52,
              96.54,
              87.98
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8803,
            "bbox": [
              3652.87,
              2644.46,
              95.04,
              95.81
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7694,
            "bbox": [
              1681.14,
              1340.29,
              61.14,
              65.71
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5721,
            "bbox": [
              3188.42,
              1797.14,
              89.84,
              89.44
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 7,
          "maxConfidence": 0.845,
          "avgConfidence": 0.566
        },
        "yolo11l": {
          "count": 4,
          "maxConfidence": 0.791,
          "avgConfidence": 0.708
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.88,
          "avgConfidence": 0.741
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "3 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-78",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "78",
      "title": "Image 78",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/78.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/78.jpg",
      "thumbnailImage": "thumbnails/LADD/78.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1972,
            1926,
            108,
            72
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9031,
            "bbox": [
              1967.82,
              1921.45,
              115.47,
              77.83
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8371,
            "bbox": [
              1969.51,
              1923.55,
              110.4,
              74.59
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9015,
            "bbox": [
              1967.91,
              1923.14,
              113.96,
              75.23
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.903,
          "avgConfidence": 0.903
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.837,
          "avgConfidence": 0.837
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.902,
          "avgConfidence": 0.902
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-135",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "135",
      "title": "Image 135",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/135.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/135.jpg",
      "thumbnailImage": "thumbnails/LADD/135.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1724,
            2201,
            35,
            50
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1886,
            1071,
            49,
            51
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            271,
            711,
            89,
            78
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            11,
            289,
            92,
            92
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8982,
            "bbox": [
              268.04,
              711.64,
              90,
              80.31
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.868,
            "bbox": [
              7.93,
              289.81,
              95.63,
              92.12
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8557,
            "bbox": [
              1884.69,
              1074.02,
              50.69,
              47.97
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.84,
            "bbox": [
              1722.75,
              2198.92,
              41.81,
              55.09
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3799,
            "bbox": [
              422.62,
              791.59,
              44.87,
              37.68
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8647,
            "bbox": [
              269.21,
              710.28,
              88.6,
              79.7
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8192,
            "bbox": [
              12.07,
              290.29,
              91.54,
              89.95
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8149,
            "bbox": [
              1885.99,
              1075.25,
              49.4,
              46.04
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7183,
            "bbox": [
              1723.95,
              2200.17,
              39.33,
              52.79
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9059,
            "bbox": [
              8.84,
              287.7,
              94.43,
              93.24
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.898,
            "bbox": [
              267.55,
              711.63,
              90.43,
              81.63
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8314,
            "bbox": [
              1885.2,
              1075.57,
              49.74,
              47.16
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7759,
            "bbox": [
              1722.17,
              2201.46,
              42.8,
              53.72
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 5,
          "maxConfidence": 0.898,
          "avgConfidence": 0.768
        },
        "yolo11l": {
          "count": 4,
          "maxConfidence": 0.865,
          "avgConfidence": 0.804
        },
        "yolo26l": {
          "count": 4,
          "maxConfidence": 0.906,
          "avgConfidence": 0.853
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "4 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-167",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "167",
      "title": "Image 167",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/167.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/167.jpg",
      "thumbnailImage": "thumbnails/LADD/167.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1243,
            1738,
            84,
            95
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1398,
            1719,
            58,
            111
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1651,
            1743,
            44,
            85
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1805,
            1789,
            37,
            96
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1975,
            1795,
            53,
            128
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2181,
            1854,
            60,
            70
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2281,
            1856,
            64,
            115
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1652,
            2926,
            67,
            66
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9115,
            "bbox": [
              1969.69,
              1795.67,
              58.93,
              125.75
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9067,
            "bbox": [
              2283.67,
              1857.43,
              60.55,
              107.52
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9022,
            "bbox": [
              1395.73,
              1720.33,
              60.62,
              108.13
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8948,
            "bbox": [
              1239.78,
              1734.83,
              86.67,
              97.18
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8845,
            "bbox": [
              1651.19,
              2926.7,
              67.4,
              67.25
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8818,
            "bbox": [
              1802.04,
              1786.91,
              39.17,
              98.39
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8762,
            "bbox": [
              2178.95,
              1855.23,
              57.8,
              67.17
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8699,
            "bbox": [
              1650.56,
              1743.8,
              44.19,
              82.38
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8897,
            "bbox": [
              2286.34,
              1857.12,
              60.17,
              109.24
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8864,
            "bbox": [
              1651.09,
              1744.29,
              43.91,
              79.26
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8844,
            "bbox": [
              1397.8,
              1718.48,
              58.38,
              111.15
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8756,
            "bbox": [
              1240.75,
              1736.81,
              85.9,
              93.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8741,
            "bbox": [
              1802.43,
              1791.24,
              40.37,
              94.35
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8679,
            "bbox": [
              2182.53,
              1856.79,
              56.03,
              67.93
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8575,
            "bbox": [
              1652.53,
              2925.4,
              67.87,
              67.91
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8574,
            "bbox": [
              1972.01,
              1792.19,
              56.46,
              131.91
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9239,
            "bbox": [
              1241.59,
              1737.01,
              85.74,
              97.22
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9114,
            "bbox": [
              1397.2,
              1720.79,
              60.97,
              109.16
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9085,
            "bbox": [
              2282.79,
              1856.18,
              61.94,
              107.99
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9059,
            "bbox": [
              1969.1,
              1793.7,
              60.99,
              129.83
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9014,
            "bbox": [
              1803.51,
              1789.71,
              39.78,
              97.23
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8992,
            "bbox": [
              1649.75,
              2927.13,
              68.79,
              66.32
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8894,
            "bbox": [
              2179.52,
              1853.53,
              58.54,
              70.27
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8676,
            "bbox": [
              1652.08,
              1743.93,
              42.35,
              81.08
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 8,
          "maxConfidence": 0.912,
          "avgConfidence": 0.891
        },
        "yolo11l": {
          "count": 8,
          "maxConfidence": 0.89,
          "avgConfidence": 0.874
        },
        "yolo26l": {
          "count": 8,
          "maxConfidence": 0.924,
          "avgConfidence": 0.901
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "8 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-177",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "177",
      "title": "Image 177",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/177.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/177.jpg",
      "thumbnailImage": "thumbnails/LADD/177.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1486,
            2275,
            53,
            54
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1602,
            2251,
            52,
            59
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1776,
            2187,
            59,
            64
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1926,
            2236,
            44,
            58
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2080,
            2306,
            60,
            79
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2263,
            2219,
            47,
            35
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2371,
            2244,
            50,
            74
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1664,
            2871,
            53,
            70
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.884,
            "bbox": [
              1665.59,
              2878.06,
              52.86,
              63.58
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8801,
            "bbox": [
              1775.46,
              2188.54,
              59.7,
              65.49
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8728,
            "bbox": [
              1599.33,
              2251.88,
              53.66,
              59.6
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8716,
            "bbox": [
              1486.2,
              2275.29,
              51.62,
              55.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8709,
            "bbox": [
              2371.2,
              2246.43,
              52.14,
              69.78
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8502,
            "bbox": [
              1921.09,
              2238.41,
              48.78,
              57.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.847,
            "bbox": [
              2262.79,
              2217.89,
              47.62,
              37.27
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8401,
            "bbox": [
              2079.47,
              2311.16,
              60.85,
              74.37
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4712,
            "bbox": [
              2077.01,
              2308.53,
              31.48,
              54.77
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3991,
            "bbox": [
              2095.69,
              2318.57,
              45.96,
              64.71
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8829,
            "bbox": [
              1486.45,
              2275.3,
              53.97,
              54.35
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.88,
            "bbox": [
              1923.38,
              2237.14,
              46.32,
              57.47
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8755,
            "bbox": [
              1666.28,
              2874.75,
              50.82,
              66.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8708,
            "bbox": [
              2079.28,
              2309.5,
              59.66,
              76.81
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8661,
            "bbox": [
              1600.58,
              2249.77,
              54.57,
              60.69
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8608,
            "bbox": [
              2371.46,
              2247.64,
              51.81,
              67.54
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8369,
            "bbox": [
              1777.81,
              2183.92,
              56.62,
              67.34
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7978,
            "bbox": [
              2265.95,
              2216.42,
              44.54,
              39.96
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8877,
            "bbox": [
              2080.07,
              2310.33,
              58.7,
              77.09
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8806,
            "bbox": [
              1777.71,
              2187.11,
              57.5,
              64.65
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8776,
            "bbox": [
              1665.43,
              2881.55,
              52.75,
              61.91
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8748,
            "bbox": [
              2370.86,
              2247.72,
              52.32,
              69.62
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8739,
            "bbox": [
              1486.03,
              2276.04,
              54.56,
              55.91
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8706,
            "bbox": [
              1923.31,
              2236.83,
              47.02,
              60.99
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.824,
            "bbox": [
              1600.91,
              2250.66,
              56.37,
              59.96
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8085,
            "bbox": [
              2263.6,
              2218.65,
              46.72,
              37.75
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 10,
          "maxConfidence": 0.884,
          "avgConfidence": 0.779
        },
        "yolo11l": {
          "count": 8,
          "maxConfidence": 0.883,
          "avgConfidence": 0.859
        },
        "yolo26l": {
          "count": 8,
          "maxConfidence": 0.888,
          "avgConfidence": 0.862
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "8 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-233",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "233",
      "title": "Image 233",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/233.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/233.jpg",
      "thumbnailImage": "thumbnails/LADD/233.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1386,
            1290,
            49,
            53
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1591,
            1325,
            58,
            67
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1728,
            1308,
            49,
            57
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1957,
            1373,
            39,
            44
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2058,
            1382,
            55,
            60
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2237,
            1441,
            34,
            33
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2396,
            1485,
            53,
            52
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1655,
            2894,
            51,
            72
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8891,
            "bbox": [
              1730.22,
              1308.43,
              47.87,
              57.89
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8862,
            "bbox": [
              2055,
              1382.44,
              53.68,
              58.32
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8849,
            "bbox": [
              1654.32,
              2894.26,
              51.8,
              68.75
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8815,
            "bbox": [
              1593.11,
              1324.81,
              54.69,
              64.58
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8764,
            "bbox": [
              2397.67,
              1484.77,
              50.25,
              50.45
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8697,
            "bbox": [
              1386.57,
              1291.5,
              49.46,
              48.27
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8675,
            "bbox": [
              1959.42,
              1373.11,
              35.31,
              43.7
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8588,
            "bbox": [
              2235.87,
              1438.8,
              35.85,
              37.94
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2522,
            "bbox": [
              1990.97,
              2991.45,
              32.93,
              8.27
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8954,
            "bbox": [
              1595.4,
              1324.96,
              52.96,
              65.03
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8771,
            "bbox": [
              2059.29,
              1379.65,
              51.21,
              61.33
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.865,
            "bbox": [
              1958.95,
              1371.94,
              37.46,
              43.83
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8627,
            "bbox": [
              2398.35,
              1484.6,
              50.92,
              50.26
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8512,
            "bbox": [
              1731.1,
              1307.51,
              45.27,
              57.39
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8452,
            "bbox": [
              1654.63,
              2892.63,
              51.89,
              70.62
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8317,
            "bbox": [
              1387.64,
              1292.19,
              47.46,
              48.3
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7456,
            "bbox": [
              2237.55,
              1437.19,
              35.09,
              38.42
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8887,
            "bbox": [
              1732.11,
              1308.78,
              46.61,
              57.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8849,
            "bbox": [
              1653.77,
              2896.39,
              53.72,
              66.96
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8715,
            "bbox": [
              1593.9,
              1325.2,
              54.05,
              66.07
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8638,
            "bbox": [
              1959.63,
              1373.25,
              37.91,
              44.12
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8624,
            "bbox": [
              2397.64,
              1484.43,
              52.52,
              52.68
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8563,
            "bbox": [
              1385.75,
              1292.31,
              49.87,
              49.48
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7969,
            "bbox": [
              2056.73,
              1383.46,
              53.73,
              58.13
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6271,
            "bbox": [
              2235.73,
              1439.7,
              38.49,
              37.28
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2618,
            "bbox": [
              2235.82,
              1439.01,
              37.4,
              37.72
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 9,
          "maxConfidence": 0.889,
          "avgConfidence": 0.807
        },
        "yolo11l": {
          "count": 8,
          "maxConfidence": 0.895,
          "avgConfidence": 0.847
        },
        "yolo26l": {
          "count": 9,
          "maxConfidence": 0.889,
          "avgConfidence": 0.768
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "8 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-236",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "236",
      "title": "Image 236",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/236.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/236.jpg",
      "thumbnailImage": "thumbnails/LADD/236.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2129,
            2035,
            105,
            60
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2210,
            1165,
            119,
            62
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2363,
            51,
            81,
            65
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8941,
            "bbox": [
              2127.8,
              2031.8,
              103.78,
              60.87
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8919,
            "bbox": [
              2208.76,
              1166.67,
              117.34,
              63.08
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8595,
            "bbox": [
              2366.05,
              55.5,
              74.71,
              61.4
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.857,
            "bbox": [
              2207.82,
              1166.06,
              117.32,
              61.45
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8551,
            "bbox": [
              2126.12,
              2031.46,
              104.33,
              61.99
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8208,
            "bbox": [
              2365.7,
              57.1,
              76.17,
              59.68
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9057,
            "bbox": [
              2207.93,
              1166.38,
              117.54,
              62.65
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8969,
            "bbox": [
              2126.72,
              2031.57,
              104.1,
              63.47
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8822,
            "bbox": [
              2367.32,
              57.18,
              74.38,
              62.95
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 3,
          "maxConfidence": 0.894,
          "avgConfidence": 0.882
        },
        "yolo11l": {
          "count": 3,
          "maxConfidence": 0.857,
          "avgConfidence": 0.844
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.906,
          "avgConfidence": 0.895
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "3 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-288",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "288",
      "title": "Image 288",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/288.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/288.jpg",
      "thumbnailImage": "thumbnails/LADD/288.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            772,
            1126,
            141,
            76
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            759,
            2480,
            149,
            84
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9069,
            "bbox": [
              759.15,
              2479.71,
              149.16,
              81.75
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9038,
            "bbox": [
              763.85,
              1130.15,
              155.18,
              70.56
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8861,
            "bbox": [
              760.48,
              2483.37,
              147.69,
              79.51
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8377,
            "bbox": [
              766.14,
              1128.31,
              150.19,
              70.67
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9188,
            "bbox": [
              759.77,
              2479.89,
              147.88,
              80.56
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9146,
            "bbox": [
              765.73,
              1131.37,
              148.72,
              67.3
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 2,
          "maxConfidence": 0.907,
          "avgConfidence": 0.905
        },
        "yolo11l": {
          "count": 2,
          "maxConfidence": 0.886,
          "avgConfidence": 0.862
        },
        "yolo26l": {
          "count": 2,
          "maxConfidence": 0.919,
          "avgConfidence": 0.917
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "2 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-300",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "300",
      "title": "Image 300",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/300.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/300.jpg",
      "thumbnailImage": "thumbnails/LADD/300.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1177,
            1311,
            59,
            44
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8802,
            "bbox": [
              1174.97,
              1309.14,
              62.92,
              47.88
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7522,
            "bbox": [
              1177.5,
              1309.33,
              58.57,
              46
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.5275,
            "bbox": [
              1176.22,
              1309.39,
              60.19,
              46.94
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.88,
          "avgConfidence": 0.88
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.752,
          "avgConfidence": 0.752
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.528,
          "avgConfidence": 0.528
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-382",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "382",
      "title": "Image 382",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/382.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/382.jpg",
      "thumbnailImage": "thumbnails/LADD/382.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1967,
            1237,
            92,
            51
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2689,
            2128,
            95,
            97
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            3270,
            2855,
            96,
            83
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9062,
            "bbox": [
              3267.72,
              2855.16,
              96.96,
              85.63
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9004,
            "bbox": [
              2683.99,
              2129.74,
              100.29,
              95.19
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.878,
            "bbox": [
              1969.07,
              1235.85,
              87.31,
              55.53
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8807,
            "bbox": [
              3268.19,
              2855.69,
              94.24,
              83.93
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8584,
            "bbox": [
              1968.31,
              1235.01,
              89.5,
              52.6
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8584,
            "bbox": [
              2684.87,
              2131.4,
              100.89,
              92.36
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.9217,
            "bbox": [
              3265.29,
              2851.69,
              98.1,
              89.08
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.9201,
            "bbox": [
              2682.16,
              2132.37,
              101.85,
              94.18
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8901,
            "bbox": [
              1965.22,
              1235.13,
              92.14,
              55.03
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 3,
          "maxConfidence": 0.906,
          "avgConfidence": 0.895
        },
        "yolo11l": {
          "count": 3,
          "maxConfidence": 0.881,
          "avgConfidence": 0.866
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.922,
          "avgConfidence": 0.911
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "3 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-402",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "402",
      "title": "Image 402",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/402.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/402.jpg",
      "thumbnailImage": "thumbnails/LADD/402.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            77,
            57,
            113,
            54
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8693,
            "bbox": [
              77.88,
              54.41,
              114.05,
              58.05
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6088,
            "bbox": [
              72.1,
              54.63,
              120.65,
              58.99
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.742,
            "bbox": [
              70.18,
              50.66,
              123.91,
              59.52
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.869,
          "avgConfidence": 0.869
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.609,
          "avgConfidence": 0.609
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.742,
          "avgConfidence": 0.742
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-461",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "461",
      "title": "Image 461",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/461.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/461.jpg",
      "thumbnailImage": "thumbnails/LADD/461.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1064,
            2872,
            83,
            73
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            973,
            2388,
            65,
            62
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            995,
            2238,
            39,
            62
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1399,
            2283,
            60,
            70
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            985,
            1043,
            58,
            65
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2053,
            697,
            47,
            63
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8722,
            "bbox": [
              1062.16,
              2876.15,
              84.68,
              68.24
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8664,
            "bbox": [
              971.38,
              2387.31,
              73.93,
              62.04
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8564,
            "bbox": [
              1401.9,
              2291.44,
              49.72,
              61.43
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8269,
            "bbox": [
              995.36,
              2244.06,
              33.67,
              59.23
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8052,
            "bbox": [
              2984.41,
              287.88,
              44.31,
              40.11
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7583,
            "bbox": [
              2055.86,
              695.73,
              45.08,
              63.79
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4425,
            "bbox": [
              2531.86,
              291.45,
              41.82,
              46.92
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4057,
            "bbox": [
              2691.2,
              621.22,
              34.76,
              32.85
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3983,
            "bbox": [
              2901.2,
              -3.17,
              54.24,
              33.84
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3167,
            "bbox": [
              1257.43,
              2946.21,
              49.66,
              52.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2991,
            "bbox": [
              1260.69,
              2952.45,
              47.22,
              48.32
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2566,
            "bbox": [
              2534.04,
              89.25,
              29.85,
              51.87
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8349,
            "bbox": [
              1063.43,
              2878.43,
              84.48,
              68.14
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8345,
            "bbox": [
              971.31,
              2388.58,
              75.93,
              61.85
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8027,
            "bbox": [
              1397.56,
              2304.77,
              54.28,
              47.5
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7484,
            "bbox": [
              996.39,
              2249.8,
              38.24,
              49.92
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6491,
            "bbox": [
              2056.06,
              697.99,
              48.95,
              64.59
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6198,
            "bbox": [
              486.45,
              328.41,
              40.25,
              36.65
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4615,
            "bbox": [
              2982.34,
              291.46,
              45.33,
              36.59
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4,
            "bbox": [
              82.54,
              1100.35,
              123.32,
              82.35
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2891,
            "bbox": [
              2687.38,
              617.19,
              35.78,
              34.95
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2889,
            "bbox": [
              1252.7,
              2947.41,
              46.04,
              34.97
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8882,
            "bbox": [
              1064.3,
              2879.13,
              83.31,
              65.61
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8693,
            "bbox": [
              970.14,
              2388.4,
              75.64,
              61.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8228,
            "bbox": [
              1399.72,
              2302.93,
              54.45,
              48.69
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6081,
            "bbox": [
              490.12,
              330.1,
              39.74,
              36.3
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5968,
            "bbox": [
              996.64,
              2249.4,
              38.49,
              51.89
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 12,
          "maxConfidence": 0.872,
          "avgConfidence": 0.592
        },
        "yolo11l": {
          "count": 10,
          "maxConfidence": 0.835,
          "avgConfidence": 0.593
        },
        "yolo26l": {
          "count": 5,
          "maxConfidence": 0.888,
          "avgConfidence": 0.757
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "6 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-494",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "494",
      "title": "Image 494",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/494.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/494.jpg",
      "thumbnailImage": "thumbnails/LADD/494.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2583,
            247,
            68,
            66
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8361,
            "bbox": [
              2580.36,
              248.11,
              68.26,
              64.6
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8286,
            "bbox": [
              2582.94,
              249.37,
              67.91,
              61.39
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8422,
            "bbox": [
              2583.68,
              250.85,
              65.9,
              61.44
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.836,
          "avgConfidence": 0.836
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.829,
          "avgConfidence": 0.829
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.842,
          "avgConfidence": 0.842
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-553",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "553",
      "title": "Image 553",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/553.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/553.jpg",
      "thumbnailImage": "thumbnails/LADD/553.jpg",
      "rawImageAvailable": true,
      "width": 5472,
      "height": 3078,
      "dimensions": "5472 x 3078",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            993,
            1307,
            61,
            49
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            991,
            2844,
            76,
            57
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8656,
            "bbox": [
              989.4,
              2832.61,
              83.89,
              69.24
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8353,
            "bbox": [
              991.6,
              1310.32,
              73.59,
              46.42
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8107,
            "bbox": [
              991.52,
              2836.03,
              81.1,
              65.07
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7587,
            "bbox": [
              993.04,
              1308.91,
              66.01,
              46.58
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8149,
            "bbox": [
              992.7,
              1311.29,
              81.68,
              45.41
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3403,
            "bbox": [
              990.26,
              2836.77,
              82.45,
              65.92
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2967,
            "bbox": [
              989.57,
              2839.4,
              80.16,
              64.96
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 2,
          "maxConfidence": 0.866,
          "avgConfidence": 0.85
        },
        "yolo11l": {
          "count": 2,
          "maxConfidence": 0.811,
          "avgConfidence": 0.785
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.815,
          "avgConfidence": 0.484
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "2 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-558",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "558",
      "title": "Image 558",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/558.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/558.jpg",
      "thumbnailImage": "thumbnails/LADD/558.jpg",
      "rawImageAvailable": true,
      "width": 5472,
      "height": 3078,
      "dimensions": "5472 x 3078",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2466,
            1553,
            42,
            44
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6987,
            "bbox": [
              2466.25,
              1551.5,
              42.97,
              50.56
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.4708,
            "bbox": [
              2466,
              1554.19,
              39.78,
              45.86
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6189,
            "bbox": [
              2468.37,
              1554.06,
              38.13,
              47.33
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.699,
          "avgConfidence": 0.699
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.471,
          "avgConfidence": 0.471
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.619,
          "avgConfidence": 0.619
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-635",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "635",
      "title": "Image 635",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/635.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/635.jpg",
      "thumbnailImage": "thumbnails/LADD/635.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1779,
            681,
            154,
            78
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8754,
            "bbox": [
              1780.49,
              684.73,
              147.13,
              72.32
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8315,
            "bbox": [
              1780.39,
              686.85,
              146.33,
              71.71
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.885,
            "bbox": [
              1778.73,
              684.53,
              142.76,
              71.09
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.875,
          "avgConfidence": 0.875
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.832,
          "avgConfidence": 0.832
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.885,
          "avgConfidence": 0.885
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-661",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "661",
      "title": "Image 661",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/661.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/661.jpg",
      "thumbnailImage": "thumbnails/LADD/661.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2529,
            2105,
            69,
            53
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8456,
            "bbox": [
              2527.14,
              2106.6,
              72.16,
              51.48
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4346,
            "bbox": [
              3091.86,
              92.32,
              69.5,
              55.19
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8548,
            "bbox": [
              2527.01,
              2104.8,
              71.24,
              49.51
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8542,
            "bbox": [
              2525.46,
              2102.94,
              72.37,
              53.75
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 2,
          "maxConfidence": 0.846,
          "avgConfidence": 0.64
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.855,
          "avgConfidence": 0.855
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.854,
          "avgConfidence": 0.854
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-701",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "701",
      "title": "Image 701",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/701.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/701.jpg",
      "thumbnailImage": "thumbnails/LADD/701.jpg",
      "rawImageAvailable": true,
      "width": 5472,
      "height": 3078,
      "dimensions": "5472 x 3078",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1472,
            2174,
            51,
            100
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1418,
            378,
            86,
            37
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8263,
            "bbox": [
              1472.81,
              2172.96,
              49.48,
              99.35
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7668,
            "bbox": [
              1425.42,
              372.76,
              71.74,
              39.68
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7188,
            "bbox": [
              1424.2,
              370.48,
              77.94,
              45.57
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5841,
            "bbox": [
              1474.75,
              2193.73,
              51.05,
              77.84
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8319,
            "bbox": [
              1421.43,
              372.91,
              82.91,
              39.68
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7786,
            "bbox": [
              1472.06,
              2172.17,
              53,
              97.26
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 2,
          "maxConfidence": 0.826,
          "avgConfidence": 0.797
        },
        "yolo11l": {
          "count": 2,
          "maxConfidence": 0.719,
          "avgConfidence": 0.651
        },
        "yolo26l": {
          "count": 2,
          "maxConfidence": 0.832,
          "avgConfidence": 0.805
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "2 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-709",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "709",
      "title": "Image 709",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/709.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/709.jpg",
      "thumbnailImage": "thumbnails/LADD/709.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 2250,
      "dimensions": "4000 x 2250",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2009,
            1249,
            20,
            34
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1970,
            1165,
            17,
            28
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1998,
            1126,
            23,
            35
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.708,
            "bbox": [
              1999.67,
              1127.8,
              19.64,
              28.84
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6808,
            "bbox": [
              1965.95,
              1166.48,
              22.86,
              23.16
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5969,
            "bbox": [
              2002.86,
              1253.85,
              25.05,
              28.09
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4396,
            "bbox": [
              3124.62,
              955.85,
              28.19,
              32.55
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.4411,
            "bbox": [
              2007.51,
              1248.32,
              22.4,
              31.46
            ]
          }
        ],
        "yolo26l": []
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 4,
          "maxConfidence": 0.708,
          "avgConfidence": 0.606
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.441,
          "avgConfidence": 0.441
        },
        "yolo26l": {
          "count": 0,
          "maxConfidence": null,
          "avgConfidence": null
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "3 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-767",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "767",
      "title": "Image 767",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/767.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/767.jpg",
      "thumbnailImage": "thumbnails/LADD/767.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 2250,
      "dimensions": "4000 x 2250",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            484,
            858,
            67,
            44
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8108,
            "bbox": [
              485.56,
              859.15,
              66.56,
              32.9
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8224,
            "bbox": [
              484.67,
              858.89,
              71.33,
              38.63
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7794,
            "bbox": [
              484.57,
              857.36,
              70.51,
              38.07
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.811,
          "avgConfidence": 0.811
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.822,
          "avgConfidence": 0.822
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.779,
          "avgConfidence": 0.779
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-779",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "779",
      "title": "Image 779",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/779.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/779.jpg",
      "thumbnailImage": "thumbnails/LADD/779.jpg",
      "rawImageAvailable": true,
      "width": 4864,
      "height": 3648,
      "dimensions": "4864 x 3648",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2247,
            2286,
            36,
            60
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.837,
            "bbox": [
              2241.65,
              2286.62,
              40.8,
              58.38
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8234,
            "bbox": [
              2245.33,
              2283.25,
              36.6,
              63.51
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7771,
            "bbox": [
              2243.96,
              2284.64,
              39.32,
              60.44
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.837,
          "avgConfidence": 0.837
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.823,
          "avgConfidence": 0.823
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.777,
          "avgConfidence": 0.777
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-837",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "837",
      "title": "Image 837",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/837.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/837.jpg",
      "thumbnailImage": "thumbnails/LADD/837.jpg",
      "rawImageAvailable": true,
      "width": 4864,
      "height": 3648,
      "dimensions": "4864 x 3648",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            752,
            1350,
            74,
            71
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            792,
            1324,
            87,
            60
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8037,
            "bbox": [
              794.69,
              1322.47,
              94.23,
              59.84
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7631,
            "bbox": [
              750.26,
              1350.06,
              77.16,
              70.94
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6844,
            "bbox": [
              809.8,
              1326.97,
              81.53,
              55.38
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5533,
            "bbox": [
              753.78,
              1355.28,
              75.97,
              65.14
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.4776,
            "bbox": [
              842.92,
              1335.68,
              44.49,
              48.15
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4028,
            "bbox": [
              753.68,
              1344.24,
              76.14,
              72.09
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3534,
            "bbox": [
              760.15,
              1327.06,
              70.7,
              66.73
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.5175,
            "bbox": [
              751.42,
              1330.74,
              82.16,
              94.18
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4687,
            "bbox": [
              794.49,
              1323.81,
              94.77,
              64.45
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2584,
            "bbox": [
              755.66,
              1323.36,
              83.56,
              81.63
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 4,
          "maxConfidence": 0.804,
          "avgConfidence": 0.701
        },
        "yolo11l": {
          "count": 3,
          "maxConfidence": 0.478,
          "avgConfidence": 0.411
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.518,
          "avgConfidence": 0.415
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "2 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-843",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "843",
      "title": "Image 843",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/843.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/843.jpg",
      "thumbnailImage": "thumbnails/LADD/843.jpg",
      "rawImageAvailable": true,
      "width": 5472,
      "height": 3078,
      "dimensions": "5472 x 3078",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            3543,
            1413,
            83,
            66
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6898,
            "bbox": [
              3562.36,
              1414.37,
              69.75,
              58.67
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6244,
            "bbox": [
              3564.88,
              1412.59,
              62.61,
              57.91
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3369,
            "bbox": [
              3020.87,
              442.88,
              44.01,
              41.65
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2714,
            "bbox": [
              3023.32,
              427.46,
              45.86,
              50.65
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.4544,
            "bbox": [
              3544.29,
              1415.33,
              78.45,
              63.39
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.69,
          "avgConfidence": 0.69
        },
        "yolo11l": {
          "count": 3,
          "maxConfidence": 0.624,
          "avgConfidence": 0.411
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.454,
          "avgConfidence": 0.454
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-868",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "868",
      "title": "Image 868",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/868.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/868.jpg",
      "thumbnailImage": "thumbnails/LADD/868.jpg",
      "rawImageAvailable": true,
      "width": 4864,
      "height": 3648,
      "dimensions": "4864 x 3648",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1764,
            581,
            53,
            101
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8135,
            "bbox": [
              1761.61,
              604.07,
              52.51,
              76.82
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7375,
            "bbox": [
              1765.27,
              602.45,
              53.75,
              81.45
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.5634,
            "bbox": [
              1765.42,
              603.08,
              52.21,
              76.52
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.814,
          "avgConfidence": 0.814
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.738,
          "avgConfidence": 0.738
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.563,
          "avgConfidence": 0.563
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-874",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "874",
      "title": "Image 874",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/874.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/874.jpg",
      "thumbnailImage": "thumbnails/LADD/874.jpg",
      "rawImageAvailable": true,
      "width": 4864,
      "height": 3648,
      "dimensions": "4864 x 3648",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            933,
            1947,
            125,
            62
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8486,
            "bbox": [
              927.51,
              1945.77,
              128.83,
              63.49
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7121,
            "bbox": [
              928.43,
              1946.61,
              128.95,
              65.93
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3525,
            "bbox": [
              2336.32,
              2558.65,
              28.98,
              38.49
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7515,
            "bbox": [
              927.04,
              1944.51,
              131.57,
              65.45
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.849,
          "avgConfidence": 0.849
        },
        "yolo11l": {
          "count": 2,
          "maxConfidence": 0.712,
          "avgConfidence": 0.532
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.752,
          "avgConfidence": 0.752
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-875",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "875",
      "title": "Image 875",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/875.jpg",
      "sourceImage": "LADD/rtdetrv2_l/samples_gt_with_json/875.jpg",
      "thumbnailImage": "thumbnails/LADD/875.jpg",
      "rawImageAvailable": false,
      "width": 5472,
      "height": 3078,
      "dimensions": "5472 x 3078",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2522,
            1381,
            73,
            52
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.592,
            "bbox": [
              2518.8,
              1379.88,
              77.7,
              56.72
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2921,
            "bbox": [
              1645.39,
              2641.03,
              47.63,
              39.21
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.5602,
            "bbox": [
              2519.97,
              1382.51,
              64.72,
              46.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.522,
            "bbox": [
              1642.51,
              2617.72,
              66.42,
              71.18
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.3368,
            "bbox": [
              2520.42,
              1389.9,
              65.94,
              44.42
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 2,
          "maxConfidence": 0.592,
          "avgConfidence": 0.442
        },
        "yolo11l": {
          "count": 2,
          "maxConfidence": 0.56,
          "avgConfidence": 0.541
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.337,
          "avgConfidence": 0.337
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box loaded. Raw image was missing, so this scene uses the GT preview image as fallback."
    },
    {
      "id": "ladd-898",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "898",
      "title": "Image 898",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/898.jpg",
      "sourceImage": "LADD/rtdetrv2_l/samples_gt_with_json/898.jpg",
      "thumbnailImage": "thumbnails/LADD/898.jpg",
      "rawImageAvailable": false,
      "width": 5472,
      "height": 3078,
      "dimensions": "5472 x 3078",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2394,
            687,
            42,
            81
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6296,
            "bbox": [
              2391.96,
              687.34,
              45.1,
              44.31
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6423,
            "bbox": [
              2390.39,
              690.56,
              52.07,
              39.96
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6572,
            "bbox": [
              2391.69,
              691.06,
              57.93,
              55.02
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 1,
          "maxConfidence": 0.63,
          "avgConfidence": 0.63
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.642,
          "avgConfidence": 0.642
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.657,
          "avgConfidence": 0.657
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box loaded. Raw image was missing, so this scene uses the GT preview image as fallback."
    },
    {
      "id": "ladd-1012",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1012",
      "title": "Image 1012",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1012.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1012.jpg",
      "thumbnailImage": "thumbnails/LADD/1012.jpg",
      "rawImageAvailable": true,
      "width": 4864,
      "height": 3648,
      "dimensions": "4864 x 3648",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2533,
            1464,
            103,
            60
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8125,
            "bbox": [
              2544.83,
              1462.16,
              90.3,
              68.19
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5463,
            "bbox": [
              948.88,
              2806.35,
              43.74,
              42.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.283,
            "bbox": [
              2540.34,
              1456.4,
              75.45,
              60.99
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7968,
            "bbox": [
              2544.66,
              1459.55,
              89.18,
              70.77
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7515,
            "bbox": [
              2546.22,
              1459.85,
              90.24,
              67.89
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 3,
          "maxConfidence": 0.813,
          "avgConfidence": 0.547
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.797,
          "avgConfidence": 0.797
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.752,
          "avgConfidence": 0.752
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-1072",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1072",
      "title": "Image 1072",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1072.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1072.jpg",
      "thumbnailImage": "thumbnails/LADD/1072.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 2250,
      "dimensions": "4000 x 2250",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1943,
            1698,
            39,
            85
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.4968,
            "bbox": [
              1947,
              1688.36,
              34.33,
              93.79
            ]
          }
        ],
        "yolo26l": []
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 0,
          "maxConfidence": null,
          "avgConfidence": null
        },
        "yolo11l": {
          "count": 1,
          "maxConfidence": 0.497,
          "avgConfidence": 0.497
        },
        "yolo26l": {
          "count": 0,
          "maxConfidence": null,
          "avgConfidence": null
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-1107",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1107",
      "title": "Image 1107",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1107.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1107.jpg",
      "thumbnailImage": "thumbnails/LADD/1107.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 2250,
      "dimensions": "4000 x 2250",
      "groundTruth": [],
      "predictions": {
        "rtdetrv2_l": [],
        "yolo11l": [],
        "yolo26l": []
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 0,
          "maxConfidence": null,
          "avgConfidence": null
        },
        "yolo11l": {
          "count": 0,
          "maxConfidence": null,
          "avgConfidence": null
        },
        "yolo26l": {
          "count": 0,
          "maxConfidence": null,
          "avgConfidence": null
        }
      },
      "classNames": [],
      "summary": "0 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1137",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1137",
      "title": "Image 1137",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1137.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1137.jpg",
      "thumbnailImage": "thumbnails/LADD/1137.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            972,
            2097,
            106,
            47
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1592,
            2005,
            42,
            92
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2960,
            1611,
            95,
            42
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            3663,
            1359,
            62,
            112
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8153,
            "bbox": [
              998.97,
              2093.67,
              71.45,
              48.6
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7373,
            "bbox": [
              3658.21,
              1366.37,
              65.28,
              106.44
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7135,
            "bbox": [
              3009.23,
              1603.22,
              45.57,
              51.94
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6377,
            "bbox": [
              1590.9,
              2001.44,
              43.49,
              83.05
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3384,
            "bbox": [
              1861.43,
              2969.81,
              30.39,
              31.86
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8124,
            "bbox": [
              1595.04,
              2003.53,
              40.46,
              94.22
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7181,
            "bbox": [
              996.14,
              2092.88,
              72.33,
              49.45
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6791,
            "bbox": [
              3010.58,
              1610.28,
              41.03,
              43.09
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3753,
            "bbox": [
              3660.87,
              1372.58,
              76.58,
              102.02
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8181,
            "bbox": [
              1592.87,
              2008.32,
              42.15,
              84.12
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7663,
            "bbox": [
              998,
              2100.1,
              71.29,
              40.17
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7082,
            "bbox": [
              3006.34,
              1608.04,
              47.28,
              45.37
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 5,
          "maxConfidence": 0.815,
          "avgConfidence": 0.648
        },
        "yolo11l": {
          "count": 4,
          "maxConfidence": 0.812,
          "avgConfidence": 0.646
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.818,
          "avgConfidence": 0.764
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "4 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1144",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1144",
      "title": "Image 1144",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1144.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1144.jpg",
      "thumbnailImage": "thumbnails/LADD/1144.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2056,
            2478,
            89,
            59
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1871,
            1956,
            87,
            39
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1388,
            905,
            134,
            38
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1365,
            431,
            37,
            97
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8333,
            "bbox": [
              1392.79,
              902.69,
              124.13,
              43.86
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8134,
            "bbox": [
              1871.38,
              1954.34,
              80.68,
              39.7
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7932,
            "bbox": [
              1363.1,
              433.14,
              35.21,
              91.56
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7601,
            "bbox": [
              2049.81,
              2478.84,
              97.35,
              70.01
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7644,
            "bbox": [
              1392.88,
              904.17,
              126.03,
              37.28
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7243,
            "bbox": [
              2056.83,
              2468.49,
              82.41,
              65.39
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7114,
            "bbox": [
              1871.88,
              1958.87,
              70.42,
              36.04
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5924,
            "bbox": [
              1364.73,
              432.71,
              36,
              94.34
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.328,
            "bbox": [
              2990.6,
              2293.4,
              37.07,
              41.61
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8416,
            "bbox": [
              1395.18,
              903.1,
              127.05,
              42.74
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7823,
            "bbox": [
              2053.83,
              2471,
              90.04,
              76.73
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7501,
            "bbox": [
              1870.07,
              1955.05,
              73.79,
              42.4
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6937,
            "bbox": [
              1366.26,
              432.21,
              37.76,
              94.52
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 4,
          "maxConfidence": 0.833,
          "avgConfidence": 0.8
        },
        "yolo11l": {
          "count": 5,
          "maxConfidence": 0.764,
          "avgConfidence": 0.624
        },
        "yolo26l": {
          "count": 4,
          "maxConfidence": 0.842,
          "avgConfidence": 0.767
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "4 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1168",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1168",
      "title": "Image 1168",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1168.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1168.jpg",
      "thumbnailImage": "thumbnails/LADD/1168.jpg",
      "rawImageAvailable": true,
      "width": 4056,
      "height": 2280,
      "dimensions": "4056 x 2280",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2507,
            1410,
            46,
            50
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2587,
            1419,
            61,
            65
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.845,
            "bbox": [
              2506.18,
              1413.16,
              51.96,
              46.9
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8315,
            "bbox": [
              2586.22,
              1419.67,
              61.29,
              61.07
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2898,
            "bbox": [
              1125.34,
              2241.63,
              72.4,
              40.63
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7464,
            "bbox": [
              2506.86,
              1412.65,
              48.76,
              48.93
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4978,
            "bbox": [
              2590.22,
              1422.03,
              57,
              60.72
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4479,
            "bbox": [
              2598.56,
              1447.05,
              48.55,
              36.77
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2664,
            "bbox": [
              2584.47,
              1413.92,
              35.26,
              58.59
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7541,
            "bbox": [
              2508.05,
              1414.86,
              46.2,
              46.67
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6602,
            "bbox": [
              2587.31,
              1421.15,
              57.84,
              62.01
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 3,
          "maxConfidence": 0.845,
          "avgConfidence": 0.655
        },
        "yolo11l": {
          "count": 4,
          "maxConfidence": 0.746,
          "avgConfidence": 0.49
        },
        "yolo26l": {
          "count": 2,
          "maxConfidence": 0.754,
          "avgConfidence": 0.707
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "2 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1181",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1181",
      "title": "Image 1181",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1181.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1181.jpg",
      "thumbnailImage": "thumbnails/LADD/1181.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1508,
            33,
            81,
            33
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1549,
            382,
            104,
            52
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1523,
            805,
            99,
            48
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1590,
            1165,
            128,
            46
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1667,
            1473,
            33,
            64
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1551,
            2088,
            131,
            78
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1582,
            2511,
            143,
            57
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8829,
            "bbox": [
              1585.19,
              1164.7,
              135.31,
              46.01
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8714,
            "bbox": [
              1582.98,
              2514.1,
              140.76,
              52.96
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8601,
            "bbox": [
              1550.46,
              2086.34,
              136.14,
              77.14
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8585,
            "bbox": [
              1524.16,
              801.7,
              94.47,
              47.6
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8562,
            "bbox": [
              1551.8,
              378.48,
              101.51,
              48.31
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8493,
            "bbox": [
              1495.26,
              30.73,
              96.2,
              45.01
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.734,
            "bbox": [
              1666.6,
              1469.45,
              30.03,
              60.38
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8284,
            "bbox": [
              1584.39,
              2514,
              140.33,
              51.71
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8234,
            "bbox": [
              1590.74,
              1170.1,
              126.77,
              43.73
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8161,
            "bbox": [
              1495.66,
              31.05,
              93.13,
              42.06
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8023,
            "bbox": [
              1552.89,
              2088.11,
              133.16,
              73.89
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7863,
            "bbox": [
              1548.58,
              379.8,
              106.28,
              48.47
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7568,
            "bbox": [
              1517.3,
              802.89,
              103.63,
              47.56
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6768,
            "bbox": [
              1667.24,
              1476.21,
              35.11,
              58.57
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8883,
            "bbox": [
              1553.3,
              2088.95,
              132.36,
              71.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8623,
            "bbox": [
              1591.59,
              1166.5,
              125.76,
              47.72
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8428,
            "bbox": [
              1551.35,
              379.95,
              106.77,
              47.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8405,
            "bbox": [
              1584.25,
              2516.83,
              137.32,
              50.52
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8061,
            "bbox": [
              1518.47,
              806.51,
              98.36,
              41.88
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7777,
            "bbox": [
              1666.88,
              1474.68,
              36.76,
              61.21
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7739,
            "bbox": [
              1493.92,
              34.53,
              97.62,
              38.24
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 7,
          "maxConfidence": 0.883,
          "avgConfidence": 0.845
        },
        "yolo11l": {
          "count": 7,
          "maxConfidence": 0.828,
          "avgConfidence": 0.784
        },
        "yolo26l": {
          "count": 7,
          "maxConfidence": 0.888,
          "avgConfidence": 0.827
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "7 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1193",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1193",
      "title": "Image 1193",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1193.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1193.jpg",
      "thumbnailImage": "thumbnails/LADD/1193.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            3749,
            1701,
            44,
            73
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            3366,
            1694,
            45,
            91
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2967,
            1743,
            47,
            72
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2555,
            1681,
            48,
            120
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2282,
            1703,
            26,
            60
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1980,
            1630,
            49,
            100
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1781,
            1668,
            29,
            60
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1374,
            1643,
            46,
            98
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8582,
            "bbox": [
              2556.99,
              1681.72,
              48.32,
              119.32
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8542,
            "bbox": [
              2966.27,
              1744.41,
              50.61,
              73.25
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8275,
            "bbox": [
              3750.69,
              1697.56,
              44.66,
              74.17
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8251,
            "bbox": [
              1373.37,
              1637.54,
              50.1,
              99.04
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8101,
            "bbox": [
              3372.96,
              1693.78,
              36.97,
              91.4
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7968,
            "bbox": [
              1988.36,
              1639.26,
              37.74,
              88.25
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7849,
            "bbox": [
              1780.17,
              1657.79,
              32.23,
              67.79
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.77,
            "bbox": [
              2281.94,
              1704.29,
              31.06,
              59.35
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5664,
            "bbox": [
              2556.71,
              1682.04,
              48.49,
              118.97
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8367,
            "bbox": [
              1779.59,
              1653.73,
              32.98,
              71.37
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8241,
            "bbox": [
              1988.78,
              1627.34,
              44.65,
              98.34
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8239,
            "bbox": [
              3752.11,
              1695.47,
              49.14,
              76.57
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7889,
            "bbox": [
              2966.9,
              1746.88,
              49.84,
              69.21
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7818,
            "bbox": [
              3368.67,
              1694.4,
              45.4,
              94.62
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7796,
            "bbox": [
              1375.22,
              1636.01,
              46.07,
              100.01
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.772,
            "bbox": [
              2278.92,
              1706.07,
              33.9,
              56.73
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7717,
            "bbox": [
              2557.66,
              1681.07,
              48.7,
              121.1
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8389,
            "bbox": [
              2558.45,
              1683.15,
              43.56,
              116.29
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8298,
            "bbox": [
              3370.28,
              1694.16,
              47.09,
              93.99
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8155,
            "bbox": [
              1377.69,
              1638.95,
              42.46,
              96.63
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8112,
            "bbox": [
              1986.33,
              1637.7,
              43.02,
              87.65
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7959,
            "bbox": [
              3752.75,
              1697.48,
              44.57,
              74.22
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7805,
            "bbox": [
              2965.7,
              1747.18,
              49.41,
              69.24
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7654,
            "bbox": [
              1780.88,
              1652.34,
              32.17,
              75.64
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7086,
            "bbox": [
              2281.86,
              1708.86,
              31.47,
              52.39
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 9,
          "maxConfidence": 0.858,
          "avgConfidence": 0.788
        },
        "yolo11l": {
          "count": 8,
          "maxConfidence": 0.837,
          "avgConfidence": 0.797
        },
        "yolo26l": {
          "count": 8,
          "maxConfidence": 0.839,
          "avgConfidence": 0.793
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "8 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1200",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1200",
      "title": "Image 1200",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1200.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1200.jpg",
      "thumbnailImage": "thumbnails/LADD/1200.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1872,
            1419,
            102,
            45
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1883,
            1823,
            59,
            32
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1878,
            2025,
            101,
            50
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1847,
            2325,
            59,
            30
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1810,
            2600,
            118,
            51
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8621,
            "bbox": [
              1813.47,
              2597.43,
              115.86,
              54.75
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8472,
            "bbox": [
              1872.45,
              1416.61,
              102.2,
              47.86
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8384,
            "bbox": [
              1884.04,
              2027.75,
              88.2,
              45.73
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7817,
            "bbox": [
              1881.01,
              1824.09,
              77.04,
              33.37
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7743,
            "bbox": [
              1848.62,
              2324.07,
              54.75,
              30.14
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8017,
            "bbox": [
              1885.06,
              2028.98,
              86.76,
              43.94
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7849,
            "bbox": [
              1873.93,
              1417.34,
              98.98,
              44.7
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7456,
            "bbox": [
              1844.97,
              2329.23,
              58.56,
              27.92
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.742,
            "bbox": [
              1884.93,
              1827.39,
              78.6,
              31.57
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7333,
            "bbox": [
              1810.41,
              2600.76,
              116.59,
              51.72
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8539,
            "bbox": [
              1812.73,
              2600.16,
              114.93,
              53.94
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.81,
            "bbox": [
              1874.14,
              1415.97,
              98.33,
              47.32
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7853,
            "bbox": [
              1892.16,
              2024.83,
              81.13,
              48.79
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7631,
            "bbox": [
              1883.83,
              1827.27,
              80.21,
              29.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7467,
            "bbox": [
              1843.28,
              2329.11,
              59.81,
              27.8
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 5,
          "maxConfidence": 0.862,
          "avgConfidence": 0.821
        },
        "yolo11l": {
          "count": 5,
          "maxConfidence": 0.802,
          "avgConfidence": 0.762
        },
        "yolo26l": {
          "count": 5,
          "maxConfidence": 0.854,
          "avgConfidence": 0.792
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "5 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1202",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1202",
      "title": "Image 1202",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1202.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1202.jpg",
      "thumbnailImage": "thumbnails/LADD/1202.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            769,
            1555,
            50,
            59
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1193,
            1700,
            26,
            31
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1464,
            1621,
            36,
            66
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1821,
            1652,
            33,
            48
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2108,
            1559,
            32,
            76
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2341,
            1561,
            49,
            24
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2863,
            1534,
            57,
            83
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            3191,
            1471,
            54,
            86
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8492,
            "bbox": [
              2869.02,
              1536.77,
              47.15,
              79.75
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8234,
            "bbox": [
              3197.27,
              1464.68,
              45.12,
              87.14
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8089,
            "bbox": [
              776.8,
              1553.23,
              40.19,
              60.4
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8005,
            "bbox": [
              1466.32,
              1624.74,
              29.8,
              62.31
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7376,
            "bbox": [
              1822.62,
              1646.73,
              31.44,
              48.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7326,
            "bbox": [
              2634.9,
              1937.41,
              58.37,
              43.94
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.574,
            "bbox": [
              1195.08,
              1694.12,
              27.17,
              30.47
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5683,
            "bbox": [
              2351.53,
              1561.06,
              34.95,
              25.81
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5367,
            "bbox": [
              2113.52,
              1589.61,
              38.54,
              41.03
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4995,
            "bbox": [
              2368.96,
              1560.82,
              18.37,
              23.73
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.457,
            "bbox": [
              3688.26,
              1346.57,
              48.68,
              34.86
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4509,
            "bbox": [
              2109.23,
              1558.52,
              30.39,
              70.04
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3041,
            "bbox": [
              2125.15,
              1595.51,
              32.25,
              33.49
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3036,
            "bbox": [
              2359.82,
              931.58,
              65.22,
              49.1
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2629,
            "bbox": [
              2110.62,
              1555.62,
              24.24,
              34.15
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8253,
            "bbox": [
              3198.24,
              1465.2,
              49.51,
              83.42
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8131,
            "bbox": [
              1471.28,
              1625.05,
              30.1,
              63.61
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7909,
            "bbox": [
              774.28,
              1550.78,
              45.12,
              60.56
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7529,
            "bbox": [
              2867.96,
              1539.79,
              53.03,
              75.35
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7325,
            "bbox": [
              1822.56,
              1652.55,
              31.78,
              40.99
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7139,
            "bbox": [
              2342.2,
              1562.28,
              45.96,
              24.42
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4936,
            "bbox": [
              2103.96,
              1550.92,
              32.34,
              36.93
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.481,
            "bbox": [
              1187.49,
              1695.84,
              34.72,
              62.17
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4413,
            "bbox": [
              2114.73,
              1588.11,
              50.95,
              43.03
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3689,
            "bbox": [
              3697.46,
              1354.11,
              38.94,
              27.14
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3371,
            "bbox": [
              1191.97,
              1695.08,
              37.2,
              47.95
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2702,
            "bbox": [
              2104.01,
              1560.23,
              36.53,
              64.41
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8491,
            "bbox": [
              3194.51,
              1465,
              56.02,
              89.05
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8419,
            "bbox": [
              2869.64,
              1540.77,
              50.43,
              75.16
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7832,
            "bbox": [
              777.15,
              1554.68,
              44.04,
              57.17
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7567,
            "bbox": [
              1469.82,
              1623.9,
              31.37,
              64.85
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7439,
            "bbox": [
              1823.57,
              1651.34,
              29.68,
              38.83
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6611,
            "bbox": [
              2341.33,
              1563.4,
              49.73,
              23.1
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6091,
            "bbox": [
              2111.83,
              1560.13,
              39.42,
              69.44
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 15,
          "maxConfidence": 0.849,
          "avgConfidence": 0.581
        },
        "yolo11l": {
          "count": 12,
          "maxConfidence": 0.825,
          "avgConfidence": 0.585
        },
        "yolo26l": {
          "count": 7,
          "maxConfidence": 0.849,
          "avgConfidence": 0.749
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "8 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1231",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1231",
      "title": "Image 1231",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1231.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1231.jpg",
      "thumbnailImage": "thumbnails/LADD/1231.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            577,
            1292,
            44,
            65
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1274,
            1189,
            62,
            110
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2361,
            1188,
            58,
            113
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8653,
            "bbox": [
              2359.53,
              1184.66,
              63.8,
              110.61
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8481,
            "bbox": [
              1273.52,
              1188.46,
              56.63,
              107.83
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8254,
            "bbox": [
              578,
              1277.99,
              49.7,
              77.84
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8627,
            "bbox": [
              2362.81,
              1188.83,
              54.55,
              110.86
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8168,
            "bbox": [
              576.68,
              1280.65,
              52.86,
              75.1
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6385,
            "bbox": [
              1268.25,
              1196.92,
              61.22,
              99.55
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8881,
            "bbox": [
              2358.95,
              1188.54,
              58.24,
              111.98
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7905,
            "bbox": [
              580.72,
              1280.51,
              47.23,
              76.38
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7223,
            "bbox": [
              1272.8,
              1192.22,
              60.63,
              108.54
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 3,
          "maxConfidence": 0.865,
          "avgConfidence": 0.846
        },
        "yolo11l": {
          "count": 3,
          "maxConfidence": 0.863,
          "avgConfidence": 0.773
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.888,
          "avgConfidence": 0.8
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "3 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1232",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1232",
      "title": "Image 1232",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1232.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1232.jpg",
      "thumbnailImage": "thumbnails/LADD/1232.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1484,
            331,
            49,
            92
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1518,
            863,
            115,
            63
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2015,
            2215,
            108,
            45
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2203,
            2885,
            114,
            59
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8347,
            "bbox": [
              1524.73,
              861.69,
              102.71,
              61.75
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.795,
            "bbox": [
              2019.09,
              2217.91,
              93.24,
              38.54
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7773,
            "bbox": [
              2207.4,
              2886.08,
              82.93,
              56.33
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7315,
            "bbox": [
              1487.16,
              343.9,
              40.26,
              72.29
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7781,
            "bbox": [
              2020.84,
              2217.79,
              92.73,
              38.96
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.705,
            "bbox": [
              1529.72,
              863.32,
              100.73,
              56.21
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6486,
            "bbox": [
              2208.28,
              2885.88,
              98.31,
              63.22
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6394,
            "bbox": [
              1488.6,
              332.39,
              42.23,
              82.56
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8208,
            "bbox": [
              1523.47,
              862.85,
              109.85,
              55.29
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7864,
            "bbox": [
              2204.59,
              2881.04,
              110.96,
              62.86
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7323,
            "bbox": [
              2017.86,
              2224.93,
              88.98,
              32.28
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6911,
            "bbox": [
              1487.78,
              332.45,
              39.48,
              86.49
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 4,
          "maxConfidence": 0.835,
          "avgConfidence": 0.785
        },
        "yolo11l": {
          "count": 4,
          "maxConfidence": 0.778,
          "avgConfidence": 0.693
        },
        "yolo26l": {
          "count": 4,
          "maxConfidence": 0.821,
          "avgConfidence": 0.758
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "4 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1257",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1257",
      "title": "Image 1257",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1257.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1257.jpg",
      "thumbnailImage": "thumbnails/LADD/1257.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            636,
            1631,
            44,
            91
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1319,
            1475,
            47,
            114
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2367,
            1392,
            72,
            132
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8844,
            "bbox": [
              2368.52,
              1391.04,
              69.14,
              121.98
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8418,
            "bbox": [
              1324.05,
              1479.47,
              48.99,
              113.16
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8129,
            "bbox": [
              634.56,
              1633.23,
              43.19,
              87.66
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8554,
            "bbox": [
              2363.99,
              1390.04,
              74.64,
              136.1
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8161,
            "bbox": [
              1326.95,
              1476.67,
              47.88,
              114.38
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8063,
            "bbox": [
              634.51,
              1635.44,
              47.29,
              86.77
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3594,
            "bbox": [
              3967.82,
              709.03,
              32.18,
              118.85
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8917,
            "bbox": [
              2357.3,
              1389.94,
              84.37,
              136.54
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8122,
            "bbox": [
              1328.72,
              1481.13,
              41.34,
              111.52
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8024,
            "bbox": [
              635.01,
              1638.47,
              47.39,
              83.97
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3616,
            "bbox": [
              3929.99,
              1136.78,
              34.65,
              29.4
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 3,
          "maxConfidence": 0.884,
          "avgConfidence": 0.846
        },
        "yolo11l": {
          "count": 4,
          "maxConfidence": 0.855,
          "avgConfidence": 0.709
        },
        "yolo26l": {
          "count": 4,
          "maxConfidence": 0.892,
          "avgConfidence": 0.717
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "3 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1274",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1274",
      "title": "Image 1274",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1274.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1274.jpg",
      "thumbnailImage": "thumbnails/LADD/1274.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2022,
            800,
            89,
            38
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2096,
            1346,
            112,
            51
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2084,
            2176,
            105,
            54
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8813,
            "bbox": [
              2079.33,
              2176.98,
              109.63,
              51.58
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8453,
            "bbox": [
              2097.72,
              1343.27,
              108.62,
              49.78
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8409,
            "bbox": [
              2024.62,
              800.8,
              83.53,
              33.99
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8558,
            "bbox": [
              2082.78,
              2174,
              103.27,
              53.65
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8103,
            "bbox": [
              2095.85,
              1345.45,
              100.93,
              43.55
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7976,
            "bbox": [
              2018.04,
              799.18,
              90.72,
              33.32
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8862,
            "bbox": [
              2082.35,
              2176.63,
              106.01,
              50.6
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8613,
            "bbox": [
              2096.77,
              1349.37,
              109.11,
              37.81
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7948,
            "bbox": [
              2017.39,
              799.4,
              89.91,
              38.57
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 3,
          "maxConfidence": 0.881,
          "avgConfidence": 0.856
        },
        "yolo11l": {
          "count": 3,
          "maxConfidence": 0.856,
          "avgConfidence": 0.821
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.886,
          "avgConfidence": 0.847
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "3 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1277",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1277",
      "title": "Image 1277",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1277.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1277.jpg",
      "thumbnailImage": "thumbnails/LADD/1277.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            744,
            1596,
            40,
            117
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1366,
            1400,
            75,
            132
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2385,
            1298,
            74,
            128
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8747,
            "bbox": [
              2389.02,
              1300.16,
              69.03,
              118.55
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8495,
            "bbox": [
              1377,
              1405.63,
              58.58,
              127.5
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8425,
            "bbox": [
              743.06,
              1597.95,
              36.2,
              113.67
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8266,
            "bbox": [
              2383.83,
              1293.31,
              73.12,
              126.45
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7961,
            "bbox": [
              745.8,
              1603.64,
              35.81,
              105.15
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7929,
            "bbox": [
              1371.31,
              1401.18,
              67.37,
              130.58
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.908,
            "bbox": [
              2385.1,
              1300.54,
              73.97,
              118.64
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8308,
            "bbox": [
              746.16,
              1601.68,
              29.52,
              110.28
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8299,
            "bbox": [
              1373.38,
              1411.82,
              67.16,
              119.99
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 3,
          "maxConfidence": 0.875,
          "avgConfidence": 0.856
        },
        "yolo11l": {
          "count": 3,
          "maxConfidence": 0.827,
          "avgConfidence": 0.805
        },
        "yolo26l": {
          "count": 3,
          "maxConfidence": 0.908,
          "avgConfidence": 0.856
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "3 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1288",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1288",
      "title": "Image 1288",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1288.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1288.jpg",
      "thumbnailImage": "thumbnails/LADD/1288.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            1638,
            202,
            39,
            85
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1627,
            739,
            113,
            52
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2009,
            2177,
            98,
            45
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2125,
            2885,
            115,
            44
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8555,
            "bbox": [
              1624.31,
              740.66,
              107.44,
              51.24
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7986,
            "bbox": [
              2005.05,
              2178.65,
              92.62,
              48.76
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7712,
            "bbox": [
              2121.55,
              2878.56,
              82.77,
              52.91
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7687,
            "bbox": [
              1640.54,
              213.41,
              38.73,
              75.59
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8349,
            "bbox": [
              2009.72,
              2177.9,
              87.18,
              46.81
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.834,
            "bbox": [
              1629.78,
              739.79,
              106.33,
              48.97
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8013,
            "bbox": [
              2121.21,
              2883.35,
              115.67,
              45.89
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7866,
            "bbox": [
              1639.62,
              207.38,
              39.73,
              79.99
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8222,
            "bbox": [
              1626.13,
              739.41,
              116.58,
              50.78
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7827,
            "bbox": [
              2009.34,
              2181.8,
              85.96,
              40.79
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7753,
            "bbox": [
              2121.23,
              2881.45,
              115.49,
              45.81
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7327,
            "bbox": [
              1638.82,
              204.35,
              39.52,
              83.78
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 4,
          "maxConfidence": 0.856,
          "avgConfidence": 0.799
        },
        "yolo11l": {
          "count": 4,
          "maxConfidence": 0.835,
          "avgConfidence": 0.814
        },
        "yolo26l": {
          "count": 4,
          "maxConfidence": 0.822,
          "avgConfidence": 0.778
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "4 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1311",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1311",
      "title": "Image 1311",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1311.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1311.jpg",
      "thumbnailImage": "thumbnails/LADD/1311.jpg",
      "rawImageAvailable": true,
      "width": 5472,
      "height": 3078,
      "dimensions": "5472 x 3078",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2490,
            2289,
            82,
            104
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2634,
            2262,
            50,
            62
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7511,
            "bbox": [
              1423.52,
              2111.42,
              45.29,
              40.67
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5483,
            "bbox": [
              2500.37,
              2286.12,
              64.14,
              46.35
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.326,
            "bbox": [
              2317.91,
              2331.28,
              61.62,
              38.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.318,
            "bbox": [
              3656,
              0.53,
              40.16,
              36.16
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2905,
            "bbox": [
              3395,
              83.37,
              61.91,
              52.83
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.4841,
            "bbox": [
              2506.65,
              2286.44,
              67.11,
              62.02
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4125,
            "bbox": [
              983.95,
              1791.75,
              51.96,
              47.93
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4028,
            "bbox": [
              1421.08,
              2112.93,
              45.54,
              41.11
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3309,
            "bbox": [
              2635.54,
              2262.54,
              46.28,
              66.88
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3147,
            "bbox": [
              1061.05,
              1702.74,
              58.46,
              75.17
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3035,
            "bbox": [
              2544.09,
              2176.72,
              84.31,
              46.87
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.2877,
            "bbox": [
              2509.22,
              2292.14,
              56.16,
              59.71
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2655,
            "bbox": [
              1420.29,
              2114.28,
              49.39,
              37.21
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 5,
          "maxConfidence": 0.751,
          "avgConfidence": 0.447
        },
        "yolo11l": {
          "count": 6,
          "maxConfidence": 0.484,
          "avgConfidence": 0.375
        },
        "yolo26l": {
          "count": 2,
          "maxConfidence": 0.288,
          "avgConfidence": 0.277
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "2 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1324",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1324",
      "title": "Image 1324",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1324.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1324.jpg",
      "thumbnailImage": "thumbnails/LADD/1324.jpg",
      "rawImageAvailable": true,
      "width": 4864,
      "height": 3648,
      "dimensions": "4864 x 3648",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2321,
            1967,
            85,
            138
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.4959,
            "bbox": [
              4554.86,
              3453.89,
              30.5,
              32.08
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3907,
            "bbox": [
              1059.75,
              1714.87,
              33.56,
              34.88
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3284,
            "bbox": [
              1034.89,
              -3.39,
              47.19,
              36.25
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2925,
            "bbox": [
              4585.59,
              -3.61,
              61.81,
              27.09
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.4668,
            "bbox": [
              2333.03,
              1966.78,
              70.32,
              134.43
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3575,
            "bbox": [
              2343.35,
              2439.46,
              41.11,
              41.24
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.6667,
            "bbox": [
              2317.44,
              1968.4,
              82.82,
              139.81
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 4,
          "maxConfidence": 0.496,
          "avgConfidence": 0.377
        },
        "yolo11l": {
          "count": 2,
          "maxConfidence": 0.467,
          "avgConfidence": 0.412
        },
        "yolo26l": {
          "count": 1,
          "maxConfidence": 0.667,
          "avgConfidence": 0.667
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "1 ground-truth box with 3 model outputs loaded."
    },
    {
      "id": "ladd-1381",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1381",
      "title": "Image 1381",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1381.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1381.jpg",
      "thumbnailImage": "thumbnails/LADD/1381.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            3139,
            1522,
            32,
            62
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2683,
            1429,
            36,
            79
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2334,
            1509,
            34,
            76
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2005,
            1437,
            48,
            110
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1530,
            1639,
            56,
            73
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1183,
            1585,
            43,
            90
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1003,
            1579,
            31,
            61
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            484,
            1518,
            56,
            104
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8606,
            "bbox": [
              484.8,
              1517.34,
              57.81,
              101.21
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.843,
            "bbox": [
              1182.17,
              1587.22,
              44.24,
              88.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8224,
            "bbox": [
              2005.47,
              1436.24,
              46.03,
              104.89
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8113,
            "bbox": [
              3137.7,
              1518.99,
              33.61,
              62.76
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7897,
            "bbox": [
              2685.43,
              1427.47,
              36.16,
              76.8
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7891,
            "bbox": [
              3713.96,
              1465.23,
              40.19,
              74.82
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7846,
            "bbox": [
              2334.94,
              1511.12,
              36.54,
              63.49
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7568,
            "bbox": [
              1008.78,
              1582.5,
              26.77,
              52.43
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7537,
            "bbox": [
              1538.21,
              1640.42,
              49.48,
              68.28
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.2628,
            "bbox": [
              21.39,
              1465.74,
              25.57,
              36.09
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8153,
            "bbox": [
              2006.12,
              1439.44,
              47.55,
              106.4
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8042,
            "bbox": [
              3714.27,
              1458.53,
              37.75,
              79.3
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8007,
            "bbox": [
              1183.84,
              1589.04,
              43.96,
              85.86
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7845,
            "bbox": [
              3134.8,
              1521.99,
              42.22,
              59.58
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7824,
            "bbox": [
              486.22,
              1514.6,
              55.79,
              102.78
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7824,
            "bbox": [
              1009.52,
              1579.98,
              26.81,
              56.2
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7117,
            "bbox": [
              2685.14,
              1419.84,
              35.34,
              85.88
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6767,
            "bbox": [
              2335.5,
              1506.04,
              38.54,
              70
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5811,
            "bbox": [
              1532.34,
              1640.41,
              56.89,
              69.21
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8579,
            "bbox": [
              2002.9,
              1439.5,
              50.35,
              107.05
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8445,
            "bbox": [
              484.5,
              1515.65,
              60.24,
              104.11
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8398,
            "bbox": [
              1183.63,
              1585.01,
              41.78,
              88.29
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8063,
            "bbox": [
              1531.62,
              1641.43,
              57.77,
              70.15
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8059,
            "bbox": [
              2333.43,
              1512.67,
              40.13,
              62.85
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.799,
            "bbox": [
              3712.61,
              1457.99,
              42.14,
              81.13
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7869,
            "bbox": [
              3136.85,
              1521.76,
              37.11,
              59.86
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7312,
            "bbox": [
              2685.82,
              1425.6,
              34.93,
              80.76
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6419,
            "bbox": [
              1010.63,
              1578.84,
              24.63,
              57.01
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 10,
          "maxConfidence": 0.861,
          "avgConfidence": 0.747
        },
        "yolo11l": {
          "count": 9,
          "maxConfidence": 0.815,
          "avgConfidence": 0.749
        },
        "yolo26l": {
          "count": 9,
          "maxConfidence": 0.858,
          "avgConfidence": 0.79
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "8 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1388",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1388",
      "title": "Image 1388",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1388.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1388.jpg",
      "thumbnailImage": "thumbnails/LADD/1388.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            629,
            1336,
            64,
            62
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1295,
            1355,
            33,
            50
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1470,
            1329,
            53,
            60
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            1960,
            1531,
            34,
            35
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2538,
            1355,
            62,
            52
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2933,
            1405,
            60,
            47
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            3402,
            1360,
            64,
            62
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            3955,
            1480,
            45,
            36
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8384,
            "bbox": [
              2936.09,
              1408.17,
              56.07,
              43.38
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8286,
            "bbox": [
              3404.91,
              1360.83,
              57.09,
              60.04
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8275,
            "bbox": [
              629.14,
              1340.51,
              64.8,
              58.61
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8075,
            "bbox": [
              2538.42,
              1352.08,
              59.12,
              52.35
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7968,
            "bbox": [
              1468.48,
              1329.92,
              49.05,
              60.06
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7906,
            "bbox": [
              1294.72,
              1357.9,
              32.21,
              50.01
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.734,
            "bbox": [
              3959.93,
              1475.22,
              35.62,
              41.47
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7146,
            "bbox": [
              1962.54,
              1523.87,
              30.37,
              42.7
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7999,
            "bbox": [
              2935.77,
              1404.41,
              59.65,
              46.18
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7975,
            "bbox": [
              629.21,
              1337.7,
              64.52,
              59.53
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7956,
            "bbox": [
              2541.09,
              1356.78,
              57.5,
              54.27
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7855,
            "bbox": [
              1296.29,
              1362.67,
              29.88,
              45.47
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7849,
            "bbox": [
              1470.27,
              1330.79,
              43.25,
              61.23
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7304,
            "bbox": [
              3404.75,
              1364.64,
              60.68,
              57.03
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7187,
            "bbox": [
              3957.39,
              1476.61,
              42.51,
              41.65
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6909,
            "bbox": [
              1964.58,
              1525.66,
              28.74,
              40.5
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.3331,
            "bbox": [
              3040.48,
              1145.81,
              42.3,
              32.01
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8076,
            "bbox": [
              629.11,
              1340.27,
              64.58,
              57.86
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7871,
            "bbox": [
              2937.37,
              1405.64,
              57.29,
              47.23
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7652,
            "bbox": [
              3400.79,
              1363.66,
              67.78,
              60.98
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7361,
            "bbox": [
              1296.93,
              1360.36,
              30.01,
              45.84
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7014,
            "bbox": [
              1469.21,
              1329.34,
              46.11,
              60.39
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6953,
            "bbox": [
              3957.59,
              1476.1,
              41.79,
              42.17
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6947,
            "bbox": [
              2541.94,
              1355.33,
              57.85,
              58.54
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6062,
            "bbox": [
              1964.53,
              1530.3,
              27.5,
              33.76
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 8,
          "maxConfidence": 0.838,
          "avgConfidence": 0.792
        },
        "yolo11l": {
          "count": 9,
          "maxConfidence": 0.8,
          "avgConfidence": 0.715
        },
        "yolo26l": {
          "count": 8,
          "maxConfidence": 0.808,
          "avgConfidence": 0.724
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "8 ground-truth boxes with 3 model outputs loaded."
    },
    {
      "id": "ladd-1406",
      "dataset": "LADD",
      "taskType": "object-detection",
      "imageId": "1406",
      "title": "Image 1406",
      "location": "LADD benchmark sample",
      "baseImage": "viewer/LADD/1406.jpg",
      "sourceImage": "LADD/rtdetrv2_l/ground_truth_images/1406.jpg",
      "thumbnailImage": "thumbnails/LADD/1406.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "className": "Pedestrian",
          "bbox": [
            2278,
            811,
            61,
            47
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2372,
            1354,
            46,
            34
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2433,
            1507,
            38,
            40
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2428,
            1885,
            50,
            33
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2539,
            2319,
            64,
            61
          ]
        },
        {
          "className": "Pedestrian",
          "bbox": [
            2711,
            2715,
            39,
            53
          ]
        }
      ],
      "predictions": {
        "rtdetrv2_l": [
          {
            "className": "Pedestrian",
            "confidence": 0.8211,
            "bbox": [
              2549.76,
              2319.54,
              51.64,
              61.18
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.8069,
            "bbox": [
              2712.26,
              2713.62,
              35.27,
              53.81
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7876,
            "bbox": [
              2282.05,
              804.19,
              57.31,
              53.72
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7598,
            "bbox": [
              2438.38,
              1885.17,
              40.85,
              27.79
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7103,
            "bbox": [
              2434.09,
              1504.67,
              36.94,
              47.69
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6949,
            "bbox": [
              2386.48,
              1353.54,
              29.83,
              29.7
            ]
          }
        ],
        "yolo11l": [
          {
            "className": "Pedestrian",
            "confidence": 0.815,
            "bbox": [
              2429.77,
              1502.61,
              37.43,
              57.18
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7778,
            "bbox": [
              2709.67,
              2713.84,
              39.85,
              54.05
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7754,
            "bbox": [
              2547.99,
              2318.97,
              55.96,
              60.89
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7007,
            "bbox": [
              2278.62,
              807.03,
              60.99,
              48.94
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6692,
            "bbox": [
              2436.05,
              1885.79,
              47.67,
              25.95
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.6574,
            "bbox": [
              2388.12,
              1353.91,
              30.52,
              33.02
            ]
          }
        ],
        "yolo26l": [
          {
            "className": "Pedestrian",
            "confidence": 0.7995,
            "bbox": [
              2276.71,
              809.67,
              63.62,
              48.52
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7965,
            "bbox": [
              2430.59,
              1505.58,
              39.36,
              53.29
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7946,
            "bbox": [
              2550.37,
              2318.89,
              51.31,
              65.09
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.7727,
            "bbox": [
              2711.12,
              2714.74,
              39.14,
              52.58
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5538,
            "bbox": [
              2437.7,
              1885.56,
              45.62,
              28.53
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.5098,
            "bbox": [
              2387.95,
              1356.06,
              28.01,
              31.16
            ]
          },
          {
            "className": "Pedestrian",
            "confidence": 0.4525,
            "bbox": [
              2434.93,
              1885.47,
              44.92,
              29.6
            ]
          }
        ]
      },
      "sceneModelStats": {
        "rtdetrv2_l": {
          "count": 6,
          "maxConfidence": 0.821,
          "avgConfidence": 0.763
        },
        "yolo11l": {
          "count": 6,
          "maxConfidence": 0.815,
          "avgConfidence": 0.733
        },
        "yolo26l": {
          "count": 7,
          "maxConfidence": 0.8,
          "avgConfidence": 0.668
        }
      },
      "classNames": [
        "Pedestrian"
      ],
      "summary": "6 ground-truth boxes with 3 model outputs loaded."
    }
  ]
};
