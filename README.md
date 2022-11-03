#### Dockerを使ったPHPローカル開発環境
****
Dockerのインストールがまだの人は下記を参考に自身のPCに導入してください

##### Dockerを導入しよう [Windows 10版]
https://dotinstall.com/lessons/basic_dockerdesktop_win

##### Dockerを導入しよう [macOS版]
https://dotinstall.com/lessons/basic_dockerdesktop_mac_v2
****
##### コンテナの導入／起動（初回のみ）※Dockerが正常に起動した状態で行ってください
```
git clone git@github.com:KT0717/docker_php.git
cd docker_php
docker-compose up -d
```
##### 初回以降は docker_php ディレクトリで下記コマンドでコンテナを起動させるだけ
```
docker-compose up -d
```
****
#### 開発中のアプリのソースをクローン
docker_php ディレクトリで下記コマンドでソースをクローンしてください
```
mkdir src && src
git clone git@github.com:KT0717/myapp.git .
```
****
#### ローカルURL
http://localhost:8080/
