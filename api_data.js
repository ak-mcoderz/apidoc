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
  }
] });
