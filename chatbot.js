<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CODEX AI Chatbot</title>

<link rel="stylesheet" href="css/chatbot.css">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

</head>


<body>


<div class="chat-container">


<!-- Header -->

<div class="chat-header">

<div class="logo">

<i class="fa-solid fa-robot"></i>

<h2>CODEX AI</h2>

</div>


<a href="dashboard.html">

<i class="fa-solid fa-arrow-left"></i>

</a>


</div>




<!-- Chat Area -->


<div class="chat-box" id="chatBox">


<div class="message ai-message">

🤖 Hello! I am CODEX AI Assistant.

<br>

How can I help you today?

</div>



<div class="message ai-message">

I can help with:

<br>
• Class Information
<br>
• Timetable
<br>
• Homework
<br>
• Study Questions

</div>


</div>





<!-- Input Area -->


<div class="chat-input">


<input 
type="text"
id="userInput"
placeholder="Ask something...">



<button onclick="sendMessage()">

<i class="fa-solid fa-paper-plane"></i>

</button>


</div>



</div>





<script src="js/chatbot.js"></script>


</body>

</html>
