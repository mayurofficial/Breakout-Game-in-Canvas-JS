<p align="center"> 
  <img src="assets/thumbnail.png" alt="Breakout Logo" width="600px" height="300px">
</p>
<h1 align="center"> Breakout Game </h1>
<h3 align="center"> Beta Version </h3>
<h5 align="center"> JS Mini Project - 1 - <a href="https://www.newtonschool.co/">Newton School</a> (Batch May)

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project"> ➤ About The Project</a></li>
    <li><a href="#overview"> ➤ Overview</a></li>
    <li><a href="#project-files-description"> ➤ Project Files Description</a></li>
    <li><a href="#getting-started"> ➤ Getting Started</a></li>
    <li><a href="#scenario1"> ➤ Scenario 1: Using Canvas To Draw 2d Assets </a></li>
    <li><a href="#scenario2"> ➤ Scenario 2: Drawing Bricks
      </a></li>
    <li><a href="#scenario3"> ➤ Scenario 3: Drawing Ball
      </a></li>
    <li><a href="#scenario4"> ➤ Scenario 4: Drawing Paddle
      </a></li>
    <li><a href="#scenario5"> ➤ Scenario 5: Collision Detection
      </a></li>
    <li><a href="#scenario6"> ➤ Scenario 6: Check Game Over & Restart
      </a></li>
    <li><a href="#references"> ➤ References</a></li>
    <li><a href="#credits"> ➤ Credits</a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> :pencil: About The Project</h2>

<p align="justify"> 
  For those of you not familiar with Breakout, it's a game where a ball moves around in a canvas and tries to destroy the upper tiles pellets with the help of a bottom paddle, while avoiding not hitting the ground. If all the tiles are destroyed you win.
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- OVERVIEW -->
<h2 id="overview"> :cloud: Overview</h2>

<p align="justify"> 
  In this project, the ball (soldier) will try to destroy as many enemy tiles possible, by using his/her paddle. I implemented a collision detection mechanism which is used to solve navigation problems in the Breakout world.
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- PROJECT FILES DESCRIPTION -->
<h2 id="project-files-description"> :floppy_disk: Project Files Description</h2>

<ul>
  <li><b>index.html</b> - Starting screen of the game.</li>
  <li><b>game.html</b> - Where game UI is present.</li>
  <li><b>style.css</b> - This is where all the styles are present.</li>
  <li><b>script.js</b> - The file contains logic behind how the Breakout game works.</li>
</ul>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- GETTING STARTED -->
<h2 id="getting-started"> :book: Getting Started</h2>

<p>Download the project files and open the project folder:</p>

<p>Click on index.html file and the game will run on your default browser.</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- SCENARIO1 -->
<h2 id="scenario1"> :small_orange_diamond: Scenario 1: Using Canvas To Draw 2d Assets</h2>

<p> Canvas is an HTML element which can be used to draw graphics via scripting (usually JavaScript).</p>
<p>This can, for instance, be used to draw graphs, combine photos, or create simple (and not so simple) animations.</p>
<p>The images appearing on my game is a reflection of <canvas> implementations.</p>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- SCENARIO2 -->
<h2 id="scenario2"> :small_orange_diamond: Scenario 2: Drawing Bricks</h2>

<p>Enemy bricks are drawn on the canvas by using two for loops and their coordinates are being calculated for collision detection or to make them disappear a ball hot them.</p>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- SCENARIO3 -->
<h2 id="scenario3"> :small_orange_diamond: Scenario 3: Drawing Ball</h2>

<p>Implemented a ball which turn it's direction when hitting any object in canvas except ground where the game is over.</p>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- SCENARIO4 -->
<h2 id="scenario4"> :small_orange_diamond: Scenario 4: Drawing Paddle & Key Event Handling</h2>

<p>I have implemented a paddle with key event handler in js to control the direction of ball and keeping it above the ground. Paddle can move across X axis by using Left & Right arrow keys</p>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- SCENARIO5 -->
<h2 id="scenario5"> :small_orange_diamond: Scenario 5: Collision Detection & Game Score</h2>

<p>I have implemented a colision detection which helps ball to stay inside the canvas and move it's direction when hitting an object or boundries. It also helps to make enemy tiles disappear when coliding with ball.</p>
<p>Score is being calculated by calculating how many times ball collide with the enemy tiles.</p>



![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- SCENARIO6 -->
<h2 id="scenario6"> :small_orange_diamond: Scenario 6: Check Game Over & Restart</h2>

<p>Game will be over when ball will miss the paddle and hit the ground.</p>
<p>A button is provided on the left side of the screen to restart the game.</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


<!-- About Me -->
<h2 id="credits"> :scroll: Credits</h2>

Mayur Bahugna

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mayurofficial)
[![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://complexfoundation.com)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/complexmayur/)

I am an Indian Freelance Software Developer based in India <a href="http://complexfoundation.com">Checkout my Portfolio for more Cool Projects.</a>

