var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-01",
      "name": "living 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -3.1397670785362735,
          "pitch": 0.04789190520939535,
          "rotation": 3.141592653589793,
          "target": "1-living-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-02",
      "name": "living 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.80513758664984,
          "pitch": -0.009572712063402378,
          "rotation": 3.141592653589793,
          "target": "2-wash-area"
        },
        {
          "yaw": -1.0278822985959337,
          "pitch": 0.06168908029482978,
          "rotation": 3.141592653589793,
          "target": "3-wash-area-01"
        },
        {
          "yaw": -0.7708747656719126,
          "pitch": 0.03125307398588717,
          "rotation": 0,
          "target": "4-wash-area-02"
        },
        {
          "yaw": -0.00664451517962128,
          "pitch": 0.14148836354755367,
          "rotation": 3.141592653589793,
          "target": "0-living-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash-area",
      "name": "Wash area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.39625408810703,
          "pitch": 0.0918186364953506,
          "rotation": 3.141592653589793,
          "target": "1-living-02"
        },
        {
          "yaw": -0.05884689052835945,
          "pitch": 0.03850634626867233,
          "rotation": 3.141592653589793,
          "target": "4-wash-area-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash-area-01",
      "name": "wash area 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.6825552167380664,
          "pitch": 0.007658186119734012,
          "rotation": 3.141592653589793,
          "target": "4-wash-area-02"
        },
        {
          "yaw": -1.3291623589622041,
          "pitch": 0.013335899441729637,
          "rotation": 3.141592653589793,
          "target": "2-wash-area"
        },
        {
          "yaw": -2.600366673850065,
          "pitch": -0.000666869771318801,
          "rotation": 3.141592653589793,
          "target": "1-living-02"
        },
        {
          "yaw": 2.5141024074975196,
          "pitch": 0.08224798968009672,
          "rotation": 3.9269908169872414,
          "target": "0-living-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wash-area-02",
      "name": "wash area 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.5972384996131836,
          "pitch": 0.04330148985327398,
          "rotation": 3.141592653589793,
          "target": "2-wash-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mr. Mujeeb residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
