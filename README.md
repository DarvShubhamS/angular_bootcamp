# Session : Build process Assignement

## Exercise : -
- Create a Production Build Of Your Application.

## We use ng build --prod to create a production build. This command will create a dist folder which we can use for deployement

<img src="https://github.com/DarvShubhamS/angular_bootcamp/blob/build_process/src/assets/ss/ss5.JPG" />


### Bundled File created:- https://github.com/DarvShubhamS/angular_bootcamp/tree/build_process/dist/Advanced-Angular


- Configure Environment file to maintain specific URL related to your environment.

## Setting Enviroment Variables according to different environement:-

* Enviroment Files:-  https://github.com/DarvShubhamS/angular_bootcamp/tree/build_process/src/environments
* Angular.json File :- https://github.com/DarvShubhamS/angular_bootcamp/blob/build_process/angular.json

- By Default we have environment folder in which we have enviroment files , in that file according to our environement we can make changes and set up different enviroment variables.


- After setting up environment variables , we have to make changes in angular.json file and add configuration in under build in "build" and "serve".
- We can now run our project in different environement using command ng serve --configuration=environement_name

### screenshots

<img src="https://github.com/DarvShubhamS/angular_bootcamp/blob/build_process/src/assets/ss/ss1.JPG" />

<img src="https://github.com/DarvShubhamS/angular_bootcamp/blob/build_process/src/assets/ss/ss2.JPG" />

<img src="https://github.com/DarvShubhamS/angular_bootcamp/blob/build_process/src/assets/ss/ss4.JPG" />

<img src="https://github.com/DarvShubhamS/angular_bootcamp/blob/build_process/src/assets/ss/ss3.JPG" />





