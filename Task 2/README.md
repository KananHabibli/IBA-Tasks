The program can be run using: node index.js

Before that, make sure that you have installed the nodejs environment on your device.

You can run the application using VS Code's "Code Runner" extension without using the command mentioned above.

If you don't want to use any extension, you can just hit the "Debug Console" button in VS Code and click the 'Run and Debug' button at the left sidebar. Again, you will need to install NodeJs for this to work.

Program will go through the matrix in a way that it can detect which matrix entries are neighbors with the same value.
As soon as the loop is done with the country, it rolls back to the main method to continue finding the next countries. solution() function returns the number of countries that were found inside the matrix.
You can observe the detection of the countries from the logs in your console. Each log adds the new country to the array and shows them with 1s, so the 0s remain to be discovered.

P.S. Same approach can be completed this way: Instead of using an extra matrix to check the visit of the entry, we can replace the current entry with a nonnumerical character like "+".
In this case, we would be checking the value of the entry of the initial matrix to detect whether it has a number as value or "+". The number would mean it is untouched and "+" would otherwise.
