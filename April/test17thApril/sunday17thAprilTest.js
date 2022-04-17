//Q. Given the array, print the first name, last name, email, and image
// (src of image is the "avatar" value of each object) on to the screen 
// (Give the hosted and Github Link)
const userList = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];



function printUserInfo(arrayOfObjects){
    const table = document.getElementById("table")
    var head = `
           <thead>
               <tr class="head">
                   <td>User Info</td>
                   <td>id</td>
                   <td>Email</td>
                   <td>First Name</td>
                   <td>Last Name</td>
                   <td>Avatar</td>
               </tr>
            </thead>
         `
         table.innerHTML += head

    for(let i=0; i < arrayOfObjects.length; i++){
        var row = `
                <tr>
                    <td>User No.${i+1}</td>
                    <td>${arrayOfObjects[i].id}</td>
                    <td>${arrayOfObjects[i].email}</td>
                    <td>${arrayOfObjects[i].first_name}</td>
                    <td>${arrayOfObjects[i].last_name}</td>
                    <td>${arrayOfObjects[i].avatar}</td>
                </tr>
          `
          table.innerHTML += row

        // const element = document.createElement("h3");
        // element.innerText = "User Info" + i
        // document.body.appendChild(element)

        // const id = document.createElement("p");
        // id.innerText = "id: " + arrayOfObjects[i].id
        // document.body.appendChild(id)

        // const email = document.createElement("p");
        // email.innerText = "email: " + arrayOfObjects[i].email
        // document.body.appendChild(email)

        // const first_name = document.createElement("p");
        // first_name.innerText = "first_name: " + arrayOfObjects[i].first_name
        // document.body.appendChild(first_name)

        // const last_name = document.createElement("p");
        // last_name.innerText = "last_name: " + arrayOfObjects[i].last_name
        // document.body.appendChild(last_name)

        // const src = document.createElement("p");
        // src.innerText = "src: " + arrayOfObjects[i].avatar
        // document.body.appendChild(src)

    }

}

printUserInfo(userList)
