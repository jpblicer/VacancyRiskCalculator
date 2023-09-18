# VacancyRiskCalculator

/-- What this is --/

Rick Calculator for an Agency Recruiter to determine chance to fill based on several criteria.


/-- About --/

This project was created for myself as a learning tool to better understand React Framework and ReactDOM.

I wanted to create a calculator that would update in real time without needing to submit the form so the user can see how different criteria can measure into the overall risk of focusing on a specific job vacancy. As a contigency recruiter being able to focus your time on the lowest risk vacancy can help maximize potential earnings.

This should provide a cleaner solution than writing out the math for each new role from scratch.


/-- Step by Step --/

Create a mockup image of the website and break up the UI into its components; in this case the: 
    Vacancy Title
    Expected Bill Rate
    Number of Headcount
    Three main criteria for a 1st interview
    Additional Criteria that can minimize risk

RiskCalculator Component is created and a static website of is developed.

Finally creating state for related inputs including select menus, checkboxes, and input fields with onChange event handlers.

Calculations are performed in state based onChange and displayed at the bottom of the page in the form of a total risk percentage.

/-- Challenges --/

Challenge 1: Originally I had broken up the RiskCalculator into multiple smaller sub components and tried to pass each result of the computation back to the parent. Letting state and the variables live in the parent solved this problem.

Challenge 2: Select inputs on the Three Main Criteria gave me a lot of trouble as I found myself ending up with three of the same values or the values not being calculated correctly when creating the threeCriteriaScore variable. The solution was to break up the three criteria into its own variable and state. This might not be the cleanest solution and one I will return to with more time in the future.

Challenge 3: I wanted each component to be calculated in real time without submitting the page. Because there is no submit button like most standard forms; calling additional functions became messy and gave unwanted results. I relied heavily on ternary and if...else conditional statements to output new variables the value based on the previous state variables. This is most easily seen in the totalFeeRisk which is calculated on the totalFee using if...else if logic.