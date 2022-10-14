# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a gem?

Your answer: Besides being a geological wonder of the earth, gems are Ruby frameworks that will automatically add functionality to our code without us needing to do anything. The one I'm currently most familiar with is RSpec, which is a Ruby testing framework that's used to validate your code and ensure it's returning the output that you want it to. Frameworks like this are super helpful, and some other ones that I'm familiar with include React and Jest. (React is a JS testing framework, and React is a JS framework that allows us to easily build single-page web applications.)

////// I was on the right track, just realized that I got confused with Libraries vs. Frameworks. 😅 My Researched answer will be below. //////

Researched answer: Besides being a geological wonder of the earth, gems are Ruby libraries full of code that we can implement into our projects to add functionality without needing to do all of the work ourselves. These libraries are the foundations upon which popular frameworks like RSpec, Rails, and Jest are built. You can use gems without them belonging to a framework, though, and there are over 173,000 gems currently in existence.

2. What does the acronym CRUD stand for?

Your answer: The acronym CRUD stands for Create, Read, Update, Delete. CRUD is a very important acronym to web developers, because all of the data we interact with on the internet will have run through at least two of these actions in order to even reach us. In essence, everything we do online is performing a CRUD action, even if we don't realize it. Just by browsing the internet and clicking on a webpage, you're Reading the content, that was Created by someone, and has most likely been Edited or could be Deleted in the future.

Researched answer: In addition to my previous response, CRUD actions are often associated with back-end development and databases, because they are ultimately ways we can interact with stored data - and there's no model more popular for storing lots of data than tables, which are the foundation of databases.

3. What is Ruby on Rails?

Your answer: Ruby on Rails is a framework built to run on the programming language Ruby, which allows us to create and work with databases that can be connected to our front-end applications. Although I'm relatively new to using Rails, I know that there's a LOT of code at it's core, and the real 'magic' that makes it so popular is how it manages to effortlessly perform CRUD actions with very little code, so long as we follow a few syntactical rules.

Researched answer: In addition to my previous response, Rails uses the MVC (Model View Controller) pattern as its' architecture. When it generates an application, the Model is the data structure, the View is the displayed output on a webpage, and the Controller is what connects the two.

4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database where the values have some kind of connection to each other. Relational databases take on the form of what we're traditionally familiar with as tables, where each column provides a descriptive variable that we can then fill up with a row of data that pertains to each column. So, in a sense, the data is all related, and we could even have multiple tables with related data. There ARE non-relational databases, which don't take on the traditional look of a table and will typically just have a piece of data stored with some kind of primary key to access it with. Non-relational databases are great for storing things in more of a key:value format.

Researched answer: In addition to my previous answer, relational databases are also referred to as SQL databases. SQL is short for Structured Query Language, and it's what most relational databases are written in.

5. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers that are assigned to a column within your database, and used to make sure that every instance of a row is unique - even if two rows contain otherwise similar data. They are incredibly important, because without them, the only thing that's determining differences between your rows is simply the content within them. If you have more than one row with identical values that have NO primary key, there's no way to distinguish between them.

Researched answer: In addition to my previous answer, it's a fun fact to note that there are actually two types of primary keys: natural keys, and surrogate keys. Natural keys are a column (or a set of columns) that already exist in the table and will be a unique value, whereas a surrogate key is in itself a unique value and is usually automatically generated.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST is short for Representational State Transfer. RESTful routes are basically a set of rules which dictates how to connect HTTP verbs and CRUD actions.

2. JSON: Short for JavaScript Object Notation. It is a format that is used both for storing and transporting data, and is commonly used when data is being sent to a web page.

3. ERB: Short for Embedded Ruby. It's a template that's used to embed Ruby code into a text document.

4. Params: Params is another name for a method in ruby that returns an ActionController::Parameters object. It will essentially end up looking like a hash.

5. API: Short for Application Programming Interface. In essence, it's software that allows two different applications to talk to each other.
