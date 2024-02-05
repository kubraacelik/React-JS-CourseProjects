## cards
The project includes components that promote specific courses. Through the relevant files and widgets, information about courses on topics such as Angular, Bootstrap, C# and Frontend are shown. There are also descriptions and images for each course. The aim of the project is to understand component and props logic.

![Ekran Görüntüsü (2)](https://github.com/kubraacelik/React-JS/assets/101054783/ceb83f93-d301-4971-b9dc-92878dcfcc0d)

## courses 
For this React application, the Axios library was used to pull courses from a JSON server. The "Loading" component was displayed when the courses were initially loaded. Course data was brought to the user. When the user clicked the delete button to delete a course, the course was removed from the screen. If all courses were deleted, the user was presented with an explanation and a "Refresh" button. When this button was clicked, all courses were reloaded.

![Ekran Görüntüsü (10)](https://github.com/kubraacelik/React-JS/assets/101054783/01956bc4-79a0-429b-a2eb-579ca196db5d)
![Ekran Görüntüsü (12)](https://github.com/kubraacelik/React-JS/assets/101054783/a3fdad44-0e3f-4b7b-ae12-a77fe3a4d954)
![Ekran Görüntüsü (11)](https://github.com/kubraacelik/React-JS/assets/101054783/8f775a66-ece8-49dd-8121-7b506d3d1118)

## courses2
Based on my Course project, a single card will appear on the screen. Forward and back buttons are activated by using React-icons library. Using the random course assign button at the top, 5 of our courses will randomly appear on the screen.

![Ekran Görüntüsü (13)](https://github.com/kubraacelik/React-JS/assets/101054783/73bcd5c5-aece-4243-a32f-6bde425ac201)


## image
In the project, we gave a form. Whatever we write to the input in the form will bring the desired pictures and display them on the screen thanks to the access key received from Unsplash Developer. Axios last update was made. 

![Ekran Görüntüsü (6)](https://github.com/kubraacelik/React-JS/assets/101054783/4dcaaf64-6efb-4581-b388-1c74870fa0c3)

## jiraapplication
My project is a task authoring application. First enter the title and task for the task. When you press the Create button, it is arranged in an orderly manner with flex-wrap:wrap at the bottom. There are delete and update buttons. When you press the delete button, the others except that task are brought to the screen thanks to the filtering feature. When you press the update button, the edit section comes. By using useEffect, even if the page is refreshed, the information remains on the screen without being deleted. When the delete and update buttons were pressed, the changes were saved to the db.json file. The project was further developed using Context. Functions were taken from App.js and thrown into context. 

![Ekran Görüntüsü (7)](https://github.com/kubraacelik/React-JS/assets/101054783/29abd285-ff73-47b5-81ab-85520858bb13)
![Ekran Görüntüsü (8)](https://github.com/kubraacelik/React-JS/assets/101054783/b7f1f551-b6b9-41a9-8b84-ca2453808000)
![Ekran Görüntüsü (9)](https://github.com/kubraacelik/React-JS/assets/101054783/d5e4ad99-4d7d-471c-96e5-b737aca79abd)


## state-project
The project includes an application that randomly selects a set of course names and displays them on the screen. The Course component takes the courseName prop and displays the corresponding image on the screen.  The source (src) of the image is determined by the image file corresponding to the courseName prop using the courseMap object. 

![Ekran Görüntüsü (3)](https://github.com/kubraacelik/React-JS/assets/101054783/c6391c0f-f9a1-4fe4-848d-181a8969e18b)
