# OrangeMoon-Frontend
Japanese Dictionary Web-App - Frontend (based on nodejs, bootstrap and angular)

# The Idea

The main goal is to implement a simple web-site which can be run on a private
web-server, which is able to provide an electronic Japanese dictionary. Another
point is to practice Japanese with it, and also to practice building architectures
and execution of coding projects.

This project has the idea to provide some kanji/kana to english translations and
uses some of the datasets jisho is using.

* But this project actually lacks most of the jisho.org features (https://jisho.org/docs)
  * like english to japanese translation
  * text reading assitance
  * inflection information
  * multiword search
  * search for jlpt and adjectives
  * search for grade 1 words / kanji
  * ...
  * this thing nearly lacks everything, for being useful

So this is basically a toy project which falls into multiple categories for me

* Architecture Kata
* Project Execution Kata
* Honing my Implementation Skills in different Programming Languages
* Japanese Language Learning Kata

Some of my ideas for implementation and features are already described in the 
README.md of the OrangeMoon-Backend project. Please check the other readme.

# The basic Architecture

This whole project consists of actually two projects, The OrangeMoon-Frontend 
project and the OrangeMoon-Backend project. This is the frontend project which 
needs npm, anglar and nodejs server for development, but can be compiled into 
javascript and hosted on something which is serving static files. The backend 
is quite primitive, but I don't care, because it is a single user environment.
I just want it to just work. There is basically no need for scale or something 
similar. At least not yet.

# MVP

* Selection of kanji by its radicals **[done]**
* input hiragana / katakana (via OS-IME) and lookup the word in the dictionary **[done]**
** lookup names, words and kanji **[done]**

# TODO

I will give it some thoughts, but at the moment I don't plan to implement too 
much. Maybe i will do the quiz mode next, but nothing too fancy.

# Nice to have

A combined input method of selection of kanji by radicals with the simple 
input field from the lookup page would be nice. Switching forth and back 
the pages is a bit annoying.

# God mode 

* Develop an IME for english/german-keyboard to japanese, without using the OS based IME
** An input field, which can be switched back between hiragana mode and western mode
** A mode where a kanji can be selected by radicals
** An NMT based transliteration from romaji to mixed hiragana, katakana, kanji    
