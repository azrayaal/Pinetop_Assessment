Database and API practical questions


# How To Use show vehicle Using Postman

## Vehicle API

### Get All Vehicle

`No Authorization`

- URL: http://localhost:3002/api/v1/vehicles
- Method: `GET`
- Request Body:

```
[
    {
        "id": 1,
        "type": "Scooter",
        "lock_status": "Unlock",
        "current_speed": "0 km/h",
        "battery_level": "0%",
        "status": "MOVING",
        "location": "4.14,012"
    },
    {
        "id": 2,
        "type": "Scooter",
        "lock_status": "Lock",
        "current_speed": "0 km/h",
        "battery_level": "0%",
        "status": "TOWING",
        "location": "5.14,012"
    },
]
```

### Add new Vehicle

`No Authorization`

- URL: http://localhost:3002/api/v1/vehicle
- Method: `POST`
- Request Body:

```
{
    "type": "Scooter",
    "lock_status": "LOCK",
    "current_speed": "0 km/h",
    "battery_level": "0%",
    "status": "TOWING",
    "location": "5.14,012"
}
```

### Get detail Article

`No Authorization`

- URL: http://localhost:3002/api/v1/vehicle/:id
- Method: `GET`
- Request Body:

```
   {
        "id": 1,
        "type": "Scooter",
        "lock_status": "Unlock",
        "current_speed": "0 km/h",
        "battery_level": "0%",
        "status": "MOVING",
        "location": "4.14,012"
    }
```

### Update Article

`No Authorization`

- URL: http://localhost:3002/api/v1/vehicle/:id
- Method: `PUT`
- Request Body:

```
{
    "type": "Scooter",
    "lock_status": "LOCK",
    "current_speed": "0 km/h",
    "battery_level": "0%",
    "status": "TOWING",
    "location": "5.14,012"
}
```

### Delete Article

`No Authorization`

- URL: http://localhost:3002/api/v1/vehicle/:id
- Method: `DELETE`
- Request Body:

```
{
    message: "Vehicle has been removed"
}
```

### Change Lock Status

`No Authorization`

- URL: http://localhost:3002/api/v1/vehicle/:id/lock_status
- Method: `POST`
- Request Body:

```
{
    message: "Vehicle status has been updated"
}
```


### Change Battery Level

`No Authorization`

- URL: http://localhost:3002/api/v1/vehicle/:id/battery_level
- Method: `PUT`
- Request Body:

```
{
    "battery_level": "15%"
}
```

### Change Current Speed

`No Authorization`

- URL: http://localhost:3002/api/v1/vehicle/:id/current_speed
- Method: `PUT`
- Request Body:

```
{
    "current_speed": "10 km/h"
}
```
