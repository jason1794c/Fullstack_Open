<!-- This mermaid diagram is for Exercise 0.4 -->
```mermaid
%% POST: https://fullstack-exampleapp.herokuapp.com/new_note
graph TD
    A[Enter text in textfield] --> B[Click Save]
    B --> C["POST: Create a new note"]