     // API Request And V8 Engine :
//  SOME EXAMPLE OF API AND IT'S FORMATE :
/*
    //  Example-1 :
{
  "name" : "Viovar Dusty Beaten path",
  "username": "Marcus10",
  "rating": 0.9,
  "favorites": 3,
  "visits": 27,
  "difficulty": 3,
  "terrain": 4,
  "size": "medium",
  "created": "July 12, 2024",
  "updated": "January 13, 2025",
  "coords": "14.4472 146.2791"
}
*/
/*
    // Example -2 :
    Link : https://api.github.com/users/hiteshchoudhary

    {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 115,
  "public_gists": 5,
  "followers": 51788,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-10-11T17:17:56Z"
}
*/
/*
                        //  Example-3 :
    //  How to use:" You can use AJAX to call the Random User Generator API and will receive a randomly generated user in return. If you are using jQuery, you can use the $.ajax() function in the code snippet below to get started."

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

    // Results:"The application will provide you with a JSON, XML, CSV, or YAML object that you can parse and apply to your application.You can specify the format you want the results in using the 'format' parameter."

    // Formate  : https://randomuser.me/documentation#format
    // GitHub-api :  https://github.com/RandomAPI/Randomuser.me-Node
   // JSON Formator : https://jsonformatter.org/#google_vignette

  JSON Formator formate  করে API কে to understand this what inside the API ,like : Object , array , function ,etc ... 


{
    "results": [
        {
            "user": {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "jamie",
                    "last": "gonzalez"
                },
                "location": {
                    "street": "5829 paddock way",
                    "city": "orange",
                    "state": "northern territory",
                    "zip": 3299
                },
                "email": "jamie.gonzalez@example.com",
                "username": "tinylion273",
                "password": "fiesta",
                "salt": "FugycAEW",
                "md5": "996fca6fcfe3f03dd38db6d6b157789c",
                "sha1": "1e3ed47ff6da8605464a3769f8d2544606c9d533",
                "sha256": "3b9d921dfe72f60e6916097811ea55c9589053cdcde8a0fbb3fba602c1340782",
                "registered": 1430680797,
                "dob": 514424334,
                "phone": "07-5406-0339",
                "cell": "0465-960-454",
                "TFN": "426315401",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/66.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "morris",
                    "last": "phillips"
                },
                "location": {
                    "street": "4320 thornridge cir",
                    "city": "busselton",
                    "state": "new south wales",
                    "zip": 7327
                },
                "email": "morris.phillips@example.com",
                "username": "crazytiger905",
                "password": "buckeye",
                "salt": "BFpm0xHV",
                "md5": "f450273843cd751989db08b2eee7dda8",
                "sha1": "d3ecc801e4f8bbef5153f5126a077f6d49a2f0f3",
                "sha256": "2854eba63f6e24eed13c54adbad14ff05981ad2c0108a215399e95bfac27dea4",
                "registered": 981891364,
                "dob": 828936794,
                "phone": "01-1225-1462",
                "cell": "0452-952-511",
                "TFN": "570088179",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/82.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "carmen",
                    "last": "garcia"
                },
                "location": {
                    "street": "3817 saddle dr",
                    "city": "hervey bay",
                    "state": "northern territory",
                    "zip": 3377
                },
                "email": "carmen.garcia@example.com",
                "username": "orangefrog140",
                "password": "juanita",
                "salt": "rPBgVRvc",
                "md5": "af02f69d4c66af0d4a8699409ffa0789",
                "sha1": "09497c8b1435fff216a51a4daf10bd1500338c33",
                "sha256": "ad39f3d94b908faa4bb14271c947cd842d4a13d85b690ae70f679ca9d1f2f1b8",
                "registered": 1019887692,
                "dob": 793309364,
                "phone": "09-7897-4452",
                "cell": "0490-342-447",
                "TFN": "139467948",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/39.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "tom",
                    "last": "frazier"
                },
                "location": {
                    "street": "6083 saddle dr",
                    "city": "busselton",
                    "state": "western australia",
                    "zip": 6418
                },
                "email": "tom.frazier@example.com",
                "username": "goldenbird793",
                "password": "musica",
                "salt": "eJCphEDC",
                "md5": "02833f1efa37238b37f3dcf23fc2d49d",
                "sha1": "bcad372e128430c8ebc6b5aceed1a3e141130ad4",
                "sha256": "365407aa3def0aa4428a641a14d2b157a460088ea826488345d606cb998bc52b",
                "registered": 1103754870,
                "dob": 425474174,
                "phone": "03-5865-7524",
                "cell": "0426-163-508",
                "TFN": "737404966",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/29.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "marie",
                    "last": "turner"
                },
                "location": {
                    "street": "3334 white oak dr",
                    "city": "kalgoorlie",
                    "state": "victoria",
                    "zip": 3479
                },
                "email": "marie.turner@example.com",
                "username": "bluebear376",
                "password": "magenta",
                "salt": "t6qlCJII",
                "md5": "a0f7bd2dc8f80ef61767c41bd83c0802",
                "sha1": "a66afc4f9948733bc691a3248ef01a0e9dd64c77",
                "sha256": "15c261b2549edd064bdffaf168482ad42388fbf072b129114d209b5a4f099c19",
                "registered": 932640278,
                "dob": 844308444,
                "phone": "03-7603-0965",
                "cell": "0499-269-024",
                "TFN": "258265439",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/63.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/63.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/63.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "lori",
                    "last": "cole"
                },
                "location": {
                    "street": "2960 harrison ct",
                    "city": "cairns",
                    "state": "south australia",
                    "zip": 3865
                },
                "email": "lori.cole@example.com",
                "username": "bigpeacock340",
                "password": "dante",
                "salt": "BYtqCc05",
                "md5": "390ffbe2d008f65afab3f948b22465de",
                "sha1": "df4f49187d5a51f7a7d537e81446f7a777ec9de9",
                "sha256": "3a45852c91827624823d519f8dc442ac1b1ae78cde669a9549f450b6ff85500f",
                "registered": 1189148537,
                "dob": 61299765,
                "phone": "07-9794-2138",
                "cell": "0431-526-122",
                "TFN": "769151959",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/84.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "dave",
                    "last": "ward"
                },
                "location": {
                    "street": "987 w dallas st",
                    "city": "wagga wagga",
                    "state": "victoria",
                    "zip": 4717
                },
                "email": "dave.ward@example.com",
                "username": "redladybug693",
                "password": "knicks",
                "salt": "Cnteh0a1",
                "md5": "37cd84faaf7670ce13a197acd1ee8e8e",
                "sha1": "6adc881708b9e9aaa9b75e1fdbec9648c36e4e7e",
                "sha256": "6b6454414fd3bd647476acc5cfdf433787633f2fd9df3e7f977ab836533ba707",
                "registered": 1375978896,
                "dob": 619193300,
                "phone": "05-0277-9673",
                "cell": "0482-116-313",
                "TFN": "864040634",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/93.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/93.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/93.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "curtis",
                    "last": "scott"
                },
                "location": {
                    "street": "9404 oak ridge ln",
                    "city": "traralgon",
                    "state": "australian capital territory",
                    "zip": 7893
                },
                "email": "curtis.scott@example.com",
                "username": "organicfish420",
                "password": "having",
                "salt": "ovVO7IOO",
                "md5": "87e6f7b227a40abd4b7cddbbf2cdfc69",
                "sha1": "5d930c83c5e987a6e1a9517e70a647a5a204e8ac",
                "sha256": "a823d2462801ef4bd448a4c2ba21c98d277b0555686e3a9f53784b81f93947b5",
                "registered": 953857943,
                "dob": 730104966,
                "phone": "03-5564-9077",
                "cell": "0497-837-908",
                "TFN": "786896688",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/97.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "salvador",
                    "last": "nguyen"
                },
                "location": {
                    "street": "7756 mockingbird ln",
                    "city": "hervey bay",
                    "state": "australian capital territory",
                    "zip": 8180
                },
                "email": "salvador.nguyen@example.com",
                "username": "orangefish326",
                "password": "aileen",
                "salt": "CEeKaDXg",
                "md5": "f655ab60e250c97dcc90120e6a45dd82",
                "sha1": "0a2526fc8bb3d4efd964da0cfea18eee11c4a1f7",
                "sha256": "faef174b0db61d27f2e7c2b82d7dff69867b64435ecb79c925ad86cea08dc290",
                "registered": 1022005995,
                "dob": 100758975,
                "phone": "09-9981-2889",
                "cell": "0466-988-513",
                "TFN": "812593886",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/56.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
                }
            }
        },
        {
            "user": {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "clifton",
                    "last": "gonzales"
                },
                "location": {
                    "street": "2393 w 6th st",
                    "city": "ballarat",
                    "state": "queensland",
                    "zip": 6958
                },
                "email": "clifton.gonzales@example.com",
                "username": "redladybug392",
                "password": "jungle",
                "salt": "XupRsIgi",
                "md5": "789fc550015ae381e7655a3be00cd31e",
                "sha1": "19a6a54f8eba701589741e570df06be223cee2e1",
                "sha256": "c52dd7ceaac340f035ee34aaf4937635164324a2d696d9dfdc7df27243431521",
                "registered": 1352022821,
                "dob": 1261328982,
                "phone": "02-7377-2041",
                "cell": "0427-094-615",
                "TFN": "141859493",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/35.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/35.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
                }
            }
        }
    ],
    "nationality": "AU",
    "seed": "58ee7970630f067300",
    "version": "0.8"
}
*/

      // Now, Create an own Api :
    // XMLHttpRequest :  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

    const requestUrl = "https://api.github.com/users/hiteshchoudhary"
