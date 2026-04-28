window.DETECTION_ATLAS_DATA = {
  "title": "Aerial Benchmark Atlas",
  "subtitle": "Segmentation and detection benchmark viewer",
  "taskTypes": [
    {
      "id": "semantic-segmentation",
      "name": "Semantic Segmentation"
    },
    {
      "id": "object-detection",
      "name": "Object Detection"
    }
  ],
  "datasets": [
    {
      "id": "FloodNetPlus",
      "name": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "sceneCount": 171,
      "modelIds": [
        "ccnet_floodnetplus",
        "deeplabv3plus_floodnet",
        "pspnet_floodnet",
        "segformer_floodnet"
      ]
    },
    {
      "id": "RescueNet",
      "name": "RescueNet",
      "taskType": "semantic-segmentation",
      "sceneCount": 50,
      "modelIds": [
        "segformer_rescuenet"
      ]
    },
    {
      "id": "LADD",
      "name": "LADD",
      "taskType": "object-detection",
      "sceneCount": 50,
      "modelIds": [
        "rtdetrv2_l",
        "yolo11l",
        "yolo26l"
      ]
    }
  ],
  "classes": {
    "object-detection": [
      {
        "id": "pedestrian",
        "name": "Pedestrian",
        "color": "#ffe66d"
      }
    ],
    "semantic-segmentation": [
      {
        "id": "background",
        "name": "Background",
        "labelIndex": 0,
        "color": "#505050"
      },
      {
        "id": "water",
        "name": "Water",
        "labelIndex": 1,
        "color": "#00b0f0"
      },
      {
        "id": "building-flooded",
        "name": "Building-flooded",
        "labelIndex": 1,
        "color": "#4682b4"
      },
      {
        "id": "building-non-flooded",
        "name": "Building-non-flooded",
        "labelIndex": 2,
        "color": "#dc143c"
      },
      {
        "id": "building-no-damage",
        "name": "Building_No_Damage",
        "labelIndex": 2,
        "color": "#73ffdf"
      },
      {
        "id": "road-flooded",
        "name": "Road-flooded",
        "labelIndex": 3,
        "color": "#00008e"
      },
      {
        "id": "building-minor-damage",
        "name": "Building_Minor_Damage",
        "labelIndex": 3,
        "color": "#ffff73"
      },
      {
        "id": "road-non-flooded",
        "name": "Road-non-flooded",
        "labelIndex": 4,
        "color": "#770b20"
      },
      {
        "id": "building-major-damage",
        "name": "Building_Major_Damage",
        "labelIndex": 4,
        "color": "#ff9966"
      },
      {
        "id": "building-total-destruction",
        "name": "Building_Total_Destruction",
        "labelIndex": 5,
        "color": "#e60000"
      },
      {
        "id": "vehicle",
        "name": "Vehicle",
        "labelIndex": 6,
        "color": "#ff00c5"
      },
      {
        "id": "road-clear",
        "name": "Road-Clear",
        "labelIndex": 7,
        "color": "#b077b0"
      },
      {
        "id": "road-blocked",
        "name": "Road-Blocked",
        "labelIndex": 8,
        "color": "#55ff00"
      },
      {
        "id": "grass",
        "name": "Grass",
        "labelIndex": 9,
        "color": "#00ff00"
      },
      {
        "id": "tree",
        "name": "Tree",
        "labelIndex": 9,
        "color": "#0000ff"
      },
      {
        "id": "pool",
        "name": "Pool",
        "labelIndex": 10,
        "color": "#cc9900"
      }
    ]
  },
  "models": [
    {
      "id": "ccnet_floodnetplus",
      "name": "CCNet",
      "shortName": "CCNet",
      "color": "#36c3a0",
      "datasets": [
        "FloodNetPlus"
      ],
      "taskTypes": [
        "semantic-segmentation"
      ],
      "stats": {
        "scenes": 50
      }
    },
    {
      "id": "deeplabv3plus_floodnet",
      "name": "DeepLabV3+",
      "shortName": "DeepLabV3+",
      "color": "#4d8cff",
      "datasets": [
        "FloodNetPlus"
      ],
      "taskTypes": [
        "semantic-segmentation"
      ],
      "stats": {
        "scenes": 50
      }
    },
    {
      "id": "pspnet_floodnet",
      "name": "PSPNet",
      "shortName": "PSPNet",
      "color": "#f59e0b",
      "datasets": [
        "FloodNetPlus"
      ],
      "taskTypes": [
        "semantic-segmentation"
      ],
      "stats": {
        "scenes": 50
      }
    },
    {
      "id": "rtdetrv2_l",
      "name": "RT-DETRv2-L",
      "shortName": "RT-DETRv2-L",
      "color": "#14b8a6",
      "datasets": [
        "LADD"
      ],
      "taskTypes": [
        "object-detection"
      ],
      "stats": {
        "scenes": 50
      }
    },
    {
      "id": "segformer_floodnet",
      "name": "SegFormer",
      "shortName": "SegFormer",
      "color": "#d946ef",
      "datasets": [
        "FloodNetPlus"
      ],
      "taskTypes": [
        "semantic-segmentation"
      ],
      "stats": {
        "scenes": 50
      }
    },
    {
      "id": "segformer_rescuenet",
      "name": "SegFormer",
      "shortName": "SegFormer",
      "color": "#ef4444",
      "datasets": [
        "RescueNet"
      ],
      "taskTypes": [
        "semantic-segmentation"
      ],
      "stats": {
        "scenes": 50
      }
    },
    {
      "id": "yolo11l",
      "name": "YOLO11L",
      "shortName": "YOLO11L",
      "color": "#a855f7",
      "datasets": [
        "LADD"
      ],
      "taskTypes": [
        "object-detection"
      ],
      "stats": {
        "scenes": 50
      }
    },
    {
      "id": "yolo26l",
      "name": "YOLO26L",
      "shortName": "YOLO26L",
      "color": "#f97316",
      "datasets": [
        "LADD"
      ],
      "taskTypes": [
        "object-detection"
      ],
      "stats": {
        "scenes": 50
      }
    }
  ],
  "scenes": [
    {
      "id": "floodnetplus-6336",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6336",
      "title": "Scene 6336",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6336.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6336.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6336.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 3001038
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 721702
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 24758
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8252502
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6336.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2953683
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 756318
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 26336
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8237796
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6336.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 4,
          "labeledPixels": 11974133,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6383",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6383",
      "title": "Scene 6383",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6383.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/6383.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6383.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1413512
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 980407
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 9204
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9596877
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/6383.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1443202
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 951538
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 8396
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9596022
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/6383.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 4,
          "labeledPixels": 11999158,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6394",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6394",
      "title": "Scene 6394",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6394.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6394.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6394.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2806615
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 433061
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8760324
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6394.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2350204
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 422385
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9221563
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6394.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11994152,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6417",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6417",
      "title": "Scene 6417",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6417.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6417.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6417.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 881043
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1170594
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 204212
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4289829
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 148998
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 16623
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5288701
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6417.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 919232
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1100056
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 206050
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4248590
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 178028
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 16350
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5236641
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6417.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 7,
          "labeledPixels": 11904947,
          "coverage": 0.992
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6420",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6420",
      "title": "Scene 6420",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6420.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/6420.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6420.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1109184
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1800674
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 96173
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3306064
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 46226
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5641679
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/6420.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1088657
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1750932
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 106216
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3299899
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 43146
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5623957
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/6420.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11912807,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6445",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6445",
      "title": "Scene 6445",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6445.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/6445.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6445.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1213110
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 158830
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 3621288
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 563444
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 86399
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 97210
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6259719
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/6445.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1179373
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 168
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3639446
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 494884
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 58017
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 108094
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6497927
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/6445.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 7,
          "labeledPixels": 11977909,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6517",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6517",
      "title": "Scene 6517",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6517.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/6517.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6517.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1096808
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 136933
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 7282903
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3483356
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/6517.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1038065
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 91120
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 7246816
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3539177
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/6517.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 4,
          "labeledPixels": 11915178,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6550",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6550",
      "title": "Scene 6550",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6550.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/6550.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6550.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 947831
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 1090279
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3777997
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6183893
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/6550.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 773677
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1066649
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4255619
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5832711
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 443529
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1058965
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3656487
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6687189
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/6550.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6550.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11928656,
          "coverage": 0.994
        },
        "segformer_floodnet": {
          "classCount": 4,
          "labeledPixels": 11846170,
          "coverage": 0.987
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6553",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6553",
      "title": "Scene 6553",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6553.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6553.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6553.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 170703
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 911927
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 6061703
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 68149
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4787518
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6553.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 131079
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 791877
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 6022883
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 95887
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4900306
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 148843
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 854093
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5923747
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 93676
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4891822
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6553.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6553.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 5,
          "labeledPixels": 11942032,
          "coverage": 0.995
        },
        "segformer_floodnet": {
          "classCount": 5,
          "labeledPixels": 11912181,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Water",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6557",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6557",
      "title": "Scene 6557",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6557.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6557.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6557.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 712814
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 448327
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 5570113
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 27144
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 82057
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5159545
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6557.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 701421
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 94498
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 430108
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5646919
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 7001
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 82459
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4943233
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6557.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 7,
          "labeledPixels": 11905639,
          "coverage": 0.992
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6561",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6561",
      "title": "Scene 6561",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6561.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/6561.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6561.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 401430
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1749608
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 270332
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 6225851
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 48514
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 42856
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3261409
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/6561.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 382869
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1770708
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 295286
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5884803
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 34399
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 24052
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3456647
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/6561.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 7,
          "labeledPixels": 11848764,
          "coverage": 0.987
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6567",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6567",
      "title": "Scene 6567",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6567.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6567.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6567.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 943979
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 157769
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 6761036
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4137216
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6567.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 969241
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 152321
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 6714805
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4142986
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6567.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 4,
          "labeledPixels": 11979353,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6593",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6593",
      "title": "Scene 6593",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6593.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6593.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6593.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 2950555
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 104184
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11051885
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6593.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3004057
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 86946
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11012488
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6593.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 14103491,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6602",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6602",
      "title": "Scene 6602",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6602.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6602.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6602.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 4807846
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 240690
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9058088
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6602.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 4983003
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 293693
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8827839
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6602.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 14104535,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6619",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6619",
      "title": "Scene 6619",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6619.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6619.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6619.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 684790
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 554368
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 840465
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 12027001
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6619.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 713143
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 740523
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 802486
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11786124
          }
        ],
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 19970
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 653961
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 534819
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 772633
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12024568
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6619.jpg",
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/6619.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 4,
          "labeledPixels": 14042276,
          "coverage": 0.995
        },
        "deeplabv3plus_floodnet": {
          "classCount": 5,
          "labeledPixels": 14005951,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Background",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6632",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6632",
      "title": "Scene 6632",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6632.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6632.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6632.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 841860
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1397469
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1588462
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10278833
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6632.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 770231
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1277535
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 26859
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1750042
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10128303
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6632.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 5,
          "labeledPixels": 13952970,
          "coverage": 0.989
        }
      },
      "classNames": [
        "Background",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6680",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6680",
      "title": "Scene 6680",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6680.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6680.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6680.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 9477037
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2522963
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6680.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 9206675
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2791312
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6680.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11997987,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6691",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6691",
      "title": "Scene 6691",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6691.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6691.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6691.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 931469
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 422247
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 771311
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 6154703
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1675778
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 70243
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 10847
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4070026
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6691.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 841002
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 12283
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 54225
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 6471803
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1208446
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 30503
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 15234
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5162652
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6691.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 8,
          "labeledPixels": 13796148,
          "coverage": 0.978
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "8 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 8,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6761",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6761",
      "title": "Scene 6761",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6761.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6761.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6761.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 179907
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 3804589
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3610692
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 10161
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4394651
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6761.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 172075
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 9432
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 4058062
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3227089
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4464013
          }
        ],
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 156342
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3821
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3948372
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3201467
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 5654
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4577596
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6761.jpg",
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/6761.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 5,
          "labeledPixels": 11930671,
          "coverage": 0.994
        },
        "deeplabv3plus_floodnet": {
          "classCount": 6,
          "labeledPixels": 11893252,
          "coverage": 0.991
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6765",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6765",
      "title": "Scene 6765",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6765.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/6765.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6765.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 230112
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 35688
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 3554883
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4329871
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 18297
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3831149
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/6765.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 168517
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 25565
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3573291
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4440983
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 15198
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3696455
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/6765.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 6,
          "labeledPixels": 11920009,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6775",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6775",
      "title": "Scene 6775",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6775.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/6775.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6775.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 311094
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 68682
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 3416047
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 5308711
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 10335
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2885131
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/6775.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 306606
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 48998
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3399748
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5334444
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 6501
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2855867
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/6775.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11952164,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6786",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6786",
      "title": "Scene 6786",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6786.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6786.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6786.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 354486
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 32285
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 3202786
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 5168429
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 2366
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3239648
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6786.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 295360
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 43023
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 914747
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5247091
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5459552
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6786.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 5,
          "labeledPixels": 11959773,
          "coverage": 0.997
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6795",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6795",
      "title": "Scene 6795",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6795.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6795.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6795.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 813453
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1265153
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3228434
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 20133
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 108876
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6563951
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6795.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 778330
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1315893
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3346181
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 22895
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 70923
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6429272
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6795.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 6,
          "labeledPixels": 11963494,
          "coverage": 0.997
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6796",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6796",
      "title": "Scene 6796",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6796.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6796.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6796.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 932629
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 61541
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4938094
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 13996
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 104822
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5948918
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6796.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 999706
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 281801
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5058472
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 13123
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 85023
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5512996
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6796.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 11951121,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6815",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6815",
      "title": "Scene 6815",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6815.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/6815.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6815.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 169694
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 8701223
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 48176
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3080907
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/6815.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 142754
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 8722595
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 43972
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3072964
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 17202
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 8648595
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 47162
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3260735
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/6815.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6815.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 4,
          "labeledPixels": 11982285,
          "coverage": 0.999
        },
        "segformer_floodnet": {
          "classCount": 4,
          "labeledPixels": 11973694,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6850",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6850",
      "title": "Scene 6850",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6850.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/6850.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6850.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 108595
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 6368759
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5522646
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/6850.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 89154
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 6095207
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5808510
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6850.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11992871,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6910",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6910",
      "title": "Scene 6910",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6910.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6910.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6910.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 888902
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 762642
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 589092
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4514065
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 44280
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5201019
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6910.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 813276
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 757204
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 456517
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4653079
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 33026
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5226368
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6910.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 11939470,
          "coverage": 0.995
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6915",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6915",
      "title": "Scene 6915",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6915.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/6915.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6915.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 522876
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 8016767
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3460357
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/6915.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 359086
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 65312
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1627
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 8207423
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3251907
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/6915.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 5,
          "labeledPixels": 11885355,
          "coverage": 0.99
        }
      },
      "classNames": [
        "Background",
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-6963",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "6963",
      "title": "Scene 6963",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/6963.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/6963.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/6963.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1808571
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 485327
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4799704
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 94577
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 410968
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4400853
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/6963.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1770016
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 554654
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 86526
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4753362
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 75611
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 232865
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4405496
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1941612
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 568956
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 107037
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4778889
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 93363
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 261361
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4045688
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/6963.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/6963.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 7,
          "labeledPixels": 11878530,
          "coverage": 0.99
        },
        "segformer_floodnet": {
          "classCount": 7,
          "labeledPixels": 11796906,
          "coverage": 0.983
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7023",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7023",
      "title": "Scene 7023",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7023.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7023.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7023.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 5308018
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6691982
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7023.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 6085102
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5912273
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7023.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11997375,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7031",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7031",
      "title": "Scene 7031",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7031.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7031.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7031.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3899080
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8100920
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7031.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3900133
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8089589
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7031.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11989722,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7042",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7042",
      "title": "Scene 7042",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7042.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7042.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7042.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 890146
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4328627
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 53816
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 233233
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6494178
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7042.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1116426
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 151143
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3818506
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 67950
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 219190
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6526883
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7042.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 6,
          "labeledPixels": 11900098,
          "coverage": 0.992
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7054",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7054",
      "title": "Scene 7054",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7054.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7054.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7054.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 987462
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11012538
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7054.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 15904
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 963430
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 553
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11016239
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7054.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 4,
          "labeledPixels": 11996126,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7063",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7063",
      "title": "Scene 7063",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7063.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7063.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7063.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 314092
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 830837
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10855071
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7063.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 270477
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 804006
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10924721
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7063.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11999204,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7085",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7085",
      "title": "Scene 7085",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7085.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7085.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7085.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 363498
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11636502
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7085.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 376385
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11622332
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7085.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11998717,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7092",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7092",
      "title": "Scene 7092",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7092.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7092.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7092.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 580318
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 13252
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11406430
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7092.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 584382
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11408834
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7092.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11993216,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7149",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7149",
      "title": "Scene 7149",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7149.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7149.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7149.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1267174
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2880225
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1453291
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 26046
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6373264
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7149.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1184428
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3096405
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1598534
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 22984
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5986761
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7149.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 5,
          "labeledPixels": 11889112,
          "coverage": 0.991
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7154",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7154",
      "title": "Scene 7154",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7154.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7154.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7154.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1536693
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2696188
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1739842
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 51242
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5976035
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7154.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1579841
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2767488
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1881443
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 26968
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5534392
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7154.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 5,
          "labeledPixels": 11790132,
          "coverage": 0.983
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7158",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7158",
      "title": "Scene 7158",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7158.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7158.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7158.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 126859
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2940793
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8932348
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7158.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 143691
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3159576
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8695606
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7158.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11998873,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7172",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7172",
      "title": "Scene 7172",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7172.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7172.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7172.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1052773
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10947227
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7172.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 902318
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11096883
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7172.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999201,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7191",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7191",
      "title": "Scene 7191",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7191.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7191.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7191.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2328026
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9671974
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7191.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2677504
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9318992
          }
        ],
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2735234
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9263937
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7191.jpg",
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7191.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11996496,
          "coverage": 1
        },
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999171,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7231",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7231",
      "title": "Scene 7231",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7231.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7231.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7231.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 690992
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 634143
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 6503299
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4171566
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7231.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 738640
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 730721
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 6458331
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3955281
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7231.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11882973,
          "coverage": 0.99
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7233",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7233",
      "title": "Scene 7233",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7233.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7233.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7233.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1558092
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 771133
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4028337
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5642438
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7233.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1616312
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 754120
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3755819
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5840372
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7233.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11966623,
          "coverage": 0.997
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7241",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7241",
      "title": "Scene 7241",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7241.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7241.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7241.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 2884807
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 2793650
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 4132624
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4108376
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 102223
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 84944
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7241.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 2669575
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 3176157
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3984594
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3786079
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 70140
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 62955
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7241.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 6,
          "labeledPixels": 13749500,
          "coverage": 0.975
        }
      },
      "classNames": [
        "Building-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7284",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7284",
      "title": "Scene 7284",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7284.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7284.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7284.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 159188
        },
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 341494
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 13421425
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 141383
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 43134
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7284.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 522708
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 23447
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 13140980
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 43259
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 9
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 38183
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 286725
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7284.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 7,
          "labeledPixels": 14055311,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7300",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7300",
      "title": "Scene 7300",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7300.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7300.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7300.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 3081455
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 3540094
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 139033
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3952438
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 49595
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 117453
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3226556
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7300.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 835006
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1951851
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 3605217
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3721942
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 36365
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 138520
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3191449
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7300.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 7,
          "labeledPixels": 13480350,
          "coverage": 0.956
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7315",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7315",
      "title": "Scene 7315",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7315.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7315.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7315.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 2870939
        },
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 3526449
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 3839516
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3645564
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 55855
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 168301
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7315.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 3332641
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 3560025
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3047712
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3596880
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 41607
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 197692
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 134
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 3459990
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 3549172
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 107269
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3768952
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 56131
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 232937
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1727853
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7315.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7315.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 7,
          "labeledPixels": 13776691,
          "coverage": 0.977
        },
        "segformer_floodnet": {
          "classCount": 7,
          "labeledPixels": 12902304,
          "coverage": 0.915
        }
      },
      "classNames": [
        "Background",
        "Building-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7339",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7339",
      "title": "Scene 7339",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7339.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7339.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7339.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 3332089
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 5560355
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2703189
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 68934
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2442057
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7339.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 3351371
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 3835158
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1461432
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2605352
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 81399
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2338874
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7339.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 13673586,
          "coverage": 0.969
        }
      },
      "classNames": [
        "Building-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7348",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7348",
      "title": "Scene 7348",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7348.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7348.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7348.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 12737413
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1369211
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7348.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 11187332
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 111441
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1388565
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1049810
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7348.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 13737148,
          "coverage": 0.974
        }
      },
      "classNames": [
        "Road-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7359",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7359",
      "title": "Scene 7359",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7359.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7359.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7359.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 467830
        },
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 155961
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 388482
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 12251002
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 797205
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 46144
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7359.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 631556
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 357126
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 10167620
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 852436
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 41470
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1840919
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7359.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 6,
          "labeledPixels": 13891127,
          "coverage": 0.985
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7370",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7370",
      "title": "Scene 7370",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7370.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7370.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7370.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 925070
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 83602
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 11424205
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1374469
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 22322
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 276956
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7370.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 581743
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 194901
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 573586
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 11065366
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1243039
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 14697
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 230924
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 7542
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7370.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 8,
          "labeledPixels": 13911798,
          "coverage": 0.986
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7413",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7413",
      "title": "Scene 7413",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7413.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7413.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7413.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 3204359
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 2744839
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4447779
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 66078
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3643569
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7413.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 3370722
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 2962105
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 2598101
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4678064
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 92664
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 13416
          }
        ],
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 3289186
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 3025068
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1370792
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4735440
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 81755
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 16608
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 233656
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7413.jpg",
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7413.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 13715072,
          "coverage": 0.972
        },
        "deeplabv3plus_floodnet": {
          "classCount": 7,
          "labeledPixels": 12752505,
          "coverage": 0.904
        }
      },
      "classNames": [
        "Building-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7450",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7450",
      "title": "Scene 7450",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7450.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7450.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7450.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 11440597
        },
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 1100773
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 1230512
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 334742
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7450.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 1060481
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1177
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 6781745
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 5425844
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 339129
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 463
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 1012244
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 11501806
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1147979
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 332935
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 515
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7450.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7450.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 13608839,
          "coverage": 0.965
        },
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 13995479,
          "coverage": 0.992
        }
      },
      "classNames": [
        "Background",
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        }
      ],
      "summary": "4 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7457",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7457",
      "title": "Scene 7457",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7457.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7457.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7457.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 1257254
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 10199623
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1277578
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 34814
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 1337355
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7457.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 1230002
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 10680086
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 393605
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1146160
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 14989
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 21322
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 34685
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 1123470
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 42586
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 10626445
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 60783
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1293431
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 16193
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 25029
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 184732
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7457.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7457.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 7,
          "labeledPixels": 13520849,
          "coverage": 0.958
        },
        "segformer_floodnet": {
          "classCount": 8,
          "labeledPixels": 13372669,
          "coverage": 0.948
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7461",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7461",
      "title": "Scene 7461",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7461.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7461.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7461.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 1364257
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 8624831
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1971796
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 52602
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2093138
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7461.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 1403351
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 8980814
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 54907
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1847920
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 38602
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1060365
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7461.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 13385959,
          "coverage": 0.949
        }
      },
      "classNames": [
        "Building-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7464",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7464",
      "title": "Scene 7464",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7464.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7464.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7464.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 1818051
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 7379667
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2075072
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 7233
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2826601
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7464.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 1620512
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 7619302
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1907904
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 14767
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 1437
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2776869
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7464.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 6,
          "labeledPixels": 13940791,
          "coverage": 0.988
        }
      },
      "classNames": [
        "Building-flooded",
        "Road-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7486",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7486",
      "title": "Scene 7486",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7486.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7486.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7486.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 2766800
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 1467749
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 7169024
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2564003
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 61299
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 77749
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7486.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 2722019
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 1352477
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 6938955
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2587678
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 33727
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 78591
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7486.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 6,
          "labeledPixels": 13713447,
          "coverage": 0.972
        }
      },
      "classNames": [
        "Building-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7581",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7581",
      "title": "Scene 7581",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7581.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7581.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7581.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 3193642
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 1899714
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2588377
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 81978
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 229318
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6113595
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7581.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 3250379
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 1676940
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2586897
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 19499
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 195410
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6115489
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7581.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 6,
          "labeledPixels": 13844614,
          "coverage": 0.981
        }
      },
      "classNames": [
        "Building-flooded",
        "Road-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7584",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7584",
      "title": "Scene 7584",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7584.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7584.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7584.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 3291477
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 2133501
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2803537
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 106014
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 170100
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5601995
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7584.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 3002969
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 312881
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 2227565
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2940979
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 50118
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 149491
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5025686
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7584.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 7,
          "labeledPixels": 13709689,
          "coverage": 0.972
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7590",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7590",
      "title": "Scene 7590",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7590.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7590.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7590.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 2775772
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 3270165
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3985345
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 87850
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 117709
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3869783
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7590.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 2720885
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 3156777
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3968758
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 57940
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 88650
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3742628
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7590.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 13735638,
          "coverage": 0.974
        }
      },
      "classNames": [
        "Building-flooded",
        "Road-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7593",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7593",
      "title": "Scene 7593",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7593.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7593.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7593.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 1714689
        },
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1335687
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 2688005
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3975414
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 98811
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 119375
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4174643
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7593.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 2682301
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 8239
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 2948764
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3374037
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 102260
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 84401
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4395576
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7593.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 7,
          "labeledPixels": 13595578,
          "coverage": 0.964
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7611",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7611",
      "title": "Scene 7611",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7611.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7611.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7611.jpg",
      "rawImageAvailable": true,
      "width": 4592,
      "height": 3072,
      "dimensions": "4592 x 3072",
      "groundTruth": [
        {
          "labelIndex": 1,
          "className": "Building-flooded",
          "pixelCount": 3661140
        },
        {
          "labelIndex": 3,
          "className": "Road-flooded",
          "pixelCount": 2415519
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4100278
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 133465
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 157570
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3638652
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7611.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 5690
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 3438097
          },
          {
            "labelIndex": 3,
            "className": "Road-flooded",
            "pixelCount": 2783842
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 274
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4114484
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 78624
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 138910
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1916768
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7611.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 8,
          "labeledPixels": 12476689,
          "coverage": 0.884
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-flooded",
          "name": "Road-flooded",
          "labelIndex": 3,
          "color": "#00008e"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 14106624,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7644",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7644",
      "title": "Scene 7644",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7644.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7644.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7644.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2786946
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 5074637
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1536967
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 64971
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2536479
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7644.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2830439
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 5304156
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1585778
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 88324
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1825132
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7644.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 5,
          "labeledPixels": 11633829,
          "coverage": 0.969
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7647",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7647",
      "title": "Scene 7647",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7647.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7647.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7647.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2931884
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 5670113
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1080896
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 94978
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2222129
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7647.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2904522
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 5626133
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 983740
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 85566
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2250379
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7647.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11850340,
          "coverage": 0.988
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7651",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7651",
      "title": "Scene 7651",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7651.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7651.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7651.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 3769378
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 3984895
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1086712
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3159015
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7651.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 3675128
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 4255952
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1051012
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 90066
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2780581
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7651.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11852739,
          "coverage": 0.988
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7666",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7666",
      "title": "Scene 7666",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7666.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7666.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7666.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 2688997
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 134469
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9176534
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7666.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 90977
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 2297079
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 125868
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9458168
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7666.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 4,
          "labeledPixels": 11972092,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7689",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7689",
      "title": "Scene 7689",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7689.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7689.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7689.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1633949
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 4365507
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1527877
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4472667
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7689.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1648041
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 4214287
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 602070
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1549850
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 18566
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3770233
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7689.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 11803047,
          "coverage": 0.984
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7708",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7708",
      "title": "Scene 7708",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7708.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7708.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7708.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 62378
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 6990574
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4947048
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7708.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 7000260
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4999631
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7708.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11999891,
          "coverage": 1
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7723",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7723",
      "title": "Scene 7723",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7723.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7723.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7723.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 187601
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 4145166
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 458623
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 5921
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7202689
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7723.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 195303
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 4207137
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 444820
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 45
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 7128071
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7723.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11975376,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Water",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7740",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7740",
      "title": "Scene 7740",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7740.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7740.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7740.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8317675
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3682325
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7740.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 8110709
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 22144
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 181236
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3628857
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7740.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 4,
          "labeledPixels": 11942946,
          "coverage": 0.995
        }
      },
      "classNames": [
        "Background",
        "Road-non-flooded",
        "Water",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7758",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7758",
      "title": "Scene 7758",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7758.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7758.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7758.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 11394430
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 605570
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7758.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 11486599
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 510041
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7758.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11996640,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7763",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7763",
      "title": "Scene 7763",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7763.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7763.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7763.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 10475718
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1524282
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7763.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 10658235
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1337619
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7763.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11995854,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7771",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7771",
      "title": "Scene 7771",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7771.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7771.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7771.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 11273727
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 726273
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7771.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 11549012
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 449508
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7771.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11998520,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7794",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7794",
      "title": "Scene 7794",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7794.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7794.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7794.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 2594655
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1467844
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7937501
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7794.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 2419032
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1451003
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8127369
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7794.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11997404,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7803",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7803",
      "title": "Scene 7803",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7803.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7803.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7803.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 4103003
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3087986
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4809011
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7803.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 4102214
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3394306
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4502629
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7803.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11999149,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7812",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7812",
      "title": "Scene 7812",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7812.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7812.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7812.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 5038820
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1597897
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5363283
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7812.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 5033580
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1466415
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5498180
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7812.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 3,
          "labeledPixels": 11998175,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7813",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7813",
      "title": "Scene 7813",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7813.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7813.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7813.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 5043007
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1900306
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5056687
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7813.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 5030432
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1802283
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5166429
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7813.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11999144,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7817",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7817",
      "title": "Scene 7817",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7817.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7817.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7817.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 6651334
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2453262
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2895404
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7817.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 6667885
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2503122
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2828348
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7817.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11999355,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7840",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7840",
      "title": "Scene 7840",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7840.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7840.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7840.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 552405
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 861782
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10585813
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7840.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 596432
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 952371
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10450014
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 582169
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 785130
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10632043
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7840.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7840.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11998817,
          "coverage": 1
        },
        "pspnet_floodnet": {
          "classCount": 3,
          "labeledPixels": 11999342,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7880",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7880",
      "title": "Scene 7880",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7880.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7880.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7880.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 10216679
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 1783321
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7880.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 140
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 10260001
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1726047
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7880.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11986188,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7881",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7881",
      "title": "Scene 7881",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7881.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7881.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7881.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 263089
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 9587611
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2149300
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7881.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 220343
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 10367183
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1400196
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 186444
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 10251964
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 1541333
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7881.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7881.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11987722,
          "coverage": 0.999
        },
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11979741,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7888",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7888",
      "title": "Scene 7888",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7888.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7888.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7888.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 510382
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1421141
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10068477
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7888.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 295476
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 761901
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10935378
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7888.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11992755,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7889",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7889",
      "title": "Scene 7889",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7889.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7889.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7889.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 559584
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1242891
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10197525
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7889.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 295610
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1212320
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10490770
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 268596
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1166889
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10564185
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7889.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7889.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11998700,
          "coverage": 1
        },
        "pspnet_floodnet": {
          "classCount": 3,
          "labeledPixels": 11999670,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7899",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7899",
      "title": "Scene 7899",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7899.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7899.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7899.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 4285594
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 298790
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1602194
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 31612
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5781810
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7899.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3997757
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 316719
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1478501
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 32053
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6150596
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7899.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11975626,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7904",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7904",
      "title": "Scene 7904",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7904.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7904.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7904.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 3352173
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3802345
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4845482
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7904.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3025688
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4726199
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4199157
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7904.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11951044,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7911",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7911",
      "title": "Scene 7911",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7911.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7911.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7911.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 331944
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11668056
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7911.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 26150
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 87
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11973126
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7911.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11999363,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7915",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7915",
      "title": "Scene 7915",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7915.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7915.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7915.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 603525
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11396475
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7915.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 467169
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 10097
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11513879
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7915.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 3,
          "labeledPixels": 11991145,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7921",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7921",
      "title": "Scene 7921",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7921.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7921.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7921.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7921.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7921.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Grass"
      ],
      "classLegend": [
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7926",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7926",
      "title": "Scene 7926",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7926.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/7926.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7926.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/7926.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 585654
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11402445
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/7926.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11988099,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7928",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7928",
      "title": "Scene 7928",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7928.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7928.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7928.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1091548
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10908452
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7928.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2606664
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9376407
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7928.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11983071,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7946",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7946",
      "title": "Scene 7946",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7946.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/7946.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7946.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 2371383
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 587525
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9041092
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/7946.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 2279804
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 343401
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9376464
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/7946.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11999669,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7969",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7969",
      "title": "Scene 7969",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7969.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7969.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7969.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 51904
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11948096
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7969.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 59553
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11940440
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7969.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999993,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7985",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7985",
      "title": "Scene 7985",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7985.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/7985.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7985.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 5187989
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1471922
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 28538
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5311551
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/7985.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 5265327
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1593117
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 30705
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5091810
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/7985.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11980959,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-7993",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "7993",
      "title": "Scene 7993",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/7993.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/7993.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/7993.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1101787
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 111993
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10786220
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/7993.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1256100
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 79540
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10658443
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/7993.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11994083,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8017",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8017",
      "title": "Scene 8017",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8017.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8017.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8017.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 282616
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11717384
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8017.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 304884
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11691094
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8017.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11995978,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8021",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8021",
      "title": "Scene 8021",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8021.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8021.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8021.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 941333
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11058667
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8021.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 930567
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11067203
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8021.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11997770,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8028",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8028",
      "title": "Scene 8028",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8028.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8028.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8028.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8028.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8028.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Grass"
      ],
      "classLegend": [
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8040",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8040",
      "title": "Scene 8040",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8040.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8040.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8040.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8040.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12000000
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8040.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8040.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        },
        "pspnet_floodnet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Grass"
      ],
      "classLegend": [
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "1 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8041",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8041",
      "title": "Scene 8041",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8041.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8041.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8041.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8041.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8041.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Grass"
      ],
      "classLegend": [
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8048",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8048",
      "title": "Scene 8048",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8048.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8048.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8048.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 21635
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11978365
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8048.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8048.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8064",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8064",
      "title": "Scene 8064",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8064.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8064.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8064.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 164735
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 33519
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11801746
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8064.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 154483
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 43845
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11801317
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8064.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11999645,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8066",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8066",
      "title": "Scene 8066",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8066.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8066.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8066.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 718056
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 68199
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11213745
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8066.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 739320
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 203802
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11050611
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 695438
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11302074
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8066.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8066.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11993733,
          "coverage": 0.999
        },
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11997512,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8069",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8069",
      "title": "Scene 8069",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8069.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8069.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8069.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1182118
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 696915
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10120967
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8069.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1249333
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1868317
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8876101
          }
        ],
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1240955
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1583148
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9160812
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1122100
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 315231
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10546277
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8069.jpg",
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8069.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8069.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11993751,
          "coverage": 0.999
        },
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11984915,
          "coverage": 0.999
        },
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11983608,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 3 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8073",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8073",
      "title": "Scene 8073",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8073.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8073.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8073.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1070705
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 927677
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10001618
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8073.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1026431
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1097789
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9855565
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8073.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11979785,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8076",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8076",
      "title": "Scene 8076",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8076.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8076.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8076.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2649322
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 47656
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9303022
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8076.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2834769
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 47047
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9116783
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8076.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11998599,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8104",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8104",
      "title": "Scene 8104",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8104.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8104.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8104.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 261443
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11738557
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8104.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 272491
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11726449
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8104.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 2,
          "labeledPixels": 11998940,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8111",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8111",
      "title": "Scene 8111",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8111.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8111.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8111.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 260466
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11739534
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8111.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 239899
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11758730
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8111.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11998629,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8154",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8154",
      "title": "Scene 8154",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8154.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8154.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8154.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1416816
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10583184
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8154.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1373547
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 16434
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10609891
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1548293
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2771
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10447850
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8154.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8154.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11999872,
          "coverage": 1
        },
        "pspnet_floodnet": {
          "classCount": 3,
          "labeledPixels": 11998914,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8160",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8160",
      "title": "Scene 8160",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8160.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8160.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8160.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 327586
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4710060
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6962354
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8160.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 422811
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3435957
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8131671
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8160.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11990439,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8170",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8170",
      "title": "Scene 8170",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8170.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8170.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8170.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1528390
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10471610
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8170.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1120119
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 73303
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10804568
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8170.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11997990,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8183",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8183",
      "title": "Scene 8183",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8183.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8183.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8183.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 3041467
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 285126
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8673407
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8183.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3250028
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 325579
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8423290
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8183.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 3,
          "labeledPixels": 11998897,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8194",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8194",
      "title": "Scene 8194",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8194.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8194.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8194.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8194.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8194.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Grass"
      ],
      "classLegend": [
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8219",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8219",
      "title": "Scene 8219",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8219.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8219.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8219.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4727014
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7272986
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8219.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4256161
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 7743449
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8219.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999610,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8250",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8250",
      "title": "Scene 8250",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8250.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8250.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8250.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2845901
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9154099
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8250.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3105801
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8893553
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8250.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999354,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8262",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8262",
      "title": "Scene 8262",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8262.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8262.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8262.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2461106
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9538894
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8262.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2738362
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9261250
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8262.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11999612,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8279",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8279",
      "title": "Scene 8279",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8279.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8279.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8279.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 3741457
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 980716
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 59934
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7217893
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8279.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3926987
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1121608
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 58987
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6889378
          }
        ],
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3952281
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1040766
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 63820
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6936141
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8279.jpg",
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8279.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 4,
          "labeledPixels": 11996960,
          "coverage": 1
        },
        "deeplabv3plus_floodnet": {
          "classCount": 4,
          "labeledPixels": 11993008,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8287",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8287",
      "title": "Scene 8287",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8287.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8287.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8287.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4618808
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7381192
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8287.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4751169
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 7248401
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8287.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999570,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8290",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8290",
      "title": "Scene 8290",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8290.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8290.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8290.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4079804
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7920196
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8290.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3827555
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8171953
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3739982
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8259470
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8290.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8290.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999508,
          "coverage": 1
        },
        "pspnet_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999452,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8292",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8292",
      "title": "Scene 8292",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8292.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8292.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8292.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2130768
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9869232
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8292.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1776461
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10223000
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8292.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999461,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8303",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8303",
      "title": "Scene 8303",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8303.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8303.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8303.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 70765
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 188662
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11740573
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8303.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 59385
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 189907
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11750355
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8303.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11999647,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8308",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8308",
      "title": "Scene 8308",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8308.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8308.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8308.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1048989
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10951011
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8308.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1060701
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10939128
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8308.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11999829,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8310",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8310",
      "title": "Scene 8310",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8310.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8310.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8310.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1441583
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10558417
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8310.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1446768
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10550371
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8310.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11997139,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8339",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8339",
      "title": "Scene 8339",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8339.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8339.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8339.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 188633
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2460584
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9350783
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8339.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 196222
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 104777
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2361083
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9325845
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8339.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11987927,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8340",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8340",
      "title": "Scene 8340",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8340.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8340.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8340.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 190125
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1489744
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10320131
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8340.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 190568
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 77717
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1561846
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10161552
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8340.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 4,
          "labeledPixels": 11991683,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8341",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8341",
      "title": "Scene 8341",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8341.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8341.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8341.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 136541
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 901097
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10962362
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8341.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 139358
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 717323
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11140615
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 139112
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 664999
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11190788
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8341.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8341.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11997296,
          "coverage": 1
        },
        "pspnet_floodnet": {
          "classCount": 3,
          "labeledPixels": 11994899,
          "coverage": 1
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8356",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8356",
      "title": "Scene 8356",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8356.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8356.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8356.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 580665
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4790435
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 51675
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6577225
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8356.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 580810
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4820509
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 51172
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6533869
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8356.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 4,
          "labeledPixels": 11986360,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8367",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8367",
      "title": "Scene 8367",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8367.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8367.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8367.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 3720833
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 594563
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 24959
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7659645
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8367.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3925957
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 660126
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 27439
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 7383355
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8367.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11996877,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8372",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8372",
      "title": "Scene 8372",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8372.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8372.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8372.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2042697
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1781839
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4893595
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 33538
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3248331
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8372.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2066518
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1760432
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5127568
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 33889
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2988519
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8372.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11976926,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8376",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8376",
      "title": "Scene 8376",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8376.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8376.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8376.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 962498
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1365251
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 5434026
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 110950
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4127275
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8376.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 968608
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1354550
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4206768
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 79636
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5348591
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8376.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 5,
          "labeledPixels": 11958153,
          "coverage": 0.997
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8494",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8494",
      "title": "Scene 8494",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8494.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8494.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8494.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 181986
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1071158
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 1961761
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1709024
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7076071
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8494.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 139363
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1009737
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 2128544
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1528396
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 7080472
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8494.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 5,
          "labeledPixels": 11886512,
          "coverage": 0.991
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8511",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8511",
      "title": "Scene 8511",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8511.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8511.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8511.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 11137
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 8695
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1324371
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10655797
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8511.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 6848
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 8246607
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1069537
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2546974
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8511.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 4,
          "labeledPixels": 11869966,
          "coverage": 0.989
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8514",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8514",
      "title": "Scene 8514",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8514.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8514.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8514.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1219974
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2894599
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1930015
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 51982
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5903430
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8514.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1229278
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2689794
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2004149
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 41555
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5864555
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8514.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 5,
          "labeledPixels": 11829331,
          "coverage": 0.986
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8525",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8525",
      "title": "Scene 8525",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8525.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8525.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8525.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 38089
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1124733
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10837178
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8525.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 49190
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1236071
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10711461
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 38455
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1190492
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10768260
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8525.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8525.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11996722,
          "coverage": 1
        },
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11997207,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8533",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8533",
      "title": "Scene 8533",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8533.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8533.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8533.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 816171
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11183829
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8533.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 759264
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11235334
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8533.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 2,
          "labeledPixels": 11994598,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8543",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8543",
      "title": "Scene 8543",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8543.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8543.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8543.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 53486
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11946514
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8543.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 123058
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11876454
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8543.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11999512,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8544",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8544",
      "title": "Scene 8544",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8544.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8544.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8544.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 130352
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11869648
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8544.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 170062
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11828943
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8544.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 2,
          "labeledPixels": 11999005,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8558",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8558",
      "title": "Scene 8558",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8558.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/8558.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8558.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 194062
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 713739
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11092199
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/8558.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 89392
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 930727
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 10927309
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8558.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 3,
          "labeledPixels": 11947428,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8592",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8592",
      "title": "Scene 8592",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8592.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8592.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8592.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 879907
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11120093
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8592.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 965759
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11033199
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8592.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11998958,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8767",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8767",
      "title": "Scene 8767",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8767.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8767.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8767.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1667057
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 800885
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 10115
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9521943
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8767.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1402652
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 727879
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 3889
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9864690
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8767.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11999110,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8776",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8776",
      "title": "Scene 8776",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8776.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8776.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8776.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2058051
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 12720
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9929229
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8776.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2074297
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 107086
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 11520
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9803547
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8776.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11996450,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8781",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8781",
      "title": "Scene 8781",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8781.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8781.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8781.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1723069
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 679920
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 7038
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9589973
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8781.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1862519
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 738318
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 52784
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 7948
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9310469
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1764224
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 707267
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 41755
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 4597
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9472764
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8781.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/8781.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11972038,
          "coverage": 0.998
        },
        "segformer_floodnet": {
          "classCount": 5,
          "labeledPixels": 11990607,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8795",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8795",
      "title": "Scene 8795",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8795.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8795.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8795.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8795.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8795.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Grass"
      ],
      "classLegend": [
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8810",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8810",
      "title": "Scene 8810",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8810.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8810.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8810.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 210423
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 358775
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 105224
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11325578
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8810.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 167087
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 404260
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 106625
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11301292
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8810.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 4,
          "labeledPixels": 11979264,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8814",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8814",
      "title": "Scene 8814",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8814.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8814.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8814.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 553134
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 230666
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 137845
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 11078355
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8814.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 38533
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 426235
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 194697
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 134304
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11184326
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8814.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 5,
          "labeledPixels": 11978095,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8860",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8860",
      "title": "Scene 8860",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8860.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8860.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8860.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 3758838
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8241162
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8860.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 239100
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3429676
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8292395
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8860.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 3,
          "labeledPixels": 11961171,
          "coverage": 0.997
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8898",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8898",
      "title": "Scene 8898",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8898.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8898.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8898.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1569603
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 1347810
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 25490
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 9057097
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8898.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1558867
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1394908
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 9045919
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8898.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 3,
          "labeledPixels": 11999694,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8959",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8959",
      "title": "Scene 8959",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8959.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8959.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8959.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2608722
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 4328814
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5062464
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8959.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2590883
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 4417060
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 703
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4987694
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8959.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 4,
          "labeledPixels": 11996340,
          "coverage": 1
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8989",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8989",
      "title": "Scene 8989",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8989.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/8989.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8989.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1547958
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 1925348
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 185111
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8341583
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/8989.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1560754
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 2069067
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 39137
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 3756
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8320885
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/8989.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 5,
          "labeledPixels": 11993599,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Road-non-flooded",
        "Water",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8991",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8991",
      "title": "Scene 8991",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8991.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/8991.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8991.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 1952527
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1451733
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 398523
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8197217
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/8991.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1594117
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1985167
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 156941
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8258675
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/8991.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 4,
          "labeledPixels": 11994900,
          "coverage": 1
        }
      },
      "classNames": [
        "Background",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-8999",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "8999",
      "title": "Scene 8999",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/8999.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/8999.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/8999.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 2480465
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 3327779
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 520394
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5671362
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/8999.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 1688691
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2288207
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 355189
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 178061
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 11282
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6993528
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/8999.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11514958,
          "coverage": 0.96
        }
      },
      "classNames": [
        "Background",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9002",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9002",
      "title": "Scene 9002",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9002.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/9002.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9002.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 2715287
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2417658
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 16262
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6850793
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/9002.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 252266
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2602912
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1831864
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 12425
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6842701
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/9002.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 5,
          "labeledPixels": 11542168,
          "coverage": 0.962
        }
      },
      "classNames": [
        "Background",
        "Road-non-flooded",
        "Water",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9004",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9004",
      "title": "Scene 9004",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9004.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/9004.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9004.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 3110629
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 694526
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 8237
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8186608
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/9004.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 682803
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 2769682
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 6900
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8454963
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/9004.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 4,
          "labeledPixels": 11914348,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Background",
        "Road-non-flooded",
        "Water",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9013",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9013",
      "title": "Scene 9013",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9013.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/9013.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9013.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 468006
        },
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 162228
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 416712
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 158279
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 10794775
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/9013.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 152631
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 357984
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 44789
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 8055
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 11381698
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9013.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11945157,
          "coverage": 0.995
        }
      },
      "classNames": [
        "Background",
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9018",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9018",
      "title": "Scene 9018",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9018.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/9018.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9018.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8474440
        },
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 884779
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1616792
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 430419
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 537681
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 55889
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/9018.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 8447857
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 618160
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1715738
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 506344
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 424487
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 45857
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 774
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/9018.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 7,
          "labeledPixels": 11759217,
          "coverage": 0.98
        }
      },
      "classNames": [
        "Background",
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9032",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9032",
      "title": "Scene 9032",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9032.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/9032.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9032.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 7832842
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 708238
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 3447951
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 10969
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/9032.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 10721571
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 609834
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 657253
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 5548
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 94
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 7293615
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 791781
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 2995448
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 9207
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 178498
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/9032.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9032.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 5,
          "labeledPixels": 11994300,
          "coverage": 1
        },
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11268549,
          "coverage": 0.939
        }
      },
      "classNames": [
        "Background",
        "Road-non-flooded",
        "Water",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9037",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9037",
      "title": "Scene 9037",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9037.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/9037.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9037.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 1269673
        },
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2215843
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 3363823
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 998648
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 332486
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3819527
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/9037.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 140544
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2167483
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3899724
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1089813
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 295123
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4191323
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2206940
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3535089
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1094097
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 342807
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4523733
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/9037.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9037.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 11784010,
          "coverage": 0.982
        },
        "pspnet_floodnet": {
          "classCount": 5,
          "labeledPixels": 11702666,
          "coverage": 0.975
        }
      },
      "classNames": [
        "Background",
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9045",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9045",
      "title": "Scene 9045",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9045.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/9045.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9045.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 3235326
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 3414582
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1636164
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 73441
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 37520
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3602967
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/9045.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 3160513
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 3293474
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1480998
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 110178
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 31220
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3682274
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/9045.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 6,
          "labeledPixels": 11758657,
          "coverage": 0.98
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9054",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9054",
      "title": "Scene 9054",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9054.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/9054.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9054.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1933208
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1434520
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4202526
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 37821
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 213439
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4178486
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/9054.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1979710
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1400669
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4259613
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 14022
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 110869
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 4147637
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9054.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11912520,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9060",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9060",
      "title": "Scene 9060",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9060.jpg",
      "sourceImage": "FloodNetPlus/segformer_floodnet/ground_truth_images/9060.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9060.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2059356
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2113189
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1928138
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 19076
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5880241
        }
      ],
      "groundTruthImage": "FloodNetPlus/segformer_floodnet/samples_gt_with_json/9060.jpg",
      "predictions": {
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2119107
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2061999
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2012717
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 19849
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5663093
          }
        ]
      },
      "predictionImages": {
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/9060.jpg"
      },
      "sceneModelStats": {
        "segformer_floodnet": {
          "classCount": 5,
          "labeledPixels": 11876765,
          "coverage": 0.99
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9068",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9068",
      "title": "Scene 9068",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9068.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/9068.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9068.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2281590
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 841052
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 1427582
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 60812
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 96414
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 7292550
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/9068.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2330772
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 818199
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 1439360
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 49750
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 78206
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 7203611
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9068.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11919898,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9092",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9092",
      "title": "Scene 9092",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9092.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/9092.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9092.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 4184649
        },
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2461072
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 765607
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4385034
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 29609
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 174029
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/9092.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2540134
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1086647
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4196882
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 22931
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 184878
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3885273
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9092.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11916745,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Background",
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9096",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9096",
      "title": "Scene 9096",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9096.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/9096.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9096.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 3531646
        },
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2490477
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2247459
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 3472469
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 167534
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 90415
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/9096.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2577187
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 2682503
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3625398
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 108965
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 96236
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2573859
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9096.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11664148,
          "coverage": 0.972
        }
      },
      "classNames": [
        "Background",
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#000000"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9113",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9113",
      "title": "Scene 9113",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9113.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/9113.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9113.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 65322
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1715428
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 1052846
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2507133
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 14492
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6644779
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/9113.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 59025
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1865808
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1020902
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2549469
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 14665
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6471231
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/9113.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 6,
          "labeledPixels": 11981100,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9114",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9114",
      "title": "Scene 9114",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9114.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/9114.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9114.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 65306
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1746317
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 1495289
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2507462
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 14502
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 6171124
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/9114.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 53998
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1910620
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1471863
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2541189
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 15827
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 5982561
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 57072
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1875414
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 1514186
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2416018
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 14945
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 6074709
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/9114.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9114.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 6,
          "labeledPixels": 11976058,
          "coverage": 0.998
        },
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11952344,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-9872",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "9872",
      "title": "Scene 9872",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/9872.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/9872.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/9872.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 335360
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 345297
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2422148
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 8897195
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/9872.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 296794
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 310228
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 2447976
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 8930655
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/9872.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11985653,
          "coverage": 0.999
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-10163",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "10163",
      "title": "Scene 10163",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/10163.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/10163.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/10163.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 7450703
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 4549297
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/10163.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 11980181
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 19235
          }
        ],
        "pspnet_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 11975279
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 21829
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/10163.jpg",
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/10163.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 2,
          "labeledPixels": 11999416,
          "coverage": 1
        },
        "pspnet_floodnet": {
          "classCount": 2,
          "labeledPixels": 11997108,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-10167",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "10167",
      "title": "Scene 10167",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/10167.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/10167.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/10167.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 11993372
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 6628
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/10167.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 11360175
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 10694
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 13050
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 593329
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/10167.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 4,
          "labeledPixels": 11977248,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Water",
        "Tree",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-10174",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "10174",
      "title": "Scene 10174",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/10174.jpg",
      "sourceImage": "FloodNetPlus/deeplabv3plus_floodnet/ground_truth_images/10174.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/10174.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 3437566
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 385262
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 5295242
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 111118
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 438910
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2331902
        }
      ],
      "groundTruthImage": "FloodNetPlus/deeplabv3plus_floodnet/samples_gt_with_json/10174.jpg",
      "predictions": {
        "deeplabv3plus_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 3545746
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 242027
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5208595
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 102364
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 488948
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2045317
          }
        ],
        "segformer_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 3673026
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 55499
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5176206
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 108493
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 468043
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2043169
          }
        ]
      },
      "predictionImages": {
        "deeplabv3plus_floodnet": "FloodNetPlus/deeplabv3plus_floodnet/visualised_samples_with_json/10174.jpg",
        "segformer_floodnet": "FloodNetPlus/segformer_floodnet/visualised_samples_with_json/10174.jpg"
      },
      "sceneModelStats": {
        "deeplabv3plus_floodnet": {
          "classCount": 6,
          "labeledPixels": 11632997,
          "coverage": 0.969
        },
        "segformer_floodnet": {
          "classCount": 6,
          "labeledPixels": 11524436,
          "coverage": 0.96
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 2 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-10812",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "10812",
      "title": "Scene 10812",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/10812.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/10812.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/10812.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 2426940
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 1681786
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 4086558
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 42239
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 482400
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 3280077
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/10812.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 2543842
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1422491
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 4075871
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 37006
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 376889
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3365448
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/10812.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 6,
          "labeledPixels": 11821547,
          "coverage": 0.985
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-10814",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "10814",
      "title": "Scene 10814",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/10814.jpg",
      "sourceImage": "FloodNetPlus/ccnet_floodnetplus/ground_truth_images/10814.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/10814.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 1892621
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 2104611
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 5034504
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 49167
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 48068
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 2871029
        }
      ],
      "groundTruthImage": "FloodNetPlus/ccnet_floodnetplus/samples_gt_with_json/10814.jpg",
      "predictions": {
        "ccnet_floodnetplus": [
          {
            "labelIndex": 1,
            "className": "Building-flooded",
            "pixelCount": 117869
          },
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 1734111
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 1934670
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 5159995
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 43035
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 65604
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 2817470
          }
        ]
      },
      "predictionImages": {
        "ccnet_floodnetplus": "FloodNetPlus/ccnet_floodnetplus/visualised_samples_with_json/10814.jpg"
      },
      "sceneModelStats": {
        "ccnet_floodnetplus": {
          "classCount": 7,
          "labeledPixels": 11872754,
          "coverage": 0.989
        }
      },
      "classNames": [
        "Building-flooded",
        "Building-non-flooded",
        "Road-non-flooded",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-flooded",
          "name": "Building-flooded",
          "labelIndex": 1,
          "color": "#4682b4"
        },
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "floodnetplus-11483",
      "dataset": "FloodNetPlus",
      "taskType": "semantic-segmentation",
      "imageId": "11483",
      "title": "Scene 11483",
      "location": "FloodNetPlus benchmark sample",
      "baseImage": "viewer/FloodNetPlus/11483.jpg",
      "sourceImage": "FloodNetPlus/pspnet_floodnet/ground_truth_images/11483.jpg",
      "thumbnailImage": "thumbnails/FloodNetPlus/11483.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 2,
          "className": "Building-non-flooded",
          "pixelCount": 774100
        },
        {
          "labelIndex": 4,
          "className": "Road-non-flooded",
          "pixelCount": 137353
        },
        {
          "labelIndex": 5,
          "className": "Water",
          "pixelCount": 2905353
        },
        {
          "labelIndex": 6,
          "className": "Tree",
          "pixelCount": 2780524
        },
        {
          "labelIndex": 7,
          "className": "Vehicle",
          "pixelCount": 11447
        },
        {
          "labelIndex": 8,
          "className": "Pool",
          "pixelCount": 97770
        },
        {
          "labelIndex": 9,
          "className": "Grass",
          "pixelCount": 5293453
        }
      ],
      "groundTruthImage": "FloodNetPlus/pspnet_floodnet/samples_gt_with_json/11483.jpg",
      "predictions": {
        "pspnet_floodnet": [
          {
            "labelIndex": 2,
            "className": "Building-non-flooded",
            "pixelCount": 930181
          },
          {
            "labelIndex": 4,
            "className": "Road-non-flooded",
            "pixelCount": 179346
          },
          {
            "labelIndex": 5,
            "className": "Water",
            "pixelCount": 3038036
          },
          {
            "labelIndex": 6,
            "className": "Tree",
            "pixelCount": 3419693
          },
          {
            "labelIndex": 7,
            "className": "Vehicle",
            "pixelCount": 3465
          },
          {
            "labelIndex": 8,
            "className": "Pool",
            "pixelCount": 83216
          },
          {
            "labelIndex": 9,
            "className": "Grass",
            "pixelCount": 3813709
          }
        ]
      },
      "predictionImages": {
        "pspnet_floodnet": "FloodNetPlus/pspnet_floodnet/visualised_samples_with_json/11483.jpg"
      },
      "sceneModelStats": {
        "pspnet_floodnet": {
          "classCount": 7,
          "labeledPixels": 11467646,
          "coverage": 0.956
        }
      },
      "classNames": [
        "Building-non-flooded",
        "Road-non-flooded",
        "Water",
        "Tree",
        "Vehicle",
        "Pool",
        "Grass"
      ],
      "classLegend": [
        {
          "id": "building-non-flooded",
          "name": "Building-non-flooded",
          "labelIndex": 2,
          "color": "#dc143c"
        },
        {
          "id": "road-non-flooded",
          "name": "Road-non-flooded",
          "labelIndex": 4,
          "color": "#770b20"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 5,
          "color": "#0000e6"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 6,
          "color": "#6b8e23"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 7,
          "color": "#003c64"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 8,
          "color": "#ff0000"
        },
        {
          "id": "grass",
          "name": "Grass",
          "labelIndex": 9,
          "color": "#00ff00"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-10844",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "10844",
      "title": "Scene 10844",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/10844.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/10844.jpg",
      "thumbnailImage": "thumbnails/RescueNet/10844.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 9609179
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 1313189
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 96469
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 981163
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/10844.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 6892872
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 3063849
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 114922
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 1154614
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 104547
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 338897
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/10844.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 6,
          "labeledPixels": 11669701,
          "coverage": 0.972
        }
      },
      "classNames": [
        "Background",
        "Building_Total_Destruction",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-10894",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "10894",
      "title": "Scene 10894",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/10894.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/10894.jpg",
      "thumbnailImage": "thumbnails/RescueNet/10894.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 9335881
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 1323956
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 1340163
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/10894.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 6109520
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 2067497
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 1873638
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 609189
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/10894.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 4,
          "labeledPixels": 10659844,
          "coverage": 0.888
        }
      },
      "classNames": [
        "Background",
        "Building_Total_Destruction",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11028",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11028",
      "title": "Scene 11028",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11028.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11028.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11028.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8207919
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 2317183
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 1474898
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11028.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 5602347
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 206484
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 3490957
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 1384503
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 232309
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11028.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 10916600,
          "coverage": 0.91
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_Total_Destruction",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11096",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11096",
      "title": "Scene 11096",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11096.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11096.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11096.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 1080205
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 441784
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 474043
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 10003968
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11096.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 460663
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 567121
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 587319
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 10339334
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11096.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 4,
          "labeledPixels": 11954437,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11103",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11103",
      "title": "Scene 11103",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11103.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11103.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11103.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8773428
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 1929168
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 318702
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 978702
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11103.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 7433258
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 1887199
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 447367
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 1224499
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 911651
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11103.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11903974,
          "coverage": 0.992
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Vehicle",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11117",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11117",
      "title": "Scene 11117",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11117.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11117.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11117.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 7345330
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 3571992
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 1082678
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11117.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 3457893
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 4787108
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 93855
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 222
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 1069982
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 2205891
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11117.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 6,
          "labeledPixels": 11614951,
          "coverage": 0.968
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11461",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11461",
      "title": "Scene 11461",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11461.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11461.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11461.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 5822395
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 6177605
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11461.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11461.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Background",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11653",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11653",
      "title": "Scene 11653",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11653.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11653.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11653.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11653.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11653.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11916",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11916",
      "title": "Scene 11916",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11916.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11916.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11916.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 7875155
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 575114
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 396094
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 3153637
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11916.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 6655299
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 13661
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 183640
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 349652
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 379014
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 156867
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 3281881
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 477846
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11916.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 8,
          "labeledPixels": 11497860,
          "coverage": 0.958
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Road-Clear",
        "Road-Blocked"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11946",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11946",
      "title": "Scene 11946",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11946.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11946.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11946.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 6219755
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 2624870
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1712169
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 212144
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 51671
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 1179391
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11946.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 3788951
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 3054776
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1751150
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 219327
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 49382
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 2441790
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 49071
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11946.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 7,
          "labeledPixels": 11354447,
          "coverage": 0.946
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_No_Damage",
        "Building_Major_Damage",
        "Vehicle",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-11979",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "11979",
      "title": "Scene 11979",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/11979.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/11979.jpg",
      "thumbnailImage": "thumbnails/RescueNet/11979.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 2186524
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1047276
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 444256
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 2283345
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 6038599
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/11979.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 399782
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 722354
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 1130023
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 3026571
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 6146105
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/11979.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11424835,
          "coverage": 0.952
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12054",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12054",
      "title": "Scene 12054",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12054.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12054.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12054.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 7305068
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 485284
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1102033
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 1475867
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 1631748
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12054.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 6009203
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 660537
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1172731
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 1565713
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 2568367
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12054.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11976551,
          "coverage": 0.998
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_No_Damage",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12129",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12129",
      "title": "Scene 12129",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12129.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12129.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12129.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 10249372
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 211865
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 386123
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 1152640
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12129.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 8902966
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 447699
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 381936
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 88064
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 1992796
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12129.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11813461,
          "coverage": 0.984
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_Minor_Damage",
        "Building_Total_Destruction",
        "Road-Blocked"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12156",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12156",
      "title": "Scene 12156",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12156.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12156.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12156.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 5633580
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 2536455
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1538828
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 269584
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 98606
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 817764
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 1105183
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12156.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 2866250
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 3197334
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1540176
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 423162
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 54336
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 699086
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 31898
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 2269849
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12156.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 8,
          "labeledPixels": 11082091,
          "coverage": 0.924
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12169",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12169",
      "title": "Scene 12169",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12169.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12169.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12169.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8833792
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 1513686
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 482052
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 1170470
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12169.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 7853913
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 1717446
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 886765
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 1417779
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 8897
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12169.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11884800,
          "coverage": 0.99
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_Total_Destruction",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12306",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12306",
      "title": "Scene 12306",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12306.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12306.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12306.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 6566131
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 88674
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 218823
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 940954
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 891964
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 1977559
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 1315895
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12306.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 5177798
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 110
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 386285
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 1584768
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 435416
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 411
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 3986703
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12306.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 7,
          "labeledPixels": 11571491,
          "coverage": 0.964
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12445",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12445",
      "title": "Scene 12445",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12445.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12445.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12445.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 9324215
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 147545
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 157500
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 474611
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 908184
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 987945
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12445.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 7189135
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 70709
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 403999
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 587003
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 1952671
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 1398369
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 63623
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12445.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 7,
          "labeledPixels": 11665509,
          "coverage": 0.972
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12560",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12560",
      "title": "Scene 12560",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12560.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12560.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12560.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 10077879
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 1696907
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 155549
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 23709
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 45956
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12560.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 989388
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 2263973
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 29737
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 322401
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 8139574
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12560.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11745073,
          "coverage": 0.979
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_Total_Destruction",
        "Vehicle",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12579",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12579",
      "title": "Scene 12579",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12579.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12579.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12579.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12579.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 11994076
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 5599
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12579.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 2,
          "labeledPixels": 11999675,
          "coverage": 1
        }
      },
      "classNames": [
        "Background",
        "Water"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12580",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12580",
      "title": "Scene 12580",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12580.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12580.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12580.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 11853346
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 146654
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12580.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 11968907
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 30950
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12580.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 2,
          "labeledPixels": 11999857,
          "coverage": 1
        }
      },
      "classNames": [
        "Background",
        "Water"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12666",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12666",
      "title": "Scene 12666",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12666.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12666.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12666.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12666.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12666.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Tree"
      ],
      "classLegend": [
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12702",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12702",
      "title": "Scene 12702",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12702.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12702.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12702.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8840882
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 688843
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 796573
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 952639
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 465305
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 242879
        },
        {
          "labelIndex": 10,
          "className": "Pool",
          "pixelCount": 12879
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12702.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 7905444
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 6855
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 466179
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 1930387
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 696610
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 577998
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 95458
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12702.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 7,
          "labeledPixels": 11678931,
          "coverage": 0.973
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Road-Clear",
        "Tree",
        "Pool"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 10,
          "color": "#cc9900"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12742",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12742",
      "title": "Scene 12742",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12742.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12742.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12742.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 9248861
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 2751139
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12742.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 8910997
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 3088381
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12742.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 2,
          "labeledPixels": 11999378,
          "coverage": 1
        }
      },
      "classNames": [
        "Background",
        "Water"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12866",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12866",
      "title": "Scene 12866",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12866.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12866.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12866.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 4768549
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 7231451
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12866.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 1376601
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 24162
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 1205916
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 9248986
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12866.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 4,
          "labeledPixels": 11855665,
          "coverage": 0.988
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12948",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12948",
      "title": "Scene 12948",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12948.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12948.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12948.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 5503195
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1399001
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 557424
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 2278262
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 184723
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 2077395
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12948.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 3763659
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1235081
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 219546
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 3405028
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 56426
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 2038190
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 414065
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12948.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 7,
          "labeledPixels": 11131995,
          "coverage": 0.928
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12963",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12963",
      "title": "Scene 12963",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12963.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12963.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12963.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12963.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 12000000
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12963.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 1,
          "labeledPixels": 12000000,
          "coverage": 1
        }
      },
      "classNames": [
        "Background"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-12981",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "12981",
      "title": "Scene 12981",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/12981.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/12981.jpg",
      "thumbnailImage": "thumbnails/RescueNet/12981.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8043479
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 172624
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 992712
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 970617
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 1296636
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 523932
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/12981.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 6722825
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 176526
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 1223062
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 1898194
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 1702867
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 36699
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/12981.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 6,
          "labeledPixels": 11760173,
          "coverage": 0.98
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Total_Destruction",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-13050",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "13050",
      "title": "Scene 13050",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/13050.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/13050.jpg",
      "thumbnailImage": "thumbnails/RescueNet/13050.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 5270924
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 90784
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 448157
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 843750
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 204347
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 55755
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 4423559
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 662724
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/13050.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 5888718
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 976
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 230344
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 147976
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 916581
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 308322
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 41431
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 3870301
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 1412
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/13050.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 9,
          "labeledPixels": 11406061,
          "coverage": 0.951
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "8 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 8,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-13226",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "13226",
      "title": "Scene 13226",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/13226.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/13226.jpg",
      "thumbnailImage": "thumbnails/RescueNet/13226.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 1347228
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 515789
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 10136983
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/13226.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 653583
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 524842
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 10773033
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/13226.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 3,
          "labeledPixels": 11951458,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Background",
        "Building_Minor_Damage",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-13395",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "13395",
      "title": "Scene 13395",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/13395.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/13395.jpg",
      "thumbnailImage": "thumbnails/RescueNet/13395.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 10544955
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 1455045
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/13395.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 10546092
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 1453658
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/13395.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 2,
          "labeledPixels": 11999750,
          "coverage": 1
        }
      },
      "classNames": [
        "Background",
        "Water"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        }
      ],
      "summary": "2 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 2,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-13575",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "13575",
      "title": "Scene 13575",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/13575.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/13575.jpg",
      "thumbnailImage": "thumbnails/RescueNet/13575.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 9036500
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 166078
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 653141
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 72063
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 2072218
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/13575.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 8428442
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 660927
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 192595
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 87440
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 2365125
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/13575.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11734529,
          "coverage": 0.978
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Vehicle",
        "Road-Clear"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-13667",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "13667",
      "title": "Scene 13667",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/13667.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/13667.jpg",
      "thumbnailImage": "thumbnails/RescueNet/13667.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8101707
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 2828071
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 557417
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 393342
        },
        {
          "labelIndex": 10,
          "className": "Pool",
          "pixelCount": 119463
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/13667.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 7693834
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 48780
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 3309836
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 608596
          },
          {
            "labelIndex": 10,
            "className": "Pool",
            "pixelCount": 67837
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/13667.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11728883,
          "coverage": 0.977
        }
      },
      "classNames": [
        "Background",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Pool"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 10,
          "color": "#cc9900"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-13982",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "13982",
      "title": "Scene 13982",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/13982.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/13982.jpg",
      "thumbnailImage": "thumbnails/RescueNet/13982.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 2535960
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 380690
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 151957
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 33103
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 8898290
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/13982.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 1613836
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 313215
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 129177
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 53
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 19716
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 9783316
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/13982.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 6,
          "labeledPixels": 11859313,
          "coverage": 0.988
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Vehicle",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-14170",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "14170",
      "title": "Scene 14170",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/14170.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/14170.jpg",
      "thumbnailImage": "thumbnails/RescueNet/14170.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 3228730
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 899486
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 107885
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 1371174
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 6392725
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/14170.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 1077227
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 2060270
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 95430
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 1990016
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 6555102
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/14170.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11778045,
          "coverage": 0.982
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Vehicle",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-14326",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "14326",
      "title": "Scene 14326",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/14326.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/14326.jpg",
      "thumbnailImage": "thumbnails/RescueNet/14326.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8058693
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 1334085
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 2607222
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/14326.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 9226722
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 1438570
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 1218382
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/14326.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 3,
          "labeledPixels": 11883674,
          "coverage": 0.99
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-14393",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "14393",
      "title": "Scene 14393",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/14393.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/14393.jpg",
      "thumbnailImage": "thumbnails/RescueNet/14393.jpg",
      "rawImageAvailable": true,
      "width": 4056,
      "height": 3040,
      "dimensions": "4056 x 3040",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8200850
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1490271
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 320011
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 156720
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 418134
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 95715
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 1648539
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/14393.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 5856547
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1508076
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 314254
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 245910
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 399884
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 171300
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 2118422
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 22245
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 332112
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/14393.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 9,
          "labeledPixels": 10968750,
          "coverage": 0.89
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12330240,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-14541",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "14541",
      "title": "Scene 14541",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/14541.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/14541.jpg",
      "thumbnailImage": "thumbnails/RescueNet/14541.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 4922998
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 2533940
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 405588
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 671847
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 170360
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 3295267
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/14541.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 2200371
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 2133035
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 1103930
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 311595
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 132367
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 5695827
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/14541.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 6,
          "labeledPixels": 11577125,
          "coverage": 0.965
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Vehicle",
        "Road-Clear"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-14813",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "14813",
      "title": "Scene 14813",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/14813.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/14813.jpg",
      "thumbnailImage": "thumbnails/RescueNet/14813.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 1913274
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 769768
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 357174
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 1141205
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 1234652
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 6583927
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/14813.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 493513
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 1993530
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 21665
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 1212652
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 1606802
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 6385981
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/14813.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 6,
          "labeledPixels": 11714143,
          "coverage": 0.976
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-14816",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "14816",
      "title": "Scene 14816",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/14816.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/14816.jpg",
      "thumbnailImage": "thumbnails/RescueNet/14816.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 3000
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 196448
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 11800552
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/14816.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 200303
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 11798108
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/14816.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 2,
          "labeledPixels": 11998411,
          "coverage": 1
        }
      },
      "classNames": [
        "Background",
        "Building_Major_Damage",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-14879",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "14879",
      "title": "Scene 14879",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/14879.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/14879.jpg",
      "thumbnailImage": "thumbnails/RescueNet/14879.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 9683382
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 459058
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 564567
        },
        {
          "labelIndex": 5,
          "className": "Building_Total_Destruction",
          "pixelCount": 323655
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 969338
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/14879.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 5998065
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 596778
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 637773
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 252988
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 24330
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 1238485
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 2984407
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/14879.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 7,
          "labeledPixels": 11732826,
          "coverage": 0.978
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_Minor_Damage",
        "Building_Total_Destruction",
        "Vehicle",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-15202",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "15202",
      "title": "Scene 15202",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/15202.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/15202.jpg",
      "thumbnailImage": "thumbnails/RescueNet/15202.jpg",
      "rawImageAvailable": true,
      "width": 4056,
      "height": 3040,
      "dimensions": "4056 x 3040",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 4502911
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 2447280
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 5380049
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/15202.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 2541385
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 2770224
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 6874734
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/15202.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 3,
          "labeledPixels": 12186343,
          "coverage": 0.988
        }
      },
      "classNames": [
        "Background",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12330240,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-15270",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "15270",
      "title": "Scene 15270",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/15270.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/15270.jpg",
      "thumbnailImage": "thumbnails/RescueNet/15270.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 1657154
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 485677
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 193984
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 9568912
        },
        {
          "labelIndex": 10,
          "className": "Pool",
          "pixelCount": 94273
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/15270.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 988048
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 529301
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 233195
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 10045024
          },
          {
            "labelIndex": 10,
            "className": "Pool",
            "pixelCount": 157096
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/15270.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11952664,
          "coverage": 0.996
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Road-Clear",
        "Tree",
        "Pool"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 10,
          "color": "#cc9900"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-15356",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "15356",
      "title": "Scene 15356",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/15356.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/15356.jpg",
      "thumbnailImage": "thumbnails/RescueNet/15356.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 3961440
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 230264
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 21032
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 1999462
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 5787802
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/15356.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 2835827
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 248090
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 15281
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 2445104
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 6375918
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/15356.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11920220,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Vehicle",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "5 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 5,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-15394",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "15394",
      "title": "Scene 15394",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/15394.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/15394.jpg",
      "thumbnailImage": "thumbnails/RescueNet/15394.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8818045
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1054051
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 92853
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 2035051
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/15394.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 7023031
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1161563
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 112998
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 3591052
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 3371
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/15394.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11892015,
          "coverage": 0.991
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Vehicle",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-15540",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "15540",
      "title": "Scene 15540",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/15540.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/15540.jpg",
      "thumbnailImage": "thumbnails/RescueNet/15540.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 9584989
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1583107
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 831904
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/15540.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 9267771
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1477413
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 145676
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 64652
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 956161
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 907
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/15540.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 6,
          "labeledPixels": 11912580,
          "coverage": 0.993
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Vehicle",
        "Road-Clear",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "3 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 3,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-15747",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "15747",
      "title": "Scene 15747",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/15747.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/15747.jpg",
      "thumbnailImage": "thumbnails/RescueNet/15747.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 8468886
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 2001705
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 321253
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 458670
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 693417
        },
        {
          "labelIndex": 10,
          "className": "Pool",
          "pixelCount": 56069
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/15747.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 7466615
          },
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 2476183
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 382393
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 1181671
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 72878
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 88681
          },
          {
            "labelIndex": 10,
            "className": "Pool",
            "pixelCount": 61296
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/15747.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 7,
          "labeledPixels": 11729717,
          "coverage": 0.977
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Building_Total_Destruction",
        "Tree",
        "Pool"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        },
        {
          "id": "pool",
          "name": "Pool",
          "labelIndex": 10,
          "color": "#cc9900"
        }
      ],
      "summary": "6 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 6,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-15841",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "15841",
      "title": "Scene 15841",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/15841.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/15841.jpg",
      "thumbnailImage": "thumbnails/RescueNet/15841.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 2986446
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 244512
        },
        {
          "labelIndex": 3,
          "className": "Building_Minor_Damage",
          "pixelCount": 148204
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 8620838
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/15841.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 817418
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 100445
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 100904
          },
          {
            "labelIndex": 5,
            "className": "Building_Total_Destruction",
            "pixelCount": 263872
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 10359648
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/15841.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 5,
          "labeledPixels": 11642287,
          "coverage": 0.97
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Total_Destruction",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-total-destruction",
          "name": "Building_Total_Destruction",
          "labelIndex": 5,
          "color": "#e60000"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "4 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 4,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-15885",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "15885",
      "title": "Scene 15885",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/15885.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/15885.jpg",
      "thumbnailImage": "thumbnails/RescueNet/15885.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 4906985
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 1119415
        },
        {
          "labelIndex": 4,
          "className": "Building_Major_Damage",
          "pixelCount": 886056
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 23863
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 156261
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 174432
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 4732988
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/15885.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 2421180
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1058525
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 177655
          },
          {
            "labelIndex": 4,
            "className": "Building_Major_Damage",
            "pixelCount": 796973
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 30479
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 74512
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 891060
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 5707450
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/15885.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 8,
          "labeledPixels": 11157834,
          "coverage": 0.93
        }
      },
      "classNames": [
        "Background",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Building_Major_Damage",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "building-major-damage",
          "name": "Building_Major_Damage",
          "labelIndex": 4,
          "color": "#ff9966"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-16064",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "16064",
      "title": "Scene 16064",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/16064.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/16064.jpg",
      "thumbnailImage": "thumbnails/RescueNet/16064.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 12000000
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/16064.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 1,
            "className": "Water",
            "pixelCount": 53841
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 11944135
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/16064.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 2,
          "labeledPixels": 11997976,
          "coverage": 1
        }
      },
      "classNames": [
        "Water",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "1 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 1,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
    {
      "id": "rescuenet-16508",
      "dataset": "RescueNet",
      "taskType": "semantic-segmentation",
      "imageId": "16508",
      "title": "Scene 16508",
      "location": "RescueNet benchmark sample",
      "baseImage": "viewer/RescueNet/16508.jpg",
      "sourceImage": "RescueNet/segformer_rescuenet/ground_truth_images/16508.jpg",
      "thumbnailImage": "thumbnails/RescueNet/16508.jpg",
      "rawImageAvailable": true,
      "width": 4000,
      "height": 3000,
      "dimensions": "4000 x 3000",
      "groundTruth": [
        {
          "labelIndex": 0,
          "className": "Background",
          "pixelCount": 2687465
        },
        {
          "labelIndex": 1,
          "className": "Water",
          "pixelCount": 3730
        },
        {
          "labelIndex": 2,
          "className": "Building_No_Damage",
          "pixelCount": 2375018
        },
        {
          "labelIndex": 6,
          "className": "Vehicle",
          "pixelCount": 56719
        },
        {
          "labelIndex": 7,
          "className": "Road-Clear",
          "pixelCount": 2159370
        },
        {
          "labelIndex": 8,
          "className": "Road-Blocked",
          "pixelCount": 490451
        },
        {
          "labelIndex": 9,
          "className": "Tree",
          "pixelCount": 4227247
        }
      ],
      "groundTruthImage": "RescueNet/segformer_rescuenet/samples_gt_with_json/16508.jpg",
      "predictions": {
        "segformer_rescuenet": [
          {
            "labelIndex": 0,
            "className": "Background",
            "pixelCount": 1166291
          },
          {
            "labelIndex": 2,
            "className": "Building_No_Damage",
            "pixelCount": 1792941
          },
          {
            "labelIndex": 3,
            "className": "Building_Minor_Damage",
            "pixelCount": 674511
          },
          {
            "labelIndex": 6,
            "className": "Vehicle",
            "pixelCount": 14510
          },
          {
            "labelIndex": 7,
            "className": "Road-Clear",
            "pixelCount": 6735
          },
          {
            "labelIndex": 8,
            "className": "Road-Blocked",
            "pixelCount": 2581519
          },
          {
            "labelIndex": 9,
            "className": "Tree",
            "pixelCount": 4991677
          }
        ]
      },
      "predictionImages": {
        "segformer_rescuenet": "RescueNet/segformer_rescuenet/visualised_samples_with_json/16508.jpg"
      },
      "sceneModelStats": {
        "segformer_rescuenet": {
          "classCount": 7,
          "labeledPixels": 11228184,
          "coverage": 0.936
        }
      },
      "classNames": [
        "Background",
        "Water",
        "Building_No_Damage",
        "Building_Minor_Damage",
        "Vehicle",
        "Road-Clear",
        "Road-Blocked",
        "Tree"
      ],
      "classLegend": [
        {
          "id": "background",
          "name": "Background",
          "labelIndex": 0,
          "color": "#505050"
        },
        {
          "id": "water",
          "name": "Water",
          "labelIndex": 1,
          "color": "#00b0f0"
        },
        {
          "id": "building-no-damage",
          "name": "Building_No_Damage",
          "labelIndex": 2,
          "color": "#73ffdf"
        },
        {
          "id": "building-minor-damage",
          "name": "Building_Minor_Damage",
          "labelIndex": 3,
          "color": "#ffff73"
        },
        {
          "id": "vehicle",
          "name": "Vehicle",
          "labelIndex": 6,
          "color": "#ff00c5"
        },
        {
          "id": "road-clear",
          "name": "Road-Clear",
          "labelIndex": 7,
          "color": "#b077b0"
        },
        {
          "id": "road-blocked",
          "name": "Road-Blocked",
          "labelIndex": 8,
          "color": "#55ff00"
        },
        {
          "id": "tree",
          "name": "Tree",
          "labelIndex": 9,
          "color": "#0000ff"
        }
      ],
      "summary": "7 classes with 1 model segmentations loaded.",
      "groundTruthStats": {
        "classCount": 7,
        "labeledPixels": 12000000,
        "coverage": 1
      }
    },
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
      "summary": "1 ground-truth box with 3 model outputs loaded."
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
      "predictionImages": {},
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
      "classLegend": [],
      "summary": "1 ground-truth box with 3 model outputs loaded."
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
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
      "predictionImages": {},
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
      "classLegend": [],
      "summary": "6 ground-truth boxes with 3 model outputs loaded."
    }
  ]
};
