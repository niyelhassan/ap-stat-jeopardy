const gameData = {
  round1: {
    label: "Round 1",
    pointValues: [100, 200, 300, 400, 500],
    categories: [
      "Shape, Center & Spread",
      "2-Var Quantitative Data",
      "Bias & Sampling",
      "Experimental Design",
      "Probability",
    ],
    questions: {
      "Shape, Center & Spread": [
        {
          value: 100,
          question: "When a distribution has a long tail stretching to the left and the mean is less than the median, it has this shape.",
          answer: "What is left-skewed (negatively skewed)?",
          solution: [
            { type: "text", content: "The tail stretches toward lower values, so the distribution is left-skewed. The mean is pulled in the direction of the tail, giving mean < median." },
          ],
        },
        {
          value: 200,
          question: "For the data set 62, 68, 74, 80, 88, 95, 102, the interquartile range has this value.",
          answer: "What is 27?",
          solution: [
            { type: "text", content: "Median = 80. Lower half: {62, 68, 74}, so Q1 = 68. Upper half: {88, 95, 102}, so Q3 = 95." },
            { type: "text", content: "IQR = Q3 - Q1 = 95 - 68 = 27." },
          ],
        },
        {
          value: 300,
          question: "Test scores are normally distributed with mean 72 and standard deviation 8. A student scoring 88 has this z-score.",
          answer: "What is z = 2?",
          solution: [
            { type: "text", content: "z = (x - mean) / SD = (88 - 72) / 8 = 16 / 8 = 2." },
            { type: "text", content: "The student scored 2 standard deviations above the mean." },
          ],
        },
        {
          value: 400,
          question: "A boxplot shows Q1 = 20 and Q3 = 50. Using the 1.5 x IQR rule, a value of 100 would be identified as this.",
          answer: "What is an outlier?",
          solution: [
            { type: "text", content: "IQR = 50 - 20 = 30. Upper fence = Q3 + 1.5(IQR) = 50 + 45 = 95." },
            { type: "text", content: "Since 100 > 95, the value of 100 is an outlier." },
          ],
        },
        {
          value: 500,
          question: "A data set of daily absences is: 0, 0, 1, 2, 2, 3, 24. The median is preferred over the mean as a measure of center for this reason.",
          answer: "What is the median is resistant to outliers (24 pulls the mean up but not the median)?",
          solution: [
            { type: "text", content: "Mean = (0+0+1+2+2+3+24) / 7 = 32/7 ≈ 4.57. Median = 2." },
            { type: "text", content: "The outlier 24 inflates the mean to 4.57, but 5 of 7 students had 2 or fewer absences. The median is resistant to outliers and better represents the typical value." },
          ],
        },
      ],

      "2-Var Quantitative Data": [
        {
          value: 100,
          question: "A correlation coefficient of r = -0.91 indicates this about the relationship between two quantitative variables.",
          answer: "What is a strong, negative linear relationship?",
          solution: [
            { type: "text", content: "Negative sign: as x increases, y tends to decrease. Magnitude 0.91 (close to 1) indicates a strong association." },
          ],
        },
        {
          value: 200,
          question: "The LSRL for predicting exam score (y-hat) from hours studied (x) is y-hat = 55 + 4.2x. For each additional hour studied, the predicted exam score changes by this amount.",
          answer: "What is an increase of 4.2 points?",
          solution: [
            { type: "text", content: "The slope (4.2) is the predicted change in y for each 1-unit increase in x. For each additional hour studied, the predicted exam score increases by 4.2 points." },
          ],
        },
        {
          value: 300,
          question: "A regression model predicting college GPA from high school GPA has r² = 0.46. This percentage of the variation in college GPA is explained by its linear relationship with high school GPA.",
          answer: "What is 46%?",
          solution: [
            { type: "text", content: "r² = 0.46: about 46% of the variation in college GPA is explained by the linear relationship with HS GPA. The remaining 54% is due to other factors." },
          ],
        },
        {
          value: 400,
          question: "A student's actual exam score is 76, and the regression model predicted a score of 83. This student's residual equals this value, and the model did this.",
          answer: "What is -7; the model overpredicted?",
          solution: [
            { type: "text", content: "Residual = Actual - Predicted = 76 - 83 = -7." },
            { type: "text", content: "A negative residual means the model overpredicted (predicted higher than actual)." },
          ],
        },
        {
          value: 500,
          question: "A residual plot for a linear regression model shows a fan-shaped pattern, with the residuals spreading out as x increases. This indicates this problem with the model.",
          answer: "What is non-constant variance (the linear model may not be appropriate)?",
          solution: [
            { type: "text", content: "Random scatter in a residual plot means the linear model is appropriate. A fan shape means the spread of residuals increases as x increases, indicating non-constant variance. The linear model may not be appropriate." },
          ],
        },
      ],

      "Bias & Sampling": [
        {
          value: 100,
          question: "A researcher assigns every 10th person on an alphabetized list to participate in a survey. This sampling method is called this.",
          answer: "What is systematic random sampling?",
          solution: [
            { type: "text", content: "Systematic sampling: select every kth person from a list (here, every 10th person) after a random starting point." },
          ],
        },
        {
          value: 200,
          question: "A school reporter polls only students leaving the cafeteria about satisfaction with cafeteria food, then reports the findings as representative of the whole school. The main flaw is this type of bias.",
          answer: "What is undercoverage (or sampling bias)?",
          solution: [
            { type: "text", content: "Students who do not eat in the cafeteria are excluded from the sample. Since only cafeteria-goers are surveyed, the sample does not represent all students. This is undercoverage." },
          ],
        },
        {
          value: 300,
          question: "A polling company mails surveys to 5,000 households but only 800 respond. The results may be biased because responders may differ systematically from non-responders. This is called this type of bias.",
          answer: "What is non-response bias?",
          solution: [
            { type: "text", content: "Non-response bias: people who choose to respond may differ systematically from those who do not. With only 800 of 5,000 responding, the results may not represent the full group." },
          ],
        },
        {
          value: 400,
          question: "A researcher divides a city into zip-code areas, randomly selects 5 zip codes, and surveys every household in those zip codes. This sampling method is called this.",
          answer: "What is cluster sampling?",
          solution: [
            { type: "text", content: "Cluster sampling: randomly select entire groups (zip codes here), then survey everyone in the selected groups. In stratified sampling, you randomly sample from within each group rather than taking all members." },
          ],
        },
        {
          value: 500,
          question: "Researchers use the sample mean from 800 randomly selected carry-on bags to estimate mean weight. If they increase the sample size to 1,300 (all else equal), this describes what happens to the bias and variance of the estimator.",
          answer: "What is the bias stays the same and the variance decreases?",
          solution: [
            { type: "text", content: "The sample mean is always unbiased: E(x-bar) = mu regardless of n. Bias stays at 0." },
            { type: "text", content: "Variance = sigma² / n. As n increases from 800 to 1,300, the variance decreases." },
          ],
        },
      ],

      "Experimental Design": [
        {
          value: 100,
          question: "In a drug study, the group that receives an inactive substance designed to look like the real medication, to account for the placebo effect, is called this.",
          answer: "What is the control group (or placebo group)?",
          solution: [
            { type: "text", content: "The control group receives a placebo and serves as the baseline. It accounts for the placebo effect: improvement that occurs simply because subjects believe they are being treated." },
          ],
        },
        {
          value: 200,
          question: "The feature of a controlled experiment that allows researchers to draw cause-and-effect conclusions by balancing confounding variables between groups is this.",
          answer: "What is random assignment?",
          solution: [
            { type: "text", content: "Random assignment distributes confounding variables roughly equally across groups by chance. Any difference in outcomes can then be attributed to the treatment, establishing causation." },
          ],
        },
        {
          value: 300,
          question: "In a drug trial, neither the patients nor the evaluating physicians know who is receiving the drug or the placebo. This experimental design is called this.",
          answer: "What is double-blind?",
          solution: [
            { type: "text", content: "Double-blind: both subjects and evaluators are unaware of who received the treatment. Subjects blinded prevents the placebo effect. Evaluators blinded prevents observer bias." },
          ],
        },
        {
          value: 400,
          question: "A researcher plants 60 seeds: 30 randomly receive a new fertilizer and 30 receive none. After 8 weeks, mean growth is compared. The key feature that allows a causal conclusion about the fertilizer is this.",
          answer: "What is random assignment?",
          solution: [
            { type: "text", content: "Random assignment ensures the two groups are comparable at the start, balancing initial differences by chance. If a significant growth difference is found, it can be attributed to the fertilizer." },
          ],
        },
        {
          value: 500,
          question: "A researcher tests whether a sleep aid helps: each subject is tested once after the medication and once after a placebo, with the order randomized. Each subject acts as their own control in this experimental design.",
          answer: "What is a matched pairs design?",
          solution: [
            { type: "text", content: "Matched pairs: each subject receives both treatments in random order and serves as their own control. The analysis examines the within-person difference (treatment result minus placebo result), removing individual variability as a confounding factor." },
          ],
        },
      ],

      "Probability": [
        {
          value: 100,
          question: "The probability of rolling a number greater than 4 on a single fair six-sided die is this.",
          answer: "What is 1/3 (approximately 0.333)?",
          solution: [
            { type: "text", content: "Numbers greater than 4: {5, 6}. P(greater than 4) = 2/6 = 1/3 ≈ 0.333." },
          ],
        },
        {
          value: 200,
          question: "A store's records show that 1/4 of customers who visit the service department ask for help finding an item. Assuming independence, the probability that at least 1 of the next 4 customers asks for help is this.",
          answer: "What is 1 - (3/4)^4 ≈ 0.684?",
          solution: [
            { type: "text", content: "P(at least 1) = 1 - P(none ask for help) = 1 - (3/4)^4 = 1 - 81/256 ≈ 0.684." },
          ],
        },
        {
          value: 300,
          question: "In a class, 55% of students play a sport, 40% are in a school club, and 20% do both. The probability that a randomly selected student plays a sport or is in a club is this.",
          answer: "What is 0.75?",
          solution: [
            { type: "text", content: "P(A or B) = P(A) + P(B) - P(A and B) = 0.55 + 0.40 - 0.20 = 0.75." },
          ],
        },
        {
          value: 400,
          question: "Events A and B have P(A) = 0.4, P(B) = 0.5, and P(A and B) = 0.20. This is the relationship between A and B.",
          answer: "What is independent (A and B are independent events)?",
          solution: [
            { type: "text", content: "For independence, P(A and B) must equal P(A) x P(B). P(A) x P(B) = 0.4 x 0.5 = 0.20, which equals P(A and B) = 0.20. The events are independent." },
          ],
        },
        {
          value: 500,
          question: "According to a survey, 6% of workers arrive between 6:45 and 7:00 AM. If 300 workers are randomly selected and W is the number arriving in that window (independent arrivals), the standard deviation of W is closest to this value.",
          answer: "What is 4.11?",
          solution: [
            { type: "text", content: "W ~ Binomial(n = 300, p = 0.06)." },
            { type: "text", content: "SD = sqrt(np(1-p)) = sqrt(300 x 0.06 x 0.94) = sqrt(16.92) ≈ 4.11." },
          ],
        },
      ],
    },
  },

  round2: {
    label: "Double Jeopardy",
    pointValues: [200, 400, 600, 800, 1000],
    categories: [
      "Normal Dist & Sampling",
      "2-Var Quantitative Data",
      "Inference: Proportions",
      "Inference: Means",
      "Chi-Square Testing",
    ],
    questions: {
      "Normal Dist & Sampling": [
        {
          value: 200,
          question: "Scores on a standardized test are normally distributed with mean 500 and standard deviation 100. By the Empirical Rule, approximately this percentage of test-takers scored between 400 and 600.",
          answer: "What is 68%?",
          solution: [
            { type: "text", content: "400 = 500 - 100 = mu - 1 SD and 600 = 500 + 100 = mu + 1 SD. By the Empirical Rule, 68% of data falls within 1 standard deviation of the mean." },
          ],
        },
        {
          value: 400,
          question: "A population has mean mu = 50 and standard deviation sigma = 20. For random samples of size n = 25, this is the standard error of the sampling distribution of x-bar.",
          answer: "What is 4?",
          solution: [
            { type: "text", content: "Standard error = sigma / sqrt(n) = 20 / sqrt(25) = 20 / 5 = 4." },
          ],
        },
        {
          value: 600,
          question: "A fair six-sided die is rolled 15 times. The mean of the first 10 rolls is x-bar-1 and the mean of the remaining 5 rolls is x-bar-2. The mean of the sampling distribution of (x-bar-1 - x-bar-2) equals this value.",
          answer: "What is 0?",
          solution: [
            { type: "text", content: "For a fair die, mu = 3.5. Both groups have the same population mean, so mu(x-bar-1 - x-bar-2) = 3.5 - 3.5 = 0." },
          ],
        },
        {
          value: 800,
          question: "For the sampling distribution of the sample proportion p-hat to be approximately Normal, both of these two conditions involving n and p must be satisfied.",
          answer: "What is np >= 10 and n(1-p) >= 10 (the Large Counts condition)?",
          solution: [
            { type: "text", content: "Large Counts condition: np >= 10 and n(1-p) >= 10. When both are satisfied, the sampling distribution of p-hat is approximately Normal with mean p and SD = sqrt(p(1-p)/n)." },
          ],
        },
        {
          value: 1000,
          question: "A strongly right-skewed population has mean 100 and SD 30. This theorem guarantees that for large samples (n >= 30), the sampling distribution of x-bar is approximately Normal, regardless of the population shape.",
          answer: "What is the Central Limit Theorem (CLT)?",
          solution: [
            { type: "text", content: "CLT: for random samples of size n >= 30 from any population with mean mu and SD sigma, the sampling distribution of x-bar is approximately Normal with mean mu and standard error sigma / sqrt(n)." },
          ],
        },
      ],

      "2-Var Quantitative Data": [
        {
          value: 200,
          question: "A data set has: mean HS GPA = 3.45, mean College GPA = 3.10, Sx = 0.40, Sy = 0.55, r = 0.68. The slope of the LSRL for predicting college GPA from HS GPA equals this value.",
          answer: "What is 0.935?",
          solution: [
            { type: "text", content: "b = r x (Sy / Sx) = 0.68 x (0.55 / 0.40) = 0.68 x 1.375 = 0.935." },
            { type: "text", content: "a = y-bar - b(x-bar) = 3.10 - 0.935(3.45) = -0.126. LSRL: y-hat = -0.126 + 0.935x." },
          ],
        },
        {
          value: 400,
          question: "Using a regression model to make a prediction for an x-value that is far outside the range of observed data is called this.",
          answer: "What is extrapolation?",
          solution: [
            { type: "text", content: "Extrapolation: using a model to predict y for x-values outside the range of the observed data. The relationship may not hold beyond the data range, making the prediction unreliable." },
          ],
        },
        {
          value: 600,
          question: "A single data point that has an extreme x-value and substantially changes the slope or intercept of the regression line when included is called this type of point.",
          answer: "What is an influential point?",
          solution: [
            { type: "text", content: "An influential point has an extreme x-value and substantially changes the slope or intercept when included vs. excluded. Fit the LSRL with and without the point to check." },
          ],
        },
        {
          value: 800,
          question: "When a scatterplot shows an exponential curved relationship, a common transformation applied to the y-variable to linearize the data before regression is this.",
          answer: "What is a log transformation?",
          solution: [
            { type: "text", content: "Taking log(y) often straightens an exponential relationship. After transforming, check the residual plot of the new model for random scatter to confirm the transformation worked." },
          ],
        },
        {
          value: 1000,
          question: "A computer output shows t = 3.8 for the slope of the LSRL with p-value = 0.003. At alpha = 0.05, this is the correct conclusion about the population slope beta.",
          answer: "What is reject H0: there is convincing evidence of a linear relationship between x and y?",
          solution: [
            { type: "text", content: "H0: beta = 0. p-value = 0.003 < alpha = 0.05, so reject H0. There is convincing evidence that a linear relationship exists between the variables." },
          ],
        },
      ],

      "Inference: Proportions": [
        {
          value: 200,
          question: "In the U.S., 36% of people have blood type A positive. For a one-sample z-test using 150 Norwegians, the standard deviation used in the test statistic is this.",
          answer: "What is sqrt(0.36 x 0.64 / 150)?",
          solution: [
            { type: "text", content: "For a significance test, use the null hypothesis value p0 in the standard deviation: sqrt(p0(1-p0)/n) = sqrt(0.36 x 0.64 / 150) ≈ 0.039." },
          ],
        },
        {
          value: 400,
          question: "A 95% confidence interval for the proportion of voters supporting a candidate is (0.48, 0.56). This is the correct interpretation of this interval.",
          answer: "What is: we are 95% confident the true proportion of all voters who support the candidate is between 0.48 and 0.56?",
          solution: [
            { type: "text", content: "We are 95% confident the true population proportion falls between 0.48 and 0.56. The interval estimates the parameter, not individual voters." },
          ],
        },
        {
          value: 600,
          question: "In a sample of 150 Norwegians, 66 had blood type A positive. Before performing inference, you verify that 66 >= 10 and 84 >= 10. This is the name of the condition you just checked.",
          answer: "What is the Large Counts condition?",
          solution: [
            { type: "text", content: "Large Counts condition for a confidence interval: n(p-hat) >= 10 and n(1-p-hat) >= 10. Here: 66 >= 10 and 84 >= 10. Both pass, so the sampling distribution of p-hat is approximately Normal." },
          ],
        },
        {
          value: 800,
          question: "Students were randomly assigned to standard or adaptive practice. The 99% CI for the difference in passing proportions (standard minus adaptive) is (0.03, 0.24) and the 90% CI is (0.06, 0.21). At alpha = 0.05, this is the conclusion of the two-proportion z-test.",
          answer: "What is reject H0: convincing evidence that the passing proportions differ?",
          solution: [
            { type: "text", content: "Both CIs exclude 0. Since the 99% CI excludes 0, we reject H0 at alpha = 0.01, and therefore at alpha = 0.05 as well. There is convincing evidence that the passing proportions differ." },
          ],
        },
        {
          value: 1000,
          question: "Researchers test H0: pD = pP vs. Ha: pD > pP at alpha = 0.01 and get p-value = 0.12. If the drug actually works, the researcher's conclusion of 'no effect' constitutes this type of error.",
          answer: "What is a Type II error (failing to reject a false null hypothesis)?",
          solution: [
            { type: "text", content: "p = 0.12 > alpha = 0.01, so fail to reject H0. If the drug actually works, H0 is false, and failing to reject it is a Type II Error." },
            { type: "text", content: "Type I Error: rejecting a true H0. Type II Error: failing to reject a false H0. Power = 1 - P(Type II Error)." },
          ],
        },
      ],

      "Inference: Means": [
        {
          value: 200,
          question: "A 95% confidence interval for the mean weight of African bush elephants is (12.2, 14.6) thousand pounds. This is the correct interpretation of this interval.",
          answer: "What is: we are 95% confident the true mean weight of all African bush elephants is between 12.2 and 14.6 thousand pounds?",
          solution: [
            { type: "text", content: "We are 95% confident the true population mean weight falls between 12.2 and 14.6 thousand pounds. The interval is about the parameter, not individual elephants." },
          ],
        },
        {
          value: 400,
          question: "A one-sample t-test for means is conducted using a random sample of n = 30 students. The number of degrees of freedom used to find the p-value is this.",
          answer: "What is 29?",
          solution: [
            { type: "text", content: "df = n - 1 = 30 - 1 = 29." },
          ],
        },
        {
          value: 600,
          question: "68 volunteers are randomly split into two groups: one works standing, the other sitting. After 9 months, mean back problems are compared. The most appropriate inference procedure is this.",
          answer: "What is a two-sample t-test for a difference in means?",
          solution: [
            { type: "text", content: "Two separate independent groups, each receiving one treatment. The appropriate test is a two-sample t-test for mu1 - mu2. This is not matched pairs because each subject only experiences one condition." },
          ],
        },
        {
          value: 800,
          question: "A consumer group takes samples of 100 airplanes from each of two airlines and constructs a 95% CI for the difference in mean seat widths. If the sample size decreases to 50 per airline (all else equal), this is the effect on the confidence interval.",
          answer: "What is the interval becomes wider?",
          solution: [
            { type: "text", content: "Smaller n increases the standard error, which increases the margin of error, making the interval wider. Decreasing n from 100 to 50 means less precision." },
          ],
        },
        {
          value: 1000,
          question: "A sociologist compares salaries of bachelor's (x-bar = $55,000, s = $3,500, n = 32) and master's (x-bar = $58,000, s = $4,000, n = 28) degree holders. With H0: mu-M minus mu-B = 0, this is the correct formula for the two-sample t-test statistic.",
          answer: "What is t = (58,000 - 55,000) / sqrt(4,000² / 28 + 3,500² / 32)?",
          solution: [
            { type: "text", content: "t = (x-bar1 - x-bar2) / sqrt(s1²/n1 + s2²/n2) = (58,000 - 55,000) / sqrt(4000²/28 + 3500²/32)." },
            { type: "text", content: "= 3000 / sqrt(571,429 + 382,813) = 3000 / sqrt(954,241) ≈ 3000 / 977 ≈ 3.07. Add variances (s²/n), not standard deviations." },
          ],
        },
      ],

      "Chi-Square Testing": [
        {
          value: 200,
          question: "A chi-square test for homogeneity across four high schools comparing absentee rates gave a test statistic of 19.02 and p-value of 0.025. Assuming H0 states all schools have the same rates, this is the correct interpretation of the p-value.",
          answer: "What is: assuming absentee rates are the same for all four schools, there is a 2.5% probability of observing a test statistic of 19.02 or larger?",
          solution: [
            { type: "text", content: "The p-value assumes H0 is true. If absentee rates are equal across schools, a test statistic of 19.02 or larger would occur only 2.5% of the time. Since 0.025 < 0.05, reject H0." },
          ],
        },
        {
          value: 400,
          question: "In a chi-square test, the formula used to calculate each cell's contribution to the overall test statistic is this.",
          answer: "What is (Observed - Expected)² / Expected?",
          solution: [
            { type: "text", content: "chi² = sum of (O - E)² / E over all cells. Expected count = (row total x column total) / grand total." },
          ],
        },
        {
          value: 600,
          question: "A chi-square test of independence is conducted using a 4 by 3 contingency table. The degrees of freedom for this test equal this value.",
          answer: "What is 6?",
          solution: [
            { type: "text", content: "df = (rows - 1)(columns - 1) = (4 - 1)(3 - 1) = 3 x 2 = 6." },
          ],
        },
        {
          value: 800,
          question: "Before conducting a chi-square test, you must verify that all expected cell counts meet this minimum threshold.",
          answer: "What is all expected counts must be at least 5?",
          solution: [
            { type: "text", content: "Large Counts condition for chi-square: all expected cell counts must be at least 5. If this fails, combine categories or collect more data." },
          ],
        },
        {
          value: 1000,
          question: "A researcher surveys 200 randomly selected people, recording political affiliation (Dem/Rep/Ind) and stance on a policy (Support/Oppose). The null hypothesis for the appropriate chi-square test states this.",
          answer: "What is: there is no association between political affiliation and policy stance in the population?",
          solution: [
            { type: "text", content: "This is a chi-square test of independence. H0: no association between political affiliation and policy stance. Ha: there is an association. df = (3-1)(2-1) = 2." },
          ],
        },
      ],
    },
  },

  finalJeopardy: {
    category: "AP Statistics: Inference for Means",
    question: `<p class="fj-intro">A statistics teacher wants to know whether AP Statistics students study more hours per week, on average, than AP Calculus students. She selects random samples from each class at a large high school. Summary statistics are shown below:</p>

<table class="fj-table">
  <thead><tr><th>Group</th><th>Sample Size</th><th>Sample Mean</th><th>Sample SD</th></tr></thead>
  <tbody>
    <tr><td>AP Statistics</td><td>35</td><td>4.8 hrs</td><td>1.2 hrs</td></tr>
    <tr><td>AP Calculus</td><td>32</td><td>4.1 hrs</td><td>1.4 hrs</td></tr>
  </tbody>
</table>

<div class="fj-part"><span class="fj-part-label">(a)</span> State appropriate hypotheses (in symbols and words) for the teacher's significance test.</div>

<div class="fj-part"><span class="fj-part-label">(b)</span> Check the three conditions required to perform a two-sample t-test. State whether each is satisfied and why.</div>

<div class="fj-part"><span class="fj-part-label">(c)</span> Calculate the test statistic. Show all work.</div>

<div class="fj-part"><span class="fj-part-label">(d)</span> The p-value for this test is 0.022. At alpha = 0.05, state your conclusion in context. Also describe what a Type I error would mean in this situation.</div>`,

    solution: [
      {
        part: "a",
        label: "Part (a): Hypotheses",
        steps: [
          { type: "text", content: "Let mu_S = true mean weekly study hours for all AP Statistics students at this school." },
          { type: "text", content: "Let mu_C = true mean weekly study hours for all AP Calculus students at this school." },
          { type: "text", content: "H0: mu_S - mu_C = 0  (no difference in mean study hours)." },
          { type: "text", content: "Ha: mu_S - mu_C > 0  (AP Statistics students study more hours per week on average)." },
        ],
      },
      {
        part: "b",
        label: "Part (b): Conditions",
        steps: [
          { type: "text", content: "1. Random: both samples were randomly selected. Results can be generalized." },
          { type: "text", content: "2. Normal/Large Sample: both sample sizes are at least 30 (n = 35 and n = 32), so the CLT applies." },
          { type: "text", content: "3. Independent (10% condition): 35 is less than 10% of all AP Statistics students and 32 is less than 10% of all AP Calc students at a large high school. The two groups are independent of each other." },
          { type: "text", content: "All conditions are met. Proceed with a two-sample t-test." },
        ],
      },
      {
        part: "c",
        label: "Part (c): Test Statistic",
        steps: [
          { type: "text", content: "t = (x-bar_S - x-bar_C) / sqrt(s_S²/n_S + s_C²/n_C)" },
          { type: "text", content: "= (4.8 - 4.1) / sqrt(1.2²/35 + 1.4²/32)" },
          { type: "text", content: "= 0.7 / sqrt(1.44/35 + 1.96/32) = 0.7 / sqrt(0.04114 + 0.06125) = 0.7 / sqrt(0.10239)" },
          { type: "text", content: "= 0.7 / 0.320 ≈ 2.19. Conservative df = min(34, 31) = 31." },
        ],
      },
      {
        part: "d",
        label: "Part (d): Conclusion and Type I Error",
        steps: [
          { type: "text", content: "p-value = 0.022 < alpha = 0.05, so reject H0." },
          { type: "text", content: "At the 5% significance level, there is convincing evidence that AP Statistics students study more hours per week on average than AP Calculus students at this school." },
          { type: "text", content: "Type I Error in context: concluding that AP Statistics students study more hours per week than AP Calculus students when, in reality, there is no difference. The probability of this error equals alpha = 0.05." },
        ],
      },
    ],
    value: "Final",
  },
};