const xhr = new XMLHttpRequest();
// xhr.open('GET',"https://api.github.com/users/hiteshchoudhary")
xhr.open('GET',requestUrl)
xhr.onreadystatechange = function () {
  // console.log("Here");
console.log(xhr.readyState);
if (xhr.readyState === 4) {
  // console.log(this.responseText); 
  // const data = this.responseText
  const data = JSON.parse(this.responseText)
  console.log(data);
    console.log(typeof data);
  console.log(data.followers);
  
}
}
xhr.send();
  // Task / H.W : Photo ber kora?

      // V8 Engine :
    //  1.  https://github.com/v8/v8
    // 2.  https://v8.dev/docs
    // 3.  https://v8.dev/

// ````````````````````````````````````` X ````````````````````````````````````
      // Promises :
// fetch("https://somthjing.com").then().catch().finally()
const promiseOne = new Promise(function(resolve,reject) {
  // Do an Async Task
  // Database calls, cryptography,network
  setTimeout(function() {
    console.log("Async task is complete");
    resolve()
  },1000)
})

promiseOne.then(function() {
  console.log('Promise consumed');
})

// Exmple -2:
 new Promise(function(resolve,reject) {
  setTimeout(function() {
    console.log("Async task is complete 2");
    resolve()
  },1000)
}).then(function() {
  console.log('Promise consumed 2,async 2 resolved');
})

