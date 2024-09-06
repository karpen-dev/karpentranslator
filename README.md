# karpentranslator
### Translator on its own API
![Static Badge](https://img.shields.io/badge/karpen-karpentranslator-karpentranslator)
![GitHub top language](https://img.shields.io/github/languages/top/karpen-dev/karpentranslator)

## About
<img src="https://i.imgur.com/bHZ5K3A.png" />

### How to use the api
After running server.py or server/server.exe, try accessing ```127.0.0.1:8000``` with a GET request ```q=``` text to translate and ```ol=``` destination language. There is no need to specify the source language; it is detected automatically. As a result, we receive the request ```http://127.0.0.1:8000/?q=hello&ol=ja```.

## Installation guide
### Windows
-  Open your browser
-  Open run.exe
### Linux
-  Install python3  
   Debian and Ubuntu ```sudo apt install python3```    
   Arch ```sudo pacman -S python3```      
-  Install pip   
   Debian and Ubuntu ```sudo apt install pip``` or ```... pip3```    
   Arch ```sudo pacman -S pip``` or ```... pip3```   
-  Instal requirements ```pip install -r requirements.txt``` or ```pip3 ...```    
-  Open you browser   
-  Run run.sh ```./run.sh```   
### MacOS, Linux, Windows
-  Install python and pip
-  Instal requirements ```pip install -r requirements.txt``` or ```pip3 ...```   
-  Open /public/index.html in your browser    
-  Run ```python server.py```

## Как установить
### Windows
-  Откройте your browser
-  Запустите run.exe
### Linux
-  Установите python3  
   Debian and Ubuntu ```sudo apt install python3```    
   Arch ```sudo pacman -S python3```      
-  Установите pip   
   Debian and Ubuntu ```sudo apt install pip``` or ```... pip3```    
   Arch ```sudo pacman -S pip``` or ```... pip3```   
-  Установите небходимые библиотеки ```pip install -r requirements.txt``` or ```pip3 ...```    
-  Откройте ваш браузер   
-  Откройте run.sh ```./run.sh```   
### MacOS, Linux, Windows
-  Установите python и pip
-  Установите небходимые библиотеки ```pip install -r requirements.txt``` or ```pip3 ...```   
-  Откройте /public/index.html in your browser    
-  Запустите ```python server.py```   

## インストールガイド
### Windows
-  ブラウザを開きます
-  run.exeを開く
### Linux
-  Python3をインストールする  
   Debian and Ubuntu ```sudo apt install python3```    
   Arch ```sudo pacman -S python3```      
-  pipをインストールする   
   Debian and Ubuntu ```sudo apt install pip``` or ```... pip3```    
   Arch ```sudo pacman -S pip``` or ```... pip3```   
-  インストール要件 ```pip install -r requirements.txt``` or ```pip3 ...```    
-  ブラウザを開いてください   
-  run.sh を実行します ```./run.sh```   
### MacOS, Linux, Windows
-  Pythonとpipをインストールする
-  インストール要件 ```pip install -r requirements.txt``` or ```pip3 ...```   
-  ブラウザで /public/index.html を開きます    
-  走る ```python server.py```