function formatStatSymbols(content = "") {
  return String(content)
    .replace(/\bx-bar-([12])\b/g, "x&#772;<sub>$1</sub>")
    .replace(/\bx-bar_([A-Z])\b/g, "x&#772;<sub>$1</sub>")
    .replace(/\bx-bar(\d)\b/g, "x&#772;<sub>$1</sub>")
    .replace(/\bx-bar\b/g, "x&#772;")
    .replace(/\by-bar\b/g, "y&#772;")
    .replace(/\by-hat\b/g, "y&#770;")
    .replace(/\bp-hat\b/g, "p&#770;")
    .replace(/\bmu_([A-Z])\b/g, "μ<sub>$1</sub>")
    .replace(/\bmu-([A-Z])\b/g, "μ<sub>$1</sub>")
    .replace(/\bmu(\d)\b/g, "μ<sub>$1</sub>")
    .replace(/\bmu\b/g, "μ")
    .replace(/\bn_([A-Z])\b/g, "n<sub>$1</sub>")
    .replace(/\bs_([A-Z])\b/g, "s<sub>$1</sub>")
    .replace(/\bp([A-Z])\b/g, "p<sub>$1</sub>")
    .replace(/\bsigma\b/g, "σ")
    .replace(/\balpha\b/g, "α")
    .replace(/\bbeta\b/g, "β")
    .replace(/\bp0\b/g, "p<sub>0</sub>")
    .replace(/\bH0\b/g, "H<sub>0</sub>")
    .replace(/\bHa\b/g, "H<sub>a</sub>")
    .replace(/\bsqrt\(([^)]*)\)/g, "√($1)")
    .replace(/\bgreater than\b/g, "&gt;")
    .replace(/\bless than\b/g, "&lt;")
    .replace(/>=/g, "&ge;")
    .replace(/<=/g, "&le;")
    .replace(/ < /g, " &lt; ")
    .replace(/ > /g, " &gt; ")
    .replace(/\bminus\b/g, "-")
    .replace(/(\d(?:\.\d+)?) x (?=\d)/g, "$1 &times; ")
    .replace(/(\d(?:\.\d+)?) x (?=IQR\b)/g, "$1 &times; ")
    .replace(/\b(P\([AB]\)) x (?=P\([AB]\))/g, "$1 &times; ")
    .replace(/\b(r) x (?=\()/g, "$1 &times; ")
    .replace(/\b(row total) x (?=column total)/g, "$1 &times; ");
}
