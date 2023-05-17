package resource

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

const PATH_DATA = "/Users/blubberbee/workspace/own/demo/gRPC/database/data.json"

type UserModel struct {
	ID     int32
	Name   string
	Email  string
	Avatar string
}

type ListUser struct {
	Users []UserModel `json:"users"`
}

func GetUser(id int32) (*UserModel, error) {
	listUser, err := queryData()
	if err != nil {
		return nil, err
	}
	for _, user := range listUser.Users {
		if user.ID == id {
			return &user, nil
		}
	}
	return nil, fmt.Errorf("user with ID %d not found", id)
}

func UpdateUser(userID int32, name, email string) (*UserModel, error) {
	listUser, err := queryData()
	if err != nil {
		return nil, err
	}
	found := false
	var updatedUser *UserModel
	for i, user := range listUser.Users {
		if user.ID == userID {
			listUser.Users[i].Name = name
			listUser.Users[i].Email = email
			found = true
			updatedUser = &listUser.Users[i]
			break
		}
	}
	if !found {
		return nil, fmt.Errorf("user with ID %d not found", userID)
	}
	updatedData, err := json.MarshalIndent(listUser, "", "  ")
	if err != nil {
		return nil, fmt.Errorf("failed to marshal JSON data: %v", err)
	}
	err = ioutil.WriteFile(PATH_DATA, updatedData, 0777)
	if err != nil {
		return nil, fmt.Errorf("failed to write JSON file: %v", err)
	}
	return updatedUser, nil
}

func UpdateUserAvatar(userID int32, avatar string) (err error) {
	listUser, err := queryData()
	if err != nil {
		return err
	}
	for i, user := range listUser.Users {
		if user.ID == userID {
			listUser.Users[i].Avatar = avatar
			break
		}
	}
	updatedData, err := json.MarshalIndent(listUser, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal JSON data: %v", err)
	}
	err = ioutil.WriteFile(PATH_DATA, updatedData, 0777)
	if err != nil {
		return fmt.Errorf("failed to write JSON file: %v", err)
	}
	return nil
}

func Login(email, password string) (*UserModel, error) {
	if email == "demo@gmail.com" && password == "123456789" {
		return GetUser(1)
	}
	return nil, fmt.Errorf("email and password do not match")
}

func queryData() (*ListUser, error) {
	data, err := ioutil.ReadFile(PATH_DATA)
	if err != nil {
		return nil, fmt.Errorf("failed to read JSON file: %v", err)
	}

	var jsonData ListUser
	err = json.Unmarshal(data, &jsonData)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal JSON data: %v", err)
	}
	return &jsonData, nil
}
