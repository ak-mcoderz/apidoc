define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Application Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"user\": {\n            \"id\": 1,\n            \"uid\": fa3e3c91-df2e-477e-8e59-03d679688ff5,\n            \"name\": John Doe,\n            \"phone\": \"90******99\",\n            \"email\": \"john@doe.com\",\n            \"email_verified_at\": null,\n            \"device_type\": \"android\",\n            \"timestamp\": 1597674522004,\n            \"created_at\": \"2020-08-17 19:58:42\",\n            \"updated_at\": \"2020-08-17 19:58:42\"\n        },\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9eyJhdWQi..............E4MzgsIm5iZiI6MTYwMDE2MTgzOCwiZXhwIjoxNjMxNjk3ODM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Invalid Credentials\",\n}\n\nHTTP/1.1 400 Bad Request\n {\n     \"data\": {\n         \"email\": [\n             \"The email field is required.\"\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "../server/app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "Register",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'content-type': 'application/json',\n  'accept': 'application/json',\n  'app-version': '1.0.0',\n  'device-type': 'android'\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "Register",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full Name of User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Confirm Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Register successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"data\": {\n         \"phone\": [\n             \"The phone has already been taken.\"\n         ],\n         \"email\": [\n             \"The email has already been taken.\"\n         ]\n     }\n }\n\nHTTP/1.1 400 Bad Request\n {\n     \"data\": {\n         \"password\": [\n             \"The password must be at least 6 characters.\"\n         ]\n     }\n }\n\nHTTP/1.1 400 Bad Request\n {\n     \"data\": {\n         \"password\": [\n             \"The password confirmation does not match.\"\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "../server/app/Http/Controllers/Auth/RegisterController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/add_car",
    "title": "Add a Car",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'content-type': 'application/json',\n  'accept': 'application/json',\n  'app-version': '1.0.0',\n  'device-type': 'android'\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "AddCar",
    "group": "Car",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "brand_id",
            "description": "<p>id of Brand Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Year of Car make.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fuel_type",
            "description": "<p>Fuel Type 1 - Petrol, 2 - Desiel.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mileage",
            "description": "<p>Mileage of Car.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "odometer",
            "description": "<p>Odometer of Car.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "engine",
            "description": "<p>Engine type of Car.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Body of Car.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of Car.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "km_driven",
            "description": "<p>Kilometers driven by Car.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_owner",
            "description": "<p>Total owners of Car.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Car.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Car.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Car added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"data\": {\n         \"body\": [\n             \"The body field is required\"\n         ],\n         \"color\": [\n             \"The color field is required\"\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "../server/app/Http/Controllers/CarController.php",
    "groupTitle": "Car"
  }
] });
