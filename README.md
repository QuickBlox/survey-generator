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
<img src="https://cloud.githubusercontent.com/assets/373137/10630906/fdfc8156-77e2-11e5-82e7-fa50ab5e4f6f.png" alt="App credentials"/>
</li>
<li>Copy credentials (App ID, Authorization key, Authorization secret) into <b>config.js</b> file.</li>
<li>In order to post any answers you have to create a user. Go to <b>Users</b> module, click <b>Add new users</b>, enter login and password and also copy them into <b>config.js</b> file.</li>
<li>Next step is to create 2 classes in <b>Custom Objects</b> module to store survey's questions and answers. Go to <b>Custom</b> module, click <b>Add new class</b> and create 2 classes with the following schema:
 
<pre>
 Name: SurveyQuestion
 Fields:
  -type: String. Type of survey
  -question: String. Question
  -answers: Array of strings. Answers.
  -has_alternative_answer: Bool. Will be true if the question has an alternative answer (textarea)
  -order: Integer. Order of the question.
</pre>
<pre>
 Name: SurveyAnswer
 Fields:
  -type: String. Type of survey
  -answers: Array of strings. Answers.
</pre>
</li>
<li>Fill <b>QUESTIONS_CLASS_NAME</b> and <b>ANSWERS_CLASS_NAME</b> variables in <b>config.js</b> file.</li>
<li>Add some data to these classes.</li>
<li>Fill <b>typeSDK</b> variable in <b>config.js</b> file. It should be equal to a value of <b>type</b> field in your classes.</li>
 </ol>
