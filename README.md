QuickBlox Survey Generator
=====

An elegant ready-to-go survey application.

# Demo
http://quickblox.github.io/survey-generator

# How to build your own Survey application

If you want to build your own Survey, please do the following:

<ol>
<li>Download the project from here.</li>
<li>Register a QuickBlox account (if you don't have one yet): http://admin.quickblox.com/register</li>
<li>Log in to QuickBlox admin panel http://admin.quickblox.com/signin</li>
<li>Create a new app</li>
<li>Click on the app title in the list to reveal the app details:
   ![App credentials](https://cloud.githubusercontent.com/assets/373137/10630906/fdfc8156-77e2-11e5-82e7-fa50ab5e4f6f.png)</li>
<li>Copy credentials (App ID, Authorization key, Authorization secret) into **config.js** file.</li>
<li>In order to post any answers you have to create a user. Go to **Users** module, click **Add new users**, enter login and password and also copy them into **config.js** file.</li>
<li>Next step is to create 2 classes in **Custom Objects** module to store survey's questions and answers. Go to **Custom** module, click **Add new class** and create 2 classes with the following schema:
 
 ```xml
 Name: SurveyQuestion
 Fields:
  -type: String. Type of survey
  -question: String. Question
  -answers: Array of strings. Answers.
  -has_alternative_answer: Bool. Will be true if the question has an alternative answer (textarea)
```
```xml
 Name: SurveyAnswer
 Fields:
  -type: String. Type of survey
  -answers: Array of strings. Answers.
```
</li>
<li>Fill **QUESTIONS_CLASS_NAME** and **ANSWERS_CLASS_NAME** variables in **config.js** file.</li>
<li>Add some data to these classes.</li>
<li>Fill **typeSDK** variable in **config.js** file. It shoulb be equeal to a values of **type** field in your classes.</li>
 </ol>
