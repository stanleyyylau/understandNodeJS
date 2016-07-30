# Big Word Alerts

* Syntax Parsers
* Execution Contexts
* Lexical Environments
* Variable environments

**Syntax Parsers** : A program that reads your code and determines what it does and it its grammar is valid
Your code isn't magic. Someone else wrote a program to translate it for the computer.

![Syntax](https://stanleyyylau.gitbooks.io/weirdpartbook/content/sytac%20parser.jpg)


**Lexical Environment**: Where something sits physically in the code you write

'Lexical' means 'having to do with words or grammar'. A lexical environment exists in programming languages in which where you write something is important.
Execution Context: A wrapper to help manage the code that is running


**Execution Context**: A wrapper to help manage the code that is running

There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code.

**Variable environments**: where the variables live

**Dynamic typing**: you don't tell the engine what type of data a variable holds, it figures it out while your code is running
Variables can hold different types of values because it's all figured out during execution.
Java is **static typing**

**Operator**: a special function that is syntactically differently
Generally,operators take two parameters and return one result.+

**Operator precedence** : which opeatoro function gets called first
Functions are called in orders of precidence (higher precedence wins)

**Associativity**: what order operator functions get called in : left-to-right or right-to-left+

when functions have the same precedence

**Coercion**: converting a value from one type to another
This happens quite often in Javascript because it's dynamically typed.

	
