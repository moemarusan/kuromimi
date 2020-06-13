---
title: 買ったばかりのMacの初期設定を忘れないうちにまとめとく
date: 2020-05-31
---

~~初代Johnnyがお亡くなりになってから1ヶ月、2代目Johnnyが晴れて我が家へやってきた。忘れないうちに初期設定をまとめとかなかったから今ちょっと困ってるので、まとめる。でももう近いうちに初期設定しなくちゃいけない状況になるのはやだなぁ。~~  

まさかこのあとすぐ初期不良で返品交換からの再設定になるとは思ってもいなかったのだよ、Johnny……  

## システム環境設定
- トラックパッド > ポイントとクリック > タップでクリックにチェック
- 共有 > コンピューター名をJohnnyへ変更
- キーボード > ショートカット > Spotlightのチェックをすべて外す
- キーボード > ショートカット > 入力ソース > 前の入力ソースを選択を⌘スペースに変更
- アクセシビリティ > ポインタコントロール > トラックパッドオプション > ドラッグを有効にするを3本指のドラッグに変更
- 一般 > アクセントカラーをいい感じの赤に変更
- Dock > 画面上の位置を右に変更
- Dock > Dockを自動的に表示/非表示にチェックを入れる

## 真っ先にDLしておく
- [Google Chrome ウェブブラウザ](https://www.google.co.jp/chrome/)
- [RememBear: The easiest way to remember passwords](https://www.remembear.com/)
- [Alfred - Productivity App for macOS](https://www.alfredapp.com/)
- [iTerm2 - macOS Terminal Replacement](https://www.iterm2.com/)
- [Visual Studio Code – コード エディター | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [AppCleaner](https://freemacsoft.net/appcleaner/)
- [バックアップと同期のダウンロード - 無料のクラウド ストレージ](https://www.google.com/intl/ja_ALL/drive/download/backup-and-sync/)

## iTerm
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
[macOS用パッケージマネージャー — Homebrew](https://brew.sh/index_ja)  
```shell
brew install nodebrew
mkdir -p ~/.nodebrew/src
nodebrew install-binary latest
nodebrew use latest
echo "export PATH=\$HOME/.nodebrew/current/bin:\$PATH" >> ~/.zshrc
node -v
npm -v
npm install -g gatsby-cli react reactdom vue
```
```shell
brew install pyenv
pyenv -v
pyenv install --list
pyenv install 3.8.2
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source ~/.zshrc
pyenv global 3.8.2
python --version 
>> Python 3.8.2
```

## Finder
- 一般 > 新規Finderウインドウで次を表示をホームディレクトリに変更  
- サイドバーをいい感じにいじる  
- 詳細 > 全てのファイル名拡張子を表示にチェック  
- 表示 > ツールバー・ステータスバーを表示

```shell
# 不可視ファイルを表示させる
defaults write com.apple.finder AppleShowAllFiles TRUE
killall Finder
```

## dotfiles
```shell
# ホームディレクトリ直下にcloneして、いい感じにシンボリックリンクを貼る
git clone https://github.com/moemarusan/.dotfiles.git
ln -s ~/.dotfiles/.zshrc ~
```

## AppStore
- LINE
- Facebook Messenger
- WinArchiver
- BarTunes
- Kindle
- slack
- Spark

## 追加でDL
- [Open Broadcaster Software®️ | OBS](https://obsproject.com/ja)
- [OBS Link – Setup – Elgato](https://help.elgato.com/hc/en-us/articles/360031363132-OBS-Link-Setup)
- [Adobe Creative Cloud](https://www.adobe.com/jp/creativecloud.html)
- [Office 365 ログイン | Microsoft Office](https://www.office.com/?omkt=ja-jp)
- [Video Conferencing, Web Conferencing, Webinars, Screen Sharing - Zoom](https://us02web.zoom.us/)
- [Discord — コミュニティの仲間と、友達と、おしゃべりしよう](https://discord.com/)
- [Chatwork | ビジネスコミュニケーションをこれ一つで](https://go.chatwork.com/ja/)
- [マカフィー | クラウド、エンドポイント、ウイルス対策用のセキュリティ ソリューション](https://www.mcafee.com/ja-jp/index.html)
- [ダウンロード | Steinberg](https://japan.steinberg.net/jp/support/downloads/ur242.html)
- [キヤノン：ダウンロード｜パーソナル向けスキャナー【CanoScan／IX】：機種を選ぶ](https://cweb.canon.jp/cgi-bin/download/select-product-by-catg.cgi?i_cd_pr_catg=005)