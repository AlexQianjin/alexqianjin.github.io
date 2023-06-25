---
title: VIM
description: vim commands
layout: ../../../layouts/MainLayout.astro
---

# Vim Commands

### vim
- :wq 保存并退出
- :q
- :x
- ZZ 保存并退出
- :q! 强制退出并忽略所有更改
- :e! 放弃所有修改，并打开原来文件
- 0 : 将光标移动到当前行首
- $ : s将光标移动到当前行尾
- G : s移动到这个文件的最后一行
- nG : n 为数字，移动到这个文件的第n行
- gg: s移动到这个文件的第一行 相当于 1G
- /word :  从光标开始，向下查询一个名为word的字符串。
- :n1、n2s/word1/word2/g : n1 与n2 为数字.在第n1与n2行之间寻找word1这个字符串, 并将该字符串替换为word2。
- :1、$s/word1/word2/g : 从第一行到最后一行寻找word1字符串，并将该字符串替换为word2
- :1、$s/word1/word2/gc: 从第一行到最后一行寻找word1字符串，并将该字符串替换为word2。 并且在替换之前显示提示符给用户确认（conform）是否需要替换。
- x,X  : 在一行中，x为向后删除一个字符（相当于del键），X为向前删除一个字符（相当于backspace键）。
- dd   : 删除光标所在的那一整行。
- ndd  : n 为数字。从光标开始，删除向下n列。
- yy   : 复制光标所在的那一行。   
- nyy  : n为数字。复制光标所在的向下n行。
- p,P  : p 为将已复制的数据粘贴到光标的下一行，P则为贴在光标的上一行。
- u    : 复原前一个操作
- CTRL + r : 重做上一个操作。
- 小数点'.': 重复前一个动作。
- :set number

### VI Editing commands
- i – Insert at cursor (goes into insert mode)
- a – Write after cursor (goes into insert mode)
- A – Write at the end of line (goes into insert mode)
- ESC – Terminate insert mode
- u – Undo last change
- U – Undo all changes to the entire line
- o – Open a new line (goes into insert mode)
- dd – Delete line
- 3dd – Delete 3 lines.
- D – Delete contents of line after the cursor
- C – Delete contents of a line after the cursor and insert new text. Press ESC key to end insertion.
- dw – Delete word
- 4dw – Delete 4 words
- cw – Change word
- x – Delete character at the cursor
- r – Replace character
- R – Overwrite characters from cursor onward
- s – Substitute one character under cursor continue to insert
- S – Substitute entire line and begin to insert at the beginning of the line
- ~ – Change case of individual character

#### Moving within a file
- k – Move cursor up
- j – Move cursor down
- h – Move cursor left
- l – Move cursor right

#### Saving and Closing the file
- Shift+zz – Save the file and quit
- :w – Save the file but keep it open
- :q – Quit without saving
- :wq – Save the file and quit

### Basic Commands
``` shell
i, I
change to insert mode

h, j, k, l
move left, down, up, right

w, b, e, ge
move word at a time

[n][action/movement]
do n times, e.g. 3w

x, X
remove a character

a, A
append

f[char]
move to next given char in line

F[char]
move to previous char in line

; and ,
repeat last f or F

/yourtext and then: n, N
Search text

d[movement]
delete by giving movement

r[char]
replaces character below cursor

0, $
move to start/end of line

o, O
add new line

%
Goto corresponding parentheses

ci[movement]
change inside of given movement

D
delete to end of line

S
clear current line; to insert mode

gg / G
move to start / end of buffer

yy
copy current line

p
Paste copied text after cursor.
```