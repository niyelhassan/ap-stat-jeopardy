const gameData = {
  round1: {
    label: "Round 1",
    pointValues: [200, 400, 600, 800, 1000],
    categories: [
      "Exploring Data",
      "Probability",
      "Sampling & Design",
      "Bivariate Data",
    ],
    questions: {
      "Exploring Data": [
        {
          value: 200,
          question: "A distribution is described as having a long tail stretching to the right. What is the shape of this distribution?",
          answer: "Skewed right (positively skewed)",
          solution: [
            { type: "text", content: "A distribution is skewed right (positively skewed) when the tail stretches toward higher values on the right side." },
            { type: "text", content: "Key characteristics of a right-skewed distribution:" },
            { type: "bullets", content: ["Mean > Median > Mode", "The tail pulls the mean toward the right", "Most data is clustered on the left (lower values)"] },
            { type: "text", content: "Common real-world examples: income distributions, house prices, wait times." },
          ],
        },
        {
          value: 400,
          question: "The following data set represents test scores: 72, 85, 88, 90, 91, 95, 97. Find the IQR.",
          answer: "IQR = 95 − 85 = 10",
          solution: [
            { type: "text", content: "IQR = Q3 − Q1" },
            { type: "text", content: "Order the data: 72, 85, 88, 90, 91, 95, 97" },
            { type: "text", content: "Median = 90 (4th value)" },
            { type: "text", content: "Lower half: 72, 85, 88 → Q1 = 85" },
            { type: "text", content: "Upper half: 91, 95, 97 → Q3 = 95" },
            { type: "formula", content: "IQR = Q3 - Q1 = 95 - 85 = 10" },
          ],
        },
        {
          value: 600,
          question: "A data set has a mean of 50 and a standard deviation of 8. A value of 66 would be how many standard deviations above the mean?",
          answer: "2 standard deviations above the mean (z = 2)",
          solution: [
            { type: "text", content: "Use the z-score formula:" },
            { type: "formula", content: "z = (x - μ) / σ" },
            { type: "formula", content: "z = (66 - 50) / 8 = 16 / 8 = 2" },
            { type: "text", content: "A z-score of 2 means the value of 66 is 2 standard deviations above the mean." },
          ],
        },
        {
          value: 800,
          question: "A boxplot shows: Min = 10, Q1 = 25, Median = 40, Q3 = 55, Max = 90. Identify any outliers using the 1.5 × IQR rule.",
          answer: "No outliers — 90 < 82.5 is false, so 90 IS an outlier.",
          solution: [
            { type: "text", content: "Step 1: Find IQR" },
            { type: "formula", content: "IQR = Q3 - Q1 = 55 - 25 = 30" },
            { type: "text", content: "Step 2: Calculate fences" },
            { type: "formula", content: "Lower fence = Q1 - 1.5(IQR) = 25 - 45 = -20" },
            { type: "formula", content: "Upper fence = Q3 + 1.5(IQR) = 55 + 45 = 100" },
            { type: "text", content: "Step 3: Check values" },
            { type: "text", content: "Min = 10 > -20 ✓, Max = 90 < 100 ✓" },
            { type: "text", content: "No outliers exist. (Note: 90 is within the fence of 100.)" },
          ],
        },
        {
          value: 1000,
          question: "A teacher records the number of absences per student: 0, 0, 1, 2, 2, 3, 15. Explain why the median is a better measure of center than the mean for this data.",
          answer: "The outlier (15) pulls the mean up, making it unrepresentative. The median is resistant to outliers.",
          solution: [
            { type: "text", content: "Calculate mean:" },
            { type: "formula", content: "Mean = (0+0+1+2+2+3+15)/7 = 23/7 ≈ 3.29" },
            { type: "text", content: "Find median: ordered data → 0, 0, 1, 2, 2, 3, 15" },
            { type: "text", content: "Median = 2 (middle value)" },
            { type: "text", content: "The outlier 15 inflates the mean to ≈ 3.29, but 5 of 7 students had 2 or fewer absences." },
            { type: "text", content: "The median (2) better represents the typical student." },
            { type: "text", content: "Key principle: The median is resistant to outliers; the mean is not." },
          ],
        },
      ],
      "Probability": [
        {
          value: 200,
          question: "A bag contains 4 red and 6 blue marbles. What is the probability of drawing a red marble?",
          answer: "P(red) = 4/10 = 0.4",
          solution: [
            { type: "formula", content: "P(Event) = (# favorable outcomes) / (# total outcomes)" },
            { type: "formula", content: "P(red) = 4 / (4 + 6) = 4/10 = 0.4" },
          ],
        },
        {
          value: 400,
          question: "Events A and B are independent. P(A) = 0.3 and P(B) = 0.5. Find P(A and B).",
          answer: "P(A and B) = 0.15",
          solution: [
            { type: "text", content: "For independent events, the multiplication rule states:" },
            { type: "formula", content: "P(A and B) = P(A) × P(B)" },
            { type: "formula", content: "P(A and B) = 0.3 × 0.5 = 0.15" },
            { type: "text", content: "This rule only applies when events are independent — one event's outcome does not affect the other's probability." },
          ],
        },
        {
          value: 600,
          question: "In a class, 60% of students play sports (S) and 40% play an instrument (I). 25% play both. What is P(S or I)?",
          answer: "P(S or I) = 0.75",
          solution: [
            { type: "text", content: "Use the Addition Rule:" },
            { type: "formula", content: "P(A or B) = P(A) + P(B) - P(A and B)" },
            { type: "formula", content: "P(S or I) = 0.60 + 0.40 - 0.25 = 0.75" },
            { type: "text", content: "We subtract P(A and B) to avoid double-counting students who do both." },
          ],
        },
        {
          value: 800,
          question: "A two-way table shows: P(A) = 0.4, P(B|A) = 0.3. Find P(A and B).",
          answer: "P(A and B) = 0.12",
          solution: [
            { type: "text", content: "The General Multiplication Rule:" },
            { type: "formula", content: "P(A and B) = P(A) × P(B|A)" },
            { type: "formula", content: "P(A and B) = 0.4 × 0.3 = 0.12" },
            { type: "text", content: "P(B|A) is the conditional probability of B given A has already occurred." },
          ],
        },
        {
          value: 1000,
          question: "A test for a disease is 95% accurate. The disease affects 1% of the population. If a person tests positive, what is the approximate probability they actually have the disease? (Use Bayes' Theorem reasoning.)",
          answer: "≈ 16.1% (the base rate matters!)",
          solution: [
            { type: "text", content: "Define events: D = has disease, + = tests positive" },
            { type: "text", content: "Given: P(D) = 0.01, P(+|D) = 0.95, P(+|no D) = 0.05" },
            { type: "formula", content: "P(+) = P(+|D)P(D) + P(+|no D)P(no D)" },
            { type: "formula", content: "P(+) = (0.95)(0.01) + (0.05)(0.99) = 0.0095 + 0.0495 = 0.059" },
            { type: "formula", content: "P(D|+) = P(+|D)P(D) / P(+) = 0.0095 / 0.059 ≈ 0.161" },
            { type: "text", content: "Even with a 95% accurate test, only about 16% of positive testers actually have the disease when the disease is rare. This is why base rates matter!" },
          ],
        },
      ],
      "Sampling & Design": [
        {
          value: 200,
          question: "What type of bias occurs when a sample is chosen in a way that systematically favors certain outcomes over others?",
          answer: "Sampling bias",
          solution: [
            { type: "text", content: "Sampling bias occurs when the method of selecting the sample makes some individuals more likely to be chosen than others in a way that is unrepresentative." },
            { type: "text", content: "Common examples:" },
            { type: "bullets", content: ["Voluntary response bias: only motivated people respond", "Convenience sampling: only easily accessible subjects are sampled", "Undercoverage: some groups are systematically excluded"] },
          ],
        },
        {
          value: 400,
          question: "A researcher divides a population into subgroups by age, then randomly samples from each subgroup. What sampling method is this?",
          answer: "Stratified random sampling",
          solution: [
            { type: "text", content: "Stratified Random Sampling: Divide the population into groups (strata) based on a shared characteristic, then take a random sample from each stratum." },
            { type: "text", content: "Advantage: Ensures representation from each subgroup." },
            { type: "text", content: "Compare to:" },
            { type: "bullets", content: ["Simple random sample (SRS): every individual equally likely to be chosen", "Cluster sample: randomly select entire groups", "Systematic sample: every kth individual"] },
          ],
        },
        {
          value: 600,
          question: "An experiment randomly assigns subjects to treatment and control groups. What is the purpose of random assignment?",
          answer: "To create equivalent groups so that differences in outcomes can be attributed to the treatment (establishes causation).",
          solution: [
            { type: "text", content: "Random assignment serves to:" },
            { type: "bullets", content: ["Balance out confounding variables between groups", "Create groups that are roughly equivalent before treatment", "Allow us to conclude causation (not just association) if a difference is found"] },
            { type: "text", content: "Without random assignment, we can only establish association, not causation." },
            { type: "text", content: "Note: Random assignment ≠ random selection. Random selection → generalizable results. Random assignment → causal conclusions." },
          ],
        },
        {
          value: 800,
          question: "Describe the difference between an observational study and a controlled experiment, and explain which allows us to establish causation.",
          answer: "Experiments (with random assignment) establish causation; observational studies only show association.",
          solution: [
            { type: "text", content: "Observational Study: Researchers observe subjects without imposing a treatment. Confounding variables may explain results." },
            { type: "text", content: "Controlled Experiment: Researchers randomly assign subjects to treatment and control groups and impose a treatment." },
            { type: "text", content: "Only a well-designed experiment (with random assignment) allows us to establish a cause-and-effect relationship." },
            { type: "text", content: "Confounding variable: A variable associated with both the explanatory and response variable that may create a spurious relationship." },
          ],
        },
        {
          value: 1000,
          question: "A pharmaceutical company tests a new drug. Patients are randomly assigned to drug or placebo groups. Neither the patients nor the doctors know who received which. What is this design called and why is it used?",
          answer: "Double-blind randomized experiment — prevents placebo effect and observer bias.",
          solution: [
            { type: "text", content: "This is a double-blind experiment." },
            { type: "text", content: "Blind: Subjects don't know if they're receiving treatment or placebo → prevents placebo effect." },
            { type: "text", content: "Double-blind: Neither subjects nor evaluators know → prevents observer bias (evaluators' expectations from influencing measurements)." },
            { type: "text", content: "Placebo: An inactive treatment that looks like the real thing." },
            { type: "text", content: "Placebo effect: Subjects improve simply because they believe they are being treated." },
            { type: "text", content: "The random assignment still allows us to establish causation." },
          ],
        },
      ],
      "Bivariate Data": [
        {
          value: 200,
          question: "On a scatterplot, what does a correlation coefficient of r = −0.92 indicate?",
          answer: "A strong, negative linear relationship.",
          solution: [
            { type: "text", content: "The correlation coefficient r measures the strength and direction of a linear relationship." },
            { type: "text", content: "Direction: r = −0.92 is negative → as x increases, y tends to decrease." },
            { type: "text", content: "Strength: |r| = 0.92 is close to 1 → strong linear relationship." },
            { type: "text", content: "Interpreting r strength (general guidelines):" },
            { type: "bullets", content: ["|r| > 0.8: strong", "0.5 < |r| ≤ 0.8: moderate", "|r| ≤ 0.5: weak"] },
          ],
        },
        {
          value: 400,
          question: "The LSRL for predicting SAT score (y) from hours studied (x) is: ŷ = 400 + 20x. Interpret the slope.",
          answer: "For each additional hour studied, the predicted SAT score increases by 20 points.",
          solution: [
            { type: "text", content: "The slope (b = 20) represents the average change in the response variable (y) for each one-unit increase in the explanatory variable (x)." },
            { type: "text", content: "Template: 'For each additional [unit of x], the predicted [y] [increases/decreases] by [|slope|] [units of y].'" },
            { type: "text", content: "Interpretation: For each additional hour studied, the predicted SAT score increases by 20 points." },
            { type: "text", content: "Important: This is a prediction based on the model, not a guaranteed outcome." },
          ],
        },
        {
          value: 600,
          question: "A LSRL has r² = 0.81. Interpret this value in context if the model predicts weight from height.",
          answer: "About 81% of the variation in weight is explained by the linear relationship with height.",
          solution: [
            { type: "text", content: "r² (coefficient of determination) measures the proportion of variability in y that is explained by the linear relationship with x." },
            { type: "text", content: "r² = 0.81 means:" },
            { type: "text", content: "About 81% of the variation in weight is accounted for by the linear relationship with height." },
            { type: "text", content: "The remaining 19% is due to other factors not captured by the model." },
            { type: "text", content: "Template: 'About [r²%] of the variation in [y] is explained by the linear relationship with [x].'" },
          ],
        },
        {
          value: 800,
          question: "What is a residual? If the actual value is 85 and the predicted value is 79, what is the residual and what does it mean?",
          answer: "Residual = actual − predicted = 85 − 79 = 6. The model underpredicted by 6.",
          solution: [
            { type: "formula", content: "Residual = Actual (y) - Predicted (ŷ)" },
            { type: "formula", content: "Residual = 85 - 79 = +6" },
            { type: "text", content: "A positive residual means the actual value is above the predicted value — the model underpredicted." },
            { type: "text", content: "A negative residual means the actual value is below the predicted value — the model overpredicted." },
            { type: "text", content: "The LSRL minimizes the sum of squared residuals (SSE)." },
          ],
        },
        {
          value: 1000,
          question: "A residual plot shows a curved pattern (U-shape). What does this indicate about the linear model?",
          answer: "The linear model is NOT appropriate — a curved pattern indicates the relationship is non-linear.",
          solution: [
            { type: "text", content: "How to assess a residual plot:" },
            { type: "bullets", content: ["Random scatter around 0 → linear model is appropriate", "Curved/fan/pattern → linear model is NOT appropriate"] },
            { type: "text", content: "A U-shaped (curved) pattern in the residual plot means the relationship between x and y is non-linear." },
            { type: "text", content: "A fan-shaped pattern (residuals spread out) indicates non-constant variance (heteroscedasticity)." },
            { type: "text", content: "When a linear model is not appropriate, consider transforming the data (e.g., log or power transformations)." },
          ],
        },
      ],
    },
  },

  round2: {
    label: "Double Jeopardy",
    pointValues: [400, 800, 1200, 1600, 2000],
    categories: [
      "Exploring Data",
      "Normal Dist. & CLT",
      "Inference",
      "Chi-Square & Errors",
    ],
    questions: {
      "Exploring Data": [
        {
          value: 400,
          question: "A distribution has mean 70 and standard deviation 10. Data is transformed by the rule: new = 2x + 5. What are the new mean and standard deviation?",
          answer: "New mean = 145, New SD = 20",
          solution: [
            { type: "text", content: "Rules for linear transformations y = a + bx:" },
            { type: "bullets", content: ["New mean = a + b·(old mean)", "New SD = |b|·(old SD)", "Adding/subtracting a constant shifts center but does NOT change spread"] },
            { type: "formula", content: "New mean = 2(70) + 5 = 140 + 5 = 145" },
            { type: "formula", content: "New SD = |2| × 10 = 20" },
            { type: "text", content: "Note: Adding a constant (5) shifts the mean but does NOT affect the standard deviation." },
          ],
        },
        {
          value: 800,
          question: "Scores on two exams: Exam A (mean=70, SD=10), Exam B (mean=80, SD=5). Student X scored 85 on A; Student Y scored 88 on B. Who performed better relative to their class?",
          answer: "Student X (z = 1.5) performed better relative to class than Student Y (z = 1.6). Actually Y is better.",
          solution: [
            { type: "text", content: "Calculate z-scores to compare across different distributions." },
            { type: "formula", content: "z_X = (85 - 70) / 10 = 15/10 = 1.5" },
            { type: "formula", content: "z_Y = (88 - 80) / 5 = 8/5 = 1.6" },
            { type: "text", content: "Student Y has a higher z-score (1.6 > 1.5), meaning Student Y performed better relative to their class." },
            { type: "text", content: "Z-scores allow comparison of values from different distributions by standardizing them." },
          ],
        },
        {
          value: 1200,
          question: "Two variables X and Y have means μx=3, μy=5, and SDs σx=2, σy=4. If W = X + Y and the variables are independent, find the mean and SD of W.",
          answer: "μW = 8, σW = √20 ≈ 4.47",
          solution: [
            { type: "text", content: "Rules for combining independent random variables:" },
            { type: "formula", content: "μ(X+Y) = μX + μY = 3 + 5 = 8" },
            { type: "formula", content: "σ²(X+Y) = σ²X + σ²Y = 4 + 16 = 20" },
            { type: "formula", content: "σ(X+Y) = √20 = 2√5 ≈ 4.47" },
            { type: "text", content: "IMPORTANT: We add variances (σ²), NOT standard deviations. This only works when X and Y are independent." },
          ],
        },
        {
          value: 1600,
          question: "Compare the standard deviation to the IQR as measures of spread. When is each preferred?",
          answer: "SD with symmetric data/no outliers; IQR with skewed data or outliers (resistant measure).",
          solution: [
            { type: "text", content: "Standard Deviation (SD):" },
            { type: "bullets", content: ["Uses all data values", "Sensitive to outliers (not resistant)", "Best for symmetric, bell-shaped distributions", "Paired with the mean"] },
            { type: "text", content: "IQR (Interquartile Range):" },
            { type: "bullets", content: ["Uses only middle 50% of data", "Resistant to outliers", "Best for skewed distributions or data with outliers", "Paired with the median"] },
            { type: "text", content: "Rule of thumb: Use median + IQR for skewed data; mean + SD for symmetric data." },
          ],
        },
        {
          value: 2000,
          question: "A class has 30 students. Their test scores are roughly symmetric with mean 75 and SD 8. Estimate the number of students who scored between 59 and 91 using the Empirical Rule.",
          answer: "About 28–29 students (approximately 95% fall within 2 SDs: 59 to 91).",
          solution: [
            { type: "text", content: "Empirical Rule (68-95-99.7 Rule) for approximately normal distributions:" },
            { type: "bullets", content: ["68% of data falls within 1 SD of mean", "95% of data falls within 2 SDs of mean", "99.7% of data falls within 3 SDs of mean"] },
            { type: "formula", content: "Mean - 2SD = 75 - 2(8) = 75 - 16 = 59" },
            { type: "formula", content: "Mean + 2SD = 75 + 2(8) = 75 + 16 = 91" },
            { type: "text", content: "So 59 to 91 is within 2 standard deviations of the mean." },
            { type: "formula", content: "Number of students ≈ 0.95 × 30 = 28.5 ≈ 28 or 29 students" },
          ],
        },
      ],
      "Normal Dist. & CLT": [
        {
          value: 400,
          question: "Heights of adult men are normally distributed with mean 70 inches and SD 3 inches. What percent of men are shorter than 64 inches?",
          answer: "About 2.5% (z = −2, so approximately 2.5%)",
          solution: [
            { type: "formula", content: "z = (x - μ) / σ = (64 - 70) / 3 = -6/3 = -2" },
            { type: "text", content: "Using the Empirical Rule: 95% of data is between z = −2 and z = +2." },
            { type: "text", content: "So 5% is outside this range, and by symmetry, 2.5% is below z = −2." },
            { type: "text", content: "Alternatively, using a z-table or normalcdf on calculator: P(Z < −2) ≈ 0.0228 ≈ 2.3%." },
          ],
        },
        {
          value: 800,
          question: "State the Central Limit Theorem (CLT). What does it say about the sampling distribution of x̄?",
          answer: "As sample size increases, the sampling distribution of x̄ approaches Normal, regardless of the population shape.",
          solution: [
            { type: "text", content: "Central Limit Theorem (CLT):" },
            { type: "text", content: "If samples of size n are taken from a population with mean μ and SD σ, then the sampling distribution of x̄ has:" },
            { type: "bullets", content: ["Mean: μx̄ = μ", "SD (standard error): σx̄ = σ/√n", "Shape: Approximately Normal when n is large (n ≥ 30 is a common rule of thumb)"] },
            { type: "text", content: "The CLT works regardless of the shape of the original population, as long as n is large enough." },
            { type: "text", content: "If the original population is Normal, the sampling distribution is exactly Normal for any n." },
          ],
        },
        {
          value: 1200,
          question: "A population has mean μ = 50 and SD σ = 12. A random sample of n = 36 is taken. What is the probability that the sample mean x̄ is greater than 53?",
          answer: "P(x̄ > 53) ≈ 0.0668",
          solution: [
            { type: "text", content: "By CLT, the sampling distribution of x̄ is approximately Normal with:" },
            { type: "formula", content: "μx̄ = μ = 50" },
            { type: "formula", content: "σx̄ = σ/√n = 12/√36 = 12/6 = 2" },
            { type: "formula", content: "z = (x̄ - μx̄) / σx̄ = (53 - 50) / 2 = 3/2 = 1.5" },
            { type: "text", content: "P(x̄ > 53) = P(Z > 1.5)" },
            { type: "text", content: "Using z-table: P(Z > 1.5) = 1 - 0.9332 = 0.0668" },
            { type: "text", content: "Calculator: normalcdf(53, ∞, 50, 2) ≈ 0.0668" },
          ],
        },
        {
          value: 1600,
          question: "What conditions must be met to use a Normal approximation for a binomial distribution?",
          answer: "np ≥ 10 AND n(1-p) ≥ 10",
          solution: [
            { type: "text", content: "For the sampling distribution of p̂ (sample proportion):" },
            { type: "text", content: "The Normal approximation is appropriate when both conditions are met:" },
            { type: "formula", content: "np ≥ 10  (expected successes)" },
            { type: "formula", content: "n(1-p) ≥ 10  (expected failures)" },
            { type: "text", content: "When satisfied, p̂ is approximately Normal with:" },
            { type: "formula", content: "μp̂ = p" },
            { type: "formula", content: "σp̂ = √(p(1-p)/n)" },
            { type: "text", content: "Also check: 10% condition — n must be ≤ 10% of population for independence." },
          ],
        },
        {
          value: 2000,
          question: "A population is strongly right-skewed with mean 100 and SD 30. Explain how the sampling distribution of x̄ for n = 9 vs. n = 100 differs in shape, center, and spread.",
          answer: "n=9: still skewed, SE=10; n=100: approximately Normal (CLT), SE=3. Same center (μ=100).",
          solution: [
            { type: "text", content: "For n = 9:" },
            { type: "bullets", content: ["Center: μx̄ = 100", "Spread: σx̄ = 30/√9 = 10", "Shape: Still right-skewed (n is too small for CLT)"] },
            { type: "text", content: "For n = 100:" },
            { type: "bullets", content: ["Center: μx̄ = 100", "Spread: σx̄ = 30/√100 = 3", "Shape: Approximately Normal (CLT — n is large enough)"] },
            { type: "text", content: "As n increases: center stays the same, spread decreases (SE = σ/√n), shape becomes more Normal." },
          ],
        },
      ],
      "Inference": [
        {
          value: 400,
          question: "In a hypothesis test, what does a p-value of 0.03 mean?",
          answer: "If H₀ is true, there is a 3% probability of observing results as extreme or more extreme than what was observed.",
          solution: [
            { type: "text", content: "P-value definition: The probability of obtaining sample results at least as extreme as the observed results, assuming the null hypothesis (H₀) is true." },
            { type: "text", content: "p = 0.03 means: If H₀ were true, we'd only see results this extreme 3% of the time." },
            { type: "text", content: "Decision rule:" },
            { type: "bullets", content: ["If p ≤ α: Reject H₀ (statistically significant)", "If p > α: Fail to reject H₀ (not statistically significant)"] },
            { type: "text", content: "A small p-value is evidence against H₀, not proof that H₀ is false." },
          ],
        },
        {
          value: 800,
          question: "A 95% confidence interval for a population mean is (42, 58). Give a correct interpretation of this interval.",
          answer: "We are 95% confident that the true population mean is between 42 and 58.",
          solution: [
            { type: "text", content: "Correct interpretation: We are 95% confident that the true population mean falls between 42 and 58." },
            { type: "text", content: "What 95% confidence means: If we repeated this process many times, about 95% of the intervals constructed would capture the true parameter." },
            { type: "text", content: "Common WRONG interpretations:" },
            { type: "bullets", content: ["WRONG: There is a 95% probability that μ is between 42 and 58 (μ is fixed, not random)", "WRONG: 95% of data values fall between 42 and 58 (CI is about the parameter, not data)"] },
          ],
        },
        {
          value: 1200,
          question: "A survey of 400 students found 52% support a new policy. Construct a 95% confidence interval for the true proportion.",
          answer: "(0.471, 0.569) — We are 95% confident the true proportion is between 47.1% and 56.9%.",
          solution: [
            { type: "text", content: "Check conditions: Random ✓, n·p̂ = 400(0.52) = 208 ≥ 10 ✓, n(1-p̂) = 192 ≥ 10 ✓, 10% condition ✓" },
            { type: "formula", content: "p̂ = 0.52, n = 400, z* = 1.96 (for 95%)" },
            { type: "formula", content: "SE = √(p̂(1-p̂)/n) = √(0.52 × 0.48 / 400) = √(0.000624) ≈ 0.02498" },
            { type: "formula", content: "ME = z* × SE = 1.96 × 0.02498 ≈ 0.049" },
            { type: "formula", content: "CI: p̂ ± ME = 0.52 ± 0.049 = (0.471, 0.569)" },
            { type: "text", content: "Interpretation: We are 95% confident the true proportion of students who support the policy is between 47.1% and 56.9%." },
          ],
        },
        {
          value: 1600,
          question: "A one-sample t-test gives t = 2.4 with 24 degrees of freedom. Using α = 0.05 (two-tailed), state your conclusion.",
          answer: "The p-value ≈ 0.025 < 0.05. Reject H₀. There is statistically significant evidence that μ ≠ the hypothesized value.",
          solution: [
            { type: "text", content: "Given: t = 2.4, df = 24, two-tailed test, α = 0.05" },
            { type: "text", content: "Find p-value: For t = 2.4 with df = 24 (two-tailed):" },
            { type: "text", content: "Using t-table or tcdf: p-value ≈ 0.025" },
            { type: "text", content: "Decision: p-value (0.025) < α (0.05) → Reject H₀" },
            { type: "text", content: "Conclusion: There is statistically significant evidence at the α = 0.05 level that the population mean differs from the hypothesized value." },
            { type: "text", content: "Remember: Always state conclusions in context!" },
          ],
        },
        {
          value: 2000,
          question: "Describe the four-step process for a significance test. List all conditions required for a one-sample t-test for means.",
          answer: "State, Plan (conditions), Do (test statistic), Conclude. Conditions: Random, Normal/Large Sample, Independent (10%).",
          solution: [
            { type: "text", content: "Four-Step Process:" },
            { type: "bullets", content: ["STATE: H₀ and Hₐ in context; define the parameter; state α", "PLAN: Name the test; check conditions", "DO: Calculate test statistic and p-value", "CONCLUDE: Compare p to α; state decision; interpret in context"] },
            { type: "text", content: "Conditions for one-sample t-test for means:" },
            { type: "bullets", content: ["Random: Data comes from a random sample or randomized experiment", "Normal/Large Sample: Population is Normal OR n ≥ 30 (CLT)", "Independent: n ≤ 10% of population (when sampling without replacement)"] },
            { type: "formula", content: "t = (x̄ - μ₀) / (s/√n)  with df = n - 1" },
          ],
        },
      ],
      "Chi-Square & Errors": [
        {
          value: 400,
          question: "What is the difference between a Type I and Type II error in hypothesis testing?",
          answer: "Type I: Reject H₀ when it's true (false positive). Type II: Fail to reject H₀ when it's false (false negative).",
          solution: [
            { type: "text", content: "Type I Error (α):" },
            { type: "bullets", content: ["Rejecting H₀ when H₀ is actually TRUE", "Also called a 'false positive'", "Probability = α (significance level)"] },
            { type: "text", content: "Type II Error (β):" },
            { type: "bullets", content: ["Failing to reject H₀ when H₀ is actually FALSE", "Also called a 'false negative'", "Probability = β"] },
            { type: "text", content: "Power = 1 - β = probability of correctly rejecting a false H₀." },
            { type: "text", content: "Trade-off: Decreasing α increases β (and decreases power)." },
          ],
        },
        {
          value: 800,
          question: "A chi-square goodness-of-fit test is conducted with 5 categories and α = 0.05. The test statistic is χ² = 9.49. What is the conclusion?",
          answer: "df = 4, critical value = 9.488. χ² = 9.49 > 9.488 → Reject H₀.",
          solution: [
            { type: "text", content: "For a chi-square goodness-of-fit test:" },
            { type: "formula", content: "df = (number of categories) - 1 = 5 - 1 = 4" },
            { type: "text", content: "Critical value: χ²(4, 0.05) = 9.488" },
            { type: "text", content: "Test statistic χ² = 9.49 > 9.488 (critical value)" },
            { type: "text", content: "Decision: Reject H₀" },
            { type: "text", content: "Conclusion: There is statistically significant evidence at α = 0.05 that the distribution of the variable does not match the hypothesized distribution." },
          ],
        },
        {
          value: 1200,
          question: "A chi-square test for association uses a 3×4 table. What are the degrees of freedom?",
          answer: "df = (3-1)(4-1) = 2 × 3 = 6",
          solution: [
            { type: "text", content: "For a chi-square test of association/independence using a two-way table:" },
            { type: "formula", content: "df = (rows - 1)(columns - 1)" },
            { type: "formula", content: "df = (3 - 1)(4 - 1) = (2)(3) = 6" },
            { type: "text", content: "The expected cell count formula:" },
            { type: "formula", content: "Expected = (row total × column total) / grand total" },
            { type: "text", content: "Condition: All expected counts ≥ 5 (or at least 80% of expected counts ≥ 5)." },
            { type: "formula", content: "χ² = Σ (Observed - Expected)² / Expected" },
          ],
        },
        {
          value: 1600,
          question: "How does increasing sample size affect the power of a test, and what does 'power' mean?",
          answer: "Larger n → higher power. Power = P(reject H₀ | H₀ is false) = 1 - β.",
          solution: [
            { type: "text", content: "Power = P(correctly rejecting H₀ when H₀ is false) = 1 − β" },
            { type: "text", content: "Ways to increase power:" },
            { type: "bullets", content: ["Increase sample size n (most effective)", "Increase significance level α (but raises Type I error risk)", "Decrease variability (σ) in the population", "Increase the effect size (true difference from H₀)"] },
            { type: "text", content: "Effect of larger n: Smaller standard error → test statistic is farther from zero → more likely to reject H₀ when it's false." },
            { type: "text", content: "Trade-off: Higher power (lower β) often means higher Type I error (higher α), unless n is increased." },
          ],
        },
        {
          value: 2000,
          question: "A survey asks 200 randomly selected people their political affiliation (Dem/Rep/Ind) and their stance on an issue (Support/Oppose). Describe the complete hypothesis test setup for a chi-square test of association.",
          answer: "H₀: No association; Hₐ: Association exists. Check conditions, compute χ², find p-value, conclude.",
          solution: [
            { type: "text", content: "STATE:" },
            { type: "text", content: "H₀: There is no association between political affiliation and stance on the issue in the population." },
            { type: "text", content: "Hₐ: There is an association between political affiliation and stance on the issue in the population." },
            { type: "text", content: "PLAN — Chi-Square Test of Association. Check conditions:" },
            { type: "bullets", content: ["Random: Random sample ✓", "Large counts: All expected counts ≥ 5", "Independent: 200 ≤ 10% of population ✓"] },
            { type: "formula", content: "df = (3-1)(2-1) = 2" },
            { type: "text", content: "DO: Calculate expected counts, compute χ² = Σ(O-E)²/E, find p-value." },
            { type: "text", content: "CONCLUDE: If p ≤ α, reject H₀ and conclude there is evidence of an association. If p > α, fail to reject H₀." },
          ],
        },
      ],
    },
  },

  finalJeopardy: {
    category: "AP Statistics Free Response",
    question: `<p class="fj-intro">A college admissions office is studying the relationship between high school GPA (x) and first-year college GPA (y) for a random sample of 120 students. Summary statistics are shown below:</p>

<table class="fj-table">
  <thead><tr><th>Variable</th><th>Mean</th><th>SD</th></tr></thead>
  <tbody>
    <tr><td>HS GPA (x)</td><td>3.45</td><td>0.40</td></tr>
    <tr><td>College GPA (y)</td><td>3.10</td><td>0.55</td></tr>
  </tbody>
</table>

<p style="text-align:center; font-style:italic; color:#64748b; margin:0.5rem 0 1.5rem;">The correlation between HS GPA and college GPA is r = 0.68.</p>

<div class="fj-part"><span class="fj-part-label">(a)</span> Find the equation of the least-squares regression line for predicting college GPA from high school GPA. Show all work.</div>

<div class="fj-part"><span class="fj-part-label">(b)</span> Interpret the slope of the regression line in context.</div>

<div class="fj-part"><span class="fj-part-label">(c)</span> Calculate and interpret r² in context.</div>

<div class="fj-part"><span class="fj-part-label">(d)</span> A student had a high school GPA of 4.0. The admissions model predicts their college GPA. Calculate the prediction and identify one reason to be cautious about this prediction.</div>`,

    solution: [
      {
        part: "a",
        label: "Part (a): Finding the LSRL",
        steps: [
          { type: "text", content: "The LSRL has the form: ŷ = a + bx" },
          { type: "formula", content: "Slope: b = r × (Sy / Sx) = 0.68 × (0.55 / 0.40)" },
          { type: "formula", content: "b = 0.68 × 1.375 = 0.935" },
          { type: "formula", content: "Intercept: a = ȳ - b·x̄ = 3.10 - (0.935)(3.45)" },
          { type: "formula", content: "a = 3.10 - 3.226 = -0.126" },
          { type: "formula", content: "LSRL: ŷ = -0.126 + 0.935x" },
        ],
      },
      {
        part: "b",
        label: "Part (b): Interpreting the Slope",
        steps: [
          { type: "text", content: "Slope = 0.935" },
          { type: "text", content: "Interpretation: For each additional point in high school GPA, the predicted first-year college GPA increases by 0.935 points, on average." },
          { type: "text", content: "Key elements of a good slope interpretation:" },
          { type: "bullets", content: ["State the direction (increases/decreases)", "State the rate (0.935 points)", "Mention 'predicted' or 'on average'", "Include context (both variables named)"] },
        ],
      },
      {
        part: "c",
        label: "Part (c): Calculating and Interpreting r²",
        steps: [
          { type: "formula", content: "r² = (0.68)² = 0.4624 ≈ 0.462" },
          { type: "text", content: "Interpretation: About 46.2% of the variation in first-year college GPA is explained by the linear relationship with high school GPA." },
          { type: "text", content: "The remaining 53.8% of the variation in college GPA is due to other factors not accounted for by this model." },
        ],
      },
      {
        part: "d",
        label: "Part (d): Prediction and Caution",
        steps: [
          { type: "formula", content: "ŷ = -0.126 + 0.935(4.0) = -0.126 + 3.74 = 3.614" },
          { type: "text", content: "Predicted college GPA = 3.614" },
          { type: "text", content: "Reason for caution (choose one):" },
          { type: "bullets", content: [
            "Extrapolation: If HS GPA = 4.0 is at the edge of the data range, we are extrapolating beyond the observed data, making the prediction less reliable.",
            "r² = 0.462, meaning only 46.2% of variation in college GPA is explained by HS GPA — substantial variability remains.",
            "The model predicts based on correlation, but other factors (major difficulty, work hours, etc.) also influence college GPA."
          ]},
        ],
      },
    ],
    value: "Final",
  },
};
