---
title: How do I update AltoClef by myself?
---

_(A somewhat beginner friendly guide)_<br><br>

**1. Clone the desired Repository**<br><br>
You can do a <br><br>

git clone https://github.com/MarvionKirito/altoclef for the (current) 1.20.2 repo to update to a newer version of minecraft <br><br>

Or do a git clone https://github.com/gaucho-matrero/altoclef for the official 1.18.2 Repository to update<br><br>


**2. Open the Project**<br><br>
Open the project in InteliJ community edition, **you'll need the Minecraft Development plugin from the InteliJ marketplace** before you open/import this project<br><br>


**3. Open the Gradle.Properties file**<br><br>
Make a note of what's in here, copy it to a blank notepad or word document before continuing. Update this based on https://fabricmc.net/develop/ and make sure this is up to date. 

Update all of the yarn mapping code
Use https://modmuss50.me/yarn/ to update all of the mappings inside of the AltoClef project (Not in gradle.properties, you're done with this file). You can use something like GPT4 or BARD to help you if you can't write code to figure it out. Use the "yarn_mappings" you wrote down from the gradle.properties file earlier and enter it into the website<br><br>

OR<br><br>

Use loom that adds the migrateMappings gradle task that does it pretty much automatically (you might need to do .\gradlew instead of gradlew)<br><br>


**5. Test it**<br><br>
Every time you update the classes/methods/fields you have to build/run it every time. It will tell you on the error logs what else needs to be updated or if you missed something and you'll need to cross reference it with the website from Step 4<br><br>

(do not ask me to help you I cannot help every single person with coding, look up tutorials on youtube or something. **We will release updates when we can**) 
