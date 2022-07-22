# test-api-node

GET ALL USERS

```http://localhost:5000/api/users```


POST create user

```http://localhost:5000/api/users```
JSON
{
	"first_name":"Jo",
	"last_name":"kenny"
}

GET A USER RECORD
```http://localhost:5000/api/users/:id```


GET FRIENDS LIST
```http://localhost:5000/api/users/friends/:id```


UPDATE (patch) A USER RECORD - 
```http://localhost:5000/api/users/:id```


DELETE A USER RECORD
```http://localhost:5000/api/users/:id```



