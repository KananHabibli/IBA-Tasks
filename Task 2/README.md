Program can be run using : node index.js

Before that, make sure taht you have installed nodejs environment to your device.

You can run the application using VS Code's "Code Runner" extension without using the command mentioned above.

If you don't want to use any extension, you can just hit the "Debug Console" button in VS Code and click 'Run and Debug' button at the left side bar. Again, you will need to install NodeJs for this to work.

Program is designed to you search algorithm called "Depth-first search". It should go through the matrix in a way that it can detect the which matrix entries are neighbor with the same value.
As soon as the loop is done with country it rolls back to the main method to continue finding next countries. solution() function returns the number of countries that was found inside the matrix.
You can observe the detection of the countries from the logs in your console. Each log adds the new country to the array and show them with 1s, so the 0s still remain to be discovered.

P.S. Same approach can be completed this way: Instead of using an extra matrix to check the visit of the entry, we can replace the current entry with nonnumerical character like "+".
In this case, we would be checking the value of the entry of the initial matrix to detect whether it has a number as value or "+". Number would mean it is untouched and "+" would otherwise.