// Exmple -3:
  
const promiseThree = new Promise(function(resolve,reject) {
  setTimeout(function() {
    // resolve([])
    resolve({username: "arafat",email:"arafathjfsdh.com"})

  },1000)
})
promiseThree.then(function(user) {
  console.log(user);
})
// Ex-4:
const promiseFour = new Promise(function(resolve,reject) {
  setTimeout(function() {
    let error = true
    // let error = false
    if (!error) {
      reject({username:"arafat",password:"123"})
    }else{
      reject('ERROR : something gone wrong')
    }
  },1000)
})
// promiseFour.then().catch()
// const username = promiseFour.then((user)=>{
  const username = promiseFour.then((user)=>{
console.log(user);
return user.username

}).then((username)=>{
console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected")
)
// console.log(username);
/*
})
.then((username)=>{
console.log(username);
})
.catch(function(error){
  console.log(error);
})
  .finally(()=>console.log("The promise is either resolved or rejected")
)
  // This is for readability
*/

  // ex-5:
  const promiseFive = new  Promise(function(resolve,reject) {
  setTimeout(function() {
    let error = true
    // let error = false
    if (!error) {
      reject({username:"javascript",password:"123"})
    }else{
      reject('ERROR : javascript gone wrong')
    }
  },1000)
});
async function consumePromiseFive() {
    /*
    const response = await promiseFive
    console.log(response);
    //This part gets some error.
    */
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()


// Combination Of "Fetch" and 'promises' :

async function getAllUsers() {
    /*
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()
    console.log(data);
    // Not getting values
    */
    /*
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()
    console.log(data);
    } catch (error) {
        console.log("E :",error);
        
    }
     // Not getting values
    */
   try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E :",error);
        
    }
}
getAllUsers()

/*
// Or,

 fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{ return response.json()}).then((data)=>{console.log(data);}).catch((error)=>console.log(error))
*/
//  Or,
 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
     return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch(
        (error)=>console.log(error)
    ) // Now, This can good for readability...

            // Fetch :
// 1. https://blog.logrocket.com/author/asaoluelijah/

fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
     return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch(
        (error)=>console.log(error)
    )