# karpentranslator
### Translator on its own API
![Static Badge](https://img.shields.io/badge/karpen-karpentranslator-karpentranslator)
![GitHub top language](https://img.shields.io/github/languages/top/karpen-dev/karpentranslator)

## About
<img src="https://i.imgur.com/bHZ5K3A.png" />

### How to use the translator
To get translated text, just install the translator according to the guide below, select a language, enter the text to be translated, click on the button and get the translated text.

### How to use the api
After running server.py or server/server.exe, try accessing ```127.0.0.1:8000``` with a GET request ```q=``` text to translate and ```ol=``` destination language. There is no need to specify the source language; it is detected automatically. As a result, we receive the request ```http://127.0.0.1:8000/?q=hello&ol=ja```.

### Future versions
In the future I plan to improve the design, I am already working on adding all the languages ​​and other functions. If you want to look at test versions of the program, just download this repository and watch the changes.

### What's new v0.0.3
-  Fixed bugs in swapping
-  Temporarily removed the swap function for improvement
-  Rewrote the program in electron

## Installation guide
### Windows
-  Install node js and python
-  Open run.exe
### Linux
-  Install python3  
   Debian and Ubuntu ```sudo apt install python3```    
   Arch ```sudo pacman -S python3```      
-  Install pip   
   Debian and Ubuntu ```sudo apt install pip``` or ```... pip3```    
   Arch ```sudo pacman -S pip``` or ```... pip3```   
-  Instal requirements ```pip install -r requirements.txt``` or ```pip3 ...```    
-  Instal node js
-  Run run.sh ```./run.sh```   
### MacOS, Linux, Windows
-  Install python, node js and pip
-  Instal requirements ```pip install -r requirements.txt``` or ```pip3 ...```   
-  Open /public/index.html in your browser    
-  Run ```python server.py```