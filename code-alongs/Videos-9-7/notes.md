Scope: where a variable is declared and from where it can be accessed

Global Scope Variable: can be used anywhere in a code
  higher risk of variables being overwritten through overuse especially in large scripts

Local Scope Variable: only available within the locality of where its defined (code block)
  More favorable provides security to code
  functional scope: variable created inside a function


Why we don't use Var:
  IT DGAF about scope


  Module Scope: variables only available in a file/module unless exported out

  Block Scoping- easily identified by nesting within {} (local)

  Function Scope- a type of block scoping (both local) (var is a function level variable)


 HOISTING
  Default JavaScript behavior where Variables and Function declarations are moved to the top of their scope before code execution

  "variable life cycle"
  1) declaration- var author;
  2) Initialization- author = 'CS Lewis';
  3) Usage - console.log(author);

Declarations are hoisted to the top  but function expressions are initiliazations and not hoisted.


CLOSURES ???????
